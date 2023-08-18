"use client"
import { Box, Image, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useColorModeValue, useColorMode, Flex, Tooltip, TableContainer, Table, Thead, Tr, Th, Tbody, Td, Button, Select } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React from "react";
import { useState } from "react";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

function TrendGraph() {
    const {colorMode} = useColorMode();
    const [ graphTypeSelected, setGraphType ] = useState([]);
    const [ currencySelected, setCurrencyType ] = useState("USD");

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
        setGraphType(arr);
    };

    const graphTypes = ["TVL", "MCap", "Sushi Price", "Users", "FDV", "Borrowed", "Median APY"];

    return (
        <>
            <Box
                display={"flex"}
                flexDirection={"column"}
                alignContent={"center"}
                height={"349px"}
                
                bgColor={useColorModeValue('#FFFFFF', "#202020")}
                border={"1px"}
                borderColor={useColorModeValue('#FFFFFF', '#272727')}
                borderRadius={"6px"}
            >
                <Box
                    padding={"20px 0 0 20px"}
                >
                    <Text
                        fontSize={"15px"}
                        fontWeight={"400"}
                        lineHeight={"20px"}
                    >
                        Trend Graph
                    </Text>
                </Box>

                {/* Buttons and selection go here */}
                <Box
                    display={"flex"}
                    mt={"11px"}
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
                                    name={item}
                                    graphTypeSelected={graphTypeSelected}
                                    GraphTypeHandler={GraphTypeHandler}
                                    colorMode={colorMode}
                                />
                            );
                        })}

                        <Box
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
                        </Box>
                    </Box>

                    {/* Currency selection */}
                    <Box
                        display={"flex"}
                        ml={"auto"}
                    >
                        <CurrencyButtons
                            currencySelected={currencySelected}
                            CurrencyTypeHandler={CurrencyTypeHandler}
                            colorMode={colorMode}
                        />
                    </Box>

                    {/* Period selector */}
                    <Box
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
                    </Box>
                </Box>

                <Box
                    padding={"20px 20px"}
                >
                    <Graph />
                </Box>


            </Box>
        </>
    );
}

function Graph() {
    const options = {
        chart: {
            toolbar: {
              show: false,
            },
            type: 'area',
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
            categories: ["May", "2021", "May", "2021", "May", "2021", "May", "2021"],
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
        yaxis: {
            labels: {
                show: true,
                style: {
                    colors: useColorModeValue("#16171B", "#FFF"),
                    fontSize: "11px",
                    fontWeight: 300,    
                },
                formatter: function(val, index) {
                    return "$" + val + "B";
                }
              },
              axisTicks: {
                show: false
              },
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            show: false,
        },
        dataLabels: {
            enabled: false
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

    const series = [
        {
          name: "Series A",
          data: [14, 20, 25, 15, 25, 28, 38, 46]
        },
        {
          name: "Series B",
          data: [20, 29, 37, 36, 44, 45, 50, 58]
        }
      ];

    return (
        <>
            <Chart 
                    options={options}
                    series={series}
                    type={options.chart.type}
                    height={"200px"}
            />
        </>
    )
}

function CurrencyButtons( {currencySelected, CurrencyTypeHandler, colorMode}) {
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

function TrendGraphTypeButton( {key,name, graphTypeSelected, GraphTypeHandler, colorMode}) {

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
                cursor={"pointer"}
                onClick={() => {
                    GraphTypeHandler(name);
                }}
                _after={
                    graphTypeSelected.includes(name) && {
                        bgColor: colorMode === 'light' ? "#F5F5F7" : "#191919",
                    }
                }
                bgColor={graphTypeSelected.includes(name) ?
                    (colorMode === "light" ? '#F5F5F7' : '#191919') :
                    (colorMode === "light" ? '#FFFFFF' : '#202020')
                }   
            >
                <Text
                    fontSize={"10px"}
                    lineHeight={"10px"}
                    fontWeight={graphTypeSelected.includes(name) ? 600 : 400}
                >
                    {name}
                </Text>
            </Box>
        </>
    )
}

export default TrendGraph;