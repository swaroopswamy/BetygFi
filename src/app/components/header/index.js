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
import { useRouter, useSearchParams } from 'next/navigation'
import { useDispatch, useSelector } from "react-redux";
import { walletAddressChangedReducer } from "@/redux/wallet_dashboard_data/dataSlice";
import { useState } from "react";

const Navbar = ({ onOpenMenu, ...rest }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { isOpen: isHeaderOpen, onOpen: onHeaderOpen, onClose: onHeaderClose } = useDisclosure();
  const { isOpen: isLoginModalOpen, onOpen: onLoginModalOpen, onClose: onLoginModalClose } = useDisclosure();
  const dispatch = useDispatch();
  const { colorMode, toggleColorMode } = useColorMode();
  const [searchWalletAddressValue, setSearchWalletAddressValue] = useState(searchParams.get('address'));
  const handleSearchByWalletAddress = (e) => {
    if (e.key === 'Enter') {
      dispatch(walletAddressChangedReducer(e.target.value));
      router.push(`/wallet_dashboard?address=${e.target.value}`)
      setSearchWalletAddressValue(e.target.value)
    }
    setSearchWalletAddressValue(e.target.value)
  }

  return (
    <>
      <Flex
        ml={{ base: 0, md: 60 }}
        px={{ base: 4, md: 4 }}
        height="20"
        alignItems="center"
        borderBottomWidth="1px"
        bg={useColorModeValue("#F0F0F5", "#191919")}
        justifyContent={{ base: "space-between", md: "flex-end" }}
        {...rest}
      >
        <IconButton
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
        </Text>
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
            fontSize={"11px"}
            fontWeight={400}
            w="100%"
            placeholder="Search Wallet Address"
            onKeyDown={(e) => { handleSearchByWalletAddress(e) }}
            onChange={(e) => { handleSearchByWalletAddress(e) }}

          ></Input>
        </InputGroup>
        <HStack spacing={{ base: "0", md: "6" }}>


          <div className="controller-row">
            <label className="switch">
              <input id="toggler" type="checkbox" checked={colorMode !== "light"} onChange={(e) => {
                toggleColorMode();
              }} />
              <span className="slider round"></span>
            </label>
          </div>
          {/*    <Button >
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button> */}
          {/*   <IconButton
            size="lg"
            variant="ghost"
            aria-label="open menu"
            icon={<FiBell />}
            onClick={onLoginModalOpen}
          /> */}
        </HStack>
      </Flex>
      <LoginPage isOpen={isLoginModalOpen} onOpen={onLoginModalOpen} onClose={onLoginModalClose} />
    </>
  );
};

export default Navbar;
