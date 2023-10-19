import { Box, useColorMode, useColorModeValue } from "@chakra-ui/react";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import CustomChart from "/src/app/components/graph";
import { useDispatch, useSelector } from "react-redux";
import { fetchOverviewGraphData } from "@/redux/dashboard_data/dataSlice";
import millify from "millify";

const OverviewAreaChart = () => {
  const { colorMode } = useColorMode();

  const overviewGraphData = useSelector(
      (state) => state?.dashboardTableData?.OverviewGraphData
  );

  const categorySelected = useSelector(
    (state) => state?.dashboardTableData?.categorySelected
  );

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      stacked: false,
      animations: {
        enabled: false
      }
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
    tooltip: {
      enabled: true,
      theme: colorMode,
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        let val = millify(series[seriesIndex][dataPointIndex], {
          precision: 2,
          locales: "en-US"
        })
        return (
          '<div class="donut_tooltip">' +
          '<div class="donut_tooltip_text">' +
            w.config.series[seriesIndex].name +
          "</div>" +
          '<div class="donut_tooltip_text">' +
            val +
          " USD" +
          "</div>" +
          "</div>"
        );
      }
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 0.7,
        opacityFrom: 0.5,
        opacityTo: 0.1,
        stops: [0, 90, 100],
      },
    },
    stroke: {
      show: true,
      curve: "smooth",
      width: [2, 2],
    },
    xaxis: {
      type: "datetime",
      labels: {
        show: true,
        style: {
          colors: useColorModeValue("#16171B", "#FFF"),
          fontSize: "11px",
          fontWeight: 300,
        },
      },
      axisTicks: {
        show: false,
      },
      max: new Date("2023-10-07").getTime(),
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
          return millify(value, {
            precision: 2,
            locales: "en-US"
        });
        },
      },
    },
  };

  const series = [];
  
  overviewGraphData?.isSuccess && overviewGraphData?.data?.graphData.map((category, i) => {
    if (categorySelected.includes(category?.name) || categorySelected.length === 0) {
      let categorySeries = {
        name: category?.name,
        data: category?.graphData.slice(0, -2),
      }
      series.push(categorySeries);
    }
  })

  return (
    <>
      <Box w={"100%"}>
        <CustomChart options={options} series={series} type="area" height={205} />
      </Box>
    </>
  );
};

export default OverviewAreaChart;

