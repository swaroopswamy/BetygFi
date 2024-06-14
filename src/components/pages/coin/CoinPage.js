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
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
// import { BreadCrumb } from "@components/breadcrumb2";
//import CoinRankingsTable from "@components/pages/coin/coinRankingsTable";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlockchainListData } from "@redux/app_data/dataSlice";
import {
    fetchSAPData,
    fetchTopGainersAndLosersData,
    fetchTrendingCoinsData,
    fetchTopBTCETFData,
    fetchFearAndGreedData,
    fetchBTCDominanceScoresData,
    fetchMarqueeData,
    fetchCoinRankingsTableData,
    fetchCoinScoresData,
    fetchCryptoCategoriesData
} from "@redux/coin_data/dataSlice";
import { faq } from "@components/pages/coin/helper";
import { getHumanReadableTextFromSlug } from "@util/utility";
import { useSearchParams } from "next/navigation";

const CoinRankingsTable = dynamic(() => import('@components/pages/coin/coinRankingsTable'), { ssr: false });
const Marquee = dynamic(() => import("@/components/pages/coin/marquee"), { ssr: false });
const HighlightsBox = dynamic(() => import("@/components/pages/coin/HighlightsBox"), { ssr: false });
const TrendingCoinPanel = dynamic(() => import("@components/trendingCoinPanel"), { ssr: false });
//import HighlightsBox from "./HighlightsBox";
//import TrendingCoinPanel from "@components/trendingCoinPanel";



const CoinPage = () => {
    const dispatch = useDispatch();
    const { colorMode } = useColorMode();
    const { isOpen: isHighlightsBoxOpen, onToggle: onHighlightsBoxToggle } = useDisclosure();

    const trendingCoinsData = useSelector((state) => state?.coinData?.TrendingCoinsData);
    const btcDominanceDay = useSelector((state) => state?.coinData?.btcDominanceDay);
    const sapDay = useSelector((state) => state?.coinData?.sapDay);

    const scoreSelected = useSelector((state) => state.coinData.scoreSelected);
    const cryptoCategoriesData = useSelector((state) => state.coinData.CryptoCategoriesData);

    const [tablePage, setTablePage] = useState(1);
    const [tableLimit, setTableLimit] = useState(100);
    const [cryptoCategorySelected, setCryptoCategorySelected] = useState('all');

    const [cryptoCategories, setCryptoCategories] = useState([]);

    const searchParams = useSearchParams();
    const on = searchParams.get('on');
    const by = searchParams.get('by');


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
        const payload = {
            day: sapDay
        };
        dispatch(fetchSAPData(payload));
    };

    const fetchMarqueeDataHandler = () => {
        dispatch(fetchMarqueeData());
    };

    const fetchBTCDominanceScoresDataHandler = () => {
        const payload = {
            day: btcDominanceDay
        };
        dispatch(fetchBTCDominanceScoresData(payload));
    };

    const getCoinRankingsTableDataHandler = () => {
        const payload = {
            category: cryptoCategorySelected,
            page: tablePage,
            limit: tableLimit,
            score_dist: scoreSelected,
        };
        dispatch(fetchCoinRankingsTableData(payload));
    };
    const fetchScoreData = () => {
        const query = cryptoCategorySelected;
        dispatch(fetchCoinScoresData(query));
    };
    const fetchCategories = () => {
        dispatch(fetchCryptoCategoriesData());
    };
    const fetchTrendingCoinsDataHandler = () => {
        dispatch(fetchTrendingCoinsData());
    };
    const fetchBlockchainListDataHandler = () => {
        dispatch(fetchBlockchainListData());
    };


    useEffect(() => {
        Promise.all([
            fetchCategories(),
            fetchScoreData()
        ]).then(resolve => resolve);
    }, [cryptoCategorySelected]);

    const pageChangeHandler = (page) => {
        if (page == "") {
            setTablePage(page);
        }
        if (page >= 1) {
            setTablePage(page);
        }
    };

    useEffect(() => {
        if (cryptoCategoriesData.isSuccess && cryptoCategoriesData?.data?.length > 0) {
            setCryptoCategories([...cryptoCategoriesData.data].map((cryptoData, index) => {
                return {
                    id: cryptoData + '_' + index + 1,
                    text: getHumanReadableTextFromSlug(cryptoData),
                    slug: cryptoData
                };
            }));
        }
    }, [cryptoCategoriesData]);

    useEffect(() => {
        Promise.all([
            fetchTopGainersAndLosersDataHandler(),
            fetchTopBTCETFDataHandler(),
            fetchFearAndGreedDataHandler(),
            fetchMarqueeDataHandler(),
            onHighlightsBoxToggle(),
            fetchBlockchainListDataHandler(),
            fetchTrendingCoinsDataHandler(),
            fetchScoreData()
        ]).then(result => result);
    }, []);

    useEffect(() => {
        Promise.all([
            fetchBTCDominanceScoresDataHandler()
        ]).then(res => res);
    }, [btcDominanceDay]);

    useEffect(() => {
        Promise.all([
            fetchSAPDataHandler()
        ]).then(res => res);
    }, [sapDay]);

    useEffect(() => {
        if (tablePage != "") {
            Promise.all([getCoinRankingsTableDataHandler()]).then(resolve => resolve);
        }
    }, [tablePage, tableLimit, scoreSelected, setTablePage, cryptoCategorySelected]);

    useEffect(() => {
        if (on !== null && by !== null) {
            setTimeout(() => {
                if (document.getElementById('total-container-protocol')) {
                    document.getElementById('total-container-protocol').scrollIntoView({ behavior: 'smooth' });
                }
            }, 1000);
        }
    }, [on, by]);

    return (
        <Box
            display={"flex"}
            flexDir={"column"}
            bgColor={"background.primary"}
            p={"20px 0px"}
            pt="10px"
            gap={"20px"}
        >
            {/* <BreadCrumb
                text={"Coin Ranking/Coin Listing"}
                link={""}
            ></BreadCrumb> */}
            <Box layerStyle={"flexCenter"} w="100%" flexDir={{ base: 'column', md: 'row' }} px={"20px"}>
                <Marquee />
                <Box layerStyle={"flexCenter"} w={{ base: "100%", md: "10%" }} ml={"30px"} justifyContent={"flex-end"}>
                    <Text variant={"h3"} mr={"5px"} fontWeight={500}>Highlights</Text>
                    <Switch
                        size={"lg"}
                        isChecked={isHighlightsBoxOpen}
                        onChange={onHighlightsBoxToggle}
                        className={colorMode === 'light' ? "custom-switch-light" : "custom-switch-dark"}
                    ></Switch>
                </Box>
            </Box>
            <Collapse in={isHighlightsBoxOpen} >
                <HighlightsBox />
            </Collapse>

            {/* <BlockchainSelectionMenuNew /> */}
            {/* <CoinOverviewChart /> */}
            <CoinRankingsTable
                tablePage={tablePage}
                setTablePage={setTablePage}
                tableLimit={tableLimit}
                setTableLimit={setTableLimit}
                cryptoCategorySelected={cryptoCategorySelected}
                setCryptoCategorySelected={setCryptoCategorySelected}
                cryptoCategories={cryptoCategories}
                setCryptoCategories={setCryptoCategories}
                pageChangeHandler={pageChangeHandler}
            />
            <hr />
            <Box display={"flex"} flexDir={"column"} gap={"25px"} my={"20px"} mx={"20px"}>
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

            <Box display={"flex"} flexDir={"column"} mx={"20px"}>
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
        </Box >
    );
};

export default CoinPage;
