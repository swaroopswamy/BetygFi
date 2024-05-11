import CustomChart from "@components/graph";
import { Box, useColorMode } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import millify from "millify";

const TickerETFNetInflowBox = () => {
    const { colorMode } = useColorMode();
    const TickerInflowOutflowData = useSelector((state) => state?.coinData?.TickerInflowOutflowData);

    const [series, setSeries] = useState([
        {
            name: "Inflow",
            data: [],
            color: colorMode === "light" ? "#90BE6D" : "#60C000",
        },
        {
            name: "Outflow",
            data: [],
            color: colorMode === "light" ? "#F94144" : "#FF3535",
        },
    ]);

    useEffect(() => {
        if (TickerInflowOutflowData?.data) {
            setSeries([
                {
                    name: "Inflow",
                    data: TickerInflowOutflowData?.data?.map((entry) => {
                        if (entry?.change?.changeUsd >= 0) {
                            return { x: new Date(entry?.date), y: entry?.change?.changeUsd };
                        }
                        return null;
                    }).filter(entry => entry !== null),
                    color: colorMode === "light" ? "#90BE6D" : "#60C000",
                },
                {
                    name: "Outflow",
                    data: TickerInflowOutflowData?.data?.map((entry) => {
                        if (entry?.change?.changeUsd < 0) {
                            return { x: new Date(entry?.date), y: entry?.change?.changeUsd };
                        }
                        return null;
                    }).filter(entry => entry !== null),
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
            followCursor: true,
            intersect: true,
            custom: function ({ dataPointIndex }) {
                const entry = TickerInflowOutflowData?.data[dataPointIndex];
                const flow = entry?.change?.changeUsd >= 0 ? "Inflow" : "Outflow";
                let tooltipContent = '';
                tooltipContent = `
                    <div class="tooltip-parent">
                       <div>${new Date(entry.date).toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</div>
                       <div style="margin-top: 10px;">Price: <span style="font-weight: bold;">$${entry.price}</span></div>
                       <div> ${flow}: <span style="font-weight: bold;"> ${millify(entry?.change?.changeUsd, { precision: 0, locales: "en-US" })}</span></div>
                    </div>
                    `;
                return tooltipContent;
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
            borderEndEndRadius={"8px"}
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