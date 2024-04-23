import { Box, Text, useColorMode } from "@chakra-ui/react";
import React from "react";
import CustomChart from "@components/graph";
import { useSelector } from "react-redux";
import millify from "millify";

const DeFiTVLByCategoryBox = () => {
    const { colorMode } = useColorMode();
    const DefiOverviewData = useSelector((state) => state?.dashboardData?.DefiOverviewData);

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
                            from: 0,
                            to: 100000000,
                            color: '#FF6161'
                        },
                        {
                            from: 100000000,
                            to: 1000000000,
                            color: '#52B12C'
                        }
                    ]
                }
            }
        }
    };

    const series = [{
        data: DefiOverviewData?.data?.tvlByCategory.map(item => ({
            x: item._id,
            y: item.totalTvl
        }))
    }];

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
                        DeFi TVL by category
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
                        ${millify(DefiOverviewData?.data?.totalTvl)}
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


export default DeFiTVLByCategoryBox;
