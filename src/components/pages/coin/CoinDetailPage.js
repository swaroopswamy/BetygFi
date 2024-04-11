/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { BreadCrumb } from "@components/breadcrumb2";
import { useDispatch } from "react-redux";

import CustomAvatar from "@components/avatar";
import dynamic from "next/dynamic";

const CoinInfo = dynamic(() => import("@components/pages/coin/coinInfo"));
const RiskAnalysis = dynamic(() => import("@components/pages/coin/riskAnalysis"));
const CoinPriceChart = dynamic(() => import("@components/pages/coin/coinPriceChart"));
const DevelopmentAnalysis = dynamic(() => import("@components/pages/coin/developmentAnalysis"));

import {
    fetchCoinDevelopmentData,
    fetchCoinPriceData,
} from "@redux/coin_data/dataSlice";

export default function CoinDetailPage({ coinSlug, coinDetails }) {
    const dispatch = useDispatch();

    const GetCoinPriceDataHandler = () => {
        const payload = {
            id: coinSlug,
            groupType: "all",
        };
        dispatch(fetchCoinPriceData(payload));
    };

    const GetCoinDevelopmentDataHandler = () => {
        const payload = {
            id: coinSlug,
        };
        dispatch(fetchCoinDevelopmentData(payload));
    };

    useEffect(() => {
        Promise.all([
            GetCoinPriceDataHandler(),
            GetCoinDevelopmentDataHandler(),
        ]).then(result => result);
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
                text={"Coin Ranking/" + coinDetails?.name}
                link={"/coin"}
            ></BreadCrumb>

            <Box display={"flex"} justifyContent={"space-between"}>
                <Box display={"flex"} alignItems={"start"} gap={"15px"}>
                    <CustomAvatar
                        width={"54px"}
                        height={"54px"}
                        src={coinDetails?.logoUrl} //logoUrl
                        name={"Coin Name"} //name
                    />

                    <Box layerStyle={"flexColumn"} gap={"15px"}>
                        <Box display={"flex"} alignItems={"center"} gap={"5px"}>
                            <Text fontSize={"32px"} color={"text.primary"}>
                                {" "}
                                {coinDetails?.name}{" "}
                            </Text>
                            <Text variant={"h3"}> | </Text>
                            <Text
                                fontSize={"14px"}
                                lineHeight={"20px"}
                                color={useColorModeValue(
                                    "#3A3A3A",
                                    "rgba(255, 255, 255, 0.6)"
                                )}
                                ml={"5px"}
                            >
                                {" "}
                                {coinDetails?.ticker}
                            </Text>
                        </Box>
                        <Text
                            fontSize={"24px"}
                            color={"text.green"}
                            fontWeight={"500"}
                        >
                            {coinDetails?.price === undefined
                                ? "-"
                                : coinDetails?.price.toLocaleString(
                                    "en-US",
                                    {
                                        style: "currency",
                                        currency: "USD",
                                    }
                                )}
                        </Text>
                    </Box>
                </Box>
            </Box>

            <hr />

            <CoinInfo coinDetails={coinDetails} />

            <CoinPriceChart />

            <RiskAnalysis coinDetails={coinDetails} />

            <DevelopmentAnalysis />

        </Box>
    );
}
