"use client";
import React from "react";
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
} from "react-icons/fi";
import { useSelector } from "react-redux";
import Navbar from "../components/header";
import Footer from "../components/footer";
import SidebarContent from "../components/sidebar";
import useScreenSize from "@/hooks/useScreenSize";

export default function LayoutProvider({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const screenSize = useScreenSize();
  const isSidebarCollapsed = useSelector(
    (state) => state?.appData?.isSidebarCollapsed
  );
  return (
    <>
      <Box
        width="100%"
        minH="100vh" bg={useColorModeValue("#F0F0F5", "#191919")}
        display={"flex"}
      >
        <SidebarContent
          onClose={() => onClose}
          display={{ base: "none", md: "flex" }}
        />
        {/* <Drawer
          autoFocus={false}
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="full"
        >
          <DrawerContent>
            <SidebarContent onClose={onClose} />
          </DrawerContent>
        </Drawer> */}
        <Box
          display={"flex"}
          flexDirection={"column"}
          w="100%"
          ml={screenSize?.width < 1450 ? 
            0 : 
            (isSidebarCollapsed ? 20 : 225) 
          }
        >
          <Navbar onOpenMenu={onOpen} />
          <Box p="0" bgColor={useColorModeValue("#FFF", "#131313")}>
            {children}
            <Footer />
          </Box>
        </Box>


      </Box>
    </>
  );
}
