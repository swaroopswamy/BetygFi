"use client";
import React from "react";
import { Box, Button, Text, useColorMode } from "@chakra-ui/react";
import Image from "next/image";
import { BreadCrumb } from "@components/breadcrumb2";
import HeatmapGraphBox from "@components/pages/ETFPage/Heatmap";
import ETFNetInflowBox from "@components/pages/ETFPage/ETFNetInflowGraph";
import ETFTracker from "@components/pages/ETFPage/ETFTrackerTable";

const BTCETFPage = () => {
    const { colorMode } = useColorMode();
    return (
        <>
            <Box
                display={"flex"}
                flexDir={"column"}
                bgColor={"background.primary"}
                p={"20px 30px"}
                gap={"20px"}
                pb={{ base: "100px", lg: "20px" }}
            >
                <Box layerStyle={"spaceBetween"}>
                    <BreadCrumb
                        text={"Defi Markets/BTC ETF Tracker"}
                        link={"/protocol"}
                    ></BreadCrumb>
                    <Box layerStyle={"flexCenter"} gap={"5px"}>
                        <Image src={"/icons/Red_Dot.svg"} width={9} height={9} alt=" "></Image>
                        <Text fontSize={"14px"} lineHeight={"17px"} variant={"contentHeading4"}>Market Closed</Text>
                    </Box>
                </Box>
                <Box layerStyle={"flexCenter"} gap={"20px"}>
                    <Box>
                        <Text variant={"h5"} color={colorMode === 'light' ? "#16171B" : "#FFFFFF"} opacity={"80%"}>Total Volume</Text>
                        <Text variant={"h5"} color={colorMode === 'light' ? "#191919" : "#FFFFFF"} fontWeight={500}>$1.47B</Text>
                    </Box>
                    <Box>
                        <Text variant={"h5"} color={colorMode === 'light' ? "#16171B" : "#FFFFFF"} opacity={"80%"}>Total Marketcap</Text>
                        <Text variant={"h5"} color={colorMode === 'light' ? "#191919" : "#FFFFFF"} fontWeight={500}>$1.47B</Text>
                    </Box>
                    <Box>
                        <Text variant={"h5"} color={colorMode === 'light' ? "#16171B" : "#FFFFFF"} opacity={"80%"}>Total AUM</Text>
                        <Text variant={"h5"} color={colorMode === 'light' ? "#191919" : "#FFFFFF"} fontWeight={500}>$1.47B</Text>
                    </Box>
                </Box>
                <Box layerStyle={"flexCenter"} mt={"15px"}>
                    <Box width={"45%"} mr={"1rem"}>
                        <Text variant={"h2"} mb={"15px"}>Heatmap</Text>
                        <Box layerStyle={"flexCenter"} mb={"5px"}>
                            <Button variant={"modalButton"} bg={"background.primary"} height={"35px"} border={"1px solid #E0E0E0"}>
                                Holding
                            </Button>
                            <Button variant={"modalButton"} bg={"background.primary"} height={"35px"} border={"1px solid #E0E0E0"}>
                                Price
                            </Button>
                            <Button variant={"modalButton"} bg={"background.primary"} height={"35px"} border={"1px solid #E0E0E0"}>
                                Volume
                            </Button>
                            <Button variant={"modalButton"} bg={"background.primary"} height={"35px"} border={"1px solid #E0E0E0"}>
                                Turnover
                            </Button>
                            <Button variant={"modalButton"} bg={"background.primary"} height={"35px"} border={"1px solid #E0E0E0"}>
                                Shares
                            </Button>
                            <Button variant={"modalButton"} bg={"background.primary"} height={"35px"} border={"1px solid #E0E0E0"}>
                                AUM
                            </Button>
                            <Button variant={"modalButton"} bg={"background.primary"} height={"35px"} border={"1px solid #E0E0E0"}>
                                Market Cap
                            </Button>
                        </Box>
                        <HeatmapGraphBox />
                    </Box>
                    <Box width={"55%"}>
                        <Text variant={"h2"} mb={"15px"}>Total Bitcoin Spot ETF Net Inflow (USD)</Text>
                        <Box layerStyle={"flexCenter"} mb={"5px"}>
                            <Button variant={"modalButton"} bg={"background.primary"} height={"35px"} border={"1px solid #E0E0E0"}>
                                Flows (USD)
                            </Button>
                            <Button variant={"modalButton"} bg={"background.primary"} height={"35px"} border={"1px solid #E0E0E0"}>
                                AUM
                            </Button>
                            <Button variant={"modalButton"} bg={"background.primary"} height={"35px"} border={"1px solid #E0E0E0"}>
                                Market Cap
                            </Button>
                            <Button variant={"modalButton"} bg={"background.primary"} height={"35px"} border={"1px solid #E0E0E0"}>
                                Volume
                            </Button>
                        </Box>
                        <ETFNetInflowBox />
                    </Box>
                </Box>
                <Box mt={"15px"} w={"100%"}>
                    <ETFTracker />
                </Box>
            </Box>
        </>
    );
};

export default BTCETFPage;