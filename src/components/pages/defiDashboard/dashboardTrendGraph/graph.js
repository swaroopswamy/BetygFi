import { useColorModeValue } from "@chakra-ui/react";
import millify from "millify";
import React from "react";
import CustomChart from "@components/graph";
import moment from "moment";

const Graph = ({ series, colorMode, searchParamProtocolSlug }) => {
    const options = {
        chart: {
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false,
            },
            id: "trendgraph",
            stacked: false,
            animations: {
                enabled: false,
            },
            type: 'area',
        },
        stroke: {
            show: true,
            curve: "smooth",
            width: [2, 2],
        },
        fill: {
            colors: ["#FF5C00"/* , "#C0E253", "#DE50CF", "#29A88E" */],
            type: "gradient",
            gradient: {
                shadeIntensity: 0.6,
                opacityFrom: 0.9,
                opacityTo: 0.2,
                stops: [0, 90, 100],
            },
        },
        colors: ["#544FC5", "#00E272", "#FF5C00", /* "#C0E253", "#DE50CF", "#29A88E" */],
        xaxis: {
            type: "datetime",
            labels: {
                show: true,
                style: {
                    colors: useColorModeValue("#16171B", "#FFF"),
                    fontSize: "11px",
                    fontWeight: 300,
                },
                formatter: (val) => moment(val * 1000).format("MMM YY"),
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
                formatter: function (val) {
                    return (
                        "$" +
                        millify(val, {
                            precision: 2,
                            locales: "en-US",
                        })
                    );
                },
            },
            axisBorder: {
                show: true,
                color: "#FF5C00",
                offsetX: "50px",
            },
            axisTicks: {
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
            enabled: true,
            theme: colorMode,
            custom: function ({ series, seriesIndex, dataPointIndex }) {
                let val = millify(series[seriesIndex][dataPointIndex]);
                let name = searchParamProtocolSlug;
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
        grid: {
            borderColor: useColorModeValue("#191919", "#36363A"),
            xaxis: {
                lines: {
                    show: false,
                },
            },
            yaxis: {
                lines: {
                    show: true,
                },
            },
        },
    };
    const seriesGraphData = [{
        name: 'trendgraph',
        data: series[0].data
    }];
    return (
        <>
            <CustomChart
                className="overview-chart"
                options={options}
                series={seriesGraphData}
                // type={options.chart.type}
                type={"line"}
                height={"200px"}
            />

            {/* <CustomChart
                className="overview-chart"
                options={options}
                series={seriesGraphData}
                type="line"
                height={205}
            /> */}

            {/*   <Box
                _dark={{
                    color: "#FFF"
                }}
                _light={{
                    color: "#16171B"
                }}
                fontSize={"20px"}
                fontWeight={"400"}
                letterSpacing={"1px"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                textAlign={"center"}
                height={"245px"}
                mb={"20px"}
            >
                No Data Available
            </Box> */}
        </>
    );
};

export default Graph;
