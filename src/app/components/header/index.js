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


const Navbar = ({ onOpenMenu, ...rest }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const { isOpen: isHeaderOpen, onOpen: onHeaderOpen, onClose: onHeaderClose } = useDisclosure();
  const { isOpen: isLoginModalOpen, onOpen: onLoginModalOpen, onClose: onLoginModalClose } = useDisclosure();
  const dispatch = useDispatch();
  const { colorMode, toggleColorMode } = useColorMode();
  const [searchWalletAddressValue, setSearchWalletAddressValue] = useState(searchParams.get('address'));

  const preLoadedData = useSelector((state) => state.authData.preLoadedData);
  const LoggedInData = useSelector((state) => state.authData.LoggedInData);

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
        height="20"
        alignItems="center"
        borderBottomWidth="1px"
        bg={useColorModeValue("#F0F0F5", "#191919")}
        justifyContent={{ base: "space-between", md: "flex-end" }}
        {...rest}
      >
        {/* <IconButton
          display={{ base: "flex", md: "none" }}
          onClick={onHeaderOpen}
          variant="outline"
          aria-label="open menu"
          icon={<FiMenu />}
        />

        <Text
          display={{ base: "flex", md: "none" }}
          fontSize="2xl"
          fontFamily="monospace"
          fontWeight="bold"
        >
          Log
        </Text> */}
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
                  >
                    <Image
                      src={colorMode === 'light' ? "/icons/login_black.svg" : "/icons/login_white.svg"}
                      w="30px"
                      h="30px"
                      cursor={"pointer"}
                      borderRadius={"50%"}
                      alt="search_icon"

                      onClick={onLoginModalOpen}
                    />
                  </Box>

                  {/*   <IconButton
                    size="lg"
                    variant="ghost"
                    aria-label="open menu"
                    icon={<FiBell />}
                    onClick={onLoginModalOpen}
                  /> */}
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
      <LoginPage isOpen={isLoginModalOpen} onOpen={onLoginModalOpen} onClose={onLoginModalClose} />
    </>
  );
};

export default Navbar;
