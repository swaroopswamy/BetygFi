import { Box, Text, useColorMode } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import millify from "millify";
import dynamic from "next/dynamic";
const CustomChart = dynamic(() => import("@components/graph", { ssr: false }));


const BTCETFNetInflowBox = () => {
    const { colorMode } = useColorMode();
    const ETFInflowOutflowData = useSelector((state) => state?.coinData?.ETFInflowOutflowData);

    const [series, setSeries] = useState([
        {
            name: "Inflow",
            type: "bar",
            data: [],
            color: colorMode === "light" ? "#245F00" : "#60C000",
        },
        {
            name: "Outflow",
            type: "bar",
            data: [],
            color: colorMode === "light" ? "#C50606" : "#FF3535",
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
            const inflowData = ETFInflowOutflowData?.data.map((entry) => {
                if (entry?.changeUsd >= 0) {
                    return {
                        x: new Date(entry?.date),
                        y: entry?.changeUsd,
                        price: entry?.price
                    };
                }
                return null;
            }).filter(entry => entry !== null);

            const outflowData = ETFInflowOutflowData?.data.map((entry) => {
                if (entry?.changeUsd < 0) {
                    return {
                        x: new Date(entry?.date),
                        y: entry?.changeUsd,
                        price: entry?.price
                    };
                }
                return null;
            }).filter(entry => entry !== null);

            const priceData = ETFInflowOutflowData?.data.map((entry) => {
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
                    color: colorMode === "light" ? "#245F00" : "#60C000",
                    type: "bar",
                    yAxis: 0,
                },
                {
                    name: "bar",
                    seriesName: "Outflow",
                    data: outflowData,
                    color: colorMode === "light" ? "#C50606" : "#FF3535",
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
    }, [ETFInflowOutflowData]);
    const options = {
        chart: {
            stacked: false,
            toolbar: {
                show: false,
            },
        },
        colors: ["#245F00", "#60C000", "#C50606", "#FF3535", "#544FC5", "#2CAFFE"],
        dataLabels: {
            enabled: false,
        },
        xaxis: {
            type: "datetime",
            labels: {
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
            horizontalAlign: "center",
            markers: {
                radius: 100,
            },
            labels: {
                colors: colorMode === "light" ? "#000000" : "#FFFFFF",
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
                       <div><img src="/icons/Price_Label.svg" style="width: 11px; height: 11px; display: inline-block; margin-right: 5px;">Price: <span style="font-weight: bold;">$${entry?.price}</span></div>
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
                columnWidth: "3px",
                horizontal: false,
                endingShape: 'flat',
            },
        },
        stroke: {
            curve: 'smooth',
            width: [2, 2, 3]
        },
    };

    return (
        <Box
            width={"100%"}
            height={"100%"}
            borderRadius={"8px"}
            _light={{ bg: "#FFFFFF" }}
            _dark={{ bg: "#282828" }}
            p={"0px"}
        >
            <Box bgColor={"background.primary"}>
                <Text variant={"h2"} lineHeight={"20px"}>Total Bitcoin Spot ETF Net Inflow (USD)</Text>
                <Box layerStyle={"flexCenter"} mt={"53px"}>
                    {/* <Button variant={"modalButton"} bg={"background.primary"} height={"35px"} border={"1px solid #E0E0E0"}>
                        Flows (USD)
                    </Button>
                    <Button variant={"modalButton"} bg={"background.primary"} height={"35px"} border={"1px solid #E0E0E0"}>
                        AUM
                    </Button>
                    <Button variant={"modalButton"} bg={"background.primary"} height={"35px"} border={"1px solid #E0E0E0"}>
                        Market Cap
                    </Button>
                    <Button variant={"modalButton"} bg={"background.primary"} height={"35px"} border={"1px solid #E0E0E0"}>
                        Volume
                    </Button> */}
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
