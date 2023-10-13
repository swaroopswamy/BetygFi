import { Box, useColorMode, useColorModeValue } from "@chakra-ui/react";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });
import CustomChart from "/src/app/components/graph";

const OverviewAreaChart = () => {
  const options = {
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    colors: ["#29A88E", "#DE50CF", "#ACC94C", "#FF5C00"],
    grid: {
      show: true,
    },
    legend: {
      show: false,
    },
    dataLabels: {
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
    {
      name: "Series 4",
      data: [1, 5, 3, 5, 3],
    },
  ];
  return (
    <>
      <Box w={"100%"}>
        <CustomChart options={options} series={series} type="area" height={205} />
      </Box>
    </>
  );
};

export default OverviewAreaChart;
