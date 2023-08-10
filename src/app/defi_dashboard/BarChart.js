"use client"
import { Box, Image, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useColorModeValue, useColorMode, Flex, Tooltip, TableContainer, Table, Thead, Tr, Th, Tbody, Td } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import Chart from "react-apexcharts";

function BarChart() {

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
        labels: false,
      }
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      curve: "smooth",
      width: 2,
    },
    grid: {
      strokeDashArray: 5,
      borderColor: '#36363A',
      xaxis: {
        lines: {
          show: true,
        }
      },
      yaxis: {
        lines: {
          show: false,
        }
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
      }
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
                padding={"20px 0 0 20px"}
              >
                <Text
                  fontSize={"15px"}
                  fontWeight={"400"}
                  lineHeight={"20px"}
                  color={useColorModeValue("#16171B", "#FFFFFF")}
                >
                  Defi Borrow/Supply/TVL
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

export default BarChart;

