"use client";
import React, { useEffect } from "react";
import { Box, Text, useColorMode } from "@chakra-ui/react";
import { BreadCrumb } from "@components/breadcrumb2";
import { useDispatch } from "react-redux";
import News from "@components/pages/coin/ETFPage/News";
import ARKInvest from "@components/pages/coin/ETFPage/ARKInvestBox";
import ARK21Shares from "@components/pages/coin/ETFPage/ARK21SharesChart";
import TickerETFNetInflowBox from "@components/pages/coin/ETFPage/TickerETFNetInflowGraph";
import KeyStats from "@components/pages/coin/ETFPage/KeyStatsBox";
import { fetchTickerETFInflowOutflowData, fetchETFChartData } from "@redux/coin_data/dataSlice";

const BTCETFDetailsPage = ({ params }) => {
    const ticker = params?.ticker;
    const { colorMode } = useColorMode();
    const dispatch = useDispatch();

    const getTickerETFInflowOutflowDataHandler = () => {
        const payload = {
            ticker: ticker
        };
        dispatch(fetchTickerETFInflowOutflowData(payload));
    };

    const getETFChartDataHandler = () => {
        const payload = {
            ticker: ticker
        };
        dispatch(fetchETFChartData(payload));
    };

    useEffect(() => {
        Promise.all([
            getTickerETFInflowOutflowDataHandler(),
            getETFChartDataHandler(),
        ]).then(res => res);
    }, []);

    return (
        <Box
            display={"flex"}
            flexDir={"column"}
            bgColor={"background.primary"}
            p={"20px 30px"}
            gap={"20px"}
            pb={{ base: "100px", lg: "20px" }}
        >
            <BreadCrumb
                text={`Defi Markets/BTC ETF Tracker/${ticker}`}
                link={"/etf"}
            ></BreadCrumb>
            <Box mt={"10px"}>
                <Text variant={"contentHeading"} fontWeight={500} lineHeight={"20px"} letterSpacing={"0.1em"}>{ticker} ETF</Text>
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
                    <Text variant={"contentHeading4"} fontSize={"20px"} lineHeight={"20px"}>Total {ticker} Spot ETF Net Inflow (USD)</Text>
                </Box>
                <TickerETFNetInflowBox />
            </Box>
        </Box>
    );
};

export default BTCETFDetailsPage;