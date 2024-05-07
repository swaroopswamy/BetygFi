import React, { useState, useEffect } from "react";
import { Box, Text, Button, useColorMode } from "@chakra-ui/react";
import CustomChart from "@components/graph";
import { useSelector } from "react-redux";
import millify from "millify";

const ARK21Shares = () => {
    const { colorMode } = useColorMode();
    const ETFChartData = useSelector((state) => state?.coinData?.ETFChartData);
    const [selectedRange, setSelectedRange] = useState("24h");

    const [buttonStyles, setButtonStyles] = useState({
        "24h": {
            bg: colorMode === "light" ? "#313131" : "#FFFFFF",
            color: colorMode === "light" ? "#FFFFFF" : "#191919"
        },
        "7d": {
            bg: colorMode === "light" ? "#FFFFFF" : "#282828",
            color: colorMode === "light" ? "#191919" : "#FFFFFF"
        },
        "14d": {
            bg: colorMode === "light" ? "#FFFFFF" : "#282828",
            color: colorMode === "light" ? "#191919" : "#FFFFFF"
        },
        "30d": {
            bg: colorMode === "light" ? "#FFFFFF" : "#282828",
            color: colorMode === "light" ? "#191919" : "#FFFFFF"
        },
        "1yr": {
            bg: colorMode === "light" ? "#FFFFFF" : "#282828",
            color: colorMode === "light" ? "#191919" : "#FFFFFF"
        },
        Max: {
            bg: colorMode === "light" ? "#FFFFFF" : "#282828",
            color: colorMode === "light" ? "#191919" : "#FFFFFF"
        }
    });

    useEffect(() => {
        // Update button styles when color mode changes
        setButtonStyles({
            ...buttonStyles,
            "24h": {
                ...buttonStyles["24h"],
                bg: colorMode === "light" ? "#313131" : "#FFFFFF",
                color: colorMode === "light" ? "#FFFFFF" : "#191919"
            },
            "7d": {
                ...buttonStyles["7d"],
                bg: colorMode === "light" ? "#FFFFFF" : "#282828",
                color: colorMode === "light" ? "#191919" : "#FFFFFF"
            },
            "14d": {
                ...buttonStyles["14d"],
                bg: colorMode === "light" ? "#FFFFFF" : "#282828",
                color: colorMode === "light" ? "#191919" : "#FFFFFF"
            },
            "30d": {
                ...buttonStyles["30d"],
                bg: colorMode === "light" ? "#FFFFFF" : "#282828",
                color: colorMode === "light" ? "#191919" : "#FFFFFF"
            },
            "1yr": {
                ...buttonStyles["1yr"],
                bg: colorMode === "light" ? "#FFFFFF" : "#282828",
                color: colorMode === "light" ? "#191919" : "#FFFFFF"
            },
            "Max": {
                ...buttonStyles["Max"],
                bg: colorMode === "light" ? "#FFFFFF" : "#282828",
                color: colorMode === "light" ? "#191919" : "#FFFFFF"
            },
        });
    }, [colorMode]);

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
            y: [item.open, item.high, item.low, item.close]
        }))
    }];

    const handleRangeChange = (range) => {
        setSelectedRange(range);

        // Update button styles
        const updatedButtonStyles = { ...buttonStyles };
        for (let key in updatedButtonStyles) {
            if (key === range) {
                updatedButtonStyles[key].bg = colorMode === "light" ? "#313131" : "#FFFFFF";
                updatedButtonStyles[key].color = colorMode === "light" ? "#FFFFFF" : "#313131";
            } else {
                updatedButtonStyles[key].bg = colorMode === "light" ? "#FFFFFF" : "#282828";
                updatedButtonStyles[key].color = colorMode === "light" ? "#191919" : "#FFFFFF";
            }
        }
        setButtonStyles(updatedButtonStyles);
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
                    {Object.entries(buttonStyles).map(([range, styles]) => (
                        <Button
                            key={range}
                            variant={"modalButton"}
                            bg={styles.bg}
                            color={styles.color}
                            height={"28px"}
                            border={"1px solid #C6C6C6"}
                            onClick={() => handleRangeChange(range)}>
                            {range}
                        </Button>
                    ))}
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
