"use client";
import { Box, Flex, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { Manrope } from "next/font/google";

const manrope = Manrope({ weight: ["400"], subsets: ["latin"] });

import React from "react";

const Footer = () => {
  return (
    <>
      <Box
        position={"relative"}
        bottom="0"
        width="100%"
        display="flex"
        justifyContent="flex-start"
        padding={2}
        height="20px"
        my={"14px"}
        px={{ base: "10px", md: "10px" }}
      >
        <Box
          ml={{ base: 0, md: 0 }}
          alignItems="flex-start"
          display={"flex"}
          bg={useColorModeValue()}
        >
          <Box
            ml={{ base: 0, md: 0 }}
            mr={{ base: 2, md: 4 }}
            display={"flex"}
            justifyContent={"center"}
            alignItems="flex-start"
            borderRight={"1px solid #1E1E1E"}
          >
            <Text
              mr={{ base: 2, md: 4 }}
              fontSize={"10px"}
              lineHeight={"20px"}
              letterSpacing={"10%"}
              fontWeight={manrope.style.fontWeight}
            >
              Approach Paper
            </Text>
            <Text
              mr={{ base: 2, md: 4 }}
              fontSize={"10px"}
              lineHeight={"20px"}
              letterSpacing={"10%"}
              fontWeight={manrope.style.fontWeight}
            >
              APIs
            </Text>
            <Text
              mr={{ base: 2, md: 4 }}
              fontSize={"10px"}
              lineHeight={"20px"}
              letterSpacing={"10%"}
              fontWeight={manrope.style.fontWeight}
            >
              Contact
            </Text>
          </Box>
          <Box
            ml={{ base: 0, md: 0 }}
            mr={{ base: 2, md: 4 }}
            display={"flex"}
            justifyContent={"center"}
            alignItems="flex-start"
          >
            <Text
              mr={{ base: 2, md: 4 }}
              fontSize={"10px"}
              lineHeight={"20px"}
              letterSpacing={"10%"}
              fontWeight={manrope.style.fontWeight}
            >
              &#169; 2023 Solvendo. All Rights Reserved.
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
