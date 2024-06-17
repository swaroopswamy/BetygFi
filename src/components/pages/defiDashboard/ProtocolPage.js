/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { fetchOverviewData, fetchScoreGraphData } from "@redux/dashboard_data/dataSlice";
import { fetchDefiOverviewData } from "@redux/defi_dashboard_data/dataSlice";
import { fetchMarqueeData } from "@redux/coin_data/dataSlice";
import { Box, Text, useColorModeValue, useDisclosure, Switch, Collapse, useColorMode } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlockchainListData } from "@redux/app_data/dataSlice";
import { useSearchParams } from "next/navigation";

// const OverviewColumnChart = dynamic(() => import("@components/pages/dashboard/overviewColumnChart"), { ssr: false });
const DashboardDefiSelection = dynamic(() => import("./DashboardDefiSelection"), { ssr: false });
// const OverviewBox = dynamic(() => import("@components/pages/dashboard/overviewBox"), { ssr: false });
const Rankings = dynamic(() => import("@components/pages/dashboard/defiRankingsTable"), { ssr: false });
const BlockchainSelectionMenuNew = dynamic(() => import("@components/blockchainSelectionNew"), { ssr: false });
const Marquee = dynamic(() => import("@/components/pages/coin/marquee"), { ssr: false });
const ProtocolFilterModal = dynamic(() => import("@components/pages/defiDashboard/ProtocolFilterModal"), { ssr: false });
const HighlightsBox = dynamic(() => import("@/components/pages/defiDashboard/HighlightsBox"), { ssr: false });


const ProtocolPage = () => {
    const { colorMode } = useColorMode();
    const { isOpen, /* onOpen, */ onClose } = useDisclosure();
    const dispatch = useDispatch();
    const { isOpen: isHighlightsBoxOpen, onToggle: onHighlightsBoxToggle } = useDisclosure();

    const blockchainSelected = useSelector((state) => state?.dashboardTableData?.blockchainType);
    const categorySelected = useSelector((state) => state?.dashboardTableData?.categorySelected);
    const searchParams = useSearchParams();
    const on = searchParams.get('on');
    const by = searchParams.get('by');

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

    const fetchDefiOverviewDataHandler = () => {
        dispatch(fetchDefiOverviewData());
    };

    const fetchMarqueeDataHandler = () => {
        dispatch(fetchMarqueeData());
    };

    useEffect(() => {
        Promise.all([
            getOverviewDataHandler(),
            getScoreGraphDataHandler()
        ]).then(result => result);
    }, [blockchainSelected, categorySelected]);

    useEffect(() => {
        Promise.all([
            fetchDefiOverviewDataHandler(),
            fetchMarqueeDataHandler(),
            onHighlightsBoxToggle(),
        ]).then(result => result);
    }, []);

    useEffect(() => {
        Promise.all([
            dispatch(fetchBlockchainListData()),
        ]).then(res => res);
    }, []);

    const ScrollToRight = () => {
        document.getElementById('blockchain-container').scrollBy(
            {
                left: 150,
                behavior: 'smooth',
            }
        );
    };

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
        <Box display={"flex"} flexDir={"column"} overflow={"hidden"}>
            <Marquee />
            <Box layerStyle={"flexCenter"} mx={{ md: "10px" }} paddingRight={{ base: "18px" }} mb={{ base: "14px", md: "14px" }} >
                <Box w={{ base: "95%", md: "100%" }}>
                    <BlockchainSelectionMenuNew />
                </Box>
                <Box ml={{ base: "5px", md: "-40px" }} cursor={"pointer"}>
                    <i className="icon arrow_right_grey" onClick={ScrollToRight} />
                </Box>
                {/*                 <Button onClick={onOpen} gap={{ base: "2px", md: "5px" }} ml={{ base: "4px" }} >
                    <Image src={"/icons/filter_list.svg"} width={20} height={20} alt=" "></Image>
                    <Text>Filter</Text>
                </Button> */}
            </Box>
            <Box
                display={"flex"}
                flexDir={"column"}
                bg={useColorModeValue("#F0F0F5", "#191919")}
                px={{ base: "18px", md: "30px" }}
                borderTop={"1px solid " + useColorModeValue("rgba(0, 0, 0, 0.1)", "rgba(255, 255, 255, 0.1)")}>

                <Box layerStyle={"flexCenterSpaceBetween"} w="100%" mt={"20px"}>
                    <Text variant={"contentHeading4"} fontSize={"20px"} lineHeight={"22px"}>
                        DeFi Overview
                    </Text>
                    <Box layerStyle={"flexCenter"} w={{ base: "100%", md: "10%" }} justifyContent={"flex-end"}>
                        <Text variant={"h3"} mr={"5px"} fontWeight={500}>Highlights</Text>
                        <Switch
                            size={"lg"}
                            isChecked={isHighlightsBoxOpen}
                            onChange={onHighlightsBoxToggle}
                            className={colorMode === 'light' ? "custom-switch-light" : "custom-switch-dark"}
                        ></Switch>
                    </Box>
                </Box>
                <Collapse in={isHighlightsBoxOpen}>
                    <HighlightsBox />
                </Collapse>
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
                    py={"10px"}
                    gap={"15px"}
                >
                    {/* <OverviewBox /> */}
                    {/* <OverviewColumnChart /> */}
                </Box>
                <Rankings />
            </Box >

            <ProtocolFilterModal
                isOpen={isOpen}
                onClose={onClose}
            />
        </Box >
    );
};

export default ProtocolPage;
