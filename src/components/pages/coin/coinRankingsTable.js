/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";
import { Text, Td, Th, Tr, Box, useColorModeValue, Button } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { tableHeader } from "@components/pages/coin/helper";
import { fetchCoinRankingsTableData, fetchCoinScoresData, } from "@redux/coin_data/dataSlice";
import CustomAvatar from "@components/avatar";

const GenericTable = dynamic(() => import("@components/table"));
const PageButtonsWide = dynamic(() => import("@components/pageButtonsWide"));
const ScoreDistribution = dynamic(() => import("@components/pages/coin/scoreDistribution"));

const CoinRankingsTable = () => {
    const dispatch = useDispatch();
    const [tablePage, setTablePage] = useState(1);
    const [tableLimit, setTableLimit] = useState(20);
    const [totalDefis, setTotalDefis] = useState(0);

    const tableData = useSelector((state) => state.coinData.CoinRankingsTableData);
    const coinScoresData = useSelector((state) => state.coinData.CoinScoresData);
    const scoreSelected = useSelector((state) => state.coinData.scoreSelected);

    const pageChangeHandler = (page) => {
        if (page == "") {
            setTablePage(page);
        }
        if (page >= 1) {
            setTablePage(page);
        }
    };

    const getCoinRankingsTableDataHandler = () => {
        const payload = {
            page: tablePage,
            limit: tableLimit,
            score_dist: scoreSelected,
        };
        dispatch(fetchCoinRankingsTableData(payload));
    };

    useEffect(() => {
        if (tablePage != "") {
            setTimeout(() => {
                getCoinRankingsTableDataHandler();
            }, 1500);
        }
    }, [tablePage, tableLimit, scoreSelected, setTablePage]);

    useEffect(() => {
        dispatch(fetchCoinScoresData());
    }, []);

    useEffect(() => {
        if (coinScoresData.isSuccess) {
            setTotalDefis(
                coinScoresData.data[0]?.value +
                coinScoresData.data[1]?.value +
                coinScoresData.data[2].value +
                coinScoresData.data[3].value
            );
        }
    }, [coinScoresData]);

    return (
        <Box
            layerStyle={"flexColumn"}
            borderRadius={"6px"}
            mb={"20px"}
            border={"1px"}
            borderColor={useColorModeValue("#FFFFFF", "#282828")}
            perspective={"1px"}
        >
            <Box
                layerStyle={"spaceBetween"}
                flexDirection={{ base: "column", md: "row", lg: "row" }}
                p={"10px 20px"}
                bgColor={"background.secondary"}
                gap={"10px"}
            >
                <Box
                    display={"flex"}
                    flexDirection={{ base: "row", md: "column" }}
                    alignItems={"start"}
                    justifyContent={"space-between"}
                    w={{ base: "100%", md: "unset", lg: "unset" }}
                >
                    <Text variant={"h2"} fontWeight={"700"} lineHeight={"26px"}>
                        Cryptocurrency Prices by Ranking
                    </Text>
                    <Text
                        variant={"content"}
                        fontWeight={"500"}
                        _light={{ color: "#161616" }}
                        _dark={{ color: "#FFFFFF" }}
                        lineHeight={"26px"}>
                        Total - {totalDefis}
                    </Text>
                </Box>
                <ScoreDistribution
                    totalDefis={totalDefis}
                    scoreTotalData={coinScoresData.data}
                />
            </Box>

            <Box display={"flex"} overflowX={"auto"}>
                <GenericTable
                    tableHeader={tableHeader}
                    tableData={tableData}
                    TableRow={TableRow}
                    showSortingIcon={true}
                    TableHeaderRowMobile={TableHeaderRowMobile}
                    ButtonComp={ButtonComp}
                    PanelComp={PanelComp}
                    SkeletonRowsColumnsDesktop={{ numRows: tableLimit, numColumns: 9 }}
                    SkeletonRowsColumnsMobile={{ numRows: tableLimit, numColumns: 3 }}
                />
            </Box>

            <Box
                display={"flex"}
                minH={"60px"}
                p={{ base: "10px", md: "5px 20px" }}
                bgColor={"background.secondary"}
            >
                <PageButtonsWide
                    page={tablePage}
                    totalPages={tableData?.data?.totalPages}
                    pageChangeHandler={pageChangeHandler}
                    tableLimit={tableLimit}
                    setTableLimit={setTableLimit}
                    w={"100%"}
                />
            </Box>
        </Box>
    );
};

export default CoinRankingsTable;

const TableRow = ({ item, rowIndex }) => {
    const router = useRouter();

    return (
        <Tr
            key={rowIndex}
            cursor={"pointer"}
            onClick={() => {
                if (item?.slug) router.push(`/coin/${item?.slug}`);
            }}
            border={"0px"}
            bgColor={"background.secondary"}
        >
            <Td key={0} textAlign={"center"} p={0}>
                <Text variant={"h3"}>
                    {item?.rank === undefined ? "-" : item?.rank}
                </Text>
            </Td>
            <Td key={1} p={"15px"}>
                <Box display={"flex"} alignItems={"center"} gap={"10px"}>
                    <CustomAvatar
                        width={"24px"}
                        height={"24px"}
                        style={{ borderRadius: "50%" }}
                        name={item?.name}
                        src={item?.logoUrl}
                    />

                    <Box
                        display={"flex"}
                        alignItems={"start"}
                        flexDirection={"column"}
                        gap={"4px"}
                    >
                        <Text variant={"h3"}>{item?.name}</Text>

                        <Box layerStyle={"center"} flexShrink={"0"}>
                            <Text
                                fontSize={"12px"}
                                color={useColorModeValue("#000000", "#FFFFFF")}
                                opacity={"0.5"}
                            >
                                {item?.ticker}
                            </Text>
                        </Box>
                    </Box>
                </Box>
            </Td>
            <Td key={2} p={0}>
                <Box layerStyle={"center"}>
                    <Text variant={"h3"}>
                        {item?.price === undefined
                            ? "-"
                            : item?.price?.toLocaleString("en-US", {
                                style: "currency",
                                currency: "USD",
                            })}
                    </Text>
                </Box>
            </Td>
            <Td key={3} p={0}>
                <Box layerStyle={"center"}>
                    <Text
                        variant={"h3"}
                        color={item?.change_1hr > 0 ? "text.green" : "text.red"}
                        fontWeight={"600"}
                    >
                        {item?.change_1hr === undefined
                            ? "-"
                            : item?.change_1hr.toFixed(3) + "%"}
                    </Text>
                </Box>
            </Td>
            <Td key={4} p={0}>
                <Box layerStyle={"center"}>
                    <Text
                        variant={"h3"}
                        color={
                            item?.change_24hr > 0 ? "text.green" : "text.red"
                        }
                        fontWeight={"600"}
                    >
                        {item?.change_24hr === undefined
                            ? "-"
                            : item?.change_24hr.toFixed(3) + "%"}
                    </Text>
                </Box>
            </Td>
            <Td key={5} p={0}>
                <Box layerStyle={"center"}>
                    <Text
                        variant={"h3"}
                        color={item?.change_7d > 0 ? "text.green" : "text.red"}
                        fontWeight={"600"}
                    >
                        {item?.change_7d === undefined
                            ? "-"
                            : item?.change_7d.toFixed(3) + "%"}
                    </Text>
                </Box>
            </Td>
            <Td key={6} p={0}>
                <Box layerStyle={"center"}>
                    <Text variant={"h3"}>
                        {item?.volume_24hr === undefined
                            ? "-"
                            : item?.volume_24hr?.toLocaleString("en-US", {
                                style: "currency",
                                currency: "USD",
                            })}
                    </Text>
                </Box>
            </Td>
            <Td key={7} p={0}>
                <Box layerStyle={"center"}>
                    <Text variant={"h3"}>
                        {item?.mcap === undefined
                            ? "-"
                            : item?.mcap?.toLocaleString("en-US", {
                                style: "currency",
                                currency: "USD",
                            })}
                    </Text>
                </Box>
            </Td>
            <Td key={8} justifyContent={"center"} p={0}>
                <Box layerStyle={"center"} justifyContent={"start"} h="100%">
                    {item?.score === undefined ? (
                        "-"
                    ) : (
                        <>
                            <Box
                                layerStyle={"flexCenter"}
                                justifyContent={"center"}
                                w="88px"
                                h="33px"
                                borderRadius={"30px"}
                                mr={"4px"}
                                bgColor={
                                    item.score >= 0.75
                                        ? "#0E6027"
                                        : item.score < 0.75 && item.score >= 0.5
                                            ? "#00799F"
                                            : item.score < 0.5 && item.score >= 0.25
                                                ? "#B87A00"
                                                : "#FF0000"
                                }
                            >
                                <Text
                                    variant={"h3"}
                                    color={"#FFFFFF"}
                                    fontWeight={"700"}
                                >
                                    {(item?.score * 100).toFixed(0)}
                                </Text>
                            </Box>
                        </>
                    )}
                </Box>
            </Td>
        </Tr>
    );
};

const TableHeaderRowMobile = () => {
    return (
        <Tr>
            <Th border={"0px"} w={"20px"}>
                <Text variant={"tableHead"}>Rank</Text>
            </Th>
            <Th border={"0px"}>
                <Text variant={"tableHead"}>Name</Text>
            </Th>
            <Th border={"0px"}>
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
                    {item?.rank === undefined ? "-" : item?.rank}{" "}
                </Text>

                <Box layerStyle={"center"} gap={"10px"} ml={"30px"}>
                    <CustomAvatar
                        width={"24px"}
                        height={"24px"}
                        style={{ borderRadius: "50%" }}
                        name={item?.name}
                        src={item?.logoUrl}
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
                            color={useColorModeValue("#000000", "#FFFFFF")}
                            opacity={"0.5"}
                        >
                            {item?.ticker}
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
                    w="88px"
                    h="33px"
                    borderRadius={"30px"}
                    mr={"4px"}
                    bgColor={
                        item.score >= 0.75
                            ? "#0E6027"
                            : item.score < 0.75 && item.score >= 0.5
                                ? "#00799F"
                                : item.score < 0.5 && item.score >= 0.25
                                    ? "#B87A00"
                                    : "#FF0000"
                    }
                >
                    <Text variant={"h3"} color={"#FFFFFF"} fontWeight={"700"}>
                        {(item?.score * 100).toFixed(0)}
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
                    <Text variant="tableHead"> Price </Text>
                </Box>

                <Text variant={"h3"}>
                    {item?.price === undefined
                        ? "-"
                        : item?.price?.toLocaleString("en-US", {
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
                    <Text variant="tableHead"> 1hr </Text>
                </Box>

                <Text
                    variant={"h3"}
                    color={item?.change_1hr > 0 ? "text.green" : "text.red"}
                    fontWeight={"600"}
                >
                    {item?.change_1hr === undefined
                        ? "-"
                        : item?.change_1hr.toFixed(3) + "%"}
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
                    <Text variant="tableHead"> 24hr </Text>
                    {/* <TooltipComp label="Total value locked (TVL) is the real-time value of the assets that the DeFi holds" /> */}
                </Box>

                <Text
                    variant={"h3"}
                    color={item?.change_24hr > 0 ? "text.green" : "text.red"}
                    fontWeight={"600"}
                >
                    {item?.change_24hr === undefined
                        ? "-"
                        : item?.change_24hr.toFixed(3) + "%"}
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
                    <Text variant="tableHead"> 7d </Text>
                    {/* <TooltipComp label="Market capitalization of the DeFi is the total value of tokens of the DeFi" /> */}
                </Box>
                <Text
                    variant={"h3"}
                    color={item?.change_7d > 0 ? "text.green" : "text.red"}
                    fontWeight={"600"}
                >
                    {item?.change_1hr === undefined
                        ? "-"
                        : item?.change_7d.toFixed(3) + "%"}
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
                    <Text variant="tableHead"> 24hr Volume </Text>
                    {/* <TooltipComp label="The MCAP/TVL Ratio show the difference between the total value of the token issued by the DeFi (Market Value of the DeFi) and the total value of assets of the DeFi" /> */}
                </Box>

                <Text variant={"h3"}>
                    {item?.volume_24hr === undefined
                        ? "-"
                        : item?.volume_24hr?.toLocaleString("en-US", {
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
                    <Text variant="tableHead"> Market Cap </Text>
                    {/* <TooltipComp label="The MCAP/TVL Ratio show the difference between the total value of the token issued by the DeFi (Market Value of the DeFi) and the total value of assets of the DeFi" /> */}
                </Box>

                <Text variant={"h3"}>
                    {item?.mcap === undefined
                        ? "-"
                        : item?.mcap?.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                        })}
                </Text>
            </Box>

            <Box layerStyle={"center"}>
                <Button
                    variant="link"
                    onClick={() => {
                        if (item?.slug) router.push(`/coin/${item?.slug}`);
                    }}
                >
                    Open Details
                </Button>
            </Box>
        </Box>
    );
};
