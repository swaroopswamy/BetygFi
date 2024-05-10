import { Box, useColorMode, Button, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import CustomChart from "@components/graph";
import { useSelector } from "react-redux";
import millify from "millify";

const HeatmapGraphBox = () => {
    const { colorMode } = useColorMode();
    const ETFHeatMapData = useSelector((state) => state?.coinData?.ETFHeatMapData);
    const [activeData, setActiveData] = useState([]);
    const [activeCategory, setActiveCategory] = useState('holding');

    useEffect(() => {
        if (ETFHeatMapData) {
            setActiveData(ETFHeatMapData?.data?.map(item => (
                {
                    x: item.ticker,
                    y: millify(item?.[activeCategory]),
                    name: activeCategory
                })));
        }
    }, [ETFHeatMapData, activeCategory]);

    const options = {
        legend: {
            show: false
        },
        chart: {
            type: 'treemap',
            toolbar: {
                show: false
            },
            height: "100%",
        },
        tooltip: {
            enabled: true,
            theme: colorMode,
            x: {
                formatter: function (val) {
                    return new Date(val).toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
                }
            },
            marker: {
                show: true,
            },
            custom: function ({ /* series, */ seriesIndex, dataPointIndex, w }) {
                const item = w.config.series[seriesIndex].data[dataPointIndex];
                let tooltipContent = `
                    <div class="tooltip-parent">
                    <div class="">${item.x}</div>
                    <div>${item.name.charAt(0).toUpperCase() + item.name.slice(1)}: ${item.y}</div>
                    <div>${item.name.charAt(0).toUpperCase() + item.name.slice(1)} Change: ${ETFHeatMapData.data[dataPointIndex][activeCategory + 'Change']}</div>
                    </div
                `;
                return tooltipContent;
            }
        },
        dataLabels: {
            enabled: true,
            style: {
                fontSize: '16px',
                fontWeight: 500,
                colors: ["#191919"],
            },
            formatter: function (text, op) {
                return [text, op.value];
            },
            offsetX: 4,
            offsetY: -4,
            allowOverlap: true,
        },
        plotOptions: {
            treemap: {
                enableShades: false,
                shadeIntensity: 0.5,
                reverseNegativeShade: false,
                colorScale: {
                    ranges: [
                        {
                            from: -Number.MAX_SAFE_INTEGER,
                            to: 0,
                            color: '#FF9F6A'
                        },
                        {
                            from: 0,
                            to: Number.MAX_SAFE_INTEGER,
                            color: '#9ADA8A'
                        }
                    ]
                }
            }
        }
    };


    const handleButtonClick = (category) => {
        setActiveCategory(category);
    };

    return (
        <Box
            width={"100%"}
            height={"100%"}
            borderRadius={"8px"}
            bg={colorMode === "light" ? "#FFFFFF" : "#282828"}
            p={"0px"}
        >
            <Box bgColor={"background.primary"} pb={"5px"}>
                <Text variant={"h2"} mb={"15px"}>Heatmap</Text>
                <Box layerStyle={"flexCenter"} mb={"5px"}>
                    <Button
                        variant={"modalButton"}
                        className={
                            activeCategory === 'holding' ? 'chart-button-light-selected' : 'chart-button-light'
                        }


                        height={"35px"}
                        border={"1px solid #E0E0E0"}
                        onClick={() => handleButtonClick('holding')}>
                        Holding
                    </Button>
                    <Button
                        variant={"modalButton"}
                        className={
                            activeCategory === 'price' ? 'chart-button-light-selected' : 'chart-button-light'
                        }
                        height={"35px"}
                        border={"1px solid #E0E0E0"}
                        onClick={() => handleButtonClick('price')}>
                        Price
                    </Button>
                    <Button
                        variant={"modalButton"}
                        className={
                            activeCategory === 'volume' ? 'chart-button-light-selected' : 'chart-button-light'
                        }
                        height={"35px"}
                        border={"1px solid #E0E0E0"}
                        onClick={() => handleButtonClick('volume')}>
                        Volume
                    </Button>
                    {/* <Button variant={"modalButton"} bg={"background.primary"} height={"35px"} border={"1px solid #E0E0E0"}>
                        Turnover
                    </Button> */}
                    <Button
                        variant={"modalButton"}
                        className={
                            activeCategory === 'shares' ? 'chart-button-light-selected' : 'chart-button-light'
                        }
                        height={"35px"}
                        border={"1px solid #E0E0E0"}
                        onClick={() => handleButtonClick('shares')}>
                        Shares
                    </Button>
                    {/* <Button variant={"modalButton"} bg={"background.primary"} height={"35px"} border={"1px solid #E0E0E0"} onClick={() => handleButtonClick('aum')}>
                        AUM
                    </Button> */}
                    <Button
                        variant={"modalButton"}
                        className={
                            activeCategory === 'marketCap' ? 'chart-button-light-selected' : 'chart-button-light'
                        }
                        height={"35px"}
                        border={"1px solid #E0E0E0"}
                        onClick={() => handleButtonClick('marketCap')}>
                        Market Cap
                    </Button>
                </Box>
            </Box>
            <Box>
                <CustomChart
                    type={"treemap"}
                    options={options}
                    series={[{ data: activeData }]}
                    height={438}
                />
            </Box>
        </Box>
    );
};


export default HeatmapGraphBox; 