"use client"
import { Container, Table, Thead, Text, Tbody, useColorModeValue, Box, Skeleton, Tr, Th, Td, Flex, Image, Link } from '@chakra-ui/react'
import { useSelector } from "react-redux";
import isEmpty from 'is-empty';
import millify from 'millify';
import moment from 'moment/moment';
import { ExternalLinkIcon } from '@chakra-ui/icons';

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
const TransactionPanelComponent = () => {

  const value1 = "300";
  const value2 = "200";
  const value3 = "-300";
  const walletTransactionsData = useSelector((state) => state?.walletDashboardTableData?.walletTransactionsData)
  const walletAddress = useSelector(
    (state) => state?.walletDashboardTableData?.walletAddress
  );
  return (
    <>
      <Flex justifyContent={"space-between"} padding={"23px 29px 27px"}
        mt="25px"
        bgColor={useColorModeValue("#FFF", "#202020")} >
        <Text
          fontSize="18"
          fontWeight={"600"}
          color={useColorModeValue("#16171B", "#FFF")}

        >
          Wallet Transaction
        </Text>
      </Flex>
      <Table variant="simple" key={1} bgColor={"#FFF"}>
        <Thead bgColor={useColorModeValue("#F5F5F7", "#191919")}>
          <Tr>
            <Th
              color={useColorModeValue("#434347", "#A8ADBD")}
              fontSize={"14px"}
              fontWeight={"400"}
              letterSpacing={"1px"}
              alignItems={"center"}
            >
              ADDRESS AND DATE
            </Th>
            {/* <Th>
              <Box display={"flex"}
                alignItems={"center"}>
                <Text color={useColorModeValue("#434347", "#A8ADBD")}
                  fontSize={"10px"}
                  fontWeight={"400"}
                  letterSpacing={"1px"}
                  mr="6px">
                  METHOD
                </Text>

                <>
                  <Image width={2}
                    height={2}
                    alt='logo'
                    src={useColorModeValue("/images/updown-triangleicon-light.png", "/images/updown-triangleicon-dark.png")}>
                  </Image>
                </>
              </Box>
            </Th>
 */}

            <Th>
              <Box display={"flex"}
                alignItems={"center"}>

                <Text color={useColorModeValue("#434347", "#A8ADBD")}
                  fontSize={"14px"}
                  fontWeight={"400"}
                  letterSpacing={"1px"}
                  mr="6px"
                >
                  Amount  / Token
                </Text>
                <>
                  <Image width={"6px"}
                    height={"8px"}
                    alt='logo'
                    src={useColorModeValue("/images/updown-triangleicon-light.png", "/images/updown-triangleicon-dark.png")}>
                  </Image>
                </>
              </Box>
            </Th>


            <Th
              color={useColorModeValue("#434347", "#A8ADBD")}
              fontSize={"14px"}
              fontWeight={"400"}
              letterSpacing={"1px"}
            >
              FROM
            </Th>
            <Th
              color={useColorModeValue("#434347", "#A8ADBD")}
              fontSize={"14px"}
              fontWeight={"400"}
              letterSpacing={"1px"}
            >
              TO
            </Th>
            <Th
              color={useColorModeValue("#434347", "#A8ADBD")}
              fontSize={"14px"}
              fontWeight={"400"}
              letterSpacing={"1px"}
              alignItems={"center"}
            >
              TXN ID
            </Th>
            <Th
              color={useColorModeValue("#434347", "#A8ADBD")}
              fontSize={"14px"}
              fontWeight={"400"}
              letterSpacing={"1px"}
            >
              USD Value
            </Th>
          </Tr>
        </Thead>
        <Tbody bgColor={useColorModeValue("#FFF", "#202020")}>
          {walletTransactionsData.isError && (
            <>
              <Tr>
                <Td
                  _dark={{
                    color: "#FFFFFF"
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
                >
                  No data available
                </Td>
              </Tr>
            </>
          )}
          {walletTransactionsData.isLoading && (
            <>
              <SkeletonRow />
              <SkeletonRow />
              <SkeletonRow />
            </>
          )}
          {
            walletTransactionsData?.isSuccess &&
            (walletTransactionsData?.data.length > 0 ?
              (walletTransactionsData?.data?.map((item, i) => {
                return (
                  <>
                    <Tr
                      key={i}
                    >
                      <Td>
                        <Box
                          display={"flex"}
                          alignItems={"center"}
                        >
                         {/*  <>
                            <Image
                              width={5}
                              height={5}
                              alt='logo'
                              src={`/icons/${item?.blockchain.toLowerCase()}_sm_icon.svg`}
                            ></Image>
                          </> */}

                          <Box

                          >
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
                              ml="6px"
                              w="95px"
                            >
                              {walletAddress.split("").join("").substring(0, 8) + "..." + walletAddress.slice(-5)}
                            </Text>
                            <Text opacity={"0.6000000238418579"}
                              _dark={{
                                color: "#FFF"
                              }}
                              _light={{
                                color: "#16171B"
                              }}
                              fontSize={"12px"}
                              fontWeight={"400"}
                              letterSpacing={"1px"}
                              ml="6px"
                            >
                              {
                                moment.unix(item.timeStamp).format('Do MMM YYYY')
                              }
                            </Text>
                          </Box>
                        </Box>
                      </Td>
                      {/* <Td>
                        <Box
                          display={"flex"}
                          alignItems={"center"}
                        >
                          <>
                              <Image
                            width={4}
                            height={4}
                            alt='logo'
                            src="/images/recieved.png"
                          ></Image> 
                          </>

                          <Text
                            _dark={{
                              color: "#FFF"
                            }}
                            _light={{
                              color: "#16171B"
                            }}
                            fontSize={"10px"}
                            fontWeight={"400"}
                            letterSpacing={"1px"}
                            ml="6px"
                          >
                            -
                          </Text>
                        </Box>
                      </Td>
 */}

                      <Td>
                        <Box
                          display={"flex"}
                          alignItems={"center"}
                        >
                          <>
                            {/*  <Image
                            width={4}
                            height={4}
                            alt='logo'
                            src="/images/polygon-matic.png"
                          ></Image> */}
                          </>

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
                            ml="6px"
                          >
                            {item?.tokenSymbol}
                          </Text>
                          <Text opacity={"0.6000000238418579"}
                            _dark={{
                              color: "#FFF"
                            }}
                            _light={{
                              color: "#16171B"
                            }}
                            fontSize={"14px"}
                            fontWeight={"400"}
                            letterSpacing={"1px"}
                            ml="6px"
                          >

                            {item?.value !== undefined && (item?.value / Math.pow(10, 18)).toLocaleString('fullwide', { useGrouping: false })}{" ETH"}
                          </Text>
                        </Box>
                      </Td>


                      <Td>
                        <Box
                          display={"flex"}
                          alignItems={"center"}
                        >
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

                            w="95px"
                          >
                            {item?.from.split("").join("").substring(0, 6) + "..." + item?.from.slice(-5)}
                          </Text>
                        </Box>
                      </Td>

                      <Td>
                        <Box
                          display={"flex"}
                          alignItems={"center"}
                        >
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

                            w="95px"
                          >
                            {item?.to.split("").join("").substring(0, 6) + "..." + item?.to.slice(-5)}
                          </Text>
                        </Box>
                      </Td>
                      <Td>
                        <Box
                          display={"flex"}
                          alignItems={"center"}
                        >
                          <Link
                            fontSize={"14px"}
                            fontWeight={"400"}
                            fontStyle={"normal"}
                            letterSpacing={"1px"}
                            ml="4px"
                            display={"flex"}
                            alignItems={"center"}
                            _dark={{
                              color: "#FFF"
                            }}
                            _light={{
                              color: "#16171B"
                            }}
                            isExternal
                            href={`https://etherscan.io/tx/${item?.hash}`}
                          >
                            {item?.hash.split("").join("").substring(0, 6) + "..." + item?.hash.slice(-5)}
                            <ExternalLinkIcon mx='4px' />
                          </Link>

                        </Box>
                      </Td>
                      <Td>
                        <Box
                          display={"flex"}
                          alignItems={"center"}
                        >
                          <Text
                            fontSize={"14px"}
                            fontWeight={"600"}
                            letterSpacing={"1px"}
                            ml="4px"
                            _dark={{
                              color: "#FFF"
                            }}
                            _light={{
                              color: "#16171B"
                            }}
                          >
                            0
                          </Text>
                        </Box>
                      </Td>
                    </Tr>



                    {/*  <>
                    <Tr>
                      <Td>
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

                          <Box>
                            <Text
                               _light={{color:"#16171B"}}
                               _dark={{color:"#FFF"}}
                              fontSize={"10px"}
                              fontWeight={"400"}
                              letterSpacing={"1px"}
                              ml="6px"
                            >
                              0x8b4d84......43f72
                            </Text>
                            <Text opacity={"0.6000000238418579"}
                               _light={{color:"#16171B"}}
                               _dark={{color:"#FFF"}}
                              fontSize={"10px"}
                              fontWeight={"400"}
                              letterSpacing={"1px"}
                              ml="6px"
                            >11th May 2023</Text>
                          </Box>
                        </Box>

                      </Td>


                      <Td>
                        <Box
                          display={"flex"}
                          alignItems={"center"}
                        >
                          <>
                            <Image
                              width={4}
                              height={4}
                              alt='logo'
                              src="/images/deposit.png"
                            ></Image>
                          </>

                          <Text
                             _light={{color:"#16171B"}}
                             _dark={{color:"#FFF"}}
                            fontSize={"10px"}
                            fontWeight={"400"}
                            letterSpacing={"1px"}
                            ml="6px"
                          >
                            Deposit ETH
                          </Text>
                        </Box>
                      </Td>


                      <Td>
                        <Box
                          display={"flex"}
                          alignItems={"center"}
                        >
                          <>
                            <Image
                              width={4}
                              height={4}
                              alt='logo'
                              src="/images/polygon-matic.png"
                            ></Image>
                          </>

                          <Text
                             _light={{color:"#16171B"}}
                             _dark={{color:"#FFF"}}
                            fontSize={"10px"}
                            fontWeight={"400"}
                            letterSpacing={"1px"}
                            ml="6px"
                          >
                            MATIC
                          </Text>
                          <Text opacity={"0.6000000238418579"}
                             _light={{color:"#16171B"}}
                             _dark={{color:"#FFF"}}
                            fontSize={"10px"}
                            fontWeight={"400"}
                            letterSpacing={"1px"}
                            ml="6px"
                          >49.11%</Text>
                        </Box>
                      </Td>


                      <Td>
                        <Box
                          display={"flex"}
                          alignItems={"center"}
                        >
                          <Text
                             _light={{color:"#16171B"}}
                             _dark={{color:"#FFF"}}
                            fontSize={"10px"}
                            fontWeight={"400"}
                            letterSpacing={"1px"}
                            ml="6px"
                          >
                            CRV+cvxCRV (0x971a…)
                          </Text>
                        </Box>
                      </Td>

                      <Td>
                        <Box
                          display={"flex"}
                          alignItems={"center"}
                        >
                          <Text
                             _light={{color:"#16171B"}}
                             _dark={{color:"#FFF"}}
                            fontSize={"10px"}
                            fontWeight={"400"}
                            letterSpacing={"1px"}
                            ml="6px"
                          >
                            CRV+cvxCRV (0x971a…)
                          </Text>
                        </Box>
                      </Td>

                      <Td>
                        <Box
                          display={"flex"}
                          alignItems={"center"}
                        >
                          <Text
                            fontSize={"10px"}
                            fontWeight={"600"}
                            letterSpacing={"1px"}
                            ml="4px"
                            color={value2 < 0 ? "#EF1E1E" : "#245F00"}
                          >
                            {value2 >= 0 ? `+${value2} USD` : `${value2} USD`}
                          </Text>
                        </Box>
                      </Td>
                    </Tr>
                  </>




                  <>
                    <Tr>
                      <Td>
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

                          <Box>
                            <Text
                              _light={{color:"#16171B"}}
                              _dark={{color:"#FFF"}}
                              fontSize={"10px"}
                              fontWeight={"400"}
                              letterSpacing={"1px"}
                              ml="6px"
                            >
                              0x8b4d84......43f72
                            </Text>
                            <Text opacity={"0.6000000238418579"}
                               _light={{color:"#16171B"}}
                               _dark={{color:"#FFF"}}
                              fontSize={"10px"}
                              fontWeight={"400"}
                              letterSpacing={"1px"}
                              ml="6px"
                            >11th May 2023</Text>
                          </Box>
                        </Box>

                      </Td>


                      <Td>
                        <Box
                          display={"flex"}
                          alignItems={"center"}
                        >
                          <>
                            <Image
                              width={4}
                              height={4}
                              alt='logo'
                              src="/images/sent.png"
                            ></Image>
                          </>

                          <Text
                             _light={{color:"#16171B"}}
                             _dark={{color:"#FFF"}}
                            fontSize={"10px"}
                            fontWeight={"400"}
                            letterSpacing={"1px"}
                            ml="6px"
                          >
                            Sent
                          </Text>
                        </Box>
                      </Td>


                      <Td>
                        <Box
                          display={"flex"}
                          alignItems={"center"}
                        >
                          <>
                            <Image
                              width={4}
                              height={4}
                              alt='logo'
                              src="/images/polygon-matic.png"
                            ></Image>
                          </>

                          <Text
                             _light={{color:"#16171B"}}
                             _dark={{color:"#FFF"}}
                            fontSize={"10px"}
                            fontWeight={"400"}
                            letterSpacing={"1px"}
                            ml="6px"
                          >
                            MATIC
                          </Text>
                          <Text opacity={"0.6000000238418579"}
                             _light={{color:"#16171B"}}
                             _dark={{color:"#FFF"}}
                            fontSize={"10px"}
                            fontWeight={"400"}
                            letterSpacing={"1px"}
                            ml="6px"
                          >49.11%</Text>
                        </Box>
                      </Td>


                      <Td>
                        <Box
                          display={"flex"}
                          alignItems={"center"}
                        >
                          <Text
                             _light={{color:"#16171B"}}
                             _dark={{color:"#FFF"}}
                            fontSize={"10px"}
                            fontWeight={"400"}
                            letterSpacing={"1px"}
                            ml="6px"
                          >
                            CRV+cvxCRV (0x971a…)
                          </Text>
                        </Box>
                      </Td>

                      <Td>
                        <Box
                          display={"flex"}
                          alignItems={"center"}
                        >
                          <Text
                             _light={{color:"#16171B"}}
                             _dark={{color:"#FFF"}}
                            fontSize={"10px"}
                            fontWeight={"400"}
                            letterSpacing={"1px"}
                            ml="6px"
                          >
                            CRV+cvxCRV (0x971a…)
                          </Text>
                        </Box>
                      </Td>

                      <Td>
                        <Box
                          display={"flex"}
                          alignItems={"center"}
                        >
                          <Text
                            fontSize={"10px"}
                            fontWeight={"600"}
                            letterSpacing={"1px"}
                            ml="6px"
                            color={value3 < 0 ? "#EF1E1E" : "#245F00"}
                          >
                            {value3 >= 0 ? `+${value3} USD` : `${value3} USD`}
                          </Text>
                        </Box>
                      </Td>
                    </Tr>
                  </>
 */}

                  </>
                )
              })) : (
                <>
                  <Tr>
                    <Td
                      _dark={{
                        color: "#FFFFFF"
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
                    >
                      No data available
                    </Td>
                  </Tr>
                </>
              ))
          }

        </Tbody>

      </Table>
    </>
  )
}

export default TransactionPanelComponent;