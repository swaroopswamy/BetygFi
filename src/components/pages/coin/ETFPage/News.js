"use client";
import { Box, Text, useColorMode } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

const News = () => {
    const { colorMode } = useColorMode();
    const ETFNewsData = useSelector((state) => state?.coinData?.ETFNewsData);

    return (
        <Box
            width={"100%"}
            height={"100%"}
            textAlign={"left"}
            borderRadius={"10px"}
            bg={colorMode === 'light' ? "#FFFFFF" : "#282828"}
            pb={"15px"}
        >
            {ETFNewsData?.data?.news.slice(0, 10).map((item, index) => (
                <Box key={index} borderBottom={colorMode === 'light' ? "1px solid #757575" : "1px solid #A5A5A5"} py={"5px"} mx={"15px"} >
                    <Text variant={"h5"} fontWeight={300} color={colorMode === 'light' ? "#757575" : "#A5A5A5"} >
                        {item.date}
                    </Text>
                    <a href={item.link} target="_blank" rel="Ticker News">
                        <Text variant={"h5"} color={colorMode === 'light' ? "#191919" : "#FFF"}>
                            {item.title}
                        </Text>
                    </a>
                </Box>
            ))}
        </Box>
    );
};

export default News;