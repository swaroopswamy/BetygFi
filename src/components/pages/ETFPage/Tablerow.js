import React from "react";
import { Box, Text, Tr, Td } from "@chakra-ui/react";

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

export default TableRow;