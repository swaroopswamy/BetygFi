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
import Prefooter from "../components/prefooter";

export default function LayoutProvider({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const screenSize = useScreenSize();
  const isSidebarCollapsed = useSelector(
    (state) => state?.appData?.isSidebarCollapsed
  );
  const isMobileSidebarCollapsed = useSelector(
    (state) => state?.appData?.isMobileSidebarCollapsed
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
          w={isMobileSidebarCollapsed ? "null" : "80%"}
          h={"100%"}
        />
        <Box
          display={{ base: "none", md: isMobileSidebarCollapsed ? "flex" : "none" }}
          flexDirection={"column"}
          // ml={"225px"}
          ml={screenSize?.width < 1450 ?
            0 :
            (isSidebarCollapsed ? 20 : 225)
          }
          w="100%"
        >
          <Navbar onOpenMenu={onOpen} />
          <Box p="0" bgColor={useColorModeValue("#FFF", "#131313")} w="100%">
            {children}
            <Prefooter />
            <Footer />
          </Box>
        </Box>
        <Box
          display={{base:"flex",md:"none"}}
          flexDirection={"column"}
          // ml={"225px"}
          mt={"60px"}
          /* ml={screenSize?.width < 1450 ?
            0 :
            (isSidebarCollapsed ? 20 : 225)
          } */
          w="100%"
        >
          <Navbar onOpenMenu={onOpen} />
          <Box p="0" bgColor={useColorModeValue("#FFF", "#131313")} w="100%">
            {children}
            <Prefooter />
            <Footer />
          </Box>
        </Box>


      </Box>
    </>
  );
}
