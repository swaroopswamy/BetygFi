"use client";
import {
    Grid, GridItem, Input, Table, TableCaption, Text, Tbody, Td, Tfoot, Th, Thead,
    Tr, Flex, Box, useColorModeValue, Icon, Tooltip,
    Image
} from "@chakra-ui/react";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import isEmpty from "is-empty";

import SortWhiteIcon from '../../../public/icons/sort_white.svg';
import SortBlackIcon from '../../../public/icons/sort_black.svg';
import { useSearchParams } from "next/navigation";
import { fetchWalletBalanceData } from "@/redux/wallet_dashboard_data/dataSlice";


const DefiTable = () => {
    const searchParams = useSearchParams();
    const dispatch = useDispatch();
    const fetchWalletBalanceDataHandler = useCallback(() => {
        dispatch(fetchWalletBalanceData(searchParams.get("address")));
    }, [])
    useEffect(() => {
        fetchWalletBalanceDataHandler();
    }, [fetchWalletBalanceDataHandler])

    const walletBalanceData = useSelector((state) => state?.walletDashboardTableData?.walletBalanceData)
    console.log(walletBalanceData, 'walletBalancedata')

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
                                    fontSize={"10px"}
                                    fontWeight={"400"}
                                    letterSpacing={"1px"}
                                    alignItems={"center"}

                                >
                                    Token
                                </Text>
                                <Icon
                                    ml="3px"
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
                                    fontSize={"10px"}
                                    fontWeight={"400"}
                                    letterSpacing={"1px"}
                                    alignItems={"center"}

                                >
                                    Price (USD)
                                </Text>
                                <Image
                                    ml="3px"
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
                                    fontSize={"10px"}
                                    fontWeight={"400"}
                                    letterSpacing={"1px"}
                                    alignItems={"center"}

                                >
                                    Token / Amount
                                </Text>
                                <Image
                                    ml="3px"
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
                                    fontSize={"10px"}
                                    fontWeight={"400"}
                                    letterSpacing={"1px"}
                                    alignItems={"center"}

                                >
                                    Value(USD)
                                </Text>
                                <Image
                                    ml="3px"
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
                                    fontSize={"10px"}
                                    fontWeight={"400"}
                                    letterSpacing={"1px"}
                                    alignItems={"center"}

                                >
                                    % Share
                                </Text>
                                <Image
                                    ml="3px"
                                    w="10px"
                                    h="10px"
                                    as={useColorModeValue(SortBlackIcon, SortWhiteIcon)}
                                    alt=""
                                ></Image>
                            </Box>
                        </Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {walletBalanceData?.isSuccess &&
                        walletBalanceData?.data !== undefined && walletBalanceData?.data.map((item, i) => {
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
                                            fontSize={"10px"}
                                            fontWeight={"400"}
                                            letterSpacing={"1px"}
                                        >
                                            {item?.Symbol}
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
                                            fontSize={"10px"}
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
                                            fontSize={"10px"}
                                            fontWeight={"400"}
                                            letterSpacing={"1px"}
                                        >
                                            {!isEmpty(item.Balance)
                                                ?
                                                (item.Balance.toFixed(2)).toLocaleString('en-US', {
                                                    style: 'currency',
                                                    currency: 'USD'
                                                }) + " USD"
                                                : 0}
                                        </Td>
                                        <Td
                                            _dark={{
                                                color: "#FFF"
                                            }}
                                            _light={{
                                                color: "#16171B"
                                            }}
                                            fontSize={"10px"}
                                            fontWeight={"400"}
                                            letterSpacing={"1px"}
                                        >
                                            {
                                                (Math.trunc(item.value)).toLocaleString('en-US', {
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
                                            fontSize={"10px"}
                                            fontWeight={"400"}
                                            letterSpacing={"1px"}
                                            h="100%"
                                        >
                                            <Box
                                                display={"flex"}
                                                alignItems={"center"}
                                                h="100%"
                                            >

                                                {/*  {item.safety_score.toFixed(0)} */} -
                                            </Box>
                                        </Td>
                                    </Tr>
                                </>
                            );
                        })}
                </Tbody>
            </Table>
        </>
    )
};

export default DefiTable;