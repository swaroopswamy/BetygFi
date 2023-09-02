"use client"
import { Box, Image, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useColorModeValue, Flex, Tooltip, TableContainer, Table, Thead, Tr, Th, Tbody, Td, Spacer, Button, useColorMode } from "@chakra-ui/react";
import { DownloadIcon } from '@chakra-ui/icons'

import React from "react";
import { useSelector } from "react-redux";
import millify from "millify";
// import ViewmoreDefiusers from "./ViewmoreDefiusers";

const TVLBox = () => {
    const { colorMode } = useColorMode();
    const defiData = useSelector(
        (state) => state?.defiDashboardData?.DefiData
    )
    return (

        <Box
            minW={"331px"}
            height={"349px"}
            display={"flex"}
            flexDirection={"column"}
            borderRadius={"6px"}

            _dark={{ bg: "#202020" }}
            _light={{ bg: "#FFFFFF" }}
            mr="20px">
            <Box p={"20px"} >
                <Text
                    _light={{ color: "#16171B" }}
                    _dark={{ color: "#FFFFFF" }}
                    fontSize={"24px"}
                    fontWeight={600}
                    lineHeight={"20px"}
                    letterSpacing={"2.4px"}
                    textTransform={"uppercase"}>
                    ${" "}{defiData?.isSuccess ? (millify(defiData?.data?.tvl, {
                        precision: 2,
                        locales: "en-US"})) : 
                        "-"}
                </Text>
                <Text
                    _light={{ color: "#16171B" }}
                    _dark={{ color: "#FFFFFF" }}
                    textAlign={"left"}
                    fontSize={"12px"}
                    fontWeight={400}
                    lineHeight={"10px"}
                    pt={"10px"}
                >
                    Total Value Locked
                </Text>
                <Image src={colorMode === 'light' ? ("/images/TVLline(light).svg") : ("/images/TVLline(dark).svg")} pt={"20px"} alt=""></Image>
                <Flex>
                    <Text
                        _light={{ color: "#16171B" }}
                        _dark={{ color: "#FFFFFF" }}
                        fontSize={"14px"}
                        fontWeight={400}
                        lineHeight={"27px"}
                        pt={"20px"}>
                        Market Cap<br></br>
                        Token Price<br></br>
                        {/* Fully Diluted Valuation<br></br>
                        Borrowed<br></br>
                        Users<br></br>
                        User Deposits<br></br> */}
                    </Text>
                    <Spacer />
                    <Text
                        _light={{ color: "#16171B" }}
                        _dark={{ color: "#FFFFFF" }}
                        fontSize={"14px"}
                        fontWeight={400}
                        lineHeight={"27px"}
                        textAlign={"right"}
                        pt={"20px"}>
                        ${" "}{defiData?.isSuccess ? (millify(defiData?.data?.mcap, {
                            precision: 2,
                            locales: "en-US"
                        })) : "-"}
                        <br></br>
                        ${" "}{defiData?.isSuccess ? (millify(defiData?.data?.price, {
                            precision: 2,
                            locales: "en-US"
                        })) : "-"}
                        <br></br>
                        {/* $231.35m<br></br>
                        $84.15m<br></br>
                        38,682<br></br>
                        $304,481,901<br></br> */}
                    </Text>
                </Flex>
                <Flex>
                    {/* <Button
                        variant={"outline"}
                        size={"xs"}
                        borderRadius={"2px"}
                        border={"1px solid #333"}
                        //solid={"#333"}
                        _light={{ bgColor: "#F5F5F7" }}
                        _dark={{ bgColor: "#191919" }}
                        mt={"22px"}> */}
                    {/* <Flex>
                            <DownloadIcon pt={"5px"} 
                                          width={"12px"}
                                          height={"12px"}></DownloadIcon>
                            <Text
                                _light={{ color: "#16171B" }}
                                _dark={{ color: "#FFFFFF" }}
                                textAlign={"right"}
                                fontSize={"12px"}
                                fontWeight={400}
                                lineHeight={"10px"}
                                pt={"3px"}
                                paddingLeft={"2px"}
                            >
                                .CSV
                            </Text>
                        </Flex>  */}
                    {/* </Button> */}
                    <Spacer />
                    <Text
                        color={"#A8ADBD"}
                        fontSize={"12px"}
                        fontWeight={400}
                        lineHeight={"20px"}
                        pt={"25px"}>
                        Last Update
                    </Text>
                    <Text
                        _light={{ color: "#16171B" }}
                        _dark={{ color: "#FFFFFF" }}
                        fontSize={"12px"}
                        fontWeight={400}
                        lineHeight={"20px"}
                        pt={"25px"}
                        pl={"3px"}
                    >
                        3 mins ago
                    </Text>
                </Flex>
            </Box>
        </Box >

    )

}
export default TVLBox;