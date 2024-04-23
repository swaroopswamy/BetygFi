/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import "./index.css";
import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDisconnect } from "wagmi";
import {
    Box,
    Flex,
    useDisclosure,
    useColorModeValue,
    useColorMode,
    Text,
    useMediaQuery,
} from "@chakra-ui/react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { walletAddressChangedReducer } from "@redux/wallet_dashboard_data/dataSlice";
import {
    LogoutReducer,
} from "@redux/auth_data/authSlice";
import { createCookies, getCookieByName } from "@util/cookieHelper";
import { signOut, useSession } from "next-auth/react";
import CustomAvatar from "@components/avatar";
import { PublicAddressStringFormatter } from "@util/utility";
import { useDebounce } from "@hooks/useDebounce";
import { getSearchV2List, getSearchV2TrendingList, mobileSearchbarOpenReducer } from "@redux/app_data/dataSlice";
import isEmpty from "lodash/isEmpty";
import Image from "next/image";
import { COLOR_MODE_COOKIE_NAME } from "@util/constant";
import LoginPage from "@components/login";
import { MobileSidebar } from "@components/sidebar";
import SearchBoxV2 from "@components/searchBoxV2";
import AppConfigContext from "@components/context/appConfigContext";
import NotificationBell from "@components/notification/notificationBell";

const Navbar = ({ userImg ,onNotificationDrawerOpen, ...rest }) => {
    const appConfig = useContext(AppConfigContext);
    const searchParams = useSearchParams();
    const searchParamAddress = searchParams.get("address");
    const router = useRouter();
    const pathname = usePathname();
    const dispatch = useDispatch();
    const {
        isOpen: isMobileSidebarOpen,
        onOpen: onMobileSidebarOpen,
        onClose: onMobileSidebarClose,
    } = useDisclosure();
    const {
        isOpen: isLoginModalOpen,
        onOpen: onLoginModalOpen,
        onClose: onLoginModalClose,
    } = useDisclosure();
    const { isOpen: isMobileSearchOpen, onToggle: onMobileSearchToggle } = useDisclosure();
    const [isMd] = useMediaQuery("(min-width: 768px)");
    const { data: AuthSession } = useSession();

    const searchListData = useSelector((state) => state.appData.searchV2Data);
    const searchListTrendingData = useSelector((state) => state.appData.searchV2TrendingData);

    const [searchWalletAddressValue, setSearchWalletAddressValue] = useState(searchParamAddress);
    const [searchValue, setSearchValue] = useState('');
    const debouncedValue = useDebounce(searchValue, 300);

    const { colorMode, toggleColorMode } = useColorMode();
    const normalizeColorMode = (colorMode) => colorMode === "light" ? "dark" : "light";

    const clearValueMobileSearch = () => {
        setSearchValue("");
        setSearchWalletAddressValue("");
    };

    const { disconnect } = useDisconnect();
    const handleSearchByWalletAddress = (e) => {
        if (e.key === "Enter") {
            if (!isEmpty(e.target.value)) {
                dispatch(walletAddressChangedReducer(e.target.value));
                router.push(`/wallet_dashboard?address=${e.target.value}`);
                setSearchWalletAddressValue(e.target.value);
            }
        }
        setSearchWalletAddressValue(e.target.value);
    };

    const handleSearchByWalletAddressV2 = (e) => {
        const value = e.target.value;
        setSearchValue(value);
        setSearchWalletAddressValue(value);
    };

    useEffect(() => {
        if (searchValue?.length > 0) {
            const payload = {
                searchValue: searchValue
            };
            dispatch(getSearchV2List(payload));
        }
    }, [debouncedValue]);

    const handleSearchInputChange = (value) => {
        setSearchValue(value);
    };

    useEffect(() => {
        const splittedPathName = pathname.split("/");
        if (
            splittedPathName.length == 3 &&
            splittedPathName.includes("wallet")
        ) {
            setSearchWalletAddressValue(searchParamAddress);
        }
    }, [searchParamAddress]);

    useEffect(() => {
        Promise.all([
            updateColorMode(),
            dispatch(getSearchV2TrendingList())
        ]).then(res => res);
    }, []);

    const updateColorMode = () => {
        const colorCookie = getCookieByName(COLOR_MODE_COOKIE_NAME);
        if (colorCookie === "light") {
            if (colorMode === "dark") {
                toggleColorMode();
            }
        } else if (colorCookie === "dark") {
            if (colorMode === "light") {
                toggleColorMode();
            }
        }
    };

    const toggleColorModeGlobally = () => {
        createCookies(COLOR_MODE_COOKIE_NAME, normalizeColorMode(colorMode));
        toggleColorMode();
    };

    const Notifications = useSelector((state) => state?.appData?.Notifications);

    const renderHeaderText = () => {
        const splittedPathName = pathname.split("/");
        if (splittedPathName.includes('coin')) {
            return (
                <Text fontSize={"24px"} color={"text.primary"} >
                    Coin Listing
                </Text>
            );
        }
        else {
            const splittedPathNameSpace = pathname.split("/");
            if (splittedPathNameSpace.includes('protocol')) {
                return (
                    <Text fontSize={"24px"} color={"text.primary"} >
                        DeFi Markets
                    </Text>
                );
            }
        }
    };

    const MdHeader = () => (
        <Flex
            px={{ base: 4, md: 4 }}
            display={{ base: "none", md: "flex" }}
            height="20"
            alignItems="center"
            bg={useColorModeValue("#FFFFFF", "#191919")}
            borderBottom={useColorModeValue("2px solid #E8E8E8", "2px solid #202020")}
            justifyContent={{ base: "space-between", md: "space-between" }}
            {...rest}
        >
            {renderHeaderText()}
            <Box
                w={"50%"}
                height={"45px"}
                flexShrink={0}
                borderRadius={"20px"}
                bg={useColorModeValue("#F4F4F4", "#000000")}
                ml={"10px"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
            >
                <SearchBoxV2
                    searchWalletAddressValue={searchWalletAddressValue}
                    handleSearchByWalletAddressV2={handleSearchByWalletAddressV2}
                    handleSearchInputChange={handleSearchInputChange}
                    searchValue={searchValue}
                    clearValueMobileSearch={clearValueMobileSearch}
                    searchListData={searchListData?.data?.data?.data}
                    searchListTrendingData={searchListTrendingData?.data?.data?.data}
                />
            </Box>

            <Box layerStyle={"flexCenter"}>
                <i className={`icon ${colorMode === "light" ? "moon" : "sun"}`}
                    onClick={() => { toggleColorModeGlobally(); }} />
                <NotificationBell
                    noOfNotifcations={Notifications?.data?.length}
                    onClick={onNotificationDrawerOpen}
                />
                {!AuthSession ? (
                    <Box
                        ml="20px"
                        pl="20px"
                        borderLeft={"1px solid #333333"}
                        alignContent={"center"}
                    >
                        <Box
                            cursor={"pointer"}
                            onClick={onLoginModalOpen}
                            bgColor={
                                colorMode === "light"
                                    ? "#282828"
                                    : "#FFF"
                            }
                            layerStyle={"center"}
                            borderRadius={"2px"}
                            p="15px 20px"
                            minW="150px"
                        >
                            <Text
                                variant={"SearchText"}
                                fontWeight={"600"}
                                _light={{ color: "#FAFAFB" }}
                                _dark={{ color: "#191919" }}
                            >
                                Login/Signup
                            </Text>
                        </Box>
                    </Box>
                ) : (
                    <Box
                        layerStyle={"flexCenter"}
                        justifyContent={"end"}
                        ml="20px"
                        pl="20px"
                        borderLeft={"1px solid #333333"}
                        w="100%"
                    >
                        {typeof window !== "undefined" && (
                            <CustomAvatar
                                width={48}
                                height={48}
                                src={userImg === null || userImg === undefined ? "/icons/avatar_icon_light.svg" : userImg}
                            />
                        )}
                        <Box
                            layerStyle={"flexColumn"}
                            ml="10px"
                            mr="20px"
                            minW="130px"
                        >
                            <Text
                                variant={"TopWalletsText"}
                                w="120px"
                                whiteSpace={"nowrap"}
                                overflow={"hidden"}
                                textOverflow={"ellipsis"}
                            >
                                {AuthSession?.user?.name
                                    ? PublicAddressStringFormatter(AuthSession?.user?.name) : 'No Name'}
                            </Text>
                            {AuthSession?.user?.public_address && (
                                <Text
                                    variant={"h5"}
                                    letterSpacing={"1.2px"}
                                    _light={{ color: "#16171B" }}
                                    _dark={{ color: "#A8ADBD" }}
                                >
                                    {AuthSession?.user?.public_address
                                        ?.split("")
                                        ?.join("")
                                        ?.substring(0, 6) +
                                        "..." +
                                        AuthSession?.user?.public_address?.slice(
                                            -5
                                        )}
                                </Text>
                            )}
                        </Box>
                        <i
                            className={`icon ${colorMode === "light"
                                ? "log_in_black"
                                : "log_in_white"
                                }`}
                            onClick={() => {
                                disconnect();
                                setTimeout(() => {
                                    dispatch(LogoutReducer());
                                    setTimeout(() => {
                                        signOut({ callbackUrl: appConfig.NEXTAUTH_URL });
                                    }, 200);
                                }, 100);
                            }}
                        />
                    </Box>
                )}
            </Box>
        </Flex>
    );

    const SMHeader = () => {
        return (
            <>
                <Flex
                    position={"fixed"}
                    top={"0"}
                    zIndex={"90"}
                    px={{ base: 4, md: 4 }}
                    display={{ base: "flex", md: "none" }}
                    width={"full"}
                    height="60px"
                    alignItems="center"
                    bgColor={colorMode === "light" ? "#F0F0F5" : "#000000"}
                    borderBottom={"1px"}
                    borderColor={colorMode === "light" ? "#E1E1E1" : "#333"}
                    justifyContent={{ base: "space-between", md: "flex-end" }}
                    {...rest}
                >
                    <Box gap={"20px"} layerStyle={"flexCenter"}>
                        <Box cursor={"pointer"} onClick={onMobileSidebarOpen}>
                            <Image
                                src={
                                    colorMode === "light"
                                        ? "/icons/sidebar_icon_dark.svg"
                                        : "/icons/sidebar_icon_light.svg"
                                }
                                // unoptimized="true"
                                // priority="true"
                                width={18}
                                height={18}
                                alt="logo"
                            />
                        </Box>

                        <Box>
                            <Image
                                // unoptimized="true"
                                // priority="true"
                                src={
                                    colorMode === "light"
                                        ? "/icons/light_betgyfi_sm_icon.svg"
                                        : "/icons/dark_betgyfi_sm_logo.svg"
                                }
                                height={120}
                                width={120}
                                cursor={"pointer"}
                                onClick={() => router.push("/")}
                                alt="logo"
                            />
                        </Box>
                    </Box>
                    {
                        <Box cursor={"pointer"} onClick={() => {
                            dispatch(mobileSearchbarOpenReducer(!isMobileSearchOpen));
                            window.scrollTo({ top: 0, behavior: 'smooth', });
                            onMobileSearchToggle();
                            setTimeout(() => {
                                document.getElementById("searchInputMobile")?.focus();
                            }, 700);
                        }}>
                            <Image
                                src={`/icons/search_icon_${colorMode}.svg`}
                                height={20}
                                width={20}
                                alt="logo"
                            // unoptimized="true"
                            // priority="true"
                            />
                        </Box>
                    }
                </Flex>
                {
                    isMobileSearchOpen &&
                    <Box
                        w={"100%"}
                        layerStyle={"flexCenter"}
                        bgColor={colorMode === "light" ? "#FFFFFF" : "#272727"}
                        border={"1px"}
                        zIndex={99}
                        position={"fixed"}
                        borderColor={colorMode === "light" ? "#E1E1E1" : "#333"}
                    >
                        <SearchBoxV2
                            searchWalletAddressValue={searchWalletAddressValue}
                            handleSearchByWalletAddress={handleSearchByWalletAddress}
                            clearValueMobileSearch={clearValueMobileSearch}
                            handleSearchInputChange={handleSearchInputChange}
                            searchValue={searchValue}
                            searchListData={searchListData?.data?.data?.data}
                            searchListTrendingData={searchListTrendingData?.data?.data?.data}
                        />
                    </Box>
                }
            </>
        );
    };

    return (
        <Box id="betygfi-navbar">
            {isMd ? MdHeader() : SMHeader()}
            <MobileSidebar
                isOpen={isMobileSidebarOpen}
                onOpen={onMobileSidebarOpen}
                onClose={onMobileSidebarClose}
                isLoginModalOpen={isLoginModalOpen}
                onLoginModalOpen={onLoginModalOpen}
                onLoginModalClose={onLoginModalClose}
            />
            <LoginPage
                isOpen={isLoginModalOpen}
                onOpen={onLoginModalOpen}
                onClose={onLoginModalClose}
            />
        </Box>
    );
};

export default Navbar;
