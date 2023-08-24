import { Box, Button, Flex, Image, Spacer, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tooltip, Tr, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import React from 'react'


const DefiInflowOutflowSmallTable = () => {

    const { colorMode } = useColorMode();
    const router = useRouter();

    //For DeFi Inflow/Outflow Table
    const value1 = "+356,456,560";
    const value2 = "+ 256,456,560";
    const value3 = "+ 46,456,560";
    const value4 = "+ 66,456,560";
    const value5 = "+ 56,456,560";

    return (
        <>
            <Box
                w='50%'
                //mr={"30px"}
                display={"flex"}
                flexDirection={"column"}
                borderRadius={"6px"}
                _dark={{
                    bg: "#202020"
                }}
                _light={{
                    bg: "#FFFFFF"
                }}
            >
                <Flex
                    height={"70px"}
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
                        fontSize={"18px"}
                        fontWeight={"600"}
                        lineHeight={"20px"}
                        ml={"20px"}
                        mr={"6px"}
                        paddingTop={"15px"}
                    >
                        DeFi Inflow/Outflow
                    </Text>
                    <Tooltip label="#Frame">
                        <Image width={"12px"}
                            height={"12px"}
                            flexShrink={"0"}
                            mt={"20px"}
                            alt=''
                            src="/images/Frame.svg">
                        </Image>
                    </Tooltip>
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
                            router.push(`/defi_dashboard/`)
                        }}
                    >

                        <Text
                            _light={{ color: "#16171B" }}
                            _dark={{ color: "#FFFFFF" }}
                            fontSize={"14px"}
                            fontWeight={"400"}
                            lineHeight={"10px"}
                        >
                            View More
                        </Text>

                    </Button>
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
                                            textTransform={"uppercase"}>Users Address</Text>



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

                                        <Text
                                            _light={{ color: "#434347" }}
                                            _dark={{ color: "#A8ADBD" }}
                                            fontSize={"14px"}
                                            fontWeight={"400"}
                                            lineHeight={"20px"}
                                            letterSpacing={"1px"}
                                            textTransform={"uppercase"}>Net Value Flow (7 Days)</Text>

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

                                                width={"24px"}

                                                height={"24px"}

                                                alt='logo'

                                                src="/icons/Ethereum_sm_icon.svg"
                                            ></Image>

                                        </>



                                        <Text ml="6px"  fontSize={"14px"}> Etherium</Text>

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

                                                width={"24px"}

                                                height={"24px"}

                                                alt='logo'

                                                src="/icons/Tron_sm_icon.svg"

                                            ></Image>

                                        </>



                                        <Text ml="6px"  fontSize={"14px"}>  Tron </Text>

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

                                                width={"24px"}

                                                height={"24px"}

                                                alt='logo'

                                                src="/icons/BSC_sm_icon.svg"

                                            ></Image>

                                        </>



                                        <Text ml="6px"  fontSize={"14px"}> BSC </Text>

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

                                        color={value3 < 0 ? "#EF1E1E" : "#245F00"}

                                    >

                                        {value3 >= 0 ? `+${value3} USD` : `${value3} USD`}

                                    </Text>

                                </Box></Td>

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

                                                width={"24px"}

                                                height={"24px"}

                                                alt='logo'

                                                src="/icons/Arbitrum_sm_icon.svg"

                                            ></Image>

                                        </>



                                        <Text ml="6px"  fontSize={"14px"}> Arbitrum </Text>

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

                                        color={value4 < 0 ? "#EF1E1E" : "#245F00"}

                                    >

                                        {value4 >= 0 ? `+${value4} USD` : `${value4} USD`}

                                    </Text>

                                </Box></Td>

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

                                                width={"24px"}

                                                height={"24px"}

                                                alt='logo'

                                                src="/icons/Polygon_sm_icon.svg"

                                            ></Image>

                                        </>



                                        <Text ml="6px"  fontSize={"14px"}> Polygon</Text>

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

                                        color={value5 < 0 ? "#EF1E1E" : "#245F00"}

                                    >

                                        {value5 >= 0 ? `+${value5} USD` : `${value5} USD`}

                                    </Text>

                                </Box></Td>

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
                                _light={{ color: "#A8ADBD" }}
                                _dark={{ color: "#A8ADBD" }}
                                fontSize={"12px"}
                                fontWeight={"400"}
                                lineHeight={"20px"}
                            >
                                Last Update
                            </Text>
                            <Text
                                _light={{ color: "#16171B" }}
                                _dark={{ color: "#FFFFFF" }}
                                fontSize={"12px"}
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
    )
}

export default DefiInflowOutflowSmallTable;