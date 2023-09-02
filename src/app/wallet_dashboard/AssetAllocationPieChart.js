import React from "react";

import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
import { Box, Skeleton, SkeletonCircle, useColorMode } from "@chakra-ui/react";
import isEmpty from "is-empty";
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

            {assetAllocationData?.isSuccess && (isEmpty(assetAllocationData?.data) ?
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
                            textAlign={"center"}
                            height={"245px"}
                            display={"flex"}
                            alignItems={"center"}
                            justifyContent={"center"}
                        >
                            No Data Available
                        </Box>
                    </>
                )
                :
                (
                    <>
                        <ApexCharts options={options} series={series} type="pie" height={300} />
                    </>
                ))}

        </>
    );
};

export default AssetAllocationPieChart;