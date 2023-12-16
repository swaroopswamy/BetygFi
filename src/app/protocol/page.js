/* eslint-disable react/no-unescaped-entities */
"use client";
import BlockchainSelectionMenuNew from "@/app/components/blockchainSelectionNew";
import { fetchBlockchainListData } from "@/redux/app_data/dataSlice";
import {
    categoryChangedReducer,
    fetchOverviewData,
    fetchScoreGraphData,
} from "@/redux/dashboard_data/dataSlice";
import {
    Box,
    Button,
    Text,
    useColorModeValue,
    useMediaQuery,
} from "@chakra-ui/react";
import { categories } from "@util/constant";
import dynamic from "next/dynamic";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const OverviewColumnChart = dynamic(() => import("./components/pages/dashboard/overviewColumnChart"), { ssr: false });
const OverviewBox = dynamic(() => import("./components/pages/dashboard/overviewBox"), { ssr: false });
const Rankings = dynamic(() => import("@/app/components/pages/dashboard/defiRankingsTable"), { ssr: false });

const Dashboard = () => {
    const [isMd] = useMediaQuery("(min-width: 768px)");

    const dispatch = useDispatch();

    const blockchainSelected = useSelector(
        (state) => state?.dashboardTableData?.blockchainType
    );

    const categorySelected = useSelector(
        (state) => state?.dashboardTableData?.categorySelected
    );

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
        Promise.all([getOverviewDataHandler(), getScoreGraphDataHandler()]);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [blockchainSelected, categorySelected]);

    useEffect(() => {
        dispatch(fetchBlockchainListData());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Box display={"flex"} flexDir={"column"} overflow={"hidden"}>
            {isMd ? (
                <>
                    <Box
                        display={{ base: "none", md: "flex" }}
                        alignItems={"center"}
                        w={"100%"}
                        pt={"28px"}
                        gap={"20px"}
                        px={"28px"}
                    >
                        <Text variant="h1new">DeFi Markets </Text>
                    </Box>
                </>
            ) : (
                <>
                    <Box display={{ base: "flex", md: "none" }} pt={"30px"}>
                        <Text variant="h1" px={"18px"}>
                            DeFi Markets
                        </Text>
                    </Box>
                </>
            )}

            <Box px={{ md: "28px" }} mb={{ base: "14px", md: "28px" }}>
                <BlockchainSelectionMenuNew />
            </Box>

            <Box
                display={"flex"}
                flexDir={"column"}
                bg={useColorModeValue("#F0F0F5", "#191919")}
                px={{ base: "18px", md: "30px" }}
                borderTop={useColorModeValue(
                    "1px solid rgba(0, 0, 0, 0.1)",
                    "1px solid rgba(255, 255, 255, 0.1)"
                )}
            >
                <Box
                    display={"flex"}
                    flexDirection={"column"}
                    mt={{ base: "36px", md: "28px" }}
                >
                    <Text
                        variant={"content"}
                        _light={{
                            color: "#525252",
                        }}
                        _dark={{
                            color: "#FFFFFF",
                        }}
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
                    <OverviewBox />
                    <OverviewColumnChart />
                </Box>
                <Rankings />
            </Box >
        </Box >
    );
};

export default Dashboard;

const DashboardDefiSelection = ({ ...rest }) => {
    const dispatch = useDispatch();

    const categorySelected = useSelector(
        (state) => state?.dashboardTableData?.categorySelected
    );
    const categoryChangedHandler = (category) => {
        dispatch(categoryChangedReducer(category));
    };
    const [isMd] = useMediaQuery("(min-width: 768px)");
    return isMd ? (
        <>
            <Box
                display={{ base: "none", md: "flex" }}
                h={"40px"}
                px={{ base: "18px", md: "0px" }}
                {...rest}
            >
                <Button
                    variant={{ base: "defiMobile", md: "defi" }}
                    isActive={categorySelected.length === 0}
                    onClick={() => categoryChangedHandler("All")}
                    _light={{
                        border: "1px solid rgba(0, 0, 0, 0.1)",
                    }}
                    _dark={{
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                    mr="7px"
                    fontSize={"14px"}
                    borderRadius={"30px"}
                >
                    {" "}
                    All{" "}
                </Button>
                {categories.map((category, i) => (
                    <Button
                        mr="7px"
                        key={i}
                        borderRadius={"30px"}
                        fontSize={"14px"}
                        variant={{ base: "defiMobile", md: "defi" }}
                        isActive={categorySelected.includes(category.id)}
                        onClick={() => categoryChangedHandler(category.id)}
                        _light={{
                            border: "1px solid rgba(0, 0, 0, 0.1)",
                        }}
                        _dark={{
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                        }}
                    >
                        {" "}
                        {category.name}{" "}
                    </Button>
                ))}
            </Box>
        </>
    ) : (
        <>
            <Box
                display={{ base: "flex", md: "none" }}
                h={"40px"}
                px={{ base: "0px", md: "30px" }}
                {...rest}
            >
                <Button
                    variant={{ base: "defiMobile", md: "defi" }}
                    isActive={categorySelected.length === 0}
                    onClick={() => categoryChangedHandler("All")}
                    _light={{
                        borderRight: "1px solid rgba(0, 0, 0, 0.1)",
                    }}
                    _dark={{
                        borderRight: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                >
                    {" "}
                    All{" "}
                </Button>
                {categories.map((category, i) => (
                    <Button
                        key={i}
                        variant={{ base: "defiMobile", md: "defi" }}
                        isActive={categorySelected.includes(category.id)}
                        onClick={() => categoryChangedHandler(category.id)}
                        _light={{
                            borderRight: "1px solid rgba(0, 0, 0, 0.1)",
                        }}
                        _dark={{
                            borderRight: "1px solid rgba(255, 255, 255, 0.1)",
                        }}
                    >
                        {" "}
                        {category.name}{" "}
                    </Button>
                ))}
            </Box>
        </>
    );
};
