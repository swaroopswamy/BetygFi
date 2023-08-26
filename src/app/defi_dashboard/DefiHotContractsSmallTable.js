import { Box, Button, Flex, Image, Spacer, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tooltip, Tr, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import React from 'react'


const DefiHotContractsSmallTable = () => {

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

                        fontSize={"18px"}

                        fontWeight={600}

                        lineHeight={"20px"}

                        ml={"22px"}

                        mr={"6px"}

                        mt={"15px"}

                    >

                        DeFi Hot/Active Contracts

                    </Text>

                    <>

                        <Tooltip label='#Frame'

                            padding='14px 8px'

                            fontWeight={400}

                            fontSize={"10px"}>



                            <Image width={"12px"}
                                height={"12px"}
                                flexShrink={"0"}
                                mt={"20px"}
                                alt=''
                                src="/images/Frame.svg">
                            </Image>



                        </Tooltip>

                    </>

                    <Spacer />

                    <Button
                        variant={"outline"}
                        size={"xs"}
                        _light={{ colorScheme: "#D9D9D9", stroke: "#D9D9D9" }}
                        _dark={{ colorScheme: "#333", stroke: "#333" }}
                        strokeWidth={"1px"}
                        mt={"15px"}
                        mr={"20px"}
                        onClick={() => {
                            router.push(`/defi_dashboard/defi_hot_contract`)
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
                                            fontWeight={400}
                                            lineHeight={"20px"}
                                            letterSpacing={"1.4px"}
                                            textTransform={"capitalize"}>Contract Name</Text>



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
                                            fontWeight={400}
                                            lineHeight={"20px"}
                                            letterSpacing={"1.4px"}
                                            textTransform={"capitalize"}>No. of users</Text>

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
                                            fontWeight={400}
                                            lineHeight={"20px"}
                                            letterSpacing={"1.4px"}
                                            textTransform={"capitalize"}>No. of Transactions</Text>

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

                            <Tr height={"40px"} _dark={{ color: "#FFFFFF" }}

                                _light={{ color: "#16171B" }}>

                                <Td  >



                                    <Box

                                        display={"flex"}

                                        alignItems={"center"}

                                    >

                                        <>

                                            <Image

                                                width={"24px"}

                                                height={"24px"}

                                                alt='logo'

                                                src="/icons/venus_logo.svg"

                                            ></Image>

                                        </>



                                        <Text ml="6px"  fontSize={"14px"}> Venus</Text>

                                    </Box>

                                </Td>



                                <Td>

                                    <Box

                                        display={"flex"}

                                        alignItems={"center"}>

                                        <Text

                                            fontSize={"14px"}

                                            fontWeight={"400"}

                                            letterSpacing={"1px"}

                                            ml="6px">

                                            500

                                        </Text>

                                    </Box>

                                </Td>

                                <Td  fontSize={"14px"}>4607</Td>

                            </Tr>



                            <Tr height={"40px"} _dark={{ color: "#FFFFFF" }}

                                _light={{ color: "#16171B" }}>

                                <Td>

                                    <Box

                                        display={"flex"}

                                        alignItems={"center"}

                                    >

                                        <>

                                            <Image

                                                width={"24px"}

                                                height={"24px"}

                                                alt='logo'

                                                src="/icons/morphoaave_logo.svg"

                                            ></Image>

                                        </>



                                        <Text ml="6px"  fontSize={"14px"}>  Morpho Aave </Text>

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

                                        ml="6px">

                                        250

                                    </Text>

                                </Box></Td>

                                <Td  fontSize={"14px"}>3523</Td>

                            </Tr>



                            <Tr height={"40px"}

                                _dark={{ color: "#FFFFFF" }}

                                _light={{ color: "#16171B" }}>

                                <Td >

                                    <Box

                                        display={"flex"}

                                        alignItems={"center"}

                                    >

                                        <>

                                            <Image

                                                width={"24px"}

                                                height={"24px"}

                                                alt='logo'

                                                src="/icons/compoundv3.svg"

                                            ></Image>

                                        </>



                                        <Text ml="6px"  fontSize={"14px"}> Compound V3 </Text>

                                    </Box></Td>

                                <Td><Box

                                    display={"flex"}

                                    alignItems={"center"}

                                >

                                    <Text

                                        fontSize={"14px"}

                                        fontWeight={"400"}

                                        letterSpacing={"1px"}

                                        ml="6px">

                                        190

                                    </Text>

                                </Box></Td>

                                <Td  fontSize={"14px"}>507</Td>

                            </Tr>



                            <Tr height={"40px"}

                                _dark={{ color: "#FFFFFF" }}

                                _light={{ color: "#16171B" }}>

                                <Td >

                                    <Box

                                        display={"flex"}

                                        alignItems={"center"}

                                    >

                                        <>

                                            <Image

                                                width={"24px"}

                                                height={"24px"}

                                                alt='logo'

                                                src="/icons/radiantv2_logo.svg"

                                            ></Image>

                                        </>



                                        <Text ml="6px"  fontSize={"14px"}>  Radiant V2 </Text>

                                    </Box></Td>

                                <Td><Box

                                    display={"flex"}

                                    alignItems={"center"}

                                >

                                    <Text

                                        fontSize={"14px"}

                                        fontWeight={"400"}

                                        letterSpacing={"1px"}

                                        ml="6px">

                                        140

                                    </Text>

                                </Box></Td>

                                <Td  fontSize={"14px"}>1205</Td>

                            </Tr>



                            <Tr height={"40px"} _dark={{ color: "#FFFFFF" }}

                                _light={{ color: "#16171B" }} >

                                <Td >

                                    <Box

                                        display={"flex"}

                                        alignItems={"center"}

                                    >

                                        <>

                                            <Image

                                                width={"24px"}

                                                height={"24px"}

                                                alt='logo'

                                                src="/icons/fluidtoken_logo.svg"

                                            ></Image>

                                        </>



                                        <Text ml="6px"  fontSize={"14px"}> FluidTokens </Text>

                                    </Box></Td>

                                <Td><Box

                                    display={"flex"}

                                    alignItems={"center"}

                                >

                                    <Text

                                        fontSize={"14px"}

                                        fontWeight={"400"}

                                        letterSpacing={"1px"}

                                        ml="6px">

                                        120

                                    </Text>

                                </Box></Td>

                                <Td  fontSize={"14px"}>5207</Td>

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
                                color={"#A8ADBD"}
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

export default DefiHotContractsSmallTable;