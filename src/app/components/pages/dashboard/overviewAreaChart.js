import { Box, useColorModeValue } from "@chakra-ui/react";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
const CustomChart = dynamic(() => import("/src/app/components/graph"));
import { useDispatch, useSelector } from "react-redux";
import { fetchOverviewGraphData } from "@/redux/dashboard_data/dataSlice";

const OverviewAreaChart = () => {
  const dispatch = useDispatch();

  const overviewGraphData = useSelector(
    (state) => state?.dashboardTableData?.OverviewGraphData
  );

  const blockchainSelected = useSelector(
    (state) => state?.dashboardTableData?.blockchainType
  );

  const categorySelected = useSelector(
    (state) => state?.dashboardTableData?.categorySelected
  );

  const getOverviewGraphDataHandler = () => {
    const payload = {
      category: categorySelected,
      startDate: "",
      endDate: "",
    };
    dispatch(fetchOverviewGraphData(payload));
  };

  useEffect(() => {
    getOverviewGraphDataHandler();
  }, [categorySelected]);

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
    tooltip: {
      enabled: false,
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
      name: "Prediction Markets",
      data: [1, 4, 5, 3, 2],
    },
    {
      name: "Derivatives",
      data: [5, 3, 1, 4, 1],
    },
    {
      name: "Insurance",
      data: [5, 2, 3, 1, 4],
    },
    {
      name: "Yield",
      data: [1, 5, 3, 5, 3],
    },
  ];
  return (
    <Box w={"100%"}>
      <CustomChart options={options} series={series} type="area" height={205} />
    </Box>
  );
};

export default OverviewAreaChart;
