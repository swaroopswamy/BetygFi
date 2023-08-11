"use client"
import { Box, Image, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useColorModeValue,  Flex, Tooltip, TableContainer, Table, Thead, Tr, Th, Tbody, Td, Spacer, Button, useColorMode } from "@chakra-ui/react";
import { DownloadIcon } from '@chakra-ui/icons'

import React from "react";
import ViewmoreDefiusers from "./ViewmoreDefiusers";

const TVLBox = () => {
  const { colorMode } = useColorMode();
    return (

    <Box 
        _dark={{ bg: "#191919" }}
        _light={{ bg: " #F0F0F5" }}>
   
            <Box
            display={'inline-flex'}
            w="100%"
           // my="10px"
           _light={{bgColor:"#F0F0F5"}}
           _dark={{bgColor:"#191919"}}
            >
        <Box
            w={"331px"}
            height={"349px"}
            display={"flex"}
            flexDirection={"column"}
            borderRadius={"6px"}
            ml={"20px"}
            _dark={{
                bg: "#202020",
                border: "1px solid #272727"
            }}
            _light={{
                bg: "#FFFFFF",
                border: "1px solid #ADADAD"
            }}
            mr="10px">
            <Box p={"20px"} >
                <Text
                    _light={{color:"#16171B"}}
                    _dark={{color:"#FFFFFF"}}
                    fontSize={"24px"}
                    fontWeight={"400"}
                    lineHeight={"20px"}
                    letterSpacing={"2.4px"}
                    textTransform={"uppercase"}>
                    $3.7b
                </Text>
                <Text
                    _light={{color:"#16171B"}}
                    _dark={{color:"#FFFFFF"}}
                    textAlign={"left"}
                    fontSize={"10px"}
                    fontWeight={"400"}
                    lineHeight={"10px"}
                    pt={"10px"}
                >
                    Total Value Locked
                </Text>
                <Image src={colorMode === 'light' ? ("/images/TVLline(light).svg"):("/images/TVLline(dark).svg")} pt={"20px"}></Image>
                <Flex>
                    <Text
                        _light={{color:"#16171B"}}
                        _dark={{color:"#FFFFFF"}}
                        fontSize={"10px"}
                        fontWeight={"400"}
                        lineHeight={"30px"}
                        pt={"20px"}>
                        Market Cap<br></br>
                        Token Price<br></br>
                        Fully Diluted Valuation<br></br>
                        Borrowed<br></br>
                        Users<br></br>
                        User Deposits<br></br>
                    </Text>
                    <Spacer />
                    <Text
                        _light={{color:"#16171B"}}
                        _dark={{color:"#FFFFFF"}}
                        fontSize={"10px"}
                        fontWeight={"400"}
                        lineHeight={"30px"}
                        textAlign={"right"}
                        pt={"20px"}>
                        $207.83m<br></br>
                        $0.02337<br></br>
                        $231.35m<br></br>
                        $84.15m<br></br>
                        38,682<br></br>
                        $304,481,901<br></br>
                    </Text>
                </Flex>
                <Flex>
                 <Button 
                    variant={"outline"} 
                    size={"xs"} 
                    borderRadius={"2px"} 
                    border={"1px"}
                    solid={"#333"}
                    _light={{bgColor:"#F5F5F7"}}
                    _dark={{bgColor:"#191919"}}
                    mt={"15px"}>
                    <Flex>
                    <DownloadIcon pt={"5px"}></DownloadIcon>
                    <Text
                        _light={{color:"#16171B"}}
                        _dark={{color:"#FFFFFF"}}
                        textAlign={"right"}
                        fontSize={"10px"}
                        fontWeight={"400"}
                        lineHeight={"10px"}
                        pt={"3px"}
                        paddingLeft={"2px"}
                        >
                        .CSV
                    </Text>
                    </Flex>
                    </Button>
                <Spacer />
                <Text
                _light={{color:"#434347"}}
                _dark={{color:"#A8ADBD"}}
                fontSize={"10px"}
                fontWeight={"400"}
                lineHeight={"20px"}
                pt={"25px"}>
                 Last Update
                </Text>
                <Text
                _light={{color:"#16171B"}}
                _dark={{color:"#FFFFFF"}}
                fontSize={"10px"}
                fontWeight={"400"}
                lineHeight={"20px"}
                pt={"25px"}
                pl={"3px"}
                >
                 3 mins ago
                </Text>
                </Flex>
            </Box>
        </Box>
            </Box>
        <Box
            display={'inline-flex'}
            w="100%"
            my="10px"
           _light={{bgColor:"#F0F0F5"}}
           _dark={{bgColor:"#191919"}}
        >
         <Box
          w='50%'
          height={"400px"}
          display={"flex"}
          flexDirection={"column"}
          borderRadius={"6px"}
          ml={"20px"}
          _dark={{
            bg: "#202020",
            border: "1px solid #272727"
          }}
          _light={{
            bg: "#FFFFFF",
            border: "1px solid #ADADAD"
          }}
          mr="10px"
        >
         <Flex
            height={"50px"}
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
              mr={"6px"}
              paddingTop={"15px"}
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
                <Tr height={"40px"}>
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
                      fontSize={"10px"}
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
                        fontSize={"10px"}
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
                      fontSize={"10px"}
                      fontWeight={"400"}
                      lineHeight={"20px"}
                      letterSpacing={"1px"}
                      ml={"5px"}
                      >ETH</Text>
                      <Text
                      _light={{ color: "#16171B" }}
                      _dark={{ color: "#FFFFFF" }}
                      fontSize={"10px"}
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
                      ml={"15px"}
                      src="/images/Polygonmaticlogo.svg"></Image>
                      <Text
                      _light={{ color: "#16171B" }}
                      _dark={{ color: "#FFFFFF" }}
                      fontSize={"10px"}
                      fontWeight={"400"}
                      lineHeight={"20px"}
                      letterSpacing={"1px"}
                      ml={"5px"}
                      >MATIC</Text>
                      <Text
                      _light={{ color: "#16171B" }}
                      _dark={{ color: "#FFFFFF" }}
                      fontSize={"10px"}
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

                <Tr height={"40px"}>
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
                      fontSize={"10px"}
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
                        fontSize={"10px"}
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
                      fontSize={"10px"}
                      fontWeight={"400"}
                      lineHeight={"20px"}
                      letterSpacing={"1px"}
                      ml={"5px"}
                      >ETH</Text>
                      <Text
                      _light={{ color: "#16171B" }}
                      _dark={{ color: "#FFFFFF" }}
                      fontSize={"10px"}
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
                      ml={"15px"}
                      src="/images/Polygonmaticlogo.svg"></Image>
                      <Text
                      _light={{ color: "#16171B" }}
                      _dark={{ color: "#FFFFFF" }}
                      fontSize={"10px"}
                      fontWeight={"400"}
                      lineHeight={"20px"}
                      letterSpacing={"1px"}
                      ml={"5px"}
                      >MATIC</Text>
                      <Text
                      _light={{ color: "#16171B" }}
                      _dark={{ color: "#FFFFFF" }}
                      fontSize={"10px"}
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

                <Tr height={"40px"}>
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
                      fontSize={"10px"}
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
                        fontSize={"10px"}
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
                      fontSize={"10px"}
                      fontWeight={"400"}
                      lineHeight={"20px"}
                      letterSpacing={"1px"}
                      ml={"5px"}
                      >ETH</Text>
                      <Text
                      _light={{ color: "#16171B" }}
                      _dark={{ color: "#FFFFFF" }}
                      fontSize={"10px"}
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
                      ml={"15px"}
                      src="/images/Polygonmaticlogo.svg"></Image>
                      <Text
                      _light={{ color: "#16171B" }}
                      _dark={{ color: "#FFFFFF" }}
                      fontSize={"10px"}
                      fontWeight={"400"}
                      lineHeight={"20px"}
                      letterSpacing={"1px"}
                      ml={"5px"}
                      >MATIC</Text>
                      <Text
                      _light={{ color: "#16171B" }}
                      _dark={{ color: "#FFFFFF" }}
                      fontSize={"10px"}
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

                <Tr height={"40px"}>
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
                      fontSize={"10px"}
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
                        fontSize={"10px"}
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
                      fontSize={"10px"}
                      fontWeight={"400"}
                      lineHeight={"20px"}
                      letterSpacing={"1px"}
                      ml={"5px"}
                      >ETH</Text>
                      <Text
                      _light={{ color: "#16171B" }}
                      _dark={{ color: "#FFFFFF" }}
                      fontSize={"10px"}
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
                      ml={"15px"}
                      src="/images/Polygonmaticlogo.svg"></Image>
                      <Text
                      _light={{ color: "#16171B" }}
                      _dark={{ color: "#FFFFFF" }}
                      fontSize={"10px"}
                      fontWeight={"400"}
                      lineHeight={"20px"}
                      letterSpacing={"1px"}
                      ml={"5px"}
                      >MATIC</Text>
                      <Text
                      _light={{ color: "#16171B" }}
                      _dark={{ color: "#FFFFFF" }}
                      fontSize={"10px"}
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
                    
                <Tr height={"40px"}>
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
                      fontSize={"10px"}
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
                        fontSize={"10px"}
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
                      fontSize={"10px"}
                      fontWeight={"400"}
                      lineHeight={"20px"}
                      letterSpacing={"1px"}
                      ml={"5px"}
                      >ETH</Text>
                      <Text
                      _light={{ color: "#16171B" }}
                      _dark={{ color: "#FFFFFF" }}
                      fontSize={"10px"}
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
                      ml={"15px"}
                      src="/images/Polygonmaticlogo.svg"></Image>
                      <Text
                      _light={{ color: "#16171B" }}
                      _dark={{ color: "#FFFFFF" }}
                      fontSize={"10px"}
                      fontWeight={"400"}
                      lineHeight={"20px"}
                      letterSpacing={"1px"}
                      ml={"5px"}
                      >MATIC</Text>
                      <Text
                      _light={{ color: "#16171B" }}
                      _dark={{ color: "#FFFFFF" }}
                      fontSize={"10px"}
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

                <Tr height={"20px"}>
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
        </Box>
        <Box
         display={'inline-flex'}
         w="100%"
         my="10px"
        _light={{bgColor:"#F0F0F5"}}
        _dark={{bgColor:"#191919"}}
        >
         <Box
          w='50%'
          height={"400px"}
          display={"flex"}
          flexDirection={"column"}
          borderRadius={"6px"}
          ml={"20px"}
          _dark={{
            bg: "#202020",
            border: "1px solid #272727"
          }}
          _light={{
            bg: "#FFFFFF",
            border: "1px solid #ADADAD"
          }}
          mr="10px"
        >
           <Flex
            height={"50px"}
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
              mr={"6px"}
              paddingTop={"15px"}
            >
              DeFi Asset Composition
            </Text>
            <Tooltip label="#Frame">
                          <Image width={"12px"}
                                height={"12px"}
                                flexShrink={"0"}
                                mt={"20px"}
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
                   <Tr height={"40px"}>
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

                <Tr height={"40px"}>
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

                <Tr height={"40px"}>
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

                <Tr height={"40px"}>
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
                    
                <Tr height={"40px"}>
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

                <Tr height={"20px"}>
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
        </Box>
    </Box>

    )

}
export default TVLBox;