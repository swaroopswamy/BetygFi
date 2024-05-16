"use client";
import { Box, Text, useColorMode, Progress } from "@chakra-ui/react";
import React from "react";
//import Image from "next/image";
import { useSelector } from "react-redux";

const ARKInvest = () => {
    const { colorMode } = useColorMode();
    const ETFChartData = useSelector((state) => state?.coinData?.ETFChartData);

    return (
        <Box
            width={"100%"}
            height={"236px"}
            p={"20px"}
            borderRadius={"10px"}
            bg={colorMode === 'light' ? "#FFFFFF" : "#282828"}
        >
            <Box layerStyle={"flexSpaceBetween"}>
                <Box>
                    <Box layerStyle={"flexCenter"} gap={{ base: "5px", md: "10px" }}>
                        <Text
                            fontSize={{ base: "22px", md: "32px" }}
                            fontWeight={500}
                            lineHeight={"22px"}
                            letterSpacing={{ md: "0.2rem" }}
                            variant={"modalHeader"}
                        >
                            {ETFChartData?.data?.marketPrice.toFixed(2) === undefined ? "-" : ETFChartData?.data?.marketPrice.toFixed(2)}
                        </Text>
                        <Text
                            fontSize={{ base: "14px", md: "20px" }}
                            lineHeight={"22px"}
                            variant={"contentHeading4"}
                            letterSpacing={{ md: "0.1rem" }}
                            color={colorMode === 'light' ? ETFChartData?.data?.change1day >= 0 ? "#0B866E" : "#C50606" : ETFChartData?.data?.change1day >= 0 ? "#60C000" : "#FF3535"}
                        >
                            {ETFChartData?.data?.change1day.toFixed(2) === undefined ? "-" : ETFChartData?.data?.change1day >= 0 ? `+${ETFChartData?.data?.change1day.toFixed(2)}` : ETFChartData?.data?.change1day.toFixed(2)}
                        </Text>
                        <Text
                            fontSize={{ base: "14px", md: "20px" }}
                            lineHeight={"22px"}
                            variant={"contentHeading4"}
                            letterSpacing={{ md: "0.1rem" }}
                            color={colorMode === 'light' ? ETFChartData?.data?.change1dayPercent >= 0 ? "#0B866E" : "#C50606" : ETFChartData?.data?.change1dayPercent >= 0 ? "#60C000" : "#FF3535"}
                        >
                            ({ETFChartData?.data?.change1dayPercent.toFixed(2) === undefined ? "-" : ETFChartData?.data?.change1dayPercent >= 0 ? `+${ETFChartData?.data?.change1dayPercent.toFixed(2)}` : ETFChartData?.data?.change1dayPercent.toFixed(2)}%)
                        </Text>
                    </Box>
                    {/* <Box layerStyle={"flexCenter"} gap={"5px"} mt={"10px"}>
                        <Image src={"/icons/Red_Dot.svg"} width={9} height={9} alt=" "></Image>
                        <Text fontSize={{ base: "12px", md: "14px" }} lineHeight={"17px"} variant={"contentHeading"}>Pre-Market</Text>
                    </Box> */}
                </Box>
                <Box>
                    <Box layerStyle={"flexCenter"} gap={"5px"} ml={"15px"}>
                        <Text fontSize={{ base: "12px", md: "14px" }} lineHeight={"17px"} variant={"contentHeading"}>
                            Volume
                        </Text>
                        {/* <Image src={"/icons/tooltip.svg"} width={16} height={16} alt=" "></Image> */}
                    </Box>
                    <Box mt={{ base: "8px", md: "10px" }}>
                        <Text fontSize={{ base: "16px", md: "20px" }} lineHeight={"18px"} variant={"contentHeading4"}>
                            {ETFChartData?.data?.dailyVolume === undefined ? "-" : ETFChartData?.data?.dailyVolume}
                        </Text>
                    </Box>
                </Box>
            </Box>
            <Box mt={"25"}>
                <Box layerStyle={"spaceBetween"}>
                    <Text variant={"contentHeading3"} fontWeight={500}>
                        {ETFChartData?.data?.dayLow.toFixed(2) === undefined ? "-" : ETFChartData?.data?.dayLow.toFixed(2)}
                    </Text>
                    <Text variant={"contentHeading3"} fontWeight={500} color={colorMode === 'light' ? "#525252" : "#FFF"}>
                        Day’s Range
                    </Text>
                    <Text variant={"contentHeading3"} fontWeight={500}>
                        {ETFChartData?.data?.dayHigh.toFixed(2) === undefined ? "-" : ETFChartData?.data?.dayHigh.toFixed(2)}
                    </Text>
                </Box>
                <Progress
                    value={(ETFChartData?.data?.marketPrice.toFixed(2) - ETFChartData?.data?.dayLow.toFixed(2)) /
                        (ETFChartData?.data?.dayHigh.toFixed(2) - ETFChartData?.data?.dayLow.toFixed(2)) * 100}
                    colorScheme='green'
                    mt={"5px"}
                    bg={colorMode === 'light' ? "#D9D9D9" : "#333333"}
                    borderRadius={"70px"}
                />
            </Box>
            <Box mt={"30"}>
                <Box layerStyle={"spaceBetween"}>
                    <Text variant={"contentHeading3"} fontWeight={500}>
                        {ETFChartData?.data?.fiftyTwoWeekLow.toFixed(2)}
                    </Text>
                    <Text variant={"contentHeading3"} fontWeight={500} color={colorMode === 'light' ? "#525252" : "#FFF"}>
                        52 Week Range
                    </Text>
                    <Text variant={"contentHeading3"} fontWeight={500}>
                        {ETFChartData?.data?.fiftyTwoWeekHigh.toFixed(2)}
                    </Text>
                </Box>
                <Progress
                    value={(ETFChartData?.data?.marketPrice.toFixed(2) - ETFChartData?.data?.fiftyTwoWeekLow.toFixed(2)) /
                        (ETFChartData?.data?.fiftyTwoWeekHigh.toFixed(2) - ETFChartData?.data?.fiftyTwoWeekLow.toFixed(2)) * 100}
                    colorScheme='green'
                    mt={"5px"}
                    bg={colorMode === 'light' ? "#D9D9D9" : "#333333"}
                    borderRadius={"70px"}
                />
            </Box>
        </Box>
    );
};

export default ARKInvest;