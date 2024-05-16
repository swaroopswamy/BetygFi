import { Box, Text, useColorMode } from "@chakra-ui/react";
import React from "react";
import CustomChart from "@components/graph";
import { useSelector } from "react-redux";
import millify from "millify";

const DeFiTVLByBlockchainBox = () => {
    const { colorMode } = useColorMode();
    const DefiOverviewData = useSelector((state) => state?.defiDashboardData?.DefiOverviewData);

    const series = [{
        data: DefiOverviewData?.data?.tvlByChain?.slice(0, 15).map(item => ({
            x: item._id,
            y: item.totalTvl,
            fillColor: item.totalTvl >= 0 ? '#9ADA8A' : '#FF6161'
        }))
    }];

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
            theme: colorMode,
            y: {
                formatter: (value) => `$${millify(value, { precision: 2, locales: "en-US" })}`
            }
        },
        dataLabels: {
            enabled: true,
            style: {
                fontSize: '16px',
                fontWeight: 600,
                colors: ["#191919"],
            },
            formatter: function (text, op) {
                return [text, (millify(op.value, { precision: 2, locales: "en-US" }))];
            },
            allowOverlap: true,
            offsetY: -3,
        },
        plotOptions: {
            treemap: {
                enableShades: true,
                shadeIntensity: 0.5,
                reverseNegativeShade: true,
                dataLabels: {
                    format: "scale",
                },
                colorScale: {
                    inverse: false,
                },
            }
        }
    };

    return (
        <Box
            width={"30%"}
            height={"197px"}
            minW={"295px"}
            borderRadius={"8px"}
            mb={"15px"}
            mx={"10px"}
            _light={{ bg: "#FFFFFF" }}
            _dark={{ bg: "#282828" }}
        >
            <Box layerStyle={"spaceBetween"} pt={"15px"} mx={"15px"}>
                <Box layerStyle={"flexCenter"}>
                    <Text variant={"contentHeading3"} fontWeight={500}>
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
                        ${millify(DefiOverviewData?.data?.totalTvl === undefined ? "-" : DefiOverviewData?.data?.totalTvl)}
                    </Text>
                </Box>
            </Box>
            <Box mx={"10px"}>
                <CustomChart
                    type={"treemap"}
                    options={options}
                    series={series}
                    height={150}
                />
            </Box>
        </Box>
    );
};


export default DeFiTVLByBlockchainBox;
