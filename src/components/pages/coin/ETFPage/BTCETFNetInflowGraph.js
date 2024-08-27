import { Box, Text, useColorMode, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import millify from "millify";
import dynamic from "next/dynamic";
const CustomChart = dynamic(() => import("@components/graph", { ssr: false }));

const BTCETFNetInflowBox = () => {
    const { colorMode } = useColorMode();
    const ETFInflowOutflowData = useSelector((state) => state?.coinData?.ETFInflowOutflowData);
    const [selectedRange, setSelectedRange] = useState("30d");

    const [options, setOptions] = useState(
        {
            chart: {
                stacked: false,
                toolbar: {
                    show: false,
                },
            },
            colors: ["#9ADA8A", "#FF7272", "#544FC5", "#2CAFFE"],
            dataLabels: {
                enabled: false,
            },
            xaxis: {
                type: "datetime",
                labels: {
                    format: 'dd MMM',
                    style: {
                        colors: ["#757575"],
                        fontSize: "12px",
                        fontWeight: 300,
                    },
                },
                tooltip: {
                    enabled: true,
                    formatter: function (val) {
                        return new Date(val).toUTCString();
                    }
                },
                datetimeFormatter: {
                    year: 'yyyy',
                    month: 'MMM yyyy',
                    day: 'dd MMM',
                    hour: 'HH:mm',
                },
            },
            yaxis: [
                {
                    seriesName: "bar",
                    labels: {
                        formatter: function (changeUsd) {
                            return millify(changeUsd, {
                                precision: 0,
                                locales: "en-US",
                            });
                        },
                        style: {
                            colors: ["#757575"],
                            fontSize: "12px",
                            fontWeight: 300,
                        },
                    },
                    tooltip: {
                        enabled: false,
                        formatter: function (val) {
                            return new Date(val).toUTCString();
                        }
                    },
                },
                {
                    show: false,
                    tooltip: {
                        enabled: true,
                        formatter: function (val) {
                            return new Date(val).toUTCString();
                        }
                    },
                    forceNiceScale: true,
                },
            ],
            grid: {
                show: true,
            },
            legend: {
                fontSize: "12px",
                fontWeight: 400,
                position: "top",
                horizontalAlign: "right",
                markers: {
                    radius: 100,
                },
                labels: {
                    colors: colorMode === "light" ? "#525252" : "#757575",
                },
                formatter: function (seriesName, opts) {
                    if (opts?.seriesIndex === 0) {
                        return ["Inflow"];
                    } else if (opts?.seriesIndex === 1) {
                        return ["Ouflow"];
                    } else {
                        return [seriesName];
                    }
                }
            },
            tooltip: {
                theme: colorMode === "light" ? "light" : "dark",
                custom: function ({ dataPointIndex, seriesIndex, w }) {
                    let entry = w.config.series[seriesIndex].data[dataPointIndex];
                    let flow = entry?.y >= 0 ? "Inflow" : "Outflow";
                    let marker = entry?.y >= 0 ? "/icons/Inflow_Icon.svg" : "/icons/Outflow_Icon.svg";
                    let tooltipContent = '';
                    tooltipContent = `
                        <div class="tooltip-parent">
                           <div style="margin-bottom: 8px;">${new Date(entry?.x).toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</div>
                           <div><img src="/icons/Price_Label.svg" style="width: 11px; height: 11px; display: inline-block; margin-right: 5px;">BTC Price: <span style="font-weight: bold;">$${entry?.price}</span></div>
                           <div><img src="${marker}" style="width: 9; height: 9; display: inline-block; margin-right: 5px;">${flow} :${flow === "Inflow" ? ` <span style="font-weight: bold;"> +${millify(entry?.y, { precision: 0, locales: "en-US" })}</span>` : ` <span style="font-weight: bold;"> ${millify(entry?.y, { precision: 0, locales: "en-US" })}</span>`}</div>
                        </div>
                        `;
                    return tooltipContent;
                },
                marker: {
                    show: true,
                },
            },
            plotOptions: {
                bar: {
                    columnWidth: "20px",
                    horizontal: false,
                    endingShape: 'flat',
                },
            },
            stroke: {
                curve: 'smooth',
                width: [2, 2, 3]
            },
        }
    );

    const getFilteredData = (range) => {
        const currentDate = new Date();
        switch (range) {
            case "7d":
                return ETFInflowOutflowData?.data?.filter(item => new Date(item.date) >= new Date(currentDate.getTime() - 8 * 24 * 60 * 60 * 1000));
            case "14d":
                return ETFInflowOutflowData?.data?.filter(item => new Date(item.date) >= new Date(currentDate.getTime() - 15 * 24 * 60 * 60 * 1000));
            case "30d":
                return ETFInflowOutflowData?.data?.filter(item => new Date(item.date) >= new Date(currentDate.getTime() - 31 * 24 * 60 * 60 * 1000));
            case "1yr":
                return ETFInflowOutflowData?.data;
            default:
                return ETFInflowOutflowData?.data?.filter(item => new Date(item.date) >= new Date(currentDate.getTime() - 31 * 24 * 60 * 60 * 1000));
        }
    };

    const calculateColumnWidth = () => {
        const filteredData = getFilteredData(selectedRange);
        const dataLength = ![null, undefined].includes(filteredData) ? filteredData?.length : 0;
        if (dataLength > 30) {
            return "3px";
        } else if (dataLength > 14 && dataLength <= 30) {
            return "20px";
        } else if (dataLength > 7 && dataLength <= 14) {
            return "25px";
        } else {
            return "25px";
        }
    };

    const [series, setSeries] = useState([
        {
            name: "Inflow",
            type: "bar",
            data: [],
            color: ["#9ADA8A"],
        },
        {
            name: "Outflow",
            type: "bar",
            data: [],
            color: ["#FF7272"],
        },
        {
            name: "Price",
            type: "line",
            data: [],
            color: colorMode === "light" ? "#544FC5" : "#2CAFFE",
        },
    ]);

    useEffect(() => {
        if (ETFInflowOutflowData?.data) {
            const filteredData = getFilteredData(selectedRange);
            const inflowData = filteredData.map((entry) => {
                if (entry?.changeUsd >= 0) {
                    return {
                        x: new Date(entry?.date),
                        y: entry?.changeUsd,
                        price: entry?.price
                    };
                }
                return null;
            }).filter(entry => entry !== null);

            const outflowData = filteredData.map((entry) => {
                if (entry?.changeUsd < 0) {
                    return {
                        x: new Date(entry?.date),
                        y: entry?.changeUsd,
                        price: entry?.price
                    };
                }
                return null;
            }).filter(entry => entry !== null);

            const priceData = filteredData.map((entry) => {
                return {
                    x: new Date(entry?.date),
                    y: entry?.price,
                    price: entry?.price
                };
            });

            setSeries([
                {
                    name: "bar",
                    seriesName: "Inflow",
                    data: inflowData,
                    color: "#9ADA8A",
                    type: "bar",
                    yAxis: 0,
                },
                {
                    name: "bar",
                    seriesName: "Outflow",
                    data: outflowData,
                    color: "#FF7272",
                    type: "bar",
                    yAxis: 0,
                },
                {
                    name: "Price",
                    data: priceData,
                    color: colorMode === 'light' ? "#544FC5" : "#2CAFFE",
                    type: "line",

                },
            ]);
        }
        setOptions({
            ...options,
            plotOptions: {
                bar: {
                    columnWidth: calculateColumnWidth(),
                    horizontal: false,
                    endingShape: 'flat',
                },
            },
        });
    }, [ETFInflowOutflowData, colorMode, selectedRange]);

    const handleRangeChange = (range) => {
        setSelectedRange(range);
    };

    return (
        <Box
            width={"100%"}
            height={"100%"}
            borderRadius={"8px"}
            _light={{ bg: "#FFFFFF" }}
            _dark={{ bg: "#000000" }}
            p={"0px"}
        >
            <Box bgColor={"background.primary"} pb={"5px"}>
                <Text variant={"h2"} lineHeight={"20px"}>Total Bitcoin Spot ETF Net Inflow (USD)</Text>
                <Box layerStyle={"flexSpaceBetween"} mb={"5px"} mt={"13px"} overflowX={"auto"} flexWrap="nowrap">
                    <Box layerStyle={"flexCenter"}>
                        {/* <Button
                            variant={"modalButton"}
                            bg={"background.primary"}
                            height={"35px"}
                            border={colorMode === 'light' ? "1px solid #E0E0E0" : "1px solid #C6C6C699"}
                            minW={"-moz-fit-content"}
                        >
                            Flows (USD)
                        </Button>
                        <Button
                            variant={"modalButton"}
                            bg={"background.primary"}
                            height={"35px"}
                            border={colorMode === 'light' ? "1px solid #E0E0E0" : "1px solid #C6C6C699"}
                            minW={"-moz-fit-content"}
                        >
                            AUM
                        </Button>
                        <Button
                            variant={"modalButton"}
                            bg={"background.primary"}
                            height={"35px"}
                            border={colorMode === 'light' ? "1px solid #E0E0E0" : "1px solid #C6C6C699"}
                            minW={"-moz-fit-content"}
                        >
                            Market Cap
                        </Button>
                        <Button
                            variant={"modalButton"}
                            bg={"background.primary"}
                            height={"35px"}
                            border={colorMode === 'light' ? "1px solid #E0E0E0" : "1px solid #C6C6C699"}
                            minW={"-moz-fit-content"}
                        >
                            Volume
                        </Button> */}
                    </Box>
                    <Box layerStyle={"flexCenter"}>
                        <Button
                            variant={"modalButton"}
                            className={selectedRange === '7d' ? (colorMode === 'light' ? 'chart-button-light-selected' : 'chart-button-dark-selected') : (colorMode === 'light' ? 'chart-button-light' : 'chart-button-dark')}
                            height={"35px"}
                            border={colorMode === 'light' ? "1px solid #E0E0E0" : "1px solid #C6C6C699"}
                            onClick={() => handleRangeChange('7d')}
                            minW={"-moz-fit-content"}
                        >
                            7d
                        </Button>
                        <Button
                            variant={"modalButton"}
                            className={selectedRange === '14d' ? (colorMode === 'light' ? 'chart-button-light-selected' : 'chart-button-dark-selected') : (colorMode === 'light' ? 'chart-button-light' : 'chart-button-dark')}
                            height={"35px"}
                            border={colorMode === 'light' ? "1px solid #E0E0E0" : "1px solid #C6C6C699"}
                            onClick={() => handleRangeChange('14d')}
                            minW={"-moz-fit-content"}
                        >
                            14d
                        </Button>
                        <Button
                            variant={"modalButton"}
                            className={selectedRange === '30d' ? (colorMode === 'light' ? 'chart-button-light-selected' : 'chart-button-dark-selected') : (colorMode === 'light' ? 'chart-button-light' : 'chart-button-dark')}
                            height={"35px"}
                            border={colorMode === 'light' ? "1px solid #E0E0E0" : "1px solid #C6C6C699"}
                            onClick={() => handleRangeChange('30d')}
                            minW={"-moz-fit-content"}
                        >
                            30d
                        </Button>
                        <Button
                            variant={"modalButton"}
                            className={selectedRange === '1yr' ? (colorMode === 'light' ? 'chart-button-light-selected' : 'chart-button-dark-selected') : (colorMode === 'light' ? 'chart-button-light' : 'chart-button-dark')}
                            height={"35px"}
                            border={colorMode === 'light' ? "1px solid #E0E0E0" : "1px solid #C6C6C699"}
                            onClick={() => handleRangeChange('1yr')}
                            minW={"-moz-fit-content"}
                        >
                            1yr
                        </Button>
                    </Box>
                </Box>
            </Box>
            <CustomChart
                options={options}
                series={series}
                type="line"
                height={439}
            />
        </Box>
    );
};
export default BTCETFNetInflowBox;
