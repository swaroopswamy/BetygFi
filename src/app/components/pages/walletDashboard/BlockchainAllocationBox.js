import { useColorMode, Skeleton, Box, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import isEmpty from "is-empty";
import dynamic from "next/dynamic";

const TooltipComp = dynamic(() => import("@/app/components/tooltipComp"));
const CustomChart = dynamic(() => import("@/app/components/graph"));

const BlockchainAllocationBox = () => {
  const { colorMode } = useColorMode();
  const blockchainAllocationData = useSelector(
    (state) => state?.walletDashboardTableData?.blockchainAllocationForAddress
  );

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      width: "100%",
      fontFamily: "Inter",
    },
    colors: [
      "#988FF8",
      "#F48AE9",
      "#E57F7F",
      "#0FBFBF",
      "#99B1E9",
      "#EDBF45",
      "#95DA7D",
      "#F8D8E6",
      "#6575F6",
    ],
    grid: {
      show: true,
    },
    legend: {
      show: false,
    },
    plotOptions: {
      treemap: {
        distributed: false,
        enableShades: true,
      },
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: "16px",
        fontWeight: "600",
        colors: ["#000000"],
      },
      formatter: function (text, op) {
        if (op.value > 0) {
          return [text.split(" ")[0], text.split(" ")[1]];
        }
      },
      offsetY: -4,
    },
    tooltip: {
      theme: colorMode,
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        let xAxisName = w?.config?.series[seriesIndex].data;
        if (xAxisName[dataPointIndex]["y"] > 0) {
          return (
            '<div class="graph_box">' +
            '<div class="inner_box">' +
            '<div class="graph_inner_text_big" >' +
            xAxisName[dataPointIndex]["x"].split(" ")[0] +
            "</div>" +
            '<div class="graph_inner_text_sm">' +
            xAxisName[dataPointIndex]["y"] +
            "</div>" +
            "<br/>" +
            '<div class="graph_inner_text_big" >' +
            xAxisName[dataPointIndex]["x"].split(" ")[1] +
            "</div>" +
            "</div>" +
            "</div>"
          );
        }
      },
    },
  };

  const series = [
    {
      data: Object.keys(blockchainAllocationData?.data || {})?.map(
        (item, i) => {
          return {
            x: item,
            y: blockchainAllocationData?.data[item],
          };
        }
      ),
    },
  ];

  let toScaleSeries = [
    {
      name: "Largest",
      data: [], // More than 20%
    },
    {
      name: "Smaller",
      data: [], // 10 - 20%
    },
    {
      name: "Smallest",
      data: [], // Under 10%
    },
    {
      name: "Other",
      data: [], // Only Other Item
    },
  ];

  let otherItem = {
    x: "Other",
    y: 0,
  };

  let bucketSums = [0, 0, 0, 0];
  let scale = [60, 20, 15, 5];

  Object.keys(blockchainAllocationData?.data || {})?.map((item, i) => {
    let val = Number(blockchainAllocationData?.data[item]);
    if (val >= 20.0) {
      bucketSums[0] += val;
      toScaleSeries[0].data.push({
        x: item,
        y: val,
      });
    }
    if (val < 20.0 && val >= 10.0) {
      bucketSums[1] += val;
      toScaleSeries[1].data.push({
        x: item,
        y: val,
      });
    }
    if (val < 10.0 && val >= 1.0) {
      bucketSums[2] += val;
      toScaleSeries[2].data.push({
        x: item,
        y: val,
      });
    }
    if (val < 1.0) {
      bucketSums[3] += val;
      otherItem.y += val;
    }
  });

  if (otherItem.y != 0) toScaleSeries[3].data.push(otherItem);

  let finalSeries = [];
  toScaleSeries.map((item, i) => {
    if (item.data.length !== 0) {
      item.data.map((obj, j) => {
        obj.x = obj.x + " " + obj.y.toFixed(2) + "%";
        obj.y = (obj.y * scale[i]) / bucketSums[i];
        obj.y = obj.y;
      });
      finalSeries.push(item);
    }
  });

  return (
    <>
      <Box
        w={{ base: "90%", bigSize: "50%", md: "90%" }}
        layerStyle={"flexColumn"}
        borderRadius={"6px"}
        _dark={{
          bg: "#202020",
        }}
        _light={{
          bg: "#FFFFFF",
        }}
        height={"380px"}
      >
        <Box layerStyle={"flexCenter"} p="22px 25px">
          <Text variant={"smallTableHeader"}>Blockchain Allocation</Text>
          <TooltipComp label="Blockchain allocation chart shows the value distribution of an individual wallet assets among different Blockchains." />
        </Box>

        <Box paddingLeft={"45px"}>
          {blockchainAllocationData?.isLoading && (
            <Skeleton>
              <Box height={"282px"} pt={"9px"}></Box>
            </Skeleton>
          )}
          {blockchainAllocationData?.isError && (
            <Box layerStyle={"flexAlignCenterJustifyCenter"} height={"245px"}>
              <Text variant={"noDataText"}>No Data Available</Text>
            </Box>
          )}
          {blockchainAllocationData?.isSuccess &&
            (isEmpty(blockchainAllocationData?.data) ? (
              <Box layerStyle={"flexAlignCenterJustifyCenter"} height={"245px"}>
                <Text variant={"noDataText"}>No Data Available</Text>
              </Box>
            ) : (
              <CustomChart
                options={options}
                series={finalSeries}
                type="treemap"
                height={300}
              />
            ))}
        </Box>
      </Box>
    </>
  );
};

export default BlockchainAllocationBox;
