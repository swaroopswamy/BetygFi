"use client";
import { Box, Flex, Text, useColorMode, useColorModeValue, Image, Icon } from "@chakra-ui/react";
import { Manrope } from "next/font/google";
import HomeIcon from "../../../../public/icons/home_sm_logo.svg";
import ApproachPaperIcon from '../../../../public/icons/approach-paper-icon.svg';
import WalletIcon from "../../../../public/icons/wallet_sm_logo.svg";
import CommunityIcon from "../../../../public/icons/community_sm_logo.svg";
import React, { useState } from "react";
const manrope = Manrope({ weight: ["400"], subsets: ["latin"] });


const Footer = ( {...rest}) => {
  const [ footerTab, setFooterTab ] = useState("Home");

  return (
    <>
      <Box
        position={"fixed"}
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
        position={"fixed"}
        bottom="0"
        width="100%"
        display={{ base: "flex", md: "none" }}
        bg={useColorModeValue("#F0F0F5", "#191919")}
        height={"75px"}
      >
        <Box
          width={"100%"}
          display={"flex"}
          justifyContent={"space-evenly"}
        >
          <FooterMobileLink
            name={"Home"}
            FooterIcon={HomeIcon}
            footerTab={footerTab}
            setFooterTab={setFooterTab}
          />
          <FooterMobileLink
            name={"Approach Paper"}
            FooterIcon={ApproachPaperIcon}
            footerTab={footerTab}
            setFooterTab={setFooterTab}
          />
          <FooterMobileLink
            name={"Top Wallets"}
            FooterIcon={WalletIcon}
            footerTab={footerTab}
            setFooterTab={setFooterTab}
          />
          <FooterMobileLink
            name={"Community"}
            FooterIcon={CommunityIcon}
            footerTab={footerTab}
            setFooterTab={setFooterTab}
          />
        </Box>
      </Box>
    </>
  );
};

export default Footer;

const FooterMobileLink = ( {name, FooterIcon, footerTab, setFooterTab} ) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Box
        display={"flex"}
        flexDir={"column"}
        padding={"10px 10px"}
        justifyContent={"center"}
        justifyItems={"stretch"}
        position="relative"
        className="test"
        gap={"10px"}
        onClick={() => {
          setFooterTab(name);
        }}
        //borderBottom={footerTab === name ? "3px" : "none"}
        borderColor={"#FFF"}
        _after={
          footerTab === name && {
            position: "absolute",
            content: '""',
            top: "72px",
            left: 0,
            width: "100%",
            height: "5px",
            bgColor: colorMode === 'light' ? "#202020" : "#FFFFFF",
          }
        }
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Icon
            _groupHover={{
              color: "white",
            }}
            width={"15px"} 
            height={"20px"}
            as={FooterIcon}
          />
        </Box>
        <Text
          fontSize={"14px"}
          fontWeight={footerTab === name ? "600" : "400"}
          lineHeight={"20px"}
          textTransform={"capitalize"}
        >
          {name}
        </Text>
      </Box>
    </>
  )
}

// const HomeIcon = (props) => {
//   <Icon viewBox="0 0 15 15" {...props}>
//     <path d="M1 5.2L6.4 1L11.8 5.2V11.8C11.8 12.1183 11.6736 12.4235 11.4485 12.6485C11.2235 12.8736 10.9183 13 10.6 13H2.2C1.88174 13 1.57652 12.8736 1.35147 12.6485C1.12643 12.4235 1 12.1183 1 11.8V5.2Z" 
//     stroke='#FFF' stroke-linecap="round" stroke-linejoin="round"/>
//   </Icon>
// }
