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
} from "@chakra-ui/react";
import { FiMenu, FiBell, FiChevronDown } from "react-icons/fi";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import LoginPage from "../login";
import './index.css';

const Navbar = ({ onOpenMenu, ...rest }) => {
  const { isOpen: isHeaderOpen, onOpen: onHeaderOpen, onClose: onHeaderClose } = useDisclosure();
  const { isOpen: isLoginModalOpen, onOpen: onLoginModalOpen, onClose: onLoginModalClose } = useDisclosure();

  const { colorMode, toggleColorMode } = useColorMode();
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
          <IconButton
            size="lg"
            variant="ghost"
            aria-label="open menu"
            icon={<FiBell />}
            onClick={onLoginModalOpen}
          />
        </HStack>
      </Flex>
      <LoginPage isOpen={isLoginModalOpen} onOpen={onLoginModalOpen} onClose={onLoginModalClose} />
    </>
  );
};

export default Navbar;
