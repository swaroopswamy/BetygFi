"use client";
import {
  Box,
  Flex,
  Text,
  useColorMode,
  useColorModeValue,
  Image,
  Icon,
  useDisclosure,
  Slide,
} from "@chakra-ui/react";
import { Manrope } from "next/font/google";
import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
const manrope = Manrope({ weight: ["400"], subsets: ["latin"] });

const Footer = ({ ...rest }) => {
  const { isOpen, onToggle } = useDisclosure();
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > scrollValue) {
        setIsScrolledDown(true);
        setScrollValue(window.scrollY);
      } else {
        onToggle();
        setIsScrolledDown(false);
        setScrollValue(window.scrollY);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <>
      <Box
        position={"relative"}
        bottom="0"
        width="100%"
        display={{ base: "none", md: "flex" }}
        justifyContent="flex-start"
        padding={2}
        bg={useColorModeValue("#F0F0F5", "#191919")}
        pt={"14px"}
        px={{ base: "10px", md: "10px" }}
        // marginLeft={"11px"}
      >
        <Box
          ml={{ base: 0, md: 0 }}
          alignItems="flex-start"
          display={"flex"}
          w={"100%"}
          h={"100%"}
        >
          {/* <Box
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
              color={useColorModeValue("#16171B","#FFFFFF")}
            >
              Approach Paper
            </Text>
            <Text
              mr={{ base: 2, md: 4 }}
              fontSize={"10px"}
              lineHeight={"20px"}
              letterSpacing={"10%"}
              fontWeight={manrope.style.fontWeight}
              color={useColorModeValue("#16171B","#FFFFFF")}
            >
              APIs
            </Text>
            <Text
              mr={{ base: 2, md: 4 }}
              fontSize={"10px"}
              lineHeight={"20px"}
              letterSpacing={"10%"}
              fontWeight={manrope.style.fontWeight}
              color={useColorModeValue("#16171B","#FFFFFF")}
            >
              Contact
            </Text>
          </Box> */}
          <Box
            ml={{ base: 0, md: 0 }}
            mr={{ base: 2, md: 4 }}
            display={"flex"}
            justifyContent={"center"}
            alignItems="flex-start"
          >
            <Text
              mr={{ base: 2, md: 4 }}
              fontSize={"14px"}
              lineHeight={"20px"}
              letterSpacing={"10%"}
              fontWeight={manrope.style.fontWeight}
              color={useColorModeValue("#16171B", "#FFFFFF")}
              paddingLeft={"10px"}
            >
              &#169; 2023 Solvendo. All Rights Reserved.
            </Text>
          </Box>
        </Box>
      </Box>

      <Box
        opacity={!isScrolledDown ? 1 : 0} // Adjust opacity based on visibility
        transition="opacity 0.1 s ease-in-out" // Add a fade transition
        position={"fixed"}
        bottom="0"
        width="100%"
        display={{ base: "flex", md: "none" }}
        bg={useColorModeValue("#F0F0F5", "#272727")}
        height={"85px"}
      >
        <Box width={"100%"} display={"flex"} justifyContent={"space-evenly"}>
          <FooterMobileLink name={"Home"} id={"home"} link={"/"} />
          <FooterMobileLink
            name={"Approach Paper"}
            id={"approachpaper"}
            link={"/approach-paper"}
          />
          <FooterMobileLink
            name={"Top Wallets"}
            id={"wallet"}
            link={"/top-wallets"}
          />
          <FooterMobileLink name={"Community"} id={"community"} link={""} />
        </Box>
      </Box>
    </>
  );
};

export default Footer;

const FooterMobileLink = ({ name, id, link }) => {
  const { colorMode } = useColorMode();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      <Box
        display={"flex"}
        flexDir={"column"}
        padding={"10px 10px"}
        justifyContent={"center"}
        justifyItems={"center"}
        position="relative"
        className="test"
        gap={"10px"}
        cursor={"pointer"}
        onClick={() => {
          router.push(link);
        }}
        borderColor={"#FFF"}
        _after={
          pathname === link && {
            position: "absolute",
            content: '""',
            top: "72px",
            left: 0,
            width: "100%",
            height: "5px",
            bgColor: colorMode === "light" ? "#202020" : "#FFFFFF",
          }
        }
      >
        <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
          <Image
            width={{ base: "25px", sm: "30px" }}
            height={{ base: "25px", sm: "30px" }}
            src={
              pathname === link
                ? colorMode === "light"
                  ? `/icons/${id}_footer_logo_bold_dark.svg`
                  : `/icons/${id}_footer_logo_bold_light.svg`
                : `/icons/${id}_footer_logo.svg`
            }
            alt="footer_logo"
          />
        </Box>
        <Text
          fontSize={{ base: "12px", sm: "14px" }}
          fontWeight={pathname === link ? "600" : "400"}
          lineHeight={"20px"}
          textTransform={"capitalize"}
          textAlign={"center"}
        >
          {name}
        </Text>
      </Box>
    </>
  );
};

