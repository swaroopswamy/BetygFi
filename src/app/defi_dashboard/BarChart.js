"use client"
import { Box, Image, Tab, TabList, TabPanel, TabPanels, TableCaption, Text, useColorModeValue, useColorMode, Flex, Tooltip, TableContainer, Table, Thead, Tr, Th, Tbody, Td, Spacer, Button } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React from "react";
import { useState } from "react";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

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
         display={'inline-flex'}
         width={"100%"}
         my="10px"
        _light={{bgColor:"#F0F0F5"}}
        _dark={{bgColor:"#191919"}}
        >
       
       <Box
          width={"50%"}
          display={"flex"}
          flexDirection={"column"}
          borderRadius={"6px"}
          ml={"20px"}
          _dark={{
            bg: "#202020"}}
          _light={{
            bg: "#FFFFFF"}}
          mr={"10px"}
        >
         <Flex
            height={"50px"}
            borderRadius={"6px"}
            _dark={{
              bg: "#202020",
              color: "#FFFFFF"
            }}
            _light={{
              bg: "#FFFFFF",
              color: "#16171B"
            }} >
            <Text
              _light={{ color: "#16171B" }}
              _dark={{ color: "#FFFFFF" }}
              fontSize={"15px"}
              fontWeight={"400"}
              lineHeight={"20px"}
              ml={"20px"}
              mt={"20px"}
            >
              DeFi Users
            </Text>
            <Spacer />
            <Button 
            variant={"outline"} 
            size={"xs"}
            _light={{ colorScheme: "#F5F5F7", stroke: "#000"}}
            _dark={{ colorScheme: "#191919", stroke: "#333" }}
             strokeWidth={"1px"}
            mt={"15px"}
            mr={"20px"}
            >
            <Text
            _light={{ color: "#16171B" }}
            _dark={{ color: "#FFFFFF" }}
            fontSize={"10px"}
            fontWeight={"400"}
            lineHeight={"10px"}
            >
            View More
            </Text>
            </Button>
          </Flex>
          <TableContainer>
            <Table variant='simple'>
              <Thead
                _dark={{
                  color: "#FFFFFF",
                  bg: "#191919"
                }}
                _light={{
                  color: "#16171B",
                  bg: "#F5F5F7"
                }}
                fontSize={"10px"}
                fontWeight={"400"}
                lineHeight={"20px"}
                letterSpacing={"1px"}
                textTransform={"uppercase"}>
                <Tr>

                  <Th>
                    <Flex>
                      <Text 
                        _light={{ color: "#434347" }}
                        _dark={{ color: "#A8ADBD" }}
                        fontSize={"10px"}
                        fontWeight={"400"}
                        lineHeight={"20px"}
                        letterSpacing={"1px"}
                        textTransform={"uppercase"}
                        >
                        Users Address
                        </Text>
                        <Tooltip label="#Frame">
                          <Image width={"12px"}
                                height={"12px"}
                                flexShrink={"0"}
                                mt={"4px"}
                                ml={"2px"}
                                alt=''
                                src="/images/Frame.svg">
                          </Image>
                        </Tooltip>
                    </Flex>
                  </Th>

                  <Th>
                    <Flex >
                      <Text _light={{ color: "#434347" }}
                        _dark={{ color: "#A8ADBD" }}
                        fontSize={"10px"}
                        fontWeight={"400"}
                        lineHeight={"20px"}
                        letterSpacing={"1px"}
                        textTransform={"uppercase"}>
                        Share
                        </Text>
                        <Tooltip label="#Frame">
                          <Image width={"12px"}
                                height={"12px"}
                                flexShrink={"0"}
                                mt={"4px"}
                                ml={"2px"}
                                alt=''
                                src="/images/Frame.svg">
                          </Image>
                        </Tooltip>
                    </Flex>
                  </Th>

                  <Th>
                    <Flex>
                      <Text _light={{ color: "#434347" }}
                        _dark={{ color: "#A8ADBD" }}
                        fontSize={"10px"}
                        fontWeight={"400"}
                        lineHeight={"20px"}
                        letterSpacing={"1px"}
                        textTransform={"uppercase"}
                        >
                        Top Tokens
                        </Text>
                        <Tooltip label="#Frame">
                          <Image width={"12px"}
                                height={"12px"}
                                flexShrink={"0"}
                                mt={"4px"}
                                ml={"1px"}
                                alt=''
                                src="/images/Frame.svg">
                          </Image>
                        </Tooltip>
                        <Image src={useColorModeValue("/images/Definame(light).svg","/images/Definame(black).svg")} alt=""></Image>
                         </Flex>
                  </Th>
                </Tr>
              </Thead>

              <Tbody
                fontSize={"10px"}
                fontWeight={"400"}
                lineHeight={"20px"}
                _dark={{ bgColor: "#202020" }}
                _light={{ bgColor: "#FFF" }} >
                <Tr>
                  <Td _dark={{ color: "#FFFFFF" }}
                    _light={{ color: "#16171B" }}
                  >

                    <Box
                      display={"flex"}
                      alignItems={"center"}
                    >
                      <>
                        <Image
                          width={"10px"}
                          height={"16px"}
                          alt=''
                          src="/images/Ethereumlogo.svg"
                        ></Image>
                      </>

                      <Text 
                      _light={{ color: "#16171B" }}
                      _dark={{ color: "#FFFFFF" }}
                      fontSize={"9px"}
                      fontWeight={"400"}
                      lineHeight={"20px"}
                      ml={"10px"}>0xe984…1cc2   $39,689,191</Text>
                    </Box>
                  </Td>

                  <Td>
                    <Box
                      display={"flex"}
                      alignItems={"center"}
                    >
                      <Text
                        fontSize={"9px"}
                        fontWeight={"400"}
                        lineHeight={"20px"}
                        ml="6px"
                        _light={{ color: "#16171B" }}
                        _dark={{ color: "#FFFFFF" }}
                      >
                        13.09%
                      </Text>
                    </Box>
                  </Td>
                  <Td>
                    <Box
                     display={"flex"}
                     alignItems={"center"}
                     >
                     <Image
                      width={"7px"}
                      height={"12px"}
                      alt=''
                      src="/images/Ethereumlogo.svg"></Image>
                      <Text
                      _light={{ color: "#16171B" }}
                      _dark={{ color: "#FFFFFF" }}
                      fontSize={"9px"}
                      fontWeight={"400"}
                      lineHeight={"20px"}
                      letterSpacing={"1px"}
                      ml={"5px"}
                      >ETH</Text>
                      <Text
                      _light={{ color: "#16171B" }}
                      _dark={{ color: "#FFFFFF" }}
                      fontSize={"9px"}
                      fontWeight={"400"}
                      lineHeight={"20px"}
                      letterSpacing={"1px"}
                      textTransform={"uppercase"}
                      opacity={"0.5"}
                      ml={"5px"}
                      >50.11%</Text>
                     <Image
                      width={"13px"}
                      height={"12px"}
                      alt=''
                      ml={"10px"}
                      src="/images/Polygonmaticlogo.svg"></Image>
                      <Text
                      _light={{ color: "#16171B" }}
                      _dark={{ color: "#FFFFFF" }}
                      fontSize={"9px"}
                      fontWeight={"400"}
                      lineHeight={"20px"}
                      letterSpacing={"1px"}
                      ml={"5px"}
                      >MATIC</Text>
                      <Text
                      _light={{ color: "#16171B" }}
                      _dark={{ color: "#FFFFFF" }}
                      fontSize={"9px"}
                      fontWeight={"400"}
                      lineHeight={"20px"}
                      letterSpacing={"1px"}
                      textTransform={"uppercase"}
                      opacity={"0.5"}
                      ml={"5px"}
                      >49.11%</Text>
                    </Box>
                  </Td>
                </Tr>

                <Tr>
                <Td _dark={{ color: "#FFFFFF" }}
                    _light={{ color: "#16171B" }}
                  >

                    <Box
                      display={"flex"}
                      alignItems={"center"}
                    >
                      <>
                        <Image
                          width={"14px"}
                          height={"14px"}
                          alt=''
                          src="/images/Tronlogo.svg"
                        ></Image>
                      </>

                      <Text 
                      _light={{ color: "#16171B" }}
                      _dark={{ color: "#FFFFFF" }}
                      fontSize={"9px"}
                      fontWeight={"400"}
                      lineHeight={"20px"}
                      ml={"10px"}>0xe984…1cc2   $39,689,191</Text>
                    </Box>
                  </Td>

                  <Td>
                    <Box
                      display={"flex"}
                      alignItems={"center"}
                    >
                      <Text
                        fontSize={"9px"}
                        fontWeight={"400"}
                        lineHeight={"20px"}
                        ml="6px"
                        _light={{ color: "#16171B" }}
                        _dark={{ color: "#FFFFFF" }}
                      >
                        13.09%
                      </Text>
                    </Box>
                  </Td>
                  <Td>
                    <Box
                     display={"flex"}
                     alignItems={"center"}
                     >
                     <Image
                      width={"7px"}
                      height={"12px"}
                      alt=''
                      src="/images/Ethereumlogo.svg"></Image>
                      <Text
                      _light={{ color: "#16171B" }}
                      _dark={{ color: "#FFFFFF" }}
                      fontSize={"9px"}
                      fontWeight={"400"}
                      lineHeight={"20px"}
                      letterSpacing={"1px"}
                      ml={"5px"}
                      >ETH</Text>
                      <Text
                      _light={{ color: "#16171B" }}
                      _dark={{ color: "#FFFFFF" }}
                      fontSize={"9px"}
                      fontWeight={"400"}
                      lineHeight={"20px"}
                      letterSpacing={"1px"}
                      textTransform={"uppercase"}
                      opacity={"0.5"}
                      ml={"5px"}
                      >50.11%</Text>
                     <Image
                      width={"13px"}
                      height={"12px"}
                      alt=''
                      ml={"10px"}
                      src="/images/Polygonmaticlogo.svg"></Image>
                      <Text
                      _light={{ color: "#16171B" }}
                      _dark={{ color: "#FFFFFF" }}
                      fontSize={"9px"}
                      fontWeight={"400"}
                      lineHeight={"20px"}
                      letterSpacing={"1px"}
                      ml={"5px"}
                      >MATIC</Text>
                      <Text
                      _light={{ color: "#16171B" }}
                      _dark={{ color: "#FFFFFF" }}
                      fontSize={"9px"}
                      fontWeight={"400"}
                      lineHeight={"20px"}
                      letterSpacing={"1px"}
                      textTransform={"uppercase"}
                      opacity={"0.5"}
                      ml={"5px"}
                      >49.11%</Text>
                    </Box>
                  </Td>
                </Tr>

                <Tr>
                <Td _dark={{ color: "#FFFFFF" }}
                    _light={{ color: "#16171B" }}
                  >

                    <Box
                      display={"flex"}
                      alignItems={"center"}
                    >
                      <>
                        <Image
                          width={"12px"}
                          height={"12px"}
                          alt=''
                          src="/images/Binancelogo.svg"
                        ></Image>
                      </>

                      <Text 
                      _light={{ color: "#16171B" }}
                      _dark={{ color: "#FFFFFF" }}
                      fontSize={"9px"}
                      fontWeight={"400"}
                      lineHeight={"20px"}
                      ml={"10px"}>0xe984…1cc2   $39,689,191</Text>
                    </Box>
                  </Td>

                  <Td>
                    <Box
                      display={"flex"}
                      alignItems={"center"}
                    >
                      <Text
                        fontSize={"9px"}
                        fontWeight={"400"}
                        lineHeight={"20px"}
                        ml="6px"
                        _light={{ color: "#16171B" }}
                        _dark={{ color: "#FFFFFF" }}
                      >
                        13.09%
                      </Text>
                    </Box>
                  </Td>
                  <Td>
                    <Box
                     display={"flex"}
                     alignItems={"center"}
                     >
                     <Image
                      width={"7px"}
                      height={"12px"}
                      alt=''
                      src="/images/Ethereumlogo.svg"></Image>
                      <Text
                      _light={{ color: "#16171B" }}
                      _dark={{ color: "#FFFFFF" }}
                      fontSize={"9px"}
                      fontWeight={"400"}
                      lineHeight={"20px"}
                      letterSpacing={"1px"}
                      ml={"5px"}
                      >ETH</Text>
                      <Text
                      _light={{ color: "#16171B" }}
                      _dark={{ color: "#FFFFFF" }}
                      fontSize={"9px"}
                      fontWeight={"400"}
                      lineHeight={"20px"}
                      letterSpacing={"1px"}
                      textTransform={"uppercase"}
                      opacity={"0.5"}
                      ml={"5px"}
                      >50.11%</Text>
                     <Image
                      width={"13px"}
                      height={"12px"}
                      alt=''
                      ml={"10px"}
                      src="/images/Polygonmaticlogo.svg"></Image>
                      <Text
                      _light={{ color: "#16171B" }}
                      _dark={{ color: "#FFFFFF" }}
                      fontSize={"9px"}
                      fontWeight={"400"}
                      lineHeight={"20px"}
                      letterSpacing={"1px"}
                      ml={"5px"}
                      >MATIC</Text>
                      <Text
                      _light={{ color: "#16171B" }}
                      _dark={{ color: "#FFFFFF" }}
                      fontSize={"9px"}
                      fontWeight={"400"}
                      lineHeight={"20px"}
                      letterSpacing={"1px"}
                      textTransform={"uppercase"}
                      opacity={"0.5"}
                      ml={"5px"}
                      >49.11%</Text>
                    </Box>
                  </Td>
                </Tr>

                <Tr>
                <Td _dark={{ color: "#FFFFFF" }}
                    _light={{ color: "#16171B" }}
                  >

                    <Box
                      display={"flex"}
                      alignItems={"center"}
                    >
                      <>
                        <Image
                          width={"12px"}
                          height={"12px"}
                          alt=''
                          src="/images/Arbitrumlogo.svg"
                        ></Image>
                      </>

                      <Text 
                      _light={{ color: "#16171B" }}
                      _dark={{ color: "#FFFFFF" }}
                      fontSize={"9px"}
                      fontWeight={"400"}
                      lineHeight={"20px"}
                      ml={"10px"}>0xe984…1cc2   $39,689,191</Text>
                    </Box>
                  </Td>

                  <Td>
                    <Box
                      display={"flex"}
                      alignItems={"center"}
                    >
                      <Text
                        fontSize={"9px"}
                        fontWeight={"400"}
                        lineHeight={"20px"}
                        ml="6px"
                        _light={{ color: "#16171B" }}
                        _dark={{ color: "#FFFFFF" }}
                      >
                        13.09%
                      </Text>
                    </Box>
                  </Td>
                  <Td>
                    <Box
                     display={"flex"}
                     alignItems={"center"}
                     >
                     <Image
                      width={"7px"}
                      height={"12px"}
                      alt=''
                      src="/images/Ethereumlogo.svg"></Image>
                      <Text
                      _light={{ color: "#16171B" }}
                      _dark={{ color: "#FFFFFF" }}
                      fontSize={"9px"}
                      fontWeight={"400"}
                      lineHeight={"20px"}
                      letterSpacing={"1px"}
                      ml={"5px"}
                      >ETH</Text>
                      <Text
                      _light={{ color: "#16171B" }}
                      _dark={{ color: "#FFFFFF" }}
                      fontSize={"9px"}
                      fontWeight={"400"}
                      lineHeight={"20px"}
                      letterSpacing={"1px"}
                      textTransform={"uppercase"}
                      opacity={"0.5"}
                      ml={"5px"}
                      >50.11%</Text>
                     <Image
                      width={"13px"}
                      height={"12px"}
                      alt=''
                      ml={"10px"}
                      src="/images/Polygonmaticlogo.svg"></Image>
                      <Text
                      _light={{ color: "#16171B" }}
                      _dark={{ color: "#FFFFFF" }}
                      fontSize={"9px"}
                      fontWeight={"400"}
                      lineHeight={"20px"}
                      letterSpacing={"1px"}
                      ml={"5px"}
                      >MATIC</Text>
                      <Text
                      _light={{ color: "#16171B" }}
                      _dark={{ color: "#FFFFFF" }}
                      fontSize={"9px"}
                      fontWeight={"400"}
                      lineHeight={"20px"}
                      letterSpacing={"1px"}
                      textTransform={"uppercase"}
                      opacity={"0.5"}
                      ml={"5px"}
                      >49.11%</Text>
                    </Box>
                  </Td>
                </Tr>
                    
                <Tr>
                <Td _dark={{ color: "#FFFFFF" }}
                    _light={{ color: "#16171B" }}
                  >

                    <Box
                      display={"flex"}
                      alignItems={"center"}
                    >
                      <>
                        <Image
                          width={"13px"}
                          height={"12px"}
                          alt=''
                          src="/images/Polygonmaticlogo.svg"
                        ></Image>
                      </>

                      <Text 
                      _light={{ color: "#16171B" }}
                      _dark={{ color: "#FFFFFF" }}
                      fontSize={"9px"}
                      fontWeight={"400"}
                      lineHeight={"20px"}
                      ml={"10px"}>0xe984…1cc2   $39,689,191</Text>
                    </Box>
                  </Td>

                  <Td>
                    <Box
                      display={"flex"}
                      alignItems={"center"}
                    >
                      <Text
                        fontSize={"9px"}
                        fontWeight={"400"}
                        lineHeight={"20px"}
                        ml="6px"
                        _light={{ color: "#16171B" }}
                        _dark={{ color: "#FFFFFF" }}
                      >
                        13.09%
                      </Text>
                    </Box>
                  </Td>
                  <Td>
                    <Box
                     display={"flex"}
                     alignItems={"center"}
                     >
                     <Image
                      width={"7px"}
                      height={"12px"}
                      alt=''
                      src="/images/Ethereumlogo.svg"></Image>
                      <Text
                      _light={{ color: "#16171B" }}
                      _dark={{ color: "#FFFFFF" }}
                      fontSize={"9px"}
                      fontWeight={"400"}
                      lineHeight={"20px"}
                      letterSpacing={"1px"}
                      ml={"5px"}
                      >ETH</Text>
                      <Text
                      _light={{ color: "#16171B" }}
                      _dark={{ color: "#FFFFFF" }}
                      fontSize={"9px"}
                      fontWeight={"400"}
                      lineHeight={"20px"}
                      letterSpacing={"1px"}
                      textTransform={"uppercase"}
                      opacity={"0.5"}
                      ml={"5px"}
                      >50.11%</Text>
                     <Image
                      width={"13px"}
                      height={"12px"}
                      alt=''
                      ml={"10px"}
                      src="/images/Polygonmaticlogo.svg"></Image>
                      <Text
                      _light={{ color: "#16171B" }}
                      _dark={{ color: "#FFFFFF" }}
                      fontSize={"9px"}
                      fontWeight={"400"}
                      lineHeight={"20px"}
                      letterSpacing={"1px"}
                      ml={"5px"}
                      >MATIC</Text>
                      <Text
                      _light={{ color: "#16171B" }}
                      _dark={{ color: "#FFFFFF" }}
                      fontSize={"9px"}
                      fontWeight={"400"}
                      lineHeight={"20px"}
                      letterSpacing={"1px"}
                      textTransform={"uppercase"}
                      opacity={"0.5"}
                      ml={"5px"}
                      >49.11%</Text>
                    </Box>
                  </Td>
                </Tr>

                <Tr>
                <Td _dark={{ color: "#FFFFFF" }}
                    _light={{ color: "#16171B" }}
                  >
                </Td>               
                 <Td _dark={{ color: "#FFFFFF" }}
                    _light={{ color: "#16171B" }}
                  >
                  </Td>
                <Td _dark={{ color: "#FFFFFF" }}
                    _light={{ color: "#16171B" }}
                  >
                   <Box
                    display={"flex"}
                    alignItems={"center"}
                    paddingLeft={"100px"}
                    >
                <Text
                _light={{color:"#434347"}}
                _dark={{color:"#A8ADBD"}}
                fontSize={"10px"}
                fontWeight={"400"}
                lineHeight={"20px"}
                >
                 Last Update
                </Text>
                <Text
                _light={{color:"#16171B"}}
                _dark={{color:"#FFFFFF"}}
                fontSize={"10px"}
                fontWeight={"400"}
                lineHeight={"20px"}
                ml={"3px"}
                >
                 3 mins ago
                </Text>
                </Box>
                </Td>
                </Tr>

              </Tbody>
            </Table>
          </TableContainer>
        </Box>

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
          </Box>
      </>
  );
}

export default BarChart;

