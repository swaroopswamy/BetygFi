"use client";
import {
    Box,
    Text,
    AccordionButton,
    Accordion,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    useColorMode,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
// import { BreadCrumb } from "../components/breadcrumb2";
import CoinRankingsTable from "../components/pages/coin/coinRankingsTable";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlockchainListData } from "@/redux/app_data/dataSlice";
import TrendingCoinPanel from "../components/trendingCoinPanel";
import { fetchTrendingCoinsData } from "@/redux/coin_data/dataSlice";
import { faq } from "@/app/components/pages/coin/helper";

const CoinDashboardPage = () => {
    const dispatch = useDispatch();
    const { colorMode } = useColorMode();

    const trendingCoinsData = useSelector(
        (state) => state?.coinData?.TrendingCoinsData
    );

    useEffect(() => {
        dispatch(fetchTrendingCoinsData());
        dispatch(fetchBlockchainListData());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Box
            display={"flex"}
            flexDir={"column"}
            bgColor={"background.primary"}
            p={"20px 30px"}
            gap={"20px"}
        >
            {/* <BreadCrumb
                text={"Coin Ranking/Coin Listing"}
                link={""}
            ></BreadCrumb> */}

            <Text fontSize={"32px"} color={"text.primary"} my={"20px"}>
                Coin Listing
            </Text>

            {/* <BlockchainSelectionMenuNew /> */}

            {/* <CoinOverviewChart /> */}

            <CoinRankingsTable />

            <hr />

            <Box display={"flex"} flexDir={"column"} gap={"25px"} my={"20px"}>
                <Text
                    fontSize={"32px"}
                    lineHeight={"36px"}
                    color={"text.primary"}
                >
                    {" "}
                    Trending Coins{" "}
                </Text>

                <Box
                    display={"flex"}
                    flexDir={{ base: "column", lg: "row" }}
                    gap={"20px"}
                    w={"100%"}
                >
                    {trendingCoinsData.isSuccess &&
                        trendingCoinsData.data.map((coinData, i) => {
                            if (i > 2) return;
                            return (
                                <TrendingCoinPanel
                                    key={i}
                                    coinData={coinData}
                                />
                            );
                        })}
                </Box>
            </Box>

            <Box display={"flex"} flexDir={"column"}>
                <Text
                    fontSize={"32px"}
                    lineHeight={"36px"}
                    color={"text.primary"}
                    mb={"20px"}
                >
                    {" "}
                    Frequently Asked Questions (FAQs){" "}
                </Text>

                {faq.questions.map((item, i) => {
                    return (
                        <Accordion
                            key={i}
                            allowMultiple
                            flexDir={"column"}
                            bg={"background.primary"}
                            borderBottom={"1px"}
                            borderColor={
                                colorMode === "light"
                                    ? "rgba(25,25,25, 0.1)"
                                    : "#494949"
                            }
                        >
                            <AccordionItem w={"100%"} border={0}>
                                <AccordionButton
                                    layerStyle={"spaceBetween"}
                                    py={"25px"}
                                >
                                    {item.question}
                                    <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel>{item.answer}</AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    );
                })}
            </Box>
        </Box>
    );
};

export default CoinDashboardPage;
