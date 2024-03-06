import { Box, Select, Text, /* useColorMode, */ useColorModeValue } from "@chakra-ui/react";
import CustomChart from "@components/graph";
//import { useSelector } from "react-redux";
import Image from "next/image";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";

const randomData = [
    { x: new Date(2023, 11, 1), y: 5 },
    { x: new Date(2023, 11, 2), y: 30 },
    { x: new Date(2023, 11, 3), y: 15 },
    { x: new Date(2023, 11, 4), y: 5 },
    { x: new Date(2023, 11, 4), y: 6 },
];

const SandPSmallBox = () => {
  //  const { colorMode } = useColorMode();
    const SAPData = useSelector((state) => state.coinData.SAPData);

    const periods = ["7d", "14d", "30d"];

    //const SAPData = useSelector((state) => state.coinData.SAPData);
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
        // zoom: {
        //     enabled: false,
        // },
        zoom: {
            enabled: false,
            zoomIn: {
                autoScaleYaxis: true
            },
            zoomOut: {
                autoScaleYaxis: true
            },
            pan: {
                enabled: false,
                autoScaleYaxis: true
            },
            reset: {
                enabled: false
            }
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
            width={"30%"}
            height={"197px"}
            minW={"295px"}
            borderRadius={"8px"}
            mb={"15px"}
            p={"12px"}
            pb={"0px"}
            _light={{ bg: "#FFFFFF" }}
            _dark={{ bg: "#282828" }}
        >
            <Box layerStyle={"spaceBetween"} mb="12px">
                <Box layerStyle={"flexCenter"}>
                    <Image
                        height={32}
                        width={32}
                        src="/icons/bitcoin_logo.svg"
                        alt="trophy_icon"></Image>
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
                        borderColor={useColorModeValue("#E0E0E0", "#333")}
                        padding={"0"}
                    >
                        {
                            periods.map((period, i) => {
                                return (
                                    <option value={period} key={i}>{period}</option>
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
                <Box borderRadius={"16px"} layerStyle={"flexCenter"} bgColor={"rgba(36, 95, 0, 0.12)"} px={"12px"} py="3px" ml={"5px"}>
                    <Text variant={"baseStyle"} lineHeight={"17px"}
                        _light={{
                            color: "#245F00"
                        }}
                        _dark={{
                            color: "#60C000"
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


export default SandPSmallBox;
