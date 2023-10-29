/* eslint-disable max-len */
"use client";
import React from "react";
import { Box, Text, useColorModeValue, useColorMode } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
import millify from "millify";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import TooltipComp from "/src/app/components/tooltipComp";

function DefiTVLChart() {
  const { colorMode } = useColorMode();
  const defiData = useSelector(
    (state) => state?.defiDashboardData?.DefiData?.data
  );

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
      type: 'bar'
    },
    plotOptions: {
      bar: {
        horizontal: true,
        distributed: true,
        barHeight: '30%',
        borderRadius: 2,
        labels: false,
      }
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false
    },
    grid: {
      strokeDashArray: 2,
      borderColor: useColorModeValue("#191919", "#36363A"),
      xaxis: {
        lines: {
          show: true,
        },
        stroke: {
          width: 1
        }
      },
      yaxis: {
        lines: {
          show: false,
        }
      }
    },
    tooltip: {
      theme: colorMode,
      custom: function ({ series, dataPointIndex, w }) {
        return (
          '<div class="donut_tooltip">' +
          '<div class="donut_tooltip_text">' +
          w.globals.labels[dataPointIndex] +
          "</div>" +
          '<div class="donut_tooltip_text">' +
          millify(series[0][dataPointIndex], { precision: 2, locales: "en-US" }) + " USD" +
          '</div>' +
          "</div>"
        );
      }
    },
    colors: ["#FF7272", "#9ADA8A", "#FF9F6A"],
    xaxis: {
      labels: {
        show: true,
        style: {
          colors: useColorModeValue("#16171B", "#FFF"),
          fontSize: "11px",
          fontFamily: "Inter",
          fontWeight: 400,
        },
        formatter: function (value) {
          return millify(value, {
            precision: 2,
            locales: "en-US"
          });
        }
      },
      axisTicks: {
        show: true,
        borderType: 'solid',
        width: 6,
        offsetX: 0,
        offsetY: 0
      },
    },
    yaxis: {
      labels: {
        show: true,
        style: {
          colors: useColorModeValue("#16171B", "#FFF"),
          fontSize: "11px",
          fontFamily: "Inter",
          fontWeight: 400,
        },
      }
    },
  };

  const series = [{
    data: [
      {
        x: 'Borrow',
        y: 1511121239
      },
      /*  {
      x: 'Supply',
      y: 158930,000,000
    }, */ 
      {
        x: 'TVL',
        y: defiData?.tvl !== undefined ? defiData?.tvl : 0
      }]
  }];

  return (
    <>
      <Box
        w={{ base: "100%", lg: "50%" }}
        height={"370px"}
        borderRadius={"6px"}
        bgColor={useColorModeValue('#FFFFFF', "#202020")}
      >
        <Box layerStyle={"spaceBetween"} p={"20px"} >
          <Box layerStyle={"flexCenter"} gap={"5px"}>
            <Text variant={"smallTableHeader"}>
                    DeFi Borrow/Supply/TVL
            </Text>
            <TooltipComp label="DeFi borrow is the total amount of assets that the DeFi has lent to its users. DeFi supply is the total amount of assets users have lent to the DeFi. Total value locked (TVL) is the real-time value of the assets that the DeFi holds." />
          </Box>
                

          {/* <Button
                  variant={'viewMore'}
                  // onClick={() => {
                  //     router.push("/defi_dashboard/defi_users");
                  // }}
              > View More </Button> */}
        </Box>

        <Box>
          {defiData?.tvl === null || defiData?.tvl === 0 && (
            <>
              <Box p="20px" textAlign={"center"} height={"245px"} colSpan={1}>
                <Text variant={"noDataText"}>No data available</Text>
              </Box>
            </>
          )}
          {
            defiData?.tvl > 0 && (
              <>
                <Chart
                  options={options}
                  series={series}
                  type={options.chart.type}
                  height={"280px"}
                />
              </>
            )
          }

        </Box>
      </Box>
    </>
  );
}

export default DefiTVLChart;

