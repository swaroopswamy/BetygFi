import { Box, Text, useColorMode, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import millify from "millify";
import dynamic from "next/dynamic";
const CustomChart = dynamic(() => import("@components/graph", { ssr: false }));

const TickerETFNetInflowBox = () => {
    const { colorMode } = useColorMode();
    const TickerInflowOutflowData = useSelector((state) => state?.coinData?.TickerInflowOutflowData);
    const [selectedRange, setSelectedRange] = useState("30d");
    const tickerName = TickerInflowOutflowData?.data?.[0]?.change?.ticker || undefined;

    const [series, setSeries] = useState([
        {
            name: "Inflow",
            type: "bar",
            data: [],
            color: ["#089981"],
        },
        {
            name: "Outflow",
            type: "bar",
            data: [],
            color: ["#F23645"],
        },
    ]);

    useEffect(() => {
        if (TickerInflowOutflowData?.data) {
            const filteredData = getFilteredData(selectedRange);
            const inflowData = filteredData.map((entry) => {
                if (entry?.change?.changeUsd >= 0) {
                    return {
                        x: new Date(entry?.date).getTime(),
                        y: entry?.change?.changeUsd,
                        price: entry?.price
                    };
                }
                return null;
            }).filter(entry => entry !== null);

            const outflowData = filteredData.map((entry) => {
                if (entry?.change?.changeUsd < 0) {
                    return {
                        x: new Date(entry?.date).getTime(),
                        y: entry?.change?.changeUsd,
                        price: entry?.price
                    };
                }
                return null;
            }).filter(entry => entry !== null);

            setSeries([
                {
                    name: "Inflow",
                    data: inflowData,
                    color: "#089981",
                },
                {
                    name: "Outflow",
                    data: outflowData,
                    color: "#F23645",
                },
            ]);
        }
    }, [TickerInflowOutflowData, selectedRange, colorMode]);

    const getFilteredData = (range) => {
        const currentDate = new Date();
        switch (range) {
            case "7d":
                return TickerInflowOutflowData?.data?.filter(item => new Date(item.date) >= new Date(currentDate.getTime() - 8 * 24 * 60 * 60 * 1000));
            case "14d":
                return TickerInflowOutflowData?.data?.filter(item => new Date(item.date) >= new Date(currentDate.getTime() - 15 * 24 * 60 * 60 * 1000));
            case "30d":
                return TickerInflowOutflowData?.data?.filter(item => new Date(item.date) >= new Date(currentDate.getTime() - 31 * 24 * 60 * 60 * 1000));
            case "1yr":
                return TickerInflowOutflowData?.data;
            default:
                return TickerInflowOutflowData?.data?.filter(item => new Date(item.date) >= new Date(currentDate.getTime() - 31 * 24 * 60 * 60 * 1000));
        }
    };

    const calculateColumnWidth = () => {
        const filteredData = getFilteredData(selectedRange);
        const dataLength = ![null, undefined].includes(filteredData) ? filteredData?.length : 0;
        if (dataLength > 31) {
            return "3px";
        } else {
            return "25px";
        }
    };

    const options = {
        chart: {
            type: "bar",
            toolbar: {
                show: false,
            },
        },
        colors: ["#089981", "#F23645"],
        dataLabels: {
            enabled: false,
        },
        xaxis: {
            type: "datetime",
            tickAmount: 10,
            labels: {
                format: 'dd MMM',
                style: {
                    colors: colorMode === "light" ? "#757575" : "#A5A5A5",
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
        yaxis: {
            labels: {
                formatter: function (changeUsd) {
                    return millify(changeUsd, {
                        precision: 0,
                        locales: "en-US",
                    });
                },
                style: {
                    colors: colorMode === "light" ? "#757575" : "#A5A5A5",
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
        },
        grid: {
            show: true,
        },
        legend: {
            fontSize: "12px",
            fontWeight: 400,
            position: "top",
            horizontalAlign: "center",
            markers: {
                radius: 100,
            },
            labels: {
                colors: colorMode === "light" ? "#000000" : "#FFFFFF",
            },
        },
        tooltip: {
            theme: colorMode === "light" ? "light" : "dark",
            followCursor: true,
            intersect: true,
            custom: function ({ dataPointIndex, seriesIndex, w }) {
                let entry = w.config.series[seriesIndex].data[dataPointIndex];
                let flow = entry?.y >= 0 ? "Inflow" : "Outflow";
                let marker = entry?.y >= 0 ? "/icons/Inflow_Icon.svg" : "/icons/Outflow_Icon.svg";
                let tooltipContent = '';
                tooltipContent = `
                    <div class="tooltip-parent">
                       <div style="margin-bottom: 8px;">${new Date(entry?.x).toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</div>
                       <div><img src="/icons/Price_Marker.svg" style="width: 10px; height: 15px; display: inline-block; margin-right: 5px; padding-top: 5px;">Price: <span style="font-weight: bold;">$${entry?.price}</span></div>
                       <div><img src="${marker}" style="width: 9; height: 9; display: inline-block; margin-right: 5px;">${flow}: <span style="font-weight: bold;"> ${millify(entry?.y, { precision: 0, locales: "en-US" })}</span></div>
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
                columnWidth: calculateColumnWidth(),
                horizontal: false,
                endingShape: 'flat',
            },
        },
    };

    const handleRangeChange = (range) => {
        setSelectedRange(range);
    };

    return (
        <Box
            width={"100%"}
            height={"100%"}
            borderRadius={"8px"}
            _light={{ bg: "#FFFFFF" }}
            _dark={{ bg: "#282828" }}
            p={"10px"}
        >
            <Box layerStyle={"spaceBetween"}>
                <Box>
                    <Text variant={"contentHeading4"} fontSize={{ base: "14px", md: "20px" }} lineHeight={"20px"}>
                        Total {tickerName} Spot ETF Net Inflow (USD)
                    </Text>
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
            <Box width={"100%"} height={"100%"}>
                <CustomChart
                    series={series}
                    options={options}
                    type={"bar"}
                    height={439}
                />
            </Box>
        </Box>
    );
};

export default TickerETFNetInflowBox;
