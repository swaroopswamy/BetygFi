import React from "react";
import { Box, Text, useColorMode } from "@chakra-ui/react";
import Image from "next/image";
import { useSelector } from "react-redux";
import millify from "millify";

const KeyStats = () => {
    const { colorMode } = useColorMode();
    const ETFChartData = useSelector((state) => state?.coinData?.ETFChartData);

    return (
        <Box
            width={"100%"}
            height={"100%"}
            borderRadius={"10px"}
            bg={colorMode === 'light' ? "#FFFFFF" : "#282828"}
            padding={"20px"}
            layerStyle={"flexSpaceBetween"}
        >
            <Box>
                <Box>
                    <Box layerStyle={"flexCenter"} gap={"8px"}>
                        <Text variant={"h5"} lineHeight={"15px"} color={colorMode === 'light' ? "#525252" : "#A5A5A5"}>
                            Open
                        </Text>
                        <Image src={"/icons/tooltip.svg"} width={16} height={16} alt=" "></Image>
                    </Box>
                    <Text variant={"contentHeading4"} fontSize={"14px"} lineHeight={"18px"} mt={"7px"}>
                        {ETFChartData?.data?.open === undefined ? "-" : ETFChartData?.data?.open}
                    </Text>
                </Box>
                <Box mt={"16px"}>
                    <Box layerStyle={"flexCenter"} gap={"8px"}>
                        <Text variant={"h5"} lineHeight={"15px"} color={colorMode === 'light' ? "#525252" : "#A5A5A5"}>
                            Day High
                        </Text>
                        <Image src={"/icons/tooltip.svg"} width={16} height={16} alt=" "></Image>
                    </Box>
                    <Text variant={"contentHeading4"} fontSize={"14px"} lineHeight={"18px"} mt={"7px"}>
                        {ETFChartData?.data?.dayHigh === undefined ? "-" : ETFChartData?.data?.dayHigh}
                    </Text>
                </Box>
                <Box mt={"16px"}>
                    <Box layerStyle={"flexCenter"} gap={"8px"}>
                        <Text variant={"h5"} lineHeight={"15px"} color={colorMode === 'light' ? "#525252" : "#A5A5A5"}>
                            Day Low
                        </Text>
                        <Image src={"/icons/tooltip.svg"} width={16} height={16} alt=" "></Image>
                    </Box>
                    <Text variant={"contentHeading4"} fontSize={"14px"} lineHeight={"18px"} mt={"7px"}>
                        {ETFChartData?.data?.dayLow === undefined ? "-" : ETFChartData?.data?.dayLow}
                    </Text>
                </Box>
                <Box mt={"16px"}>
                    <Box layerStyle={"flexCenter"} gap={"8px"}>
                        <Text variant={"h5"} lineHeight={"15px"} color={colorMode === 'light' ? "#525252" : "#A5A5A5"}>
                            Prev Close
                        </Text>
                        <Image src={"/icons/tooltip.svg"} width={16} height={16} alt=" "></Image>
                    </Box>
                    <Text variant={"contentHeading4"} fontSize={"14px"} lineHeight={"18px"} mt={"7px"}>
                        {ETFChartData?.data?.prevClose === undefined ? "-" : ETFChartData?.data?.prevClose}
                    </Text>
                </Box>
                <Box mt={"16px"}>
                    <Box layerStyle={"flexCenter"} gap={"8px"}>
                        <Text variant={"h5"} lineHeight={"15px"} color={colorMode === 'light' ? "#525252" : "#A5A5A5"}>
                            10 Day Average Volume
                        </Text>
                        <Image src={"/icons/tooltip.svg"} width={16} height={16} alt=" "></Image>
                    </Box>
                    <Text variant={"contentHeading4"} fontSize={"14px"} lineHeight={"18px"} mt={"7px"}>
                        {millify(ETFChartData?.data?.tenDayAverageVolume === undefined ? "-" : ETFChartData?.data?.tenDayAverageVolume, { precision: 2 })}
                    </Text>
                </Box>
                <Box mt={"16px"}>
                    <Box layerStyle={"flexCenter"} gap={"8px"}>
                        <Text variant={"h5"} lineHeight={"15px"} color={colorMode === 'light' ? "#525252" : "#A5A5A5"}>
                            Expense Ratio
                        </Text>
                        <Image src={"/icons/tooltip.svg"} width={16} height={16} alt=" "></Image>
                    </Box>
                    <Text variant={"contentHeading4"} fontSize={"14px"} lineHeight={"18px"} mt={"7px"}>
                        {ETFChartData?.data?.expenseRation === undefined ? "-" : ETFChartData?.data?.expenseRation}</Text>
                </Box>
                <Box mt={"16px"}>
                    <Box layerStyle={"flexCenter"} gap={"8px"}>
                        <Text variant={"h5"} lineHeight={"15px"} color={colorMode === 'light' ? "#525252" : "#A5A5A5"}>
                            AUM
                        </Text>
                        <Image src={"/icons/tooltip.svg"} width={16} height={16} alt=" "></Image>
                    </Box>
                    <Text variant={"contentHeading4"} fontSize={"14px"} lineHeight={"18px"} mt={"7px"}>
                        {ETFChartData?.data?.aum === undefined ? "-" : ETFChartData?.data?.aum}</Text>
                </Box>
            </Box>
            <Box>
                <Box>
                    <Box layerStyle={"flexCenter"} gap={"8px"}>
                        <Text variant={"h5"} lineHeight={"15px"} color={colorMode === 'light' ? "#525252" : "#A5A5A5"}>
                            52 Week High
                        </Text>
                        <Image src={"/icons/tooltip.svg"} width={16} height={16} alt=" "></Image>
                    </Box>
                    <Text variant={"contentHeading4"} fontSize={"14px"} lineHeight={"18px"} mt={"7px"}>
                        {ETFChartData?.data?.fiftyTwoWeekHigh === undefined ? "-" : ETFChartData?.data?.fiftyTwoWeekHigh}
                    </Text>
                </Box>
                <Box mt={"16px"}>
                    <Box layerStyle={"flexCenter"} gap={"8px"}>
                        <Text variant={"h5"} lineHeight={"15px"} color={colorMode === 'light' ? "#525252" : "#A5A5A5"}>
                            52 Week High Date
                        </Text>
                        <Image src={"/icons/tooltip.svg"} width={16} height={16} alt=" "></Image>
                    </Box>
                    <Text variant={"contentHeading4"} fontSize={"14px"} lineHeight={"18px"} mt={"7px"}>
                        {ETFChartData?.data?.fiftyTwoWeekHighDate.split('T')[0] === undefined ? "-" : ETFChartData?.data?.fiftyTwoWeekHighDate.split('T')[0]}
                    </Text>
                </Box>
                <Box mt={"16px"}>
                    <Box layerStyle={"flexCenter"} gap={"8px"}>
                        <Text variant={"h5"} lineHeight={"15px"} color={colorMode === 'light' ? "#525252" : "#A5A5A5"}>
                            52 Week Low
                        </Text>
                        <Image src={"/icons/tooltip.svg"} width={16} height={16} alt=" "></Image>
                    </Box>
                    <Text variant={"contentHeading4"} fontSize={"14px"} lineHeight={"18px"} mt={"7px"}>
                        {ETFChartData?.data?.fiftyTwoWeekLow === undefined ? "-" : ETFChartData?.data?.fiftyTwoWeekLow}
                    </Text>
                </Box>
                <Box mt={"16px"}>
                    <Box layerStyle={"flexCenter"} gap={"8px"}>
                        <Text variant={"h5"} lineHeight={"15px"} color={colorMode === 'light' ? "#525252" : "#A5A5A5"}>
                            52 Week Low Date
                        </Text>
                        <Image src={"/icons/tooltip.svg"} width={16} height={16} alt=" "></Image>
                    </Box>
                    <Text variant={"contentHeading4"} fontSize={"14px"} lineHeight={"18px"} mt={"7px"}>
                        {ETFChartData?.data?.fiftyTwoWeekLowDate.split('T')[0] === undefined ? "-" : ETFChartData?.data?.fiftyTwoWeekLowDate.split('T')[0]}
                    </Text>
                </Box>
                <Box mt={"16px"}>
                    <Box layerStyle={"flexCenter"} gap={"8px"}>
                        <Text variant={"h5"} lineHeight={"15px"} color={colorMode === 'light' ? "#525252" : "#A5A5A5"}>
                            YTD % Change
                        </Text>
                        <Image src={"/icons/tooltip.svg"} width={16} height={16} alt=" "></Image>
                    </Box>
                    <Text variant={"contentHeading4"} fontSize={"14px"} lineHeight={"18px"} mt={"7px"}>
                        {ETFChartData?.data?.ytdChangePercent.toFixed(2) === undefined ? "-" : ETFChartData?.data?.ytdChangePercent.toFixed(2)}%
                    </Text>
                </Box>
                <Box mt={"16px"}>
                    <Box layerStyle={"flexCenter"} gap={"8px"}>
                        <Text variant={"h5"} lineHeight={"15px"} color={colorMode === 'light' ? "#525252" : "#A5A5A5"}>
                            1 Year % Change
                        </Text>
                        <Image src={"/icons/tooltip.svg"} width={16} height={16} alt=" "></Image>
                    </Box>
                    <Text variant={"contentHeading4"} fontSize={"14px"} lineHeight={"18px"} mt={"7px"}>
                        {ETFChartData?.data?.oneYearChangePercent.toFixed(2) === undefined ? "-" : ETFChartData?.data?.oneYearChangePercent.toFixed(2)}%
                    </Text>
                </Box>
                <Box mt={"16px"}>
                    <Box layerStyle={"flexCenter"} gap={"8px"}>
                        <Text variant={"h5"} lineHeight={"15px"} color={colorMode === 'light' ? "#525252" : "#A5A5A5"}>
                            Shares Outstanding
                        </Text>
                        <Image src={"/icons/tooltip.svg"} width={16} height={16} alt=" "></Image>
                    </Box>
                    <Text variant={"contentHeading4"} fontSize={"14px"} lineHeight={"18px"} mt={"7px"}>
                        {ETFChartData?.data?.shareOutStanding === undefined ? "-" : ETFChartData?.data?.shareOutStanding}
                    </Text>
                </Box>
            </Box>
        </Box>
    );
};

export default KeyStats;