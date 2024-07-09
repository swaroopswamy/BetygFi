/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";
import { Box, useDisclosure, useMediaQuery, useToast, } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { signOut, useSession } from "next-auth/react";
import { LogInFromCookie, StoreLoggedInUserDataGoogle, ResetValidatedUserData, socialLoginGoogle, verifyJWTtokenFromCookie, LogoutReducer, } from "@redux/auth_data/authSlice";
import { API_URL_COOKIE_NAME, AUTH_COOKIE_NAME, NTF_URL_COOKIE_NAME } from "@util/constant";
import { createCookies, getCookieByName } from "@util/cookieHelper";
import isEmpty from "lodash/isEmpty";
import { useAccount, useDisconnect } from "wagmi";
import { watchAccount } from '@wagmi/core';
import { config } from "./Web3Provider";

import AppConfigContext from "@components/context/appConfigContext";
import { getEnv, mapTypeObject, replaceWithWS } from "@util/utility";
import useSocket from "@hooks/useSocket";
import { getAllPublicNotifications, /* getAllUserNotificationsByUserId, */ notificationsReducer } from "@redux/app_data/dataSlice";
import dynamic from "next/dynamic";

import Footer from "@components/footer";
import SidebarContent from "@components/sidebar";
import Navbar from "@components/header";
import { usePathname } from "next/navigation";
import CampaignPage from "./campaign/page";
/* const Footer = dynamic(() => import("@components/footer"), { ssr: false });
const SidebarContent = dynamic(() => import("@components/sidebar"), { ssr: false });
const Navbar = dynamic(() => import("@components/header"), { ssr: false });
 */
const NotificationDrawer = dynamic(() => import("@components/notification/drawer"), { ssr: false });
const CustomToast = dynamic(() => import("@components/toast"), { ssr: false });


export default function LayoutProvider({ appConfig, children }) {
    const dispatch = useDispatch();
    const { /* onOpen, */ onClose } = useDisclosure();
    const [isMd] = useMediaQuery("(min-width: 768px)");
    const { disconnect } = useDisconnect();
    const toast = useToast();
    const { data: AuthSession, status, update } = useSession();
    const [messageSent, setMessageSent] = useState(false);
    const [isUser, setIsUser] = useState(false);

    const isSidebarCollapsed = useSelector((state) => state?.appData?.isSidebarCollapsed);
    const isMobileSidebarCollapsed = useSelector((state) => state?.appData?.isMobileSidebarCollapsed);
    const GoogleVerifiedData = useSelector((state) => state.authData.GoogleVerifiedData);
    const ValidatedUserData = useSelector((state) => state.authData.ValidatedUserData);
    const LoggedInData = useSelector((state) => state.authData.LoggedInData);

    const { address } = useAccount();
    const pathname = usePathname();

    const {
        isOpen: isNotificationDrawerOpen,
        onOpen: onNotificationDrawerOpen,
        onClose: onNotificationDrawerClose,
    } = useDisclosure();

    const Notifications = useSelector((state) => state?.appData?.Notifications);
    const notificationRecievedFromSocket = useSelector((state) => state?.appData?.notificationRecievedFromSocket);
    // Callback function to handle incoming messages
    const handleReceivedMessage = (message) => {
        if (message) {
            dispatch(notificationsReducer(JSON?.parse(message)));
        }
    };

    useSocket(replaceWithWS(typeof window !== "undefined" && window.location.origin + "/" + getEnv(window.location.hostname) + '/notification'), handleReceivedMessage);

    // it is used to verify and validate token this will return user details and initiate Sign In
    const verifyJWTtokenFromCookieHandler = (cookie) => {
        if (cookie?.state?.token) {
            const payload = {
                token: cookie?.state?.token,
            };
            dispatch(verifyJWTtokenFromCookie(payload));
        }
    };

    // we need this useEffect only when google Auth is initiated
    useEffect(() => {
        if (localStorage.getItem("googleAuthInitiated") === "true") {
            if (AuthSession === null) {
                localStorage.setItem("googleAuthInitiated", false);
            } else {
                if (AuthSession?.id_token) {
                    if (!getCookieByName(AUTH_COOKIE_NAME)) {
                        const payload = {
                            token: AuthSession?.id_token,
                        };
                        dispatch(socialLoginGoogle(payload));
                    }
                } else {
                    if (AuthSession?.provider !== 'credentials') {
                        if (AuthSession?.user?.name) {
                            update();
                        }
                    } else {
                        localStorage.setItem("googleAuthInitiated", false);
                    }
                }
            }
        }
    }, [AuthSession]);

    // we need this useEffect for detecting change in session when visibility is changed
    useEffect(() => {
        const visibilityHandler = async () => {
            if (document.visibilityState === "visible") {
                if (
                    localStorage.getItem("googleAuthInitiated") === "false" ||
                    localStorage.getItem("googleAuthInitiated") === null
                ) {
                    const cookie = getCookieByName(AUTH_COOKIE_NAME);
                    // checking autheticated or not
                    if (status === "authenticated") {
                        // someone logsout from other microservice
                        if (isEmpty(cookie)) {
                            disconnect();
                            signOut({ callbackUrl: appConfig.NEXTAUTH_URL });
                        } else {
                            // here we need to check if the user has logged in from same account
                            verifyJWTtokenFromCookieHandler(cookie);
                        }
                    } else {
                        // if not authenticated and no cookie is present means no user
                        // if cookie is present means user logged in from somewhere else
                        if (!isEmpty(cookie)) {
                            verifyJWTtokenFromCookieHandler(cookie);
                        }
                    }
                }
            }
        };
        window.addEventListener("visibilitychange", visibilityHandler, false);

        return () =>
            window.removeEventListener(
                "visibilitychange",
                visibilityHandler,
                false
            );
    }, [update]);

    //useEffect to check auth on mount
    useEffect(() => {
        createCookies(API_URL_COOKIE_NAME, appConfig.API_SERVICE_URL);
        createCookies(NTF_URL_COOKIE_NAME, appConfig.NEXT_PUBLIC_SOCKET_HOST);
        checkIfVerifiedOrNot();
        manageOnlineOfflineStatus();
        window.appConfig = mapTypeObject(appConfig);
    }, []);

    // for creating cookie after google sign in is successful
    useEffect(() => {
        if (GoogleVerifiedData.isSuccess) {
            dispatch(StoreLoggedInUserDataGoogle());
            localStorage.setItem("googleAuthInitiated", false);
        } else if (GoogleVerifiedData?.isError) {
            localStorage.setItem("googleAuthInitiated", false);
            toast({
                position: "bottom",
                render: () => (
                    <CustomToast
                        isSuccessful={false}
                        content={"Google login failed."}
                    />
                ),
            });
            setTimeout(() => {
                signOut({ callbackUrl: appConfig.NEXTAUTH_URL });
            }, 2000);
        }
        if (GoogleVerifiedData?.isCookieSet) {
            checkIfVerifiedOrNot();
        }
    }, [GoogleVerifiedData]);

    useEffect(() => {
        if (ValidatedUserData?.isSuccess) {
            if (
                status === "unauthenticated" ||
                (AuthSession?.user?.name !==
                    ValidatedUserData?.data?.user_name &&
                    AuthSession?.user?.name !==
                    ValidatedUserData?.data?.public_address)
            ) {
                dispatch(LogInFromCookie());
            }
        } else if (ValidatedUserData?.isError) {
            toast({
                position: "bottom",
                render: () => (
                    <CustomToast
                        isSuccessful={false}
                        content={"Social Login failed."}
                    />
                ),
            });
            setTimeout(() => {
                dispatch(ResetValidatedUserData());
            }, 200);
            disconnect();
            setTimeout(() => {
                dispatch(LogoutReducer());
                setTimeout(() => {
                    signOut({ callbackUrl: appConfig.NEXTAUTH_URL });
                }, 200);
            }, 100);
        }
    }, [dispatch, ValidatedUserData]);

    const checkIfVerifiedOrNot = () => {
        const cookie = getCookieByName(AUTH_COOKIE_NAME);
        if (!isEmpty(cookie)) {
            verifyJWTtokenFromCookieHandler(cookie);
        } else {
            if (status === "authenticated") {
                if ([null, "false"].includes(localStorage.getItem("googleAuthInitiated"))) {
                    signOut({ callbackUrl: appConfig.NEXTAUTH_URL });
                }
            }
        }
    };

    const manageOnlineOfflineStatus = () => {
        window.addEventListener('online', function () {
            toast({
                position: "bottom", render: () => <CustomToast isSuccessful={true} content={'Internet connection is back :)'} />
            });
        }, false);

        window.addEventListener('offline', function () {
            toast({
                position: "bottom",
                render: () => (
                    <CustomToast
                        isSuccessful={false}
                        content={"Internet connection is down :("}
                    />
                ),
            });
        }, false);
    };

    React.useEffect(() => {
        const unwatch = watchAccount(config, {
            onChange(data) {

                if (AuthSession) {
                    if (data?.address !== address) {
                        disconnect();
                        setTimeout(() => {
                            dispatch(LogoutReducer());
                            setTimeout(() => {
                                signOut({ callbackUrl: appConfig.NEXTAUTH_URL });
                            }, 200);
                        }, 100);
                    }
                }
            },
        });

        // Cleanup by calling unwatch to unsubscribe from the account change event
        return () => unwatch();
    }, [address]);

    const getAllPublicNotificationsHandler = () => {
        dispatch(getAllPublicNotifications());
    };
    /* const getAllUserNotificationsByUserIdHandler = () => {
        const payload = {
            id: ValidatedUserData?.data?.id
        };
        if (isUser) {
            dispatch(getAllUserNotificationsByUserId(payload));
        }
    }; */



    useEffect(() => {
        /* const cookie = getCookieByName(AUTH_COOKIE_NAME);
        if (!isEmpty(cookie)) {
            getAllUserNotificationsByUserIdHandler();
        } else { */
        getAllPublicNotificationsHandler();
        //}
    }, [notificationRecievedFromSocket, isUser]);

    useEffect(() => {
        if (AuthSession) {
            if (messageSent === false && ValidatedUserData.data?.id) {
                //sendMessage(ValidatedUserData?.data?.id);
                setMessageSent(true);
            }
            if (isUser === false && ValidatedUserData?.data !== null) {
                setIsUser(true);
            }
        }

    }, [ValidatedUserData]);

    useEffect(() => {
        if (LoggedInData && LoggedInData.isSuccess) {
            getAllPublicNotificationsHandler();
        }
    }, [LoggedInData]);

    return (
        <AppConfigContext.Provider value={appConfig}>
            {
                pathname === "/campaign" ?
                    <CampaignPage />
                    :
                    <React.Fragment>
                        <Box
                            width="100%"
                            minH="100vh"
                            _light={{
                                bg: "#F0F0F5"
                            }}
                            _dark={{
                                bg: "#191919"
                            }}
                            display={"flex"}
                        >
                            <SidebarContent
                                onClose={() => onClose}
                                w={isMobileSidebarCollapsed ? "null" : "80%"}
                                h={"100%"}
                            />
                            {isMd ? (
                                <Box
                                    display={{
                                        base: "none",
                                        md: isMobileSidebarCollapsed ? "flex" : "none",
                                    }}
                                    flexDirection={"column"}
                                    className="margin-conditions"
                                    id="main-body"
                                    aria-expanded={isSidebarCollapsed ? "false" : "true"}
                                    w="100%"
                                    overflowX={"hidden"}
                                >
                                    <Navbar
                                        onNotificationDrawerOpen={onNotificationDrawerOpen}
                                    />
                                    <Box
                                        p="0"
                                        _light={{
                                            bgColor: "#FFF",
                                        }}
                                        _dark={{
                                            bgColor: "#131313",
                                        }}
                                        w="100%"
                                    //height={"100vh"}
                                    >
                                        {children}
                                        <Footer />
                                    </Box>
                                </Box>

                            ) : (
                                <Box
                                    display={{ base: "flex", md: "none" }}
                                    flexDirection={"column"}
                                    overflowX={"hidden"}
                                    mt={"60px"}
                                    w="100%"

                                >
                                    <Navbar
                                        onNotificationDrawerOpen={onNotificationDrawerOpen}

                                    />
                                    <Box
                                        p="0"
                                        _light={{
                                            bgColor: "#FFF",
                                        }}
                                        _dark={{
                                            bgColor: "#282828",
                                        }}
                                        w="100%"
                                    >
                                        {children}
                                        <Footer />
                                    </Box>
                                </Box>

                            )}
                        </Box>
                        <NotificationDrawer
                            isOpen={isNotificationDrawerOpen}
                            onOpen={onNotificationDrawerOpen}
                            onClose={onNotificationDrawerClose}
                            notifications={Notifications}
                        />
                    </React.Fragment>
            }

        </AppConfigContext.Provider>
    );
}
