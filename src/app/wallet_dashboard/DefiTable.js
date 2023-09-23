"use client";
import {
    Grid, GridItem, Input, Table, TableCaption, Text, Tbody, Td, Tfoot, Th, Thead,
    Tr, Flex, Box, useColorModeValue, Icon, Tooltip,
    Image,
    Skeleton,
    Spinner,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionIcon,
    AccordionPanel
} from "@chakra-ui/react";
import React, { useState } from "react";
//import { SortBlackIcon, SortWhiteIcon } from "path-to-your-sort-icons";

//import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import isEmpty from "is-empty";

import SortWhiteIcon from '../../../public/icons/sort_white.svg';
import SortBlackIcon from '../../../public/icons/sort_black.svg';

const SkeletonRow = () => {

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
}
const DefiTable = () => {
    const walletBalanceData = useSelector((state) => state?.walletDashboardTableData?.walletBalanceData)

    //     const [sortingOrder, setSortingOrder] = useState("asc"); // "asc" for ascending, "desc" for descending

    //   const toggleSortingOrder = () => {
    //     setSortingOrder(sortingOrder === "asc" ? "desc" : "asc");
    //   };

    return (
        <>
            <Table variant="simple" key={1}
                display={{ base: "none", md: "table" }}
            >
                <Thead bgColor={useColorModeValue("#F5F5F7", "#191919")}>
                    <Tr>
                        <Th>
                            <Box
                                display={"flex"}
                                alignItems={"center"}
                            >
                                <Text
                                    color={useColorModeValue("#16171B", "#A8ADBD")}
                                    fontSize={"14px"}
                                    fontWeight={400}
                                    letterSpacing={"1.4px"}
                                    lineHeight={"20px"}
                                    alignItems={"center"}
                                    textTransform={"capitalize"}
                                >
                                    Token
                                </Text>
                                <Icon
                                    ml="3px"
                                    mt="5px"
                                    w="10px"
                                    h="10px"
                                    as={useColorModeValue(SortBlackIcon, SortWhiteIcon)}
                                ></Icon>
                            </Box>
                        </Th>

                        <Th>
                            <Box
                                display={"flex"}
                                alignItems={"center"}
                            >
                                <Text
                                    color={useColorModeValue("#16171B", "#A8ADBD")}
                                    fontSize={"14px"}
                                    fontWeight={400}
                                    lineHeight={"20px"}
                                    letterSpacing={"1.4px"}
                                    alignItems={"center"}
                                    textTransform={"capitalize"}
                                >
                                    Price(USD)
                                </Text>
                                <Image
                                    ml="3px"
                                    mt="5px"
                                    w="10px"
                                    h="10px"
                                    as={useColorModeValue(SortBlackIcon, SortWhiteIcon)}
                                    alt=""
                                ></Image>
                            </Box>
                        </Th>

                        <Th>
                            <Box
                                display={"flex"}
                                alignItems={"center"}
                            >
                                <Text
                                    color={useColorModeValue("#16171B", "#A8ADBD")}
                                    fontSize={"14px"}
                                    fontWeight={400}
                                    lineHeight={"20px"}
                                    letterSpacing={"1.4px"}
                                    alignItems={"center"}
                                    textTransform={"capitalize"}
                                >
                                    Token/Amount
                                </Text>
                                <Image
                                    ml="3px"
                                    mt="5px"
                                    w="10px"
                                    h="10px"
                                    as={useColorModeValue(SortBlackIcon, SortWhiteIcon)}
                                    alt=""
                                ></Image>
                            </Box>
                        </Th>

                        <Th>
                            <Box
                                display={"flex"}
                                alignItems={"center"}
                            >
                                <Text
                                    color={useColorModeValue("#16171B", "#A8ADBD")}
                                    fontSize={"14px"}
                                    fontWeight={400}
                                    lineHeight={"20px"}
                                    letterSpacing={"1.4px"}
                                    alignItems={"center"}
                                    textTransform={"capitalize"}
                                >
                                    Value(USD)
                                </Text>
                                <Image
                                    ml="3px"
                                    mt="5px"
                                    w="10px"
                                    h="10px"
                                    as={useColorModeValue(SortBlackIcon, SortWhiteIcon)}
                                    alt=""
                                ></Image>
                            </Box>
                        </Th>

                        <Th>
                            <Box
                                display={"flex"}
                                alignItems={"center"}
                            >
                                <Text
                                    color={useColorModeValue("#16171B", "#A8ADBD")}
                                    fontSize={"14px"}
                                    fontWeight={400}
                                    lineHeight={"20px"}
                                    letterSpacing={"1px"}
                                    alignItems={"center"}
                                    textTransform={"capitalize"}
                                >
                                    % Share
                                </Text>
                                <Image
                                    ml="3px"
                                    mt="5px"
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

                    {(walletBalanceData?.isLoading || walletBalanceData.data?.isQueryInPendingState) && (
                        <>
                            <Tr>
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
                            </Tr>
                        </>
                    )}
                    {(walletBalanceData?.isError || !(walletBalanceData?.data?.data?.length > 0)) && (
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
                        (
                            (walletBalanceData?.data?.data.map((item, i) => {
                                return (
                                    <>
                                        <Tr key={i + 1}>
                                            {/*   <Td
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
                                        </Td> */}
                                            <Td>
                                                <Box
                                                    display={"flex"}
                                                    alignItems={"center"}
                                                >
                                                    {!isEmpty(item?.logoUrl)
                                                        ? (
                                                            <>
                                                                <Image
                                                                    width={5}
                                                                    height={5}
                                                                    style={{borderRadius:"50%"}}
                                                                    alt='logo'
                                                                    src={item?.logoUrl}
                                                                ></Image>
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
                                                                    _light={{
                                                                        bgColor: "#676DFF"
                                                                    }}
                                                                    _dark={{
                                                                        bgColor: "#ADADAD"
                                                                    }}
                                                                >
                                                                    <Text
                                                                        color={"#FFF"}
                                                                        fontSize={"12px"}
                                                                        fontWeight={600}
                                                                    >
                                                                        {item.symbol.charAt(0)}
                                                                    </Text>
                                                                </Box>
                                                            </>
                                                        )
                                                    }
                                                    <Text
                                                        _light={{
                                                            color: "#16171B"
                                                        }}
                                                        _dark={{
                                                            color: "#FFF"
                                                        }}
                                                        fontSize={"14px"}
                                                        fontWeight={400}
                                                        letterSpacing={"1px"}
                                                        ml="6px"
                                                    >
                                                        {item?.symbol}
                                                    </Text>
                                                </Box>
                                            </Td>
                                            <Td
                                                _dark={{
                                                    color: "#FFF"
                                                }}
                                                _light={{
                                                    color: "#16171B"
                                                }}
                                                fontSize={"14px"}
                                                fontWeight={400}
                                                letterSpacing={"1px"}
                                            >
                                                {item?.price === undefined ? '-' : item?.price}
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
                                                {item?.value?.toFixed(3)}
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
                                                    (Math.trunc(item?.value * item?.price)).toLocaleString('en-US', {
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
                        )


                    }
                </Tbody>
            </Table>
            <Table variant="simple" key={2}
                display={{ base: "table", md: "none" }}
            >
                <Thead bgColor={useColorModeValue("#F5F5F7", "#191919")}>
                    <Tr>
                        <Th
                        >
                            <Box
                                display={"flex"}
                                alignItems={"center"}
                            >
                                <Text
                                    color={useColorModeValue("#16171B", "#A8ADBD")}
                                    fontSize={"14px"}
                                    fontWeight={"400"}
                                    letterSpacing={"1px"}
                                    alignItems={"center"}
                                    textTransform={"capitalize"}
                                >
                                    Token
                                </Text>
                                <Icon
                                    ml="3px"
                                    mt="5px"
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
                                w="100%"
                                justifyContent={"center"}
                            >
                                <Text
                                    color={useColorModeValue("#16171B", "#A8ADBD")}
                                    fontSize={"14px"}
                                    fontWeight={"400"}
                                    letterSpacing={"1px"}
                                    alignItems={"center"}
                                    textTransform={"capitalize"}
                                >
                                    Price(USD)
                                </Text>
                                <Image
                                    ml="3px"
                                    mt="5px"
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
                    {(walletBalanceData?.isLoading || walletBalanceData.data?.isQueryInPendingState) && (
                        <>
                            <Tr
                                display={{ base: "none", md: "table-row" }}
                            >
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
                            </Tr>
                            <Tr
                            
                                display={{ base: "table-row", md: "none" }}
                            >
                                <Td
                                    minH={"212px"}
                                    textAlign={"center"}
                                    p={0}
                                    colSpan={2}
                                    w="100%"
                                >
                                    <Box
                                        display={"flex"}
                                        flexDirection={"column"}
                                        alignItems={"center"}
                                        justifyContent={"center"}
                                        w="100%"
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
                                            mt="44px"
                                            mb="20px"
                                        >
                                            We are retrieving data<br /> from the Blockchain.
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
                                            fontSize={"14px"}
                                            fontWeight={"400"}
                                            letterSpacing={"1px"}
                                            mt="20px"
                                            mb="8px"
                                        >
                                            This process might take <br /> approximately 2-3 minutes.
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
                                            mb="50px"
                                        >
                                            You can wait or return later.
                                        </Text>
                                    </Box>
                                </Td>
                            </Tr>
                        </>
                    )}
                    {(walletBalanceData?.isError || !(walletBalanceData?.data?.data?.length > 0)) && (
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
                        (
                            (walletBalanceData?.data?.data.map((item, i) => {
                                return (
                                    <>
                                        <Tr key={i + 1}>
                                            {/*   <Td
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
                                        </Td> */}
                                            <Td
                                                p={0}
                                                colSpan={2}
                                            >
                                                <Accordion allowToggle
                                                //mr={"20px"}
                                                >
                                                    <AccordionItem>
                                                        <h2>
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
                                                                        <Box
                                                                            display={"flex"}
                                                                            alignItems={"center"}
                                                                        >
                                                                            {!isEmpty(item?.logoUrl)
                                                                                ? (
                                                                                    <>
                                                                                        <Image
                                                                                            width={5}
                                                                                            height={5}
                                                                                            style={{borderRadius:"50%"}}
                                                                                            alt='logo'
                                                                                            src={item?.logoUrl}
                                                                                        ></Image>
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
                                                                                            _light={{
                                                                                                bgColor: "#676DFF"
                                                                                            }}
                                                                                            _dark={{
                                                                                                bgColor: "#ADADAD"
                                                                                            }}
                                                                                        >
                                                                                            <Text
                                                                                                color={"#FFF"}
                                                                                                fontSize={"12px"}
                                                                                                fontWeight={"600"}
                                                                                            >
                                                                                                {item.symbol.charAt(0)}
                                                                                            </Text>
                                                                                        </Box>
                                                                                    </>
                                                                                )
                                                                            }
                                                                            <Text
                                                                                _light={{
                                                                                    color: "#16171B"
                                                                                }}
                                                                                _dark={{
                                                                                    color: "#FFF"
                                                                                }}
                                                                                fontSize={"14px"}
                                                                                fontWeight={"400"}
                                                                                letterSpacing={"1px"}
                                                                                ml="6px"
                                                                            >
                                                                                {item?.symbol}
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
                                                                            _light={{
                                                                                color: "#16171B"
                                                                            }}
                                                                            _dark={{
                                                                                color: "#FFF"
                                                                            }}
                                                                        >
                                                                            {item?.price} USD
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
                                                            borderBottom={"none"}
                                                        >
                                                            <Tr borderBottom={"none"}>
                                                                <Td
                                                                    colSpan={2}
                                                                    borderBottom={"none"}
                                                                    p={1}
                                                                >
                                                                    <Box
                                                                        display={"flex"}
                                                                        flexDirection={"column"}

                                                                    >
                                                                        <Box
                                                                            display={"flex"}
                                                                            alignItems={"center"}
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
                                                                                Token / Amount
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
                                                                                {item?.value?.toFixed(3)}
                                                                            </Text>
                                                                        </Box>
                                                                        <Box
                                                                            display={"flex"}
                                                                            alignItems={"center"}
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
                                                                                Value(USD)
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
                                                                                {
                                                                                    (Math.trunc(item?.value * item?.price)).toLocaleString('en-US', {
                                                                                        style: 'currency',
                                                                                        currency: 'USD'
                                                                                    })}
                                                                            </Text>
                                                                        </Box>
                                                                        <Box
                                                                            display={"flex"}
                                                                            alignItems={"center"}
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
                                                                                {item.percentageValue?.toFixed(2)} {" "}{"%"}
                                                                            </Text>
                                                                        </Box>
                                                                    </Box>
                                                                </Td>
                                                            </Tr>

                                                        </AccordionPanel>
                                                    </AccordionItem>
                                                </Accordion>
                                            </Td>
                                        </Tr>
                                    </>
                                );
                            }))
                        )
                    }
                </Tbody>
            </Table>
        </>
    )
};

export default DefiTable;