import { Box, Text, useColorMode } from "@chakra-ui/react";
import React from "react";
import CustomChart from "@components/graph";

const DeFiTVLByBlockchainBox = () => {
    const { colorMode } = useColorMode();
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
        dataLabels: {
            enabled: true,
            style: {
                fontSize: '12px',
            },
            formatter: function (text, op) {
                return [text, op.value];
            },
            offsetY: -4
        },
        tooltip: {
            enabled: true,
            theme: colorMode
        },
        plotOptions: {
            treemap: {
                enableShades: true,
                shadeIntensity: 0.5,
                reverseNegativeShade: true,
                colorScale: {
                    ranges: [
                        {
                            from: -6,
                            to: 0,
                            color: '#CD363A'
                        },
                        {
                            from: 0.001,
                            to: 6,
                            color: '#52B12C'
                        }
                    ]
                }
            }
        }
    };

    const series = [
        {
            data: [
                {
                    x: 'GBTC',
                    y: 2.9
                },
                {
                    x: 'UNH',
                    y: -1.5
                },
                {
                    x: 'ABBV',
                    y: 1.2
                },
                {
                    x: 'LLY',
                    y: 1.3
                },
                {
                    x: 'DHR',
                    y: 5.1
                },
                {
                    x: 'ABT',
                    y: -2.3
                },
                {
                    x: 'VSC',
                    y: 2.1
                },
                {
                    x: 'TMO',
                    y: 0.3
                },
                {
                    x: 'MDT',
                    y: 0.12
                },
                {
                    x: 'MMM',
                    y: -2.31
                },
                {
                    x: 'NKE',
                    y: 3.98
                },
                {
                    x: 'IYT',
                    y: 1.67
                }
            ]
        }
    ];

    return (
        <Box
            width={"30%"}
            height={"197px"}
            minW={"295px"}
            borderRadius={"8px"}
            mb={"15px"}
            mx={"10px"}
            p={"12px"}
            _light={{ bg: "#FFFFFF" }}
            _dark={{ bg: "#282828" }}
        >
            <Box layerStyle={"spaceBetween"}>
                <Box layerStyle={"flexCenter"}>
                    <Text variant={"contentHeading3"} fontWeight={500} ml={"5px"}>
                        DeFi TVL in Blockchain
                    </Text>
                </Box>
                <Box layerStyle={"flexCenter"} gap={"3px"}>
                    <Text variant={"footnoteText"} fontSize={"12px"} fontWeight={500}
                        _light={{ color: "#757575" }}
                        _dark={{ color: "#A5A5A5" }}
                    >
                        Total:
                    </Text>
                    <Text variant={"footnoteText"} fontSize={"12px"} fontWeight={500}>
                        $876B
                    </Text>
                </Box>
            </Box>
            <Box borderRadius={"6px"}>
                <CustomChart
                    type={"treemap"}
                    options={options}
                    series={series}
                    height={145}
                    width={"100%"}
                />
            </Box>
        </Box>
    );
};


export default DeFiTVLByBlockchainBox;
