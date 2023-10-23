import React from "react";
import dynamic from "next/dynamic";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

const CustomChart = ({ options, series, type, height }) => {
  return (
    <ApexCharts options={options} series={series} type={type} height={height} />
  );
};

export default CustomChart;
