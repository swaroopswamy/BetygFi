"use client"
import { Box, Image, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useColorModeValue, useColorMode, Flex, Tooltip, TableContainer, Table, Thead, Tr, Th, Tbody, Td } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import Chart from "react-apexcharts";

function BarChart() {
  const { colorMode } = useColorMode();

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
        custom: function({series, seriesIndex, dataPointIndex, w}) {
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
