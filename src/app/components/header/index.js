"use client";
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  IconButton,
  Text,
  HStack,
  VStack,
  Input,
  InputGroup,
  InputLeftElement,
  Image,
} from "@chakra-ui/react";
import { FiMenu, FiBell, FiChevronDown } from "react-icons/fi";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import LoginPage from "../login";
import './index.css';
import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import { useDispatch, useSelector } from "react-redux";
import { walletAddressChangedReducer } from "@/redux/wallet_dashboard_data/dataSlice";
import { useEffect, useState } from "react";
import isEmpty from "is-empty";
import { FetchLocalStorageData, LogoutReducer } from "@/redux/auth_data/authSlice";
import { color } from "framer-motion";
import { mobileSidebarCollapsedReducer, sidebarCollapsedReducer } from "../../../redux/app_data/dataSlice";


const Navbar = ({ onOpenMenu, ...rest }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const { isOpen: isHeaderOpen, onOpen: onHeaderOpen, onClose: onHeaderClose } = useDisclosure();
  const { isOpen: isLoginModalOpen, onOpen: onLoginModalOpen, onClose: onLoginModalClose } = useDisclosure();
  const dispatch = useDispatch();
  const { colorMode, toggleColorMode } = useColorMode();
  const [searchWalletAddressValue, setSearchWalletAddressValue] = useState(searchParams.get('address'));

  const [showSearch, setShowSearch] = useState(false);

  const preLoadedData = useSelector((state) => state.authData.preLoadedData);
  const LoggedInData = useSelector((state) => state.authData.LoggedInData);

  const isMobileSidebarCollapsed = useSelector(
    (state) => state?.appData?.isMobileSidebarCollapsed
  );
  const MobileSidebarHandler = (value) => {
    dispatch(mobileSidebarCollapsedReducer(value));
  };

  const handleSearchByWalletAddress = (e) => {
    if (e.key === 'Enter') {
      if (!isEmpty(e.target.value)) {
        dispatch(walletAddressChangedReducer(e.target.value));
        router.push(`/wallet_dashboard?address=${e.target.value}`)
        setSearchWalletAddressValue(e.target.value)
      }
    }
    setSearchWalletAddressValue(e.target.value)
  }
  useEffect(() => {
    if (pathname === '/wallet_dashboard') {
      setSearchWalletAddressValue(searchParams.get('address'))
    }
  }, [searchParams.get('address')])
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
        bg={useColorModeValue("#F0F0F5", "#191919")}
        justifyContent={{ base: "space-between", md: "flex-end" }}
        {...rest}
      >

        <InputGroup w="100%">
          <InputLeftElement pointerEvents='none'>
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
              border: "none"
            }}
            _focusVisible={{
              outline: "none",
              border: "none"
            }}
            value={searchWalletAddressValue}
            bgColor={"transparent"}
            color={useColorModeValue("#16171B", "#A8ADBD")}
            fontSize="12px"
            fontWeight="400"
            lineHeight="20px"
            letterSpacing="1.2px"
            w="100%"
            placeholder="Search Wallet Address"
            onKeyDown={(e) => { handleSearchByWalletAddress(e) }}
            onChange={(e) => { handleSearchByWalletAddress(e) }}

          ></Input>
        </InputGroup>

        <Box
          display={"flex"}
          alignItems={"center"}
        >
          <div className="controller-row">
            <label className="switch">
              <input id="toggler" type="checkbox" checked={colorMode !== "light"} onChange={(e) => {
                toggleColorMode();
              }} />
              <span className="slider round"></span>
            </label>
          </div>

          {
            (preLoadedData?.data === null || preLoadedData?.data === undefined)
              ?
              (
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
                      bgColor={colorMode === 'light' ? "#202020" : "#FFF"}
                      display={"flex"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      borderRadius={"2px"}
                      p="15px 20px"
                      minW="150px"
                    >
                      <Text
                        fontSize={"14px"}
                        fontWeight={"600"}
                        lineHeight={"10px"}
                        color={colorMode === 'light' ? "#FAFAFB" : "#000"}
                      >
                        Connect Wallet
                      </Text>
                    </Box>
                  </Box>
                </>
              )
              :
              (
                <>
                  <Box
                    display={"flex"}
                    alignItems={"center"}
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
                      display={"flex"}
                      flexDirection={"column"}
                      ml="10px"
                      mr="20px"
                      minW="150px"
                    >
                      <Text
                        _light={{ color: "#000000" }}
                        _dark={{ color: "#FFFFFF" }}
                        fontSize="14px"
                        fontWeight="600"
                        lineHeight="20px"
                      >
                        Cameron Williamson
                      </Text>
                      <Text
                        _light={{ color: "#16171B" }}
                        _dark={{ color: "#A8ADBD" }}
                        fontSize="12px"
                        fontWeight="400"
                        lineHeight="20px"
                      >

                        {
                          !isEmpty(LoggedInData?.data) ?
                            LoggedInData?.data?.user?._id.split("").join("").substring(0, 6) + "..." + LoggedInData?.data?.user?._id.slice(-5)
                            :
                            preLoadedData?.data?.token?.user?._id.split("").join("").substring(0, 6) + "..." + preLoadedData?.data?.token?.user?._id.slice(-5)

                        }
                      </Text>
                    </Box>

                    <Image
                      src={colorMode === 'light' ? "/icons/logout_black.svg" : "/icons/logout_white.svg"}
                      w="20px"
                      h="20px"
                      cursor={"pointer"}
                      borderRadius={"50%"}
                      alt="search_icon"
                      onClick={() => dispatch(LogoutReducer())}
                    />
                  </Box>
                </>
              )
          }

        </Box>

      </Flex>

      <Flex
        px={{ base: 4, md: 4 }}
        display={{ base: "flex", md: "none" }}
        width={"full"}
        height="60px"
        alignItems="center"
        bgColor={colorMode === "light" ? "#FFFFFF" : "#272727"}
        // borderBottom={"1px"}
        // borderColor={colorMode === 'light' ? "#515151" : "#272727"}
        justifyContent={{ base: "space-between", md: "flex-end" }}
        {...rest}
      >

        <Box
          display={"flex"}
          gap={"20px"}
          alignItems={"center"}
        >
          <Box
            onClick={() => {
              MobileSidebarHandler(!isMobileSidebarCollapsed);
            }}
          >
            <Image
              src={colorMode === 'light' ? "/icons/sidebar_icon_dark.svg" : "/icons/sidebar_icon_light.svg" }
              w={"18px"}
              h={"18px"}
            >
            </Image>
          </Box>

          <Box>
            <Image
              src={colorMode === "light" ? "/icons/light_betgyfi_sm_icon.svg" : "/icons/dark_betgyfi_sm_logo.svg"}
              h={"25px"}
              cursor={"pointer"}
              onClick={() => {
                router.push('/');
              }}
            ></Image>
          </Box>
        </Box>

        <Box
          cursor={"pointer"}
          onClick={() => {
            setShowSearch(!showSearch);
          }}
        >
          <Image
            src={colorMode === "light" ? "/icons/search_icon_light.svg" : "/icons/search_icon_dark.svg"}
            h={"20px"}
            w={"20px"}
          ></Image>
        </Box>

      </Flex>

      <Box
        px={{ base: 4, md: 4 }}
        display={showSearch ? { base: "flex", md: "none" } : "none"}
        bgColor={colorMode === "light" ? "#FFFFFF" : "#272727"}
        border={"1px"}
        borderColor={colorMode === "light" ? "#E1E1E1" : "#333"}
        padding={"8px 19px"}
      >
        <InputGroup w="100%">
          <InputLeftElement pointerEvents='none'>
            <Image
              src={colorMode === "light" ? "/icons/search_icon_light.svg" : "/icons/search_icon_dark.svg"}
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
            fontSize="12px"
            fontWeight="400"
            lineHeight="20px"
            letterSpacing="1.2px"
            w="100%"
            placeholder="Search Wallet Address"
            value={searchWalletAddressValue}
            onKeyDown={(e) => { handleSearchByWalletAddress(e) }}
            onChange={(e) => { handleSearchByWalletAddress(e) }}
          ></Input>
          <Box
            alignContent={"center"}
            justifyContent={"center"}
            cursor={"pointer"}
            w={"70px"}
            p={"14px 10px"}
            bgColor={colorMode === "light" ? "#F0F0F5" : "#191919"}
            border="1px"
            borderColor={colorMode === "light" ? "#E1E1E1" : "#333"}
          >
            <Text
              fontSize={"14px"}
              fontWeight={"500"}
              lineHeight={"10px"}
            >
              Search
            </Text>
          </Box>
        </InputGroup>
      </Box>

      <LoginPage isOpen={isLoginModalOpen} onOpen={onLoginModalOpen} onClose={onLoginModalClose} />
    </>
  );
};

export default Navbar;
