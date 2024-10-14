/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { Box, Text, useColorMode, Switch, Collapse, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlockchainListData } from "@redux/app_data/dataSlice";
import { userPersonalization, userTabLibrary } from "@redux/auth_data/authSlice";
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
    fetchCryptoCategoriesData,
    fetchTabLayoutsData,
    fetchCustomizeTabData,
} from "@redux/coin_data/dataSlice";
import { getHumanReadableTextFromSlug } from "@util/utility";
import { useSearchParams } from "next/navigation";
import TabLibraryModal from "./TabLibraryModal";
import CustomizeTabModal from "./CustomizeTabModal";

const CoinRankingsTable = dynamic(() => import('@components/pages/coin/coinRankingsTable'), { ssr: false });
const Marquee = dynamic(() => import("@/components/pages/coin/marquee"), { ssr: false });
const HighlightsBox = dynamic(() => import("@/components/pages/coin/HighlightsBox"), { ssr: false });
const FaqSection = dynamic(() => import("@components/pages/coin/coinPage/FaqSection"), { ssr: false });
const TrendingCoinSection = dynamic(() => import("@components/pages/coin/coinPage/TrendingCoinSection"), { ssr: false });

const CoinPage = () => {
    const dispatch = useDispatch();
    const { colorMode } = useColorMode();
    const ValidatedUserData = useSelector((state) => state.authData.ValidatedUserData);
    const btcDominanceDay = useSelector((state) => state?.coinData?.btcDominanceDay);
    const sapDay = useSelector((state) => state?.coinData?.sapDay);
    const scoreSelected = useSelector((state) => state.coinData.scoreSelected);
    const cryptoCategoriesData = useSelector((state) => state.coinData.CryptoCategoriesData);
    const [tablePage, setTablePage] = useState(1);
    const [tableLimit, setTableLimit] = useState(100);
    const [cryptoCategorySelected, setCryptoCategorySelected] = useState('all');
    const [isHighlightsBoxOpen, setIsHighlightsBoxOpen] = useState(true);
    const [cryptoCategories, setCryptoCategories] = useState([]);
    const searchParams = useSearchParams();
    const on = searchParams.get('on');
    const by = searchParams.get('by');

    const {
        isOpen: isTabLibraryModalOpen,
        onOpen: onTabLibraryModalOpen,
        onClose: onTabLibraryModalClose,
    } = useDisclosure();

    const {
        isOpen: isCustomizeTabModalOpen,
        onOpen: onCustomizeTabModalOpen,
        onClose: onCustomizeTabModalClose,
    } = useDisclosure();

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

    const fetchTabLayoutsDataHandler = () => {
        dispatch(fetchTabLayoutsData());
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

    const userPersonalizationHandler = () => {
        const payload = {
            feature: 'coin_ranking_highlights',
        };
        dispatch(userPersonalization(payload));
    };

    const userTabLibraryHandler = () => {
        const payload = {
            name: " ",
            layout: [],
            assets: [],
        };
        dispatch(userTabLibrary(payload));
    };

    const fetchCustomizeTabDataHandler = () => {
        const payload = {
            layout: [],
            assets: [],
        };
        dispatch(fetchCustomizeTabData(payload));
    };

    useEffect(() => {
        Promise.all([
            fetchCategories(),
            fetchScoreData(),
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
            userPersonalizationHandler(),
            fetchBlockchainListDataHandler(),
            fetchTrendingCoinsDataHandler(),
            fetchScoreData(),
            userTabLibraryHandler(),
            fetchTabLayoutsDataHandler(),
            fetchCustomizeTabDataHandler(),
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

    useEffect(() => {
        const savedPreference = localStorage.getItem('coin_ranking_highlights_open');
        if (savedPreference) {
            setIsHighlightsBoxOpen(savedPreference === 'true');
        }
    }, []);

    const handleToggleHighlights = () => {
        const newState = !isHighlightsBoxOpen;
        setIsHighlightsBoxOpen(newState);
        if (ValidatedUserData?.success) {
            dispatch(userPersonalization({ feature: 'coin_ranking_highlights', state: newState }));
        } else {
            localStorage.setItem('coin_ranking_highlights_open', newState);
        }
    };

    return (
        <React.Fragment>
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
                <Box layerStyle={"flexCenter"} w="100%" flexDir={{ base: 'column', md: 'row' }} pl={"25px"} pr={{ base: "2px", md: "15px" }}>
                    <Marquee />
                    <Box layerStyle={"flexCenter"} w={{ base: "100%", md: "10%" }} mr={{ base: "35px", md: "5px" }} justifyContent={"flex-end"}>
                        <Text variant={"h3"} mr={"5px"} fontWeight={500}>Highlights</Text>
                        <Switch
                            size={"lg"}
                            isChecked={isHighlightsBoxOpen}
                            onChange={handleToggleHighlights}
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
                    onTabLibraryModalOpen={onTabLibraryModalOpen}
                    onCustomizeTabModalOpen={onCustomizeTabModalOpen}
                />
                <hr />
                <TrendingCoinSection />
                <FaqSection />
                <TabLibraryModal
                    isTabLibraryModalOpen={isTabLibraryModalOpen}
                    onTabLibraryModalClose={onTabLibraryModalClose}
                    onCustomizeTabModalOpen={onCustomizeTabModalOpen}
                    cryptoCategorySelected={cryptoCategorySelected}
                    setCryptoCategorySelected={setCryptoCategorySelected}
                />
                <CustomizeTabModal
                    isCustomizeTabModalOpen={isCustomizeTabModalOpen}
                    onCustomizeTabModalClose={onCustomizeTabModalClose}
                />
            </Box >
        </React.Fragment>
    );
};

export default CoinPage; 
