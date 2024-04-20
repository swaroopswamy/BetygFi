import React from "react";
import { Box, Input, InputGroup, InputLeftElement, Select, Text, useColorMode, Tr, Td } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { tableHeader } from "./helper";
import Image from "next/image";

const GenericTable = dynamic(() => import("@components/table"));

const ETFTracker = () => {
    const { colorMode } = useColorMode();
    const placeholderStyle = {
        color: "#6F6F6F",
        fontSize: "12px",
        fontWeight: 400,
        lineHeight: "20px",
    };

    return (
        <Box
            width={"100%"}
            height={"100%"}
            borderRadius={"8px"}
            _light={{ bg: "#FFFFFF" }}
            _dark={{ bg: "#282828" }}
            boxShadow={"0px 6px 6px 2px rgba(0, 0, 0, 0.15)"}
        >
            <Box layerStyle={"flexSpaceBetween"}
                p={"15px"}
            >
                <Box cursor={"pointer"}>
                    <Text variant={"h2"} fontWeight={700} lineHeight={"26px"}>
                        Bitcoin ETF Tracker
                    </Text>
                    <Text
                        variant={"baseStyle"}
                        fontWeight={500}
                        color={colorMode === 'light' ? "#191919" : "#FFFFFF"}
                        lineHeight={"18px"}
                        mt={"5px"}
                    >
                        Total - 1000
                    </Text>
                </Box>
                <Box layerStyle={"flexCenter"} gap={"20px"}>
                    <InputGroup width={"250px"} height={"35px"} bg={"background.primary"} borderRadius={"20px"}>
                        <InputLeftElement>
                            <Image src={"/icons/search.svg"} width={16} height={16} alt=" "></Image>
                        </InputLeftElement>
                        <Input
                            borderRadius={"20px"}
                            placeholder='Search for ETF...'
                            style={placeholderStyle}
                        />
                    </InputGroup>
                    <Select
                        width={"125px"}
                        height={"40px"}
                        border={"1px"}
                        borderRadius={"8px"}
                        borderColor={colorMode === "light" ? "#1C1C1CCC" : "#333"}
                        bg={colorMode === "light" ? "#FFFFFF" : "#191919"}
                        padding={"9px 5px"}
                    >
                        <option value="Volume">
                            <Text variant={"h0"} fontSize={"14px"} lineHeight={"16px"}>
                                Futures
                            </Text>
                        </option>
                        <option value="Liquidity">Volume</option>
                    </Select>
                </Box>
            </Box>

            <Box overflowX={"auto"}>
                <GenericTable
                    tableHeader={tableHeader}
                    TableRow={TableRow}
                    SkeletonRowsColumnsDesktop={{ numRows: 10, numColumns: 10 }}
                    slideToLeftFeature={true}
                />
            </Box>
        </Box>
    );
};
export default ETFTracker;

const TableRow = () => {
    const commonStyleTdProp = {
        _light: { bgColor: "#FFFFFF", },
        _dark: { bgColor: "#202020", }
    };
    return (
        <Tr cursor={"pointer"} border={"0px"}>
            <Td {...commonStyleTdProp} textAlign={"center"}>
                <Text variant={"contentHeading3"} fontSize={"14px"} fontWeight={500}>
                    ARKB
                </Text>
            </Td>
            <Td {...commonStyleTdProp}>
                <Text variant={"contentHeading3"} fontSize={"14px"} fontWeight={500}>
                    ARK Invest
                </Text>
            </Td>
            <Td {...commonStyleTdProp}>
                <Text variant={"contentHeading3"} fontSize={"14px"} fontWeight={400}>
                    ARK 21Shares Bitcoin ETF
                </Text>
            </Td>
            <Td {...commonStyleTdProp}>
                <Text variant={"contentHeading3"} fontSize={"14px"} fontWeight={400}>
                    Spot
                </Text>
            </Td>
            <Td {...commonStyleTdProp}>
                <Text variant={"contentHeading3"} fontSize={"14px"} fontWeight={400}>
                    $51.13
                </Text>
            </Td>
            <Td {...commonStyleTdProp}>
                <Text variant={"contentHeading3"} fontSize={"14px"} fontWeight={400}>
                    100,122
                </Text>
            </Td>
            <Td {...commonStyleTdProp}>
                <Text variant={"contentHeading3"} fontSize={"14px"} fontWeight={400}>
                    Coinbase
                </Text>
            </Td>
            <Td {...commonStyleTdProp}>
                <Text variant={"contentHeading3"} fontSize={"14px"} fontWeight={400}>
                    $48,207,897
                </Text>
            </Td>
            <Td {...commonStyleTdProp}>
                <Text variant={"contentHeading3"} fontSize={"14px"} fontWeight={400}>
                    944
                </Text>
            </Td>
            <Td {...commonStyleTdProp}>
                <Box width={"80px"} height={"33px"} bg={"#245F003D"} borderRadius={"8px"}>
                    <Text variant={"contentHeading3"} lineHeight={"24px"} fontWeight={700} color={"#245F00"} textAlign={"center"}>
                        Running
                    </Text>
                </Box>
            </Td>
        </Tr>
    );
};
