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

const defi_hot_contract = ({ thread }) => {
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
                paddingBottom={"40px"}
            >
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
                            DeFi Hot Contract
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
                         BlockChain | Function name
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
                       No. Of users
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
                        No. of Calls
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
                        Fees consumed
                        </Text>
                        <Image src={useColorModeValue("/images/Definame(light).svg","/images/Definame(black).svg")} alt=""></Image>
                         </Flex>
                  </Th>

                  {/* <Th>
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
                  </Th> */}
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
                        406
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
                      >3457</Text>
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
                       567
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
                      >8765</Text>
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
                        234
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
                      >76346</Text>
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
                       5634
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
                      >567</Text>
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
                       12
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
                      >2376</Text>
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
                        345
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
                      >8456</Text>
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
                        876
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
                      >8734</Text>
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
                        3456
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
                      >436</Text>
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
                       123
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
                      >864</Text>
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
                        USD 45.90988
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
                        876
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
                      >963</Text>
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
export default  Defi_Hot_Contracts;