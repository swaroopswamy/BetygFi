import React from "react";

import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
import { Box, Flex, Image, Skeleton, SkeletonCircle, Text, Tooltip, useColorMode, useColorModeValue } from "@chakra-ui/react";
import isEmpty from "is-empty";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

const AssetAllocationBox = () => {
  const { colorMode } = useColorMode();
  const assetAllocationData = useSelector(
    (state) => state?.walletDashboardTableData?.assetAllocationForAddress
  );

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      fontFamily: "Manrope",
    },
    plotOptions: {
      pie: {
        expandOnClick: true,
      },
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
        colors: colorMode === "light" ? "#000000" : "FFFFFF",
      },
      formatter: function (seriesName, opts) {
        return [
          seriesName,
          " ",
          opts.w.globals.series[opts.seriesIndex].toFixed(2),
          "%",
        ];
      },
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      enabled: true,
      theme: colorMode,
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        let data = w?.config?.series[seriesIndex];
        let label = w?.config?.labels[seriesIndex];
        console.log(label, data);
        return (
          '<div class="graph_box">' +
          '<div class="inner_box">' +
          '<div class="graph_inner_text_big" >' +
          label +
          "</div>" +
          "<br/>" +
          '<div class="graph_inner_text_sm" >' +
          data +
          "%" +
          "</div>" +
          "</div>" +
          "</div>"
        );
      },
    },
    labels:
      assetAllocationData.isSuccess &&
      Object.keys(assetAllocationData?.data).map((item, i) => {
        return `${item}`;
      }),
  };

  let series = assetAllocationData.isSuccess
    ? Object.values(assetAllocationData?.data).map(Number)
    : [];

  return (
    <>
      <Box
        w={{ base: "90%", bigSize: "50%", md: "90%" }}
        display={"flex"}
        flexDirection={"column"}
        borderRadius={"6px"}
        _dark={{
          bg: "#202020",
        }}
        _light={{
          bg: "#FFFFFF",
        }}
        height={"380px"}
      >
        {/* <Box
            display="flex"
            p="22px 25px"
          > */}
        <Flex
          height={"30px"}
          borderRadius={"6px"}
          _dark={{
            bg: "#202020",
            color: "#FFFFFF",
          }}
          _light={{
            bg: "#FFFFFF",
            color: "#16171B",
          }}
        >
          <Text
            fontSize={"18px"}
            fontWeight={"600"}
            lineHeight={"20px"}
            _dark={{ color: "#FFF" }}
            _light={{ color: "#212121" }}
            mt={"20px"}
            ml={"25px"}
          >
            Assets Allocation
          </Text>
          <>
            <Tooltip
              bgColor={useColorModeValue("rgba(97, 97, 97, 0.92)", "#FFF")}
              padding="4px 8px"
              fontWeight={400}
              fontSize={"10px"}
              label="Assets allocation chart shows the value distribution of an individual wallet among different assets i.e., Token, Cryptocurrencies."
            >
              <Image
                width={"12px"}
                height={"12px"}
                flexShrink={"0"}
                mt={"25px"}
                ml={"5px"}
                alt=""
                src="/images/Frame.svg"
              ></Image>
            </Tooltip>
          </>
        </Flex>
        {/* </Box> */}
        <Box mt={"20px"}>
          {assetAllocationData?.isLoading && (
            <Box
              p={"30px"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <SkeletonCircle size={250}></SkeletonCircle>
            </Box>
          )}

          {assetAllocationData?.isSuccess &&
            (isEmpty(assetAllocationData?.data) ? (
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
                  textAlign={"center"}
                  height={"245px"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  opacity={0.6}
                >
                  No Data Available
                </Box>
              </>
            ) : (
              <>
                <ApexCharts
                  options={options}
                  series={series}
                  type="pie"
                  height={300}
                />
              </>
            ))}
        </Box>
      </Box>
    </>
  );
};

export default AssetAllocationBox;
