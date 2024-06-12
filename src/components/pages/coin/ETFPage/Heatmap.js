import { Box, useColorMode, Button, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import millify from "millify";
import dynamic from "next/dynamic";
const CustomChart = dynamic(() => import("@components/graph", { ssr: false }));


const HeatmapGraphBox = () => {
    const { colorMode } = useColorMode();
    const ETFHeatMapData = useSelector((state) => state?.coinData?.ETFHeatMapData);
    const [activeData, setActiveData] = useState([]);
    const [activeCategory, setActiveCategory] = useState('holding');

    useEffect(() => {
        if (ETFHeatMapData) {
            let sortedData;
            if (activeCategory === 'volume') {
                sortedData = ETFHeatMapData?.data?.map(item => (
                    {
                        x: item.ticker,
                        y: item?.[activeCategory],
                        name: activeCategory,
                        [activeCategory + "Change"]: item?.["priceChange"],
                        fillColor: item?.["priceChange"] >= 0 ? '#9ADA8A' : '#FF9F6A'
                    }
                ));
            } else {
                sortedData = ETFHeatMapData?.data?.map(item => (
                    {
                        x: item.ticker,
                        y: item?.[activeCategory],
                        name: activeCategory,
                        [activeCategory + "Change"]: item?.[activeCategory + "Change"],
                        fillColor: item?.[activeCategory + "Change"] >= 0 ? '#9ADA8A' : '#FF9F6A'
                    }
                ));
            }

            // Sort the data in descending order based on the value of y
            sortedData = sortedData.sort((a, b) => b.y - a.y);

            setActiveData(sortedData);
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
        },
        tooltip: {
            enabled: true,
            theme: colorMode,
            marker: {
                show: true,
            },
            custom: function ({ seriesIndex, dataPointIndex, w }) {
                let item = w.config.series[seriesIndex].data[dataPointIndex];
                let tooltipContent = '';
                let changeValue = item?.[item?.name + "Change"];
                if (item.name === 'holding') {
                    tooltipContent = `
                        <div class="tooltip-parent">
                            <div style="font-weight: bold;">${item.x}</div>
                            <div class="First-Data">${item.name.charAt(0).toUpperCase() + item.name.slice(1)} Bitcoin: <span style="font-weight: bold;">
                            ${millify(item.y, { precision: 2, locales: "en-US" })} 
                            BTC</span></div>
                            <div>${item.name.charAt(0).toUpperCase() + item.name.slice(1)} Bitcoin (1d%): <span style="font-weight: bold;">
                            ${millify(changeValue, { precision: 2, locales: "en-US" })}
                             BTC</span></div>
                        </div>
                    `;
                } else if (item.name === 'price') {
                    tooltipContent = `
                        <div class="tooltip-parent">
                            <div style="font-weight: bold;">${item.x}</div>
                            <div class="First-Data">${item.name.charAt(0).toUpperCase() + item.name.slice(1)}: <span style="font-weight: bold;">$
                            ${millify(item.y, { precision: 2, locales: "en-US" })}
                            </span></div>
                            <div>${item.name.charAt(0).toUpperCase() + item.name.slice(1)} Change: <span style="font-weight: bold;">
                            ${millify(changeValue, { precision: 2, locales: "en-US" })}
                             %</span></div>
                        </div>
                    `;
                } else if (item.name === 'volume') {
                    tooltipContent = `
                        <div class="tooltip-parent">
                            <div style="font-weight: bold;">${item.x}</div>
                            <div class="First-Data">${item.name.charAt(0).toUpperCase() + item.name.slice(1)}: <span style="font-weight: bold;">$
                            ${millify(item.y, { precision: 2, locales: "en-US" })}
                            </span></div>
                            <div>Price Change: <span style="font-weight: bold;">${millify(changeValue, { precision: 2, locales: "en-US" })}
                            %</span></div>
                        </div>
                    `;
                } else if (item.name === 'shares') {
                    tooltipContent = `
                        <div class="tooltip-parent">
                            <div style="font-weight: bold;">${item.x}</div>
                            <div class="First-Data">${item.name.charAt(0).toUpperCase() + item.name.slice(1)} Outstanding: <span style="font-weight: bold;">${millify(item.y, { precision: 2, locales: "en-US" })}</span></div>
                            <div> Change: <span style="font-weight: bold;">${millify(changeValue, { precision: 2, locales: "en-US" })}
                            </span></div>
                        </div>
                    `;
                } else if (item.name === 'aum') {
                    tooltipContent = `
                        <div class="tooltip-parent">
                            <div style="font-weight: bold;">${item.x}</div>
                            <div class="First-Data">${item.name.charAt(0).toUpperCase() + item.name.slice(1)}: <span style="font-weight: bold;">${millify(item.y, { precision: 2, locales: "en-US" })}</span></div>
                            <div> Change: <span style="font-weight: bold;">${millify(changeValue, { precision: 2, locales: "en-US" })}
                            </span></div>
                        </div>
                    `;
                } else if (item.name === 'marketCap') {
                    tooltipContent = `
                        <div class="tooltip-parent">
                            <div style="font-weight: bold;">${item.x}</div>
                            <div class="First-Data">${item.name.charAt(0).toUpperCase() + item.name.slice(1)}: <span style="font-weight: bold;">${millify(item.y, { precision: 2, locales: "en-US" })}</span></div>
                            <div> Change: <span style="font-weight: bold;">${millify(changeValue, { precision: 2, locales: "en-US" })}
                            </span></div>
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
                fontWeight: 700,
                fontFamily: "Inter",
                colors: ["#191919"],
            },
            formatter: function (text, op) {
                let item = op.w.config.series[op.seriesIndex].data[op.dataPointIndex];
                if (item.name === "holding" || item.name === "shares") {
                    return [text, (millify(op.value, { precision: 2, locales: "en-US" }))];
                } else {
                    return [text, "$" + (millify(op.value, { precision: 2, locales: "en-US" }))];
                }
            },
            offsetX: 4,
            offsetY: -4,
            allowOverlap: true,
        },
        plotOptions: {
            treemap: {
                enableShades: true,
                shadeIntensity: 0.5,
                reverseNegativeShade: true,
                dataLabels: {
                    format: "scale",
                },
                colorScale: {
                    inverse: false,
                },
            }
        },
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
                    className="etf-heatmap-custom-style"
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
