"use client";
import { Box, Select, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { sapDaySelectReducer } from "@redux/coin_data/dataSlice";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import dynamic from "next/dynamic";
const CustomChart = dynamic(() => import("@components/graph", { ssr: false }));
const NoDataAvailable = dynamic(() => import("@components/pages/coin/NodataSmallBox", { ssr: false }));


const SandPSmallBox = () => {
    const { colorMode } = useColorMode();
    const [series, setSeries] = useState();
    const dispatch = useDispatch();
    const SAPData = useSelector((state) => state?.coinData?.SAPData);
    const periods = [
        {
            value: "week",
            label: "7d"
        },
        {
            value: "twoWeeks",
            label: "14d"
        },
        {
            value: "month",
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
            colors: ["#245F00"]
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'light',
                type: 'vertical',
                gradientToColors: ["rgba(255, 255, 255, 0)"],
                //stops: [0, 100],
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
                    colors: useColorModeValue("#16171B", "#FFFFFF"),
                    fontFamily: "Inter",
                    fontSize: "12px",
                    fontWeight: 300,
                },
            },
            axisTicks: {
                show: false,
            },
            tooltip: {
                enabled: false
            },
        },
        yaxis: {
            show: false,
        },
        tooltip: {
            enabled: true,
            theme: colorMode,
            custom: function ({ dataPointIndex, seriesIndex, w }) {
                let entry = w.config.series[seriesIndex].data[dataPointIndex];
                return (
                    '<div class="btc_dominance_tooltip">' +
                    '<div class="btc_dominance_tooltip_text">' +
                    '<p>' +
                    "S&P 500 Price " +
                    "$" +
                    entry?.y?.toFixed(2) +
                    '</p>' +
                    "</div>" +
                    '<div class="btc_dominance_tooltip_text_date">' +
                    moment(entry?.x).format('DD MMM, YYYY') +
                    "</div>" +
                    "</div>"
                );
            },
        },
    };

    useEffect(() => {
        setSeries([{
            data: SAPData?.data?.data?.filter((item) => ![null, undefined, ''].includes(item))
        }]);
    }, [SAPData]);
    return (
        <Box
            mx={"10px"}
            width={"30%"}
            height={"197px"}
            minW={"295px"}
            borderRadius={"8px"}
            mb={"15px"}
            pl={"0px"}
            pr={"0px"}
            _light={{ bg: "#FFFFFF" }}
            _dark={{ bg: "#282828" }}
            key="sandp"
        >
            <Box layerStyle={"spaceBetween"} p={"12px"}>
                <Box layerStyle={"flexCenter"}>
                    <Image
                        height={32}
                        width={32}
                        src="/icons/s&p_bitcoin_logo.svg"
                        alt="s&p_bitcoin_icon"
                        unoptimized="true"
                        priority="true"></Image>
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
            {
                SAPData?.isSuccess ?
                    (
                        <React.Fragment>
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
                                        {SAPData?.data?.percentageChange.toFixed(2) ?? '-'}%
                                    </Text>
                                </Box>
                                <Image
                                    height={12}
                                    width={12}
                                    src="/icons/green_dot.svg"
                                    alt="green_dot_icon"
                                    unoptimized="true"
                                    priority="true"
                                ></Image>
                            </Box>
                            <Box width={"100%"} mt={"10px"} pl={"0px"} pr={"0px"}>
                                <CustomChart
                                    type={"area"}
                                    options={options}
                                    series={series}
                                    height={100}
                                />
                            </Box>
                        </React.Fragment>)
                    :
                    <NoDataAvailable />
            }

        </Box >
    );
};


export default SandPSmallBox;
