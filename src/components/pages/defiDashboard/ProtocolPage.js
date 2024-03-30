/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import BlockchainSelectionMenuNew from "@components/blockchainSelectionNew";
import { fetchBlockchainListData } from "@redux/app_data/dataSlice";
import { fetchOverviewData, fetchScoreGraphData } from "@redux/dashboard_data/dataSlice";
import { fetchTopGainersAndLosersData, fetchMarqueeData } from "@redux/coin_data/dataSlice";
import { Box, Text, useColorModeValue, useDisclosure, Switch, useColorMode, Collapse, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HighlightsBox from "@components/pages/defiDashboard/HighlightsBox";
import Image from "next/image";
import Marquee from "./marquee";

// const OverviewColumnChart = dynamic(() => import("@components/pages/dashboard/overviewColumnChart"), { ssr: false });
const DashboardDefiSelection = dynamic(() => import("./DashboardDefiSelection"), { ssr: false });
// const OverviewBox = dynamic(() => import("@components/pages/dashboard/overviewBox"), { ssr: false });
const Rankings = dynamic(() => import("@components/pages/dashboard/defiRankingsTable"), { ssr: false });

const ProtocolPage = () => {
    // const [isMd] = useMediaQuery("(min-width: 768px)");
    const { colorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const dispatch = useDispatch();
    const { isOpen: isHighlightsBoxOpen, onToggle: onHighlightsBoxToggle } = useDisclosure();

    const blockchainSelected = useSelector((state) => state?.dashboardTableData?.blockchainType);
    const categorySelected = useSelector((state) => state?.dashboardTableData?.categorySelected);
    // const isMobileSearchBarOpen = useSelector((state) => state?.appData?.isMobileSearchOpen);

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

    const fetchTopGainersAndLosersDataHandler = () => {
        dispatch(fetchTopGainersAndLosersData());
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
            fetchTopGainersAndLosersDataHandler(),
            fetchMarqueeDataHandler(),
            onHighlightsBoxToggle(),
        ]).then(result => result);
    }, []);

    useEffect(() => {
        dispatch(fetchBlockchainListData());
    }, []);

    return (
        <>
            <Box display={"flex"} flexDir={"column"} overflow={"hidden"}>
                {/* {
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
            } */}
                <Marquee />
                <Box layerStyle={"flexCenter"} px={{ md: "28px" }} mb={{ base: "14px", md: "28px" }}>
                    <BlockchainSelectionMenuNew />
                    <Button onClick={onOpen} gap={"5px"}>
                        <Image src={"/icons/filter_list.svg"} width={15} height={15} alt=" "></Image>
                        <Text>Filter</Text>
                    </Button>
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
                        py={"15px"}
                        gap={"15px"}
                    >
                        {/* <OverviewBox /> */}
                        {/* <OverviewColumnChart /> */}
                    </Box>
                    <Rankings />
                </Box >

                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader mt={"15px"} layerStyle={"flexCenter"}>
                            <Text variant={"bigTextNumber"} lineHeight={"16px"}>Filter</Text>
                            <Image width={18} height={18} src={"/icons/info_sm_icon.svg"} alt=" "></Image>
                        </ModalHeader>
                        <ModalCloseButton mt={"15px"} />
                        <ModalBody>
                            <Text variant={"contentHeading4"} fontSize={"20px"} lineHeight={"10px"}>
                                DeFi Market
                            </Text>
                            <InputGroup width={"100%"}>
                                <InputLeftElement my={"7px"}><Image src={"/icons/search.svg"} width={16} height={16} alt=" "></Image></InputLeftElement>
                                <Input
                                    bg={"#F0F0F5"}
                                    mt={"15px"}
                                    ml={"10px"}
                                    width={"100%"}
                                    placeholder='Search for asset'
                                    size='xs'
                                    color={colorMode === 'light' ? "#6F6F6F" : "#191919"}
                                ></Input>
                            </InputGroup>
                            <Box mt={"15px"}>
                                <Box layerStyle={"flexCenterSpaceBetween"} my={"20px"}>
                                    <Box layerStyle={"flexCenter"}>
                                        <Image src={"/icons/Menu_Icon.svg"} width={25} height={25} alt=" "></Image>
                                        <Box layerStyle={"flexCenter"} ml={"10px"}>
                                            <Image src={"/icons/bitcoin_logo.svg"} width={32} height={32} alt=" "></Image>
                                            <Box m={"5px 0px 0px 5px"}>
                                                <Text variant={"contentHeading4"} fontSize={"16px"} lineHeight={"10px"} >
                                                    BTC
                                                </Text>
                                                <Text variant={"contentHeading4"} fontSize={"12px"} mt={"5px"} color={colorMode === 'light' ? "#757575" : "#A5A5A5"}>
                                                    Bitcoin
                                                </Text>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Image src={"/icons/Pin_Icon.svg"} width={24} height={24} alt=" "></Image>
                                </Box>
                                <Box layerStyle={"flexCenterSpaceBetween"} my={"20px"}>
                                    <Box layerStyle={"flexCenter"}>
                                        <Image src={"/icons/Menu_Icon.svg"} width={25} height={25} alt=" "></Image>
                                        <Box layerStyle={"flexCenter"} ml={"10px"}>
                                            <Image src={"/icons/bitcoin_logo.svg"} width={32} height={32} alt=" "></Image>
                                            <Box m={"5px 0px 0px 5px"}>
                                                <Text variant={"contentHeading4"} fontSize={"16px"} lineHeight={"10px"} >
                                                    BTC
                                                </Text>
                                                <Text variant={"contentHeading4"} fontSize={"12px"} mt={"5px"} color={colorMode === 'light' ? "#757575" : "#A5A5A5"}>
                                                    Bitcoin
                                                </Text>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Image src={"/icons/Pin_Icon.svg"} width={24} height={24} alt=" "></Image>
                                </Box>
                                <Box layerStyle={"flexCenterSpaceBetween"} my={"20px"}>
                                    <Box layerStyle={"flexCenter"}>
                                        <Image src={"/icons/Menu_Icon.svg"} width={25} height={25} alt=" "></Image>
                                        <Box layerStyle={"flexCenter"} ml={"10px"}>
                                            <Image src={"/icons/bitcoin_logo.svg"} width={32} height={32} alt=" "></Image>
                                            <Box m={"5px 0px 0px 5px"}>
                                                <Text variant={"contentHeading4"} fontSize={"16px"} lineHeight={"10px"} >
                                                    BTC
                                                </Text>
                                                <Text variant={"contentHeading4"} fontSize={"12px"} mt={"5px"} color={colorMode === 'light' ? "#757575" : "#A5A5A5"}>
                                                    Bitcoin
                                                </Text>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Image src={"/icons/Pin_Icon.svg"} width={24} height={24} alt=" "></Image>
                                </Box>
                            </Box>
                        </ModalBody>

                        <Box layerStyle={"flexCenterSpaceBetween"} m={"10px 20px"}>
                            <Button variant={"modalButton"} width={100} height={30}>
                                Reset
                            </Button>
                            <Box layerStyle={"flexCenter"} gap={"10px"}>
                                <Button variant={"modalButton"} onClick={onClose} width={100} height={30}>
                                    Cancel
                                </Button>
                                <Button variant={"modalButton"} width={100} height={30}>
                                    Apply
                                </Button>
                            </Box>
                        </Box>
                    </ModalContent>
                </Modal>
            </Box >
        </>
    );
};

export default ProtocolPage;
