import { Box, Table, Tbody, Td, Text, Th, Thead, Tr, useColorMode, useMediaQuery } from "@chakra-ui/react";
import { getCurrencyDetails } from "@util/utility";
import { format, parseISO } from "date-fns";
import { useEffect, useState } from "react";

const SevenDaysPriceHistory = ({ coinAnalyticsData, coinDetails, toCurrency }) => {
    const [weeklyPriceHistory, setWeeklyPriceHistory] = useState(coinAnalyticsData?.coinInrWeekData);

    useEffect(() => {
        if (coinAnalyticsData?.status) {
            setWeeklyPriceHistory(coinAnalyticsData?.coinInrWeekData);
        }
    }, [coinAnalyticsData?.coinInrWeekData]);

    const [isMd] = useMediaQuery("(min-width: 768px)");
    const { colorMode } = useColorMode();

    return (
        <>
            {
                coinAnalyticsData?.status &&
                (<Box _light={{ bg: "#FFFFFF" }} _dark={{ bg: "#191919" }}>
                    <Box p={"1.7rem 1.5rem"} gap={"0.5rem"} display={"flex"} flexDir={"column"}>
                        <Text colorMode={colorMode} variant={"converter_heading"}>
                            7-day price history of {coinDetails?.name} ({coinDetails?.ticker}) to {toCurrency?.toUpperCase()}
                        </Text>
                        <Text colorMode={colorMode} variant={"converter_calc_desc"} opacity={colorMode === "dark" ? "1" : "1"}>
                            The daily exchange rate of {coinDetails?.name} ({coinDetails?.ticker}) to {toCurrency?.toUpperCase()} fluctuated between a high of {getCurrencyDetails(toCurrency, 'symbol')} {coinAnalyticsData?.weeklyAnalogy?.[0]?.highOfTheWeek?.toLocaleString(getCurrencyDetails(toCurrency, 'locale'))} on {coinAnalyticsData?.weeklyAnalogy?.[0]?.dayOfWeek} and a low of {getCurrencyDetails(toCurrency, 'symbol')} {coinAnalyticsData?.weeklyAnalogy?.[1]?.lowOfTheWeek?.toLocaleString(getCurrencyDetails(toCurrency, 'locale'))} on {coinAnalyticsData?.weeklyAnalogy?.[1]?.dayOfWeek} in the last 7 days. Within the week, the price of {coinDetails?.ticker} in {toCurrency?.toUpperCase()} had the largest 24-hour price movement on {coinAnalyticsData?.weeklyAnalogy?.[2]?.day} ({coinAnalyticsData?.weeklyAnalogy?.[2]?.daysAgo} days ago) by {getCurrencyDetails(toCurrency, 'symbol')} {coinAnalyticsData?.weeklyAnalogy?.[2]?.difference?.toLocaleString(getCurrencyDetails(toCurrency, 'locale'))} ({+coinAnalyticsData?.weeklyAnalogy?.[2]?.largest24hrPercent?.toFixed(5)}%).
                        </Text>
                    </Box>
                    <Box p={{ md: "0.05rem 1.5rem", base: "0.05rem 0.8rem" }}>
                        <Table size={{ base: "xs", md: 'md' }}>
                            <Thead>
                                <Tr>
                                    <Th _light={{ bgColor: "#F5F5F7", }} _dark={{ bgColor: "rgba(70, 130, 180, 0.10)", }} p={{ base: "8px 0px 8px 6px" }}><Text colorMode={colorMode} variant={"converter_betygfi_coin_details_value_heading"}>Date</Text></Th>
                                    <Th _light={{ bgColor: "#F5F5F7", }} _dark={{ bgColor: "rgba(70, 130, 180, 0.10)", }}><Text colorMode={colorMode} variant={"converter_betygfi_coin_details_value_heading"}>Day Of The Week</Text></Th>
                                    <Th _light={{ bgColor: "#F5F5F7", }} _dark={{ bgColor: "rgba(70, 130, 180, 0.10)", }}><Text colorMode={colorMode} variant={"converter_betygfi_coin_details_value_heading"}>1 {coinDetails?.ticker} to {toCurrency}</Text></Th>
                                    {
                                        isMd &&
                                        <>
                                            <Th _light={{ bgColor: "#F5F5F7", }} _dark={{ bgColor: "rgba(70, 130, 180, 0.10)", }}><Text colorMode={colorMode} variant={"converter_betygfi_coin_details_value_heading"}>24hr Changes</Text></Th>
                                            <Th _light={{ bgColor: "#F5F5F7", }} _dark={{ bgColor: "rgba(70, 130, 180, 0.10)", }}><Text colorMode={colorMode} variant={"converter_betygfi_coin_details_value_heading"}>Change %</Text></Th>
                                        </>
                                    }
                                </Tr>
                            </Thead>
                            <Tbody>
                                {
                                    weeklyPriceHistory?.length > 0 && weeklyPriceHistory.map((hist, index) => (
                                        <Tr key={index}>
                                            <Td _light={{ bgColor: "#F5F5F7", }} _dark={{ bgColor: "#191919", }} p={{ base: "12px 0px 14px 9px" }}>
                                                <Text colorMode={colorMode} variant={"converter_low_high_table"}>{format(parseISO(hist.date), "dd MMM, yyyy")}</Text>
                                            </Td>
                                            <Td _light={{ bgColor: "#F5F5F7", }} _dark={{ bgColor: "#191919", }}><Text colorMode={colorMode} variant={"converter_low_high_table"}>{hist.dayOfWeek}</Text></Td>
                                            <Td _light={{ bgColor: "#F5F5F7", }} _dark={{ bgColor: "#191919", }}><Text colorMode={colorMode} variant={"converter_low_high_table"}> {getCurrencyDetails(toCurrency, 'symbol')} {hist.price}</Text></Td>
                                            {
                                                isMd &&
                                                <>
                                                    <Td _light={{ bgColor: "#F5F5F7", }} _dark={{ bgColor: "#191919", }}><Text colorMode={colorMode} variant={"converter_low_high_table"}>{hist.priceChange_24hr < 0 ? "-" : ""}{getCurrencyDetails(toCurrency, 'symbol')} {Math.abs(hist.priceChange_24hr)}</Text></Td>
                                                    <Td _light={{ bgColor: "#F5F5F7", }} _dark={{ bgColor: "#191919", }}><Text colorMode={colorMode} variant={"converter_low_high_table"} color={hist.percentageChange < 0 ? "#FF0000" : "#62cd21"}>{hist.percentageChange.toFixed(2)}%</Text></Td>
                                                </>
                                            }
                                        </Tr>
                                    ))
                                }
                            </Tbody>
                        </Table>
                    </Box>
                </Box >)
            }
        </>
    );
};

export default SevenDaysPriceHistory;
