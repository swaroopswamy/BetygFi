import { Box, Table, Tbody, Td, Text, Th, Thead, Tr, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { convertToInternationalCurrencySystem } from "@util/utility";
import { format, parseISO } from "date-fns";
import { useEffect, useState } from "react";

const SevenDaysPriceHistory = ({ coinWeeklyData, coinDetails, toCurrency }) => {
    const [weeklyPriceHistory, setWeeklyPriceHistory] = useState(coinWeeklyData);

    useEffect(() => {
        setWeeklyPriceHistory(coinWeeklyData);
    }, [coinWeeklyData]);
    const { colorMode } = useColorMode();

    return (
        <Box bg={useColorModeValue("#FFFFFF", "#191919")} >
            <Box p={"1.7rem 1.5rem"} gap={"0.5rem"} display={"flex"} flexDir={"column"}>
                <Text colorMode={colorMode} variant={"converter_heading"}>
                    7-day price history of {coinDetails?.name} ({coinDetails?.ticker}) to {toCurrency?.toUpperCase()}
                </Text>
                <Text colorMode={colorMode} variant={"converter_calc_desc"}>
                    The daily exchange rate of {coinDetails?.name} ({coinDetails?.ticker}) to {toCurrency?.toUpperCase()} fluctuated between a high of ₹5,545,133 on Wednesday and a low of ₹4,708,263 on Tuesday in the last 7 days. Within the week, the price of {coinDetails?.ticker} in {toCurrency?.toUpperCase()} had the largest 24-hour price movement on Tuesday (0 days ago) by ₹291,706 (6.6%).
                </Text>
            </Box>
            <Box p={{ md: "0.05rem 1.5rem", base: "0.05rem 0.8rem" }}>
                <Table size={{ base: "xs", md: 'md' }}>
                    <Thead>
                        <Tr>
                            <Th><Text colorMode={colorMode} variant={"converter_betygfi_coin_details_value"}>Date</Text></Th>
                            <Th><Text colorMode={colorMode} variant={"converter_betygfi_coin_details_value"}>Day Of The Week</Text></Th>
                            <Th><Text colorMode={colorMode} variant={"converter_betygfi_coin_details_value"}>1 {coinDetails?.ticker} to INR</Text></Th>
                            <Th><Text colorMode={colorMode} variant={"converter_betygfi_coin_details_value"}>24hr Changes</Text></Th>
                            <Th><Text colorMode={colorMode} variant={"converter_betygfi_coin_details_value"}>Change %</Text></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            weeklyPriceHistory.map((hist, index) => (
                                <Tr key={index}>
                                    <Td><Text colorMode={colorMode} variant={"converter_low_high_table"}>{format(parseISO(hist.date), "dd MMM, yyyy")}</Text></Td>
                                    <Td><Text colorMode={colorMode} variant={"converter_low_high_table"}>{hist.dayOfWeek}</Text></Td>
                                    <Td><Text colorMode={colorMode} variant={"converter_low_high_table"}>{convertToInternationalCurrencySystem(hist.price)}</Text></Td>
                                    <Td><Text colorMode={colorMode} variant={"converter_low_high_table"}>{hist.priceChange_24hr}</Text></Td>
                                    <Td><Text colorMode={colorMode} variant={"converter_low_high_table"} color={hist.percentageChange < 0 ? "#FF0000" : "#245F00"}>{hist.percentageChange.toFixed(2)}%</Text></Td>
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
