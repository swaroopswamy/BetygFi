"use client";
import React, { useEffect } from "react";
import { Box, Text, useColorMode } from "@chakra-ui/react";
import { BreadCrumb } from "@components/breadcrumb2";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import News from "@components/pages/coin/ETFPage/News";
import ARKInvest from "@components/pages/coin/ETFPage/ARKInvestBox";
import ARK21Shares from "@components/pages/coin/ETFPage/SharesChart";
import TickerETFNetInflowBox from "@components/pages/coin/ETFPage/TickerETFNetInflowGraph";
import KeyStats from "@components/pages/coin/ETFPage/KeyStatsBox";
import { fetchTickerETFInflowOutflowData, fetchETFChartData, fetchETFNewsData } from "@redux/coin_data/dataSlice";

const BTCETFDetailsPage = ({ params }) => {
    const ticker = params?.ticker;
    const { colorMode } = useColorMode();
    const dispatch = useDispatch();
    const ValidatedUserData = useSelector((state) => state.authData.ValidatedUserData);

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

    const getETFNewsDataHandler = () => {
        const payload = {
            ticker: ticker
        };
        dispatch(fetchETFNewsData(payload));
    };

    useEffect(() => {
        Promise.all([
            getTickerETFInflowOutflowDataHandler(),
            getETFChartDataHandler(),
            getETFNewsDataHandler(),
        ]).then(res => res);
    }, []);

    const ETFChartData = useSelector((state) => state?.coinData?.ETFChartData);

    {
        ValidatedUserData?.AnnotationState &&
            <Box>
                <Image src={"/icons/tooltip.svg"} width={16} height={16} alt=" "></Image>
            </Box>;
    }

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
                text={`Bitcoin ETFs Tracker/${ticker}`}
                link={"/crypto-etfs-data-tracker"}
            ></BreadCrumb>
            <Box mt={"10px"}>
                <Text variant={"contentHeading"} fontWeight={500} lineHeight={"20px"} letterSpacing={"0.1em"}>{ticker} ETF</Text>
                <Text variant={"h3"} lineHeight={"21px"} mt={"15px"} letterSpacing={"0.1em"}>{ETFChartData?.data?.issuer}</Text>
            </Box>
            <Box width={"100%"} display={{ md: "flex" }}>
                <Box width={{ base: "100%", md: "68%" }} mr={{ md: "0.8rem" }}>
                    <Box>
                        <ARKInvest />
                    </Box>
                    <Box mt={"0.8rem"}>
                        <ARK21Shares />
                    </Box>
                    <Box mt={{ base: "2.5rem", md: "0.8rem" }}>
                        <Box padding={{ base: "10px", md: "20px" }} bg={colorMode === 'light' ? "#FFFFFF" : "#282828"} borderTopRadius={"8px"}>
                            <Text variant={"contentHeading4"} fontSize={"20px"} lineHeight={"20px"}>Total {ticker} Spot ETF Net Inflow (USD)</Text>
                        </Box>
                        <TickerETFNetInflowBox />
                    </Box>

                </Box>
                <Box width={{ base: "100%", md: "32%" }}>
                    <Box mt={{ base: "25px", md: "-35px" }}>
                        <Text variant={"contentHeading4"} fontSize={"20px"} lineHeight={"20px"} mb={"15px"}>Key Stats</Text>
                        <KeyStats />
                    </Box>
                    <Box mt={"25px"}>
                        <Text variant={"contentHeading4"} fontSize={"20px"} lineHeight={"20px"} mb={"10px"}>News</Text>
                        <News />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default BTCETFDetailsPage;