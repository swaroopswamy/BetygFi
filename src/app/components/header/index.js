"use client";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useDisconnect } from "wagmi";
import {
    Box,
    Flex,
    useDisclosure,
    useColorModeValue,
    useColorMode,
    Text,
    Input,
    InputGroup,
    InputLeftElement,
    Image,
    Collapse,
} from "@chakra-ui/react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import isEmpty from "is-empty";
import LoginPage from "@/app/components/login";
import "./index.css";
import { walletAddressChangedReducer } from "@/redux/wallet_dashboard_data/dataSlice";
import {
    FetchLocalStorageData,
    LogoutReducer,
} from "@/redux/auth_data/authSlice";
import { MobileSidebar } from "@/app/components/sidebar";
import { createCookies, getCookieByName } from "@util/cookieHelper";
import { getPublicAddress } from "@util/functions";
import { signOut, useSession } from "next-auth/react";
import CustomAvatar from "@/app/components/avatar";
import { COLOR_MODE_COOKIE_NAME } from "@util/utility";

const Navbar = ({ ...rest }) => {
    const searchParams = useSearchParams();
    const searchParamAddress = searchParams.get("address");
    const router = useRouter();
    const pathname = usePathname();
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
    const { isOpen: isMobileSearchOpen, onToggle: onMobileSearchToggle } =
        useDisclosure();
    const dispatch = useDispatch();
    const { colorMode, toggleColorMode } = useColorMode();
    const [searchWalletAddressValue, setSearchWalletAddressValue] =
        useState(searchParamAddress);

    const { disconnect } = useDisconnect();
    const handleSearchByWalletAddress = (e) => {
        if (e.key === "Enter") {
            if (!isEmpty(e.target.value)) {
                dispatch(walletAddressChangedReducer(e.target.value));
                router.push(`/top-wallets/${e.target.value}`);
                setSearchWalletAddressValue(e.target.value);
            }
        }
        setSearchWalletAddressValue(e.target.value);
    };

    const handleMobileSearchByWalletAddress = () => {
        dispatch(walletAddressChangedReducer(searchWalletAddressValue));
        router.push(`/top-wallets/${searchWalletAddressValue}`);
        setSearchWalletAddressValue(searchWalletAddressValue);
    };

    useEffect(() => {
        const splittedPathName = pathname.split("/");
        if (
            splittedPathName.length == 3 &&
            splittedPathName.includes("wallet")
        ) {
            setSearchWalletAddressValue(searchParamAddress);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchParamAddress]);

    useEffect(() => {
        dispatch(FetchLocalStorageData());
        updateColorMode();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const normalizeColorMode = (colorMode) =>
        colorMode === "light" ? "dark" : "light";

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
        createCookies(
            COLOR_MODE_COOKIE_NAME,
            normalizeColorMode(colorMode)
        );
        toggleColorMode();
    };

    const { data: AuthSession } = useSession();
    return (
        <>
            <Flex
                px={{ base: 4, md: 4 }}
                display={{ base: "none", md: "flex" }}
                height="20"
                alignItems="center"
                bg={useColorModeValue("#FFFFFF", "#191919")}
                borderBottom={useColorModeValue(
                    "2px solid #E8E8E8",
                    "2px solid #202020"
                )}
                justifyContent={{ base: "space-between", md: "space-between" }}
                {...rest}
            >
                <Box
                    w={"64%"}
                    height={"45px"}
                    flexShrink={0}
                    borderRadius={"20px"}
                    bg={useColorModeValue("#F4F4F4", "#000000")}
                    ml={"10px"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                >
                    <InputGroup w="100%" alignItems={"center"}>
                        <InputLeftElement pointerEvents="none">
                            <Image
                                src="/images/search_icon.svg"
                                w="20px"
                                h="20px"
                                alt="search_icon"
                                borderLeftRadius={"20px"}
                                borderRightRadius={"20px"}
                            />
                        </InputLeftElement>
                        <Input
                            type="text"
                            border="none"
                            borderLeftRadius={"20px"}
                            borderRightRadius={"20px"}
                            _selected={{
                                outline: "none",
                                border: "none",
                            }}
                            _focusVisible={{
                                outline: "none",
                                border: "none",
                            }}
                            value={searchWalletAddressValue ?? ""}
                            bgColor={"transparent"}
                            variant={"h5"}
                            letterSpacing={"1.2px"}
                            _light={{ color: "#16171B" }}
                            _dark={{ color: "#A8ADBD" }}
                            w="100%"
                            // placeholder="Search by Coin, DeFi name, NFT, Wallet and more"
                            placeholder="Search by Wallet Address" // till 29th release only
                            onKeyDown={(e) => {
                                handleSearchByWalletAddress(e);
                            }}
                            onChange={(e) => {
                                handleSearchByWalletAddress(e);
                            }}
                        ></Input>
                    </InputGroup>
                </Box>

                <Box layerStyle={"flexCenter"}>
                    <i
                        className={`icon ${
                            colorMode === "light" ? "moon" : "sun"
                        }`}
                        onClick={() => {
                            toggleColorModeGlobally();
                        }}
                    />

                    {!AuthSession ? (
                        <>
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
                                        Connect Wallet
                                    </Text>
                                </Box>
                            </Box>
                        </>
                    ) : (
                        <>
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
                                        src={AuthSession?.user?.image}
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
                                            ? AuthSession?.user?.name
                                            : getPublicAddress() || "No Name"}
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
                                    className={`icon ${
                                        colorMode === "light"
                                            ? "log_in_black"
                                            : "log_in_white"
                                    }`}
                                    onClick={() => {
                                        disconnect();
                                        dispatch(LogoutReducer());
                                        signOut();
                                    }}
                                />
                            </Box>
                        </>
                    )}
                </Box>
            </Flex>

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
                            w={"18px"}
                            h={"18px"}
                            alt="logo"
                        ></Image>
                    </Box>

                    <Box>
                        <Image
                            src={
                                colorMode === "light"
                                    ? "/icons/light_betgyfi_sm_icon.svg"
                                    : "/icons/dark_betgyfi_sm_logo.svg"
                            }
                            h={25}
                            cursor={"pointer"}
                            onClick={() => {
                                router.push("/");
                            }}
                            alt="logo"
                        ></Image>
                    </Box>
                </Box>

                <Box cursor={"pointer"} onClick={onMobileSearchToggle}>
                    <Image
                        src={
                            colorMode === "light"
                                ? "/icons/search_icon_light.svg"
                                : "/icons/search_icon_dark.svg"
                        }
                        h={"20px"}
                        w={"20px"}
                        alt="logo"
                    ></Image>
                </Box>
            </Flex>

            <Collapse
                in={isMobileSearchOpen}
                style={{ position: "fixed", width: "100%", zIndex: "80" }}
                animateOpacity={"true"}
            >
                <Box
                    px={{ base: 4, md: 4 }}
                    w={"100%"}
                    layerStyle={"flexCenter"}
                    bgColor={colorMode === "light" ? "#FFFFFF" : "#272727"}
                    border={"1px"}
                    borderColor={colorMode === "light" ? "#E1E1E1" : "#333"}
                    padding={"8px 19px"}
                >
                    <InputGroup w="100%">
                        <InputLeftElement pointerEvents="none">
                            <Image
                                src={
                                    colorMode === "light"
                                        ? "/icons/search_icon_light.svg"
                                        : "/icons/search_icon_dark.svg"
                                }
                                w="14px"
                                h="14px"
                                alt="search_icon"
                            />
                        </InputLeftElement>
                        <Input
                            type="text"
                            border="1px"
                            borderRadius="0px"
                            borderColor={
                                colorMode === "light" ? "#E1E1E1" : "#333"
                            }
                            bgColor={
                                colorMode === "light" ? "#F0F0F5" : "#191919"
                            }
                            variant={"h5"}
                            letterSpacing={"1.2px"}
                            _light={{ color: "#16171B" }}
                            _dark={{ color: "#A8ADBD" }}
                            w="100%"
                            placeholder="Search Wallet Address"
                            value={searchWalletAddressValue ?? ""}
                            onChange={(e) => {
                                handleSearchByWalletAddress(e);
                            }}
                        ></Input>
                        <Box
                            layerStyle={"center"}
                            cursor={"pointer"}
                            w={"70px"}
                            p={"14px 10px"}
                            bgColor={
                                colorMode === "light" ? "#F0F0F5" : "#191919"
                            }
                            border="1px"
                            borderColor={
                                colorMode === "light" ? "#E1E1E1" : "#333"
                            }
                            onClick={() => {
                                handleMobileSearchByWalletAddress();
                            }}
                        >
                            <Text variant={"SearchText"} fontWeight={"500"}>
                                Search
                            </Text>
                        </Box>
                    </InputGroup>
                </Box>
            </Collapse>

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
        </>
    );
};

export default Navbar;
