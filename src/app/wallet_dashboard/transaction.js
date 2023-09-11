"use client"
import { Container, Button, Table, Thead, Text, Tbody, useColorModeValue, Box, Skeleton, Tr, Th, Td, Flex, Image, Link } from '@chakra-ui/react'
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
  console.log(walletTransactionsData);
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
              fontWeight={400}
              letterSpacing={"1.4px"}
              lineHeight={"20px"}
              alignItems={"center"}
              textTransform={"capitalize"}
            >
              Address And Date
            </Th>

            <Th>
              <Box display={"flex"}
                alignItems={"center"}>
                <Text
                  color={useColorModeValue("#434347", "#A8ADBD")}
                  fontSize={"14px"}
                  fontWeight={400}
                  letterSpacing={"1.4px"}
                  lineHeight={"20px"}
                  alignItems={"center"}
                  textTransform={"capitalize"}
                >
                  Method
                </Text>
                <>
                  <Image width={"6px"}
                    height={"8px"}
                    alt='logo'
                    mt={"5px"}
                    ml={"5px"}
                    src={useColorModeValue("/images/updown-triangleicon-light.png", "/images/updown-triangleicon-dark.png")}>
                  </Image>
                </>
              </Box>
            </Th>

            <Th>
              <Box display={"flex"}
                alignItems={"center"}>

                <Text color={useColorModeValue("#434347", "#A8ADBD")}
                  fontSize={"14px"}
                  fontWeight={400}
                  letterSpacing={"1.4px"}
                  lineHeight={"20px"}
                  mr="6px"
                  textTransform={"capitalize"}
                >
                  Amount  / Token
                </Text>
                <>
                  <Image width={"6px"}
                    height={"8px"}
                    alt='logo'
                    mt={"5px"}
                    src={useColorModeValue("/images/updown-triangleicon-light.png", "/images/updown-triangleicon-dark.png")}>
                  </Image>
                </>
              </Box>
            </Th>


            <Th
              color={useColorModeValue("#434347", "#A8ADBD")}
              fontSize={"14px"}
              fontWeight={400}
              letterSpacing={"1.4px"}
              lineHeight={"20px"}
              textTransform={"capitalize"}
            >
              From
            </Th>


            <Th
              color={useColorModeValue("#434347", "#A8ADBD")}
              fontSize={"14px"}
              fontWeight={400}
              letterSpacing={"1.4px"}
              lineHeight={"20px"}
              textTransform={"capitalize"}
            >
              To
            </Th>

            <Th
              color={useColorModeValue("#434347", "#A8ADBD")}
              fontSize={"14px"}
              fontWeight={400}
              letterSpacing={"1.4px"}
              lineHeight={"20px"}
              textTransform={"capitalize"}
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
            (walletTransactionsData?.data?.data.length > 0 ?
              (walletTransactionsData?.data?.data.map((item, i) => {
                return (
                  <>
                    <Tr
                      key={i}
                    >
                      <Td>
                        <Box
                          display={"flex"}
                          alignItems={"center"}
                          gap={"10px"}
                        >
                           <>
                            <Image
                              width={5}
                              height={5}
                              alt='logo'
                              src={item.logoUrl}
                              borderRadius={"50%"}
                            ></Image>
                          </>

                          <Box>
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
                            href={item?.blockExplorerUrl}
                          >
                            {item?.hash.substring(0, 0)}
                            <ExternalLinkIcon mx='4px' />
                            <Text
                              color={"#16171B"}
                              fontSize={"14px"}
                              fontWeight={500}
                              lineHeight={"20px"}
                              _dark={{
                                color: "#FFF"
                              }}
                              _light={{
                                color: "#16171B"
                              }}
                              textTransform={"capitalize"}
                            >
                              {item?.functionName.split("(")[0]}
                            </Text>
                          </Link>
                        </Box>
                      </Td>

                      <Td>
                        <Box
                          display={"flex"}
                          alignItems={"center"}
                        >
                             <Image
                            width={4}
                            height={4}
                            alt='logo'
                            src={item?.tokenUrl}
                            borderRadius={"50%"}
                          ></Image>

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
                            fontWeight={400}
                            letterSpacing={"1px"}
                            ml="6px"
                          >
                            {Number(item?.value).toFixed(2)}{" ETH"}
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
                          <Text
                            fontSize={"14px"}
                            fontWeight={"400"}
                            letterSpacing={"1px"}
                            ml="4px"
                            color={item?.usdValue >= 0 ? '#60C000' : '#FF3535'}
                          >
                            {item?.usdValue >= 0 ? '+' : '-'}{item?.usdValue} USD
                          </Text>
                        </Box>
                      </Td>
                    </Tr>
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
