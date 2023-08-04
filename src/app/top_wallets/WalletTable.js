"use client";
import {
    Grid, GridItem, Input, Table, TableCaption, Text, Tbody, Td, Tfoot, Th, Thead,
    Tr, Flex, Box, useColorModeValue, Icon, Tooltip,
    Image, Spacer
} from "@chakra-ui/react";

const WalletTable = () => {

    return (
        <>
            <Box
                flex={"center"}
                flexDirection={"column"}
                justifyContent={"space-between"}
                bgColor={useColorModeValue("#F5F5F7", "#191919")}
                borderRadius={"6px"}
            >
                <Box 
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    padding={"8px 30px 8px 30px"}
                >
                    <Box>
                        <Text
                            color={useColorModeValue("#16171B", "#FFFFFF")}
                            ml={"5px"}
                            mt={"5px"}
                            size={"18px"}
                            lineHeight={"20px"}
                        >
                            Top Value Holders
                        </Text>
                    </Box>

                    <Spacer />

                    <Box>
                        <Input
                borderColor={useColorModeValue("#E8E8E8", "#333")}
                bgColor={useColorModeValue("#F5F5F7", "#191919")}
                color={useColorModeValue("#16171B", "#A8ADBD")}
                fontSize={"10px"}
                            fontWeight={400}
                            w="207px"
                            h="32px"
                            placeholder="Search DeFi"
                            //onChange={(e) => { searchByNameHandler(e.target.value) }} 
                        />
                    </Box>

                </Box>

                <Table variant='simple'>
                        <Thead>
                        <Tr
                            bg={useColorModeValue("#F5F5F7", "#131313")}
                            width={"100%"}
                            flex-shrink={"0"}
                        >
                            <Th
                            color={useColorModeValue("#434347", "#A8ADBD")}
                            fontSize={"10px"}
                            fontStyle={"normal"}
                            fontWeight={"400"}
                            lineHeight={"20px"}
                            letterSpacing={"1px"}
                            textTransform={"uppercase"}
                            textAlign={"left"}
                            >
                            User</Th>
                            <Th
                            color={useColorModeValue("#434347", "#A8ADBD")}
                            fontSize={"10px"}
                            fontStyle={"normal"}
                            fontWeight={"400"}
                            lineHeight={"20px"}
                            letterSpacing={"1px"}
                            textTransform={"uppercase"}
                            textAlign={"left"}
                            >
                            Net Worth</Th>
                            <Th
                            color={useColorModeValue("#434347", "#A8ADBD")}
                            fontSize={"10px"}
                            fontStyle={"normal"}
                            fontWeight={"400"}
                            lineHeight={"20px"}
                            letterSpacing={"1px"}
                            textTransform={"uppercase"}
                            textAlign={"left"}
                            >
                            Total Tokens</Th>
                            <Th
                            color={useColorModeValue("#434347", "#A8ADBD")}
                            fontSize={"10px"}
                            fontStyle={"normal"}
                            fontWeight={"400"}
                            lineHeight={"20px"}
                            letterSpacing={"1px"}
                            textTransform={"uppercase"}
                            textAlign={"left"}
                            >
                            Total Protocols</Th>
                            <Th
                            color={useColorModeValue("#434347", "#A8ADBD")}
                            fontSize={"10px"}
                            fontStyle={"normal"}
                            fontWeight={"400"}
                            lineHeight={"20px"}
                            letterSpacing={"1px"}
                            textTransform={"uppercase"}
                            textAlign={"left"}
                            >
                            Total NFT Collections</Th>
                        </Tr>
                        </Thead>

                        <Tbody>
                        <Tr>
                            <Td>
                            <Flex>
                                <Box>
                                    <Text
                                        color={useColorModeValue("#16171B", "#FFFFFF")}
                                        fontSize={"11px"}
                                        fontStyle={"normal"}
                                        fontWeight={"600"}
                                        lineHeight={"11px"}
                                        ml={"10px"}
                                        mt={"1px"}
                                    >
                                        0x8b4d84......43f72
                                    </Text>
                                </Box>
                            </Flex>
                            </Td>

                            <Td>
                            <Flex>
                                <Box>
                                    <Text
                                        color={useColorModeValue("#16171B", "#FFFFFF")}
                                        fontSize={"11px"}
                                        fontStyle={"normal"}
                                        fontWeight={"600"}
                                        lineHeight={"11px"}
                                        ml={"10px"}
                                        mt={"1px"}
                                    >
                                        $65B
                                    </Text>
                                </Box>
                            </Flex>
                            </Td>

                            <Td>
                            <Flex>
                                <Box
                                    padding={"2px"}
                                    border={"1px"}
                                    borderColor={"#333333"}
                                >
                                    <Text
                                        color={useColorModeValue("#16171B", "#FFFFFF")}
                                        fontSize={"11px"}
                                        fontStyle={"normal"}
                                        fontWeight={"600"}
                                        lineHeight={"11px"}
                                        ml={"10px"}
                                        mt={"1px"}
                                    >
                                        100%
                                    </Text>
                                </Box>
                            </Flex>
                            </Td>

                            <Td>
                            <Flex>
                                <Box>
                                    <Text
                                        color={useColorModeValue("#16171B", "#FFFFFF")}
                                        fontSize={"11px"}
                                        fontStyle={"normal"}
                                        fontWeight={"600"}
                                        lineHeight={"11px"}
                                        ml={"10px"}
                                        mt={"1px"}
                                    >
                                    </Text>
                                </Box>
                            </Flex>
                            </Td>

                            <Td>
                            <Flex>
                                <Box>
                                    <Text
                                        color={useColorModeValue("#16171B", "#FFFFFF")}
                                        fontSize={"11px"}
                                        fontStyle={"normal"}
                                        fontWeight={"600"}
                                        lineHeight={"11px"}
                                        ml={"10px"}
                                        mt={"1px"}
                                    >
                                    </Text>
                                </Box>
                            </Flex>
                            </Td>

                        </Tr>

                        <Tr>
                            <Td>
                            <Flex>
                                <Box>
                                    <Text
                                        color={useColorModeValue("#16171B", "#FFFFFF")}
                                        fontSize={"11px"}
                                        fontStyle={"normal"}
                                        fontWeight={"600"}
                                        lineHeight={"11px"}
                                        ml={"10px"}
                                        mt={"1px"}
                                    >
                                        0x8b4d84......43f72
                                    </Text>
                                </Box>
                            </Flex>
                            </Td>

                            <Td>
                            <Flex>
                                <Box>
                                    <Text
                                        color={useColorModeValue("#16171B", "#FFFFFF")}
                                        fontSize={"11px"}
                                        fontStyle={"normal"}
                                        fontWeight={"600"}
                                        lineHeight={"11px"}
                                        ml={"10px"}
                                        mt={"1px"}
                                    >
                                        $200B
                                    </Text>
                                </Box>
                            </Flex>
                            </Td>

                            <Td>
                            <Flex>
                                <Box
                                    padding={"2px"}
                                    border={"1px"}
                                    borderColor={"#333333"}
                                >
                                    <Text
                                        color={useColorModeValue("#16171B", "#FFFFFF")}
                                        fontSize={"11px"}
                                        fontStyle={"normal"}
                                        fontWeight={"600"}
                                        lineHeight={"11px"}
                                        ml={"10px"}
                                        mt={"1px"}
                                    >
                                        58%
                                    </Text>
                                </Box>
                            </Flex>
                            </Td>

                            <Td>
                            <Flex>
                                <Box>
                                    <Text
                                        color={useColorModeValue("#16171B", "#FFFFFF")}
                                        fontSize={"11px"}
                                        fontStyle={"normal"}
                                        fontWeight={"600"}
                                        lineHeight={"11px"}
                                        ml={"10px"}
                                        mt={"1px"}
                                    >
                                    </Text>
                                </Box>
                            </Flex>
                            </Td>

                            <Td>
                            <Flex>
                                <Box>
                                    <Text
                                        color={useColorModeValue("#16171B", "#FFFFFF")}
                                        fontSize={"11px"}
                                        fontStyle={"normal"}
                                        fontWeight={"600"}
                                        lineHeight={"11px"}
                                        ml={"10px"}
                                        mt={"1px"}
                                    >
                                    </Text>
                                </Box>
                            </Flex>
                            </Td>

                            

                        </Tr>

                        <Tr>
                            <Td>
                            <Flex>
                                <Box>
                                    <Text
                                        color={useColorModeValue("#16171B", "#FFFFFF")}
                                        fontSize={"11px"}
                                        fontStyle={"normal"}
                                        fontWeight={"600"}
                                        lineHeight={"11px"}
                                        ml={"10px"}
                                        mt={"1px"}
                                    >
                                        0x8b4d84......43f72
                                    </Text>
                                </Box>
                            </Flex>
                            </Td>

                            <Td>
                            <Flex>
                                <Box>
                                    <Text
                                        color={useColorModeValue("#16171B", "#FFFFFF")}
                                        fontSize={"11px"}
                                        fontStyle={"normal"}
                                        fontWeight={"600"}
                                        lineHeight={"11px"}
                                        ml={"10px"}
                                        mt={"1px"}
                                    >
                                        $25B
                                    </Text>
                                </Box>
                            </Flex>
                            </Td>

                            <Td>
                            <Flex>
                                <Box
                                    padding={"2px"}
                                    border={"1px"}
                                    borderColor={"#333333"}
                                >
                                    <Text
                                        color={useColorModeValue("#16171B", "#FFFFFF")}
                                        fontSize={"11px"}
                                        fontStyle={"normal"}
                                        fontWeight={"600"}
                                        lineHeight={"11px"}
                                        ml={"10px"}
                                        mt={"1px"}
                                    >
                                        78%
                                    </Text>
                                </Box>
                            </Flex>
                            </Td>
                            
                            <Td>
                            <Flex>
                                <Box>
                                    <Text
                                        color={useColorModeValue("#16171B", "#FFFFFF")}
                                        fontSize={"11px"}
                                        fontStyle={"normal"}
                                        fontWeight={"600"}
                                        lineHeight={"11px"}
                                        ml={"10px"}
                                        mt={"1px"}
                                    >
                                    </Text>
                                </Box>
                            </Flex>
                            </Td>

                            <Td>
                            <Flex>
                                <Box>
                                    <Text
                                        color={useColorModeValue("#16171B", "#FFFFFF")}
                                        fontSize={"11px"}
                                        fontStyle={"normal"}
                                        fontWeight={"600"}
                                        lineHeight={"11px"}
                                        ml={"10px"}
                                        mt={"1px"}
                                    >
                                    </Text>
                                </Box>
                            </Flex>
                            </Td>
                        </Tr>

                        </Tbody>
                        <Tfoot>
                        </Tfoot>
                </Table>
            </Box>
        </>
    )
};

export default WalletTable;