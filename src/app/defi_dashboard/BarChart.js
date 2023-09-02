"use client"
import { Box, Image, Tab, TabList, TabPanel, TabPanels, TableCaption, Text, useColorModeValue, useColorMode, Flex, Tooltip, TableContainer, Table, Thead, Tr, Th, Tbody, Td, Spacer, Button } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

function BarChart() {
  const { colorMode } = useColorMode();
  const router = useRouter();
  const Definitions = "DeFi borrow is the total amount of assets DeFi has lent to its users. DeFi Supply is the total amount of assets users have lent to DeFi. Total value locked (TVL) is the amount assets DeFi holds.";
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
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        return (
          '<div class="donut_tooltip">' +
          '<div class="donut_tooltip_text">' +
          w.globals.labels[dataPointIndex] +
          "</div>" +
          '<div class="donut_tooltip_text">' +
          series[0][dataPointIndex] + "%" +
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
          fontWeight: 400,
        },
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
          fontWeight: 400,
        },
      }
    },
  };

  const series = [{
    data: [{
      x: 'Borrow',
      y: 100
    }, {
      x: 'Supply',
      y: 80
    }, {
      x: 'TVL',
      y: 59
    }]
  }]

  return (
    <>


      <Box
        display={"flex"}
        width={"50%"}
        flexDir={"column"}
        borderRadius={"6px"}
        alignContent={"center"}
        bgColor={useColorModeValue('#FFFFFF', "#202020")}
      //borderColor={useColorModeValue('#FFFFFF', '#202020')}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          // bgColor={useColorModeValue('#FFFFFF', "#191919")}
          alignContent={"center"}
          justifyContent={"space-between"}
        >
          <Box
            padding={"15px 0 20px 20px"}
          >
            <Flex>
              <Text
                fontSize={"18px"}
                fontWeight={"600"}
                lineHeight={"20px"}
                color={useColorModeValue("#16171B", "#FFFFFF")}
              >
                Defi Borrow/Supply/TVL
              </Text>
              <Tooltip label={Definitions}>
                <Image width={"12px"}
                  height={"12px"}
                  flexShrink={"0"}
                  mt={"5px"}
                  ml={"4px"}
                  alt=''
                  src="/images/Frame.svg">
                </Image>
              </Tooltip>
            </Flex>
          </Box>
          <Box
            padding={"5px 20px 5px 10px"}
            fontSize={"12px"}
          >
            <Chart
              options={options}
              series={series}
              type={options.chart.type}
              height={"300px"}
            />
          </Box>

          <Box
            _dark={{
              color: "#FFF"
            }}
            _light={{
              color: "#16171B"
            }}
            fontSize={"20px"}
            fontWeight={"400"}
            letterSpacing={"1px"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            textAlign={"center"}
            height={"245px"}
          >
            No Data Available
          </Box>
        </Box>
      </Box>

    </>
  );
}

export default BarChart;

