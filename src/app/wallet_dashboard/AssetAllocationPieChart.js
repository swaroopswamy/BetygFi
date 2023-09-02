import React from "react";

import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
import { Box, Skeleton, SkeletonCircle, useColorMode } from "@chakra-ui/react";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });


const AssetAllocationPieChart = () => {
    const { colorMode } = useColorMode();
    const walletBalanceData = useSelector((state) => state?.walletDashboardTableData?.walletBalanceData);
    const assetAllocationData = useSelector((state) => state?.walletDashboardTableData?.assetAllocationForAddress);

    const options = {
        chart: {
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false,
            },
        },
        plotOptions: {
            pie: {
              expandOnClick: true,
            }
        },
        grid: {
            show: false,
        },
        stroke: {
            width: 0,
        },
        legend: {
            show: true,
            fontSize: "14px",
            labels: {
                colors: colorMode === "light" ? "#000000" : "FFFFFF"
            },
            formatter: function (seriesName, opts) {
                return [seriesName, " ", opts.w.globals.series[opts.seriesIndex].toFixed(2), " %"];
            },
        },
        dataLabels: {
            enabled: false,
        },
        tooltip: {
            enabled: true,
           
        },
        labels: assetAllocationData.isSuccess && Object.keys(assetAllocationData?.data).map((item, i) => {
            return `${item}`
        }),


    };

    let series = assetAllocationData.isSuccess ? Object.values(assetAllocationData?.data).map(Number) : [];

    return (
        <>
            {assetAllocationData?.isLoading && (
                <Box
                    p={"30px"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                >
                    <SkeletonCircle size={250} >
                    </SkeletonCircle>

                </Box>)
            }

            {assetAllocationData?.isSuccess && <ApexCharts options={options} series={series} type="pie" height={300} />}

        </>
    );
};

export default AssetAllocationPieChart;