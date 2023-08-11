"use client"
import { Box, Image, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useColorModeValue, useColorMode, Flex, Tooltip, TableContainer, Table, Thead, Tr, Th, Tbody, Td } from "@chakra-ui/react";
import { color } from "framer-motion";
import React from "react";
import { useState } from "react";
import './styles.css';
import Chart from "react-apexcharts";

function DonutChart() {

  const { colorMode } = useColorMode();


  const options = {
      labels: ["Fee", "Revenue"],
      series: [31, 69],
      chart: {
        toolbar: {
          show: false,
        },
        type: 'donut'
      },
      plotOptions: {
        bar: {
          distributed: true,
          labels: false,
        }
      },
      tooltip: {
        theme: colorMode,
        custom: function({series, seriesIndex, dataPointIndex, w}) {
          return (
            '<div class="donut_tooltip">' +
              '<div class="donut_tooltip_text">' +
                w.globals.labels[seriesIndex] +
              "</div>" +
              '<div class="donut_tooltip_text">' +
                series[seriesIndex] + "%" +
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
        fontSize: '10px',
        fontWeight: '400',
        labels: {
          colors: useColorModeValue('#16171B', '#FFFFFF') 
        },
        markers: {
          offsetY: 2
        },
        formatter: function (text, opts) {
          return [text, opts.w.globals.series[opts.seriesIndex] + "%",]
        },
      },
      dataLabels: {
        enabled: false
      },
      colors: ["#FF5C01", "#24A48A"],
    };

  const series = [31, 69];

  return (
      <>
          <Box
            display={"inline-flex"}
            flexDir={"column"}
            alignContent={"center"}
            bgColor={useColorModeValue('#FFFFFF', "#202020")}
            border={"1px"}
            borderColor={useColorModeValue('#FFFFFF', '#202020')}
            borderRadius={"6px"}
          >
            <Box
              display={"flex"}
              flexDirection={"column"}
              // bgColor={useColorModeValue('#FFFFFF', "#191919")}
              alignContent={"center"}
              justifyContent={"space-between"}
            >
              <Box
                padding={"20px 0 20px 20px"}
              >
                <Text
                  fontSize={"15px"}
                  fontWeight={"400"}
                  lineHeight={"20px"}
                  color={useColorModeValue("#16171B", "#FFFFFF")}
                >
                  Defi Fee and Revenue
                </Text>
              </Box>
              <Box
                padding={"5px 20px 5px 10px"}
              >
                <Chart 
                    options={options}
                    series={series}
                    type={options.chart.type}
                    height={"200px"}
                />
              </Box> 
            </Box>
          </Box>
      </>
  );
}

export default DonutChart;

