"use client"
import { Container, Button, Table, Thead, Text, Tbody, useColorModeValue, useColorMode, Box, Tooltip, Skeleton, Tr, Th, Td, Flex, Image, Link, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel } from '@chakra-ui/react'
import { useDispatch, useSelector } from "react-redux";
import isEmpty from 'is-empty';
import millify from 'millify';
import moment from 'moment/moment';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { useSearchParams } from "next/navigation";
import { fetchWalletTransactionsData } from "@/redux/wallet_dashboard_data/dataSlice";
import { useEffect, useState, useCallback } from 'react';

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

const MobileSkeletonRow = () => (
  <Box as="tr">
    <Td>
      <Skeleton height="20px" my={4} />
    </Td>
    <Td>
      <Skeleton height="20px" my={4} />
    </Td>
    {/* <Td>
      <Skeleton height="20px" my={4} />
    </Td> */}
  </Box>
)

const TransactionPanelComponent = () => {
  const searchParam = useSearchParams();
  const { colorMode } = useColorMode();
  const dispatch = useDispatch();
  const value1 = "300";
  const value2 = "200";
  const value3 = "-300";
  const [tablePage, setTablePage] = useState(1);

  const walletTransactionsData = useSelector(
    (state) => state?.walletDashboardTableData?.walletTransactionsData
  );
  const walletAddress = useSelector(
    (state) => state?.walletDashboardTableData?.walletAddress
  );
  const blockchainSelected = useSelector(
    (state) => state?.walletDashboardTableData?.blockchainType
  );

  const pageChangeHandler = (page) => {
    tablePage >= 1 && setTablePage(page);
  }

  const fetchWalletTransactionsDataHandler = useCallback(() => {
    const data = {
      address: searchParam.get("address"),
      payload: {
        blockchain: blockchainSelected,
        limit: 20,
        page: tablePage
      }
    }
    dispatch(fetchWalletTransactionsData(data));
  }, [blockchainSelected, tablePage, searchParam.get("address")])

  useEffect(() => {
    fetchWalletTransactionsDataHandler();
  }, [fetchWalletTransactionsDataHandler]);

  return (
    <>
      <Box
        w={"100%"}
        display={{ base: "none", md: "block" }}
        mt="25px"
        borderRadius={"6px"}
        bgColor={useColorModeValue("#FFF", "#202020")}
        px={"2px"}
        overflow={"auto"}
       // maxHeight={"400px"}
        mb="20px"
      >

        <Flex
          padding={"25px"}
          borderRadius={"6px"}
          bgColor={useColorModeValue("#FFF", "#202020")}
          display={{ base: "none", md: "block" }}
          w={{ base: "100%", md: "100%" }}>
          <Text
            fontSize={"18px"}
            fontWeight={600}
            lineHeight={"20px"}
            color={useColorModeValue("#16171B", "#FFF")}
            textTransform={"capitalize"}

          >
            Wallet Transaction
          </Text>
        </Flex>
        
        <Box
        overflow={"auto"}
        maxHeight={"400px"}
      >
        <Table
          variant="simple" key={1} bgColor={"#FFF"}
          display={{ base: "none", md: "table" }}
          borderRadius={"6px"}
          minW={"1260px"}
        >
          <Thead
           position="sticky" top={0} zIndex="sticky"
            bgColor={useColorModeValue("#F5F5F7", "#191919")}
          >

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
                  alignItems={"center"}
                  justifyContent={"center"}
                >
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
                      mt={"2px"}
                      ml={"5px"}
                      src={useColorModeValue("/images/updown-triangleicon-light.svg", "/images/updown-triangleicon-dark.svg")}>
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
                    <Image
                      width={"6px"}
                      height={"8px"}
                      alt='logo'
                      mt={"2px"}
                      src={useColorModeValue("/images/updown-triangleicon-light.svg", "/images/updown-triangleicon-dark.svg")}>
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

          <Tbody
           overflowY={"auto"} maxHeight='380px'
            bgColor={useColorModeValue("#FFF", "#202020")}
          >
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
                    borderRadius={"6px"}
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
                    <Tr
                      key={i}
                    >
                      <Td>
                        <Box
                          display={"flex"}
                          alignItems={"center"}
                          gap={"10px"}
                        >

                          <Tooltip
                            key={i} label={item.name}>
                            <>
                              <Image
                                w={"18px"}
                                h={"18px"}
                                mr={"3px"}
                                src={item.logoUrl}
                                alt={`${item.id}_icon`}
                                style={{ borderRadius: "50%" }}
                              ></Image>
                            </>
                          </Tooltip>

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
                              //letterSpacing={"1px"}
                              ml="6px"
                              w="95px"
                            >
                              {walletAddress?.split("").join("").substring(0, 8) + "......" + walletAddress?.slice(-5)}
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
                              //letterSpacing={"1px"}
                              ml="6px"
                            >
                              {
                                moment.unix(item?.timeStamp).format('Do MMM YYYY')
                              }
                            </Text>
                          </Box>

                        </Box>
                      </Td>

                      <Td>
                        <Box
                          display={"flex"}
                          alignItems={"center"}
                          justifyContent={"center"}
                        >
                          <Link
                            fontSize={"14px"}
                            fontWeight={500}
                            fontStyle={"normal"}
                            letterSpacing={"1px"}
                            ml="4px"
                            display={"flex"}
                            alignItems={"center"}
                            _dark={{
                              color: "#FFF"
                            }}
                            _light={{
                              color: "#6F7383"
                            }}
                            isExternal
                            href={item?.blockExplorerUrl}
                          >
                            {item?.hash.substring(0, 0)}
                            <ExternalLinkIcon mx='4px' />
                            <Text
                              fontSize={"14px"}
                              fontWeight={500}
                              lineHeight={"20px"}
                              _dark={{
                                color: "#FFF",
                                opacity: "0.6"
                              }}
                              _light={{
                                color: "#16171B"
                              }}
                              textTransform={"capitalize"}
                            >
                              {item?.functionName?.split("(")[0]}
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
                            width={"18px"}
                            height={"18px"}
                            alt='logo'
                            src={item?.tokenUrl}
                            style={{ borderRadius: "50%" }}
                          ></Image>

                          <Text
                            _dark={{
                              color: "#FFF"
                            }}
                            _light={{
                              color: "#16171B"
                            }}
                            fontSize={5}
                            fontWeight={5}
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
                            //letterSpacing={"1px"}
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
                            //letterSpacing={"1px"}
                            ml="4px"
                            color={item?.usdValue >= 0 ? '#60C000' : '#FF3535'}
                          >
                            {item?.usdValue >= 0 ? '+' : '-'}{item?.usdValue} USD
                          </Text>
                        </Box>
                      </Td>
                    </Tr>
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
          </Box>
        <Box
          _dark={{
            bg: "#202020"
          }}
          _light={{
            bg: "#FFFFFF"
          }}
          display={"flex"}
          justifyContent={"right"}
          alignItems={"center"}
          mb={"20px"}
        >
          <PageButtons
            tablePage={tablePage}
            pageChangeHandler={pageChangeHandler}
            totalPages={walletTransactionsData?.data?.totalPages}
          />
        </Box>
      </Box>

      <Box
        w={"100%"}
        display={{ base: "flex", md: "none" }}
        flexDir={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        mt={"20px"}
        px={"2px"}
        borderRadius={"6px"}
      >

        <Flex
          justifyContent={"space-between"}
          padding={"15px 20px"}
          bgColor={useColorModeValue("#FFF", "#202020")}
          display={{ base: "block", md: "none" }}
          w={{ base: "90%", md: "100%" }}
        >
          <Box
            justifyContent={"space-between"}
            alignContent={"center"}
            display={"flex"}
            flexDirection={"row"}
          >
            <Text
              fontSize="18"
              fontWeight={"600"}
              color={useColorModeValue("#16171B", "#FFF")}
            >
              Wallet Transaction
            </Text>

            <Image
              cursor={"pointer"}
              width={"24px"}
              height={"24px"}
              src={colorMode === 'light' ? ('/icons/Filter.svg') : ('/icons/Filter-darkmode.svg')}
            ></Image>
          </Box>
        </Flex>

        <Table variant={"unstyled"} display={{ base: "table", md: "none" }}
          _dark={{
            bg: "#16171B"
          }}
          _light={{
            bg: "#FFFFFF"
          }}
          w={{ base: "90%", md: "100%" }}
        //mb={"40px"}
        >
          <Thead
            bgColor={useColorModeValue("#F5F5F7", "#191919")}
          >
            <Tr>
              <Th
                colSpan={2}
              >
                <Box display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-between"}>

                  <Text color={useColorModeValue("#434347", "#A8ADBD")}
                    fontSize={"14px"}
                    fontWeight={400}
                    letterSpacing={"1.4px"}
                    lineHeight={"20px"}
                    alignItems={"center"}
                    textTransform={"capitalize"}
                  >
                    Address And Date
                  </Text>
                  <Text
                    color={useColorModeValue("#434347", "#A8ADBD")}
                    fontSize={"14px"}
                    fontWeight={400}
                    letterSpacing={"1.4px"}
                    lineHeight={"20px"}
                    textTransform={"capitalize"}
                  >
                    USD Value
                  </Text>
                </Box>
              </Th>
            </Tr>
          </Thead>

          <Tbody>
            {walletTransactionsData.isError && (
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
                  borderRadius={"6px"}
                  textAlign={"center"}
                  p="20px"
                >
                  No data available
                </Td>
              </Tr>
            )}
            {walletTransactionsData.isLoading && (
              <>
                <MobileSkeletonRow />
                <MobileSkeletonRow />
                <MobileSkeletonRow />
              </>
            )}
            {walletTransactionsData?.isSuccess && walletTransactionsData?.data?.data.length > 0 ? (
              walletTransactionsData?.data?.data.map((item, i) => (
                <Tr
                  key={i}
                >
                  <Td
                    p={0}
                    colSpan={1}
                  >
                    <Accordion
                      allowToggle
                    >
                      <AccordionItem  >
                        <h2 >
                          <AccordionButton
                            _dark={{
                              bg: "#16171B"
                            }}
                            _light={{
                              bg: "#FFFFFF"
                            }}
                          >
                            <Box
                              display={"flex"}
                              w="100%"
                              justifyContent={"space-between"}
                            >
                              <Box
                                display={"flex"}
                                //flexDirection={"column"}
                                alignItems={"center"}
                                justifyContent={"space-between"}
                              >
                                <Image
                                  width={5}
                                  height={5}
                                  alt='logo'
                                  style={{ borderRadius: "50%" }}
                                  src={item?.logoUrl}
                                />
                                <Box
                                  flexDirection={"row"}
                                  justifyContent={"space-between"}
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
                                    {walletAddress?.split("").join("").substring(0, 8) + "..." + walletAddress?.slice(-5)}
                                  </Text>
                                  <Text
                                    opacity={"0.6000000238418579"}
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
                                    {moment.unix(item?.timeStamp).format('Do MMM YYYY')}
                                  </Text>
                                </Box>
                              </Box>
                              <Box
                                display={"flex"}
                                alignItems={"end"}
                                justifyContent={"space-between"}
                              >
                                <Text
                                  fontSize={"14px"}
                                  fontWeight={"400"}
                                  letterSpacing={"1px"}
                                  mb="10px"
                                  mr={"20px"}
                                  color={item?.usdValue >= 0 ? '#60C000' : '#FF3535'}
                                >
                                  {item?.usdValue >= 0 ? '+' : '-'}{item?.usdValue} USD
                                </Text>
                              </Box>
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel _dark={{
                          bg: "#16171B"
                        }}
                          _light={{
                            bg: "#FFFFFF"
                          }}
                          display={"flex"}
                        >
                          <Box>
                            <Tr>
                              <Td justifyContent={"space-between"}
                                alignItems={"center"}>
                                <Text

                                  _light={{
                                    color: "#434347"
                                  }}
                                  _dark={{
                                    color: "#A8ADBD"
                                  }}
                                  fontSize={"14px"}
                                  fontWeight={400}
                                  letterSpacing={"1.4px"}
                                  lineHeight={"20px"}
                                  alignItems={"center"}
                                  textTransform={"capitalize"}
                                >
                                  Method
                                </Text>
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
                                      {item?.functionName?.split("(")[0]}
                                    </Text>
                                  </Link>
                                </Box>
                              </Td>
                            </Tr>

                            <Tr>
                              <Td display={"flex"}
                                alignItems={"center"}>

                                <Text
                                  _light={{
                                    color: "#434347"
                                  }}
                                  _dark={{
                                    color: "#A8ADBD"
                                  }}
                                  fontSize={"14px"}
                                  fontWeight={400}
                                  letterSpacing={"1.4px"}
                                  lineHeight={"20px"}
                                  mr="6px"
                                  textTransform={"capitalize"}
                                >
                                  Amount  / Token
                                </Text>
                              </Td>

                              <Td>
                                <Box
                                  display={"flex"}
                                  alignItems={"center"}
                                >
                                  <Image
                                    width={5}
                                    height={5}
                                    alt='logo'
                                    src={item?.tokenUrl}
                                    style={{ borderRadius: "50%" }}
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
                            </Tr>

                            <Tr>
                              <Td>
                                <Text
                                  _light={{
                                    color: "#434347"
                                  }}
                                  _dark={{
                                    color: "#A8ADBD"
                                  }}
                                  fontSize={"14px"}
                                  fontWeight={400}
                                  letterSpacing={"1.4px"}
                                  lineHeight={"20px"}
                                  textTransform={"capitalize"}
                                >
                                  From
                                </Text>
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
                                    // _dark={{
                                    //   color: "#FFF"
                                    // }}
                                    // _light={{
                                    //   color: "#16171B"
                                    // }}
                                    isExternal
                                    href={item?.blockExplorerUrl}
                                  >
                                    <Text
                                      _dark={{
                                        color: "#117CCA"
                                      }}
                                      _light={{
                                        color: "#117CCA"
                                      }}
                                      fontSize={"14px"}
                                      fontWeight={"400"}
                                      letterSpacing={"1px"}

                                      w="95px"
                                    >
                                      {item?.from.split("").join("").substring(0, 6) + "..." + item?.from.slice(-5)}
                                    </Text>
                                  </Link>
                                </Box>
                              </Td>
                            </Tr>

                            <Tr>
                              <Td
                                _light={{
                                  color: "#434347"
                                }}
                                _dark={{
                                  color: "#A8ADBD"
                                }}
                                fontSize={"14px"}
                                fontWeight={400}
                                letterSpacing={"1.4px"}
                                lineHeight={"20px"}
                                textTransform={"capitalize"}
                              >
                                To
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
                                    // _dark={{
                                    //   color: "#FFF"
                                    // }}
                                    // _light={{
                                    //   color: "#16171B"
                                    // }}
                                    isExternal
                                    href={item?.blockExplorerUrl}
                                  >
                                    <Text
                                      _dark={{
                                        color: "#117CCA"
                                      }}
                                      _light={{
                                        color: "#117CCA"
                                      }}
                                      fontSize={"14px"}
                                      fontWeight={"400"}
                                      letterSpacing={"1px"}
                                      w="95px"
                                    >
                                      {item?.to.split("").join("").substring(0, 6) + "..." + item?.to.slice(-5)}
                                    </Text>
                                  </Link>
                                </Box>
                              </Td>
                            </Tr>
                          </Box>
                        </AccordionPanel>
                      </AccordionItem>
                    </Accordion>
                  </Td>
                </Tr>
              ))
            ) : null}
          </Tbody>
        </Table>

        <Box
          _dark={{
            bg: "#16171B"
          }}
          _light={{
            bg: "#FFFFFF"
          }}
          display={"flex"}
          w={"90%"}
          justifyContent={"right"}
          alignItems={"center"}
          mb={"100px"}
        >
          <PageButtons
            tablePage={tablePage}
            pageChangeHandler={pageChangeHandler}
            totalPages={walletTransactionsData?.data?.totalPages}
          />
        </Box>

      </Box>

    </>
  )
}

export default TransactionPanelComponent;


function PageButtons({ tablePage, pageChangeHandler, totalPages }) {
  return (
    <>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        padding={"10px"}
        mr={"20px"}
      >

        <Text
          color={useColorModeValue("#16171B", "#FFF")}
          fontSize={"14px"}
          fontWeight={"400"}
          mr={"10px"}
        >
          Page
        </Text>
        <Text
          color={useColorModeValue("#16171B", "#FFF")}
          fontSize={"14px"}
          fontWeight={600}
          mr={"15px"}
        >
          {tablePage}
        </Text>

        <Button
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          w={"8px"}
          h={"26px"}
          bg={useColorModeValue("#FFF", "#202020")}
          border={"1px"}
          borderColor={useColorModeValue("#C7CAD2", "#454853")}
          borderRadius={"0px"}
          padding="0px"
          onClick={() => {
            if (tablePage > 1)
              pageChangeHandler(tablePage - 1);
          }}
          cursor={tablePage === 1 ? "not-allowed" : "pointer"}
          disabled={tablePage === 1}
        >
          <Image
            width={15}
            height={15}
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
          onClick={() => {
            if (tablePage < totalPages) // totalPages goes here
              pageChangeHandler(tablePage + 1);
          }}
          cursor={tablePage === totalPages ? "not-allowed" : "pointer"}
          disabled={tablePage === totalPages}
        >
          <Image
            width={15}
            height={15}
            alt="next-arrow"
            src={useColorModeValue('/icons/direction-arrow.svg', '/icons/direction-icon-dark.svg')}
          ></Image>
        </Button>

      </Box>
    </>)
}
