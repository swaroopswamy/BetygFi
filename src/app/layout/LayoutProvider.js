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
  const isMobileSidebarCollapsed = useSelector(
    (state) => state?.appData?.isMobileSidebarCollapsed
  );
  console.log(isMobileSidebarCollapsed);
  return (
    <>
      <Box
        width="100%"
        minH="100vh" bg={useColorModeValue("#F0F0F5", "#191919")}
        display={"flex"}
      >
        <SidebarContent
          onClose={() => onClose}
          w={isMobileSidebarCollapsed ? "null" : "80%"}
          h={"100%"}
        />
        <Box
          display={isMobileSidebarCollapsed ? "flex" : "none"}
          flexDirection={"column"}
          w="100%"
        >
          <Navbar onOpenMenu={onOpen} />
          <Box p="0" bgColor={useColorModeValue("#FFF", "#131313")} w="100%">
            {children}
            <Footer />
          </Box>
        </Box>


      </Box>
    </>
  );
}
