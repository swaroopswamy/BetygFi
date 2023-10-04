import {
  useColorMode,
  useColorModeValue,
  Skeleton,
  Box,
  Text,
  Tooltip,
  Image,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import dynamic from "next/dynamic";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });
import isEmpty from "is-empty";
const BlockchainAllocationBox = () => {
  const { colorMode } = useColorMode();
  const walletBalanceData = useSelector(
    (state) => state?.walletDashboardTableData?.walletBalanceData
  );
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
      fontFamily: "Manrope",
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
        <Box
          display="flex"
          //justifyContent={"space-between"}
          alignItems={"center"}
          p="22px 25px"
        >
          <Text
            fontSize={"18px"}
            fontWeight={"600"}
            lineHeight={"20px"}
            _dark={{ color: "#FFF" }}
            _light={{ color: "#212121" }}
          >
            Blockchain Allocation
          </Text>
          <>
            <Tooltip
              label="Blockchain allocation chart shows the value distribution of an individual wallet assets among different Blockchains."
              bgColor={useColorModeValue("rgba(97, 97, 97, 0.92)", "#FFF")}
              padding="4px 8px"
              fontWeight={400}
              fontSize={"10px"}
            >
              <Image
                width={"12px"}
                height={"12px"}
                flexShrink={"0"}
                mt={"5px"}
                ml={"5px"}
                alt=""
                src="/images/Frame.svg"
              ></Image>
            </Tooltip>
          </>

          {/*   <Button
              fontSize={"10px"}
              fontWeight={400}
              lineHeight={"20px"}
              _dark={{ color: "#FFF", bgColor: "#191919", border: "1px solid #979AA5" }}
              _light={{ color: "#16171B", bgColor: "#979AA5", border: "1px solid #787878" }}
              padding={"7px 11px"}
            >
              View More
            </Button> */}
        </Box>

        <Box paddingLeft={"45px"}>
          {blockchainAllocationData?.isLoading && (
            <Skeleton>
              <Box
                height={"282px"}
                pt={"9px"}
                /*    display={"flex"}
                       justifyContent={"center"}
                       alignItems={"center"} */
              ></Box>
            </Skeleton>
          )}
          {blockchainAllocationData?.isError && (
            <Box
              _dark={{
                color: "#FFF",
              }}
              _light={{
                color: "#16171B",
              }}
              fontSize={"20px"}
              fontWeight={"400"}
              letterSpacing={"1px"}
              textAlign={"center"}
              height={"245px"}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              opacity={0.6}
            >
              No Data Available
            </Box>
          )}
          {blockchainAllocationData?.isSuccess &&
            (isEmpty(blockchainAllocationData?.data) ? (
              <>
                <Box
                  _dark={{
                    color: "#FFF",
                  }}
                  _light={{
                    color: "#16171B",
                  }}
                  fontSize={"20px"}
                  fontWeight={"400"}
                  letterSpacing={"1px"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  textAlign={"center"}
                  height={"245px"}
                  opacity={0.6}
                >
                  No Data Available
                </Box>
              </>
            ) : (
              <>
                <ApexCharts
                  options={options}
                  series={finalSeries}
                  type="treemap"
                  height={300}
                />
              </>
            ))}
        </Box>
      </Box>
    </>
  );
};

export default BlockchainAllocationBox;
