"use client"
import { Box, Image, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useColorModeValue, Flex, Tooltip, TableContainer, Table, Thead, Tr, Th, Tbody, Td, Spacer, Button, useColorMode } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import millify from "millify";

let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

const TVLBox = () => {
    const defiData = useSelector(
        (state) => state?.defiDashboardData?.DefiData
    )
    console.log("defidata: ", defiData);

    return (
        <Box w={{ base: "100%", lg: "40%" }} layerStyle={"flexColumn"} borderRadius={"6px"} bg={useColorModeValue("#FFFFFF", "#202020")}>
            <Box p={"20px"} gap={"10px"}>
                <Box py={"10px"}>
                    <Text
                        _light={{ color: "#16171B" }}
                        _dark={{ color: "#FFFFFF" }}
                        fontSize={"24px"}
                        fontWeight={600}
                        lineHeight={"20px"}
                        letterSpacing={"2.4px"}
                        textTransform={"uppercase"}>
                        ${" "}{defiData?.isSuccess ? (millify(defiData?.data?.tvl, {
                            precision: 2,
                            locales: "en-US"
                        })) :
                            "-"}
                    </Text>

                    <Text
                        _light={{ color: "#16171B" }}
                        _dark={{ color: "#FFFFFF" }}
                        textAlign={"left"}
                        fontSize={"12px"}
                        fontWeight={400}
                        lineHeight={"10px"}
                        pt={"10px"}
                    >
                        Total Value Locked
                    </Text>
                </Box>

                <hr/>

                <Box display={"flex"} flexDirection={"column"} justifyContent={"space-between"} py={"10px"} gap={"5px"}>
                    <TVLRow
                        name={"Market Cap"}
                        value={defiData?.isSuccess ? "$" + (millify(defiData?.data?.mcap, {
                            precision: 2,
                            locales: "en-US"
                        })) : "-"}
                    />
                    <TVLRow
                        name={"Token Price"}
                        value={defiData?.isSuccess ? "$" + defiData?.data?.price.toFixed(2) : "-"}
                    />
                    {/* <TVLRow
                        name={"Fully Diluted"}
                        value={defiData?.isSuccess ? "$" + (millify(defiData?.data?.mcap, {
                            precision: 2,
                            locales: "en-US"
                        })) : "-"}
                    /> */}
                </Box>

                <Box display={"flex"} alignItems={"center"} justifyContent={"end"} gap={"10px"}>
                    <Text color={"#A8ADBD"} fontSize={"12px"} fontWeight={400} lineHeight={"20px"}>
                        Last Update
                    </Text>
                    <Text variant={"h6"}>
                        3 mins ago
                    </Text>
                </Box>
            </Box>
        </Box >
    )

}

export default TVLBox;

const TVLRow = ( {name, value}) => {
    return (
        <Box display={"flex"} justifyContent={"space-between"}>
            <Text variant={'h3'}> {name} </Text>
            <Text variant={'h3'}> {value} </Text>
        </Box>
    )
}