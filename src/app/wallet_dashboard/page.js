"use client"

import React, { useState } from "react";
import { Box, Image, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useColorModeValue } from "@chakra-ui/react";
import SplineAreaChart from "./SplineAreaChart"
import { useDispatch, useSelector } from "react-redux";
import PortfolioPanelComponent from "./portfolio.js"
import WalletAnalyticsPanel from "./wallet_analytics";

const WalletDashboardPage = () => {
    const dispatch = useDispatch();
    const [tabIndex, setTabIndex] = useState(0)
   
    return (
        <>
            <Box
                bgColor={useColorModeValue("#FFFFFF", "#131313")}
                display={"flex"}
                flexDirection={"column"}
            >
                <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    padding={"38px 30px 50px 30px"}

                >
                    <Box
                        display={"flex"}
                        alignItems={"center"}
                    >
                        <Box
                            marginRight={"22px"}
                        >
                            <Image
                                w="47px"
                                h="47px"
                                borderRadius={"50%"}
                                src="/images/basic_profile.png"
                                alt="proifile_img"
                            />
                        </Box>
                        <Box
                            display={"flex"}
                            flexDirection={"column"}
                        >
                            <Text
                                fontSize={"24px"}
                                fontWeight={"400"}
                                lineHeight={"20px"}
                                color={useColorModeValue("#191919", "#FFF")}
                                letterSpacing={"2.4px"}
                            >
                                Illuvium
                            </Text>
                            <Box
                                display={"flex"}
                                alignItems={"center"}
                                mt={"13px"}
                            >
                                <Text
                                    fontSize={"10px"}
                                    fontWeight={"400"}
                                    color={useColorModeValue("#000000", "#A8ADBD")}
                                    borderRight={useColorModeValue("1px solid #000000", "1px solid #A8ADBD")}
                                    paddingRight={"15px"}
                                >
                                    0x8b4d8443a0229349a98  92d4f7cbe89ef5f843f72F
                                </Text>
                                <Text
                                    fontSize={"10px"}
                                    fontWeight={"400"}
                                    lineHeight={"20px"}
                                    color={useColorModeValue("#3A3A3A", "#A8ADBD")}
                                    paddingLeft={"15px"}
                                    marginRight={"13px"}
                                >
                                    AGE
                                </Text>
                                <Text
                                    fontSize={"10px"}
                                    fontWeight={"500"}
                                    lineHeight={"20px"}
                                    color={useColorModeValue("#191919", "#FFF")}

                                >
                                    850 Days
                                </Text>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        position={"relative"}
                    >
                        <SplineAreaChart />
                        <Box
                            position={"absolute"}
                            bottom={0}
                            right={0}
                            display={"flex"}
                            flexDirection={"column"}
                        >
                            <Text
                                fontSize={"12px"}
                                fontWeight={"300"}
                                color={useColorModeValue("#16171B", "#FFFFFF")}

                            >
                                Net Worth
                            </Text>
                            <Text
                                fontSize={"24px"}
                                fontWeight={"400"}
                                color={useColorModeValue("#16171B", "#FFFFFF")}
                                letterSpacing={"2.4px"}
                            //  mt="15px"
                            >
                                $4,284,899
                            </Text>
                            <Box
                                display={"flex"}
                                alignItems={"center"}
                                mt="6px"
                            >
                                <Text
                                    fontSize={"10px"}
                                    fontWeight={"400"}
                                    color={useColorModeValue("#16171B", "#FFFFFF")}
                                >
                                    Last Update
                                </Text>
                                <Text
                                    fontSize={"10px"}
                                    fontWeight={"400"}
                                    color={useColorModeValue("#16171B", "#FFFFFF")}
                                >
                                    3 mins ago
                                </Text>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <Tabs onChange={(index) => setTabIndex(index)} >
                        <TabList
                            paddingLeft="30px"
                        >
                            <Tab    
                                padding="0"
                            >
                                <Box
                                    display={"flex"}
                                    alignItems={"center"}
                                    padding={"13px 19px 13px 17px"}
                                    bgColor={tabIndex === 0 ? useColorModeValue("#202020", "#FFFFFF") : useColorModeValue("#F0F0F5", "#202020")}
                                >
                                    <Text
                                        fontSize={"10px"}
                                        fontWeight={tabIndex === 0 ? "700" : "400"}
                                        color={tabIndex === 0 ? useColorModeValue("#FFFFFF", "#000000") : useColorModeValue("#000000", "#FFFFFF")}
                                        mr="44px"
                                    >
                                        Portfolio
                                    </Text>
                                    <Image
                                        w="14px"
                                        h="14px"
                                        alt="icon"
                                        src={tabIndex === 0 ? useColorModeValue('/images/portfolio_white.png', '/images/portfolio_black.png') : useColorModeValue('/images/portfolio_black.png', '/images/portfolio_white.png')}
                                    ></Image>
                                </Box>
                            </Tab>
                            <Tab
                                padding="0"
                            >
                                <Box
                                    display={"flex"}
                                    alignItems={"center"}
                                    padding={"13px 19px 13px 17px"}
                                    bgColor={tabIndex === 1 ? useColorModeValue("#202020", "#FFFFFF") : useColorModeValue("#F0F0F5", "#202020")}
                                >
                                    <Text
                                        fontSize={"10px"}
                                        fontWeight={tabIndex === 1 ? "700" : "400"}
                                        color={tabIndex === 1 ? useColorModeValue("#FFFFFF", "#000000") : useColorModeValue("#000000", "#FFFFFF")}
                                        mr="44px"
                                    >
                                        Wallet Analytics
                                    </Text>
                                    <Image
                                        w="14px"
                                        h="14px"
                                        alt="icon"
                                        src={tabIndex === 1 ? useColorModeValue('/images/wallet_analytics_white.png', '/images/wallet_analytics_black.png') : useColorModeValue('/images/wallet_analytics_black.png', '/images/wallet_analytics_white.png')}
                                    ></Image>
                                </Box>
                            </Tab>
                            <Tab
                                padding="0"
                            >
                                <Box
                                    display={"flex"}
                                    alignItems={"center"}
                                    padding={"13px 19px 13px 17px"}
                                    bgColor={tabIndex === 2 ? useColorModeValue("#202020", "#FFFFFF") : useColorModeValue("#F0F0F5", "#202020")}
                                >
                                    <Text
                                        fontSize={"10px"}
                                        fontWeight={tabIndex === 2 ? "700" : "400"}
                                        color={tabIndex === 2 ? useColorModeValue("#FFFFFF", "#000000") : useColorModeValue("#000000", "#FFFFFF")}
                                        mr="44px"
                                    >
                                        Transactions
                                    </Text>
                                    <Image
                                        w="14px"
                                        h="14px"
                                        alt="icon"
                                        src={tabIndex === 2 ? useColorModeValue('/images/transactions_white.png', '/images/transactions_black.png') : useColorModeValue('/images/transactions_black.png', '/images/transactions_white.png')}
                                    ></Image>
                                </Box>
                            </Tab>
                        </TabList>

                        <TabPanels
                            bgColor={useColorModeValue("#F0F0F5", "#191919")}
                            padding={"32px"}
                        >
                            <TabPanel
                                p="0px"
                            >
                               <PortfolioPanelComponent />
                            </TabPanel>
                            <TabPanel>
                                <WalletAnalyticsPanel />
                            </TabPanel>
                            <TabPanel>
                                <p>three!</p>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Box>
            </Box>
        </>
    );
};

export default WalletDashboardPage; 