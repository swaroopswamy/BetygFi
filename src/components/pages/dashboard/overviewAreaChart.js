/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable max-len */
import { Box, Button, useColorMode, useColorModeValue } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import CustomChart from "@components/graph";
import { useSelector } from "react-redux";
import millify from "millify";
import { categoryIds } from "@util/constant";

const periods = ["7d", "14d", "30d", "Max"];

const OverviewAreaChart = () => {
    const { colorMode } = useColorMode();
    const [period, setPeriod] = useState("30d");

    const periodSelectionHandler = (val) => {
        if (val === period) setPeriod("30d");
        else setPeriod(val);
    };

    const overviewGraphData = useSelector((state) => state?.dashboardTableData?.OverviewGraphData);

    const categorySelected = useSelector((state) => state?.dashboardTableData?.categorySelected);

    const options = {
        chart: {
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false,
            },
            id: "overview",
            stacked: false,
            animations: {
                enabled: false,
            },
        },
        colors: ["#29A88E", "#DE50CF", "#ACC94C", "#FF5C00"],
        grid: {
            show: true,
        },
        legend: {
            show: true,
            labels: {
                colors: useColorModeValue("#16171B", "#FFF"),
            },
        },
        dataLabels: {
            enabled: false,
        },
        tooltip: {
            enabled: true,
            theme: colorMode,
            custom: function ({ series, seriesIndex, dataPointIndex, w }) {
                let val = millify(series[seriesIndex][dataPointIndex], {
                    precision: 2,
                    locales: "en-US",
                });
                return (
                    '<div class="donut_tooltip">' +
                    '<div class="donut_tooltip_text">' +
                    `<span style="display: flex; border-radius: 50%; height: 14px; width: 14px; background-color: ${w.config.series[seriesIndex].color};"></span>` +
                    " " +
                    w.config.series[seriesIndex].name +
                    "</div>" +
                    '<div class="donut_tooltip_text">' +
                    val +
                    " USD" +
                    "</div>" +
                    "</div>"
                );
            },
        },
        /* 	fill: {
                type: "gradient",
                gradient: {
                    shadeIntensity: 0.7,
                    opacityFrom: 0.5,
                    opacityTo: 0.1,
                    stops: [0, 90, 100],
                },
            }, */
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
                    return `$${millify(value, {
                        precision: 2,
                        locales: "en-US",
                    })}`;
                },
            },
        },
    };

    let colors = ["#29A88E", "#DE50CF", "#ACC94C", "#FF5C00"];
    let [series, setSeries] = useState([]);

    let toUpdate = [];

    useEffect(() => {
        overviewGraphData?.isSuccess &&
            overviewGraphData?.data?.graphData.map((category, i) => {
                if (
                    categorySelected.includes(category?.name) ||
                    (categorySelected.length === 0 &&
                        categoryIds.includes(category?.name))
                ) {
                    let categorySeries = {
                        name: category?.name,
                        data: category?.graphData,
                        color: colors[i % 4],
                    };
                    toUpdate.push(categorySeries);
                }
                setSeries(toUpdate);
            });
    }, [categorySelected, overviewGraphData]);

    useEffect(() => setPeriod(period), [colorMode]);

    return (
        <>
            <Box width={"100%"}>
                <Box
                    px={{ base: "10px", md: "20px" }}
                    display={"flex"}
                    flexDirection={"column"}
                >
                    <Box
                        justifyContent={"flex-end"}
                        display={"flex"}
                        alignItems={"center"}
                        ml={"auto"}
                    >
                        <PeriodSelection
                            currPeriod={period}
                            periodSelectionHandler={periodSelectionHandler}
                        />
                    </Box>

                    <CustomChart
                        className="overview-chart"
                        options={options}
                        series={series}
                        type="line"
                        height={205}
                    />
                </Box>

                <Box display={{ base: "none", lg: "block" }} w={"100%"}>
                    <SelectorGraph series={series} period={period} />
                </Box>
                <Box id="legend-container" mt="20px"></Box>
            </Box>
        </>
    );
};

export default OverviewAreaChart;

const SelectorGraph = ({ series, period }) => {
    const { colorMode } = useColorMode;

    const overviewGraphData = useSelector(
        (state) => state?.dashboardTableData?.OverviewGraphData
    );

    let greySeries = [];

    for (let i = 0; i < series.length; i++) {
        let grey = structuredClone(series[i]);
        grey.color = "#3A3D46";
        greySeries.push(grey);
    }

    const [options, setOptions] = useState({
        chart: {
            toolbar: {
                show: false,
            },
            stacked: false,
            type: "area",
            brush: {
                enabled: true,
                target: "overview",
                autoScaleYaxis: true,
            },
            selection: {
                enabled: true,
                fill: {
                    color: "#00E0FF",
                    opacity: 0.15,
                },
                stroke: {
                    width: 0,
                    dashArray: 0,
                    color: colorMode === "light" ? "#313131" : "#FFF",
                },
            },
            animations: {
                enabled: false,
            },
        },
        fill: {
            colors: ["#3A3D46"],
            type: "solid",
            opacity: "0.25",
        },
        stroke: {
            show: false,
        },
        colors: ["#000"],
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
        };
        setOptions(newOptions);
    };

    useEffect(() => {
        if (series.length > 0) {
            let mostRecentSeries = findMostRecentSeries(series);
            if (period === "7d") {
                let minDate = new Date(
                    Date.parse(mostRecentSeries.data.slice(-1)[0].x)
                );
                minDate.setDate(minDate.getDate() - 7);
                minDate.setHours(0, 0, 0, 0);
                setSelectionHandler({
                    min: Date.parse(minDate),
                    max: Date.parse(mostRecentSeries.data.slice(-1)[0].x),
                });
            }
            if (period === "14d") {
                let minDate = new Date(
                    Date.parse(mostRecentSeries.data.slice(-1)[0].x)
                );
                minDate.setDate(minDate.getDate() - 14);
                minDate.setHours(0, 0, 0, 0);
                setSelectionHandler({
                    min: Date.parse(minDate),
                    max: Date.parse(mostRecentSeries.data.slice(-1)[0].x),
                });
            }
            if (period === "30d") {
                // console.log("hit");
                let minDate = new Date(
                    Date.parse(mostRecentSeries.data.slice(-1)[0].x)
                );
                minDate.setMonth(minDate.getMonth() - 1);
                minDate.setHours(0, 0, 0, 0);
                setSelectionHandler({
                    min: Date.parse(minDate),
                    max: Date.parse(mostRecentSeries.data.slice(-1)[0].x),
                });
            }
            if (period === "1yr") {
                let minDate = new Date(
                    Date.parse(mostRecentSeries.data.slice(-1)[0].x)
                );
                minDate.setDate(minDate.getDate() - 365);
                minDate.setHours(0, 0, 0, 0);
                setSelectionHandler({
                    min: Date.parse(minDate),
                    max: Date.parse(mostRecentSeries.data.slice(-1)[0][0]),
                });
            }
            if (period === "Max")
                setSelectionHandler({
                    min: Date.parse(mostRecentSeries.data.slice(0)[0].x),
                    max: Date.parse(mostRecentSeries.data.slice(-1)[0].x),
                });
        }
    }, [period, series]);

    return (
        <>
            {overviewGraphData?.isSuccess && (
                <Box px={"20px"}>
                    <CustomChart
                        options={options}
                        series={greySeries}
                        type={options.chart.type}
                        height={"100px"}
                        width={"100%"}
                    />
                </Box>
            )}
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

function findMostRecentSeries(series) {
    let mostRecentDate = 0;
    let mostRecentIndex = 0;
    for (let i = 0; i < series.length; i++) {
        let currLastDate = Date.parse(series[i].data.slice(-1)[0].x);
        if (currLastDate >= mostRecentDate) {
            mostRecentDate = currLastDate;
            mostRecentIndex = i;
        }
    }
    return series[mostRecentIndex];
}
