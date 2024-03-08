import { Box, Select, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import CustomChart from "@components/graph";
import { sapDaySelectReducer } from "@redux/coin_data/dataSlice";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const SandPSmallBox = () => {
    const { colorMode } = useColorMode();
    const [series, setSeries] = useState();
    const dispatch = useDispatch();
    const SAPData = useSelector((state) => state?.coinData?.SAPData);
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
            data: SAPData?.data?.data
        }]);
    }, [SAPData]);
    return (
        <Box
            width={"30%"}
            height={"197px"}
            minW={"295px"}
            borderRadius={"8px"}
            mb={"15px"}
            pl={"0px"}
            pr={"0px"}
            _light={{ bg: "#FFFFFF" }}
            _dark={{ bg: "#282828" }}
        >
            <Box layerStyle={"spaceBetween"} p={"12px"}>
                <Box layerStyle={"flexCenter"}>
                    <Image
                        height={32}
                        width={32}
                        src="/icons/bitcoin_logo.svg"
                        alt="bitcoin_icon"></Image>
                    <Text variant={"contentHeading3"} fontWeight={500} ml={"8px"}>
                        S&P 500
                    </Text>
                </Box>
                <Box layerStyle={"flexCenter"} gap={"3px"}>
                    <Select
                        fontSize={"14px"}
                        fontWeight={"600"}
                        height={"24px"}
                        border={"1px"}
                        borderRadius={"2px"}
                        onChange={(e) => {
                            dispatch(sapDaySelectReducer(e.target.value));
                        }}
                        borderColor={colorMode === 'light' ? "#E0E0E0" : "#333333"}
                        padding={0}
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
            <Box layerStyle={"flexCenter"} pl={"10px"} gap={"4px"} >
                <Text variant={"textBold"} fontSize={"24px"}>
                    {SAPData?.data?.last?.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                    }) ?? "-"}
                </Text>
                <Box borderRadius={"16px"} layerStyle={"flexCenter"}
                    bgColor={SAPData?.data?.percentageChange.toFixed(2) && (SAPData?.data?.percentageChange.toFixed(2) > 0 ? "rgba(36, 95, 0, 0.12)" : "rgba(255, 0, 0, 0.12)")}
                    px={"12px"} py="3px" ml={"5px"}
                >
                    <Text variant={"baseStyle"} lineHeight={"17px"}
                        _light={{
                            color: SAPData?.data?.percentageChange.toFixed(2) && (SAPData?.data?.percentageChange.toFixed(2) > 0 ? "#245F00" : "rgba(255, 0, 0, 1)")
                        }}
                    >
                        {SAPData?.data?.percentageChange.toFixed(2) ?? '-'}
                    </Text>
                </Box>
                <Image
                    height={12}
                    width={12}
                    src="/icons/green_dot.svg"
                    alt="green_dot_icon"></Image>
            </Box>
            <Box width={"100%"} mt={"10px"} pl={"0px"} pr={"0px"}>
                <CustomChart
                    type={"area"}
                    options={options}
                    series={series}
                    height={80}
                />
            </Box>
        </Box >
    );
};


export default SandPSmallBox;
