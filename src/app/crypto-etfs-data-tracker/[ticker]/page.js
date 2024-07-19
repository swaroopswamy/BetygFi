"use client";
import React, { useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { fetchTickerETFInflowOutflowData, fetchETFChartData, fetchETFNewsData } from "@redux/coin_data/dataSlice";
import dynamic from "next/dynamic";

const BreadCrumb = dynamic(() => import("@components/breadcrumb2"), { ssr: false });
const News = dynamic(() => import("@components/pages/coin/ETFPage/News"), { ssr: false });
const ARKInvest = dynamic(() => import("@components/pages/coin/ETFPage/ARKInvestBox"), { ssr: false });
const ARK21Shares = dynamic(() => import("@components/pages/coin/ETFPage/SharesChart"), { ssr: false });
const TickerETFNetInflowBox = dynamic(() => import("@components/pages/coin/ETFPage/TickerETFNetInflowGraph"), { ssr: false });
const KeyStats = dynamic(() => import("@components/pages/coin/ETFPage/KeyStatsBox"), { ssr: false });


const BTCETFDetailsPage = ({ params }) => {
    const ticker = params?.ticker;
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