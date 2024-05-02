import CustomChart from "@components/graph";
import { Box, useColorMode } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import millify from "millify";

const TickerETFNetInflowBox = () => {
    const { colorMode } = useColorMode();
    const TickerInflowOutflowData = useSelector((state) => state?.coinData?.TickerInflowOutflowData);

    const [series, setSeries] = useState([]);

    useEffect(() => {
        if (TickerInflowOutflowData?.data) {
            const inflowData = [];
            const outflowData = [];

            TickerInflowOutflowData?.data?.forEach((entry) => {
                const date = new Date(entry.date);
                const formattedDate = date.getTime();
                const changeUsd = entry.change?.changeUsd || 0;

                if (changeUsd >= 0) {
                    inflowData.push([formattedDate, changeUsd]);
                } else {
                    outflowData.push([formattedDate, changeUsd]);
                }
            });

            setSeries([
                {
                    name: "Inflow",
                    data: inflowData,
                    color: colorMode === "light" ? "#90BE6D" : "#60C000",
                },
                {
                    name: "Outflow",
                    data: outflowData,
                    color: colorMode === "light" ? "#F94144" : "#FF3535",
                },
            ]);
        }
    }, [TickerInflowOutflowData]);

    const options = {
        chart: {
            type: "bar",
            toolbar: {
                show: false,
            },
        },
        colors: ["#90BE6D", "#F94144"],
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
        },
        grid: {
            show: false,
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
            x: {
                formatter: function (val) {
                    return new Date(val).toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
                }
            },
            y: {
                formatter: function (changeUsd) {
                    return millify(changeUsd, {
                        precision: 0,
                        locales: "en-US",
                    });
                }
            },
            marker: {
                show: true,
            },
        },
    };

    return (
        <Box
            width={"100%"}
            height={"100%"}
            borderRadius={"8px"}
            _light={{ bg: "#FFFFFF" }}
            _dark={{ bg: "#282828" }}
            p={"0px 10px"}
        >
            <CustomChart
                options={options}
                series={series}
                type="bar"
                height={439}
            />
        </Box>
    );
};
export default TickerETFNetInflowBox;