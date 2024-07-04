/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { Box, Text, useColorModeValue, useToast, useColorMode } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import CustomAvatar from "@components/avatar";
import dynamic from "next/dynamic";
import { copyToClipboard } from "@util/utility";

const CustomToast = dynamic(() => import("@components/toast"), { ssr: false });
const CoinInfo = dynamic(() => import("@components/pages/coin/coinInfo"), { ssr: false });
const RiskAnalysis = dynamic(() => import("@components/pages/coin/riskAnalysis"), { ssr: false });
const CoinPriceChart = dynamic(() => import("@components/pages/coin/coinPriceChart"), { ssr: false });
const DevelopmentAnalysis = dynamic(() => import("@components/pages/coin/developmentAnalysis"), { ssr: false });
const BreadCrumb = dynamic(() => import("@components/breadcrumb2"), { ssr: false });

import {
    fetchCoinDevelopmentData,
    fetchCoinPriceData,
} from "@redux/coin_data/dataSlice";

export default function CoinDetailPage({ coinSlug, coinDetails }) {
    const { colorMode } = useColorMode();
    const dispatch = useDispatch();
    const toast = useToast();

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
                        src={coinDetails?.logoUrl}
                        name={"Coin Name"}
                    />

                    <Box layerStyle={"flexColumn"} gap={"15px"}>
                        <Box display={"flex"} alignItems={"center"} gap={"5px"}>
                            <Text fontSize={"32px"} lineHeight={"35px"} color={"text.primary"}>
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
                        <Box
                            cursor={"pointer"}
                            onClick={() => {
                                copyToClipboard(coinDetails?.name);
                                toast({
                                    position: "bottom",
                                    render: () => (
                                        <CustomToast
                                            isSuccessful={true}
                                            content={
                                                "Link successfully copied"
                                            }
                                        />
                                    ),
                                });
                            }}>
                            <Image src={colorMode === "light" ? "/icons/Share_Icon_Light.svg" : "/icons/Share_Icon_Dark.svg"} width={30} height={30} alt=" "></Image>
                        </Box>
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
