import React from "react";

import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
import { useColorMode } from "@chakra-ui/react";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });


const AssetAllocationPieChart = () => {
    const { colorMode } = useColorMode();
    const walletBalanceData = useSelector((state) => state?.walletDashboardTableData?.walletBalanceData)
    console.log(walletBalanceData, 'walletBALANCE')
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
            fontSize: "10px",
            labels:{
                colors:colorMode === "light" ? "#000000" : "FFFFFF"
            },
            formatter: function(seriesName, opts) {
                return [seriesName, " - ", opts.w.globals.series[opts.seriesIndex].toFixed(2)," %"];
            },
        },
        dataLabels: {
            enabled: false,
        },
        tooltip: {
            enabled: true,
        },
        labels: walletBalanceData?.data?.data.map((item, i) => {
            return `${item?.Symbol}`
        }),


    };
    const series = walletBalanceData?.data?.data.map((item) => {
        console.log((item?.percentageValue.toFixed(2)))
        return item?.percentageValue
    });
    return (
        <>
            <ApexCharts options={options} series={series} type="pie" height={500} />
        </>
    );
};

export default AssetAllocationPieChart;