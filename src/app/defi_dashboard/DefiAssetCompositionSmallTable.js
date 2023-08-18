import { Box, Button, Flex, Image, Spacer, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tooltip, Tr, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import React from 'react'


const DefiAssetCompositionSmallTable = () => {

    const { colorMode } = useColorMode();
    const router = useRouter();

    return (
        <>
            <Box
                w='50%'
                display={"flex"}
                flexDirection={"column"}
                borderRadius={"6px"}
             
                _dark={{ bg: "#202020" }}
                _light={{ bg: "#FFFFFF" }}
                mr="25px"
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
                        paddingTop={"15px"}
                    >
                        DeFi Asset Composition
                    </Text>
                    <Tooltip label="#Frame">
                        <Image width={"12px"}
                            height={"12px"}
                            flexShrink={"0"}
                            mt={"20px"}
                            ml={"5px"}
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
                            router.push(`/defi_dashboard/asset_composition`)
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
                                            Asset Name
                                        </Text>
                                        <Image src={useColorModeValue("/images/Definame(light).svg", "/images/Definame(black).svg")} alt="" ml={"2px"}></Image>
                                    </Flex>
                                </Th>

                                <Th>
                                    <Flex >
                                        <Text _light={{ color: "#434347" }}
                                            _dark={{ color: "#A8ADBD" }}
                                            fontSize={"10px"}
                                            fontWeight={"400"}
                                            lineHeight={"20px"}
                                            letterSpacing={"1px"}
                                            textTransform={"uppercase"}>
                                            Share
                                        </Text>
                                        <Image src={useColorModeValue("/images/Definame(light).svg", "/images/Definame(black).svg")} alt="" ml={"2px"}></Image>
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
                                            textTransform={"uppercase"}
                                        >
                                            Value
                                        </Text>
                                        <Image src={useColorModeValue("/images/Definame(light).svg", "/images/Definame(black).svg")} alt="" ml={"2px"}></Image>
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
                                                width={5}
                                                height={5}
                                                alt='logo'
                                                src="/images/Venus.svg"
                                            ></Image>
                                        </>

                                        <Text ml="6px"> Venus</Text>
                                    </Box>
                                </Td>

                                <Td>
                                    <Box
                                        display={"flex"}
                                        alignItems={"center"}
                                    >
                                        <Text
                                            fontSize={"10px"}
                                            fontWeight={"400"}
                                            lineHeight={"20px"}
                                            ml="6px"
                                            _light={{ color: "#16171B" }}
                                            _dark={{ color: "#FFFFFF" }}
                                        >
                                            60%
                                        </Text>
                                    </Box>
                                </Td>
                                <Td>USD 356,456,560</Td>
                            </Tr>

                            <Tr>
                                <Td
                                    _dark={{ color: "#FFFFFF" }}
                                    _light={{ color: "#16171B" }} >
                                    <Box
                                        display={"flex"}
                                        alignItems={"center"}
                                    >
                                        <>
                                            <Image
                                                width={5}
                                                height={5}
                                                alt='logo'
                                                src="/images/Morphoaave.svg"
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
                                        fontWeight={"400"}
                                        lineHeight={"20px"}
                                        ml="6px"
                                        _light={{ color: "#16171B" }}
                                        _dark={{ color: "#FFFFFF" }}
                                    >
                                        40%
                                    </Text>
                                </Box></Td>
                                <Td>USD 256,456,560</Td>
                            </Tr>

                            <Tr>
                                <Td
                                    _dark={{ color: "#FFFFFF" }}
                                    _light={{ color: "#16171B" }} >
                                    <Box
                                        display={"flex"}
                                        alignItems={"center"}
                                    >
                                        <>
                                            <Image
                                                width={5}
                                                height={5}
                                                alt='logo'
                                                src="/images/Compoundv3.svg"
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
                                        fontWeight={"400"}
                                        lineHeight={"20px"}
                                        ml="6px"
                                        _light={{ color: "#16171B" }}
                                        _dark={{ color: "#FFFFFF" }}
                                    >
                                        13.09%
                                    </Text>
                                </Box></Td>
                                <Td>USD 46,456,560</Td>
                            </Tr>

                            <Tr>
                                <Td
                                    _dark={{ color: "#FFFFFF" }}
                                    _light={{ color: "#16171B" }} >
                                    <Box
                                        display={"flex"}
                                        alignItems={"center"}
                                    >
                                        <>
                                            <Image
                                                width={5}
                                                height={5}
                                                alt='logo'
                                                src="/images/Radiantv2.svg"
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
                                        fontWeight={"400"}
                                        lineHeight={"20px"}
                                        ml="6px"
                                        _light={{ color: "#16171B" }}
                                        _dark={{ color: "#FFFFFF" }}
                                    >
                                        15%
                                    </Text>
                                </Box></Td>
                                <Td>USD 66,456,560</Td>
                            </Tr>

                            <Tr>
                                <Td _dark={{ color: "#FFFFFF" }}
                                    _light={{ color: "#16171B" }} >
                                    <Box
                                        display={"flex"}
                                        alignItems={"center"}
                                    >
                                        <>
                                            <Image
                                                width={5}
                                                height={5}
                                                alt='logo'
                                                src="/images/Fluidtokens.svg"
                                            ></Image>
                                            <Image src={colorMode === 'light' ? ("/images/F(light).svg") : ("/images/F(dark).svg")} ml={"-13px"} alt=''></Image>
                                        </>

                                        <Text ml="10px"> FluidTokens </Text>
                                    </Box></Td>
                                <Td><Box
                                    display={"flex"}
                                    alignItems={"center"}
                                >
                                    <Text
                                        fontSize={"10px"}
                                        fontWeight={"400"}
                                        lineHeight={"20px"}
                                        ml="6px"
                                        _light={{ color: "#16171B" }}
                                        _dark={{ color: "#FFFFFF" }}
                                    >
                                        13.09%
                                    </Text>
                                </Box></Td>
                                <Td>USD 56,456,560</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                    <Box
                            height={"30px"}
                            display={"flex"}
                            alignItems={"end"}
                            paddingLeft={"350px"}
                            >
                                <Flex mb={"5px"}>
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
    )
}

export default DefiAssetCompositionSmallTable;