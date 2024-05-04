"use client";
import React, { useEffect } from "react";
import { Box, Text, useColorMode } from "@chakra-ui/react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import millify from "millify";
import { BreadCrumb } from "@components/breadcrumb2";
import HeatmapGraphBox from "@components/pages/coin/ETFPage/Heatmap";
import BTCETFNetInflowBox from "@components/pages/coin/ETFPage/BTCETFNetInflowGraph";
import ETFTracker from "@components/pages/coin/ETFPage/ETFTrackerTable";
import { fetchETFListData, fetchETFInflowOutflowData, fetchETFHeatMapData } from "@redux/coin_data/dataSlice";

const BTCETFPage = () => {
    const dispatch = useDispatch();
    const { colorMode } = useColorMode();
    const ETFType = useSelector((state) => state?.coinData?.ETFType);

    const fetchETFListDataHandler = () => {
        const payload = {
            type: ETFType
        };
        dispatch(fetchETFListData(payload));
    };

    const fetchETFInflowOutflowDataHandler = () => {
        dispatch(fetchETFInflowOutflowData());
    };

    const fetchETFHeatMapDataHandler = () => {
        dispatch(fetchETFHeatMapData());
    };

    useEffect(() => {
        Promise.all([
            fetchETFInflowOutflowDataHandler(),
            fetchETFHeatMapDataHandler(),
        ]).then(res => res);
    }, []);

    useEffect(() => {
        Promise.all([
            fetchETFListDataHandler(),
        ]).then(res => res);
    }, [ETFType]);

    const ETFListData = useSelector((state) => state?.coinData?.ETFListData);

    return (
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
                    link={"/coin"}
                ></BreadCrumb>
                <Box layerStyle={"flexCenter"} gap={"5px"}>
                    <Image src={"/icons/Red_Dot.svg"} width={9} height={9} alt=" "></Image>
                    <Text fontSize={"14px"} lineHeight={"17px"} variant={"contentHeading4"}>Market Closed</Text>
                </Box>
            </Box>
            <Box layerStyle={"flexCenter"} gap={"20px"}>
                <Box>
                    <Text variant={"h5"} color={colorMode === 'light' ? "#16171B" : "#FFFFFF"} opacity={"80%"}>Total Volume</Text>
                    <Text variant={"h5"} color={colorMode === 'light' ? "#191919" : "#FFFFFF"} fontWeight={500}>${millify(ETFListData?.totalVolume === undefined ?
                        "NA" : ETFListData?.totalVolume, { precision: 0 })}</Text>
                </Box>
                <Box>
                    <Text variant={"h5"} color={colorMode === 'light' ? "#16171B" : "#FFFFFF"} opacity={"80%"}>Total Marketcap</Text>
                    <Text variant={"h5"} color={colorMode === 'light' ? "#191919" : "#FFFFFF"} fontWeight={500}>${millify(ETFListData?.totalMarketCap === undefined ?
                        "NA" : ETFListData?.totalMarketCap, { precision: 0 })}</Text>
                </Box>
                <Box>
                    <Text variant={"h5"} color={colorMode === 'light' ? "#16171B" : "#FFFFFF"} opacity={"80%"}>Total AUM</Text>
                    <Text variant={"h5"} color={colorMode === 'light' ? "#191919" : "#FFFFFF"} fontWeight={500}>${millify(ETFListData?.totalAum === undefined ?
                        "NA" : ETFListData?.totalAum, { precision: 0 })}</Text>
                </Box>
            </Box>
            <Box layerStyle={"flexCenter"} mt={"15px"}>
                <Box width={"45%"} mr={"1rem"}>
                    <HeatmapGraphBox />
                </Box>
                <Box width={"55%"}>
                    <Text variant={"h2"}>Total Bitcoin Spot ETF Net Inflow (USD)</Text>
                    <Box layerStyle={"flexCenter"} mb={"45px"}>
                        {/* <Button variant={"modalButton"} bg={"background.primary"} height={"35px"} border={"1px solid #E0E0E0"}>
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
                        </Button> */}
                    </Box>
                    <Box>
                        <BTCETFNetInflowBox />
                    </Box>
                </Box>
            </Box>
            <Box mt={"15px"} w={"100%"}>
                <ETFTracker />
            </Box>
        </Box>
    );
};

export default BTCETFPage;