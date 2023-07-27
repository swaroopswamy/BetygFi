import React from "react";

import dynamic from "next/dynamic";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });


const SplineAreaChart = () => {
    const options = {
        chart: {
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false,
            },
        },
        colors: ["#0A7F00"],
        grid: {
            show: false,
        },
        legend: {
            show: false,
        },
        dataLabels: {
            enabled: false,
        },
        tooltip: {
            enabled: false,
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.9,
                stops: [0, 90, 100],
            },
        },

        stroke: {
            show: true,
            curve: "smooth",
            width: 1,
        },
        xaxis: {
            show: false,
            categories: ["May", "2021", "May", "2021", "May", "2021"],
            labels: {
                show: false,
            },
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            },
        },
        yaxis: {
            show: false,
            labels: {
                show: false,

            },
        },
    };
    const series = [
        {
            name: "Series 1",
            data: [1, 4, 5, 3, 2],
        },
    ];
    return (
        <>
            <ApexCharts options={options} series={series} type="area" height={80} />
        </>
    );
};

export default SplineAreaChart;