import React, { useState } from "react";
import { Box, Text, Button, useColorMode } from "@chakra-ui/react";
import CustomChart from "@components/graph";
import { useSelector } from "react-redux";
import millify from "millify";

const ARK21Shares = () => {
    const { colorMode } = useColorMode();
    const ETFChartData = useSelector((state) => state?.coinData?.ETFChartData);
    const [selectedRange, setSelectedRange] = useState("24h");

    const options = {
        chart: {
            type: 'candlestick',
            toolbar: {
                show: false,
            },
        },
        xaxis: {
            type: 'datetime',
            labels: {
                style: {
                    colors: colorMode === "light" ? "#16171B" : "#FFF",
                    fontSize: "12px",
                    fontWeight: 300,
                },
            },
        },
        yaxis: {
            labels: {
                formatter: function (value) {
                    return `$${millify(value, { precision: 0 })}b`;
                },

                style: {
                    colors: colorMode === "light" ? "#16171B" : "#FFF",
                    fontSize: "12px",
                    fontWeight: 300,
                },
            },
        },
        grid: {
            show: false,
        },
        tooltip: {
            theme: colorMode === "light" ? "light" : "dark",
        },
    };

    const getFilteredData = (range) => {
        const currentDate = new Date();
        let filteredData;
        switch (range) {
            case "24h":
                filteredData = ETFChartData?.data?.chartLast24Hours;
                break;
            case "7d": {
                const sevenDaysAgo = new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000);
                filteredData = ETFChartData?.data?.chartHistorical.filter(item => new Date(item.date) >= sevenDaysAgo);
                break;
            }
            case "14d": {
                const fourteenDaysAgo = new Date(currentDate.getTime() - 14 * 24 * 60 * 60 * 1000);
                filteredData = ETFChartData?.data?.chartHistorical.filter(item => new Date(item.date) >= fourteenDaysAgo);
                break;
            }
            case "30d": {
                const thirtyDaysAgo = new Date(currentDate.getTime() - 30 * 24 * 60 * 60 * 1000);
                filteredData = ETFChartData?.data?.chartHistorical.filter(item => new Date(item.date) >= thirtyDaysAgo);
                break;
            }
            case "1yr": {
                const oneyearAgo = new Date(currentDate.getTime() - 365 * 24 * 60 * 60 * 1000);
                filteredData = ETFChartData?.data?.chartHistorical.filter(item => new Date(item.date) >= oneyearAgo);
                break;
            }
            case "Max":
                filteredData = ETFChartData?.data?.chartHistorical;
                break;
            default:
                filteredData = ETFChartData?.data?.chartLast24Hours;
        }
        return filteredData;
    };



    const series = [{
        data: getFilteredData(selectedRange)?.map(item => ({
            x: new Date(item.date).getTime(),
            y: [item.open, item.high, item.low, item.close]
        }))
    }];

    const handleRangeChange = (range) => {
        setSelectedRange(range);
    };

    return (
        <Box
            width={"100%"}
            height={"400px"}
            p={"20px"}
            borderRadius={"10px"}
            bg={colorMode === 'light' ? "#FFFFFF" : "#282828"}
        >
            <Box layerStyle={"spaceBetween"}>
                <Box>
                    <Text variant={"contentHeading4"} fontSize={"20px"} lineHeight={"20px"}>ARK 21Shares Price Chart</Text>
                </Box>
                <Box layerStyle={"flexCenter"}>
                    <Button
                        variant={"modalButton"}
                        bg={selectedRange === "24h" ? "#313131" : "background.secondary"}
                        color={selectedRange === "24h" ? "#FFFFFF" : "#16171B"}
                        height={"28px"}
                        border={"1px solid #C6C6C6"}
                        onClick={() => handleRangeChange("24h")}>
                        24h
                    </Button>
                    <Button
                        variant={"modalButton"}
                        bg={"background.secondary"}
                        height={"28px"}
                        border={"1px solid #C6C6C6"}
                        onClick={() => handleRangeChange("7d")}>
                        7d
                    </Button>
                    <Button
                        variant={"modalButton"}
                        bg={"background.secondary"}
                        height={"28px"}
                        border={"1px solid #C6C6C6"}
                        onClick={() => handleRangeChange("14d")}>
                        14d
                    </Button>
                    <Button
                        variant={"modalButton"}
                        bg={"background.secondary"}
                        height={"28px"}
                        border={"1px solid #C6C6C6"}
                        onClick={() => handleRangeChange("30d")}>
                        30d
                    </Button>
                    <Button
                        variant={"modalButton"}
                        bg={"background.secondary"}
                        height={"28px"}
                        border={"1px solid #C6C6C6"}
                        onClick={() => handleRangeChange("1yr")}>
                        1yr
                    </Button>
                    <Button
                        variant={"modalButton"}
                        bg={"background.secondary"}
                        height={"28px"}
                        border={"1px solid #C6C6C6"}
                        onClick={() => handleRangeChange("Max")}>
                        Max
                    </Button>
                </Box>
            </Box>
            <CustomChart
                options={options}
                series={series}
                type={"candlestick"}
                height={330}
            />
        </Box>
    );
};

export default ARK21Shares;
