"use client"
import { Box, Image, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useColorModeValue, useColorMode, Flex, Tooltip, TableContainer, Table, Thead, Tr, Th, Tbody, Td, Button, Select } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React, { useEffect } from "react";
import { useState } from "react";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import graphData2 from './exampleTrendGraphData.json';
import { useSelector } from "react-redux";
const axios = require('axios');

function TrendGraph() {
    const { colorMode } = useColorMode();
    const [graphTypeSelected, setGraphTypeSelected] = useState(["tvl"]);
    const [currencySelected, setCurrencyType] = useState("USD");
    const [series, setSeries] = useState([]);

    const [graphData, setGraphData] = useState(null);

    useEffect(() => {
        let response = axios.get('https://api.coingecko.com/api/v3/coins/aave/market_chart/range?vs_currency=usd&from=0&to=1693552768123')
                        .then(function (response) {
                            setGraphData(response.data);
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
        setGraphTypeSelected(["tvl"])
    }, []);

    const graphTypes = [
        { name: "TVL", value: "tvl" },
        { name: "MCap", value: "mcap" },
        { name: "Price", value: "price" },
        // { name: "Users", value: "users" },
        // { name: "FDV", value: "fdv" },
        // { name: "Borrowed", value: "borrowed" },
        // { name: "Median APY", value: "median_apy" }
    ];

    const CurrencyTypeHandler = (type) => {
        setCurrencyType(type);
    }

    const GraphTypeHandler = (type) => {
        const arr = graphTypeSelected.slice();

        const index = arr.indexOf(type);
        if (index > -1) {
            arr.splice(index, 1);
        }
        else {
            arr.push(type);
        }
        if (arr?.length == 0) {
            arr.push(graphTypes[0].value);
        }

        setGraphTypeSelected(arr);
    };

    // const SeriesHandler = () => {
    //     let mapdata = [];
    //     graphData2?.data?.map((item) => {
    //         if (graphTypeSelected.includes(item.name)) {
    //             mapdata.push(item);
    //             console.log("mapdata", mapdata);
    //         }
    //     })
    //     setSeries(mapdata);
    // }

    const SeriesHandler = () => {
        let mapdata = [];
        if (!graphData) {
            return;
        }
        graphData2?.data?.map((item) => {
            if (graphTypeSelected.includes(item.name)) {
                if (item.name === "tvl") {
                    item.data = graphData["total_volumes"];
                }
                if (item.name === "mcap") {
                    item.data = graphData["market_caps"];
                }
                if (item.name === "sushi_price") {
                    item.data = graphData["prices"];
                }
                mapdata.push(item);
            }
        })
        setSeries(mapdata);
    }

    useEffect(() => {
        SeriesHandler();
    }, [graphTypeSelected])



    return (
        <>
            <Box
                display={"flex"}
                flexDirection={"column"}
                alignContent={"center"}
                height={"349px"}
                w="-webkit-fill-available"
                bgColor={useColorModeValue('#FFFFFF', "#202020")}
                border={"1px"}
                borderColor={useColorModeValue('#FFFFFF', '#272727')}
                borderRadius={"6px"}
            >
                <Box
                    padding={"20px 0 0 20px"}
                >
                    <Text
                        fontSize={"18px"}
                        fontWeight={600}
                        lineHeight={"20px"}
                    >
                        Trend Graph
                    </Text>
                </Box>

                {/* Buttons and selection go here */}
                <Box
                    display={"flex"}
                    mt={"10px"}
                    height={"24px"}
                >

                    {/* Graph type selection */}
                    <Box
                        display={"flex"}
                        gap={"10px"}
                        ml={"24px"}
                    >
                        {graphTypes.map((item, i) => {
                            return (
                                <TrendGraphTypeButton
                                    key={i}
                                    name={item.name}
                                    value={item.value}
                                    graphTypeSelected={graphTypeSelected}
                                    GraphTypeHandler={GraphTypeHandler}
                                    colorMode={colorMode}
                                />
                            );
                        })}

                        {/* <Box
                            position={"relative"}
                            padding={"7px 4px"}
                            borderRight={"1px"}
                            borderRadius={"2px"}
                            borderColor={useColorModeValue("#E0E0E0", "#333")}
                            display={"flex"}
                            alignItems={"center"}
                            cursor={"pointer"}
                        >
                            <Image
                                width={"12px"}
                                height={"12px"}
                                alt="next-arrow"
                                src={useColorModeValue('/icons/direction-arrow.svg', '/icons/direction-icon-dark.svg')}
                            ></Image>
                        </Box> */}
                    </Box>

                    {/* Currency selection */}
                    {/* <Box
                        display={"flex"}
                        ml={"auto"}
                    >
                        <CurrencyButtons
                            currencySelected={currencySelected}
                            CurrencyTypeHandler={CurrencyTypeHandler}
                            colorMode={colorMode}
                        />
                    </Box> */}

                    {/* Period selector */}
                    {/* <Box
                        display={"flex"}
                        mr={"26px"}
                        ml={"10px"}
                    >
                        <Select
                            fontSize={"10px"}
                            fontWeight={"600"}
                            height={"24px"}
                            border={"1px"}
                            borderRadius={"2px"}
                            borderColor={useColorModeValue("#E0E0E0", "#333")}
                            padding={"0"}
                            mt={"-2px"}
                        >
                            <option value='Daily'>Daily</option>
                            <option value='Monthly'>Monthly</option>
                            <option value='Yearly'>Yearly</option>
                        </Select>
                    </Box> */}
                </Box>

                <Box
                    padding={"20px 20px"}
                >
                    <Graph
                        series={series}
                    />
                </Box>


            </Box>
        </>
    );
}

function Graph({ series }) {

    const { colorMode } = useColorMode;
    const options = {
        chart: {
            toolbar: {
                show: false,
            },

            stacked: false
        },
        stroke: {
            width: [2, 2]
        },
        fill: {
            colors: ["#FF5C00", "#C0E253", "#DE50CF", "#29A88E"],
            type: "gradient",
            gradient: {
                shadeIntensity: 0.7,
                opacityFrom: 0.5,
                opacityTo: 0.1,
                stops: [0, 90, 100]
            }
        },
        colors: ["#FF5C00", "#C0E253", "#DE50CF", "#29A88E"],
        xaxis: {
            type: 'datetime',
            labels: {
                show: true,
                style: {
                    colors: useColorModeValue("#16171B", "#FFF"),
                    fontSize: "11px",
                    fontWeight: 300,
                },
            },
            axisTicks: {
                show: false
            },
        },
        yaxis:
            series?.map((item, i) => {
                return {
                    opposite: i !== 0 && true,
                    seriesName: item?.name,
                    labels: {
                        show: true,
                        style: {
                            colors: item?.color,
                            fontSize: "11px",
                            fontWeight: 300,
                        },
                        formatter: function (val, index) {
                            return "$" + val + "B";
                        }
                    },
                    axisBorder: {
                        show: i !== 0 && true,
                        color: item?.color,
                    },
                    axisTicks: {
                        show: false
                    }
                }
            }),

        dataLabels: {
            enabled: false
        },
        legend: {
            show: false,
        },
        tooltip: {
            enabled: false
        },
        grid: {
            borderColor: useColorModeValue("#191919", "#36363A"),
            xaxis: {
                lines: {
                    show: false,
                }
            },
            yaxis: {
                lines: {
                    show: true,
                }
            }
        },
    }

    return (
        <>
            <Chart
                options={options}
                series={series}
                type={options.chart.type}
                height={"200px"}
                width={"600px"}
            />
        </>
    )
}

function CurrencyButtons({ currencySelected, CurrencyTypeHandler, colorMode }) {
    return (
        <>
            <Box
                position={"relative"}
                padding={"7px 8px"}
                border={"1px"}
                borderRadius={"2px"}
                borderColor={useColorModeValue("#E0E0E0", "#333")}
                display={"flex"}
                alignItems={"center"}
                cursor={"pointer"}
                onClick={() => {
                    CurrencyTypeHandler("USD");
                }}
                _after={
                    currencySelected === "USD" && {
                        bgColor: colorMode === 'light' ? "#F5F5F7" : "#191919",
                    }
                }
                bgColor={currencySelected === "USD" ?
                    (colorMode === "light" ? '#F5F5F7' : '#191919') :
                    (colorMode === "light" ? '#FFFFFF' : '#202020')
                }
            >
                <Text
                    fontSize={"10px"}
                    lineHeight={"10px"}
                    fontWeight={currencySelected === "USD" ? 600 : 400}
                >
                    USD
                </Text>
            </Box>
            <Box
                position={"relative"}
                padding={"7px 8px"}
                border={"1px"}
                borderRadius={"2px"}
                borderColor={useColorModeValue("#E0E0E0", "#333")}
                display={"flex"}
                alignItems={"center"}
                cursor={"pointer"}
                onClick={() => {
                    CurrencyTypeHandler("BTC");
                }}
                _after={
                    currencySelected === "BTC" && {
                        bgColor: colorMode === 'light' ? "#F5F5F7" : "#191919",
                    }
                }
                bgColor={currencySelected === "BTC" ?
                    (colorMode === "light" ? '#F5F5F7' : '#191919') :
                    (colorMode === "light" ? '#FFFFFF' : '#202020')
                }
            >
                <Text
                    fontSize={"10px"}
                    lineHeight={"10px"}
                    fontWeight={currencySelected === "BTC" ? 600 : 400}
                >
                    BTC
                </Text>
            </Box>
            <Box
                position={"relative"}
                padding={"7px 8px"}
                border={"1px"}
                borderRadius={"2px"}
                borderColor={useColorModeValue("#E0E0E0", "#333")}
                display={"flex"}
                alignItems={"center"}
                cursor={"pointer"}
                onClick={() => {
                    CurrencyTypeHandler("ETH");
                }}
                _after={
                    currencySelected === "ETH" && {
                        bgColor: colorMode === 'light' ? "#F5F5F7" : "#191919",
                    }
                }
                bgColor={currencySelected === "ETH" ?
                    (colorMode === "light" ? '#F5F5F7' : '#191919') :
                    (colorMode === "light" ? '#FFFFFF' : '#202020')
                }
            >
                <Text
                    fontSize={"10px"}
                    lineHeight={"10px"}
                    fontWeight={currencySelected === "ETH" ? 600 : 400}
                >
                    ETH
                </Text>
            </Box>
        </>
    )
}

function TrendGraphTypeButton({ key, name, value, graphTypeSelected, GraphTypeHandler, colorMode }) {
    const defiData = useSelector(
        (state) => state?.defiDashboardData?.DefiData?.data
    )
    return (
        <>
            <Box
                key={key}
                position={"relative"}
                padding={"7px 8px"}
                border={"1px"}
                borderRadius={"2px"}
                borderColor={useColorModeValue("#E0E0E0", "#333")}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                cursor={"pointer"}
                onClick={() => {
                    GraphTypeHandler(value);
                }}
                _after={
                    graphTypeSelected.includes(value) && {
                        bgColor: colorMode === 'light' ? "#F5F5F7" : "#191919",
                    }
                }
                bgColor={graphTypeSelected.includes(value) ?
                    (colorMode === "light" ? '#F5F5F7' : '#191919') :
                    (colorMode === "light" ? '#FFFFFF' : '#202020')
                }
            >
                <Text
                    fontSize={"10px"}
                    lineHeight={"10px"}
                    fontWeight={graphTypeSelected.includes(value) ? 600 : 400}
                    textTransform={"capitalize"}
                >
                    {value === "price" ? `${defiData?.symbol} price` : name}
                </Text>
            </Box>
        </>
    )
}


export default TrendGraph;