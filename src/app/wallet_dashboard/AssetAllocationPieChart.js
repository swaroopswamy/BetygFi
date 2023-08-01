import React from "react";

import dynamic from "next/dynamic";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });


const AssetAllocationPieChart = () => {
    const options = {
        chart: {
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false,
            },
        },
     
        grid: {
            show: false,
        },
        legend: {
            show: true,
        },
        dataLabels: {
            enabled: false,
        },
        tooltip: {
            enabled: false,
        },
        labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],

       
    };
    const series = [1, 4, 5, 3, 2];
    return (
        <>
            <ApexCharts options={options} series={series} type="pie" height={250} />
        </>
    );
};

export default AssetAllocationPieChart;