import { useColorMode, useColorModeValue, Skeleton, Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import './styles.css'
import dynamic from "next/dynamic";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });
const BlockchainAllocationTreemapChart = () => {
    const { colorMode } = useColorMode();
    const walletBalanceData = useSelector((state) => state?.walletDashboardTableData?.walletBalanceData)
    const blockchainAllocationData = useSelector((state) => state?.walletDashboardTableData?.blockchainAllocationForAddress);

    const options = {
        chart: {
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false,
            },
            width: '100%'
        },
        colors: ["#988FF8", "#F48AE9", "#E57F7F", "#0FBFBF", "#99B1E9", "#EDBF45", "#95DA7D", "#F8D8E6", "#6575F6"],
        grid: {
            show: true,
        },
        legend: {
            show: false,
        },
        plotOptions: {
            treemap: {
                distributed: true,
                enableShades: false
            }
        },
        dataLabels: {

            enabled: true,
            style: {
                fontSize: '16px',
                fontWeight: '600',
                color: "#000000"
            },
            formatter: function (text, op) {
                if (op.value > 0) {

                    return [text, op.value + "%",]
                }
            },
            offsetY: -4
        },
        tooltip: {
            theme: colorMode,
            custom: function ({ series, seriesIndex, dataPointIndex, w }) {

                let xAxisName = w?.config?.series[0].data;
                if (xAxisName[dataPointIndex]["y"] > 0) {
                    return (
                        '<div class="graph_box">' +
                        '<div class="graph_inner_text_big" >' +
                        '<div class="inner_box">' +
                        xAxisName[dataPointIndex]["x"] +
                        '<div class="graph_inner_text_sm">' +
                        xAxisName[dataPointIndex]["y"] + '%' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '</div>')
                }

            }
        }
    };

    const series = [
        {
            data: Object.keys(blockchainAllocationData?.data || {})?.map((item, i) => {
                return {
                    x: item,
                    y: blockchainAllocationData?.data[item]
                }
            })
        }]
    return (
        <>
            {blockchainAllocationData?.isLoading && (
                <Skeleton>
                    <Box
                        height={"282px"}
                        pt={"9px"}
                    /*    display={"flex"}
                       justifyContent={"center"}
                       alignItems={"center"} */
                    >

                    </Box>
                </Skeleton>)
            }
            {
                blockchainAllocationData?.isError && (
                    <Box
                        _dark={{
                            color: "#FFF"
                        }}
                        _light={{
                            color: "#16171B"
                        }}
                        fontSize={"20px"}
                        fontWeight={"400"}
                        letterSpacing={"1px"}
                        textAlign={"center"}
                        height={"245px"}
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"center"}
                    >
                        No Data Available
                    </Box>
                )
            }
            {blockchainAllocationData?.isSuccess && (
                blockchainAllocationData?.data === null ?
                    (
                        <>
                            <Box
                                _dark={{
                                    color: "#FFF"
                                }}
                                _light={{
                                    color: "#16171B"
                                }}
                                fontSize={"20px"}
                                fontWeight={"400"}
                                letterSpacing={"1px"}
                                display={"flex"}
                                alignItems={"center"}
                                justifyContent={"center"}
                                textAlign={"center"}
                                height={"245px"}
                            >
                                No Data Available
                            </Box>
                        </>
                    )
                    :
                    (
                        <>
                            <ApexCharts options={options} series={series} type="treemap" height={300} />
                        </>
                    )

            )}
        </>
    );
};

export default BlockchainAllocationTreemapChart;
