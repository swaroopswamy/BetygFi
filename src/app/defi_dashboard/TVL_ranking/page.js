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
// import LineChart from "components/charts/LineChart"

const Defi_name = ({ thread }) => {
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
                border={"2px"}
                //borderColor={useColorModeValue('#F0F0F5','#191919')}
                _light={{borderColor:"#F0F0F5"}}
                _dark={{borderColor:"#191919"}}
                ml={"30px"}
                mr={"25px"}
                paddingTop={"50px"}
                paddingBottom={"40px"}>
                <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    padding={"8px 30px 8px 10px"}
                    //background={useColorModeValue('#FFFFFF', '#202020')}
                    _light={{bgColor:"#FFFFFF"}}
                    _dark={{bgColor:"#202020"}}
                >
                    <Box>
                        <Text
                            //color={useColorModeValue("#16171B", "#FFFFFF")}
                            _light={{color:"#16171B"}}
                            _dark={{color:"#FFFFFF"}}
                            ml={"10px"}
                            mb={"20px"}
                            mt={"20px"}
                            fontSize={"15px"}
                            fontWeight={"400"}
                            lineHeight={"20px"}
                        >
                          DeFi Category by TVL Rankings
                        </Text>
                    </Box>

                    <SelectionBox
                        blockchainSelected={blockchainSelected}
                        BlockchainTypeHandler={BlockchainTypeHandler}
                        colorMode={colorMode}
                    />

                    <Input
                        //borderColor={useColorModeValue("#E8E8E8", "#333")}
                        _light={{borderColor:"#E8E8E8",bgColor:"#F5F5F7",color:"#16171B"}}
                        _dark={{borderColor:"#333",bgColor:"#191919",color:"#A8ADBD"}}
                        //bgColor={useColorModeValue("#F5F5F7", "#191919")}
                        //color={useColorModeValue("#16171B", "#A8ADBD")}
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
                    //borderColor={useColorModeValue("#FFFFFF", "#272727")}
                    _light={{borderColor:"#FFFFFF"}}
                    _dark={{borderColor:"#272727"}}
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
                        DeFi Category
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
                      Available Blockchains
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
                        Available DeFi 
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
                        TVL
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
                       7 Days
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
                          src="/icons/aave_logo.svg"
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
                       2
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
                      >100</Text>
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

                  {/* <Td><LineChart/></Td> */}
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
                          src="/icons/aave_logo.svg"
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
                       10
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
                      >57</Text>
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
                          src="/icons/compound_logo.svg"
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
                        4
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
                      >67</Text>
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
                          src="/icons/justlend_logo.svg"
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
                      7
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
                      >80</Text>
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
                          src="/icons/venus_logo.svg"
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
                       4
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
                      >60</Text>
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
                          src="/icons/morphoaave_logo.svg"
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
                        8
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
                      >90</Text>
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
                          src="/icons/compoundv3.svg"
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
                        6
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
                      >70</Text>
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
                          src="/icons/radiantv2_logo.svg"
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
                        2
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
                      >87</Text>
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
                      9
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
                      >63</Text>
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
                          src="/icons/traderjoelend_logo.svg"
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
                        3
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
                      >82</Text>
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
                </Tr>
                    </Tbody>
                    <Tfoot>
                    </Tfoot>

                </Table>

                <PageButtons />
                </Box>
            </Box>
        </>
    )
};

export default Defi_name;




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
}




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
}

function TableRow({ key, rowValues }) {
    const [clicked, setClick] = useState(false);
    const { colorMode } = useColorMode();
    const router = useRouter();
    return (
        <>
            <Tr
                key={key}
                cursor={"pointer"}
                bgColor={clicked ?
                    (colorMode === "light" ? '#F5F5F7' : '#191919') :
                    (colorMode === "light" ? '#FFFFFF' : '#202020')
                }
                onClick={() => { setClick(!clicked) }}
                borderBottom={'1px'}
                borderColor={useColorModeValue('#DFDFDF', '#313131')}
                borderRadius={'2px'}
            >

                {rowValues.map((item, i) => {
                    return (
                        <>
                            <Td key={i}>
                                <Flex>
                                    <Box>
                                        <Text
                                            _dark={{
                                                color: "#FFFFFF"
                                            }}
                                            _light={{
                                                color: "#16171B"
                                            }}
                                            fontSize={"14px"}
                                            fontStyle={"normal"}
                                            fontWeight={"600"}
                                            lineHeight={"20px"}
                                        >
                                            {item}
                                        </Text>
                                    </Box>
                                </Flex>
                            </Td>
                        </>
                    )
                })}

            </Tr>
        </>
    );
}
