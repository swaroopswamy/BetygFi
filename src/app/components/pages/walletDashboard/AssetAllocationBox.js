import React from "react";
import { useSelector } from "react-redux";
import { Box, SkeletonCircle, Text, useColorMode } from "@chakra-ui/react";
import isEmpty from "is-empty";
import TooltipComp from "../../tooltipComp";
import CustomChart from "../../graph";

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
      fontFamily: "Inter",
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
          <Text variant={"smallTableHeader"}>Assets Allocation</Text>
          <TooltipComp label="Assets allocation chart shows the value distribution of an individual wallet among different assets i.e., Token, Cryptocurrencies." />
        </Box>
        <Box>
          {assetAllocationData?.isLoading && (
            <Box p={"30px"} layerStyle={"flexAlignCenterJustifyCenter"}>
              <SkeletonCircle size={250}></SkeletonCircle>
            </Box>
          )}

          {assetAllocationData?.isSuccess &&
            (isEmpty(assetAllocationData?.data) ? (
              <Box layerStyle={"flexAlignCenterJustifyCenter"} height={"245px"}>
                <Text variant={"noDataText"}>No Data Available</Text>
              </Box>
            ) : (
              <>
                <CustomChart
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
