"use client";
import React from "react";
import { Box, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { useSelector } from "react-redux";

import "/styles/styles.scss";
import SidebarContent from "./components/sidebar";
import Footer from "./components/footer";
import Navbar from "./components/header";

export default function LayoutProvider({ children }) {
  console.log("coming here");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isSidebarCollapsed = useSelector(
    (state) => state?.appData?.isSidebarCollapsed
  );
  const isMobileSidebarCollapsed = useSelector(
    (state) => state?.appData?.isMobileSidebarCollapsed
  );
  return (
    <Box
      width="100%"
      minH="100vh"
      bg={useColorModeValue("#F0F0F5", "#191919")}
      display={"flex"}
    >
      <SidebarContent
        onClose={() => onClose}
        w={isMobileSidebarCollapsed ? "null" : "80%"}
        h={"100%"}
      />

      <Box
        display={{
          base: "none",
          md: isMobileSidebarCollapsed ? "flex" : "none",
        }}
        flexDirection={"column"}
        className="margin-conditions"
        id="main-body"
        aria-expanded={isSidebarCollapsed ? "false" : "true"}
        // ml={"225px"}
        //ml={isSidebarCollapsed ? 20 : 225}
        // ml={screenSize?.width < 1450 ?
        //   0 :
        //   (isSidebarCollapsed ? 20 : 225)
        // }
        w="100%"
        overflowX={"hidden"}
      >
        <Navbar onOpenMenu={onOpen} />
        <Box p="0" bgColor={useColorModeValue("#FFF", "#131313")} w="100%">
          {children}
          {/* <Prefooter /> */}
          <Footer />
        </Box>
      </Box>

      <Box
        display={{ base: "flex", md: "none" }}
        flexDirection={"column"}
        overflowX={"hidden"}
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
          {/* <Prefooter /> */}
          <Footer />
        </Box>
      </Box>
    </Box>
  );
}
