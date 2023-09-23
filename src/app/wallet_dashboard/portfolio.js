import { Box, Image, Input, Text, useColorModeValue, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableContainer, Flex, Spacer, Skeleton, useColorMode, isLoaded } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { defiArrayChangedReducer, fetchWalletBalanceData } from "@/redux/wallet_dashboard_data/dataSlice";
import DefiTable from "./DefiTable";

const PortfolioPanelComponent = () => {
  const { colorMode } = useColorMode();
  const dispatch = useDispatch();

  const walletBalanceData = useSelector((state) => state?.walletDashboardTableData?.walletBalanceData);

  const fetchWalletBalanceDataHandler = () => {
    dispatch(fetchWalletBalanceData());
  }

  const defiSelected = useSelector(
    (state) => state?.walletDashboardTableData?.defiArraySelected
  );
  const DefiArrayHandler = (type) => {
    dispatch(defiArrayChangedReducer(type));
  };
  const defiArray = [
    "Wallet",
    /*  "X2Y2",
     "Blur",
     "Uniswap" */
  ];
  /*  const searchAssetByNameHandler (name) => {
 
   } */

  useEffect(() => {
    fetchWalletBalanceDataHandler();
  }, [])

  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"column"}
        px={{ base: 4 }}
      >

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
                bgColor={defiSelected.length === 0 ? colorMode === 'light' ? ("#202020") : ("#FFF") : colorMode === 'light' ? ("#FFF") : ("#202020")}
                onClick={() => {
                  DefiArrayHandler('All');
                }}
                borderRadius={"2px"}
                opacity={defiSelected.length !== 0 ? "0.5" : "1"}
                mr={"10px"}
                cursor={"pointer"}
                border={useColorModeValue("1px solid #979AA5", "1px solid #787878")}
              >
                <Text
                  fontSize={"14px"}
                  fontWeight={defiSelected.length === 0 ? "600" : "400"}
                  lineHeight={"20px"}
                  color={defiSelected.length === 0 ? colorMode === 'light' ? ("#FFF") : ("#191919") : colorMode === 'light' ? ("#191919") : ("#FFFFFF")}

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
                      bgColor={defiSelected.includes(item) ? colorMode === 'light' ? ("#202020") : ("#FFF") : colorMode === 'light' ? ("#FFFFFF") : ("#202020")}
                      onClick={() => {
                        DefiArrayHandler(item);
                      }}
                      cursor={"pointer"}
                      opacity={defiSelected.includes(item) ? "1" : "0.5"}
                      mr={"10px"}
                      borderRadius={"2px"}
                      _light={{ border: "1px solid #979AA5" }}
                      _dark={{ border: "1px solid #787878" }}
                    >
                      <Text
                        fontSize={"14px"}
                        fontWeight={defiSelected.includes(item) ? "600" : "400"}
                        lineHeight={"20px"}
                        color={defiSelected.includes(item) ? colorMode === 'light' ? ("#FFF") : ("#191919") : colorMode === 'light' ? ("#191919") : ("#FFFFFF")}

                      >
                        {item}
                      </Text>
                    </Box>

                  </>
                )
              })}
            </Box>

            {/*  <Input
              borderColor={useColorModeValue("#E8E8E8", "#333")}
              bgColor={useColorModeValue("#F5F5F7", "#191919")}
              color={useColorModeValue("#16171B", "#A8ADBD")}
              fontSize={"10px"}
              fontWeight={400}
              w="207px"
              placeholder="Search Assets"
              //onChange={(e) => { searchAssetByNameHandler(e.target.value) }} 
            /> */}
          </Box>

          <DefiTable />
        </Box>

        <Box
          mt={"20px"}
        >
          <Text
            fontSize={"16px"}
            fontWeight={"600"}
            lineHeight={"20px"}
          >
            DeFi Positions
          </Text>
        </Box>

        {/* <Box
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
              <AccordionPanel pb={4} paddingInlineStart={"1"} paddingInlineEnd={"1"}>
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
                    <SkeletonRow isLoaded={isLoaded} />
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
                            fontSize={"10px"}
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
                            fontSize={"10px"}
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
                            fontSize={"10px"}
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
        </Box> */}

        <Box
          flex-shrink={"0"}
          filter={"drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.05))"}
          paddingTop={"10px"}
        >
          <PorfolioAccordion
            name={"Fantom"}
            value={"$15,664,793.04"}
            thread={["Token", "Balance", "Price", "Value (USD)"]}
            tableData={walletBalanceData}
          />
        </Box>

        {/* <Box
          flex-shrink={"0"}
          filter={"drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.05))"}
          paddingTop={"20px"}
          paddingBottom={"25px"}
        >
          <PorfolioAccordion 
            name={"Fantom"}
            value={"$15,664,793.04"}
            thread={["Pool", "Unlock Time", "Value (USD)"]}
          />
        </Box> */}
      </Box>
    </>
  )
}

export default PortfolioPanelComponent;

const PorfolioAccordion = ({ name, value, thread, tableData }) => {

  return (
    <>
      <Accordion 
      defaultIndex={[0]} 
      allowMultiple 
      background={useColorModeValue("#FFFFFF", "#202020")}
      mb={"40px"}
      borderRadius={"6px"}
      >

        <AccordionItem>
          <h2>
            <AccordionButton>

              <Box as="span" flex='1' textAlign='left'>
                {/* <Flex>
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
                    {name}
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
                    {value}
                  </Text>
                </Flex> */}

                <Box as="span" flex='1' textAlign='left'>
                  <Flex>
                    {/* <Image src="/images/Fantom.svg" alt=""
                  width={"30px"}
                  height={"30px"}
                  flexShrink={"0"}
                  borderRadius={"150px"}
                ></Image> */}
                    <Text
                      color={useColorModeValue("#202020", "#FFFFFF")}
                      fontSize={"14px"}
                      fontStyle={"normal"}
                      fontWeight={"600"}
                      lineHeight={"20px"}
                      mt={"5px"}
                    >
                      Savings
                    </Text>
                  </Flex>
                </Box>
              </Box>

              {/* <Box>
                <Image src={useColorModeValue("/images/Icon.svg", "/images/Icon(black).svg")} alt=""
                  width={"24px"}
                  height={"24px"}
                  flex-shrink={"0"}
                ></Image>
              </Box> */}
              <Box 
                    borderRadius="50%"
                    border={useColorModeValue("1px solid #E8E8E8","1px solid #333333")}
                    background={useColorModeValue("#D9D9D9", "#191919")}
                    ml={"5px"}
                    >
                    <AccordionIcon margin={"4px"} />
                    </Box>
            </AccordionButton>
          </h2>

          <AccordionPanel pb={4} paddingInlineStart={"1"} paddingInlineEnd={"1"}>
            <Table variant='simple'
              display={{ base: "none", md: 'table' }}
              w={"100%"}
            >

              <Thead>
                <Tr
                  bg={useColorModeValue("#F5F5F7", "#191919")}
                  width={"100%"}
                  flex-shrink={"0"}
                >
                  {thread.map((item, i) => {
                    return (
                      <Th
                        key={i}
                        _light={{
                          color: "#434347"
                        }}
                        _dark={{
                          color: "#A8ADBD"
                        }}
                        fontSize={"14px"}
                        fontStyle={"normal"}
                        fontWeight={"400"}
                        lineHeight={"20px"}
                        letterSpacing={"1px"}
                        textTransform={"uppercase"}
                        textAlign={"left"}
                      >
                        {item}
                      </Th>
                    );
                  })}
                </Tr>
              </Thead>

              <Tbody>
                {(tableData?.isError || !tableData?.data?.defiBalance) && (
                  <>
                    <Tr>
                      <Td
                        colSpan={"8"}
                      >
                        <Text
                          _light={{
                            color: "#16171B"
                          }}
                          _dark={{
                            color: "#FF"
                          }}
                          fontSize={"20px"}
                          fontWeight={"400"}
                          letterSpacing={"1px"}
                          textAlign={"center"}
                          p="20px"
                          opacity={0.6}
                        >
                          No Data available
                        </Text>
                      </Td>
                    </Tr>
                  </>
                )}

                {tableData?.isLoading && (
                  <>
                    <SkeletonRow />
                    <SkeletonRow />
                    <SkeletonRow />
                  </>
                )}

                {tableData?.isSuccess && tableData?.data?.defiBalance && tableData?.data?.defiBalance?.map((item, i) => {
                  return (
                    <Tr key={i}>
                      <Td >
                        <Flex>
                          <Image
                            width={"24px"}
                            height={"24px"}
                            src={item.tokenLogoUrl}
                            alt="">
                          </Image>
                          <Text
                            _light={{
                              color: "#16171B"
                            }}
                            _dark={{
                              color: "#FFFFFF"
                            }}
                            fontSize={"14px"}
                            fontStyle={"normal"}
                            fontWeight={"600"}
                            lineHeight={"11px"}
                            mt={"10px"}
                            ml={"10px"}
                          >
                            {item.token}
                          </Text>
                        </Flex>
                      </Td>

                      <Td>
                        <Flex>
                          <Text
                            _light={{
                              color: "#16171B"
                            }}
                            _dark={{
                              color: "#FFFFFF"
                            }}
                            fontSize={"14px"}
                            fontStyle={"normal"}
                            fontWeight={"400"}
                            lineHeight={"20px"}
                          >
                            {item.balance}
                          </Text>
                        </Flex>
                      </Td>

                      <Td>
                        <Flex>
                          <Text
                            _light={{
                              color: "#16171B"
                            }}
                            _dark={{
                              color: "#FFFFFF"
                            }}
                            fontSize={"14px"}
                            fontStyle={"normal"}
                            fontWeight={"400"}
                            lineHeight={"20px"}
                          >
                            {item.price}
                          </Text>
                        </Flex>
                      </Td>

                      <Td>
                        <Flex>
                          <Text
                            _light={{
                              color: "#16171B"
                            }}
                            _dark={{
                              color: "#FFFFFF"
                            }}
                            fontSize={"14px"}
                            fontStyle={"normal"}
                            fontWeight={"400"}
                            lineHeight={"20px"}
                          >
                            {
                              ((item?.value)).toLocaleString('en-US', {
                                style: 'currency',
                                currency: 'USD'
                              })
                            }
                          </Text>
                        </Flex>
                      </Td>
                    </Tr>
                  )
                })}

              </Tbody>

            </Table >
            
            {tableData?.isSuccess && tableData?.data?.defiBalance && tableData?.data?.defiBalance?.map((item, i) => {
              return (
                <>
                  <Box
                    display={{ base: "flex", md: 'none' }}
                    flexDirection={"column"}
                    p={2}
                  >
                    <Box
                      display={"flex"}
                      alignItems={"start"}
                      flexDirection={"column"}
                      mb={"15px"}
                    >
                      <Text
                        fontSize={"14px"}
                        fontWeight={"400"}
                        letterSpacing={"1px"}

                        mr={"20px"}
                        _light={{
                          color: "#8F8F8F"
                        }}
                        _dark={{
                          color: "#ADADAD"
                        }}
                      >
                        Token
                      </Text>
                      <Flex>
                        <Image
                          width={"24px"}
                          height={"24px"}
                          src={item?.tokenLogoUrl}
                          alt="">
                        </Image>
                        <Text
                          _light={{
                            color: "#16171B"
                          }}
                          _dark={{
                            color: "#FFFFFF"
                          }}
                          fontSize={"14px"}
                          fontStyle={"normal"}
                          fontWeight={"600"}
                          lineHeight={"11px"}
                          mt={"10px"}
                          ml={"10px"}
                        >
                          {item?.token}
                        </Text>
                      </Flex>
                    </Box>
                    <Box
                      display={"flex"}
                      alignItems={"start"}
                      flexDirection={"column"}
                      mb={"15px"}
                    >
                      <Text
                        fontSize={"14px"}
                        fontWeight={"400"}
                        letterSpacing={"1px"}

                        mr={"20px"}
                        _light={{
                          color: "#8F8F8F"
                        }}
                        _dark={{
                          color: "#ADADAD"
                        }}
                      >
                        Balance
                      </Text>
                      <Text
                        _dark={{
                          color: "#FFF"
                        }}
                        _light={{
                          color: "#16171B"
                        }}
                        fontSize={"14px"}
                        fontWeight={"400"}
                        letterSpacing={"1px"}
                      >

                      </Text>
                    </Box>
                    <Box
                      display={"flex"}
                      alignItems={"start"}
                      flexDirection={"column"}
                      mb={"15px"}
                    >
                      <Text
                        fontSize={"14px"}
                        fontWeight={"400"}
                        letterSpacing={"1px"}

                        mr={"20px"}
                        _light={{
                          color: "#8F8F8F"
                        }}
                        _dark={{
                          color: "#ADADAD"
                        }}
                      >
                        % Share
                      </Text>
                      <Text
                        _dark={{
                          color: "#FFF"
                        }}
                        _light={{
                          color: "#16171B"
                        }}
                        fontSize={"14px"}
                        fontWeight={"400"}
                        letterSpacing={"1px"}
                      >
                      </Text>
                    </Box>
                  </Box>
                </>
              )
            })}

          </AccordionPanel >
        </AccordionItem >
      </Accordion >
    </>
  );
}

const SkeletonRow = () => (
  <Box as="tr">
    <Td>
      <Skeleton height="20px" my={4} />
    </Td>
    <Td>
      <Skeleton height="20px" my={4} />
    </Td>
    <Td>
      <Skeleton height="20px" my={4} />
    </Td>
  </Box>
)
