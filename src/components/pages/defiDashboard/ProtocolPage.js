/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { fetchOverviewData, fetchScoreGraphData } from "@redux/dashboard_data/dataSlice";
import { Box, Text, useColorModeValue, useMediaQuery } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppConfigContext from "@components/context/appConfigContext";

// const OverviewColumnChart = dynamic(() => import("@components/pages/dashboard/overviewColumnChart"), { ssr: false });
const DashboardDefiSelection = dynamic(() => import("./DashboardDefiSelection"), { ssr: false });
const OverviewBox = dynamic(() => import("@components/pages/dashboard/overviewBox"), { ssr: false });
const Rankings = dynamic(() => import("@components/pages/dashboard/defiRankingsTable"), { ssr: false });
const BlockchainSelectionMenuNew = dynamic(() => import("@components/blockchainSelectionNew"), { ssr: false });

const ProtocolPage = () => {
    const appConfig = useContext(AppConfigContext);
    const [isMd] = useMediaQuery("(min-width: 768px)");

    const dispatch = useDispatch();

    const blockchainSelected = useSelector((state) => state?.dashboardTableData?.blockchainType);

    const categorySelected = useSelector((state) => state?.dashboardTableData?.categorySelected);

    const getOverviewDataHandler = () => {
        const payload = {
            blockchain: blockchainSelected,
            category: categorySelected,
        };
        dispatch(fetchOverviewData(payload));
    };

    const getScoreGraphDataHandler = () => {
        const payload = {
            blockchain: blockchainSelected,
            category: categorySelected,
        };
        dispatch(fetchScoreGraphData(payload));
    };

    useEffect(() => {
        Promise.all([
            getOverviewDataHandler(),
            getScoreGraphDataHandler()
        ]).then(result => result);
    }, [blockchainSelected, categorySelected]);

    const isMobileSearchBarOpen = useSelector((state) => state?.appData?.isMobileSearchOpen);

    return (
        <Box display={"flex"} flexDir={"column"} overflow={"hidden"}>
            {
                isMd ? (
                    <Box
                        display={"flex"}
                        alignItems={"center"}
                        w={"100%"}
                        pt={"28px"}
                        gap={"20px"}
                        px={"28px"}
                    >
                        <Text variant="h1new">DeFi Markets </Text>
                    </Box>
                ) : (
                    <Box display={"flex"} pt={isMobileSearchBarOpen ? "50px" : "30px"}>
                        <Text variant="h1" px={"18px"}>
                            DeFi Markets
                        </Text>
                    </Box>
                )
            }

            <Box px={{ md: "28px" }} mb={{ base: "14px", md: "28px" }}>
                <BlockchainSelectionMenuNew />
            </Box>

            <Box
                display={"flex"}
                flexDir={"column"}
                bg={useColorModeValue("#F0F0F5", "#191919")}
                px={{ base: "18px", md: "30px" }}
                borderTop={"1px solid " + useColorModeValue("rgba(0, 0, 0, 0.1)", "rgba(255, 255, 255, 0.1)")}>
                <Box
                    display={"flex"}
                    flexDirection={"column"}
                    mt={{ base: "36px", md: "28px" }}
                >
                    <Text
                        variant={"content"}
                        _light={{ color: "#525252" }}
                        _dark={{ color: "#FFFFFF" }}
                        mb="12px"
                    >
                        Filter by DeFi Category
                    </Text>
                    <Box
                        display={"flex"}
                        overflow={"auto"}
                        className="hidescrollbar"
                    >
                        <DashboardDefiSelection />
                    </Box>
                </Box>
                <Box
                    display={"flex"}
                    flexDir={{ base: "column", lg: "row" }}
                    py={"15px"}
                    gap={"15px"}
                >
                    {appConfig.showOverviewGraph && <OverviewBox />}
                    {/* <OverviewColumnChart /> */}
                </Box>
                <Rankings />
            </Box >
        </Box >
    );
};

export default ProtocolPage;