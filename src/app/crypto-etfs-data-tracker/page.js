"use client";
import React, { useEffect, useState } from "react";
import { Box, Text, useColorMode, Switch, Collapse } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
//import Image from "next/image";
import millify from "millify";
import { fetchETFListData, fetchETFInflowOutflowData, fetchETFHeatMapData } from "@redux/coin_data/dataSlice";
import { userPersonalization } from "@redux/auth_data/authSlice";
import dynamic from "next/dynamic";
const BreadCrumb = dynamic(() => import("@components/breadcrumb2"), { ssr: false });
const HighlightsBox = dynamic(() => import("@components/pages/coin/ETFPage/Highlights", { ssr: false }));
const ETFTracker = dynamic(() => import("@components/pages/coin/ETFPage/ETFTrackerTable", { ssr: false }));

const Bitcoin_ETFs_Tracker = () => {
    const dispatch = useDispatch();
    const { colorMode } = useColorMode();
    const ETFType = useSelector((state) => state?.coinData?.ETFType);
    const ValidatedUserData = useSelector((state) => state.authData.ValidatedUserData);
    const [isHighlightsBoxOpen, setIsHighlightsBoxOpen] = useState(true);

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

    const userPersonalizationHandler = () => {
        const payload = {
            feature: 'etf_highlights',
        };
        dispatch(userPersonalization(payload));
    };

    useEffect(() => {
        Promise.all([
            fetchETFInflowOutflowDataHandler(),
            fetchETFHeatMapDataHandler(),
            userPersonalizationHandler(),
        ]).then(res => res);
    }, []);

    useEffect(() => {
        Promise.all([
            fetchETFListDataHandler(),
        ]).then(res => res);
    }, [ETFType]);

    useEffect(() => {
        const savedPreference = localStorage.getItem('etf_highlights_open');
        if (savedPreference) {
            setIsHighlightsBoxOpen(savedPreference === 'true');
        }
    }, []);

    const ETFListData = useSelector((state) => state.coinData.ETFListData);
    /*     {
            ValidatedUserData?.AnnotationState &&
                <Box>
                    <Image src={"/icons/tooltip.svg"} width={16} height={16} alt=" "></Image>
                </Box>;
        }
     */
    const handleToggleHighlights = () => {
        const newState = !isHighlightsBoxOpen;
        setIsHighlightsBoxOpen(newState);
        if (ValidatedUserData?.success) {
            dispatch(userPersonalization({ feature: 'etf_highlights', state: newState }));
        } else {
            localStorage.setItem('etf_highlights_open', newState);
        }
    };

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
                    text={"Coin Ranking"}
                    link={"/coin"}
                ></BreadCrumb>
                {/* <Box layerStyle={"flexCenter"} gap={"5px"}>
                    <Image src={"/icons/Red_Dot.svg"} width={9} height={9} alt=" "></Image>
                    <Text fontSize={"14px"} lineHeight={"17px"} variant={"contentHeading4"}>Market Closed</Text>
                </Box> */}
            </Box>
            <Box display={{ md: "flex" }} justifyContent={{ md: "space-between" }}>
                <Box layerStyle={"flexCenter"} gap={{ base: "15px", md: "20px" }}>
                    <Box>
                        <Text variant={"h5"} color={colorMode === 'light' ? "#16171B" : "#FFFFFF"} opacity={"80%"}>Total Volume</Text>
                        <Text variant={"h5"} color={colorMode === 'light' ? "#191919" : "#FFFFFF"} fontWeight={500}>${millify(ETFListData?.data?.totalVolume === undefined ?
                            "NA" : ETFListData?.data?.totalVolume, { precision: 2 })}</Text>
                    </Box>
                    <Box>
                        <Text variant={"h5"} color={colorMode === 'light' ? "#16171B" : "#FFFFFF"} opacity={"80%"}>Total Marketcap</Text>
                        <Text variant={"h5"} color={colorMode === 'light' ? "#191919" : "#FFFFFF"} fontWeight={500}>${millify(ETFListData?.data?.totalMarketCap === undefined ?
                            "NA" : ETFListData?.data?.totalMarketCap, { precision: 2 })}</Text>
                    </Box>
                    <Box>
                        <Text variant={"h5"} color={colorMode === 'light' ? "#16171B" : "#FFFFFF"} opacity={"80%"}>Total AUM</Text>
                        <Text variant={"h5"} color={colorMode === 'light' ? "#191919" : "#FFFFFF"} fontWeight={500}>${millify(ETFListData?.data?.totalAum === undefined ?
                            "NA" : ETFListData?.data?.totalAum, { precision: 2 })}</Text>
                    </Box>
                </Box>
                <Box layerStyle={"flexCenter"} justifyContent={"flex-end"} mt={{ base: "20px" }}>
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
            <Box mt={{ base: "5px", md: "15px" }} w={"100%"}>
                <ETFTracker />
            </Box>
        </Box>
    );
};

export default Bitcoin_ETFs_Tracker;