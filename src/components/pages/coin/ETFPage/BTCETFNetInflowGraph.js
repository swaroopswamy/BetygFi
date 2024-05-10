import CustomChart from "@components/graph";
import { Box, Text, useColorMode, /*Button*/ } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import millify from "millify";

const BTCETFNetInflowBox = () => {
    const { colorMode } = useColorMode();
    const ETFInflowOutflowData = useSelector((state) => state?.coinData?.ETFInflowOutflowData);

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
        if (ETFInflowOutflowData?.data) {
            setSeries([
                {
                    name: "Inflow",
                    data: ETFInflowOutflowData?.data?.map((entry) => {
                        if (entry?.changeUsd >= 0) {
                            return [new Date(entry?.date), entry?.changeUsd];
                        }
                        return null;
                    }).filter(entry => entry !== null),
                    color: colorMode === "light" ? "#90BE6D" : "#60C000",
                },
                {
                    name: "Outflow",
                    data: ETFInflowOutflowData?.data?.map((entry) => {
                        if (entry?.changeUsd < 0) {
                            return [new Date(entry?.date), entry?.changeUsd];
                        }
                        return null;
                    }).filter(entry => entry !== null),
                    color: colorMode === "light" ? "#F94144" : "#FF3535",
                },
            ]);
        }
    }, [ETFInflowOutflowData]);

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
                type="bar"
                height={439}
            />
        </Box>
    );
};
export default BTCETFNetInflowBox;
