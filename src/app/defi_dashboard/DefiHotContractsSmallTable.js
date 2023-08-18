import { Box, Button, Flex, Image, Spacer, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tooltip, Tr, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import React from 'react'


const DefiHotContractsSmallTable = () => {

    const { colorMode } = useColorMode();
    const router = useRouter();

    return (
        <>
            <Box
                mr={"25px"}

                w='50%'

                height={"390px"}

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

                        fontSize={"15px"}

                        fontStyle={"normal"}

                        fontWeight={"400"}

                        lineHeight={"20px"}

                        ml={"20px"}

                        mr={"6px"}

                        paddingTop={"15px"}

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
                        _light={{ colorScheme: "#F5F5F7", stroke: "#000" }}
                        _dark={{ colorScheme: "#191919", stroke: "#333" }}
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

                                        <Text paddingRight={"5px"}
                                            _light={{ color: "#434347" }}
                                            _dark={{ color: "#A8ADBD" }}
                                            fontSize={"10px"}
                                            fontWeight={"400"}
                                            lineHeight={"20px"}
                                            letterSpacing={"1px"}
                                            textTransform={"uppercase"}>Contract Name</Text>



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
                                            fontSize={"10px"}
                                            fontWeight={"400"}
                                            lineHeight={"20px"}
                                            letterSpacing={"1px"}
                                            textTransform={"uppercase"}>No. of users</Text>

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
                                            fontSize={"10px"}
                                            fontWeight={"400"}
                                            lineHeight={"20px"}
                                            letterSpacing={"1px"}
                                            textTransform={"uppercase"}>No. of Transactions</Text>

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

                            fontSize={"10px"}

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

                                                width={5}

                                                height={5}

                                                alt='logo'

                                                src="/icons/Ethereum_sm_icon.svg"

                                            ></Image>

                                        </>



                                        <Text ml="6px"> Venus</Text>

                                    </Box>

                                </Td>



                                <Td>

                                    <Box

                                        display={"flex"}

                                        alignItems={"center"}>

                                        <Text

                                            fontSize={"10px"}

                                            fontWeight={"600"}

                                            letterSpacing={"1px"}

                                            ml="6px">

                                            500

                                        </Text>

                                    </Box>

                                </Td>

                                <Td>4607</Td>

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

                                                width={5}

                                                height={5}

                                                alt='logo'

                                                src="/icons/Tron_sm_icon.svg"

                                            ></Image>

                                        </>



                                        <Text ml="6px">  Morpho Aave </Text>

                                    </Box>

                                </Td>

                                <Td><Box

                                    display={"flex"}

                                    alignItems={"center"}

                                >

                                    <Text

                                        fontSize={"10px"}

                                        fontWeight={"600"}

                                        letterSpacing={"1px"}

                                        ml="6px">

                                        250

                                    </Text>

                                </Box></Td>

                                <Td>3523</Td>

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

                                                width={5}

                                                height={5}

                                                alt='logo'

                                                src="/icons/BSC_sm_icon.svg"

                                            ></Image>

                                        </>



                                        <Text ml="6px"> Compound V3 </Text>

                                    </Box></Td>

                                <Td><Box

                                    display={"flex"}

                                    alignItems={"center"}

                                >

                                    <Text

                                        fontSize={"10px"}

                                        fontWeight={"600"}

                                        letterSpacing={"1px"}

                                        ml="6px">

                                        190

                                    </Text>

                                </Box></Td>

                                <Td>507</Td>

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

                                                width={5}

                                                height={5}

                                                alt='logo'

                                                src="/icons/Arbitrum_sm_icon.svg"

                                            ></Image>

                                        </>



                                        <Text ml="6px">  Radiant V2 </Text>

                                    </Box></Td>

                                <Td><Box

                                    display={"flex"}

                                    alignItems={"center"}

                                >

                                    <Text

                                        fontSize={"10px"}

                                        fontWeight={"600"}

                                        letterSpacing={"1px"}

                                        ml="6px">

                                        140

                                    </Text>

                                </Box></Td>

                                <Td>1205</Td>

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

                                                width={5}

                                                height={5}

                                                alt='logo'

                                                src="/icons/Polygon_sm_icon.svg"

                                            ></Image>

                                        </>



                                        <Text ml="6px"> FluidTokens </Text>

                                    </Box></Td>

                                <Td><Box

                                    display={"flex"}

                                    alignItems={"center"}

                                >

                                    <Text

                                        fontSize={"10px"}

                                        fontWeight={"600"}

                                        letterSpacing={"1px"}

                                        ml="6px">

                                        120

                                    </Text>

                                </Box></Td>

                                <Td>5207</Td>

                            </Tr>

                            <Tr>
                                <Td></Td>
                                <Td></Td>
                                <Td >
                                    <Text paddingLeft={"40px"} paddingBottom={"100px"}>
                                        Last Update 3 mins ago</Text></Td>
                            </Tr>





                        </Tbody>



                    </Table>

                </TableContainer>

            </Box>

        </>
    )
}

export default DefiHotContractsSmallTable;