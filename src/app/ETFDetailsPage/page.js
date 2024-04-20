"use client";
import React from "react";
import { Box, Text, useColorMode } from "@chakra-ui/react";
import { BreadCrumb } from "@components/breadcrumb2";
import News from "@components/pages/ETFPage/News";
import ARKInvest from "@components/pages/ETFPage/ARKInvestBox";
import ARK21Shares from "@components/pages/ETFPage/ARK21SharesChart";
import ETFNetInflowBox from "@components/pages/ETFPage/ETFNetInflowGraph";
import KeyStats from "@components/pages/ETFPage/KeyStatsBox";

const BTCETFDetailsPage = () => {
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
                <Box>
                    <BreadCrumb
                        text={"Defi Markets/BTC ETF Tracker/ARK 21Shares Bitcoin ETF"}
                        link={"/ETF"}
                    ></BreadCrumb>
                </Box>
                <Box mt={"10px"}>
                    <Text variant={"contentHeading"} fontWeight={500} lineHeight={"20px"} letterSpacing={"0.1em"}>ARK 21Shares Bitcoin ETF</Text>
                    <Text variant={"h3"} lineHeight={"21px"} mt={"15px"} letterSpacing={"0.1em"}>ARK Invest</Text>
                </Box>
                <Box display={"flex"}>
                    <Box width={"68%"} mr={"0.8rem"}>
                        <ARKInvest />
                    </Box>
                    <Box width={"32%"}>
                        <Text variant={"contentHeading4"} fontSize={"20px"} lineHeight={"20px"} mb={"15px"} mt={"-35px"}>Key Stats</Text>
                        <KeyStats />
                    </Box>
                </Box>
                <Box display={"flex"}>
                    <Box width={"68%"} mr={"0.8rem"} mt={"-185px"}>
                        <ARK21Shares />
                    </Box>
                    <Box width={"32%"}>
                        <Text variant={"contentHeading4"} fontSize={"20px"} lineHeight={"20px"} mb={"10px"}>News</Text>
                        <News />
                    </Box>
                </Box>
                <Box width={"67%"} mr={"0.8rem"} mt={"-180px"} bg={colorMode === 'light' ? "#FFFFFF" : "#282828"} borderRadius={"8px"}>
                    <Box padding={"20px"}>
                        <Text variant={"contentHeading4"} fontSize={"20px"} lineHeight={"20px"}>Total Bitcoin Spot ETF Net Inflow (USD)</Text>
                    </Box>
                    <ETFNetInflowBox />
                </Box>
            </Box>
        </>
    );
};

export default BTCETFDetailsPage;