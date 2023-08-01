import { Box, Button, Flex, Image, Text, Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer, extendTheme } from '@chakra-ui/react';
import React from 'react'
import AssetAllocationPieChart from './AssetAllocationPieChart';
import AssetTrendSplineChart from './AssetTrendSplineChart';
import PerformanceMultiLineChart from './PerformanceMultiLineChart';
import BlockchainAllocationTreemapChart from './BlockchainAllocationTreemapChart';

const WalletAnalyticsPanel = () => {
    return (
        <>
            <Box
                display={'inline-flex'}
                w="100%"
                my="10px"
            >
                <Box
                    w='50%'
                    display={"flex"}
                    flexDirection={"column"}
                    borderRadius={"6px"}
                    _dark={{
                        bg: "#202020",
                        border: "1px solid #272727"
                    }}
                    _light={{
                        bg: "#FFFFFF",
                        border: "1px solid #ADADAD"
                    }}
                    mr="10px"
                >
                    <Box
                        display="flex"
                        justifyContent={"space-between"}
                        alignItems={"center"}
                    >
                        <Text
                            fontSize={"15px"}
                            fontWeight={400}
                            lineHeight={"20px"}
                            _dark={{ color: "#FFF" }}
                            _light={{ color: "#212121" }}
                        >
                            Blockchain Allocation
                        </Text>
                        <Button
                            fontSize={"10px"}
                            fontWeight={400}
                            lineHeight={"20px"}
                            _dark={{ color: "#FFF", bgColor: "#191919", border: "1px solid #979AA5" }}
                            _light={{ color: "#16171B", bgColor: "#979AA5", border: "1px solid #787878" }}
                            padding={"7px 11px"}
                        >
                            View More
                        </Button>
                    </Box>
                    <Box>
                        <BlockchainAllocationTreemapChart />
                    </Box>
                </Box>
                <Box
                    w='50%'
                    display={"flex"}
                    flexDirection={"column"}
                    borderRadius={"6px"}
                    _dark={{
                        bg: "#202020",
                        border: "1px solid #272727"
                    }}
                    _light={{
                        bg: "#FFFFFF",
                        border: "1px solid #ADADAD"
                    }}
                    ml="10px"
                >
                    <Box
                        display="flex"
                        p="22px 25px"
                    >
                        <Text
                            fontSize={"15px"}
                            fontWeight={400}
                            lineHeight={"20px"}
                            _dark={{ color: "#FFF" }}
                            _light={{ color: "#212121" }}
                        >
                            Assets Allocation
                        </Text>
                    </Box>
                    <Box>
                        <AssetAllocationPieChart />
                    </Box>
                </Box>
            </Box>

            <Box
            display={'inline-flex'}
            w="100%"
            my="10px"
            >
            <Box
             w='50%'
            height={"367px"}
             display={"flex"}
             flexDirection={"column"}
             borderRadius={"6px"}
             _dark={{
                 bg: "#202020",
                 border: "1px solid #272727"
             }}
             _light={{
                 bg: "#FFFFFF",
                 border: "1px solid #ADADAD"
             }}
             mr="10px"
             >
                <Flex>
                <Text
                _light={{color:"#16171B"}}
                _dark={{color:"#FFFFFF"}}
                fontSize={"15px"}
                fontStyle={"normal"}
                fontWeight={"400"}
                lineHeight={"20px"}
                paddingBottom={"20px"}
                ml={"20px"}
                mt={"15px"}
                >
                 Protocol Allocation
                </Text>
                <Image src='/images/Frame.svg' width={"12px"} height={"12px"} flexShrink={"0"} ml={"5px"} mt={"20px"}></Image>
                </Flex>

                <TableContainer>
  <Table variant='simple'>
    {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
    <Thead _dark={{bgColor:"#191919"}} _light={{bgColor:"#F5F5F7"}}>
      <Tr>
        <Th>
            <Box display={"flex"} alignItems={"center"}>
                <Text
                _light={{color:"#434347"}}
                _dark={{color:"#A8ADBD"}}
                 fontSize={"10px"}
                 fontWeight={"400"}
                 lineHeight={"20px"}
                 letterSpacing={"1px"}
                 textTransform={"uppercase"}
                >
                 DeFi Name
                </Text>
                <Image src={extendTheme === 'light' ? ("/images/Definame(light).svg"):("/images/Definame(black)")} width={"12px"} height={"12px"} flexShrink={"0"} ml={"2px"}></Image>
            </Box>
        </Th>
        <Th>
        <Box display={"flex"} alignItems={"center"}>
                <Text
                 _light={{color:"#434347"}}
                 _dark={{color:"#A8ADBD"}}
                 fontSize={"10px"}
                 fontWeight={"400"}
                 lineHeight={"20px"}
                 letterSpacing={"1px"}
                 textTransform={"uppercase"}
                >
                 Share
                </Text>
                <Image src='/images/Definame.svg' width={"12px"} height={"12px"} flexShrink={"0"} ml={"2px"}></Image>
            </Box>
        </Th>
        <Th>
        <Box display={"flex"} alignItems={"center"}>
                <Text
                 _light={{color:"#434347"}}
                 _dark={{color:"#A8ADBD"}}
                 fontSize={"10px"}
                 fontWeight={"400"}
                 lineHeight={"20px"}
                 letterSpacing={"1px"}
                 textTransform={"uppercase"}
                >
                 Value
                </Text>
                <Image src='/images/Definame.svg' width={"12px"} height={"12px"} flexShrink={"0"} ml={"2px"}></Image>
            </Box>
        </Th>
      </Tr>
    </Thead>
    <Tbody>
        <Tr>
        <Td>
            <Box display={"flex"} alignItems={"center"}>
            <Image src='/images/Venus.svg' width={"20px"} height={"20px"} flex-shrink={"0"} border-radius={"100px"}></Image>
            <Text
            _light={{color:"#16171B"}}
            _dark={{color:"#FFFFFF"}}
            fontSize={"10px"}
            fontWeight={"400"}
            lineHeight={"20px"}
            ml={"5px"}
            >Venus</Text>
            </Box>
        </Td>
        <Td
        _light={{color:"#16171B"}}
        _dark={{color:"#FFFFFF"}}
        fontSize={"10px"}
        fontWeight={"400"}
        lineHeight={"20px"}
        >60%</Td>
        <Td
        _light={{color:"#16171B"}}
        _dark={{color:"#FFFFFF"}}
        fontSize={"10px"}
        fontWeight={"400"}
        lineHeight={"20px"}
        >USD 356,456,560</Td>
      </Tr>
      <Tr>
        <Td>
      <Box display={"flex"} alignItems={"center"}>
            <Image src='/images/Morphoaave.svg' width={"20px"} height={"20px"} flex-shrink={"0"} border-radius={"100px"}></Image>
            <Text
            _light={{color:"#16171B"}}
            _dark={{color:"#FFFFFF"}}
            fontSize={"10px"}
            fontWeight={"400"}
            lineHeight={"20px"}
            ml={"5px"}
            >Morpho Aave</Text>
            </Box>
            </Td>
        <Td
        _light={{color:"#16171B"}}
        _dark={{color:"#FFFFFF"}}
        fontSize={"10px"}
        fontWeight={"400"}
        lineHeight={"20px"}
        >40%</Td>
        <Td
        _light={{color:"#16171B"}}
        _dark={{color:"#FFFFFF"}}
        fontSize={"10px"}
        fontWeight={"400"}
        lineHeight={"20px"}
        >USD 256,456,560</Td>
      </Tr>
      <Tr>
      <Td>
      <Box display={"flex"} alignItems={"center"}>
            <Image src='/images/Compoundv3.svg' width={"20px"} height={"20px"} flex-shrink={"0"} border-radius={"100px"}></Image>
            <Text
            _light={{color:"#16171B"}}
            _dark={{color:"#FFFFFF"}}
            fontSize={"10px"}
            fontWeight={"400"}
            lineHeight={"20px"}
            ml={"5px"}
            >Compound V3</Text>
            </Box>
      </Td>
        <Td
        _light={{color:"#16171B"}}
        _dark={{color:"#FFFFFF"}}
        fontSize={"10px"}
        fontWeight={"400"}
        lineHeight={"20px"}
        >13.09%</Td>
        <Td
        _light={{color:"#16171B"}}
        _dark={{color:"#FFFFFF"}}
        fontSize={"10px"}
        fontWeight={"400"}
        lineHeight={"20px"}
        >USD 46,456,560</Td>
      </Tr>
      <Tr>
      <Td>
      <Box display={"flex"} alignItems={"center"}>
            <Image src='/images/Radiantv2.svg' width={"20px"} height={"20px"} flex-shrink={"0"} border-radius={"100px"}></Image>
            <Text
            _light={{color:"#16171B"}}
            _dark={{color:"#FFFFFF"}}
            fontSize={"10px"}
            fontWeight={"400"}
            lineHeight={"20px"}
            ml={"5px"}
            >Radiant V2</Text>
            </Box>
      </Td>
        <Td
        _light={{color:"#16171B"}}
        _dark={{color:"#FFFFFF"}}
        fontSize={"10px"}
        fontWeight={"400"}
        lineHeight={"20px"}
        >15%</Td>
        <Td
        _light={{color:"#16171B"}}
        _dark={{color:"#FFFFFF"}}
        fontSize={"10px"}
        fontWeight={"400"}
        lineHeight={"20px"}
        >USD 66,456,560</Td>
      </Tr>
      <Tr>
      <Td>
      <Box display={"flex"} alignItems={"center"}>
            <Image src='/images/Fluidtokens.svg' width={"20px"} height={"20px"} flex-shrink={"0"} border-radius={"100px"}></Image>
                <Text
                _light={{color:"#16171B"}}
                _dark={{color:"#FFFFFF"}}
                fontFamily={"Inter"}
                fontSize={"12px"}
                fontWeight={"600"}
                lineHeight={"20px"}
                ml={"-13px"}
                >
                 F
                </Text>
            
            <Text
            _light={{color:"#16171B"}}
            _dark={{color:"#FFFFFF"}}
            fontSize={"10px"}
            fontWeight={"400"}
            lineHeight={"20px"}
            ml={"10px"}
            >FluidTokens</Text>
            </Box>
      </Td>
        <Td
        _light={{color:"#16171B"}}
        _dark={{color:"#FFFFFF"}}
        fontSize={"10px"}
        fontWeight={"400"}
        lineHeight={"20px"}
        >13.09%</Td>
        <Td
        _light={{color:"#16171B"}}
        _dark={{color:"#FFFFFF"}}
        fontSize={"10px"}
        fontWeight={"400"}
        lineHeight={"20px"}
        >USD 56,456,560</Td>
      </Tr>
    </Tbody>
    {/* <Tfoot>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Tfoot> */}
  </Table>
</TableContainer>
            </Box>
            </Box>
            <Box
                my="10px"
                w='100%'
                display={"flex"}
                flexDirection={"column"}
                borderRadius={"6px"}
                _dark={{
                    bg: "#202020",
                    border: "1px solid #272727"
                }}
                _light={{
                    bg: "#FFFFFF",
                    border: "1px solid #ADADAD"
                }}
                p="25px"
            >
                <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                >
                    <Text
                        fontSize={"15px"}
                        fontWeight={400}
                        lineHeight={"20px"}
                        _dark={{ color: "#FFF" }}
                        _light={{ color: "#212121" }}
                    >
                        Asset Trend
                    </Text>
                </Box>
                <Box>
                    <AssetTrendSplineChart />
                </Box>
            </Box>
            <Box
                my="10px"
                w='100%'
                display={"flex"}
                flexDirection={"column"}
                borderRadius={"6px"}
                _dark={{
                    bg: "#202020",
                    border: "1px solid #272727"
                }}
                _light={{
                    bg: "#FFFFFF",
                    border: "1px solid #ADADAD"
                }}
                p="25px"
            >
                <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                >
                    <Text
                        fontSize={"15px"}
                        fontWeight={400}
                        lineHeight={"20px"}
                        _dark={{ color: "#FFF" }}
                        _light={{ color: "#212121" }}
                    >
                        Performance
                    </Text>
                </Box>
                <Box>
                    <PerformanceMultiLineChart />
                </Box>
            </Box>
        </>
    );
}

export default WalletAnalyticsPanel;