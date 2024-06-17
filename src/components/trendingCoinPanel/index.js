"use client";
import { GoArrowUpRight } from "react-icons/go";
import React, { useMemo } from "react";
import { useRouter } from "next/navigation";

import dynamic from "next/dynamic";
import { Box, Icon, Text, useColorMode } from "@chakra-ui/react";

/* import CustomChart from "@components/graph";
import CustomAvatar from "@components/avatar"; */
const CustomAvatar = dynamic(() => import("@components/avatar"), { ssr: false });
const CustomChart = dynamic(() => import("@components/graph"));


const TrendingCoinPanel = ({ coinData }) => {
    const router = useRouter();
    const { colorMode } = useColorMode();

    const series = useMemo(
        () => [
            {
                data: coinData?.chartData,
            },
        ],
        [coinData]
    );

    const options = {
        chart: {
            sparkline: {
                enabled: true,
            },
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false,
            },
            id: "coinOverview",
            animations: {
                enabled: false,
            },
        },
        colors: [coinData?.change_7d > 0 ? "#245F00" : "#FF0000"],
        grid: {
            show: false,
        },
        legend: {
            show: false,
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: true,
            curve: "smooth",
            width: [2, 2],
        },
        tooltip: {
            enabled: false,
        },
        xaxis: {
            type: "datetime",
            labels: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        yaxis: {
            labels: {
                show: false,
            },
        },
    };

    return (
        <Box
            display={"flex"}
            flexDir={"column"}
            p={"20px"}
            bgColor={"background.secondary"}
            borderRadius={"8px"}
            w={"100%"}
            gap={"10px"}
        >
            <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
            >
                <Box display={"flex"} alignItems={"center"} gap={"15px"}>
                    <CustomAvatar
                        height={"50px"}
                        width={"50px"}
                        name={coinData.name}
                        src={coinData.logoUrl}
                    />

                    <Text fontSize={"16px"} color={"text.primary"}>
                        {" "}
                        {coinData.name}{" "}
                    </Text>
                </Box>

                <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    borderRadius={"50%"}
                    bgColor={colorMode === "light" ? "#FFFFFF" : "#191919"}
                    width={"35px"}
                    height={"35px"}
                    cursor={"pointer"}
                    onClick={() => {
                        router.push(`/coin/${coinData?.slug}`);
                    }}
                >
                    <Icon
                        as={GoArrowUpRight}
                        boxSize={25}
                        color={
                            colorMode === "light"
                                ? "#B6B6B6"
                                : "rgba(255, 255, 255, 0.6)"
                        }
                    />
                </Box>
            </Box>

            <Box p={"20px"}>
                <hr />
            </Box>

            <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
            >
                <Box display={"flex"} flexDir={"column"} gap={"10px"}>
                    <Text
                        fontSize={"20px"}
                        lineHeight={"22px"}
                        fontWeight={"500"}
                    >
                        {coinData.price.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                        })}
                    </Text>
                    <Text variant={"h3"} color={"text.primary"}>
                        {" "}
                        {coinData.change_24h.toFixed(2)}%{" "}
                    </Text>
                </Box>

                <Box w={"30%"}>
                    <CustomChart
                        options={options}
                        series={series}
                        type="line"
                        height={40}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default TrendingCoinPanel;
