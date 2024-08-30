import { Box, Table, Tbody, Td, Text, Th, Thead, Tr, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { format, parseISO } from "date-fns";
import { useEffect, useState } from "react";

const SevenDaysPriceHistory = ({ coinAnalyticsData, coinDetails, toCurrency }) => {
    const [weeklyPriceHistory, setWeeklyPriceHistory] = useState(coinAnalyticsData?.coinInrWeekData);

    useEffect(() => {
        setWeeklyPriceHistory(coinAnalyticsData?.coinInrWeekData);
    }, [coinAnalyticsData?.coinInrWeekData]);

    const { colorMode } = useColorMode();

    return (
        <Box bg={useColorModeValue("#FFFFFF", "#191919")} >
            <Box p={"1.7rem 1.5rem"} gap={"0.5rem"} display={"flex"} flexDir={"column"}>
                <Text colorMode={colorMode} variant={"converter_heading"}>
                    7-day price history of {coinDetails?.name} ({coinDetails?.ticker}) to {toCurrency?.toUpperCase()}
                </Text>
                <Text colorMode={colorMode} variant={"converter_calc_desc"}>
                    The daily exchange rate of {coinDetails?.name} ({coinDetails?.ticker}) to {toCurrency?.toUpperCase()} fluctuated between a high of ₹ {coinAnalyticsData?.weeklyAnalogy?.[0]?.highOfTheWeek?.toLocaleString('en-IN')} on {coinAnalyticsData?.weeklyAnalogy?.[0]?.dayOfWeek} and a low of ₹ {coinAnalyticsData?.weeklyAnalogy?.[1]?.lowOfTheWeek?.toLocaleString('en-IN')} on {coinAnalyticsData?.weeklyAnalogy?.[1]?.dayOfWeek} in the last 7 days. Within the week, the price of {coinDetails?.ticker} in {toCurrency?.toUpperCase()} had the largest 24-hour price movement on {coinAnalyticsData?.weeklyAnalogy?.[2]?.day} ({coinAnalyticsData?.weeklyAnalogy?.[2]?.daysAgo} days ago) by ₹ {coinAnalyticsData?.weeklyAnalogy?.[2]?.difference?.toLocaleString('en-IN')} ({+coinAnalyticsData?.weeklyAnalogy?.[2]?.largest24hrPercent?.toFixed(5)}%).
                </Text>
            </Box>
            <Box p={{ md: "0.05rem 1.5rem", base: "0.05rem 0.8rem" }}>
                <Table size={{ base: "xs", md: 'md' }}>
                    <Thead>
                        <Tr>
                            <Th><Text colorMode={colorMode} variant={"converter_betygfi_coin_details_value"}>Date</Text></Th>
                            <Th><Text colorMode={colorMode} variant={"converter_betygfi_coin_details_value"}>Day Of The Week</Text></Th>
                            <Th><Text colorMode={colorMode} variant={"converter_betygfi_coin_details_value"}>1 {coinDetails?.ticker} to {toCurrency}</Text></Th>
                            <Th><Text colorMode={colorMode} variant={"converter_betygfi_coin_details_value"}>24hr Changes</Text></Th>
                            <Th><Text colorMode={colorMode} variant={"converter_betygfi_coin_details_value"}>Change %</Text></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            weeklyPriceHistory?.length > 0 && weeklyPriceHistory.map((hist, index) => (
                                <Tr key={index}>
                                    <Td><Text colorMode={colorMode} variant={"converter_low_high_table"}>{format(parseISO(hist.date), "dd MMM, yyyy")}</Text></Td>
                                    <Td><Text colorMode={colorMode} variant={"converter_low_high_table"}>{hist.dayOfWeek}</Text></Td>
                                    <Td><Text colorMode={colorMode} variant={"converter_low_high_table"}> ₹ {hist.price}</Text></Td>
                                    <Td><Text colorMode={colorMode} variant={"converter_low_high_table"}>{hist.priceChange_24hr < 0 ? "-" : ""}₹ {Math.abs(hist.priceChange_24hr)}</Text></Td>
                                    <Td><Text colorMode={colorMode} variant={"converter_low_high_table"} color={hist.percentageChange < 0 ? "#FF0000" : "#62cd21"}>{hist.percentageChange.toFixed(2)}%</Text></Td>
                                </Tr>
                            ))
                        }
                    </Tbody>
                </Table>
            </Box>
        </Box >
    );
};

export default SevenDaysPriceHistory;
