import React, { useState } from "react";
import { Box, Text, Button, useColorMode } from "@chakra-ui/react";
import CustomChart from "@components/graph";
import { useSelector } from "react-redux";
import millify from "millify";

const ARK21Shares = () => {
    const { colorMode } = useColorMode();
    const ETFChartData = useSelector((state) => state?.coinData?.ETFChartData);
    const [selectedRange, setSelectedRange] = useState("30d");

    const getFilteredData = (range) => {
        const currentDate = new Date();
        switch (range) {
            case "24h":
                return ETFChartData?.data?.chartLast24Hours;
            case "7d":
                return ETFChartData?.data?.chartHistorical.filter(item => new Date(item.date) >= new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000));
            case "14d":
                return ETFChartData?.data?.chartHistorical.filter(item => new Date(item.date) >= new Date(currentDate.getTime() - 14 * 24 * 60 * 60 * 1000));
            case "30d":
                return ETFChartData?.data?.chartHistorical.filter(item => new Date(item.date) >= new Date(currentDate.getTime() - 30 * 24 * 60 * 60 * 1000));
            case "1yr":
                return ETFChartData?.data?.chartHistorical.filter(item => new Date(item.date) >= new Date(currentDate.getTime() - 365 * 24 * 60 * 60 * 1000));
            case "Max":
                return ETFChartData?.data?.chartHistorical;
            default:
                return ETFChartData?.data?.chartLast24Hours;
        }
    };

    const series = [{
        data: getFilteredData(selectedRange)?.map(item => ({
            x: new Date(item.date).getTime(),
            y: [
                millify((item.open), { precision: 2 }),
                millify((item.high), { precision: 2 }),
                millify((item.low), { precision: 2 }),
                millify((item.close), { precision: 2 })
            ]
        }))
    }];

    const handleRangeChange = (range) => {
        setSelectedRange(range);
    };

    const options = {
        chart: {
            type: 'candlestick',
            toolbar: {
                show: false,
            },
        },
        plotOptions: {
            candlestick: {
                colors: {
                    upward: '#089981',
                    downward: '#F23645',
                },
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
                    return `$${millify(value, { precision: 0, locales: "en-US" })}`;
                },
                style: {
                    colors: colorMode === "light" ? "#16171B" : "#FFF",
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
            show: false,
        },
        tooltip: {
            theme: colorMode === "light" ? "light" : "dark",
            custom: function ({ seriesIndex, dataPointIndex, w }) {
                let item = w.config.series[seriesIndex].data[dataPointIndex];
                let tooltipContent = `
                    <div class="tooltip-parent">
                        <div>${new Date(item.x).toUTCString()}</div>
                        <div class="First-Data">Open: <span style="font-weight: bold;">$${item.y[0]}</span></div>
                        <div class="First-Data">High: <span style="font-weight: bold;">$${item.y[1]}</span></div>
                        <div class="First-Data">Low: <span style="font-weight: bold;">$${item.y[2]}</span></div>
                        <div class="First-Data">Close: <span style="font-weight: bold;">$${item.y[3]}</span></div>
                    </div>
                `;
                return tooltipContent;
            },
        },
    };

    return (
        <Box
            width={"100%"}
            height={"100%"}
            p={{ base: "5px", md: "20px" }}
            borderRadius={"10px"}
            bg={colorMode === 'light' ? "#FFFFFF" : "#282828"}
        >
            <Box layerStyle={"spaceBetween"}>
                <Box>
                    <Text variant={"contentHeading4"} fontSize={{ base: "14px", md: "20px" }} lineHeight={"25px"}>{ETFChartData?.data?.name} Price Chart</Text>
                </Box>
                <Box layerStyle={"flexCenter"}>
                    <Button
                        variant={"modalButton"}
                        className={selectedRange === '24h' ? (colorMode === 'light' ? 'chart-button-light-selected' : 'chart-button-dark-selected') : (colorMode === 'light' ? 'chart-button-light' : 'chart-button-dark')}
                        height={"28px"}
                        border={"1px solid #C6C6C6"}
                        padding={{ base: "0px" }}
                        onClick={() => handleRangeChange('24h')}>
                        24h
                    </Button>
                    <Button
                        variant={"modalButton"}
                        className={selectedRange === '7d' ? (colorMode === 'light' ? 'chart-button-light-selected' : 'chart-button-dark-selected') : (colorMode === 'light' ? 'chart-button-light' : 'chart-button-dark')}
                        height={"28px"}
                        border={"1px solid #C6C6C6"}
                        padding={{ base: "0px" }}
                        onClick={() => handleRangeChange('7d')}>
                        7d
                    </Button>
                    <Button
                        variant={"modalButton"}
                        className={selectedRange === '14d' ? (colorMode === 'light' ? 'chart-button-light-selected' : 'chart-button-dark-selected') : (colorMode === 'light' ? 'chart-button-light' : 'chart-button-dark')}
                        height={"28px"}
                        border={"1px solid #C6C6C6"}
                        padding={{ base: "0px" }}
                        onClick={() => handleRangeChange('14d')}>
                        14d
                    </Button>
                    <Button
                        variant={"modalButton"}
                        className={selectedRange === '30d' ? (colorMode === 'light' ? 'chart-button-light-selected' : 'chart-button-dark-selected') : (colorMode === 'light' ? 'chart-button-light' : 'chart-button-dark')}
                        height={"28px"}
                        border={"1px solid #C6C6C6"}
                        padding={{ base: "0px" }}
                        onClick={() => handleRangeChange('30d')}>
                        30d
                    </Button>
                    <Button
                        variant={"modalButton"}
                        className={selectedRange === '1yr' ? (colorMode === 'light' ? 'chart-button-light-selected' : 'chart-button-dark-selected') : (colorMode === 'light' ? 'chart-button-light' : 'chart-button-dark')}
                        height={"28px"}
                        border={"1px solid #C6C6C6"}
                        padding={{ base: "0px" }}
                        onClick={() => handleRangeChange('1yr')}>
                        1yr
                    </Button>
                    <Button
                        variant={"modalButton"}
                        className={selectedRange === 'Max' ? (colorMode === 'light' ? 'chart-button-light-selected' : 'chart-button-dark-selected') : (colorMode === 'light' ? 'chart-button-light' : 'chart-button-dark')}
                        height={"28px"}
                        border={"1px solid #C6C6C6"}
                        padding={{ base: "0px" }}
                        onClick={() => handleRangeChange('Max')}>
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
