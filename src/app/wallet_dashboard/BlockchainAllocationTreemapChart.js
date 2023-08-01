import { useColorMode, useColorModeValue } from "@chakra-ui/react";
import React, { useEffect } from "react";

import dynamic from "next/dynamic";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });
const BlockchainAllocationTreemapChart = () => {
    const { colorMode } = useColorMode();
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
            enableShades: true,
            colorScale: {
                ranges: [
                    {

                        color: "#988FF8"
                    },
                    {

                        color: '#F48AE9'
                    }
                ]
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
                return [text, op.value]
            },
            offsetY: -4
        },
    };
    const series = [
        {
            data: [
                {
                    x: 'New Delhi',
                    y: 218
                },
                {
                    x: 'Kolkata',
                    y: 149
                },
                {
                    x: 'Mumbai',
                    y: 184
                },
                {
                    x: 'Ahmedabad',
                    y: 55
                },
                {
                    x: 'Bangaluru',
                    y: 84
                },
                {
                    x: 'Pune',
                    y: 31
                },
                {
                    x: 'Chennai',
                    y: 70
                },
                {
                    x: 'Jaipur',
                    y: 30
                },
                {
                    x: 'Surat',
                    y: 44
                },
                {
                    x: 'Hyderabad',
                    y: 68
                },
            ]
        }
    ];
    return (
        <>
            <ApexCharts options={options} series={series} type="treemap" height={300} />
        </>
    );
};

export default BlockchainAllocationTreemapChart;
