import { Box, Image, Input, Text, useColorModeValue, Accordion, AccordionItem, AccordionButton, AccordionPanel, Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableContainer, Flex, Spacer, ColorMode } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { blockchainTypeChangedReducer, defiArrayChangedReducer } from "@/redux/wallet_dashboard_data/dataSlice";
import { blockchains } from '../../../util/constant';
import DefiTable from "./DefiTable";
const PortfolioPanelComponent = () => {
  const { colorMode } = useColorMode();
  const dispatch = useDispatch();
  const blockchainSelected = useSelector(
    (state) => state?.walletDashboardTableData?.blockchainType
  );
  const defiSelected = useSelector(
    (state) => state?.walletDashboardTableData?.defiArraySelected
  );
  console.log(blockchainSelected, 'blockchain')

  const BlockchainTypeHandler = (type) => {
    dispatch(blockchainTypeChangedReducer(type));
  };
  const DefiArrayHandler = (type) => {
    dispatch(defiArrayChangedReducer(type));
  };
  const defiArray = [
    "Wallet",
    "X2Y2",
    "Blur",
    "Uniswap"
  ];
  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"column"}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
        >
          <Box
            w={"100%"}
            display={"flex"}
            alignItems={"center"}
            borderBottom={useColorModeValue("1px solid #CECECE", "1px solid #2F2F2F")}
            pb="14px"
          >
            <Box
              position={"relative"}
              cursor={"pointer"}
              fontSize={"10px"}
              fontWeight={blockchainSelected.length === 0 ? "700" : "400"}
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
                  _light: { bgColor: "#191919" },
                  _dark: { bgColor: "#FFFFFF" },
                  // bgColor: useColorModeValue("#191919", "#FFFFFF")
                }
               }
              onClick={() => {
                BlockchainTypeHandler("All");
              }}
              mr={"18px"}
            >
              ALL
            </Box>
            {blockchains.map((item, i) => {
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
                      _light: { bgColor: "#191919" },
                      _dark: { bgColor: "#FFFFFF" },
                     // bgColor: useColorModeValue("#191919", "#FFFFFF")
                    }
                  }
                  onClick={() => {
                    BlockchainTypeHandler(item);
                  }}
                  mr={"18px"}
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
                    //color={useColorModeValue("#3A3A3A", "#FFFFFF")}
                    _dark={{ color: "#FFFFFF" }}
                    _light={{ color: "#3A3A3A" }}
                  >
                    {item}
                  </Text>
                </Box>
              );
            })}
          </Box>


        </Box>
        <Box
          mt="25px"
          borderRadius={"6px"}
          bgColor={useColorModeValue("#FFFFFF", "#202020")}
        >
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            py={"18px"}
            px="26px"
          >
            <Box
              display={"flex"}
              justifyContent={"flex-start"}
              alignItems={"center"}

            >
              <Box
                textAlign={"center"}
                p="8px"
                bgColor={defiSelected.length === 0 ? colorMode === 'light' ?("#E3E4E8"):("#191919") : colorMode === 'light' ?("#E0E0E0"):("#202020")}
                onClick={() => {
                  DefiArrayHandler('All');
                }}
                borderRadius={"2px"}
                opacity={defiSelected.length !== 0 ? "0.5" : "1"}
                mr={"10px"}
                border={useColorModeValue("1px solid #979AA5", "1px solid #787878")}
              >
                <Text
                  fontSize={"10px"}
                  fontWeight={defiSelected.length === 0 ? "600" : "400"}
                  lineHeight={"20px"}
                  color={defiSelected.length === 0 ? colorMode === 'light' ?("#16171B"):("#FFFFFF") : colorMode === 'light' ?("#000000"):("#FFFFFF")}

                >
                  All
                </Text>
              </Box>
              {defiArray.map((item, i) => {
                return (
                  <>
                    <Box
                      key={i}
                      textAlign={"center"}
                      p="8px"
                      bgColor={defiSelected.includes(item) ? colorMode === 'light' ?("#E3E4E8"):("#191919") : colorMode === 'light' ?("#FFFFFF"):("#202020")}
                      onClick={() => {
                        DefiArrayHandler(item);
                      }}
                      opacity={defiSelected.includes(item) ? "1" : "0.5"}
                      mr={"10px"}
                      borderRadius={"2px"}
                      //border={useColorModeValue("1px solid #979AA5", "1px solid #787878")}
                      _light={{border : "1px solid #979AA5"}}
                      _dar={{border : "1px solid #787878"}}
                    >
                      <Text
                        fontSize={"10px"}
                        fontWeight={blockchainSelected.includes(item) ? "600" : "400"}
                        lineHeight={"20px"}
                        color={blockchainSelected.includes(item) ? colorMode === 'light' ?("#16171B"):("#FFFFFF") : colorMode === 'light' ?("#000000"):("#FFFFFF")}

                      >
                        {item}
                      </Text>
                    </Box>

                  </>
                )
              })}
            </Box>

            <Input
              borderColor={useColorModeValue("#E8E8E8", "#333")}
              bgColor={useColorModeValue("#F5F5F7", "#191919")}
              color={useColorModeValue("#16171B", "#A8ADBD")}
              fontSize={"10px"}
              fontWeight={400}
              w="207px"
              placeholder="Search DeFi"
            //onChange={(e) => { searchByNameHandler(e.target.value) }} 
            />
          </Box>

          <DefiTable />
        </Box>
        <Box
          flex-shrink={"0"}
          filter={"drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.05))"}
          paddingTop={"20px"}
        >
          <Accordion defaultIndex={[0]} allowMultiple background={useColorModeValue("#FFF", "#202020")}>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left'>
                    <Flex>
                      <Image src="/images/uniswap.svg" alt=""
                        width={"30px"}
                        height={"30px"}
                        flexShrink={"0"}
                        borderRadius={"150px"}
                      ></Image>
                      <Text
                        color={useColorModeValue("#16171B", "#FFFFFF")}
                        ml={"10px"}
                        mt={"5px"}
                      >
                        Uniswap V3
                      </Text>
                      <Spacer />
                      <Text
                        color={useColorModeValue("#202020", "#FFFFFF")}
                        mt={"5px"}
                        paddingRight={"10px"}
                      >
                        $24,344,743.06
                      </Text>
                      <Box
                        display={"flex"}
                        flexDirection={"column"}
                        justifyContent={"center"}
                        flexShrink={"0"}
                        mr={"30px"}
                      >
                        <Text
                          color={useColorModeValue("#3A3A3A", "#FFFFFF")}
                          fontSize={"10px"}
                          fontStyle={"normal"}
                          fontWeight={"400"}
                          lineHeight={"20px"}
                          mt={"5px"}
                        >
                          Claimable: $884,938.19
                        </Text>
                      </Box>
                      <Box mt={"4px"}>
                        <Image src={useColorModeValue("/images/Icon.svg", "/images/Icon(black).svg")} alt=""
                          width={"24px"}
                          height={"24px"}
                          flex-shrink={"0"}
                        ></Image>
                      </Box>
                    </Flex>
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <TableContainer>
                  <Table variant='simple'>
                    <Thead>
                      <Tr
                        bg={useColorModeValue("#F5F5F7", "#191919")}
                        width={"100%"}
                        flex-shrink={"0"}
                      >
                        <Th
                          color={useColorModeValue("#434347", "#A8ADBD")}
                          fontFeatureSettings={" 'cv11' on, 'cv01' on, 'ss01' on"}
                          fontSize={"10px"}
                          fontStyle={"normal"}
                          fontWeight={"400"}
                          lineHeight={"20px"}
                          letterSpacing={"1px"}
                          textTransform={"uppercase"}
                          textAlign={"left"}
                        >
                          Pool</Th>
                        <Th
                          color={useColorModeValue("#434347", "#A8ADBD")}
                          fontFeatureSettings={" 'cv11' on, 'cv01' on, 'ss01' on"}
                          fontSize={"10px"}
                          fontStyle={"normal"}
                          fontWeight={"400"}
                          lineHeight={"20px"}
                          letterSpacing={"1px"}
                          textTransform={"uppercase"}
                          textAlign={"left"}
                        >
                          Liquidity Range</Th>
                        <Th
                          color={useColorModeValue("#434347", "#A8ADBD")}
                          fontFeatureSettings={" 'cv11' on, 'cv01' on, 'ss01' on"}
                          fontSize={"10px"}
                          fontStyle={"normal"}
                          fontWeight={"400"}
                          lineHeight={"20px"}
                          letterSpacing={"1px"}
                          textTransform={"uppercase"}
                          textAlign={"left"}
                        >
                          Fees Earned</Th>
                        <Th
                          color={useColorModeValue("#434347", "#A8ADBD")}
                          fontFeatureSettings={" 'cv11' on, 'cv01' on, 'ss01' on"}
                          fontSize={"10px"}
                          fontStyle={"normal"}
                          fontWeight={"400"}
                          lineHeight={"20px"}
                          letterSpacing={"1px"}
                          textTransform={"uppercase"}
                          textAlign={"left"}
                        >
                          Value(USD)</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td>
                          <Flex>
                            <Image src="/images/weth.svg" alt=""></Image>
                            <Image src="/images/BIT.svg" ml={"-15px"} alt=""></Image>
                            <Box>
                              <Text
                                color={useColorModeValue("#16171B", "#FFFFFF")}
                                fontSize={"11px"}
                                fontStyle={"normal"}
                                fontWeight={"600"}
                                lineHeight={"11px"}
                                ml={"10px"}
                                mt={"1px"}
                              >
                                24,278,200.00 BIT  +  6,330.63 WETH (0.3%)
                              </Text>
                              <Text
                                color={useColorModeValue("#000", "#A8ADBD")}
                                fontSize={"10px"}
                                fontStyle={"normal"}
                                fontWeight={"400"}
                                lineHeight={"12px"}
                                opacity={"0.5"}
                                ml={"10px"}
                                mt={"5px"}
                              >
                                $23,459,193.41
                              </Text>
                            </Box>
                          </Flex>
                        </Td>
                        <Td>
                          <Flex>
                            <Box>
                              <Text
                                color={useColorModeValue("#16171B", "#FFFFFF")}
                                fontSize={"10px"}
                                fontStyle={"normal"}
                                fontWeight={"400"}
                                lineHeight={"20px"}
                              >
                                [2.95428e-39, 3.38492e+38]
                              </Text>
                              <Text
                                color={useColorModeValue("#000", "#A8ADBD")}
                                fontSize={"10px"}
                                fontStyle={"normal"}
                                fontWeight={"400"}
                                lineHeight={"12px"}
                                opacity={"0.5"}
                              >
                                BIT/WETH
                              </Text>
                            </Box>
                          </Flex>
                        </Td>
                        <Td>
                          <Flex>
                            <Image src="/images/BIT.svg" width={"15px"} height={"15px"} flex-shrink={"0"} borderRadius={"150px"} mt={"2px"} alt=""></Image>
                            <Box
                              ml={"5px"}>
                              <Text
                                color={useColorModeValue("#16171B", "#FFFFFF")}
                                fontSize={"10px"}
                                fontStyle={"normal"}
                                fontWeight={"400"}
                                lineHeight={"20px"}
                              >
                                826,329.68 BIT
                              </Text>
                              <Text
                                color={useColorModeValue("#000", "#A8ADBD")}
                                fontSize={"10px"}
                                fontStyle={"normal"}
                                fontWeight={"400"}
                                lineHeight={"12px"}
                                opacity={"0.5"}
                              >
                                $398,335.53
                              </Text>
                            </Box>

                            <Image src="/images/weth.svg" width={"15px"} height={"15px"} flex-shrink={"0"} borderRadius={"150px"} mt={"2px"} ml={"15px"} alt=""></Image>
                            <Box
                              ml={"5px"}>
                              <Text
                                color={useColorModeValue("#16171B", "#FFFFFF")}
                                fontSize={"10px"}
                                fontStyle={"normal"}
                                fontWeight={"400"}
                                lineHeight={"20px"}
                              >
                                262.03 WETH
                              </Text>
                              <Text
                                color={useColorModeValue("#000", "#A8ADBD")}
                                fontSize={"10px"}
                                fontStyle={"normal"}
                                fontWeight={"400"}
                                lineHeight={"12px"}
                                opacity={"0.5"}
                              >
                                $486,579.60
                              </Text>
                            </Box>
                          </Flex>
                        </Td>
                        <Td>
                          <Text
                            color={useColorModeValue("#16171B", "#FFFFFF")}
                            font-Size={"10px"}
                            fontStyle={"normal"}
                            fontWeight={"400"}
                            lineHeight={"20px"}
                          >
                            $24,344,108.54
                          </Text>
                        </Td>
                      </Tr>

                      <Tr>
                        <Td>
                          <Flex>
                            <Image src="/images/weth.svg" alt=""></Image>
                            <Image src="/images/BIT.svg" ml={"-15px"} alt=""></Image>
                            <Box>
                              <Text
                                color={useColorModeValue("#16171B", "#FFFFFF")}
                                fontSize={"11px"}
                                fontStyle={"normal"}
                                fontWeight={"600"}
                                lineHeight={"11px"}
                                ml={"10px"}
                                mt={"1px"}
                              >
                                24,278,200.00 BIT  +  6,330.63 WETH (0.3%)
                              </Text>
                              <Text
                                color={useColorModeValue("#000", "#A8ADBD")}
                                fontSize={"10px"}
                                fontStyle={"normal"}
                                fontWeight={"400"}
                                lineHeight={"12px"}
                                opacity={"0.5"}
                                ml={"10px"}
                                mt={"5px"}
                              >
                                $23,459,193.41
                              </Text>
                            </Box>
                          </Flex>
                        </Td>
                        <Td>
                          <Flex>
                            <Box>
                              <Text
                                color={useColorModeValue("#16171B", "#FFFFFF")}
                                fontSize={"10px"}
                                fontStyle={"normal"}
                                fontWeight={"400"}
                                lineHeight={"20px"}
                              >
                                [2.95428e-39, 3.38492e+38]
                              </Text>
                              <Text
                                color={useColorModeValue("#000", "#A8ADBD")}
                                fontSize={"10px"}
                                fontStyle={"normal"}
                                fontWeight={"400"}
                                lineHeight={"12px"}
                                opacity={"0.5"}
                              >
                                BIT/WETH
                              </Text>
                            </Box>
                          </Flex>
                        </Td>
                        <Td>
                          <Flex>
                            <Image src="/images/BIT.svg" width={"15px"} height={"15px"} flex-shrink={"0"} borderRadius={"150px"} mt={"2px"} alt=""></Image>
                            <Box
                              ml={"5px"}>
                              <Text
                                color={useColorModeValue("#16171B", "#FFFFFF")}
                                fontSize={"10px"}
                                fontStyle={"normal"}
                                fontWeight={"400"}
                                lineHeight={"20px"}
                              >
                                826,329.68 BIT
                              </Text>
                              <Text
                                color={useColorModeValue("#000", "#A8ADBD")}
                                fontSize={"10px"}
                                fontStyle={"normal"}
                                fontWeight={"400"}
                                lineHeight={"12px"}
                                opacity={"0.5"}
                              >
                                $398,335.53
                              </Text>
                            </Box>

                            <Image src="/images/weth.svg" width={"15px"} height={"15px"} flex-shrink={"0"} borderRadius={"150px"} mt={"2px"} ml={"15px"} alt=""></Image>
                            <Box
                              ml={"5px"}>
                              <Text
                                color={useColorModeValue("#16171B", "#FFFFFF")}
                                fontSize={"10px"}
                                fontStyle={"normal"}
                                fontWeight={"400"}
                                lineHeight={"20px"}
                              >
                                262.03 WETH
                              </Text>
                              <Text
                                color={useColorModeValue("#000", "#A8ADBD")}
                                fontSize={"10px"}
                                fontStyle={"normal"}
                                fontWeight={"400"}
                                lineHeight={"12px"}
                                opacity={"0.5"}
                              >
                                $486,579.60
                              </Text>
                            </Box>
                          </Flex>
                        </Td>
                        <Td>
                          <Text
                            color={useColorModeValue("#16171B", "#FFFFFF")}
                            font-Size={"10px"}
                            fontStyle={"normal"}
                            fontWeight={"400"}
                            lineHeight={"20px"}
                          >
                            $24,344,108.54
                          </Text>
                        </Td>
                      </Tr>
                      <Tr>
                        <Td>
                          <Flex>
                            <Image src="/images/weth.svg" alt=""></Image>
                            <Image src="/images/BIT.svg" ml={"-15px"} alt=""></Image>
                            <Box>
                              <Text
                                color={useColorModeValue("#16171B", "#FFFFFF")}
                                fontSize={"11px"}
                                fontStyle={"normal"}
                                fontWeight={"600"}
                                lineHeight={"11px"}
                                ml={"10px"}
                                mt={"1px"}
                              >
                                24,278,200.00 BIT  +  6,330.63 WETH (0.3%)
                              </Text>
                              <Text
                                color={useColorModeValue("#000", "#A8ADBD")}
                                fontSize={"10px"}
                                fontStyle={"normal"}
                                fontWeight={"400"}
                                lineHeight={"12px"}
                                opacity={"0.5"}
                                ml={"10px"}
                                mt={"5px"}
                              >
                                $23,459,193.41
                              </Text>
                            </Box>
                          </Flex>
                        </Td>
                        <Td>
                          <Flex>
                            <Box>
                              <Text
                                color={useColorModeValue("#16171B", "#FFFFFF")}
                                fontSize={"10px"}
                                fontStyle={"normal"}
                                fontWeight={"400"}
                                lineHeight={"20px"}
                              >
                                [2.95428e-39, 3.38492e+38]
                              </Text>
                              <Text
                                color={useColorModeValue("#000", "#A8ADBD")}
                                fontSize={"10px"}
                                fontStyle={"normal"}
                                fontWeight={"400"}
                                lineHeight={"12px"}
                                opacity={"0.5"}
                              >
                                BIT/WETH
                              </Text>
                            </Box>
                          </Flex>
                        </Td>
                        <Td>
                          <Flex>
                            <Image src="/images/BIT.svg" width={"15px"} height={"15px"} flex-shrink={"0"} borderRadius={"150px"} mt={"2px"} alt=""></Image>
                            <Box
                              ml={"5px"}>
                              <Text
                                color={useColorModeValue("#16171B", "#FFFFFF")}
                                fontSize={"10px"}
                                fontStyle={"normal"}
                                fontWeight={"400"}
                                lineHeight={"20px"}
                              >
                                826,329.68 BIT
                              </Text>
                              <Text
                                color={useColorModeValue("#000", "#A8ADBD")}
                                fontSize={"10px"}
                                fontStyle={"normal"}
                                fontWeight={"400"}
                                lineHeight={"12px"}
                                opacity={"0.5"}
                              >
                                $398,335.53
                              </Text>
                            </Box>

                            <Image src="/images/weth.svg" width={"15px"} height={"15px"} flex-shrink={"0"} borderRadius={"150px"} mt={"2px"} ml={"15px"} alt=""></Image>
                            <Box
                              ml={"5px"}>
                              <Text
                                color={useColorModeValue("#16171B", "#FFFFFF")}
                                fontSize={"10px"}
                                fontStyle={"normal"}
                                fontWeight={"400"}
                                lineHeight={"20px"}
                              >
                                262.03 WETH
                              </Text>
                              <Text
                                color={useColorModeValue("#000", "#A8ADBD")}
                                fontSize={"10px"}
                                fontStyle={"normal"}
                                fontWeight={"400"}
                                lineHeight={"12px"}
                                opacity={"0.5"}
                              >
                                $486,579.60
                              </Text>
                            </Box>
                          </Flex>
                        </Td>
                        <Td>
                          <Text
                            color={useColorModeValue("#16171B", "#FFFFFF")}
                            font-Size={"10px"}
                            fontStyle={"normal"}
                            fontWeight={"400"}
                            lineHeight={"20px"}
                          >
                            $24,344,108.54
                          </Text>
                        </Td>
                      </Tr>
                    </Tbody>
                    <Tfoot>
                    </Tfoot>
                  </Table>
                </TableContainer>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>

        <Box
          flex-shrink={"0"}
          filter={"drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.05))"}
          paddingTop={"20px"}
        >
          <Accordion defaultIndex={[0]} allowMultiple background={useColorModeValue("#FFFFFF", "#202020")}>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left'>
                    <Flex>
                      <Image src="/images/Fantom.svg" alt=""
                        width={"30px"}
                        height={"30px"}
                        flexShrink={"0"}
                        borderRadius={"150px"}
                      ></Image>
                      <Text
                        color={useColorModeValue("#202020", "#FFFFFF")}
                        fontSize={"15px"}
                        fontStyle={"normal"}
                        fontWeight={"400"}
                        lineHeight={"20px"}
                        ml={"10px"}
                        mt={"5px"}
                      >
                        Fantom
                      </Text>
                      <Spacer />
                      <Text
                        color={useColorModeValue("#202020", "#FFFFFF")}
                        fontSize={"15px"}
                        fontStyle={"normal"}
                        fontWeight={"400"}
                        lineHeight={"20px"}
                        mt={"25px"}
                        paddingRight={"20px"}
                      >
                        $15,664,793.04
                      </Text>
                    </Flex>
                    <Text
                      color={useColorModeValue("#202020", "#FFFFFF")}
                      fontSize={"13px"}
                      fontStyle={"normal"}
                      fontWeight={"600"}
                      lineHeight={"20px"}
                      mt={"5px"}
                    >
                      Savings
                    </Text>
                  </Box>
                  <Box>
                    <Image src={useColorModeValue("/images/Icon.svg", "/images/Icon(black).svg")} alt=""
                      width={"24px"}
                      height={"24px"}
                      flex-shrink={"0"}
                    ></Image>
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <TableContainer>
                  <Table variant='simple'>
                    <Thead>
                      <Tr
                        bg={useColorModeValue("#F5F5F7", "#191919")}
                        width={"100%"}
                        flex-shrink={"0"}
                      >
                        <Th
                          color={useColorModeValue("#434347", "#A8ADBD")}
                          fontFeatureSettings={"'cv11' on, 'cv01' on, 'ss01' on"}
                          fontSize={"10px"}
                          fontStyle={"normal"}
                          fontWeight={"400"}
                          lineHeight={"20px"}
                          letterSpacing={"1px"}
                          textTransform={"uppercase"}
                          textAlign={"left"}
                        >
                          TOken
                        </Th>
                        <Th
                          color={useColorModeValue("#434347", "#A8ADBD")}
                          fontFeatureSettings={" 'cv11' on, 'cv01' on, 'ss01' on"}
                          fontSize={"10px"}
                          fontStyle={"normal"}
                          fontWeight={"400"}
                          lineHeight={"20px"}
                          letterSpacing={"1px"}
                          textTransform={"uppercase"}
                          textAlign={"left"}
                        >
                          Balanace
                        </Th>
                        <Th
                          color={useColorModeValue("#434347", "#A8ADBD")}
                          fontFeatureSettings={" 'cv11' on, 'cv01' on, 'ss01' on"}
                          fontSize={"10px"}
                          fontStyle={"normal"}
                          fontWeight={"400"}
                          lineHeight={"20px"}
                          letterSpacing={"1px"}
                          textTransform={"uppercase"}
                          textAlign={"left"}
                        >
                          Price
                        </Th>
                        <Th
                          color={useColorModeValue("#434347", "#A8ADBD")}
                          fontFeatureSettings={" 'cv11' on, 'cv01' on, 'ss01' on"}
                          fontSize={"10px"}
                          fontStyle={"normal"}
                          fontWeight={"400"}
                          lineHeight={"20px"}
                          letterSpacing={"1px"}
                          textTransform={"uppercase"}
                          textAlign={"left"}
                        >
                          Value(USD)</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td>
                          <Flex>
                            <Image src="/images/BIT.svg" alt=""></Image>
                            <Text
                              color={useColorModeValue("#16171B", "#FFFFFF")}
                              fontSize={"11px"}
                              fontStyle={"normal"}
                              fontWeight={"600"}
                              lineHeight={"11px"}
                              mt={"10px"}
                              ml={"10px"}
                            >
                              DAI
                            </Text>
                          </Flex>
                        </Td>

                        <Td>
                          <Flex>
                            <Text
                              color={useColorModeValue("#16171B", "#FFFFFF")}
                              fontSize={"10px"}
                              fontStyle={"normal"}
                              fontWeight={"400"}
                              lineHeight={"20px"}
                            >
                              280,161.85DAI
                            </Text>
                          </Flex>
                        </Td>

                        <Td>
                          <Flex>
                            <Text
                              color={useColorModeValue("#16171B", "#FFFFFF")}
                              fontSize={"10px"}
                              fontStyle={"normal"}
                              fontWeight={"400"}
                              lineHeight={"20px"}
                            >
                              $1.00
                            </Text>
                          </Flex>
                        </Td>

                        <Td>
                          <Flex>
                            <Text
                              color={useColorModeValue("#16171B", "#FFFFFF")}
                              fontSize={"10px"}
                              fontStyle={"normal"}
                              fontWeight={"400"}
                              lineHeight={"20px"}
                            >
                              $24,344,108.54
                            </Text>
                          </Flex>
                        </Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>

        <Box
          flex-shrink={"0"}
          filter={"drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.05))"}
          paddingTop={"20px"}
          paddingBottom={"25px"}
        >
          <Accordion defaultIndex={[0]} allowMultiple background={useColorModeValue("#FFFFFF", "#202020")}>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left'>
                    <Flex>
                      <Image src="/images/Velodrome.svg" alt=""
                        width={"30px"}
                        height={"30px"}
                        flexShrink={"0"}
                        borderRadius={"150px"}
                      ></Image>
                      <Text
                        color={useColorModeValue("#202020", "#FFFFFF")}
                        fontSize={"15px"}
                        fontStyle={"normal"}
                        fontWeight={"400"}
                        lineHeight={"20px"}
                        ml={"10px"}
                        mt={"5px"}
                      >
                        Velodrome
                      </Text>
                      <Spacer />
                      <Text
                        color={useColorModeValue("#202020", "#FFFFFF")}
                        fontSize={"15px"}
                        fontStyle={"normal"}
                        fontWeight={"400"}
                        lineHeight={"20px"}
                        mt={"25px"}
                        paddingRight={"20px"}
                      >
                        $0.664,793
                      </Text>
                    </Flex>
                    <Text
                      color={useColorModeValue("#202020", "#FFFFFF")}
                      fontSize={"13px"}
                      fontStyle={"normal"}
                      fontWeight={"600"}
                      lineHeight={"20px"}
                      mt={"5px"}
                    >
                      Locked
                    </Text>
                  </Box>
                  <Box>
                    <Image src={useColorModeValue("/images/Icon.svg", "/images/Icon(black).svg")} alt=""
                      width={"24px"}
                      height={"24px"}
                      flex-shrink={"0"}
                    ></Image>
                  </Box>
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <TableContainer>
                  <Table variant='simple'>
                    <Thead>
                      <Tr
                        bg={useColorModeValue("#F5F5F7", "#191919")}
                        width={"100%"}
                        flex-shrink={"0"}
                      >
                        <Th
                          color={useColorModeValue("#434347", "#A8ADBD")}
                          fontFeatureSettings={"'cv11' on, 'cv01' on, 'ss01' on"}
                          fontSize={"10px"}
                          fontStyle={"normal"}
                          fontWeight={"400"}
                          lineHeight={"20px"}
                          letterSpacing={"1px"}
                          textTransform={"uppercase"}
                          textAlign={"left"}
                        >
                          Pool
                        </Th>
                        <Th
                          color={useColorModeValue("#434347", "#A8ADBD")}
                          fontFeatureSettings={" 'cv11' on, 'cv01' on, 'ss01' on"}
                          fontSize={"10px"}
                          fontStyle={"normal"}
                          fontWeight={"400"}
                          lineHeight={"20px"}
                          letterSpacing={"1px"}
                          textTransform={"uppercase"}
                          textAlign={"left"}
                        >
                          UNLOCK TIME
                        </Th>
                        <Th
                          color={useColorModeValue("#434347", "#A8ADBD")}
                          fontFeatureSettings={" 'cv11' on, 'cv01' on, 'ss01' on"}
                          fontSize={"10px"}
                          fontStyle={"normal"}
                          fontWeight={"400"}
                          lineHeight={"20px"}
                          letterSpacing={"1px"}
                          textTransform={"uppercase"}
                          textAlign={"left"}
                        >
                          Value(USD)
                        </Th>

                      </Tr>
                    </Thead>
                    <Tbody>
                      <Tr>
                        <Td>
                          <Flex>
                            <Image src="/images/BIT.svg" alt=""></Image>
                            <Box>
                              <Text
                                color={useColorModeValue("#16171B", "#FFFFFF")}
                                fontSize={"11px"}
                                fontStyle={"normal"}
                                fontWeight={"600"}
                                lineHeight={"11px"}
                                mt={"3px"}
                                ml={"10px"}
                              >
                                1.00 VELO
                              </Text>
                              <Text
                                color={"#000"}
                                fontSize={"10px"}
                                fontStyle={"normal"}
                                fontWeight={"400"}
                                lineHeight={"12px"}
                                opacity={"0.5"}
                                ml={"10px"}
                                mt={"5px"}
                              >
                                $0.09579
                              </Text>
                            </Box>
                          </Flex>
                        </Td>

                        <Td>
                          <Flex>
                            <Text
                              color={useColorModeValue("#16171B", "#FFFFFF")}
                              fontSize={"10px"}
                              fontStyle={"normal"}
                              fontWeight={"400"}
                              lineHeight={"20px"}
                            >
                              280,161.85DAI
                            </Text>
                          </Flex>
                        </Td>

                        <Td>
                          <Flex>
                            <Text
                              color={useColorModeValue("#16171B", "#FFFFFF")}
                              fontSize={"10px"}
                              fontStyle={"normal"}
                              fontWeight={"400"}
                              lineHeight={"20px"}
                            >
                              $24,344,108.54
                            </Text>
                          </Flex>
                        </Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Box>
    </>
  )
}

export default PortfolioPanelComponent