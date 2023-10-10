"use client";
import {
  Box,
  Image,
  Text,
  useColorModeValue,
  useColorMode,
  Flex,
  Tooltip,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import "/styles/styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchDefiFeeRevenueData } from "../../../../redux/defi_dashboard_data/dataSlice";

let USDollar = new Intl.NumberFormat("en-US");

function DefiFeeRevenueChart() {
  const searchParam = useSearchParams();
  const { colorMode } = useColorMode();
  const dispatch = useDispatch();
  const Definitions =
    "DeFi fee is the amount of value DeFi has collected by providing services and revenue reflects the earnings or profits of the DeFi available for distribution.";

  const defi = searchParam.get("defi");
  const blockchainSelected = useSelector(
    (state) => state?.dashboardTableData?.blockchainType
  );
  const DefiFeeRevenueData = useSelector(
    (state) => state?.defiDashboardData?.DefiFeeRevenueData
  );

  const getFeeRevenueDataHandler = () => {
    const payload = {
      defi: defi,
      blockchain: blockchainSelected,
    };
    dispatch(fetchDefiFeeRevenueData(payload));
  };

  useEffect(() => {
    getFeeRevenueDataHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blockchainSelected]);

  const options = {
    labels: ["Fee", "Revenue"],
    chart: {
      toolbar: {
        show: false,
      },
      type: "donut",
    },
    plotOptions: {
      pie: {
        customScale: 1,
      },
    },
    tooltip: {
      theme: colorMode,
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        return (
          '<div class="donut_tooltip">' +
          '<div class="donut_tooltip_text">' +
          w.globals.labels[seriesIndex] +
          "</div>" +
          '<div class="donut_tooltip_text">' +
          USDollar.format(series[seriesIndex]) +
          " USD" +
          "</div>" +
          "</div>"
        );
      },
    },
    stroke: {
      width: 0,
    },
    legend: {
      show: true,
      position: "left",
      horizontalAlign: "center",
      fontSize: "14px",
      fontFamily: "Inter",
      fontWeight: "400",
      labels: {
        colors: useColorModeValue("#16171B", "#FFFFFF"),
      },
      markers: {
        offsetY: 2,
      },
      formatter: function (text, opts) {
        return [
          text,
          USDollar.format(opts.w.globals.series[opts.seriesIndex]) + " USD",
        ];
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#FF5C01", "#24A48A"],
  };

  return (
    <>
      <Box
        width={{ base: "100%", md: "100%", bigSize: "50%" }}
        display={"flex"}
        flexDirection={"column"}
        bgColor={useColorModeValue("#FFFFFF", "#202020")}
        alignContent={"center"}
        borderRadius={"6px"}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box padding={"15px 0 20px 20px"}>
            <Flex>
              <Text
                fontSize={"18px"}
                fontWeight={600}
                lineHeight={"20px"}
                color={useColorModeValue("#16171B", "#FFFFFF")}
              >
                DeFi Fee and Revenue
              </Text>
              <Tooltip
                label={Definitions}
                bgColor={useColorModeValue("rgba(97, 97, 97, 0.92)", "#FFF")}
                padding="4px 8px"
                fontWeight={400}
                fontSize={"10px"}
              >
                <Image
                  width={"12px"}
                  height={"12px"}
                  flexShrink={"0"}
                  mt={"7px"}
                  ml={"3px"}
                  alt=""
                  src="/images/Frame.svg"
                ></Image>
              </Tooltip>
            </Flex>
          </Box>

          {/* <Button
            variant={"outline"}
            size={"xs"}
            _light={{ colorScheme: "#F5F5F7", stroke: "#000" }}
            _dark={{ colorScheme: "#191919", stroke: "#333" }}
            strokeWidth={"1px"}
            mt={"15px"}
            mr={"20px"}
            onClick={() => {
              router.push(`/defi_dashboard/`)
            }}
          >

            <Text
              _light={{ color: "#16171B" }}
              _dark={{ color: "#FFFFFF" }}
              fontSize={"14px"}
              fontWeight={"400"}
              lineHeight={"10px"}
            >
              View More
            </Text>

          </Button> */}
        </Box>

        <Box
          display={{ base: "none", md: "block" }}
          //width={{ base: "100%", md: "50%" }}
          padding={"25px 50px 20px 10px"}
          fontSize={"14px"}
          fontWeight={400}
          lineHeight={"10px"}
          height={"280px"}
          justifyContent={"center"}
        >
          {DefiFeeRevenueData?.isError && (
            <>
              <Box p="20px" textAlign={"center"} height={"245px"} colSpan={1}>
                <Text variant={"noDataText"}>No data available</Text>
              </Box>
            </>
          )}
          {DefiFeeRevenueData?.isSuccess && (
            <Chart
              options={options}
              series={[
                DefiFeeRevenueData.data.totalFees,
                DefiFeeRevenueData.data.totalRevenue,
              ]}
              type={options.chart.type}
              height={"250px"}
            />
          )}
        </Box>

        <Box
          display={{ base: "block", md: "none" }}
          //width={{ base: "100%", md: "50%" }}
          padding={"70px 20px 20px 20px"}
          fontSize={"14px"}
          fontWeight={400}
          lineHeight={"10px"}
          height={"280px"}
          justifyContent={"center"}
        >
          {DefiFeeRevenueData?.isSuccess && (
            <Chart
              options={options}
              series={[
                DefiFeeRevenueData.data.totalFees,
                DefiFeeRevenueData.data.totalRevenue,
              ]}
              type={options.chart.type}
              height={"250px"}
            />
          )}
        </Box>

        <Box
          display={"flex"}
          gap={"10px"}
          justifyContent={"right"}
          mr={"20px"}
          mb={"10px"}
        >
          <Text
            color={"#A8ADBD"}
            fontSize={"12px"}
            fontWeight={400}
            lineHeight={"20px"}
          >
            Last Update
          </Text>
          <Text
            fontSize={"12px"}
            fontWeight={400}
            lineHeight={"20px"}
            color={colorMode === "light" ? "#16171B" : "#FFF"}
          >
            3 mins ago
          </Text>
        </Box>
      </Box>
    </>
  );
}

export default DefiFeeRevenueChart;
