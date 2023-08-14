"use client"
import { Box, Image, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useColorModeValue, useColorMode, Flex, Tooltip, TableContainer, Table, Thead, Tr, Th, Tbody, Td, Spacer, Button } from "@chakra-ui/react";
import { color } from "framer-motion";
import React from "react";
import { useState } from "react";
import './styles.css';
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

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
            width={"100%"}
            display={"inline-flex"}
            _light={{bgColor:"#F0F0F5"}}
            _dark={{bgColor:"#191919"}}
          >
         <Box
          w='50%'
          display={"flex"}
          flexDirection={"column"}
          borderRadius={"6px"}
          ml={"20px"}
          _dark={{bg: "#202020"}}
          _light={{bg: "#FFFFFF"}}
          mr="10px"
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
              paddingTop={"15px"}
            >
              DeFi Asset Composition
            </Text>
            <Tooltip label="#Frame">
                          <Image width={"12px"}
                                height={"12px"}
                                flexShrink={"0"}
                                mt={"20px"}
                                ml={"5px"}
                                alt=''
                                src="/images/Frame.svg">
                          </Image>
                        </Tooltip>
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
                        Asset Name
                        </Text>
                        <Image src={useColorModeValue("/images/Definame(light).svg","/images/Definame(black).svg")} alt="" ml={"2px"}></Image>
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
                        <Image src={useColorModeValue("/images/Definame(light).svg","/images/Definame(black).svg")} alt="" ml={"2px"}></Image>
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
                        Value
                        </Text>
                        <Image src={useColorModeValue("/images/Definame(light).svg","/images/Definame(black).svg")} alt="" ml={"2px"}></Image>
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
                          width={5}
                          height={5}
                          alt='logo'
                          src="/images/Venus.svg"
                        ></Image>
                      </>

                      <Text ml="6px"> Venus</Text>
                    </Box>
                  </Td>

                  <Td>
                    <Box
                      display={"flex"}
                      alignItems={"center"}
                    >
                      <Text
                        fontSize={"10px"}
                        fontWeight={"400"}
                        lineHeight={"20px"}
                        ml="6px"
                        _light={{ color: "#16171B" }}
                        _dark={{ color: "#FFFFFF" }}
                      >
                        60%
                      </Text>
                    </Box>
                  </Td>
                  <Td>USD 356,456,560</Td>
                </Tr>

                <Tr>
                  <Td
                    _dark={{ color: "#FFFFFF" }}
                    _light={{ color: "#16171B" }} >
                    <Box
                      display={"flex"}
                      alignItems={"center"}
                    >
                      <>
                        <Image
                          width={5}
                          height={5}
                          alt='logo'
                          src="/images/Morphoaave.svg"
                        ></Image>
                      </>

                      <Text ml="6px">  Morpho Aave </Text>
                    </Box>
                  </Td>
                  <Td><Box
                    display={"flex"}
                    alignItems={"center"}
                  >
                    <Text
                      fontSize={"10px"}
                      fontWeight={"400"}
                      lineHeight={"20px"}
                      ml="6px"
                      _light={{ color: "#16171B" }}
                      _dark={{ color: "#FFFFFF" }}
                    >
                      40%
                    </Text>
                  </Box></Td>
                  <Td>USD 256,456,560</Td>
                </Tr>

                <Tr>
                  <Td
                    _dark={{ color: "#FFFFFF" }}
                    _light={{ color: "#16171B" }} >
                    <Box
                      display={"flex"}
                      alignItems={"center"}
                    >
                      <>
                        <Image
                          width={5}
                          height={5}
                          alt='logo'
                          src="/images/Compoundv3.svg"
                        ></Image>
                      </>

                      <Text ml="6px"> Compound V3 </Text>
                    </Box></Td>
                  <Td><Box
                    display={"flex"}
                    alignItems={"center"}
                  >
                    <Text
                      fontSize={"10px"}
                      fontWeight={"400"}
                      lineHeight={"20px"}
                      ml="6px"
                      _light={{ color: "#16171B" }}
                      _dark={{ color: "#FFFFFF" }}
                    >
                      13.09%
                    </Text>
                  </Box></Td>
                  <Td>USD 46,456,560</Td>
                </Tr>

                <Tr>
                  <Td
                    _dark={{ color: "#FFFFFF" }}
                    _light={{ color: "#16171B" }} >
                    <Box
                      display={"flex"}
                      alignItems={"center"}
                    >
                      <>
                        <Image
                          width={5}
                          height={5}
                          alt='logo'
                          src="/images/Radiantv2.svg"
                        ></Image>
                      </>

                      <Text ml="6px">  Radiant V2 </Text>
                    </Box></Td>
                  <Td><Box
                    display={"flex"}
                    alignItems={"center"}
                  >
                    <Text
                      fontSize={"10px"}
                      fontWeight={"400"}
                      lineHeight={"20px"}
                      ml="6px"
                      _light={{ color: "#16171B" }}
                      _dark={{ color: "#FFFFFF" }}
                    >
                      15%
                    </Text>
                  </Box></Td>
                  <Td>USD 66,456,560</Td>
                </Tr>
                    
                <Tr>
                  <Td _dark={{ color: "#FFFFFF" }}
                    _light={{ color: "#16171B" }} >
                    <Box
                      display={"flex"}
                      alignItems={"center"}
                    >
                      <>
                        <Image
                          width={5}
                          height={5}
                          alt='logo'
                          src="/images/Fluidtokens.svg"
                        ></Image>
                        <Image src={colorMode === 'light' ? ("/images/F(light).svg") : ("/images/F(dark).svg")} ml={"-13px"} alt=''></Image>
                      </>

                      <Text ml="10px"> FluidTokens </Text>
                    </Box></Td>
                  <Td><Box
                    display={"flex"}
                    alignItems={"center"}
                  >
                    <Text
                      fontSize={"10px"}
                      fontWeight={"400"}
                      lineHeight={"20px"}
                      ml="6px"
                      _light={{ color: "#16171B" }}
                      _dark={{ color: "#FFFFFF" }}
                    >
                      13.09%
                    </Text>
                  </Box></Td>
                  <Td>USD 56,456,560</Td>
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
              width={"50%"}
              display={"flex"}
              flexDirection={"column"}
              bgColor={useColorModeValue('#FFFFFF', "#202020")}
              alignContent={"center"}
              justifyContent={"space-between"}
              borderRadius={"6px"}
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
                marginBottom={"60px"}
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

