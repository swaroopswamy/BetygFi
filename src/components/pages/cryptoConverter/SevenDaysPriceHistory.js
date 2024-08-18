import { Box, Table, Tbody, Td, Text, Th, Thead, Tr, useColorMode, useColorModeValue } from "@chakra-ui/react";

const SevenDaysPriceHistory = () => {
    const { colorMode } = useColorMode();

    return (
        <Box bg={useColorModeValue("#FFFFFF", "#191919")} >
            <Box p={"1.7rem 1.5rem"} gap={"0.5rem"} display={"flex"} flexDir={"column"}>
                <Text colorMode={colorMode} variant={"converter_heading"}>
                    7-day price history of Bitcoin (BTC) to INR
                </Text>
                <Text colorMode={colorMode} variant={"converter_calc_desc"}>
                    The daily exchange rate of Bitcoin (BTC) to INR fluctuated between a high of ₹5,545,133 on Wednesday and a low of ₹4,708,263 on Tuesday in the last 7 days. Within the week, the price of BTC in INR had the largest 24-hour price movement on Tuesday (0 days ago) by ₹291,706 (6.6%).
                </Text>
            </Box>
            <Box p={{ md: "0.05rem 1.5rem", base: "0.05rem 0.8rem" }}>
                <Table size={{ base: "xs", md: 'md' }}>
                    <Thead>
                        <Tr>
                            <Th><Text colorMode={colorMode} variant={"converter_betygfi_coin_details_value"}>Date</Text></Th>
                            <Th><Text colorMode={colorMode} variant={"converter_betygfi_coin_details_value"}>Day Of The Week</Text></Th>
                            <Th><Text colorMode={colorMode} variant={"converter_betygfi_coin_details_value"}>1 BTC to INR</Text></Th>
                            <Th><Text colorMode={colorMode} variant={"converter_betygfi_coin_details_value"}>24hr Changes</Text></Th>
                            <Th><Text colorMode={colorMode} variant={"converter_betygfi_coin_details_value"}>Change %</Text></Th>
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
                                    <Td><Text colorMode={colorMode} variant={"converter_low_high_table"}>{hist.date}</Text></Td>
                                    <Td><Text colorMode={colorMode} variant={"converter_low_high_table"}>{hist.day}</Text></Td>
                                    <Td><Text colorMode={colorMode} variant={"converter_low_high_table"}>{hist.cryptoConvert}</Text></Td>
                                    <Td><Text colorMode={colorMode} variant={"converter_low_high_table"}>{hist._24_hrchange}</Text></Td>
                                    <Td><Text colorMode={colorMode} variant={"converter_low_high_table"} color={hist.isNegative ? "#FF0000" : "#245F00"}>{hist.changePercent}</Text></Td>
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
