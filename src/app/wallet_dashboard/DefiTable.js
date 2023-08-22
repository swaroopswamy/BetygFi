"use client";
import {
    Grid, GridItem, Input, Table, TableCaption, Text, Tbody, Td, Tfoot, Th, Thead,
    Tr, Flex, Box, useColorModeValue, Icon, Tooltip,
    Image,
    Skeleton,
    Spinner
} from "@chakra-ui/react";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import isEmpty from "is-empty";

import SortWhiteIcon from '../../../public/icons/sort_white.svg';
import SortBlackIcon from '../../../public/icons/sort_black.svg';

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
    </Box>
)
const DefiTable = () => {
    const walletBalanceData = useSelector((state) => state?.walletDashboardTableData?.walletBalanceData)

    
    return (
        <>
            <Table variant="simple" key={1}>
                <Thead bgColor={useColorModeValue("#F5F5F7", "#191919")}>
                    <Tr>
                        <Th
                        >
                            <Box
                                display={"flex"}
                                alignItems={"center"}
                            >
                                <Text
                                    color={useColorModeValue("#A8ADBD", "#A8ADBD")}
                                    fontSize={"14px"}
                                    fontWeight={"400"}
                                    letterSpacing={"1px"}
                                    alignItems={"center"}

                                >
                                    Token
                                </Text>
                                <Icon
                                    ml="3px"
                                    mt="3px"
                                    w="10px"
                                    h="10px"
                                    as={useColorModeValue(SortBlackIcon, SortWhiteIcon)}
                                ></Icon>
                            </Box>
                        </Th>
                        <Th
                        >
                            <Box
                                display={"flex"}
                                alignItems={"center"}
                            >
                                <Text
                                    color={useColorModeValue("#A8ADBD", "#A8ADBD")}
                                    fontSize={"14px"}
                                    fontWeight={"400"}
                                    letterSpacing={"1px"}
                                    alignItems={"center"}

                                >
                                    Price (USD)
                                </Text>
                                <Image
                                    ml="3px"
                                    mt="4px"
                                    w="10px"
                                    h="10px"
                                    as={useColorModeValue(SortBlackIcon, SortWhiteIcon)}
                                    alt=""
                                ></Image>
                            </Box>
                        </Th>
                        <Th
                        >
                            <Box
                                display={"flex"}
                                alignItems={"center"}
                            >
                                <Text
                                    color={useColorModeValue("#A8ADBD", "#A8ADBD")}
                                    fontSize={"14px"}
                                    fontWeight={"400"}
                                    letterSpacing={"1px"}
                                    alignItems={"center"}

                                >
                                    Token / Amount
                                </Text>
                                <Image
                                    ml="3px"
                                    mt="3px"
                                    w="10px"
                                    h="10px"
                                    as={useColorModeValue(SortBlackIcon, SortWhiteIcon)}
                                    alt=""
                                ></Image>
                            </Box>
                        </Th>

                        <Th
                        >
                            <Box
                                display={"flex"}
                                alignItems={"center"}
                            >
                                <Text
                                    color={useColorModeValue("#A8ADBD", "#A8ADBD")}
                                    fontSize={"14px"}
                                    fontWeight={"400"}
                                    letterSpacing={"1px"}
                                    alignItems={"center"}

                                >
                                    Value(USD)
                                </Text>
                                <Image
                                    ml="3px"
                                    mt="4px"
                                    w="10px"
                                    h="10px"
                                    as={useColorModeValue(SortBlackIcon, SortWhiteIcon)}
                                    alt=""
                                ></Image>
                            </Box>
                        </Th>
                        <Th
                        >
                            <Box
                                display={"flex"}
                                alignItems={"center"}
                            >
                                <Text
                                    color={useColorModeValue("#A8ADBD", "#A8ADBD")}
                                    fontSize={"14px"}
                                    fontWeight={"400"}
                                    letterSpacing={"1px"}
                                    alignItems={"center"}

                                >
                                    % Share
                                </Text>
                                <Image
                                    ml="3px"
                                    mt="3px"
                                    w="10px"
                                    h="10px"
                                    as={useColorModeValue(SortBlackIcon, SortWhiteIcon)}
                                    alt=""
                                ></Image>
                            </Box>
                        </Th>
                    </Tr>
                </Thead>
                <Tbody >
                    <Tr
                    >
                        {(walletBalanceData.data?.isQueryInPendingState || walletBalanceData.isLoading) && (
                            <>
                                <Td
                                    minH={"212px"}
                                    colSpan={8}
                                    textAlign={"center"}
                                    p="20px"
                                >
                                    <Box
                                        display={"flex"}
                                        flexDirection={"column"}
                                        alignItems={"center"}
                                        justifyContent={"center"}

                                    >
                                        <Text
                                            _dark={{
                                                color: "#FFF"
                                            }}
                                            _light={{
                                                color: "#16171B"
                                            }}
                                            fontSize={"20px"}
                                            fontWeight={"400"}
                                            letterSpacing={"1px"}
                                            mt="44px"
                                            mb="20px"
                                        >
                                            We are retrieving data from the Blockchain.
                                        </Text>
                                        <Spinner
                                            thickness='4px'
                                            speed='0.65s'
                                            emptyColor='gray.200'
                                            color='blue.500'
                                            size='xl'
                                        />
                                        <Text
                                            _dark={{
                                                color: "#FFF"
                                            }}
                                            _light={{
                                                color: "#16171B"
                                            }}
                                            fontSize={"20px"}
                                            fontWeight={"400"}
                                            letterSpacing={"1px"}
                                            mt="20px"
                                            mb="8px"
                                        >
                                            This process might take approximately 2-3 minutes.
                                        </Text>
                                        <Text
                                            _dark={{
                                                color: "#FFF"
                                            }}
                                            _light={{
                                                color: "#16171B"
                                            }}
                                            fontSize={"20px"}
                                            fontWeight={"400"}
                                            letterSpacing={"1px"}
                                            mb="50px"
                                        >
                                            You have the option to wait or return later.
                                        </Text>
                                    </Box>
                                </Td>
                            </>
                        )}
                    </Tr>
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
                                >
                                    No Data Available
                                </Td>
                            </Tr>
                        </>
                    )}

                    {walletBalanceData?.isSuccess &&
                        ((walletBalanceData?.data?.data?.length > 0) ?
                            (walletBalanceData?.data?.data.map((item, i) => {
                                return (
                                    <>
                                        <Tr key={i + 1}>
                                            <Td
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
                                                {item?.symbol}
                                            </Td>
                                            {/* <Td
                                        >
                                            <Box
                                                display={"flex"}
                                                alignItems={"center"}
                                            >
                                                {!isEmpty(item.logo)
                                                    ? (
                                                        <>
                                                            <img
                                                                width={20}
                                                                height={20}
                                                                alt='logo'
                                                                src={item.logo}
                                                            ></img>
                                                        </>
                                                    )
                                                    :
                                                    (
                                                        <>
                                                            <Box
                                                                width={"20px"}
                                                                height={"20px"}
                                                                alignItems={"center"}
                                                                justifyContent={"center"}
                                                                display={"flex"}
                                                                borderRadius={"50%"}
                                                                bgColor={useColorModeValue("#676DFF")}
                                                            >
                                                                <Text
                                                                    color={"#FFF"}
                                                                    fontSize={"12px"}
                                                                    fontWeight={"600"}
                                                                >
                                                                    {item.name.charAt(0)}
                                                                </Text>
                                                            </Box>
                                                        </>
                                                    )
                                                }
                                                <Text
                                                    color={useColorModeValue("#16171B", "#FFF")}
                                                    fontSize={"10px"}
                                                    fontWeight={"400"}
                                                    letterSpacing={"1px"}
                                                    ml="6px"
                                                >
                                                    {item.name}
                                                </Text>
                                            </Box>
                                        </Td> */}
                                            <Td
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
                                                {item.price === undefined ? '-' : item?.price}
                                            </Td>
                                            <Td
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
                                                {item.value.toFixed(3)}
                                            </Td>
                                            <Td
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
                                                {
                                                    (Math.trunc(item.value * item.price)).toLocaleString('en-US', {
                                                        style: 'currency',
                                                        currency: 'USD'
                                                    })}
                                            </Td>

                                            <Td
                                                _dark={{
                                                    color: "#FFF"
                                                }}
                                                _light={{
                                                    color: "#16171B"
                                                }}
                                                fontSize={"14px"}
                                                fontWeight={"400"}
                                                letterSpacing={"1px"}
                                                h="100%"
                                            >
                                                <Box
                                                    display={"flex"}
                                                    alignItems={"center"}
                                                    h="100%"
                                                >

                                                    {item.percentageValue?.toFixed(2)} {" "}{"%"}
                                                </Box>
                                            </Td>
                                        </Tr>
                                    </>
                                );
                            }))
                            : ( !walletBalanceData.data?.isQueryInPendingState &&
                               ( <>
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
                                        >
                                            No Data Available
                                        </Td>
                                    </Tr>
                                </>)
                            )
                        )
                    }
                </Tbody>
            </Table>
        </>
    )
};

export default DefiTable;