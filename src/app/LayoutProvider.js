/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect } from "react";
import {
    Box,
    useColorModeValue,
    useDisclosure,
    useMediaQuery,
    useToast,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import SidebarContent from "@components/sidebar";
import Footer from "@components/footer";
import Navbar from "@components/header";
import { signOut, useSession } from "next-auth/react";
import {
    LogInFromCookie,
    StoreLoggedInUserDataGoogle,
    ResetValidatedUserData,
    socialLoginGoogle,
    verifyJWTtokenFromCookie,
    LogoutReducer,
} from "@/redux/auth_data/authSlice";
import { AUTH_COOKIE_NAME } from "@util/constant";
import { getCookieByName } from "@util/cookieHelper";
import isEmpty from "lodash/isEmpty";
import { useAccount, useDisconnect } from "wagmi";
import CustomToast from "@components/toast";

export default function LayoutProvider({ children }) {

    const [isMd] = useMediaQuery("(min-width: 768px)");
    const dispatch = useDispatch();
    const { onOpen, onClose } = useDisclosure();
    const isSidebarCollapsed = useSelector(
        (state) => state?.appData?.isSidebarCollapsed
    );
    const isMobileSidebarCollapsed = useSelector(
        (state) => state?.appData?.isMobileSidebarCollapsed
    );
    const { disconnect } = useDisconnect();
    const { data: AuthSession, status, update } = useSession();
    const GoogleVerifiedData = useSelector(
        (state) => state.authData.GoogleVerifiedData
    );
    const ValidatedUserData = useSelector(
        (state) => state.authData.ValidatedUserData
    );
    const toast = useToast();

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
                    if (AuthSession?.user?.name) {
                        update();
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
                            signOut({ callbackUrl: process.env.NEXTAUTH_URL });
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
        const cookie = getCookieByName(AUTH_COOKIE_NAME);
        if (!isEmpty(cookie)) {
            verifyJWTtokenFromCookieHandler(cookie);
        } else {
            if (status === "authenticated") {
                (localStorage.getItem("googleAuthInitiated") === "false" ||
                    localStorage.getItem("googleAuthInitiated") === null) &&
                    signOut({ callbackUrl: process.env.NEXTAUTH_URL });
            }
        }

        window.addEventListener('online', function () {
            toast({
                position: "bottom",
                render: () => (
                    <CustomToast
                        isSuccessful={true}
                        content={'Internet connection is back :)'}
                    />
                ),
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
                signOut({ callbackUrl: process.env.NEXTAUTH_URL });
            }, 2000);
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
                    signOut({ callbackUrl: process.env.NEXTAUTH_URL });
                }, 200);
            }, 100);
        }
    }, [dispatch, ValidatedUserData]);

    const { connector: activeConnector } = useAccount();
    useEffect(() => {
        const handleConnectorUpdate = ({ account }) => {
            if (account) {
                disconnect();
                setTimeout(() => {
                    dispatch(LogoutReducer());
                    setTimeout(() => {
                        signOut({ callbackUrl: process.env.NEXTAUTH_URL });
                    }, 200);
                }, 100);
            }
        };

        if (activeConnector) {
            activeConnector.on("change", handleConnectorUpdate);
        }

        return () => activeConnector?.off("change", handleConnectorUpdate);
    }, [activeConnector]);

    return (
        <Box
            width="100%"
            minH="100vh"
            bg={useColorModeValue("#F0F0F5", "#191919")}
            display={"flex"}
        >
            <SidebarContent
                onClose={() => onClose}
                w={isMobileSidebarCollapsed ? "null" : "80%"}
                h={"100%"}
            />
            {isMd ? (
                <>
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
                        <Navbar onOpenMenu={onOpen} />
                        <Box
                            p="0"
                            _light={{
                                bgColor: "#FFF",
                            }}
                            _dark={{
                                bgColor: "#131313",
                            }}
                            w="100%"
                            height={"100vh"}
                        >
                            {children}
                            <Footer />
                        </Box>
                    </Box>
                </>
            ) : (
                <>
                    <Box
                        display={{ base: "flex", md: "none" }}
                        flexDirection={"column"}
                        overflowX={"hidden"}
                        mt={"60px"}
                        w="100%"
                    >
                        <Navbar onOpenMenu={onOpen} />
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
                </>
            )}
        </Box>
    );
}