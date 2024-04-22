/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useRef, useState } from "react";
import {
    Text,
    Td,
    Th,
    Tr,
    Box,
    useColorModeValue,
    Collapse,
    useDisclosure,
    Button,
    Tooltip,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import isEmpty from "lodash/isEmpty";
import dynamic from "next/dynamic";
import { tableHeader } from "@components/pages/dashboard/helper";
import { MobileSearchBox } from "@components/mobileSearchBox";
import { fetchDefiRankingTableData } from "@redux/dashboard_data/dataSlice";
import CustomAvatar from "@components/avatar";

const GenericTable = dynamic(() => import("@components/table"));
const PageButtonsWide = dynamic(() => import("@components/pageButtonsWide"));
const ScoreDistribuition = dynamic(() => import("@components/pages/dashboard/scoreDistribuition"));

const Rankings = () => {
    const [tablePage, setTablePage] = useState(1);
    const [tableLimit, setTableLimit] = useState(100);
    const [totalDefis, setTotalDefis] = useState(0);
    const timerRef = useRef(null);

    const [searchByName, setSearchByName] = useState("");
    const { isOpen: isMobileRankingsSearchOpen } = useDisclosure();

    const dispatch = useDispatch();

    const blockchainSelected = useSelector((state) => state?.dashboardTableData?.blockchainType);
    const categorySelected = useSelector((state) => state?.dashboardTableData?.categorySelected);
    const scoreSelected = useSelector((state) => state?.dashboardTableData?.scoreSelected);
    const tableData = useSelector((state) => state?.dashboardTableData.DefiRankingsTableData);
    const scoreTotalData = useSelector((state) => state.dashboardTableData.ScoreGraphData?.data?.safety_score);

    useEffect(() => {
        if (scoreTotalData) {
            const total = scoreTotalData[0]?.value + scoreTotalData[1]?.value + scoreTotalData[2].value + scoreTotalData[3].value;
            setTotalDefis(total);
        }
    }, [scoreTotalData]);

    const pageChangeHandler = (page) => {
        if (page == "") {
            setTablePage(page);
        }
        if (page >= 1) {
            setTablePage(page);
        }
    };

    const searchByNameHandler = (name) => {
        setSearchByName(name);
        setTablePage(1);
    };

    const getDefiRankingsTableDataHandler = () => {
        if (timerRef.current) clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
            if (!isEmpty(searchByName)) {
                const payload = {
                    name: searchByName,
                    page:
                        tablePage >= 1 &&
                        tablePage <= tableData?.data?.totalPages &&
                        tablePage,
                    limit: tableLimit,
                    score_dist: scoreSelected,
                };
                dispatch(fetchDefiRankingTableData(payload));
            } else {
                const payload = {
                    blockchain: blockchainSelected,
                    category: categorySelected,
                    page:
                        tablePage >= 1 &&
                        tablePage <= tableData?.data?.totalPages &&
                        tablePage,
                    limit: tableLimit,
                    score_dist: scoreSelected,
                };
                dispatch(fetchDefiRankingTableData(payload));
            }
        }, 1000);
    };

    useEffect(() => {
        if (tablePage != "") {
            setTimeout(() => {
                getDefiRankingsTableDataHandler();
            }, 1500);
        }
    }, [
        blockchainSelected,
        categorySelected,
        tablePage,
        searchByName,
        tableLimit,
        scoreSelected,
        setTablePage
    ]);

    const pageMenuList = [
        { value: 20 },
        { value: 50 },
        { value: 100 },
    ];

    return (
        <Box
            layerStyle={"flexColumn"}
            bg={useColorModeValue("#FFFFFF", "#202020")}
            borderRadius={"6px"}
            mb={{ base: "100px", md: "20px" }}
        >
            <Box
                layerStyle={"spaceBetween"}
                flexDirection={{ base: "column", md: "row", lg: "row" }}
                p={"10px 20px"}
            >
                <Box
                    display={"flex"}
                    flexDirection={{ base: "row", md: "column", lg: "column" }}
                    alignItems={"start"}
                    justifyContent={{
                        base: "space-between",
                        md: "space-between",
                        lg: "space-between",
                    }}
                    w={{ base: "100%", md: "unset", lg: "unset" }}
                    pt={{ base: "19px", md: "0px", lg: "0px" }}
                    mb={{ base: "15px", md: "0px", lg: "0px" }}
                >
                    <Text variant={"h2"} fontWeight={"700"} lineHeight={"26px"}>
                        DeFi Rankings
                    </Text>
                    <Text
                        variant={"content"}
                        fontWeight={"500"}
                        _light={{ color: "#161616", }}
                        _dark={{ color: "#FFFFFF", }}
                        lineHeight={"26px"}
                    >
                        Total DeFis - {totalDefis}
                    </Text>
                </Box>
                <ScoreDistribuition
                    totalDefis={totalDefis}
                    scoreTotalData={scoreTotalData}
                />
            </Box>

            <Collapse in={isMobileRankingsSearchOpen} animateOpacity={"true"}>
                <MobileSearchBox
                    placeholder="Search DeFi"
                    onChange={(e) => {
                        searchByNameHandler(e.target.value);
                    }}
                />
            </Collapse>

            <Box display={"flex"} overflowX={"auto"}>
                <GenericTable
                    tableHeader={tableHeader}
                    tableData={tableData}
                    showSortingIcon={true}
                    TableRow={TableRow}
                    TableHeaderRowMobile={TableHeaderRowMobile}
                    ButtonComp={ButtonComp}
                    PanelComp={PanelComp}
                    SkeletonRowsColumnsDesktop={{ numRows: tableLimit, numColumns: 8 }}
                    slideToLeftFeature={true}
                    SkeletonRowsColumnsMobile={{ numRows: tableLimit, numColumns: 3 }}
                />
            </Box>

            <Box
                display={"flex"}
                minH={"60px"}
                p={{ base: "10px", md: "5px 20px" }}
            >
                <PageButtonsWide
                    page={tablePage}
                    totalPages={tableData?.data?.totalPages}
                    pageChangeHandler={pageChangeHandler}
                    tableLimit={tableLimit}
                    setTableLimit={setTableLimit}
                    pageMenuList={pageMenuList}
                    w={"100%"}
                />
            </Box>
        </Box>
    );
};

export default Rankings;

const TableRow = ({ item, rowIndex }) => {
    const router = useRouter();
    const commonStyleTdProp = {
        _light: { bgColor: "#FFFFFF", },
        _dark: { bgColor: "#202020", }
    };
    return (
        <Tr
            key={rowIndex}
            cursor={"pointer"}
            onClick={() => { router.push(`/protocol/${item?.slug}`); }}
            border={"0px"}
            bgColor={"background.secondary"}
        >
            <Td {...commonStyleTdProp} key={0} textAlign={"center"}>
                <Text variant={"h3"}>
                    {item?.Rank === undefined ? "-" : item?.Rank}
                </Text>
            </Td>
            <Td  {...commonStyleTdProp} key={1}>
                <Box
                    display={"flex"}
                    alignItems={"center"}
                    width={"120px"}
                    gap={"10px"}
                >
                    <CustomAvatar
                        width={"24px"}
                        height={"24px"}
                        style={{ borderRadius: "50%" }}
                        name={item?.name}
                        src={item?.logo}
                    />

                    <Box
                        display={"flex"}
                        alignItems={"start"}
                        flexDirection={"column"}
                        gap={"4px"}
                    >
                        <Text variant={"h3"}>{item?.name}</Text>

                        <Box layerStyle={"center"} flexShrink={"0"}>
                            <Tooltip
                                label="chains"
                                as={ChainsTooltip}
                                chains={item?.chains}
                            >
                                <Text
                                    fontSize={"12px"}
                                    color={useColorModeValue(
                                        "#000000",
                                        "#FFFFFF"
                                    )}
                                    opacity={"0.5"}
                                >
                                    {item?.chains?.length} Chains
                                </Text>
                            </Tooltip>
                        </Box>
                    </Box>
                </Box>
            </Td>
            <Td  {...commonStyleTdProp} key={2}>
                <Text variant={"h3"}>{item.category}</Text>
            </Td>
            <Td  {...commonStyleTdProp} key={3}>
                <Text variant={"h3"}>
                    {item.price?.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                    }) ?? "-"}
                </Text>
            </Td>
            <Td   {...commonStyleTdProp} key={4}>
                <Text variant={"h3"}>
                    {Math.trunc(item.tvl).toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                    }) ?? "-"}
                </Text>
            </Td>
            <Td  {...commonStyleTdProp} key={5}>
                <Text variant={"h3"}>
                    {Math.trunc(item.mcap).toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                    })}
                </Text>
            </Td>
            <Td  {...commonStyleTdProp} key={6}>
                {item.tvl !== 0 ? (
                    <Text variant={"h3"}>
                        {(item['mcap-tvl'])?.toFixed(2)}
                    </Text>
                ) : (
                    <Text variant={"h3"}>NA</Text>
                )}
            </Td>
            <Td  {...commonStyleTdProp} key={7} justifyContent={"center"}>
                <Box layerStyle={"center"} justifyContent={"start"} h="100%">
                    {
                        item?.safety_score === undefined ?
                            ("-") :
                            (
                                <Box
                                    layerStyle={"flexCenter"}
                                    justifyContent={"center"}
                                    w="88px"
                                    h="33px"
                                    borderRadius={"30px"}
                                    mr={"4px"}
                                    bgColor={
                                        item.safety_score >= 75
                                            ? "#0E6027"
                                            : item.safety_score < 75 &&
                                                item.safety_score >= 50
                                                ? "#00799F"
                                                : item.safety_score < 50 &&
                                                    item.safety_score >= 25
                                                    ? "#B87A00"
                                                    : "#FF0000"
                                    }
                                >
                                    <Text
                                        variant={"h3"}
                                        color={"#FFFFFF"}
                                        fontWeight={"700"}
                                    >
                                        {item?.safety_score?.toFixed(0)}
                                    </Text>
                                </Box>
                            )
                    }
                </Box>
            </Td>
        </Tr>
    );
};

const TableHeaderRowMobile = () => {
    return (
        <Tr>
            <Th border={"0px"} w={"20px"} _light={{ bgColor: "#F5F5F7", }} _dark={{ bgColor: "#191919", }}>
                <Text variant={"tableHead"}>Rank</Text>
            </Th>
            <Th border={"0px"} _light={{ bgColor: "#F5F5F7", }} _dark={{ bgColor: "#191919", }}>
                <Text variant={"tableHead"}>Name</Text>
            </Th>
            <Th border={"0px"} _light={{ bgColor: "#F5F5F7", }} _dark={{ bgColor: "#191919", }}>
                <Text variant={"tableHead"}>Score</Text>
            </Th>
        </Tr>
    );
};

const ButtonComp = ({ item }) => {
    return (
        <Box
            display={"flex"}
            w="100%"
            justifyContent={"space-between"}
            alignItems={"center"}
        >
            <Box
                display={"flex"}
                w={"50%"}
                justifyContent={"start"}
                alignItems={"center"}
                mx={"20px"}
            >
                <Text variant={"h3"}>
                    {" "}
                    {item?.Rank === undefined ? "-" : item?.Rank}{" "}
                </Text>

                <Box layerStyle={"center"} gap={"10px"} ml={"30px"}>
                    <CustomAvatar
                        width={"24px"}
                        height={"24px"}
                        style={{ borderRadius: "50%" }}
                        name={item?.name}
                        src={item?.logo}
                    />

                    <Box
                        layerStyle={"flexColumn"}
                        justifyContent={"start"}
                        minW={"100px"}
                        textAlign={"left"}
                    >
                        <Text variant={"h3"}> {item?.name} </Text>
                        <Text
                            fontSize={"12px"}
                            color={useColorModeValue("rgba(0, 0, 0, 0.5)", "rgba(255, 255, 255, 0.5)")}
                        >
                            {item?.chains?.length} Chains
                        </Text>
                    </Box>
                </Box>
            </Box>

            <Box
                w={"50%"}
                layerStyle={"center"}
                justifyContent={"center"}
                gap={"5px"}
            >
                <Box
                    layerStyle={"flexCenter"}
                    justifyContent={"center"}
                    w="45px"
                    h="28px"
                    borderRadius={"4px"}
                    mr={"4px"}
                    bgColor={
                        item.safety_score >= 75
                            ? "#0E6027"
                            : item.safety_score < 75 && item.safety_score >= 50
                                ? "#00799F"
                                : item.safety_score < 50 && item.safety_score >= 25
                                    ? "#B87A00"
                                    : "#FF0000"
                    }
                >
                    <Text variant={"h3"} color={"#FFFFFF"} fontWeight={"700"}>
                        {item?.safety_score?.toFixed(0)}
                    </Text>
                </Box>
            </Box>
        </Box>
    );
};

const PanelComp = ({ item }) => {
    const router = useRouter();

    return (
        <Box
            display={"flex"}
            flexDir={"column"}
            alignItems={"left"}
            w="100%"
            gap={"15px"}
        >
            <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"start"}
                gap={"10px"}
            >
                <Box
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"start"}
                    w={"40%"}
                >
                    <Text variant="tableHead"> Category </Text>
                    {/* <TooltipComp label="Category outlines the type of the services the DeFi provides" /> */}
                </Box>

                <Text variant={"h3"} textAlign={"left"}>
                    {item.category}
                </Text>
            </Box>

            <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"start"}
                gap={"10px"}
            >
                <Box
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"start"}
                    w={"40%"}
                >
                    <Text variant="tableHead"> Price </Text>
                </Box>

                <Text variant={"h3"} textAlign={"left"}>
                    {item.price?.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                    })}
                </Text>
            </Box>

            <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"start"}
                gap={"10px"}
            >
                <Box
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"start"}
                    w={"40%"}
                >
                    <Text variant="tableHead"> TVL </Text>
                    {/* <TooltipComp label="Total value locked (TVL) is the real-time value of the assets that the DeFi holds" /> */}
                </Box>

                <Text variant={"h3"} textAlign={"left"}>
                    {Math.trunc(item.tvl).toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                    })}
                </Text>
            </Box>

            <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"start"}
                gap={"10px"}
            >
                <Box
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"start"}
                    w={"40%"}
                >
                    <Text variant="tableHead"> MCap </Text>
                    {/* <TooltipComp label="Market capitalization of the DeFi is the total value of tokens of the DeFi" /> */}
                </Box>
                <Text variant={"h3"} textAlign={"left"}>
                    {Math.trunc(item.mcap).toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                    })}
                </Text>
            </Box>

            <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"start"}
                gap={"10px"}
            >
                <Box
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"start"}
                    w={"40%"}
                >
                    <Text variant="tableHead"> MCap/TVL </Text>
                    {/* <TooltipComp label="The MCAP/TVL Ratio show the difference between the total value of the token issued by the DeFi (Market Value of the DeFi) and the total value of assets of the DeFi" /> */}
                </Box>

                {item.tvl !== 0 ? (
                    <Text variant={"h3"} textAlign={"left"}>
                        {(item.mcap / item.tvl).toFixed(2)}
                    </Text>
                ) : (
                    <Text variant={"h3"} textAlign={"left"}>
                        NA
                    </Text>
                )}
            </Box>

            <Box layerStyle={"center"}>
                <Button
                    variant="link"
                    onClick={() => {
                        router.push(
                            `/protocol/${item?.slug}`
                            // `/defi_dashboard?defi=${item?.slug}&id=${item._id}`
                        );
                    }}
                >
                    Open Dashboard
                </Button>
            </Box>
        </Box>
    );
};

const ChainsTooltip = ({ chains }) => {
    return (
        <Box
            layerStyle={"flexColumn"}
            minW={"140px"}
            p={"10px 20px"}
            bgColor={useColorModeValue("#FFFFFF", "#202020")}
            boxShadow={useColorModeValue(
                "0px 5px 4px 0px rgba(0, 0, 0, 0.10)",
                "0px 5px 4px 0px rgba(200, 200, 200, 0.10)"
            )}
            borderColor={useColorModeValue("#F0F0F5", "#333333")}
            borderRadius={"8px"}
            gap={"15px"}
        >
            {chains?.map((chain, i) => {
                return (
                    <Box layerStyle={"flexCenter"} key={i} gap={"10px"}>
                        <CustomAvatar
                            width={"24px"}
                            height={"24px"}
                            name={chain?.name}
                            src={chain?.logoUrl}
                        />

                        <Text variant={"h4"} fontSize={"14px"}>
                            {" "}
                            {chain?.name}{" "}
                        </Text>
                    </Box>
                );
            })}
        </Box>
    );
};
