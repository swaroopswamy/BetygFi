import { Box, Table, Tbody, Td, Text, Th, Thead, Tr, useColorMode, useColorModeValue } from "@chakra-ui/react";

const CryptoConversionTable = () => {
    const { colorMode } = useColorMode();

    return (
        <Box bg={useColorModeValue("#FFFFFF", "#191919")} >
            <Box p={"1.7rem 1.5rem"} gap={"0.5rem"} display={"flex"} flexDir={"column"}>
                <Text colorMode={colorMode} variant={"converter_heading"}>
                    BTC / INR Conversion Tables
                </Text>
                <Text colorMode={colorMode} variant={"converter_calc_desc"}>
                    The conversion rate of Bitcoin (BTC) to INR is ₹4,708,263 for every 1 BTC. This means you can exchange 5 BTC for ₹23,541,316 or ₹50.00 for 0.00001062 BTC, excluding fees. Refer to our conversion tables for popular BTC trading amounts in their corresponding INR prices and vice versa.
                </Text>
            </Box>
            <Box p={"0.05rem 1.5rem"}>
                <Table size='md'>
                    <Thead>
                        <Tr>
                            <Th><Text colorMode={colorMode} variant={"converter_betygfi_coin_details_value"}>BTC</Text></Th>
                            <Th><Text colorMode={colorMode} variant={"converter_betygfi_coin_details_value"}>INR</Text></Th>
                            <Th><Text colorMode={colorMode} variant={"converter_betygfi_coin_details_value"}>INR</Text></Th>
                            <Th><Text colorMode={colorMode} variant={"converter_betygfi_coin_details_value"}>BTC</Text></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            [
                                { date: "06 August, 2024", day: "Tuesday", cryptoConvert: "₹ 4,708,263", _24_hrchange: "₹ 291,706", changePercent: "6.6%", isNegative: true },
                                { date: "06 August, 2024", day: "Tuesday", cryptoConvert: "₹ 4,708,263", _24_hrchange: "₹ 291,706", changePercent: "6.6%", isNegative: false },
                                { date: "06 August, 2024", day: "Tuesday", cryptoConvert: "₹ 4,708,263", _24_hrchange: "₹ 291,706", changePercent: "6.6%", isNegative: true },
                                { date: "06 August, 2024", day: "Tuesday", cryptoConvert: "₹ 4,708,263", _24_hrchange: "₹ 291,706", changePercent: "6.6%", isNegative: true },
                            ].map((hist, index) => (
                                <Tr key={index}>
                                    <Td><Text colorMode={colorMode} variant={"converter_low_high"}>{hist.date}</Text></Td>
                                    <Td><Text colorMode={colorMode} variant={"converter_low_high"}>{hist.day}</Text></Td>
                                    <Td><Text colorMode={colorMode} variant={"converter_low_high"}>{hist.cryptoConvert}</Text></Td>
                                    <Td><Text colorMode={colorMode} variant={"converter_low_high"}>{hist._24_hrchange}</Text></Td>
                                </Tr>
                            ))
                        }
                    </Tbody>
                </Table>
            </Box>
        </Box >
    );
};

export default CryptoConversionTable;
