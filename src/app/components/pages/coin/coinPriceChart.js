/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable max-len */
"use client";
import {
    Box,
    useColorMode,
    useColorModeValue,
    Text,
    Button,
} from "@chakra-ui/react";
import React, { useEffect, useMemo, useState } from "react";
import CustomChart from "@/app/components/graph";
import { useSelector } from "react-redux";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const periods = ["7d", "14d", "30d", "1yr", "Max"];

const CoinPriceChart = () => {
    const { colorMode } = useColorMode();

    const [period, setPeriod] = useState("30d");

    const periodSelectionHandler = (val) => {
        if (val === period) setPeriod("30d");
        else setPeriod(val);
    };

    const CoinPriceData = useSelector(
        (state) => state?.coinData?.CoinPriceData
    );

    const series = useMemo(
        () => [
            {
                data: CoinPriceData?.data?.data,
            },
        ],
        [CoinPriceData]
    );

    useEffect(() => {
        setPeriod(period);
    }, [colorMode]);

    const options = {
        chart: {
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false,
            },
            id: "coinOverview",
            animations: {
                enabled: false,
            },
        },
        colors: ["#544FC5", "#00E272"],
        grid: {
            show: true,
            borderColor: "#C6C6C6",
        },
        legend: {
            show: false,
        },
        dataLabels: {
            enabled: false,
        },
        tooltip: {
            enabled: true,
            theme: colorMode,
            custom: function ({ series, seriesIndex, dataPointIndex }) {
                let val = series[seriesIndex][dataPointIndex].toFixed(5);
                let name = CoinPriceData?.isSuccess
                    ? CoinPriceData?.data?.name
                    : "Coin";
                return (
                    '<div class="donut_tooltip">' +
                    '<div class="donut_tooltip_text">' +
                    name +
                    "</div>" +
                    '<div class="donut_tooltip_text">' +
                    val +
                    " USD" +
                    "</div>" +
                    "</div>"
                );
            },
        },
        stroke: {
            show: true,
            curve: "smooth",
            width: [2, 2],
        },
        xaxis: {
            type: "datetime",
            labels: {
                show: true,
                style: {
                    colors: useColorModeValue("#16171B", "#FFF"),
                    fontSize: "11px",
                    fontWeight: 300,
                },
            },
            axisTicks: {
                show: true,
            },
        },
        yaxis: {
            tickAmount: 5,
            labels: {
                show: true,
                style: {
                    colors: useColorModeValue("#16171B", "#FFF"),
                    fontSize: "11px",
                    fontWeight: 400,
                },
                formatter: (value) => {
                    return value.toFixed(5) + " USD";
                },
            },
        },
    };

    return (
        <>
            <Box
                display={"flex"}
                flexDir={"column"}
                bgColor={"background.secondary"}
            >
                <Box p={"20px"}>
                    <Text
                        fontSize={"20px"}
                        fontWeight={"500"}
                        lineHeight={"22px"}
                    >
                        {CoinPriceData?.data?.name} Price Chart
                    </Text>
                </Box>

                <Box
                    display={{ base: "none", lg: "flex" }}
                    justifyContent={"right"}
                    px={"20px"}
                >
                    <PeriodSelection
                        currPeriod={period}
                        periodSelectionHandler={periodSelectionHandler}
                    />
                </Box>

                <Box
                    px={{ base: "10px", md: "20px" }}
                    display={"flex"}
                    flexDirection={"column"}
                >
                    <CustomChart
                        className="overview-chart"
                        options={options}
                        series={series}
                        type="line"
                        height={205}
                    />
                </Box>

                <Box display={{ base: "none", lg: "block" }} w={"100%"}>
                    <SelectorGraph period={period} colorMode={colorMode} />
                </Box>
            </Box>
        </>
    );
};

export default CoinPriceChart;

const SelectorGraph = ({ period, colorMode }) => {
    const CoinPriceData = useSelector(
        (state) => state?.coinData?.CoinPriceData
    );

    const series = useMemo(
        () => [
            {
                data: CoinPriceData?.data?.data,
            },
        ],
        [CoinPriceData]
    );

    let [options, setOptions] = useState({
        chart: {
            id: "selection",
            toolbar: {
                show: false,
            },
            stacked: false,
            type: "line",
            brush: {
                enabled: true,
                target: "coinOverview",
                autoScaleYaxis: true,
            },
            selection: {
                enabled: true,
                fill: {
                    color: "#667AFF4D",
                    opacity: 0.3,
                },
                stroke: {
                    width: 1,
                    color: ["#544FC5", "#00E272"],
                },
            },
            animations: {
                enabled: false,
            },
        },
        stroke: {
            show: true,
        },
        colors: ["#544FC5", "#00E272"],
        xaxis: {
            type: "datetime",
            labels: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
        },
        yaxis: {
            labels: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        tooltip: {
            enabled: false,
        },
        grid: {
            borderColor: colorMode === "light" ? "#191919" : "#36363A",
            xaxis: {
                lines: {
                    show: false,
                },
            },
            yaxis: {
                lines: {
                    show: false,
                },
            },
        },
    });

    const setSelectionHandler = (value) => {
        let newOptions = {
            ...options,
            chart: {
                ...options.chart,
                selection: {
                    ...options.chart.selection,
                    xaxis: value,
                },
            },
            grid: {
                ...options.grid,
                borderColor: colorMode === "light" ? "#191919" : "#36363A",
            },
        };
        setOptions(newOptions);
    };

    useEffect(() => {
        if (CoinPriceData?.isSuccess && CoinPriceData?.data != undefined) {
            if (period === "7d") {
                let minDate = new Date(
                    Date.parse(series[0].data.slice(-1)[0][0])
                );
                minDate.setDate(minDate.getDate() - 7);
                minDate.setHours(0, 0, 0, 0);
                setSelectionHandler({
                    min: Date.parse(minDate),
                    max: Date.parse(series[0].data.slice(-1)[0][0]),
                });
            }
            if (period === "14d") {
                let minDate = new Date(
                    Date.parse(series[0].data.slice(-1)[0][0])
                );
                minDate.setDate(minDate.getDate() - 14);
                minDate.setHours(0, 0, 0, 0);
                setSelectionHandler({
                    min: Date.parse(minDate),
                    max: Date.parse(series[0].data.slice(-1)[0][0]),
                });
            }
            if (period === "30d") {
                let minDate = new Date(
                    Date.parse(series[0].data.slice(-1)[0][0])
                );
                minDate.setMonth(minDate.getMonth() - 1);
                minDate.setHours(0, 0, 0, 0);
                setSelectionHandler({
                    min: Date.parse(minDate),
                    max: Date.parse(series[0].data.slice(-1)[0][0]),
                });
            }
            if (period === "1yr") {
                let minDate = new Date(
                    Date.parse(series[0].data.slice(-1)[0][0])
                );
                minDate.setDate(minDate.getDate() - 365);
                minDate.setHours(0, 0, 0, 0);
                setSelectionHandler({
                    min: Date.parse(minDate),
                    max: Date.parse(series[0].data.slice(-1)[0][0]),
                });
            }
            if (period === "Max") {
                setSelectionHandler({
                    min: Date.parse(series[0].data.slice(0)[0][0]),
                    max: Date.parse(series[0].data.slice(-1)[0][0]),
                });
            }
        }
    }, [period, CoinPriceData, colorMode]);

    return (
        <>
            <Box
                px={"20px"}
                layerStyle={"flexColumn"}
                justifyContent={"center"}
            >
                <Chart
                    options={options}
                    series={series}
                    type={options.chart.type}
                    height={"100px"}
                    width={"100%"}
                />
            </Box>
        </>
    );
};

const PeriodSelection = ({ currPeriod, periodSelectionHandler }) => {
    return (
        <Box display={"flex"}>
            {periods.map((period, i) => {
                return (
                    <Button
                        key={i}
                        variant="graphButton"
                        onClick={() => {
                            periodSelectionHandler(period);
                        }}
                        isActive={period === currPeriod}
                    >
                        {period}
                    </Button>
                );
            })}
        </Box>
    );
};
