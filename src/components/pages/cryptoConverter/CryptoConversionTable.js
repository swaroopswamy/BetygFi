import { Box, Table, Tbody, Td, Text, Th, Thead, Tr, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";

const CryptoConversionTable = ({ coinDetails, toCurrency, currentPrice, coinAnalyticsData }) => {

    const getConversionData = () => {
        const coinToCurrencyTable = [];
        const currencyToCoinTable = [];
        for (const key of Object.keys(coinAnalyticsData?.coinToInrTable)) {
            coinToCurrencyTable.push({ key: +key, value: coinAnalyticsData?.coinToInrTable[key] });
        }

        for (const key of Object.keys(coinAnalyticsData?.inrToCoinTable
        )) {
            currencyToCoinTable.push({
                key: +key, value: coinAnalyticsData?.inrToCoinTable[key]
            });
        }
        return { coinToCurrencyTable, currencyToCoinTable };
    };

    const [conversionList] = useState(getConversionData());
    const { colorMode } = useColorMode();

    const renderTable = (type) => {
        return (
            <Table size={{ base: "xs", md: 'md' }}>
                <Thead>
                    {
                        type == "coin-currency" ?
                            <Tr>
                                <Th><Text colorMode={colorMode} variant={"converter_betygfi_coin_details_value"}>{coinDetails?.ticker}</Text></Th>
                                <Th><Text colorMode={colorMode} variant={"converter_betygfi_coin_details_value"}>{toCurrency?.toUpperCase()}</Text></Th>
                            </Tr>
                            :
                            <Tr>
                                <Th><Text colorMode={colorMode} variant={"converter_betygfi_coin_details_value"}>{toCurrency?.toUpperCase()}</Text></Th>
                                <Th><Text colorMode={colorMode} variant={"converter_betygfi_coin_details_value"}>{coinDetails?.ticker}</Text></Th>
                            </Tr>
                    }
                </Thead>
                {
                    type == "coin-currency" ?
                        <Tbody>
                            {
                                conversionList.coinToCurrencyTable.map((hist, index) => (
                                    <Tr key={index}>
                                        <Td><Text colorMode={colorMode} variant={"converter_low_high_table"}>{hist.key} {coinDetails?.ticker}</Text></Td>
                                        <Td><Text colorMode={colorMode} variant={"converter_low_high_table"}>{Number(hist.value)} {toCurrency?.toUpperCase()}</Text></Td>
                                    </Tr>
                                ))
                            }
                        </Tbody>
                        :
                        <Tbody>
                            {
                                conversionList.currencyToCoinTable.map((hist, index) => (
                                    <Tr key={index}>
                                        <Td><Text colorMode={colorMode} variant={"converter_low_high_table"}>{Number(hist.key)} {toCurrency?.toUpperCase()}</Text></Td>
                                        <Td><Text colorMode={colorMode} variant={"converter_low_high_table"}>{hist.value} {coinDetails?.ticker}</Text></Td>
                                    </Tr>
                                ))
                            }
                        </Tbody>
                }
            </Table>
        );
    };
    return (
        <Box bg={useColorModeValue("#FFFFFF", "#191919")} >
            <Box p={"1.7rem 1.5rem"} gap={"0.5rem"} display={"flex"} flexDir={"column"}>
                <Text colorMode={colorMode} variant={"converter_heading"}>
                    {coinDetails?.ticker} / {toCurrency?.toUpperCase()} Conversion Tables
                </Text>
                <Text colorMode={colorMode} variant={"converter_calc_desc"}>
                    The conversion rate of {coinDetails?.name} ({coinDetails?.ticker}) to {toCurrency?.toUpperCase()} is ₹ {currentPrice?.toLocaleString('en-IN')} for every 1 {coinDetails?.ticker}. This means you can exchange 5 {coinDetails?.ticker} for ₹ {(currentPrice * 5)?.toLocaleString('en-IN')} or ₹ 50.00 for {50 / currentPrice} {coinDetails?.ticker}, excluding fees. Refer to our conversion tables for popular {coinDetails?.ticker} trading amounts in their corresponding {toCurrency?.toUpperCase()} prices and vice versa.
                </Text>
            </Box>
            <Box>
                <Box
                    display={"flex"}
                    flexDir={{ md: "row", base: "column" }}
                    justifyContent={"space-between"}
                    gap={"1rem"}
                    p={{ md: "0.05rem 1.5rem", base: "0.05rem 0.8rem" }}
                >
                    <Box
                        width={{ md: "45%", base: "100%" }}
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                    >
                        {renderTable("coin-currency")}
                    </Box>
                    <Box
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        width={{ md: "45%", base: "100%" }}
                    >
                        {renderTable("currency-coin")}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default CryptoConversionTable;
