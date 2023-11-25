"use client";
import { Avatar, Box, Text, useColorModeValue } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { BreadCrumb } from "@/app/components/breadcrumb2";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchCoinDashboardData,
    fetchCoinDevelopmentData,
    fetchCoinPriceData,
} from "@/redux/coin_data/dataSlice";
// import { GoShareAndroid } from "react-icons/go";
import CoinInfo from "@/app/components/pages/coin/coinInfo";
import CoinPriceChart from "@/app/components/pages/coin/coinPriceChart";
import RiskAnalysis from "@/app/components/pages/coin/riskAnalysis";
import DevelopmentAnalysis from "@/app/components/pages/coin/developmentAnalysis";
// import ShareModal from "@/app/components/pages/coin/shareModal";

export default function CoinDashboardPage({ params }) {
    const dispatch = useDispatch();
    const id = params?.coin_slug;
    // const { isShareOpen, onShareOpen, onShareClose } = useDisclosure();

    const CoinDashboardData = useSelector(
        (state) => state?.coinData?.CoinDashboardData?.data
    );

    const GetCoinDashboardDataHandler = () => {
        const payload = {
            id: id,
        };
        dispatch(fetchCoinDashboardData(payload));
    };

    const GetCoinPriceDataHandler = () => {
        const payload = {
            id: id,
            groupType: "all",
        };
        dispatch(fetchCoinPriceData(payload));
    };

    const GetCoinDevelopmentDataHandler = () => {
        const payload = {
            id: id,
        };
        dispatch(fetchCoinDevelopmentData(payload));
    };

    useEffect(() => {
        GetCoinDashboardDataHandler();
        GetCoinPriceDataHandler();
        GetCoinDevelopmentDataHandler();
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
                text={"Coin Ranking/Coin Listing/" + CoinDashboardData?.name}
                link={"/coin"}
            ></BreadCrumb>

            <Box display={"flex"} justifyContent={"space-between"}>
                <Box display={"flex"} alignItems={"start"} gap={"15px"}>
                    <Avatar
                        width={"54px"}
                        height={"54px"}
                        src={CoinDashboardData?.logoUrl} //logoUrl
                        name={"Coin Name"} //name
                    />

                    <Box layerStyle={"flexColumn"} gap={"15px"}>
                        <Box display={"flex"} alignItems={"center"} gap={"5px"}>
                            <Text fontSize={"32px"} color={"text.primary"}>
                                {" "}
                                {CoinDashboardData?.name}{" "}
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
                                {CoinDashboardData?.ticker}
                            </Text>
                        </Box>
                        <Text
                            fontSize={"24px"}
                            color={"text.green"}
                            fontWeight={"500"}
                        >
                            {CoinDashboardData?.price === undefined
                                ? "-"
                                : CoinDashboardData?.price.toLocaleString(
                                      "en-US",
                                      {
                                          style: "currency",
                                          currency: "USD",
                                      }
                                  )}
                        </Text>
                    </Box>
                </Box>

                {/* <Box display={"flex"} alignItems={"flex-end"}>
                    <Box
                        layerStyle={"center"}
                        p={"5px"}
                        border={"1px"}
                        borderRadius={"3px"}
                        borderColor={useColorModeValue(
                            "#494949",
                            "rgba(255, 255, 255, 0.6"
                        )}
                        cursor={"pointer"}
                        onClick={onShareOpen}
                    >
                        <Icon
                            as={GoShareAndroid}
                            boxSize={"15px"}
                            color={useColorModeValue(
                                "#494949",
                                "rgba(255, 255, 255, 0.6"
                            )}
                        />
                    </Box>
                </Box> */}
            </Box>

            <hr />

            <CoinInfo />

            <CoinPriceChart />

            <RiskAnalysis />

            <DevelopmentAnalysis />

            {/* <ShareModal isShareOpen={isShareOpen} onShareClose={onShareClose} /> */}
        </Box>
    );
}
