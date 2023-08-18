import { Box, Button, Flex, Image, Spacer, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tooltip, Tr, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import React from 'react'

const DefiUsersSmallTableComponent = () => {

    const { colorMode } = useColorMode();
    const router = useRouter();
    return (
        <>
            <Box
                width={"50%"}
                display={"flex"}
                flexDirection={"column"}
                borderRadius={"6px"}

                _dark={{
                    bg: "#202020"
                }}
                _light={{
                    bg: "#FFFFFF"
                }}
                mr={"25px"}
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
                    }} >
                    <Text
                        _light={{ color: "#16171B" }}
                        _dark={{ color: "#FFFFFF" }}
                        fontSize={"15px"}
                        fontWeight={"400"}
                        lineHeight={"20px"}
                        ml={"20px"}
                        mt={"20px"}
                    >
                        DeFi Users
                    </Text>
                    <Spacer />
                    <Button
                        variant={"outline"}
                        size={"xs"}
                        _light={{ colorScheme: "#F5F5F7", stroke: "#000" }}
                        _dark={{ colorScheme: "#191919", stroke: "#333" }}
                        strokeWidth={"1px"}
                        mt={"15px"}
                        mr={"20px"}
                        onClick={() => {
                            router.push(`/defi_dashboard/defi_users`)
                        }}
                    >
                        <Text
                            _light={{ color: "#16171B" }}
                            _dark={{ color: "#FFFFFF" }}
                            fontSize={"10px"}
                            fontWeight={"400"}
                            lineHeight={"10px"}
                        >
                            View More
                        </Text>
                    </Button>
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
                                            Users Address
                                        </Text>
                                        <Tooltip label="#Frame">
                                            <Image width={"12px"}
                                                height={"12px"}
                                                flexShrink={"0"}
                                                mt={"4px"}
                                                ml={"2px"}
                                                alt=''
                                                src="/images/Frame.svg">
                                            </Image>
                                        </Tooltip>
                                    </Flex>
                                </Th>

                                <Th>
                                    <Flex >
                                        <Text
                                            _light={{ color: "#434347" }}
                                            _dark={{ color: "#A8ADBD" }}
                                            fontSize={"10px"}
                                            fontWeight={"400"}
                                            lineHeight={"20px"}
                                            letterSpacing={"1px"}
                                            textTransform={"uppercase"}>
                                            Share
                                        </Text>
                                        <Tooltip label="#Frame">
                                            <Image width={"12px"}
                                                height={"12px"}
                                                flexShrink={"0"}
                                                mt={"4px"}
                                                ml={"2px"}
                                                alt=''
                                                src="/images/Frame.svg">
                                            </Image>
                                        </Tooltip>
                                    </Flex>
                                </Th>

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
                                            Top Tokens
                                        </Text>
                                        <Tooltip label="#Frame">
                                            <Image width={"12px"}
                                                height={"12px"}
                                                flexShrink={"0"}
                                                mt={"4px"}
                                                ml={"1px"}
                                                alt=''
                                                src="/images/Frame.svg">
                                            </Image>
                                        </Tooltip>
                                        <Image src={useColorModeValue("/images/Definame(light).svg", "/images/Definame(black).svg")} alt=""></Image>
                                    </Flex>
                                </Th>
                            </Tr>
                        </Thead>

                        <Tbody
                            fontSize={"10px"}
                            fontWeight={"400"}
                            lineHeight={"20px"}
                            _dark={{ bgColor: "#202020" }}
                            _light={{ bgColor: "#FFF" }} >
                            <Tr>
                                <Td _dark={{ color: "#FFFFFF" }}
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
                                                src="/images/Ethereumlogo.svg"
                                            ></Image>
                                        </>

                                        <Text
                                            _light={{ color: "#16171B" }}
                                            _dark={{ color: "#FFFFFF" }}
                                            fontSize={"9px"}
                                            fontWeight={"400"}
                                            lineHeight={"20px"}
                                            ml={"10px"}>0xe984…1cc2   $39,689,191</Text>
                                    </Box>
                                </Td>

                                <Td>
                                    <Box
                                        display={"flex"}
                                        alignItems={"center"}
                                    >
                                        <Text
                                            fontSize={"9px"}
                                            fontWeight={"400"}
                                            lineHeight={"20px"}
                                            ml="6px"
                                            _light={{ color: "#16171B" }}
                                            _dark={{ color: "#FFFFFF" }}
                                        >
                                            13.09%
                                        </Text>
                                    </Box>
                                </Td>
                                <Td>
                                    <Box
                                        display={"flex"}
                                        alignItems={"center"}
                                    >
                                        <Image
                                            width={"7px"}
                                            height={"12px"}
                                            alt=''
                                            src="/images/Ethereumlogo.svg"></Image>
                                        <Text
                                            _light={{ color: "#16171B" }}
                                            _dark={{ color: "#FFFFFF" }}
                                            fontSize={"9px"}
                                            fontWeight={"400"}
                                            lineHeight={"20px"}
                                            letterSpacing={"1px"}
                                            ml={"5px"}
                                        >ETH</Text>
                                        <Text
                                            _light={{ color: "#16171B" }}
                                            _dark={{ color: "#FFFFFF" }}
                                            fontSize={"9px"}
                                            fontWeight={"400"}
                                            lineHeight={"20px"}
                                            letterSpacing={"1px"}
                                            textTransform={"uppercase"}
                                            opacity={"0.5"}
                                            ml={"5px"}
                                        >50.11%</Text>
                                        <Image
                                            width={"13px"}
                                            height={"12px"}
                                            alt=''
                                            ml={"10px"}
                                            src="/images/Polygonmaticlogo.svg"></Image>
                                        <Text
                                            _light={{ color: "#16171B" }}
                                            _dark={{ color: "#FFFFFF" }}
                                            fontSize={"9px"}
                                            fontWeight={"400"}
                                            lineHeight={"20px"}
                                            letterSpacing={"1px"}
                                            ml={"5px"}
                                        >MATIC</Text>
                                        <Text
                                            _light={{ color: "#16171B" }}
                                            _dark={{ color: "#FFFFFF" }}
                                            fontSize={"9px"}
                                            fontWeight={"400"}
                                            lineHeight={"20px"}
                                            letterSpacing={"1px"}
                                            textTransform={"uppercase"}
                                            opacity={"0.5"}
                                            ml={"5px"}
                                        >49.11%</Text>
                                    </Box>
                                </Td>
                            </Tr>

                            <Tr>
                                <Td _dark={{ color: "#FFFFFF" }}
                                    _light={{ color: "#16171B" }}
                                >

                                    <Box
                                        display={"flex"}
                                        alignItems={"center"}
                                    >
                                        <>
                                            <Image
                                                width={"14px"}
                                                height={"14px"}
                                                alt=''
                                                src="/images/Tronlogo.svg"
                                            ></Image>
                                        </>

                                        <Text
                                            _light={{ color: "#16171B" }}
                                            _dark={{ color: "#FFFFFF" }}
                                            fontSize={"9px"}
                                            fontWeight={"400"}
                                            lineHeight={"20px"}
                                            ml={"10px"}>0xe984…1cc2   $39,689,191</Text>
                                    </Box>
                                </Td>

                                <Td>
                                    <Box
                                        display={"flex"}
                                        alignItems={"center"}
                                    >
                                        <Text
                                            fontSize={"9px"}
                                            fontWeight={"400"}
                                            lineHeight={"20px"}
                                            ml="6px"
                                            _light={{ color: "#16171B" }}
                                            _dark={{ color: "#FFFFFF" }}
                                        >
                                            13.09%
                                        </Text>
                                    </Box>
                                </Td>
                                <Td>
                                    <Box
                                        display={"flex"}
                                        alignItems={"center"}
                                    >
                                        <Image
                                            width={"7px"}
                                            height={"12px"}
                                            alt=''
                                            src="/images/Ethereumlogo.svg"></Image>
                                        <Text
                                            _light={{ color: "#16171B" }}
                                            _dark={{ color: "#FFFFFF" }}
                                            fontSize={"9px"}
                                            fontWeight={"400"}
                                            lineHeight={"20px"}
                                            letterSpacing={"1px"}
                                            ml={"5px"}
                                        >ETH</Text>
                                        <Text
                                            _light={{ color: "#16171B" }}
                                            _dark={{ color: "#FFFFFF" }}
                                            fontSize={"9px"}
                                            fontWeight={"400"}
                                            lineHeight={"20px"}
                                            letterSpacing={"1px"}
                                            textTransform={"uppercase"}
                                            opacity={"0.5"}
                                            ml={"5px"}
                                        >50.11%</Text>
                                        <Image
                                            width={"13px"}
                                            height={"12px"}
                                            alt=''
                                            ml={"10px"}
                                            src="/images/Polygonmaticlogo.svg"></Image>
                                        <Text
                                            _light={{ color: "#16171B" }}
                                            _dark={{ color: "#FFFFFF" }}
                                            fontSize={"9px"}
                                            fontWeight={"400"}
                                            lineHeight={"20px"}
                                            letterSpacing={"1px"}
                                            ml={"5px"}
                                        >MATIC</Text>
                                        <Text
                                            _light={{ color: "#16171B" }}
                                            _dark={{ color: "#FFFFFF" }}
                                            fontSize={"9px"}
                                            fontWeight={"400"}
                                            lineHeight={"20px"}
                                            letterSpacing={"1px"}
                                            textTransform={"uppercase"}
                                            opacity={"0.5"}
                                            ml={"5px"}
                                        >49.11%</Text>
                                    </Box>
                                </Td>
                            </Tr>

                            <Tr>
                                <Td _dark={{ color: "#FFFFFF" }}
                                    _light={{ color: "#16171B" }}
                                >

                                    <Box
                                        display={"flex"}
                                        alignItems={"center"}
                                    >
                                        <>
                                            <Image
                                                width={"12px"}
                                                height={"12px"}
                                                alt=''
                                                src="/images/Binancelogo.svg"
                                            ></Image>
                                        </>

                                        <Text
                                            _light={{ color: "#16171B" }}
                                            _dark={{ color: "#FFFFFF" }}
                                            fontSize={"9px"}
                                            fontWeight={"400"}
                                            lineHeight={"20px"}
                                            ml={"10px"}>0xe984…1cc2   $39,689,191</Text>
                                    </Box>
                                </Td>

                                <Td>
                                    <Box
                                        display={"flex"}
                                        alignItems={"center"}
                                    >
                                        <Text
                                            fontSize={"9px"}
                                            fontWeight={"400"}
                                            lineHeight={"20px"}
                                            ml="6px"
                                            _light={{ color: "#16171B" }}
                                            _dark={{ color: "#FFFFFF" }}
                                        >
                                            13.09%
                                        </Text>
                                    </Box>
                                </Td>
                                <Td>
                                    <Box
                                        display={"flex"}
                                        alignItems={"center"}
                                    >
                                        <Image
                                            width={"7px"}
                                            height={"12px"}
                                            alt=''
                                            src="/images/Ethereumlogo.svg"></Image>
                                        <Text
                                            _light={{ color: "#16171B" }}
                                            _dark={{ color: "#FFFFFF" }}
                                            fontSize={"9px"}
                                            fontWeight={"400"}
                                            lineHeight={"20px"}
                                            letterSpacing={"1px"}
                                            ml={"5px"}
                                        >ETH</Text>
                                        <Text
                                            _light={{ color: "#16171B" }}
                                            _dark={{ color: "#FFFFFF" }}
                                            fontSize={"9px"}
                                            fontWeight={"400"}
                                            lineHeight={"20px"}
                                            letterSpacing={"1px"}
                                            textTransform={"uppercase"}
                                            opacity={"0.5"}
                                            ml={"5px"}
                                        >50.11%</Text>
                                        <Image
                                            width={"13px"}
                                            height={"12px"}
                                            alt=''
                                            ml={"10px"}
                                            src="/images/Polygonmaticlogo.svg"></Image>
                                        <Text
                                            _light={{ color: "#16171B" }}
                                            _dark={{ color: "#FFFFFF" }}
                                            fontSize={"9px"}
                                            fontWeight={"400"}
                                            lineHeight={"20px"}
                                            letterSpacing={"1px"}
                                            ml={"5px"}
                                        >MATIC</Text>
                                        <Text
                                            _light={{ color: "#16171B" }}
                                            _dark={{ color: "#FFFFFF" }}
                                            fontSize={"9px"}
                                            fontWeight={"400"}
                                            lineHeight={"20px"}
                                            letterSpacing={"1px"}
                                            textTransform={"uppercase"}
                                            opacity={"0.5"}
                                            ml={"5px"}
                                        >49.11%</Text>
                                    </Box>
                                </Td>
                            </Tr>

                            <Tr>
                                <Td _dark={{ color: "#FFFFFF" }}
                                    _light={{ color: "#16171B" }}
                                >

                                    <Box
                                        display={"flex"}
                                        alignItems={"center"}
                                    >
                                        <>
                                            <Image
                                                width={"12px"}
                                                height={"12px"}
                                                alt=''
                                                src="/images/Arbitrumlogo.svg"
                                            ></Image>
                                        </>

                                        <Text
                                            _light={{ color: "#16171B" }}
                                            _dark={{ color: "#FFFFFF" }}
                                            fontSize={"9px"}
                                            fontWeight={"400"}
                                            lineHeight={"20px"}
                                            ml={"10px"}>0xe984…1cc2   $39,689,191</Text>
                                    </Box>
                                </Td>

                                <Td>
                                    <Box
                                        display={"flex"}
                                        alignItems={"center"}
                                    >
                                        <Text
                                            fontSize={"9px"}
                                            fontWeight={"400"}
                                            lineHeight={"20px"}
                                            ml="6px"
                                            _light={{ color: "#16171B" }}
                                            _dark={{ color: "#FFFFFF" }}
                                        >
                                            13.09%
                                        </Text>
                                    </Box>
                                </Td>
                                <Td>
                                    <Box
                                        display={"flex"}
                                        alignItems={"center"}
                                    >
                                        <Image
                                            width={"7px"}
                                            height={"12px"}
                                            alt=''
                                            src="/images/Ethereumlogo.svg"></Image>
                                        <Text
                                            _light={{ color: "#16171B" }}
                                            _dark={{ color: "#FFFFFF" }}
                                            fontSize={"9px"}
                                            fontWeight={"400"}
                                            lineHeight={"20px"}
                                            letterSpacing={"1px"}
                                            ml={"5px"}
                                        >ETH</Text>
                                        <Text
                                            _light={{ color: "#16171B" }}
                                            _dark={{ color: "#FFFFFF" }}
                                            fontSize={"9px"}
                                            fontWeight={"400"}
                                            lineHeight={"20px"}
                                            letterSpacing={"1px"}
                                            textTransform={"uppercase"}
                                            opacity={"0.5"}
                                            ml={"5px"}
                                        >50.11%</Text>
                                        <Image
                                            width={"13px"}
                                            height={"12px"}
                                            alt=''
                                            ml={"10px"}
                                            src="/images/Polygonmaticlogo.svg"></Image>
                                        <Text
                                            _light={{ color: "#16171B" }}
                                            _dark={{ color: "#FFFFFF" }}
                                            fontSize={"9px"}
                                            fontWeight={"400"}
                                            lineHeight={"20px"}
                                            letterSpacing={"1px"}
                                            ml={"5px"}
                                        >MATIC</Text>
                                        <Text
                                            _light={{ color: "#16171B" }}
                                            _dark={{ color: "#FFFFFF" }}
                                            fontSize={"9px"}
                                            fontWeight={"400"}
                                            lineHeight={"20px"}
                                            letterSpacing={"1px"}
                                            textTransform={"uppercase"}
                                            opacity={"0.5"}
                                            ml={"5px"}
                                        >49.11%</Text>
                                    </Box>
                                </Td>
                            </Tr>

                            <Tr>
                                <Td _dark={{ color: "#FFFFFF" }}
                                    _light={{ color: "#16171B" }}
                                >

                                    <Box
                                        display={"flex"}
                                        alignItems={"center"}
                                    >
                                        <>
                                            <Image
                                                width={"13px"}
                                                height={"12px"}
                                                alt=''
                                                src="/images/Polygonmaticlogo.svg"
                                            ></Image>
                                        </>

                                        <Text
                                            _light={{ color: "#16171B" }}
                                            _dark={{ color: "#FFFFFF" }}
                                            fontSize={"9px"}
                                            fontWeight={"400"}
                                            lineHeight={"20px"}
                                            ml={"10px"}>0xe984…1cc2   $39,689,191</Text>
                                    </Box>
                                </Td>

                                <Td>
                                    <Box
                                        display={"flex"}
                                        alignItems={"center"}
                                    >
                                        <Text
                                            fontSize={"9px"}
                                            fontWeight={"400"}
                                            lineHeight={"20px"}
                                            ml="6px"
                                            _light={{ color: "#16171B" }}
                                            _dark={{ color: "#FFFFFF" }}
                                        >
                                            13.09%
                                        </Text>
                                    </Box>
                                </Td>
                                <Td>
                                    <Box
                                        display={"flex"}
                                        alignItems={"center"}
                                    >
                                        <Image
                                            width={"7px"}
                                            height={"12px"}
                                            alt=''
                                            src="/images/Ethereumlogo.svg"></Image>
                                        <Text
                                            _light={{ color: "#16171B" }}
                                            _dark={{ color: "#FFFFFF" }}
                                            fontSize={"9px"}
                                            fontWeight={"400"}
                                            lineHeight={"20px"}
                                            letterSpacing={"1px"}
                                            ml={"5px"}
                                        >ETH</Text>
                                        <Text
                                            _light={{ color: "#16171B" }}
                                            _dark={{ color: "#FFFFFF" }}
                                            fontSize={"9px"}
                                            fontWeight={"400"}
                                            lineHeight={"20px"}
                                            letterSpacing={"1px"}
                                            textTransform={"uppercase"}
                                            opacity={"0.5"}
                                            ml={"5px"}
                                        >50.11%</Text>
                                        <Image
                                            width={"13px"}
                                            height={"12px"}
                                            alt=''
                                            ml={"10px"}
                                            src="/images/Polygonmaticlogo.svg"></Image>
                                        <Text
                                            _light={{ color: "#16171B" }}
                                            _dark={{ color: "#FFFFFF" }}
                                            fontSize={"9px"}
                                            fontWeight={"400"}
                                            lineHeight={"20px"}
                                            letterSpacing={"1px"}
                                            ml={"5px"}
                                        >MATIC</Text>
                                        <Text
                                            _light={{ color: "#16171B" }}
                                            _dark={{ color: "#FFFFFF" }}
                                            fontSize={"9px"}
                                            fontWeight={"400"}
                                            lineHeight={"20px"}
                                            letterSpacing={"1px"}
                                            textTransform={"uppercase"}
                                            opacity={"0.5"}
                                            ml={"5px"}
                                        >49.11%</Text>
                                    </Box>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                    <Box
                        display={"flex"}
                        justifyContent={"end"}
                        my={"10px"}
                        mr="25px"
                    >
                        <Flex>
                            <Text
                                _light={{ color: "#434347" }}
                                _dark={{ color: "#A8ADBD" }}
                                fontSize={"10px"}
                                fontWeight={"400"}
                                lineHeight={"20px"}
                            >
                                Last Update
                            </Text>
                            <Text
                                _light={{ color: "#16171B" }}
                                _dark={{ color: "#FFFFFF" }}
                                fontSize={"10px"}
                                fontWeight={"400"}
                                lineHeight={"20px"}
                                ml={"3px"}
                            >
                                3 mins ago
                            </Text>
                        </Flex>
                    </Box>
                </TableContainer>
            </Box>

        </>
    );
}

export default DefiUsersSmallTableComponent;