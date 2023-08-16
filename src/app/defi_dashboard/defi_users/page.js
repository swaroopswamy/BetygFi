"use client";
import {
    Grid, GridItem, Input, Table, TableCaption, Text, Tbody, Td, Tfoot, Th, Thead,
    Tr, Flex, Box, useColorModeValue, Icon, Tooltip,
    Image, Spacer, Button, useColorMode
} from "@chakra-ui/react";
import { blockchains } from "../../../../util/constant";
import { useState } from "react";
import TableData from '../../../../util/whales.json';
import millify from "millify";
import { Router } from "next/router";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { blockchainTypeChangedReducer } from "@/redux/wallet_dashboard_data/dataSlice";
import { ChevronLeftIcon } from '@chakra-ui/icons'

const defiusers = () => {
    const { colorMode } = useColorMode();
    const dispatch = useDispatch();

    const blockchainSelected = useSelector(
        (state) => state?.walletDashboardTableData?.blockchainType
    );
    const BlockchainTypeHandler = (type) => {
        dispatch(blockchainTypeChangedReducer(type));
    };
    return (
        <>
        <Box
          _dark={{ bg: "#191919" }}
          _light={{ bg: " #F0F0F5" }}
          >
            <Box
            ml={"60px"}
            paddingTop={"25px"}>
                <Flex>
                {/* <Button size={"lg"}>
                <ChevronLeftIcon />
                </Button> */}
            <Text
            fontSize={"10px"}
            fontWeight={"400"}
            lineHeight={"20px"}
            letterSpacing={"1px"}
            textTransform={"uppercase"}
            >
             BACK
            </Text>
            </Flex>
            </Box>
            <Box
                border={"2px"}
                borderColor={useColorModeValue('#F0F0F5','#191919')}
                ml={"30px"}
                mr={"25px"}
                paddingTop={"20px"}
                paddingBottom={"40px"}
            >
                <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    padding={"8px 30px 8px 10px"}
                    background={useColorModeValue('#FFFFFF','#202020')}
                >
                    <Box>
                        <Text
                            color={useColorModeValue("#16171B", "#FFFFFF")}
                            ml={"20px"}
                            mb={"20px"}
                            mt={"20px"}
                            fontSize={"15px"}
                            fontWeight={"400"}
                            lineHeight={"20px"}
                        >
                            DeFi Users
                        </Text>
                    </Box>

                    <SelectionBox
                        blockchainSelected={blockchainSelected}
                        BlockchainTypeHandler={BlockchainTypeHandler}
                        colorMode={colorMode}
                    />

                    <Input
                        borderColor={useColorModeValue("#E8E8E8", "#333")}
                        bgColor={useColorModeValue("#F5F5F7", "#191919")}
                        color={useColorModeValue("#16171B", "#A8ADBD")}
                        fontSize={"10px"}
                        fontWeight={400}
                        w="207px"
                        placeholder="SEARCH"
                    //onChange={(e) => { searchAssetByNameHandler(e.target.value) }} 
                    />

                </Box>

                <Table variant='unstyled'
                    size={'sm'}
                    border={"1px"}
                    borderColor={useColorModeValue("#FFFFFF", "#272727")}
                    borderRadius={"6px"}
                >
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
                         Users
                        </Text>
                        <Image src={useColorModeValue("/images/Definame(light).svg","/images/Definame(black).svg")} alt=""></Image>
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
                        Deposited
                        </Text>
                        <Image src={useColorModeValue("/images/Definame(light).svg","/images/Definame(black).svg")} alt=""></Image>
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
                        Borrowed
                        </Text>
                        <Image src={useColorModeValue("/images/Definame(light).svg","/images/Definame(black).svg")} alt=""></Image>
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
                        Assets
                        </Text>
                        <Image src={useColorModeValue("/images/Definame(light).svg","/images/Definame(black).svg")} alt=""></Image>
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
                        Share
                        </Text>
                        <Image src={useColorModeValue("/images/Definame(light).svg","/images/Definame(black).svg")} alt=""></Image>
                         </Flex>
                  </Th>
                </Tr>
              </Thead>

                <Tbody   
                    _dark={{ bgColor: "#202020" }}
                    _light={{ bgColor: "#FFF" }}
                    >
                <Tr>
                  <Td
                   _dark={{ color: "#FFFFFF" }}
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
                      ml={"10px"}>AAVE V2 </Text>
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
                        _light={{ color: "#16171B" }}
                        _dark={{ color: "#FFFFFF" }}
                      >
                        USD 65.930000
                      </Text>
                    </Box>
                  </Td>

                  <Td>
                    <Box
                     display={"flex"}
                     alignItems={"center"}
                     >
                      <Text
                      _light={{ color: "#16171B" }}
                      _dark={{ color: "#FFFFFF" }}
                      fontSize={"10px"}
                      fontWeight={"400"}
                      lineHeight={"20px"}
                      letterSpacing={"1px"}
                      >USD 356,456,560</Text>
                    </Box>
                  </Td>

                  <Td>
                    <Flex>
                  <Image src="/images/Ethlogo(withbackground).svg" mr={"-10px"}></Image>
                  <Image src="/images/Tron&Binancelogo(withbackground).svg" mr={"-10px"}></Image>
                  <Image src="/images/Arbitrumlogo(withbackground).svg" mr={"-10px"}></Image>
                  <Image src="/images/Ellipselogo(withbackground).svg" mr={"-10px"}></Image>
                  <Image src="/images/Polygonlogo(withbackground).svg" mr={"-10px"}></Image>
                  <Image src="/images/SquareEllipselogo(withbackground).svg" mr={"-10px"}></Image>
                  </Flex>
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
                        _light={{ color: "#16171B" }}
                        _dark={{ color: "#FFFFFF" }}
                      >
                        60%
                      </Text>
                    </Box>
                  </Td>
                </Tr>

                <Tr>
                  <Td
                   _dark={{ color: "#FFFFFF" }}
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
                          src="/images/Tronlogo.svg"
                        ></Image>
                      </>

                      <Text 
                      _light={{ color: "#16171B" }}
                      _dark={{ color: "#FFFFFF" }}
                      fontSize={"10px"}
                      fontWeight={"400"}
                      lineHeight={"20px"}
                      ml={"10px"}>AAVE V3 </Text>
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
                        _light={{ color: "#16171B" }}
                        _dark={{ color: "#FFFFFF" }}
                      >
                        USD 65.930000
                      </Text>
                    </Box>
                  </Td>

                  <Td>
                    <Box
                     display={"flex"}
                     alignItems={"center"}
                     >
                      <Text
                      _light={{ color: "#16171B" }}
                      _dark={{ color: "#FFFFFF" }}
                      fontSize={"10px"}
                      fontWeight={"400"}
                      lineHeight={"20px"}
                      letterSpacing={"1px"}
                      >USD 1,434,771,959</Text>
                    </Box>
                  </Td>

                  <Td>
                    <Flex>
                  <Image src="/images/Ethlogo(withbackground).svg" mr={"-10px"}></Image>
                  <Image src="/images/Tron&Binancelogo(withbackground).svg" mr={"-10px"}></Image>
                  <Image src="/images/Arbitrumlogo(withbackground).svg" mr={"-10px"}></Image>
                  <Image src="/images/Ellipselogo(withbackground).svg" mr={"-10px"}></Image>
                  <Image src="/images/Polygonlogo(withbackground).svg" mr={"-10px"}></Image>
                  <Image src="/images/SquareEllipselogo(withbackground).svg" mr={"-10px"}></Image>
                  </Flex>
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
                        _light={{ color: "#16171B" }}
                        _dark={{ color: "#FFFFFF" }}
                      >
                        56%
                      </Text>
                    </Box>
                  </Td>
                </Tr>

                <Tr>
                  <Td
                   _dark={{ color: "#FFFFFF" }}
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
                          src="/images/Binancelogo.svg"
                        ></Image>
                      </>

                      <Text 
                      _light={{ color: "#16171B" }}
                      _dark={{ color: "#FFFFFF" }}
                      fontSize={"10px"}
                      fontWeight={"400"}
                      lineHeight={"20px"}
                      ml={"10px"}>Compound</Text>
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
                        _light={{ color: "#16171B" }}
                        _dark={{ color: "#FFFFFF" }}
                      >
                        USD 35.700000
                      </Text>
                    </Box>
                  </Td>

                  <Td>
                    <Box
                     display={"flex"}
                     alignItems={"center"}
                     >
                      <Text
                      _light={{ color: "#16171B" }}
                      _dark={{ color: "#FFFFFF" }}
                      fontSize={"10px"}
                      fontWeight={"400"}
                      lineHeight={"20px"}
                      letterSpacing={"1px"}
                      >USD 1,284,778,438</Text>
                    </Box>
                  </Td>

                  <Td>
                    <Flex>
                  <Image src="/images/Ethlogo(withbackground).svg" mr={"-10px"}></Image>
                  <Image src="/images/Tron&Binancelogo(withbackground).svg" mr={"-10px"}></Image>
                  <Image src="/images/Arbitrumlogo(withbackground).svg" mr={"-10px"}></Image>
                  <Image src="/images/Ellipselogo(withbackground).svg" mr={"-10px"}></Image>
                  <Image src="/images/Polygonlogo(withbackground).svg" mr={"-10px"}></Image>
                  <Image src="/images/SquareEllipselogo(withbackground).svg" mr={"-10px"}></Image>
                  </Flex>
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
                        _light={{ color: "#16171B" }}
                        _dark={{ color: "#FFFFFF" }}
                      >
                        45%
                      </Text>
                    </Box>
                  </Td>
                </Tr>

                <Tr>
                  <Td
                   _dark={{ color: "#FFFFFF" }}
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
                          src="/images/Arbitrumlogo2.svg"
                        ></Image>
                      </>

                      <Text 
                      _light={{ color: "#16171B" }}
                      _dark={{ color: "#FFFFFF" }}
                      fontSize={"10px"}
                      fontWeight={"400"}
                      lineHeight={"20px"}
                      ml={"10px"}>JustLend</Text>
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
                        _light={{ color: "#16171B" }}
                        _dark={{ color: "#FFFFFF" }}
                      >
                        USD 0.023387
                      </Text>
                    </Box>
                  </Td>

                  <Td>
                    <Box
                     display={"flex"}
                     alignItems={"center"}
                     >
                      <Text
                      _light={{ color: "#16171B" }}
                      _dark={{ color: "#FFFFFF" }}
                      fontSize={"10px"}
                      fontWeight={"400"}
                      lineHeight={"20px"}
                      letterSpacing={"1px"}
                      >USD 3,740,295,842</Text>
                    </Box>
                  </Td>

                  <Td>
                    <Flex>
                  <Image src="/images/Ethlogo(withbackground).svg" mr={"-10px"}></Image>
                  <Image src="/images/Tron&Binancelogo(withbackground).svg" mr={"-10px"}></Image>
                  <Image src="/images/Arbitrumlogo(withbackground).svg" mr={"-10px"}></Image>
                  <Image src="/images/Ellipselogo(withbackground).svg" mr={"-10px"}></Image>
                  <Image src="/images/Polygonlogo(withbackground).svg" mr={"-10px"}></Image>
                  <Image src="/images/SquareEllipselogo(withbackground).svg" mr={"-10px"}></Image>
                  </Flex>
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
                        _light={{ color: "#16171B" }}
                        _dark={{ color: "#FFFFFF" }}
                      >
                        40%
                      </Text>
                    </Box>
                  </Td>
                </Tr>

                <Tr>
                  <Td
                   _dark={{ color: "#FFFFFF" }}
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
                          src="/images/Polygonmaticlogo.svg"
                        ></Image>
                      </>

                      <Text 
                      _light={{ color: "#16171B" }}
                      _dark={{ color: "#FFFFFF" }}
                      fontSize={"10px"}
                      fontWeight={"400"}
                      lineHeight={"20px"}
                      ml={"10px"}>Venus</Text>
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
                        _light={{ color: "#16171B" }}
                        _dark={{ color: "#FFFFFF" }}
                      >
                        USD 5.100000
                      </Text>
                    </Box>
                  </Td>

                  <Td>
                    <Box
                     display={"flex"}
                     alignItems={"center"}
                     >
                      <Text
                      _light={{ color: "#16171B" }}
                      _dark={{ color: "#FFFFFF" }}
                      fontSize={"10px"}
                      fontWeight={"400"}
                      lineHeight={"20px"}
                      letterSpacing={"1px"}
                      >USD 802,259,792</Text>
                    </Box>
                  </Td>

                  <Td>
                    <Flex>
                  <Image src="/images/Ethlogo(withbackground).svg" mr={"-10px"}></Image>
                  <Image src="/images/Tron&Binancelogo(withbackground).svg" mr={"-10px"}></Image>
                  <Image src="/images/Arbitrumlogo(withbackground).svg" mr={"-10px"}></Image>
                  <Image src="/images/Ellipselogo(withbackground).svg" mr={"-10px"}></Image>
                  <Image src="/images/Polygonlogo(withbackground).svg" mr={"-10px"}></Image>
                  <Image src="/images/SquareEllipselogo(withbackground).svg" mr={"-10px"}></Image>
                  </Flex>
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
                        _light={{ color: "#16171B" }}
                        _dark={{ color: "#FFFFFF" }}
                      >
                        25%
                      </Text>
                    </Box>
                  </Td>
                </Tr>

                <Tr>
                  <Td
                   _dark={{ color: "#FFFFFF" }}
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
                      ml={"10px"}>Morpho Aave</Text>
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
                        _light={{ color: "#16171B" }}
                        _dark={{ color: "#FFFFFF" }}
                      >
                        USD 0.001782
                      </Text>
                    </Box>
                  </Td>

                  <Td>
                    <Box
                     display={"flex"}
                     alignItems={"center"}
                     >
                      <Text
                      _light={{ color: "#16171B" }}
                      _dark={{ color: "#FFFFFF" }}
                      fontSize={"10px"}
                      fontWeight={"400"}
                      lineHeight={"20px"}
                      letterSpacing={"1px"}
                      >USD 315,485,747</Text>
                    </Box>
                  </Td>

                  <Td>
                    <Flex>
                  <Image src="/images/Ethlogo(withbackground).svg" mr={"-10px"}></Image>
                  <Image src="/images/Tron&Binancelogo(withbackground).svg" mr={"-10px"}></Image>
                  <Image src="/images/Arbitrumlogo(withbackground).svg" mr={"-10px"}></Image>
                  <Image src="/images/Ellipselogo(withbackground).svg" mr={"-10px"}></Image>
                  <Image src="/images/Polygonlogo(withbackground).svg" mr={"-10px"}></Image>
                  <Image src="/images/SquareEllipselogo(withbackground).svg" mr={"-10px"}></Image>
                  </Flex>
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
                        _light={{ color: "#16171B" }}
                        _dark={{ color: "#FFFFFF" }}
                      >
                        20%
                      </Text>
                    </Box>
                  </Td>
                </Tr>

                <Tr>
                  <Td
                   _dark={{ color: "#FFFFFF" }}
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
                          src="/images/Tronlogo.svg"
                        ></Image>
                      </>

                      <Text 
                      _light={{ color: "#16171B" }}
                      _dark={{ color: "#FFFFFF" }}
                      fontSize={"10px"}
                      fontWeight={"400"}
                      lineHeight={"20px"}
                      ml={"10px"}>Compound V3</Text>
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
                        _light={{ color: "#16171B" }}
                        _dark={{ color: "#FFFFFF" }}
                      >
                        USD 35.700000
                      </Text>
                    </Box>
                  </Td>

                  <Td>
                    <Box
                     display={"flex"}
                     alignItems={"center"}
                     >
                      <Text
                      _light={{ color: "#16171B" }}
                      _dark={{ color: "#FFFFFF" }}
                      fontSize={"10px"}
                      fontWeight={"400"}
                      lineHeight={"20px"}
                      letterSpacing={"1px"}
                      >USD 563,991,620</Text>
                    </Box>
                  </Td>

                  <Td>
                    <Flex>
                  <Image src="/images/Ethlogo(withbackground).svg" mr={"-10px"}></Image>
                  <Image src="/images/Tron&Binancelogo(withbackground).svg" mr={"-10px"}></Image>
                  <Image src="/images/Arbitrumlogo(withbackground).svg" mr={"-10px"}></Image>
                  <Image src="/images/Ellipselogo(withbackground).svg" mr={"-10px"}></Image>
                  <Image src="/images/Polygonlogo(withbackground).svg" mr={"-10px"}></Image>
                  <Image src="/images/SquareEllipselogo(withbackground).svg" mr={"-10px"}></Image>
                  </Flex>
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
                        _light={{ color: "#16171B" }}
                        _dark={{ color: "#FFFFFF" }}
                      >
                        16%
                      </Text>
                    </Box>
                  </Td>
                </Tr>

                <Tr>
                  <Td
                   _dark={{ color: "#FFFFFF" }}
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
                          src="/images/Binancelogo.svg"
                        ></Image>
                      </>

                      <Text 
                      _light={{ color: "#16171B" }}
                      _dark={{ color: "#FFFFFF" }}
                      fontSize={"10px"}
                      fontWeight={"400"}
                      lineHeight={"20px"}
                      ml={"10px"}>Radiant V2</Text>
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
                        _light={{ color: "#16171B" }}
                        _dark={{ color: "#FFFFFF" }}
                      >
                        USD 0.313472
                      </Text>
                    </Box>
                  </Td>

                  <Td>
                    <Box
                     display={"flex"}
                     alignItems={"center"}
                     >
                      <Text
                      _light={{ color: "#16171B" }}
                      _dark={{ color: "#FFFFFF" }}
                      fontSize={"10px"}
                      fontWeight={"400"}
                      lineHeight={"20px"}
                      letterSpacing={"1px"}
                      >USD 259,911,221</Text>
                    </Box>
                  </Td>

                  <Td>
                    <Flex>
                  <Image src="/images/Ethlogo(withbackground).svg" mr={"-10px"}></Image>
                  <Image src="/images/Tron&Binancelogo(withbackground).svg" mr={"-10px"}></Image>
                  <Image src="/images/Arbitrumlogo(withbackground).svg" mr={"-10px"}></Image>
                  <Image src="/images/Ellipselogo(withbackground).svg" mr={"-10px"}></Image>
                  <Image src="/images/Polygonlogo(withbackground).svg" mr={"-10px"}></Image>
                  <Image src="/images/SquareEllipselogo(withbackground).svg" mr={"-10px"}></Image>
                  </Flex>
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
                        _light={{ color: "#16171B" }}
                        _dark={{ color: "#FFFFFF" }}
                      >
                        14%
                      </Text>
                    </Box>
                  </Td>
                </Tr>

                <Tr>
                  <Td
                   _dark={{ color: "#FFFFFF" }}
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
                          src="/images/Arbitrumlogo2.svg"
                        ></Image>
                      </>

                      <Text 
                      _light={{ color: "#16171B" }}
                      _dark={{ color: "#FFFFFF" }}
                      fontSize={"10px"}
                      fontWeight={"400"}
                      lineHeight={"20px"}
                      ml={"10px"}>FluidTokens</Text>
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
                        _light={{ color: "#16171B" }}
                        _dark={{ color: "#FFFFFF" }}
                      >
                        NA
                      </Text>
                    </Box>
                  </Td>

                  <Td>
                    <Box
                     display={"flex"}
                     alignItems={"center"}
                     >
                      <Text
                      _light={{ color: "#16171B" }}
                      _dark={{ color: "#FFFFFF" }}
                      fontSize={"10px"}
                      fontWeight={"400"}
                      lineHeight={"20px"}
                      letterSpacing={"1px"}
                      >USD 234,308</Text>
                    </Box>
                  </Td>

                  <Td>
                    <Flex>
                  <Image src="/images/Ethlogo(withbackground).svg" mr={"-10px"}></Image>
                  <Image src="/images/Tron&Binancelogo(withbackground).svg" mr={"-10px"}></Image>
                  <Image src="/images/Arbitrumlogo(withbackground).svg" mr={"-10px"}></Image>
                  <Image src="/images/Ellipselogo(withbackground).svg" mr={"-10px"}></Image>
                  <Image src="/images/Polygonlogo(withbackground).svg" mr={"-10px"}></Image>
                  <Image src="/images/SquareEllipselogo(withbackground).svg" mr={"-10px"}></Image>
                  </Flex>
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
                        _light={{ color: "#16171B" }}
                        _dark={{ color: "#FFFFFF" }}
                      >
                        12%
                      </Text>
                    </Box>
                  </Td>
                </Tr>

                <Tr>
                  <Td
                   _dark={{ color: "#FFFFFF" }}
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
                          src="/images/Polygonmaticlogo.svg"
                        ></Image>
                      </>

                      <Text 
                      _light={{ color: "#16171B" }}
                      _dark={{ color: "#FFFFFF" }}
                      fontSize={"10px"}
                      fontWeight={"400"}
                      lineHeight={"20px"}
                      ml={"10px"}>Trader Joe Lend</Text>
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
                        _light={{ color: "#16171B" }}
                        _dark={{ color: "#FFFFFF" }}
                      >
                        USD 0.379546
                      </Text>
                    </Box>
                  </Td>

                  <Td>
                    <Box
                     display={"flex"}
                     alignItems={"center"}
                     >
                      <Text
                      _light={{ color: "#16171B" }}
                      _dark={{ color: "#FFFFFF" }}
                      fontSize={"10px"}
                      fontWeight={"400"}
                      lineHeight={"20px"}
                      letterSpacing={"1px"}
                      >USD 7,562,768</Text>
                    </Box>
                  </Td>

                  <Td>
                    <Flex>
                  <Image src="/images/Ethlogo(withbackground).svg" mr={"-10px"}></Image>
                  <Image src="/images/Tron&Binancelogo(withbackground).svg" mr={"-10px"}></Image>
                  <Image src="/images/Arbitrumlogo(withbackground).svg" mr={"-10px"}></Image>
                  <Image src="/images/Ellipselogo(withbackground).svg" mr={"-10px"}></Image>
                  <Image src="/images/Polygonlogo(withbackground).svg" mr={"-10px"}></Image>
                  <Image src="/images/SquareEllipselogo(withbackground).svg" mr={"-10px"}></Image>
                  </Flex>
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
                        _light={{ color: "#16171B" }}
                        _dark={{ color: "#FFFFFF" }}
                      >
                        10%
                      </Text>
                    </Box>
                  </Td>
                </Tr>
                    
                <Tr>
                   <Td>
                <Flex>
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
                </Flex>
                </Td> 
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                </Tr>
                    </Tbody>
                </Table>
               <PageButtons />
            </Box>
            </Box>
        </>
    )
};

export default defiusers;

function SelectionBox({ blockchainSelected, colorMode, BlockchainTypeHandler }) {
    return <>
        <Box
            display={"flex"}
            flexDirection={"column"}
        >
            <Box
                w={"100%"}
                display={"flex"}
                alignItems={"center"}
            >
                <Box
                    position={"relative"}
                    cursor={"pointer"}
                    fontSize={"10px"}
                    fontWeight={blockchainSelected.length === 0 ? "700" : "400"}
                    letterSpacing={"1px"}
                    lineHeight={"20px"}
                    color={useColorModeValue("#3A3A3A", "#FFFFFF")}
                    _after={
                        blockchainSelected.length === 0 && {
                            position: "absolute",
                            content: '""',
                            bottom: "-14px",
                            left: 0,
                            width: "100%",
                            height: "1px",
                            bgColor: colorMode === 'light' ? "#191919" : "#FFFFFF",

                        }
                    }
                    onClick={() => {
                        BlockchainTypeHandler("All");
                    }}
                    mr={"18px"}
                    textTransform={"uppercase"}
                >
                    ALL
                </Box>
                {blockchains.map((item, i) => {
                    if (i >= 4) return;
                    return (
                        <Box
                            position={"relative"}
                            cursor={"pointer"}
                            key={i}
                            _after={
                                blockchainSelected.includes(item) && {
                                    position: "absolute",
                                    content: '""',
                                    bottom: "-14px",
                                    left: 0,
                                    width: "100%",
                                    height: "1px",
                                    bgColor: colorMode === 'light' ? "#191919" : "#FFFFFF",
                                }
                            }
                            onClick={() => {
                                BlockchainTypeHandler(item);
                            }}
                            mr={"10px"}
                            display={"flex"}
                            alignItems={"center"}
                        >
                            <Image
                                w={"20px"}
                                h={"20px"}
                                mr={"11px"}
                                src={`/icons/${item}_sm_icon.svg`}
                                alt=""
                            ></Image>
                            <Text
                                fontSize={"10px"}
                                fontWeight={blockchainSelected.includes(item) ? "700" : "400"}
                                lineHeight={"20px"}
                                letterSpacing={"1px"}
                                color={colorMode === 'light' ?
                                    blockchainSelected.includes(item) ? "#191919" : "#191919"
                                    :
                                    blockchainSelected.includes(item) ? "#FFFFFF" : "#FFFFFF"
                                }
                                textTransform={"uppercase"}
                            >
                                {item}
                            </Text>
                        </Box>
                    );
                })}
            </Box>
        </Box>
    </>
};

function PageButtons() {
    return (
        <>
            <Box
                display={"flex"}
                alignItems={"flex-start"}
                justifyContent={"end"}
                padding="10px 30px 14px"
                background={useColorModeValue('#FFFFFF', '#202020')}
            >

                <Box
                    display={"flex"}
                >
                    <Box
                        display={"flex"}
                        alignItems={"center"}
                    >
                        <Text
                            color={useColorModeValue("#16171B", "#FFF")}
                            fontSize={"10px"}
                            fontWeight={"400"}
                        >
                            1-20
                        </Text>
                    </Box>

                    <Button
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        w={"12px"}
                        h={"12px"}
                        bg={useColorModeValue("#FFF", "#202020")}
                        padding="0px"
                    >
                        <Image
                            mt={"10px"}
                            width={"12px"}
                            height={"12px"}
                            style={{ rotate: '90deg' }}
                            alt="next-arrow"
                            src={useColorModeValue('/icons/direction-arrow.svg', '/icons/direction-icon-dark.svg')}
                        ></Image>
                    </Button>

                    <Button
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        w={"10px"}
                        h={"26px"}
                        bg={useColorModeValue("#FFF", "#202020")}
                        border={"1px"}
                        borderColor={useColorModeValue("#C7CAD2", "#454853")}
                        borderRadius={"0px"}
                        padding="0px"
                    >
                        <Image
                            width={"12px"}
                            height={"12px"}
                            style={{ rotate: '180deg' }}
                            src={useColorModeValue('/icons/direction-arrow.svg', '/icons/direction-icon-dark.svg')}
                            alt="prev-arrow"
                        ></Image>
                    </Button>

                    <Button
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        w={"10px"}
                        h={"26px"}
                        bg={useColorModeValue("#FFF", "#202020")}
                        border={"1px"}
                        borderRadius={"0px"}
                        borderColor={useColorModeValue("#C7CAD2", "#454853")}
                        padding="0px"
                    >
                        <Image
                            width={15}
                            height={15}
                            alt="next-arrow"
                            src={useColorModeValue('/icons/direction-arrow.svg', '/icons/direction-icon-dark.svg')}
                        ></Image>
                    </Button>
                </Box>

            </Box>
        </>)
};