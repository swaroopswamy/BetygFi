/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";
import { Text, Td, Th, Tr, Box, useColorModeValue, Button, Tabs, TabList, Tab, useColorMode, useDisclosure } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { tableHeader } from "@components/pages/coin/helper";
//import CustomAvatar from "@components/avatar";
import millify from "millify";
import LoginPage from "@components/login";
import { useSession } from "next-auth/react";

const GenericTable = dynamic(() => import("@components/table"), { ssr: false });
const PageButtonsWide = dynamic(() => import("@components/pageButtonsWide"), { ssr: false });
const ScoreDistribution = dynamic(() => import("@components/pages/coin/scoreDistribution"), { ssr: false });
const CustomAvatar = dynamic(() => import("@components/avatar"), { ssr: false });

const CoinRankingsTable = (
    {
        tablePage,
        tableLimit,
        setTableLimit,
        setCryptoCategorySelected,
        cryptoCategories,
        pageChangeHandler,
        onTabLibraryModalOpen,
        onCustomizeTabModalOpen
    }
) => {
    const { colorMode } = useColorMode();
    const tableData = useSelector((state) => state.coinData.CoinRankingsTableData);
    const coinScoresData = useSelector((state) => state.coinData.CoinScoresData);
    const [totalDefis, setTotalDefis] = useState(0);
    const [tabSelected, setTabSelected] = useState(0);
    const { data: AuthSession } = useSession();

    useEffect(() => {
        if (coinScoresData.isSuccess) {
            if (coinScoresData.data?.length > 0) {
                const totalValue =
                    (coinScoresData?.data[0]?.value ?? 0) +
                    (coinScoresData?.data[1]?.value ?? 0) +
                    (coinScoresData?.data[2]?.value ?? 0) +
                    (coinScoresData?.data[3]?.value ?? 0);
                setTotalDefis(totalValue);
            }
        }
    }, [coinScoresData]);

    const handleTabSelected = (tab) => {
        setTabSelected(tab);
    };

    const pageMenuList = [
        { value: 20 },
        { value: 50 },
        { value: 100 },
    ];

    const {
        isOpen: isLoginModalOpen,
        onOpen: onLoginModalOpen,
        onClose: onLoginModalClose,
    } = useDisclosure();

    return (
        <React.Fragment>
            <Box layerStyle={"flexCenter"} w='100%' gap={"10px"}>
                <Box
                    mx={"20px"}
                    w={"80%"}
                    display={"flex"}
                    overflow={"auto"}
                    className="hidescrollbar">
                    <Tabs variant='soft-rounded' onChange={handleTabSelected} >
                        <TabList>
                            {
                                cryptoCategories.length > 0 && cryptoCategories.map((tab, index) => (
                                    <Tab
                                        key={index}
                                        _selected={{
                                            bgColor: colorMode === "light" ? "#191919" : "#FFFFFF",
                                            color: "#FFFFFF"
                                        }}
                                        onClick={() => setCryptoCategorySelected(tab.slug)}
                                        border={colorMode === "light" ? "1px solid #C6C6C6" : "1px solid #A5A5A5"}
                                        bgColor={colorMode === "light" ? "#FFFFFF" : "transparent"}
                                        mr={"10px"}
                                        width={"max-content"}
                                    >
                                        <Text
                                            fontWeight={tabSelected === index ? "600" : "400"}
                                            _light={{
                                                color: tabSelected === index ? "#FFFFFF" : "#191919"
                                            }}
                                            _dark={{
                                                color: tabSelected === index ? "#191919" : "#FFFFFF"
                                            }}
                                            textAlign="center"
                                            fontFamily="Inter"
                                            fontSize="16px"
                                            fontStyle="normal"
                                            lineHeight="16px"
                                        >
                                            {tab.text}
                                        </Text>
                                    </Tab>
                                ))
                            }
                        </TabList >
                    </Tabs >
                </Box>
                <Box
                    layerStyle={"flexCenter"}
                    justifyContent={"start"}
                    cursor={"pointer"}
                    onClick={onTabLibraryModalOpen}
                >
                    <i className={`icon ${colorMode === "light" ? 'tab_library_icon_light' : 'tab_library_icon_dark'}`} />
                    <Text
                        variant={"h5"}
                        color={colorMode === 'light' ? "#161616" : "#FFFFFF"}
                        fontWeight={"500"}
                        lineHeight={"16px"}
                    >
                        Tab Library
                    </Text>
                </Box>
                {!AuthSession ? (
                    <Box
                        layerStyle={"flexCenter"}
                        justifyContent={"start"}
                        cursor={"pointer"}
                        onClick={onLoginModalOpen}
                    >
                        <i className={`icon ${colorMode === "light" ? 'customize_tab_icon_light' : 'customize_tab_icon_dark'}`} />
                        <Text
                            variant={"h5"}
                            color={colorMode === 'light' ? "#161616" : "#FFFFFF"}
                            fontWeight={"500"}
                            lineHeight={"16px"}
                        >
                            Customize Tab
                        </Text>
                    </Box>
                ) : (
                    <Box
                        layerStyle={"flexCenter"}
                        justifyContent={"start"}
                        cursor={"pointer"}
                        onClick={() => { onCustomizeTabModalOpen(); }}
                    >
                        <i className={`icon ${colorMode === "light" ? 'customize_tab_icon_light' : 'customize_tab_icon_dark'}`} />
                        <Text
                            variant={"h5"}
                            color={colorMode === 'light' ? "#161616" : "#FFFFFF"}
                            fontWeight={"500"}
                            lineHeight={"16px"}
                        >
                            Customize Tab
                        </Text>
                    </Box>
                )}
            </Box>
            <Box
                mx={"20px"}
                layerStyle={"flexColumn"}
                borderRadius={"6px"}
                mb={"20px"}
                border={"1px"}
                borderColor={useColorModeValue("#FFFFFF", "#282828")}
                perspective={"1px"}
                id="total-container-protocol"
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
                        isFirstColumnSmall
                        tableHeader={tableHeader}
                        tableData={tableData}
                        TableRow={TableRow}
                        showSortingIcon={true}
                        TableHeaderRowMobile={TableHeaderRowMobile}
                        ButtonComp={ButtonComp}
                        PanelComp={PanelComp}
                        slideToLeftFeature={true}
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
                        pageMenuList={pageMenuList}
                        page={tablePage}
                        totalPages={tableData?.data?.totalPages}
                        pageChangeHandler={pageChangeHandler}
                        tableLimit={tableLimit}
                        setTableLimit={setTableLimit}
                        w={"100%"}
                    />
                </Box>
            </Box>
            <LoginPage
                isOpen={isLoginModalOpen}
                onOpen={onLoginModalOpen}
                onClose={onLoginModalClose}
            />
        </React.Fragment>
    );
};

export default CoinRankingsTable;

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
            onClick={() => {
                if (item?.slug) router.push(`/coin/${item?.slug}`);
            }}
            border={"0px"}
            bgColor={"background.secondary"}
        >
            <Td {...commonStyleTdProp} key={0} textAlign={"center"} px={0} mx={0}>
                <Text variant={"h3"}>
                    {item?.rank === undefined ? "-" : item?.rank}
                </Text>
            </Td>
            <Td {...commonStyleTdProp} key={1} p={"15px"}>
                <Box display={"flex"} alignItems={"center"} gap={"10px"}>
                    <CustomAvatar
                        width={"24px"}
                        height={"24px"}
                        style={{ borderRadius: "50%" }}
                        name={item?.name}
                        src={item?.logoUrl ?? '/icons/coin_icon.svg'}
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
            <Td {...commonStyleTdProp} key={2} p={0}>
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
            <Td {...commonStyleTdProp} key={3} p={0}>
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
            <Td {...commonStyleTdProp} key={4} p={0}>
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
            <Td {...commonStyleTdProp} key={5} p={0}>
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
            <Td {...commonStyleTdProp} key={6} p={0}>
                <Box layerStyle={"center"}>
                    <Text variant={"h3"}>
                        {item?.volume_24hr === undefined
                            ? "-"
                            : item.volume_24hr > 100000
                                ? `$${millify(item.volume_24hr, { precision: 2 })}`
                                : item.volume_24hr.toLocaleString("en-US", {
                                    style: "currency",
                                    currency: "USD",
                                })}
                    </Text>
                </Box>
            </Td>
            <Td {...commonStyleTdProp} key={7} p={0}>
                <Box layerStyle={"center"}>
                    <Text variant={"h3"}>
                        {item?.mcap === undefined
                            ? "-"
                            : item.mcap > 100000
                                ? `$${millify(item.mcap, { precision: 2 })}`
                                : item.mcap.toLocaleString("en-US", {
                                    style: "currency",
                                    currency: "USD",
                                })}
                    </Text>
                </Box>
            </Td>
            <Td {...commonStyleTdProp} key={8} justifyContent={"center"} p={0}>
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
            <Th _light={{ bgColor: "#F5F5F7", }} _dark={{ bgColor: "#191919", }} border={"0px"} w={"20px"}>
                <Text variant={"tableHead"}>Rank</Text>
            </Th>
            <Th border={"0px"}>
                <Text variant={"tableHead"}>Name</Text>
            </Th>
            <Th _light={{ bgColor: "#F5F5F7", }} _dark={{ bgColor: "#191919", }} border={"0px"}>
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
