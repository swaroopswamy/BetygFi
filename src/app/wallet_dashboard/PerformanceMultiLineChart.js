import { useColorMode, useColorModeValue } from "@chakra-ui/react";
import React, { useEffect } from "react";

import dynamic from "next/dynamic";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });
const PerformanceMultiLineChart = () => {
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
    xaxis: {
      categories: ["May", "2021", "May", "2021", "May", "2021"],
      labels: {
        show: true,
        style: {
          colors: useColorModeValue("#16171B", "#FFF"),
          fontSize: "11px",
          fontWeight: 400,
        },
      },
    },
    yaxis: {
      labels: {
        show: true,
        style: {
          colors: useColorModeValue("#16171B", "#FFF"),
          fontSize: "11px",
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
      name: "Series 1",
      data: [1, 4, 5, 3, 2],
    },
    {
      name: "Series 2",
      data: [5, 3, 1, 4, 1],
    },
    {
      name: "Series 3",
      data: [5, 2, 3, 1, 4],
    },
  ];
  return (
    <>
      <ApexCharts options={options} series={series} type="line" height={250} />
    </>
  );
};

export default PerformanceMultiLineChart;
