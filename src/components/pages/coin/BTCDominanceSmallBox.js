import { Box, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import CustomChart from "@components/graph";
import Image from "next/image";
import React, { useMemo } from "react";

const randomData = [
    { x: new Date(2023, 11, 1), y: 5 },
    { x: new Date(2023, 11, 2), y: 30 },
    { x: new Date(2023, 11, 3), y: 15 },
    { x: new Date(2023, 11, 4), y: 5 },
    { x: new Date(2023, 11, 4), y: 6 },
];


const BTCDominanceSmallBox = () => {
    const { colorMode } = useColorMode();
    const options = {
        chart: {
            type: 'area',
        },
        dataLabels: {
            enabled: false,
        },
        toolbar: {
            show: false
        },
        grid: {
            show: false
        },
        zoom: {
            enabled: false,
        },
        stroke: {
            curve: 'smooth',
            width: 1,
            colors: "rgba(36, 95, 0, 1)"
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.9,
                stops: [0, 90, 100]
            }
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

    const series = useMemo(
        () => [
            {
                data: randomData,
            },
        ],
        [randomData]
    );
    return (
        <Box
            width={"20%"}
            height={"197px"}
            borderRadius={"8px"}
            _light={{
                bg: "#FFFFFF"
            }}
            _dark={{
                bg: "#282828"
            }}
        >
            <Box layerStyle={"spaceBetween"} p={"10px"}>
                <Box layerStyle={"flexCenter"}>
                    <Image
                        height={25}
                        width={25}

                        src="/icons/trophy.svg"
                        alt="trophy_icon"></Image>
                    <Text variant={"contentHeading3"} fontWeight={500} pl={"8px"}>
                        BTC Dominance
                    </Text>
                </Box>
                <Box layerStyle={"flexCenter"} gap={"3px"} >
                    <Text variant={"footnoteText"} fontSize={"12px"} fontWeight={500}
                        _light={{
                            color: "#757575"
                        }}
                        _dark={{
                            color: "#A5A5A5"
                        }}>
                        View more
                    </Text>
                    <Image
                        src={colorMode === "light" ? "/icons/arrow_right.svg" : "/icons/Arrow_down_dark.svg"}
                        height={6}
                        width={6}
                        alt="arrow">
                    </Image>
                </Box>
            </Box>
            <Box layerStyle={"flexCenter"} p={"10px"}>
                <Text variant={"textBold"} fontSize={"24px"}>51.61%</Text>
                <Box borderRadius={"16px"} layerStyle={"flexCenter"} bgColor={"rgba(36, 95, 0, 0.12)"} px={"12px"} py="3px" ml={"10px"}>
                    <Text variant={"baseStyle"} lineHeight={"17px"}
                        _light={{
                            color: "#245F00"
                        }}
                        _dark={{
                            color: "#60C000"
                        }}
                    >
                        52.0%
                    </Text>
                </Box>
            </Box>
            <Box >
                <CustomChart
                    options={options}
                    series={series}
                    height={80}
                />
            </Box>
        </Box>
    );
};


export default BTCDominanceSmallBox;