import { Box, useColorMode, Button, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import CustomChart from "@components/graph";
import { useSelector } from "react-redux";
import millify from "millify";

const HeatmapGraphBox = () => {
    const { colorMode } = useColorMode();
    const ETFHeatMapData = useSelector((state) => state?.coinData?.ETFHeatMapData);

    const [holdingData, setHoldingData] = useState([]);
    const [priceData, setPriceData] = useState([]);
    const [volumeData, setVolumeData] = useState([]);
    const [sharesData, setSharesData] = useState([]);
    const [aumData, setAumData] = useState([]);
    const [marketCapData, setMarketCapData] = useState([]);

    useEffect(() => {
        if (ETFHeatMapData) {
            setHoldingData(ETFHeatMapData?.data?.map(item => ({ x: item.ticker, y: millify(item.holding) })));
            setPriceData(ETFHeatMapData?.data?.map(item => ({ x: item.ticker, y: millify(item.price) })));
            setVolumeData(ETFHeatMapData?.data?.map(item => ({ x: item.ticker, y: millify(item.volume) })));
            setSharesData(ETFHeatMapData?.data?.map(item => ({ x: item.ticker, y: millify(item.shares) })));
            setAumData(ETFHeatMapData?.data?.map(item => ({ x: item.ticker, y: millify(item.aum) })));
            setMarketCapData(ETFHeatMapData?.data?.map(item => ({ x: item.ticker, y: millify(item.marketCap) })));
        }
    }, [ETFHeatMapData]);

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
            theme: colorMode === "light" ? "light" : "dark",
            x: {
                formatter: function (val) {
                    return new Date(val).toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
                }
            },
            marker: {
                show: true,
            },
        },
        dataLabels: {
            enabled: true,
            style: {
                fontSize: '16px',
                fontWeight: 500,
                color: [colorMode === 'light' ? "#191919" : "#191919"],
            },
            formatter: function (text, op) {
                return [text, op.value];
            },
            offsetY: -4
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

    const [activeCategory, setActiveCategory] = useState('holding');
    let activeData;
    switch (activeCategory) {
        case 'holding':
            activeData = holdingData;
            break;
        case 'price':
            activeData = priceData;
            break;
        case 'volume':
            activeData = volumeData;
            break;
        case 'shares':
            activeData = sharesData;
            break;
        case 'aum':
            activeData = aumData;
            break;
        case 'marketCap':
            activeData = marketCapData;
            break;
        default:
            activeData = holdingData;
    }

    const handleButtonClick = (category) => {
        setActiveCategory(category);
    };

    return (
        <Box
            width={"100%"}
            height={"100%"}
            borderRadius={"8px"}
            _light={{ bg: "#FFFFFF" }}
            _dark={{ bg: "#282828" }}
            p={0}
        >
            <Box bgColor={"background.primary"} pb={"5px"}>
                <Text variant={"h2"} mb={"15px"}>Heatmap</Text>
                <Box layerStyle={"flexCenter"} mb={"5px"}>
                    <Button variant={"modalButton"} bg={"background.primary"} height={"35px"} border={"1px solid #E0E0E0"} onClick={() => handleButtonClick('holding')}>
                        Holding
                    </Button>
                    <Button variant={"modalButton"} bg={"background.primary"} height={"35px"} border={"1px solid #E0E0E0"} onClick={() => handleButtonClick('price')}>
                        Price
                    </Button>
                    <Button variant={"modalButton"} bg={"background.primary"} height={"35px"} border={"1px solid #E0E0E0"} onClick={() => handleButtonClick('volume')}>
                        Volume
                    </Button>
                    {/* <Button variant={"modalButton"} bg={"background.primary"} height={"35px"} border={"1px solid #E0E0E0"}>
                        Turnover
                    </Button> */}
                    <Button variant={"modalButton"} bg={"background.primary"} height={"35px"} border={"1px solid #E0E0E0"} onClick={() => handleButtonClick('shares')}>
                        Shares
                    </Button>
                    <Button variant={"modalButton"} bg={"background.primary"} height={"35px"} border={"1px solid #E0E0E0"} onClick={() => handleButtonClick('aum')}>
                        AUM
                    </Button>
                    <Button variant={"modalButton"} bg={"background.primary"} height={"35px"} border={"1px solid #E0E0E0"} onClick={() => handleButtonClick('marketCap')}>
                        Market Cap
                    </Button>
                </Box>
            </Box>
            <Box borderRadius={"8px"} p={0}>
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