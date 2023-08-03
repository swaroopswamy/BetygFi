"use client"

import React, { useEffect, useState } from "react";
import { Box, Image, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useColorModeValue, useColorMode } from "@chakra-ui/react";
import SplineAreaChart from "./SplineAreaChart"
import { useDispatch, useSelector } from "react-redux";
import PortfolioPanelComponent from "./portfolio.js"
import WalletAnalyticsPanel from "./wallet_analytics";
import TransactionPanelComponent from "./transaction";
import { blockchainTypeChangedReducer, walletAddressChangedReducer } from "@/redux/wallet_dashboard_data/dataSlice";
import { blockchains } from "../../../util/constant";
import { useRouter, useSearchParams } from "next/navigation";

const WalletDashboardPage = () => {
    const searchParam = useSearchParams();
    const { colorMode } = useColorMode();
    const dispatch = useDispatch();
    const [tabIndex, setTabIndex] = useState(0)
    const blockchainSelected = useSelector(
        (state) => state?.walletDashboardTableData?.blockchainType
    );
    const walletAddress = useSelector(
        (state) => state?.walletDashboardTableData?.walletAddress
    );
    const BlockchainTypeHandler = (type) => {
        dispatch(blockchainTypeChangedReducer(type));
    };
    const router = useRouter();
    useEffect(() => {
        console.log(searchParam.get("address"), 'pathname')
        dispatch(walletAddressChangedReducer(searchParam.get("address")))
    }, [])
    console.log(walletAddress,'walletAddress')
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
                                   {walletAddress}
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
                                    bgColor={tabIndex === 0 ?
                                        (colorMode === 'light' ? "#202020" : "#FFFFFF") :
                                        (colorMode === 'light' ? "#F0F0F5" : "#202020")
                                    }
                                >
                                    <Text
                                        fontSize={"10px"}
                                        color={tabIndex === 0 ?
                                            (colorMode === 'light' ? "#FFFFFF" : "#202020") :
                                            (colorMode === 'light' ? "#202020" : "#FFFFFF")
                                        }
                                        fontWeight={tabIndex === 0 ? "700" : "400"}
                                        mr="44px"
                                    >
                                        Portfolio
                                    </Text>
                                    <Image
                                        w="14px"
                                        h="14px"
                                        alt="icon"
                                        src={tabIndex === 0 ? colorMode === 'light' ? ('/images/portfolio_white.png') : ('/images/portfolio_black.png') : colorMode === 'light' ? ('/images/portfolio_black.png') : ('/images/portfolio_white.png')}
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
                                    bgColor={tabIndex === 1 ? colorMode === 'light' ? ("#202020") : ("#FFFFFF") : colorMode === 'light' ? ("#F0F0F5") : ("#202020")}
                                >
                                    <Text
                                        fontSize={"10px"}
                                        fontWeight={tabIndex === 1 ? "700" : "400"}
                                        color={tabIndex === 1 ? colorMode === 'light' ? ("#FFFFFF") : ("#000000") : colorMode === 'light' ? ("#000000") : ("#FFFFFF")}
                                        mr="44px"
                                    >
                                        Wallet Analytics
                                    </Text>
                                    <Image
                                        w="14px"
                                        h="14px"
                                        alt="icon"
                                        src={tabIndex === 1 ? colorMode === 'light' ? ('/images/wallet_analytics_white.png') : ('/images/wallet_analytics_black.png') : colorMode === 'light' ? ('/images/wallet_analytics_black.png') : ('/images/wallet_analytics_white.png')}
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
                                    bgColor={tabIndex === 2 ? colorMode === 'light' ? ("#202020") : ("#FFFFFF") : colorMode === 'light' ? ("#F0F0F5") : ("#202020")}
                                >
                                    <Text
                                        fontSize={"10px"}
                                        fontWeight={tabIndex === 2 ? "700" : "400"}
                                        color={tabIndex === 2 ? colorMode === 'light' ? ("#FFFFFF") : ("#000000") : colorMode === 'light' ? ("#000000") : ("#FFFFFF")}
                                        mr="44px"
                                    >
                                        Transactions
                                    </Text>
                                    <Image
                                        w="14px"
                                        h="14px"
                                        alt="icon"
                                        src={tabIndex === 2 ? colorMode === 'light' ? ('/images/transactions_white.png') : ('/images/transactions_black.png') : colorMode === 'light' ? ('/images/transactions_black.png') : ('/images/transactions_white.png')}
                                    ></Image>
                                </Box>
                            </Tab>
                        </TabList>
                        <Box
                            bgColor={useColorModeValue("#F0F0F5", "#191919")}
                            padding={"32px"}
                        >
                            <Box
                                display={"flex"}
                                flexDirection={"column"}
                            >
                                <Box
                                    w={"100%"}
                                    display={"flex"}
                                    alignItems={"center"}
                                    borderBottom={useColorModeValue("1px solid #CECECE", "1px solid #2F2F2F")}
                                    pb="14px"
                                >
                                    <Box
                                        position={"relative"}
                                        cursor={"pointer"}
                                        fontSize={"10px"}
                                        fontWeight={blockchainSelected.length === 0 ? "700" : "400"}
                                        lineHeight={"20px"}
                                        color={useColorModeValue("#3A3A3A", "#FFFFFF")}
                                        _after={
                                            blockchainSelected.length === 0 && {
                                                position: "absolute",
                                                content: '""',
                                                bottom: "-14px",
                                                left: 0,
                                                width: "100%",
                                                height: "1px",
                                                bgColor: colorMode === 'light' ? "#191919" : "#FFFFFF",

                                            }
                                        }
                                        onClick={() => {
                                            BlockchainTypeHandler("All");
                                        }}
                                        mr={"18px"}
                                    >
                                        ALL
                                    </Box>
                                    {blockchains.map((item, i) => {
                                        return (
                                            <Box
                                                position={"relative"}
                                                cursor={"pointer"}
                                                key={i}
                                                _after={
                                                    blockchainSelected.includes(item) && {
                                                        position: "absolute",
                                                        content: '""',
                                                        bottom: "-14px",
                                                        left: 0,
                                                        width: "100%",
                                                        height: "1px",
                                                        bgColor: colorMode === 'light' ? "#191919" : "#FFFFFF",
                                                    }
                                                }
                                                onClick={() => {
                                                    BlockchainTypeHandler(item);
                                                }}
                                                mr={"18px"}
                                                display={"flex"}
                                                alignItems={"center"}
                                            >
                                                <Image
                                                    w={"20px"}
                                                    h={"20px"}
                                                    mr={"11px"}
                                                    src={`/icons/${item}_sm_icon.svg`}
                                                    alt=""
                                                ></Image>
                                                <Text
                                                    fontSize={"10px"}
                                                    fontWeight={blockchainSelected.includes(item) ? "700" : "400"}
                                                    lineHeight={"20px"}
                                                    color={colorMode === 'light' ?
                                                        blockchainSelected.includes(item) ? "#191919" : "#191919"
                                                        :
                                                        blockchainSelected.includes(item) ? "#FFFFFF" : "#FFFFFF"
                                                    }

                                                >
                                                    {item}
                                                </Text>
                                            </Box>
                                        );
                                    })}
                                </Box>
                            </Box>
                            <TabPanels

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
                                    <TransactionPanelComponent />
                                </TabPanel>

                            </TabPanels>
                        </Box>

                    </Tabs>
                </Box>
            </Box>
        </>
    );
};

export default WalletDashboardPage; 