import React from "react";
import { Box, Text, Button, useColorMode } from "@chakra-ui/react";
import CustomChart from "@components/graph";
import { useSelector } from "react-redux";

const ARK21Shares = () => {
    const { colorMode } = useColorMode();
    const ETFChartData = useSelector((state) => state?.coinData?.ETFChartData);

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
                    return `$${value}b`;
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

    const series = [{
        data: ETFChartData?.data?.chartHistorical.map(item => ({
            x: new Date(item.date).getTime(),
            y: [item.open, item.high, item.low, item.close]
        }))
    }];

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
                    <Button variant={"modalButton"} bg={"background.secondary"} height={"28px"} border={"1px solid #C6C6C6"}>
                        24h
                    </Button>
                    <Button variant={"modalButton"} bg={"background.secondary"} height={"28px"} border={"1px solid #C6C6C6"}>
                        7d
                    </Button>
                    <Button variant={"modalButton"} bg={"background.secondary"} height={"28px"} border={"1px solid #C6C6C6"}>
                        14d
                    </Button>
                    <Button variant={"modalButton"} bg={"background.secondary"} height={"28px"} border={"1px solid #C6C6C6"}>
                        30d
                    </Button>
                    <Button variant={"modalButton"} bg={"background.secondary"} height={"28px"} border={"1px solid #C6C6C6"}>
                        1yr
                    </Button>
                    <Button variant={"modalButton"} bg={"background.secondary"} height={"28px"} border={"1px solid #C6C6C6"}>
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
