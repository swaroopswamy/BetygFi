"use client"
import { Box, Image, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useColorModeValue,  Flex, Tooltip, TableContainer, Table, Thead, Tr, Th, Tbody, Td, Spacer, Button, useColorMode } from "@chakra-ui/react";
import { DownloadIcon } from '@chakra-ui/icons'

import React from "react";
// import ViewmoreDefiusers from "./ViewmoreDefiusers";

const TVLBox = () => {
  const { colorMode } = useColorMode();
    return (

    <Box 
        _dark={{ bg: "#191919" }}
        _light={{ bg: " #F0F0F5" }}>
   
            <Box
            display={'inline-flex'}
            w="100%"
           _light={{bgColor:"#F0F0F5"}}
           _dark={{bgColor:"#191919"}}
            >
        <Box
            w={"331px"}
            height={"349px"}
            display={"flex"}
            flexDirection={"column"}
            borderRadius={"6px"}
            ml={"30px"}
            _dark={{bg: "#202020"}}
            _light={{bg: "#FFFFFF"}}
            mr="10px">
            <Box p={"20px"} >
                <Text
                    _light={{color:"#16171B"}}
                    _dark={{color:"#FFFFFF"}}
                    fontSize={"24px"}
                    fontWeight={"400"}
                    lineHeight={"20px"}
                    letterSpacing={"2.4px"}
                    textTransform={"uppercase"}>
                    $3.7b
                </Text>
                <Text
                    _light={{color:"#16171B"}}
                    _dark={{color:"#FFFFFF"}}
                    textAlign={"left"}
                    fontSize={"10px"}
                    fontWeight={"400"}
                    lineHeight={"10px"}
                    pt={"10px"}
                >
                    Total Value Locked
                </Text>
                <Image src={colorMode === 'light' ? ("/images/TVLline(light).svg"):("/images/TVLline(dark).svg")} pt={"20px"}></Image>
                <Flex>
                    <Text
                        _light={{color:"#16171B"}}
                        _dark={{color:"#FFFFFF"}}
                        fontSize={"10px"}
                        fontWeight={"400"}
                        lineHeight={"30px"}
                        pt={"20px"}>
                        Market Cap<br></br>
                        Token Price<br></br>
                        Fully Diluted Valuation<br></br>
                        Borrowed<br></br>
                        Users<br></br>
                        User Deposits<br></br>
                    </Text>
                    <Spacer />
                    <Text
                        _light={{color:"#16171B"}}
                        _dark={{color:"#FFFFFF"}}
                        fontSize={"10px"}
                        fontWeight={"400"}
                        lineHeight={"30px"}
                        textAlign={"right"}
                        pt={"20px"}>
                        $207.83m<br></br>
                        $0.02337<br></br>
                        $231.35m<br></br>
                        $84.15m<br></br>
                        38,682<br></br>
                        $304,481,901<br></br>
                    </Text>
                </Flex>
                <Flex>
                 <Button 
                    variant={"outline"} 
                    size={"xs"} 
                    borderRadius={"2px"} 
                    border={"1px"}
                    solid={"#333"}
                    _light={{bgColor:"#F5F5F7"}}
                    _dark={{bgColor:"#191919"}}
                    mt={"15px"}>
                    <Flex>
                    <DownloadIcon pt={"5px"}></DownloadIcon>
                    <Text
                        _light={{color:"#16171B"}}
                        _dark={{color:"#FFFFFF"}}
                        textAlign={"right"}
                        fontSize={"10px"}
                        fontWeight={"400"}
                        lineHeight={"10px"}
                        pt={"3px"}
                        paddingLeft={"2px"}
                        >
                        .CSV
                    </Text>
                    </Flex>
                    </Button>
                <Spacer />
                <Text
                _light={{color:"#434347"}}
                _dark={{color:"#A8ADBD"}}
                fontSize={"10px"}
                fontWeight={"400"}
                lineHeight={"20px"}
                pt={"25px"}>
                 Last Update
                </Text>
                <Text
                _light={{color:"#16171B"}}
                _dark={{color:"#FFFFFF"}}
                fontSize={"10px"}
                fontWeight={"400"}
                lineHeight={"20px"}
                pt={"25px"}
                pl={"3px"}
                >
                 3 mins ago
                </Text>
                </Flex>
            </Box>
        </Box>
            </Box>
    </Box>

    )

}
export default TVLBox;