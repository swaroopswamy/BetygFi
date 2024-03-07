/* eslint-disable react-hooks/exhaustive-deps */
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
    Switch,
    useDisclosure,
    Collapse,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
// import { BreadCrumb } from "@components/breadcrumb2";
import CoinRankingsTable from "@components/pages/coin/coinRankingsTable";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlockchainListData } from "@redux/app_data/dataSlice";
import TrendingCoinPanel from "@components/trendingCoinPanel";
import {
    fetchSAPData,
    fetchTopGainersAndLosersData,
    fetchTrendingCoinsData,
    fetchTopBTCETFData,
    fetchFearAndGreedData,
} from "@redux/coin_data/dataSlice";
import { faq } from "@components/pages/coin/helper";
import Marquee from "@/components/pages/coin/marquee";
import HighlightsBox from "./HighlightsBox";

const CoinPage = () => {
    const dispatch = useDispatch();
    const { colorMode } = useColorMode();
    const { isOpen: isHighlightsBoxOpen, onToggle: onHighlightsBoxToggle } = useDisclosure();

    const trendingCoinsData = useSelector((state) => state?.coinData?.TrendingCoinsData);

    const fetchTopGainersAndLosersDataHandler = () => {
        dispatch(fetchTopGainersAndLosersData());
    };

    const fetchTopBTCETFDataHandler = () => {
        dispatch(fetchTopBTCETFData());
    };

    const fetchFearAndGreedDataHandler = () => {
        dispatch(fetchFearAndGreedData());
    };

    const fetchSAPDataHandler = () => {
        dispatch(fetchSAPData());
    };

    useEffect(() => {
        Promise.all([
            dispatch(fetchTrendingCoinsData()),
            dispatch(fetchBlockchainListData()),
            fetchTopGainersAndLosersDataHandler(),
            fetchTopBTCETFDataHandler(),
            fetchFearAndGreedDataHandler(),
            fetchSAPDataHandler(),
        ]).then(result => result);
    }, []);

    return (
        <Box
            display={"flex"}
            flexDir={"column"}
            bgColor={"background.primary"}
            p={"20px 30px"}
            pt="10px"
            gap={"20px"}
        >
            {/* <BreadCrumb
                text={"Coin Ranking/Coin Listing"}
                link={""}
            ></BreadCrumb> */}
            <Box layerStyle={"flexCenter"} w="100%">
                <Marquee />
                <Box layerStyle={"flexCenter"} w="10%" ml={"30px"} >
                    <Text variant={"h3"} mr={"5px"} fontWeight={500}>Highlights</Text>
                    <Switch
                        size={"lg"}
                        onChange={onHighlightsBoxToggle}
                        colorScheme={{
                            base: {
                                thumb: colorMode === 'light' ? "#000000" : "#FFFFFF",
                                track: colorMode === 'light' ? "#FFFFFF" : "#000000",
                            },
                            checked: {
                                thumb: colorMode === 'light' ? "#FFFFFF" : "#000000",
                                track: colorMode === 'light' ? "#000000" : "#FFFFFF",
                            },
                        }}
                    ></Switch>
                </Box>
            </Box>
            <Collapse in={isHighlightsBoxOpen} >
                <HighlightsBox />
            </Collapse>
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

export default CoinPage;
