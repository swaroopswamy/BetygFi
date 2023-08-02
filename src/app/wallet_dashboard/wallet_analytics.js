import { Box, Button, Flex, Image, Text, Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer, extendTheme } from '@chakra-ui/react';
import React from 'react'
import AssetAllocationPieChart from './AssetAllocationPieChart';
import AssetTrendSplineChart from './AssetTrendSplineChart';
import PerformanceMultiLineChart from './PerformanceMultiLineChart';
import BlockchainAllocationTreemapChart from './BlockchainAllocationTreemapChart';

const WalletAnalyticsPanel = () => {
    const { colorMode } = useColorMode();
    const value1 = "300" ;
    const value2 = "-300" ;
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