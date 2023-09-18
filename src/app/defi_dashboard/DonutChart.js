"use client"
import { Box, Image, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useColorModeValue, useColorMode, Flex, Tooltip, TableContainer, Table, Thead, Tr, Th, Tbody, Td, Spacer, Button } from "@chakra-ui/react";
import { color } from "framer-motion";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import './styles.css';
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

let USDollar = new Intl.NumberFormat('en-US');

function DonutChart() {

  const { colorMode } = useColorMode();
  const router = useRouter();
  const Definitions = "DeFi fee is the amount of value DeFi has collected by providing services and revenue reflects the earnings or profits of the DeFi available for distribution.";

  const options = {
    labels: ["Fee", "Revenue"],
    chart: {
      toolbar: {
        show: false,
      },
      type: 'donut'
    },
    plotOptions: {
      pie: {
        customScale: 1
      }
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
          USDollar.format(series[seriesIndex]) + " USD" +
          '</div>' +
          "</div>"
        );
      }
    },
    stroke: {
      width: 0,
    },
    legend: {
      show: true,
      position: 'left',
      horizontalAlign: 'center',
      fontSize: '14px',
      fontWeight: '400',
      labels: {
        colors: useColorModeValue('#16171B', '#FFFFFF')
      },
      markers: {
        offsetY: 2
      },
      formatter: function (text, opts) {
        return [text, USDollar.format(opts.w.globals.series[opts.seriesIndex]) + " USD"]
      },
    },
    dataLabels: {
      enabled: false
    },
    colors: ["#FF5C01", "#24A48A"],
  };

  const series = [194090, 33900];

  return (
    <>
      <Box
        width={"50%"}
        display={"flex"}
        flexDirection={"column"}
        bgColor={useColorModeValue('#FFFFFF', "#202020")}
        alignContent={"center"}
        borderRadius={"6px"}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box
            padding={"15px 0 20px 20px"}
          >
            <Flex>
              <Text
                fontSize={"18px"}
                fontWeight={600}
                lineHeight={"20px"}
                color={useColorModeValue("#16171B", "#FFFFFF")}
              >
                DeFi Fee and Revenue
              </Text>
              <Tooltip label={Definitions}
                bgColor={useColorModeValue("rgba(97, 97, 97, 0.92)", "#FFF")}
                padding="4px 8px"
                fontWeight={400}
                fontSize={"10px"}

              >
                <Image width={"12px"}
                  height={"12px"}
                  flexShrink={"0"}
                  mt={"7px"}
                  ml={"3px"}
                  alt=''
                  src="/images/Frame.svg">
                </Image>
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
          padding={"5px 50px 20px 10px"}
          fontSize={"14px"}
          fontWeight={400}
          lineHeight={"10px"}
          height={"280px"}
          justifyContent={"center"}
        >
          <Chart
            options={options}
            series={series}
            type={options.chart.type}
            height={"250px"}
          />
        </Box>

        {/* <Box
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
        </Box> */}

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
            color={colorMode === 'light' ? "#16171B" : "#FFF"}
          >
            3 mins ago
          </Text>
        </Box>
      </Box>
    </>
  );
}

export default DonutChart;

