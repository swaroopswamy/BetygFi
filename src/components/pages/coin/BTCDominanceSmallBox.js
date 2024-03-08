import { Box, Text, Select, useColorMode, useColorModeValue } from "@chakra-ui/react";
import CustomChart from "@components/graph";
import { btcDominanceDaySelectReducer } from "@redux/coin_data/dataSlice";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const BTCDominanceSmallBox = () => {
    const { colorMode } = useColorMode();
    const [series, setSeries] = useState();
    const dispatch = useDispatch();
    const BTCDominanceScoresData = useSelector((state) => state.coinData.BTCDominanceScoresData);
    const periods = [
        {
            value: "7D",
            label: "7d"
        },
        {
            value: "14D",
            label: "14d"
        },
        {
            value: "30D",
            label: "30d"
        },
    ];
    const options = {
        chart: {
            type: 'area',
            toolbar: {
                show: false
            },
        },
        dataLabels: {
            enabled: false,
        },
        grid: {
            show: false
        },
        stroke: {
            curve: 'smooth',
            width: 1,
            colors: "rgba(36, 95, 0, 1)"
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'light', // Choose shade (light, dark)
                type: 'horizontal', // Choose gradient type (horizontal, vertical)
                opacityFrom: 0.5, // Starting opacity (0-1)
                opacityTo: 0.8 // Ending opacity (0-1)
            },
            colors: ["#245F00"]
        },
        xaxis: {
            type: 'datetime',
            axisBorder: {
                show: false,
            },
            labels: {
                show: true,
                style: {
                    colors: useColorModeValue("#16171B", "#FFF"),
                    fontSize: "11px",
                    fontWeight: 300,
                },
            },
            axisTicks: {
                show: false,
            },
        },
        yaxis: {
            show: false,
        },
        tooltip: {
            enabled: false,
        },
    };

    useEffect(() => {
        setSeries([{
            data: BTCDominanceScoresData?.data?.data
        }]);
    }, [BTCDominanceScoresData]);
    return (
        <Box
            width={"30%"}
            minW={"295px"}
            height={"197px"}
            borderRadius={"8px"}
            mb={"15px"}
            pb={"0px"}
            _light={{
                bg: "#FFFFFF"
            }}
            _dark={{
                bg: "#282828"
            }}
            display={"flex"}
            justifyContent={"space-between"}
            flexDirection={"column"}
        >
            <Box layerStyle={"spaceBetween"} mb={"12px"} px={"12px"} pt={"12px"}>
                <Box layerStyle={"flexCenter"}>
                    <Image
                        height={32}
                        width={32}
                        src="/icons/bitcoin_logo.svg"
                        alt="bitcoin_icon"></Image>
                    <Text variant={"contentHeading3"} fontWeight={500} ml={"8px"}>
                        BTC Dominance
                    </Text>
                </Box>
                <Box layerStyle={"flexCenter"} gap={"3px"} >
                    <Select
                        fontSize={"14px"}
                        fontWeight={"600"}
                        height={"24px"}
                        border={"1px"}
                        borderRadius={"2px"}
                        onChange={(e) => {
                            dispatch(btcDominanceDaySelectReducer(e.target.value));
                        }}
                        borderColor={colorMode === 'light' ? "#E0E0E0" : "#333333"}
                        padding={"0"}
                    >
                        {
                            periods.map((period, i) => {
                                return (
                                    <option value={period.value} key={i}>{period.label}</option>
                                );
                            })
                        }
                    </Select>
                </Box>
            </Box>
            <Box layerStyle={"flexCenter"} pl={"10px"} gap={"4px"}>
                <Text variant={"textBold"} fontSize={"24px"}>{(series?.length > 0) && series[0]?.data?.length > 1 && series[0].data[series[0]?.data?.length - 1]?.y} %</Text>
                <Box borderRadius={"16px"} layerStyle={"flexCenter"}
                    bgColor={BTCDominanceScoresData?.data?.percentageChange?.toFixed(2) && (BTCDominanceScoresData?.data?.percentageChange?.toFixed(2) > 0 ? "rgba(36, 95, 0, 0.12)" : "rgba(255, 0, 0, 0.12)")}
                    px={"12px"} py="3px" ml={"5px"}>
                    <Text variant={"baseStyle"} lineHeight={"17px"}
                        _light={{
                            color: BTCDominanceScoresData?.data?.percentageChange?.toFixed(2) && (BTCDominanceScoresData?.data?.percentageChange?.toFixed(2) > 0 ? "#245F00" : "rgba(255, 0, 0, 1)")
                        }}
                    >
                        {BTCDominanceScoresData?.data?.percentageChange?.toFixed(2)} %
                    </Text>
                </Box>
            </Box>
            <CustomChart
                type={"area"}
                options={options}
                series={series}
                height={110}
            />
        </Box>
    );
};


export default BTCDominanceSmallBox;
