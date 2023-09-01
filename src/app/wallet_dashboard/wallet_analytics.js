"use client";
import { Box, Flex, Image, Text, Table, Thead, Tbody, Tr, Th, Td, TableContainer, useColorMode, colorMode, Tooltip, Skeleton } from '@chakra-ui/react';
import React from 'react'
import AssetAllocationPieChart from './AssetAllocationPieChart';
import AssetTrendSplineChart from './AssetTrendSplineChart';
import PerformanceMultiLineChart from './PerformanceMultiLineChart';
import BlockchainAllocationTreemapChart from './BlockchainAllocationTreemapChart';
import { useSelector } from 'react-redux';

const SkeletonRow = () => (
  <Box as="tr">
    <Td>
      <Skeleton height="10px" my={4} />
    </Td>
    <Td>
      <Skeleton height="10px" my={4} />
    </Td>
    <Td>
      <Skeleton height="10px" my={4} />
    </Td>
  </Box>
)

const WalletAnalyticsPanel = () => {
  const { colorMode } = useColorMode();
  const walletBalanceData = useSelector((state) => state?.walletDashboardTableData?.walletBalanceData)
  const value1 = "300";
  const value2 = "-300";

  const protocolAllocationData = useSelector((state) => state?.walletDashboardTableData?.protocolAllocationForAddress);

  return (
    <>
      <Box
        display={'inline-flex'}
        w="100%"
        my="10px"
      >
        <Box
          w='50%'
          display={"flex"}
          flexDirection={"column"}
          borderRadius={"6px"}
          _dark={{
            bg: "#202020",
            border: "1px solid #272727"
          }}
          _light={{
            bg: "#FFFFFF",
            border: "1px solid #ADADAD"
          }}
          mr="10px"
          maxHeight={"380px"}
        >
          <Box
            display="flex"
            justifyContent={"space-between"}
            alignItems={"center"}
            p="22px 25px"
          >
            <Text
              fontSize={"18px"}
              fontWeight={"600"}
              lineHeight={"20px"}
              _dark={{ color: "#FFF" }}
              _light={{ color: "#212121" }}
            >
              Blockchain Allocation
            </Text>
            {/*   <Button
              fontSize={"10px"}
              fontWeight={400}
              lineHeight={"20px"}
              _dark={{ color: "#FFF", bgColor: "#191919", border: "1px solid #979AA5" }}
              _light={{ color: "#16171B", bgColor: "#979AA5", border: "1px solid #787878" }}
              padding={"7px 11px"}
            >
              View More
            </Button> */}
          </Box>
          <Box paddingLeft={"15px"}>
            <BlockchainAllocationTreemapChart />
          </Box>
        </Box>

        <Box
          w='50%'
          display={"flex"}
          flexDirection={"column"}
          borderRadius={"6px"}
          _dark={{
            bg: "#202020",
            border: "1px solid #272727"
          }}
          _light={{
            bg: "#FFFFFF",
            border: "1px solid #ADADAD"
          }}
          ml="10px"
          maxHeight={"380px"}
        >
          {/* <Box
            display="flex"
            p="22px 25px"
          > */}
          <Flex
            height={"30px"}
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
              fontSize={"18px"}
              fontWeight={"600"}
              lineHeight={"20px"}
              _dark={{ color: "#FFF" }}
              _light={{ color: "#212121" }}
              mt={"20px"}
              ml={"25px"}
            >
              Assets Allocation
            </Text>
            <>
              <Tooltip label="Assets allocation talks about the value distribution among different assets.">
                <Image width={"12px"}
                  height={"12px"}
                  flexShrink={"0"}
                  mt={"25px"}
                  ml={"5px"}
                  alt=''
                  src="/images/Frame.svg">
                </Image>
              </Tooltip>
            </>
          </Flex>
          {/* </Box> */}
          <Box
            mt={"20px"}
          >
            <AssetAllocationPieChart />
          </Box>
        </Box>

      </Box>

      <Box
        display={'inline-flex'}
        w="100%"
        my="10px"
      >
        <Box
          w='50%'
          height={"367px"}
          display={"flex"}
          flexDirection={"column"}
          borderRadius={"6px"}
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
            borderRadius={"6px"}
            _dark={{
              bg: "#202020",
              color: "#FFFFFF"
            }}
            _light={{
              bg: "#FFFFFF",
              color: "#16171B"
            }}
            pb="14px"
          >
            <Text
              fontSize={"18px"}
              fontWeight={"600"}
              lineHeight={"20px"}
              ml={"20px"}
              mr={"6px"}
              paddingTop={"15px"}
            >
              Protocol Allocation
            </Text>
            <>
              <Tooltip label="Protocol allocations talks about the value distribution among different Defies.">
                <Image width={"12px"}
                  height={"12px"}
                  flexShrink={"0"}
                  mt={"20px"}
                  alt=''
                  src="/images/Frame.svg">
                </Image>
              </Tooltip>
            </>
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
                fontSize={"14px"}
                fontWeight={"400"}
                lineHeight={"20px"}
                letterSpacing={"1px"}
                textTransform={"uppercase"}>
                <Tr>

                  <Th>
                    <Flex>
                      <Text _light={{ color: "#434347" }}
                        _dark={{ color: "#A8ADBD" }}
                        fontSize={"14px"}
                        fontWeight={"400"}
                        lineHeight={"20px"}
                        letterSpacing={"1px"}
                        textTransform={"uppercase"}>
                        DeFi Name</Text>

                      <>
                        <Image width={"12px"}
                          height={"12px"}
                          flexShrink={"0"}
                          alt=''
                          mt={"5px"}
                          src={colorMode === 'light' ? ("/images/Definame(light).svg") : ("/images/Definame(black).svg")}>
                        </Image>
                      </>
                    </Flex>
                  </Th>

                  <Th>
                    <Flex >
                      <Text _light={{ color: "#434347" }}
                        _dark={{ color: "#A8ADBD" }}
                        fontSize={"14px"}
                        fontWeight={"400"}
                        lineHeight={"20px"}
                        letterSpacing={"1px"}
                        textTransform={"uppercase"}>
                        Share</Text>
                      <>
                        <Image width={"12px"}
                          height={"12px"}
                          flexShrink={"0"}
                          alt=''
                          mt={"5px"}
                          src={colorMode === 'light' ? ("/images/Definame(light).svg") : ("/images/Definame(black).svg")}>
                        </Image>
                      </>
                    </Flex>
                  </Th>

                  <Th>
                    <Flex>
                      <Text _light={{ color: "#434347" }}
                        _dark={{ color: "#A8ADBD" }}
                        fontSize={"14px"}
                        fontWeight={"400"}
                        lineHeight={"20px"}
                        letterSpacing={"1px"}
                        textTransform={"uppercase"}>
                        Value</Text>
                      <>
                        <Image width={"12px"}
                          height={"12px"}
                          flexShrink={"0"}
                          alt=''
                          mt={"5px"}
                          src={colorMode === 'light' ? ("/images/Definame(light).svg") : ("/images/Definame(black).svg")}>
                        </Image>
                      </>
                    </Flex>
                  </Th>
                </Tr>
              </Thead>

              <Tbody
                fontSize={"14px"}
                fontWeight={"400"}
                lineHeight={"20px"}
                _dark={{ bgColor: "#202020" }}
                _light={{ bgColor: "#FFF" }} >
                {protocolAllocationData?.isError && (
                  <>
                    <Tr >
                      <Td
                        _dark={{
                          color: "#FFF"
                        }}
                        _light={{
                          color: "#16171B"
                        }}
                        fontSize={"20px"}
                        fontWeight={"400"}
                        letterSpacing={"1px"}
                        colSpan={8}
                        textAlign={"center"}
                        height={"245px"}
                      >
                        No Data Available
                      </Td>
                    </Tr>
                  </>
                )}
                {protocolAllocationData?.isLoading && (
                  <>
                    <SkeletonRow />
                    <SkeletonRow />
                    <SkeletonRow />
                    <SkeletonRow />
                    <SkeletonRow />
                  </>
                )}
                {protocolAllocationData?.isSuccess &&
                  (Object.keys(protocolAllocationData?.data)?.length > 0 ?
                    (Object.keys(protocolAllocationData?.data)?.map((item, i) => {
                      console.log(protocolAllocationData?.data[item], 'item')
                      return (
                        <>
                          <Tr height={"40px"} key={i}>
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
                                    src={protocolAllocationData?.data[item]?.logo}
                                  ></Image>
                                </>

                                <Text ml="6px"
                                  fontSize={"14px"}>{protocolAllocationData?.data[item]?.name}</Text>
                              </Box>
                            </Td>

                            <Td>
                              <Box
                                display={"flex"}
                                alignItems={"center"}
                              >
                                <Text
                                  fontSize={"14px"}
                                  fontWeight={"400"}
                                  letterSpacing={"1px"}
                                  ml="6px"
                                  _light={{ color: "#16171B" }}
                                  _dark={{ color: "#FFFFFF" }}
                                >
                                  {protocolAllocationData?.data[item]?.percentage} %
                                </Text>
                              </Box>
                            </Td>
                            <Td fontSize={"14px"}>USD {protocolAllocationData?.data[item]?.value}</Td>
                          </Tr>


                        </>
                      )





                    }))
                    :
                    (
                      <>
                        <>
                          <Tr >
                            <Td
                              _dark={{
                                color: "#FFF"
                              }}
                              _light={{
                                color: "#16171B"
                              }}
                              fontSize={"20px"}
                              fontWeight={"400"}
                              letterSpacing={"1px"}
                              colSpan={8}
                              textAlign={"center"}
                              height={"245px"}
                            >
                              No Data Available
                            </Td>
                          </Tr>
                        </>
                      </>
                    )
                  )
                }

              </Tbody>

            </Table>
          </TableContainer>
        </Box>


        <Box
          w='50%'
          height={"367px"}
          display={"flex"}
          flexDirection={"column"}
          borderRadius={"6px"}
          _dark={{
            bg: "#202020",
            border: "1px solid #272727"
          }}
          _light={{
            bg: "#FFFFFF",
            border: "1px solid #ADADAD"
          }}
          ml="10px"
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
            }}
            pb="14px"
          >
            <Text
              fontSize={"18px"}
              fontWeight={"600"}
              lineHeight={"20px"}
              ml={"20px"}
              mr={"6px"}
              paddingTop={"15px"}
            >
              Interaction with Known Entities
            </Text>
            <>
              <Tooltip label="Interaction with Known Entities shows the transactions that the wallet is doing with the centralized bodies i.e., exchanges.">
                <Image width={"12px"}
                  height={"12px"}
                  flexShrink={"0"}
                  mt={"20px"}
                  alt=''
                  src="/images/Frame.svg">
                </Image>
              </Tooltip>
            </>
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
                fontSize={"14px"}
                fontWeight={"400"}
                lineHeight={"20px"}
                letterSpacing={"1px"}
                textTransform={"uppercase"}>
                <Tr>

                  <Th>
                    <Flex>
                      <Text _light={{ color: "#434347" }}
                        _dark={{ color: "#A8ADBD" }}
                        fontSize={"14px"}
                        fontWeight={"400"}
                        lineHeight={"20px"}
                        letterSpacing={"1px"}
                        textTransform={"uppercase"}>
                        Entities Name</Text>
                      <>
                        <Image width={"12px"}
                          height={"12px"}
                          flexShrink={"0"}
                          alt=''
                          mt={"5px"}
                          src={colorMode === 'light' ? ("/images/Definame(light).svg") : ("/images/Definame(black).svg")}>
                        </Image>
                      </>
                    </Flex>
                  </Th>

                  <Th>
                    <Flex >
                      <Text _light={{ color: "#434347" }}
                        _dark={{ color: "#A8ADBD" }}
                        fontSize={"14px"}
                        fontWeight={"400"}
                        lineHeight={"20px"}
                        letterSpacing={"1px"}
                        textTransform={"uppercase"}>
                        Share</Text>
                      <>
                        <Image width={"12px"}
                          height={"12px"}
                          flexShrink={"0"}
                          alt=''
                          mt={"5px"}
                          src={colorMode === 'light' ? ("/images/Definame(light).svg") : ("/images/Definame(black).svg")}>
                        </Image>
                      </>
                    </Flex>
                  </Th>

                  <Th>
                    <Flex>
                      <Text _light={{ color: "#434347" }}
                        _dark={{ color: "#A8ADBD" }}
                        fontSize={"14px"}
                        fontWeight={"400"}
                        lineHeight={"20px"}
                        letterSpacing={"1px"}
                        textTransform={"uppercase"}>
                        Value</Text>
                      <>
                        <Image width={"12px"}
                          height={"12px"}
                          flexShrink={"0"}
                          alt=''
                          mt={"5px"}
                          src={colorMode === 'light' ? ("/images/Definame(light).svg") : ("/images/Definame(black).svg")}>
                        </Image>
                      </>
                    </Flex>
                  </Th>
                </Tr>
              </Thead>

              <Tbody
                fontSize={"14px"}
                fontWeight={"400"}
                lineHeight={"20px"}
                _dark={{ bgColor: "#202020" }}
                _light={{ bgColor: "#FFF" }} >
                {walletBalanceData?.isError && (
                  <>
                    <Tr >
                      <Td
                        _dark={{
                          color: "#FFF"
                        }}
                        _light={{
                          color: "#16171B"
                        }}
                        fontSize={"20px"}
                        fontWeight={"400"}
                        letterSpacing={"1px"}
                        colSpan={8}
                        textAlign={"center"}
                        p="20px"
                        height={"245px"}
                      >
                        No Data Available
                      </Td>
                    </Tr>
                  </>
                )}
                {walletBalanceData?.isLoading && (
                  <>
                    <SkeletonRow />
                    <SkeletonRow />
                    <SkeletonRow />
                    <SkeletonRow />
                    <SkeletonRow />
                  </>
                )}
                {walletBalanceData?.isSuccess &&
                  (walletBalanceData?.data?.data?.length > 0 ?
                    (walletBalanceData?.data?.data.map((item, i) => {
                      return (
                        <>
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
                                  fontSize={"14px"}
                                  fontWeight={"400"}
                                  letterSpacing={"1px"}
                                  ml="6px"
                                  _light={{ color: "#16171B" }}
                                  _dark={{ color: "#FFFFFF" }}
                                >
                                  60%
                                </Text>
                              </Box>
                            </Td>
                            <Td fontSize={"14px"}>USD 356,456,560</Td>
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

                                <Text ml="6px" fontSize={"14px"}>  Morpho Aave </Text>
                              </Box>
                            </Td>
                            <Td><Box
                              display={"flex"}
                              alignItems={"center"}
                            >
                              <Text
                                fontSize={"14px"}
                                fontWeight={"400"}
                                letterSpacing={"1px"}
                                ml="6px"
                                _light={{ color: "#16171B" }}
                                _dark={{ color: "#FFFFFF" }}
                              >
                                40%
                              </Text>
                            </Box></Td>
                            <Td fontSize={"14px"}>USD 256,456,560</Td>
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

                                <Text ml="6px" fontSize={"14px"}> Compound V3 </Text>
                              </Box></Td>
                            <Td><Box
                              display={"flex"}
                              alignItems={"center"}
                            >
                              <Text
                                fontSize={"14px"}
                                fontWeight={"400"}
                                letterSpacing={"1px"}
                                ml="6px"
                                _light={{ color: "#16171B" }}
                                _dark={{ color: "#FFFFFF" }}
                              >
                                13.09%
                              </Text>
                            </Box></Td>
                            <Td fontSize={"14px"}>USD 46,456,560</Td>
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

                                <Text ml="6px" fontSize={"14px"}>  Radiant V2 </Text>
                              </Box></Td>
                            <Td><Box
                              display={"flex"}
                              alignItems={"center"}
                            >
                              <Text
                                fontSize={"14px"}
                                fontWeight={"400"}
                                letterSpacing={"1px"}
                                ml="6px"
                                _light={{ color: "#16171B" }}
                                _dark={{ color: "#FFFFFF" }}
                              >
                                15%
                              </Text>
                            </Box></Td>
                            <Td fontSize={"14px"}>USD 66,456,560</Td>
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

                                <Text ml="10px" fontSize={"14px"}> FluidTokens </Text>
                              </Box></Td>
                            <Td><Box
                              display={"flex"}
                              alignItems={"center"}
                            >
                              <Text
                                fontSize={"14px"}
                                fontWeight={"400"}
                                letterSpacing={"1px"}
                                ml="6px"
                                _light={{ color: "#16171B" }}
                                _dark={{ color: "#FFFFFF" }}
                              >
                                13.09%
                              </Text>
                            </Box></Td>
                            <Td fontSize={"14px"}>USD 56,456,560</Td>
                          </Tr>
                        </>
                      );
                    })) :
                    (
                      <>
                        <Tr >
                          <Td
                            _dark={{ color: "#FFF" }}
                            _light={{ color: "#16171B" }}
                            fontSize={"20px"}
                            fontWeight={"400"}
                            letterSpacing={"1px"}
                            colSpan={8}
                            textAlign={"center"}
                            height={"245px"}
                          >
                            No Data Available
                          </Td>
                        </Tr>

                      </>
                    ))
                }


              </Tbody>

            </Table>
          </TableContainer>
        </Box>


      </Box>

      {/* this is varun part of code */}



      <Box

        display={'inline-flex'}

        w="100%"

        my="10px"

      >

        <Box

          w='50%'

          height={"367px"}

          display={"flex"}

          flexDirection={"column"}

          borderRadius={"6px"}

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
            borderRadius={"6px"}
            _dark={{

              bg: "#202020",

              color: "#FFFFFF"

            }}

            _light={{

              bg: "#FFFFFF",

              color: "#16171B"

            }}
            pb="14px"
          >
            <Text
              fontSize={"18px"}
              fontWeight={"600"}
              lineHeight={"20px"}
              ml={"20px"}
              mr={"6px"}
              paddingTop={"15px"}
            >
              Inflow Tokens (30 Days)
            </Text>
            <>
              <Tooltip label="Inflow/outflow shows the number of tokens that are coming in wallet.">
                <Image width={"12px"}
                  height={"12px"}
                  flexShrink={"0"}
                  mt={"20px"}
                  alt=''
                  src="/images/Frame.svg">
                </Image>
              </Tooltip>
            </>
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

                fontSize={"14px"}

                fontWeight={"400"}

                lineHeight={"20px"}

                letterSpacing={"1px"}

                textTransform={"uppercase"}>

                <Tr>



                  <Th>

                    <Flex>

                      <Text paddingRight={"5px"}
                        _light={{ color: "#434347" }}
                        _dark={{ color: "#A8ADBD" }}
                        fontSize={"14px"}
                        fontWeight={"400"}
                        lineHeight={"20px"}
                        letterSpacing={"1px"}
                        textTransform={"uppercase"}>Asset Name</Text>



                      <>

                        <Image width={"12px"}
                          height={"12px"}
                          flexShrink={"0"}
                          alt=''
                          mt={"5px"}
                          src={colorMode === 'light' ? ("/images/Definame(light).svg") : ("/images/Definame(black).svg")}>
                        </Image>
                      </>

                    </Flex>

                  </Th>



                  <Th>

                    <Flex >

                      <Text paddingRight={"5px"}
                        _light={{ color: "#434347" }}
                        _dark={{ color: "#A8ADBD" }}
                        fontSize={"14px"}
                        fontWeight={"400"}
                        lineHeight={"20px"}
                        letterSpacing={"1px"}
                        textTransform={"uppercase"}>Value</Text>

                      <>

                        <Image width={"12px"}
                          height={"12px"}
                          flexShrink={"0"}
                          alt=''
                          mt={"5px"}
                          src={colorMode === 'light' ? ("/images/Definame(light).svg") : ("/images/Definame(black).svg")}>
                        </Image>
                      </>

                    </Flex>

                  </Th>



                  <Th>

                    <Flex>

                      <Text _light={{ color: "#434347" }}
                        _dark={{ color: "#A8ADBD" }}
                        fontSize={"14px"}
                        fontWeight={"400"}
                        lineHeight={"20px"}
                        letterSpacing={"1px"}
                        textTransform={"uppercase"}>Share</Text>

                      <>

                        <Image width={"12px"}
                          height={"12px"}
                          flexShrink={"0"}
                          alt=''
                          mt={"5px"}
                          src={colorMode === 'light' ? ("/images/Definame(light).svg") : ("/images/Definame(black).svg")}>
                        </Image>
                      </>

                    </Flex>

                  </Th>

                </Tr>

              </Thead>



              <Tbody

                fontSize={"14px"}

                fontWeight={"400"}

                lineHeight={"20px"}

                _dark={{ bgColor: "#202020" }}

                _light={{ bgColor: "#FFF" }} >
                {walletBalanceData?.isError && (
                  <>
                    <Tr >
                      <Td
                        _dark={{
                          color: "#FFF"
                        }}
                        _light={{
                          color: "#16171B"
                        }}
                        fontSize={"20px"}
                        fontWeight={"400"}
                        letterSpacing={"1px"}
                        colSpan={8}
                        textAlign={"center"}
                        p="20px"
                        height={"245px"}
                      >
                        No Data Available
                      </Td>
                    </Tr>
                  </>
                )}
                {walletBalanceData?.isLoading && (
                  <>
                    <SkeletonRow />
                    <SkeletonRow />
                    <SkeletonRow />
                    <SkeletonRow />
                    <SkeletonRow />
                  </>
                )}
                {walletBalanceData?.isSuccess &&
                  (walletBalanceData?.data?.data?.length > 0 ?
                    (walletBalanceData?.data?.data.map((item, i) => {
                      return (
                        <>

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

                                    src="/images/t1.png"

                                  ></Image>

                                </>



                                <Text ml="6px" fontSize={"14px"}> Venus</Text>

                              </Box>

                            </Td>



                            <Td>

                              <Box

                                display={"flex"}

                                alignItems={"center"}

                              >

                                <Text

                                  fontSize={"14px"}

                                  fontWeight={"400"}

                                  letterSpacing={"1px"}

                                  ml="6px"

                                  color={value1 < 0 ? "#EF1E1E" : "#245F00"}

                                >

                                  {value1 >= 0 ? `+${value1} USD` : `${value1} USD`}

                                </Text>

                              </Box>

                            </Td>

                            <Td fontSize={"14px"}>60%</Td>

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

                                    src="/images/t2.png"

                                  ></Image>

                                </>



                                <Text ml="6px" fontSize={"14px"}>  Morpho Aave </Text>

                              </Box>

                            </Td>

                            <Td><Box

                              display={"flex"}

                              alignItems={"center"}

                            >

                              <Text

                                fontSize={"14px"}

                                fontWeight={"400"}

                                letterSpacing={"1px"}

                                ml="6px"

                                color={value1 < 0 ? "#EF1E1E" : "#245F00"}

                              >

                                {value1 >= 0 ? `+${value1} USD` : `${value1} USD`}

                              </Text>

                            </Box></Td>

                            <Td fontSize={"14px"}>30%</Td>

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

                                    src="/images/t3.png"

                                  ></Image>

                                </>



                                <Text ml="6px" fontSize={"14px"}> Compound V3 </Text>

                              </Box></Td>

                            <Td><Box

                              display={"flex"}

                              alignItems={"center"}

                            >

                              <Text

                                fontSize={"14px"}

                                fontWeight={"400"}

                                letterSpacing={"1px"}

                                ml="6px"

                                color={value1 < 0 ? "#EF1E1E" : "#245F00"}

                              >

                                {value1 >= 0 ? `+${value1} USD` : `${value1} USD`}

                              </Text>

                            </Box></Td>

                            <Td fontSize={"14px"}>50%</Td>

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

                                    src="/images/t4.png"

                                  ></Image>

                                </>



                                <Text ml="6px" fontSize={"14px"}>  Radiant V2 </Text>

                              </Box></Td>

                            <Td><Box

                              display={"flex"}

                              alignItems={"center"}

                            >

                              <Text

                                fontSize={"14px"}

                                fontWeight={"400"}

                                letterSpacing={"1px"}

                                ml="6px"

                                color={value1 < 0 ? "#EF1E1E" : "#245F00"}

                              >

                                {value1 >= 0 ? `+${value1} USD` : `${value1} USD`}

                              </Text>

                            </Box></Td>

                            <Td fontSize={"14px"}>60%</Td>

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

                                    src="/images/t5.png"

                                  ></Image>

                                </>



                                <Text ml="6px" fontSize={"14px"}> FluidTokens </Text>

                              </Box></Td>

                            <Td><Box

                              display={"flex"}

                              alignItems={"center"}

                            >

                              <Text

                                fontSize={"14px"}

                                fontWeight={"400"}

                                letterSpacing={"1px"}

                                ml="6px"

                                color={value1 < 0 ? "#EF1E1E" : "#245F00"}

                              >

                                {value1 >= 0 ? `+${value1} USD` : `${value1} USD`}

                              </Text>

                            </Box></Td>

                            <Td fontSize={"14px"}>30%</Td>

                          </Tr>
                        </>
                      );
                    })) :
                    (
                      <>
                        <Tr >
                          <Td
                            _dark={{
                              color: "#FFF"
                            }}
                            _light={{
                              color: "#16171B"
                            }}
                            fontSize={"20px"}
                            fontWeight={"400"}
                            letterSpacing={"1px"}
                            colSpan={8}
                            textAlign={"center"}
                            height={"245px"}
                          >
                            No Data Available
                          </Td>
                        </Tr>

                      </>
                    ))
                }

              </Tbody>



            </Table>

          </TableContainer>

        </Box>



        {/* Table divider */}





        <Box

          w='50%'

          height={"367px"}

          display={"flex"}

          flexDirection={"column"}

          borderRadius={"6px"}

          _dark={{

            bg: "#202020",

            border: "1px solid #272727"

          }}

          _light={{

            bg: "#FFFFFF",

            border: "1px solid #ADADAD"

          }}

          ml="10px"

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
            }}
            pb="14px"
          >

            <Text

              fontSize={"18px"}

              fontStyle={"normal"}

              fontWeight={"600"}

              lineHeight={"20px"}

              ml={"20px"}

              mr={"6px"}

              paddingTop={"15px"}

            >

              Outflow Tokens (30 Days)

            </Text>
            <>
              <Tooltip label="Outflow shows the number of tokens that are going out of wallet.">
                <Image width={"12px"}
                  height={"12px"}
                  flexShrink={"0"}
                  mt={"20px"}
                  alt=''
                  src="/images/Frame.svg">
                </Image>
              </Tooltip>
            </>
          </Flex>



          <TableContainer>

            <Table variant='simple'>

              {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}

              <Thead

                _dark={{
                  color: "#FFFFFF",

                  bg: "#191919"
                }}

                _light={{
                  color: "#16171B",

                  bg: "#F5F5F7"
                }}

                fontSize={"14px"}

                fontWeight={"400"}

                lineHeight={"20px"}

                letterSpacing={"1px"}

                textTransform={"uppercase"}>

                <Tr>



                  <Th>

                    <Flex>

                      <Text paddingRight={"5px"}
                        _light={{ color: "#434347" }}
                        _dark={{ color: "#A8ADBD" }}
                        fontSize={"14px"}
                        fontWeight={"400"}
                        lineHeight={"20px"}
                        letterSpacing={"1px"}
                        textTransform={"uppercase"}>Asset Name</Text>



                      <>

                        <Image width={"12px"}
                          height={"12px"}
                          flexShrink={"0"}
                          alt=''
                          mt={"5px"}
                          src={colorMode === 'light' ? ("/images/Definame(light).svg") : ("/images/Definame(black).svg")}>
                        </Image>
                      </>

                    </Flex>

                  </Th>



                  <Th>

                    <Flex>

                      <Text paddingRight={"5px"}
                        _light={{ color: "#434347" }}
                        _dark={{ color: "#A8ADBD" }}
                        fontSize={"14px"}
                        fontWeight={"400"}
                        lineHeight={"20px"}
                        letterSpacing={"1px"}
                        textTransform={"uppercase"}>Value</Text>

                      <>

                        <Image width={"12px"}
                          height={"12px"}
                          flexShrink={"0"}
                          alt=''
                          mt={"5px"}
                          src={colorMode === 'light' ? ("/images/Definame(light).svg") : ("/images/Definame(black).svg")}>
                        </Image>
                      </>

                    </Flex>

                  </Th>



                  <Th>

                    <Flex>

                      <Text _light={{ color: "#434347" }}
                        _dark={{ color: "#A8ADBD" }}
                        fontSize={"14px"}
                        fontWeight={"400"}
                        lineHeight={"20px"}
                        letterSpacing={"1px"}
                        textTransform={"uppercase"}>Share</Text>

                      <>

                        <Image width={"12px"}
                          height={"12px"}
                          flexShrink={"0"}
                          alt=''
                          mt={"5px"}
                          src={colorMode === 'light' ? ("/images/Definame(light).svg") : ("/images/Definame(black).svg")}>
                        </Image>
                      </>

                    </Flex>

                  </Th>

                </Tr>

              </Thead>



              <Tbody

                fontSize={"14px"}

                fontWeight={"400"}

                lineHeight={"20px"}

                _dark={{ bgColor: "#202020" }}

                _light={{ bgColor: "#FFF" }} >
                {walletBalanceData?.isError && (
                  <>
                    <Tr >
                      <Td
                        _dark={{
                          color: "#FFF"
                        }}
                        _light={{
                          color: "#16171B"
                        }}
                        fontSize={"20px"}
                        fontWeight={"400"}
                        letterSpacing={"1px"}
                        colSpan={8}
                        textAlign={"center"}
                        p="20px"
                        height={"245px"}
                      >
                        No Data Available
                      </Td>
                    </Tr>
                  </>
                )}
                {walletBalanceData?.isLoading && (
                  <>
                    <SkeletonRow />
                    <SkeletonRow />
                    <SkeletonRow />
                    <SkeletonRow />
                    <SkeletonRow />
                  </>
                )}
                {walletBalanceData?.isSuccess &&
                  (walletBalanceData?.data?.data?.length > 0 ?
                    (walletBalanceData?.data?.data.map((item, i) => {
                      return (
                        <>

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

                                    src="/images/t1.png"

                                  ></Image>

                                </>



                                <Text ml="6px" fontSize={"14px"}> Venus</Text>

                              </Box>

                            </Td>



                            <Td>

                              <Box

                                display={"flex"}

                                alignItems={"center"}

                              >

                                <Text

                                  fontSize={"14px"}

                                  fontWeight={"400"}

                                  letterSpacing={"1px"}

                                  ml="6px"

                                  color={value2 < 0 ? "#EF1E1E" : "#245F00"}

                                >

                                  {value2 >= 0 ? `+${value2} USD` : `${value2} USD`}

                                </Text>

                              </Box>

                            </Td>

                            <Td fontSize={"14px"}>60%</Td>

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

                                    src="/images/t2.png"

                                  ></Image>

                                </>



                                <Text ml="6px" fontSize={"14px"}>  Morpho Aave </Text>

                              </Box>

                            </Td>

                            <Td><Box

                              display={"flex"}

                              alignItems={"center"}

                            >

                              <Text

                                fontSize={"14px"}

                                fontWeight={"400"}

                                letterSpacing={"1px"}

                                ml="6px"

                                color={value2 < 0 ? "#EF1E1E" : "#245F00"}

                              >

                                {value2 >= 0 ? `+${value2} USD` : `${value2} USD`}

                              </Text>

                            </Box></Td>

                            <Td fontSize={"14px"}>30%</Td>

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

                                    src="/images/t3.png"

                                  ></Image>

                                </>



                                <Text ml="6px" fontSize={"14px"}> Compound V3 </Text>

                              </Box></Td>

                            <Td><Box

                              display={"flex"}

                              alignItems={"center"}

                            >

                              <Text

                                fontSize={"14px"}

                                fontWeight={"400"}

                                letterSpacing={"1px"}

                                ml="6px"

                                color={value2 < 0 ? "#EF1E1E" : "#245F00"}

                              >

                                {value2 >= 0 ? `+${value2} USD` : `${value2} USD`}

                              </Text>

                            </Box></Td>

                            <Td fontSize={"14px"}>50%</Td>

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

                                    src="/images/t4.png"

                                  ></Image>

                                </>



                                <Text ml="6px" fontSize={"14px"}>  Radiant V2 </Text>

                              </Box></Td>

                            <Td><Box

                              display={"flex"}

                              alignItems={"center"}

                            >

                              <Text

                                fontSize={"14px"}

                                fontWeight={"400"}

                                letterSpacing={"1px"}

                                ml="6px"

                                color={value2 < 0 ? "#EF1E1E" : "#245F00"}

                              >

                                {value2 >= 0 ? `+${value2} USD` : `${value2} USD`}

                              </Text>

                            </Box></Td>

                            <Td fontSize={"14px"}>60%</Td>

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

                                    src="/images/t5.png"

                                  ></Image>

                                </>



                                <Text ml="6px" fontSize={"14px"}> FluidTokens </Text>

                              </Box></Td>

                            <Td><Box

                              display={"flex"}

                              alignItems={"center"}

                            >

                              <Text

                                fontSize={"14px"}

                                fontWeight={"400"}

                                letterSpacing={"1px"}

                                ml="6px"

                                color={value2 < 0 ? "#EF1E1E" : "#245F00"}

                              >

                                {value2 >= 0 ? `+${value2} USD` : `${value2} USD`}

                              </Text>

                            </Box></Td>

                            <Td fontSize={"14px"}>30%</Td>

                          </Tr>
                        </>
                      );
                    })) :
                    (
                      <>
                        <Tr >
                          <Td
                            _dark={{
                              color: "#FFF"
                            }}
                            _light={{
                              color: "#16171B"
                            }}
                            fontSize={"20px"}
                            fontWeight={"400"}
                            letterSpacing={"1px"}
                            colSpan={8}
                            textAlign={"center"}
                            height={"245px"}

                          >
                            No Data Available
                          </Td>
                        </Tr>

                      </>
                    ))
                }
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Box>

      {/* End of varun's code */}

      {/* <Box
        my="10px"
        w='100%'
        display={"flex"}
        flexDirection={"column"}
        borderRadius={"6px"}
        _dark={{
          bg: "#202020",
          border: "1px solid #272727"
        }}
        _light={{
          bg: "#FFFFFF",
          border: "1px solid #ADADAD"
        }}
        p="25px"
      >
        <Box
          display={"flex"}
          justifyContent={"space-between"}
        >
          <Text
            fontSize={"18px"}
            fontWeight={600}
            lineHeight={"20px"}
            _dark={{ color: "#FFF" }}
            _light={{ color: "#212121" }}
          >
            Asset Trend
          </Text> 
        </Box>
        <Box paddingTop={"10px"}>
          <AssetTrendSplineChart />
        </Box>
      </Box> */}
      <Box
        my="20px"
        w='100%'
        display={"flex"}
        flexDirection={"column"}
        borderRadius={"6px"}
        _dark={{
          bg: "#202020",
          border: "1px solid #272727"
        }}
        _light={{
          bg: "#FFFFFF",
          border: "1px solid #ADADAD"
        }}
        p="25px"
      >
        {/* <Box
          display={"flex"}
          justifyContent={"space-between"}
        > */}
        <Flex
          height={"10px"}
          borderRadius={"6px"}
          _dark={{
            bg: "#202020",
            color: "#FFFFFF"
          }}
          _light={{
            bg: "#FFFFFF",
            color: "#16171B"
          }}
          pb="14px"
        >
          <Text
            fontSize={"18px"}
            fontWeight={600}
            lineHeight={"20px"}
            _dark={{ color: "#FFF" }}
            _light={{ color: "#212121" }}
            paddingLeft={"15px"}
          >
            Performance
          </Text>
          <>
            <Tooltip label="Performance graph shows the wallet portfolio performance in comparison with Bitcoin and Ethereum market performance.">
              <Image width={"12px"}
                height={"12px"}
                flexShrink={"0"}
                mt={"5px"}
                ml={"5px"}
                alt=''
                src="/images/Frame.svg">
              </Image>
            </Tooltip>
          </>
        </Flex>
        {/* </Box> */}
        <Box paddingTop={"10px"}>
          <PerformanceMultiLineChart />
        </Box>
      </Box>
    </>
  );
}

export default WalletAnalyticsPanel;