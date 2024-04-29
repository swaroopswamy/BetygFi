"use client";
import { Box, Text, useColorMode } from "@chakra-ui/react";
import React from "react";

const News = () => {
    const { colorMode } = useColorMode();

    return (
        <Box
            width={"100%"}
            height={"100%"}
            textAlign={"left"}
            borderRadius={"10px"}
            bg={colorMode === 'light' ? "#FFFFFF" : "#282828"}
        >
            <Box borderBottom={colorMode === 'light' ? "1px solid #757575" : "1px solid #A5A5A5"} pt={"5px"} mx={"15px"} >
                <Text variant={"h5"} fontWeight={300} color={colorMode === 'light' ? "#757575" : "#A5A5A5"} >
                    Economic Times . 22 Feb’24
                </Text>
                <Text variant={"h5"} color={colorMode === 'light' ? "#191919" : "#FFF"}>
                    Indian Stocks close high amid weak economic data
                </Text>
            </Box>
            <Box borderBottom={colorMode === 'light' ? "1px solid #757575" : "1px solid #A5A5A5"} pt={"5px"} mx={"15px"} >
                <Text variant={"h5"} fontWeight={300} color={colorMode === 'light' ? "#757575" : "#A5A5A5"} >
                    Economic Times . 22 Feb’24
                </Text>
                <Text variant={"h5"} color={colorMode === 'light' ? "#191919" : "#FFF"}>
                    Indian Stocks close high amid weak economic data
                </Text>
            </Box>
            <Box borderBottom={colorMode === 'light' ? "1px solid #757575" : "1px solid #A5A5A5"} pt={"5px"} mx={"15px"} >
                <Text variant={"h5"} fontWeight={300} color={colorMode === 'light' ? "#757575" : "#A5A5A5"} >
                    Economic Times . 22 Feb’24
                </Text>
                <Text variant={"h5"} color={colorMode === 'light' ? "#191919" : "#FFF"}>
                    Indian Stocks close high amid weak economic data
                </Text>
            </Box>
            <Box borderBottom={colorMode === 'light' ? "1px solid #757575" : "1px solid #A5A5A5"} pt={"5px"} mx={"15px"} >
                <Text variant={"h5"} fontWeight={300} color={colorMode === 'light' ? "#757575" : "#A5A5A5"} >
                    Economic Times . 22 Feb’24
                </Text>
                <Text variant={"h5"} color={colorMode === 'light' ? "#191919" : "#FFF"}>
                    Indian Stocks close high amid weak economic data
                </Text>
            </Box>
            <Box borderBottom={colorMode === 'light' ? "1px solid #757575" : "1px solid #A5A5A5"} pt={"5px"} mx={"15px"} >
                <Text variant={"h5"} fontWeight={300} color={colorMode === 'light' ? "#757575" : "#A5A5A5"} >
                    Economic Times . 22 Feb’24
                </Text>
                <Text variant={"h5"} color={colorMode === 'light' ? "#191919" : "#FFF"}>
                    Indian Stocks close high amid weak economic data
                </Text>
            </Box>
            <Box borderBottom={colorMode === 'light' ? "1px solid #757575" : "1px solid #A5A5A5"} pt={"5px"} mx={"15px"} >
                <Text variant={"h5"} fontWeight={300} color={colorMode === 'light' ? "#757575" : "#A5A5A5"} >
                    Economic Times . 22 Feb’24
                </Text>
                <Text variant={"h5"} color={colorMode === 'light' ? "#191919" : "#FFF"}>
                    Indian Stocks close high amid weak economic data
                </Text>
            </Box>
            <Box borderBottom={colorMode === 'light' ? "1px solid #757575" : "1px solid #A5A5A5"} pt={"5px"} mx={"15px"} >
                <Text variant={"h5"} fontWeight={300} color={colorMode === 'light' ? "#757575" : "#A5A5A5"} >
                    Economic Times . 22 Feb’24
                </Text>
                <Text variant={"h5"} color={colorMode === 'light' ? "#191919" : "#FFF"}>
                    Indian Stocks close high amid weak economic data
                </Text>
            </Box>
            <Box pt={"5px"} mx={"15px"} >
                <Text variant={"h5"} fontWeight={300} color={colorMode === 'light' ? "#757575" : "#A5A5A5"} >
                    Economic Times . 22 Feb’24
                </Text>
                <Text variant={"h5"} color={colorMode === 'light' ? "#191919" : "#FFF"}>
                    Indian Stocks close high amid weak economic data
                </Text>
            </Box>
        </Box>
    );
};

export default News;