import { useColorMode, useColorModeValue, Skeleton, Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import dynamic from "next/dynamic";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });


const PerformanceMultiLineChart = () => {
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
    colors: ["#DE50CF", "#F3BA2F", "#9ADA8A"],
    grid: {
      show: true,
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      curve: "straight",
      dashArray: [0, 5, 5],
      width: 2,
    },
    tooltip: {
      theme: colorMode
    },
    xaxis: {
      categories: ["May", "2021", "May", "2021", "May", "2021"],
      labels: {
        show: true,
        style: {
          colors: useColorModeValue("#16171B", "#FFF"),
          fontSize: "12px",
          fontWeight: 400,
        },
      },
    },
    yaxis: {
      labels: {
        show: true,
        style: {
          colors: useColorModeValue("#16171B", "#FFF"),
          fontSize: "12px",
          fontWeight: 400,
        },
        formatter: (value) => {
          return `$${value}B`;
        },
      },
    },
  };
  const series = [
    {
      name: "Wallet Portfolio",
      //data: [1, 4, 5, 3, 2],
    },
    {
      name: "BTC",
      //data: [5, 3, 1, 4, 1],
    },
    {
      name: "ETH Trend",
      //data: [5, 2, 3, 1, 4],
    },
  ];
  return (
    <>
    {!walletBalanceData?.isSuccess && (
            <Skeleton>
                <Box
                    width={"1074px"}
                    height={"217px"}
                    pt={"9px"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                > 
                    
                </Box>
                </Skeleton>)
            }
             {walletBalanceData?.isSuccess && <ApexCharts options={options} series={series} type="line" height={250} />}
    </>
  );
};

export default PerformanceMultiLineChart;
