import { useColorMode, useColorModeValue, Skeleton, Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import './styles.css'
import dynamic from "next/dynamic";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });
const BlockchainAllocationTreemapChart = () => {
    const { colorMode } = useColorMode();
    const walletBalanceData = useSelector((state) => state?.walletDashboardTableData?.walletBalanceData)
    const options = {
        chart: {
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false,
            },
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
                fontSize: '12px',
                fontWeight: '600',
                color: "#000000"
            },
            formatter: function (text, op) {
                return [text, op.value + "%",]
            },
            offsetY: -4
        },
        tooltip: {
            theme: colorMode,
            custom: function ({ series, seriesIndex, dataPointIndex, w }) {

                let xAxisName = w?.config?.series[0].data;
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
    };
    const series = [
        {
            data: [
                {
                    x: 'Ethereum',
                    y: 25
                },
                {
                    x: 'Arbitrum',
                    y: 15
                },
                {
                    x: 'Polygon',
                    y: 10
                },
                {
                    x: 'Optimism',
                    y: 5
                },
                {
                    x: 'Avalanche',
                    y: 15
                },
                {
                    x: 'Mixin',
                    y: 5
                },
                {
                    x: 'Solana',
                    y: 5
                },
                {
                    x: 'Kava',
                    y: 20
                },
            ]
        }
    ];
    return (
        <>
        {!walletBalanceData?.isSuccess && (
            <Skeleton>
                <Box
                    height={"282px"}
                    pt={"9px"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                > 
                    
                </Box>
                </Skeleton>)
            }
              {walletBalanceData?.isSuccess && <ApexCharts options={options} series={series} type="treemap" height={300} />}
        </>
    );
};

export default BlockchainAllocationTreemapChart;
