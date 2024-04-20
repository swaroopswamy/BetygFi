import { Box, useColorMode } from "@chakra-ui/react";
import React from "react";
import CustomChart from "@components/graph";

const HeatmapGraphBox = () => {
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
        tooltip: {
            enabled: true,
            theme: colorMode
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
            width={"100%"}
            height={"100%"}
            borderRadius={"8px"}
            _light={{ bg: "#FFFFFF" }}
            _dark={{ bg: "#282828" }}
            boxShadow={"0px 6px 6px 2px rgba(0, 0, 0, 0.15)"}
        >
            <Box borderRadius={"8px"}>
                <CustomChart
                    type={"treemap"}
                    options={options}
                    series={series}
                />
            </Box>
        </Box>
    );
};


export default HeatmapGraphBox;
