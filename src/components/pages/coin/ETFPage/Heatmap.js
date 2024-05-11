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

    const handleButtonClick = (category) => {
        setActiveCategory(category);
    };

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
            custom: function ({ seriesIndex, dataPointIndex, w }) {
                const item = w.config.series[seriesIndex].data[dataPointIndex];
                let tooltipContent = '';
                const changeValue = ETFHeatMapData.data[dataPointIndex][item.name + 'Change'];
                const PriceValue = ETFHeatMapData.data[dataPointIndex]['priceChange'];
                if (item.name === 'holding') {
                    tooltipContent = `
                        <div class="tooltip-parent">
                            <div style="font-weight: bold;">${item.x}</div>
                            <div class="First-Data">${item.name.charAt(0).toUpperCase() + item.name.slice(1)} Bitcoin: <span style="font-weight: bold;">${item.y} BTC</span></div>
                            <div>${item.name.charAt(0).toUpperCase() + item.name.slice(1)} Bitcoin (1d%): <span style="font-weight: bold;">${changeValue} BTC</span></div>
                        </div>
                    `;
                } else if (item.name === 'price') {
                    tooltipContent = `
                        <div class="tooltip-parent">
                            <div style="font-weight: bold;">${item.x}</div>
                            <div class="First-Data">${item.name.charAt(0).toUpperCase() + item.name.slice(1)}: <span style="font-weight: bold;">$${item.y}</span></div>
                            <div>${item.name.charAt(0).toUpperCase() + item.name.slice(1)} Change: <span style="font-weight: bold;">${changeValue} %</span></div>
                        </div>
                    `;
                } else if (item.name === 'volume') {
                    tooltipContent = `
                        <div class="tooltip-parent">
                            <div style="font-weight: bold;">${item.x}</div>
                            <div class="First-Data">${item.name.charAt(0).toUpperCase() + item.name.slice(1)}: <span style="font-weight: bold;">$${item.y}</span></div>
                            <div>Price Change: <span style="font-weight: bold;">${PriceValue} %</span></div>
                        </div>
                    `;
                } else if (item.name === 'shares') {
                    tooltipContent = `
                        <div class="tooltip-parent">
                            <div style="font-weight: bold;">${item.x}</div>
                            <div class="First-Data">${item.name.charAt(0).toUpperCase() + item.name.slice(1)} Outstanding: <span style="font-weight: bold;">${item.y}</span></div>
                            <div> Change: <span style="font-weight: bold;">${changeValue}</span></div>
                        </div>
                    `;
                } else if (item.name === 'aum') {
                    tooltipContent = `
                        <div class="tooltip-parent">
                            <div style="font-weight: bold;">${item.x}</div>
                            <div class="First-Data">${item.name.charAt(0).toUpperCase() + item.name.slice(1)}: <span style="font-weight: bold;">${item.y}</span></div>
                            <div> Change: <span style="font-weight: bold;">${changeValue}</span></div>
                        </div>
                    `;
                } else if (item.name === 'marketCap') {
                    tooltipContent = `
                        <div class="tooltip-parent">
                            <div style="font-weight: bold;">${item.x}</div>
                            <div class="First-Data">${item.name.charAt(0).toUpperCase() + item.name.slice(1)}: <span style="font-weight: bold;">${item.y}</span></div>
                            <div> Change: <span style="font-weight: bold;">${changeValue}</span></div>
                        </div>
                    `;
                }
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
                        className={activeCategory === 'holding' ? (colorMode === 'light' ? 'chart-button-light-selected' : 'chart-button-dark-selected') : (colorMode === 'light' ? 'chart-button-light' : 'chart-button-dark')}
                        height={"35px"}
                        border={"1px solid #E0E0E0"}
                        onClick={() => handleButtonClick('holding')}>
                        Holding
                    </Button>
                    <Button
                        variant={"modalButton"}
                        className={activeCategory === 'price' ? (colorMode === 'light' ? 'chart-button-light-selected' : 'chart-button-dark-selected') : (colorMode === 'light' ? 'chart-button-light' : 'chart-button-dark')}
                        height={"35px"}
                        border={"1px solid #E0E0E0"}
                        onClick={() => handleButtonClick('price')}>
                        Price
                    </Button>
                    <Button
                        variant={"modalButton"}
                        className={activeCategory === 'volume' ? (colorMode === 'light' ? 'chart-button-light-selected' : 'chart-button-dark-selected') : (colorMode === 'light' ? 'chart-button-light' : 'chart-button-dark')}
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
                        className={activeCategory === 'shares' ? (colorMode === 'light' ? 'chart-button-light-selected' : 'chart-button-dark-selected') : (colorMode === 'light' ? 'chart-button-light' : 'chart-button-dark')}
                        height={"35px"}
                        border={"1px solid #E0E0E0"}
                        onClick={() => handleButtonClick('shares')}>
                        Shares
                    </Button>
                    <Button
                        variant={"modalButton"}
                        className={activeCategory === 'aum' ? (colorMode === 'light' ? 'chart-button-light-selected' : 'chart-button-dark-selected') : (colorMode === 'light' ? 'chart-button-light' : 'chart-button-dark')}
                        height={"35px"}
                        border={"1px solid #E0E0E0"}
                        onClick={() => handleButtonClick('aum')}>
                        AUM
                    </Button>
                    <Button
                        variant={"modalButton"}
                        className={activeCategory === 'marketCap' ? (colorMode === 'light' ? 'chart-button-light-selected' : 'chart-button-dark-selected') : (colorMode === 'light' ? 'chart-button-light' : 'chart-button-dark')}
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
