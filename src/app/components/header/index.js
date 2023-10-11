"use client";
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
import LoginPage from "../login";
import "./index.css";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { walletAddressChangedReducer } from "@/redux/wallet_dashboard_data/dataSlice";
import { useEffect, useState } from "react";
import isEmpty from "is-empty";
import {
  FetchLocalStorageData,
  LogoutReducer,
} from "@/redux/auth_data/authSlice";
import { color } from "framer-motion";
import {
  mobileSidebarCollapsedReducer,
  sidebarCollapsedReducer,
} from "../../../redux/app_data/dataSlice";
import { MobileSidebar } from "../sidebar/index";

const Navbar = ({ onOpenMenu, ...rest }) => {
  const searchParams = useSearchParams();
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
  const [searchWalletAddressValue, setSearchWalletAddressValue] = useState(
    searchParams.get("address")
  );

  const preLoadedData = useSelector((state) => state.authData.preLoadedData);
  const LoggedInData = useSelector((state) => state.authData.LoggedInData);

  const isMobileSidebarCollapsed = useSelector(
    (state) => state?.appData?.isMobileSidebarCollapsed
  );
  const MobileSidebarHandler = (value) => {
    dispatch(mobileSidebarCollapsedReducer(value));
  };

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

  const handleMobileSearchByWalletAddress = () => {
    dispatch(walletAddressChangedReducer(searchWalletAddressValue));
    router.push(`/wallet_dashboard?address=${searchWalletAddressValue}`);
    setSearchWalletAddressValue(searchWalletAddressValue);
  };

  useEffect(() => {
    if (pathname === "/wallet_dashboard") {
      setSearchWalletAddressValue(searchParams.get("address"));
    }
  }, [searchParams.get("address")]);
  useEffect(() => {
    dispatch(FetchLocalStorageData());
  }, []);

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
          bg={useColorModeValue("#E8E8E8", "#000000")}
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
              />
            </InputLeftElement>
            <Input
              type="text"
              border="none"
              _selected={{
                outline: "none",
                border: "none",
              }}
              _focusVisible={{
                outline: "none",
                border: "none",
              }}
              value={searchWalletAddressValue ?? ''}
              bgColor={"transparent"}
              variant={"h6"}
              w="100%"
              placeholder="Search Wallet Address"
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
          <div className="controller-row">
            <label className="switch">
              <input
                id="toggler"
                type="checkbox"
                checked={colorMode !== "light"}
                onChange={(e) => {
                  toggleColorMode();
                }}
              />
              <span className="slider round"></span>
            </label>
          </div>

          {preLoadedData?.data === null || preLoadedData?.data === undefined ? (
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
                  bgColor={colorMode === "light" ? "#202020" : "#FFF"}
                  layerStyle={"center"}
                  borderRadius={"2px"}
                  p="15px 20px"
                  minW="150px"
                >
                  <Text variant={"ConectWalletText"}>
                    Connect Wallet
                  </Text>
                </Box>
              </Box>
            </>
          ) : (
            <>
              <Box
                layerStyle={"flexCenter"}
                ml="20px"
                pl="20px"
                borderLeft={"1px solid #333333"}
                w="100%"
                minW="270px"
              >
                <Image
                  src="/images/profile_img.png"
                  w="36px"
                  h="36px"
                  borderRadius={"50%"}
                  alt="search_icon"
                />
                <Box
                  layerStyle={"flexColumn"}
                  ml="10px"
                  mr="20px"
                  minW="150px"
                >
                  <Text variant={"TopWalletsText"}>
                    Cameron Williamson
                  </Text>
                  <Text variant={"h6"}>
                    {!isEmpty(LoggedInData?.data)
                      ? LoggedInData?.data?.user?._id
                        .split("")
                        .join("")
                        .substring(0, 6) +
                      "..." +
                      LoggedInData?.data?.user?._id.slice(-5)
                      : preLoadedData?.data?.token?.user?._id
                        .split("")
                        .join("")
                        .substring(0, 6) +
                      "..." +
                      preLoadedData?.data?.token?.user?._id.slice(-5)}
                  </Text>
                </Box>

                <Image
                  src={
                    colorMode === "light"
                      ? "/icons/logout_icon_light.svg"
                      : "/icons/logout_white.svg"
                  }
                  w="20px"
                  h="20px"
                  cursor={"pointer"}
                  borderRadius={"50%"}
                  alt="search_icon"
                  onClick={() => dispatch(LogoutReducer())}
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
        bgColor={colorMode === "light" ? "#F0F0F5" : "#272727"}
        borderBottom={"1px"}
        borderColor={colorMode === "light" ? "#E1E1E1" : "#333"}
        justifyContent={{ base: "space-between", md: "flex-end" }}
        {...rest}
      >
        <Box gap={"20px"} layerStyle={"flexCenter"}>
          <Box
            cursor={"pointer"}
            onClick={onMobileSidebarOpen}
          >
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
              borderColor={colorMode === "light" ? "#E1E1E1" : "#333"}
              bgColor={colorMode === "light" ? "#F0F0F5" : "#191919"}
              variant={"h6"}
              w="100%"
              placeholder="Search Wallet Address"
              value={searchWalletAddressValue ?? ''}
              onChange={(e) => {
                handleSearchByWalletAddress(e);
              }}
            ></Input>
            <Box
              layerStyle={"center"}
              cursor={"pointer"}
              w={"70px"}
              p={"14px 10px"}
              bgColor={colorMode === "light" ? "#F0F0F5" : "#191919"}
              border="1px"
              borderColor={colorMode === "light" ? "#E1E1E1" : "#333"}
              onClick={() => {
                handleMobileSearchByWalletAddress();
              }}
            >
              <Text variant={"SearchText"}>
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
