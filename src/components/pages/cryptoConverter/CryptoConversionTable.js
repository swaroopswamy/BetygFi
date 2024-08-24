import { Box, Table, Tbody, Td, Text, Th, Thead, Tr, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";

const CryptoConversionTable = ({ coinDetails, toCurrency, coinPriceConversionData }) => {

    const getConversionData = () => {
        const coinToCurrencyTable = [];
        const currencyToCoinTable = [];
        for (const key of Object.keys(coinPriceConversionData?.coinToInrTable)) {
            coinToCurrencyTable.push({ key: +key, value: coinPriceConversionData?.coinToInrTable[key] });
        }

        for (const key of Object.keys(coinPriceConversionData?.inrToCoinTable
        )) {
            currencyToCoinTable.push({
                key: +key, value: coinPriceConversionData?.inrToCoinTable[key]
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
                    The conversion rate of {coinDetails?.name} ({coinDetails?.ticker}) to {toCurrency?.toUpperCase()} is ₹4,708,263 for every 1 {coinDetails?.ticker}. This means you can exchange 5 {coinDetails?.ticker} for ₹23,541,316 or ₹50.00 for 0.00001062 {coinDetails?.ticker}, excluding fees. Refer to our conversion tables for popular {coinDetails?.ticker} trading amounts in their corresponding {toCurrency?.toUpperCase()} prices and vice versa.
                </Text>
            </Box>
            <Box>
                <Box display={"flex"} justifyContent={"space-between"} style={{ border: '1px solid red' }} p={{ md: "0.05rem 1.5rem", base: "0.05rem 0.8rem" }}>
                    <Box width={"45%"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                        {renderTable("coin-currency")}
                    </Box>
                    <Box width={"45%"}>
                        {renderTable("currency-coin")}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default CryptoConversionTable;
