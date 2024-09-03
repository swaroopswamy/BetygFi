import { Box, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, useColorMode, useColorModeValue } from "@chakra-ui/react";

const IntervalWiseTableData = ({ coinAnalyticsData }) => {
    const { colorMode } = useColorMode();

    return (
        <Box bg={useColorModeValue("#FFFFFF", "#191919")} >
            <Box border={"1px solid rgba(70, 130, 180, 0.10)"}>
                <TableContainer>
                    <Table size='sm'>
                        <Thead background={"rgba(70, 130, 180, 0.10)"}>
                            <Tr>
                                <Th>
                                    <Text colorMode={colorMode} variant={"converter_betygfi_coin_details_value"}>1h</Text>
                                </Th>
                                <Th>
                                    <Text colorMode={colorMode} variant={"converter_betygfi_coin_details_value"}>24h</Text>
                                </Th>
                                <Th>
                                    <Text colorMode={colorMode} variant={"converter_betygfi_coin_details_value"}>7d</Text>
                                </Th>
                                <Th>
                                    <Text colorMode={colorMode} variant={"converter_betygfi_coin_details_value"}>14d</Text>
                                </Th>
                                <Th>
                                    <Text colorMode={colorMode} variant={"converter_betygfi_coin_details_value"}>30d</Text>
                                </Th>
                                <Th>
                                    <Text colorMode={colorMode} variant={"converter_betygfi_coin_details_value"}>1y</Text>
                                </Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                [
                                    { one_hour: "percentageChange_1hr", twenty_four_hour: "percentageChange_24hr", seven_day: "percentageChange_7d", fourteen_day: "percentageChange_14d", thirty_day: "percentageChange_30d", one_year: "percentageChange_1yr" },

                                ].map((hist, index) => (
                                    <Tr key={index}>
                                        <Td borderRight={"1px solid rgba(70, 130, 180, 0.10)"}>
                                            <Text color={coinAnalyticsData[hist.one_hour] < 0 ? "#FF0000" : "#245F00"} colorMode={colorMode} variant={"converter_low_high"}>{coinAnalyticsData[hist.one_hour]?.toFixed(2)}%</Text>
                                        </Td>
                                        <Td borderRight={"1px solid rgba(70, 130, 180, 0.10)"}>
                                            <Text color={coinAnalyticsData[hist.twenty_four_hour] < 0 ? "#FF0000" : "#245F00"} colorMode={colorMode} variant={"converter_low_high"}>{coinAnalyticsData[hist.twenty_four_hour]?.toFixed(2)}%</Text>
                                        </Td>
                                        <Td borderRight={"1px solid rgba(70, 130, 180, 0.10)"}>
                                            <Text color={coinAnalyticsData[hist.seven_day] < 0 ? "#FF0000" : "#245F00"} colorMode={colorMode} variant={"converter_low_high"}>{coinAnalyticsData[hist.seven_day]?.toFixed(2)}%</Text>
                                        </Td>
                                        <Td borderRight={"1px solid rgba(70, 130, 180, 0.10)"}>
                                            <Text color={coinAnalyticsData[hist.fourteen_day] < 0 ? "#FF0000" : "#245F00"} colorMode={colorMode} variant={"converter_low_high"}>{coinAnalyticsData[hist.fourteen_day]?.toFixed(2)}%</Text>
                                        </Td>
                                        <Td borderRight={"1px solid rgba(70, 130, 180, 0.10)"}>
                                            <Text color={coinAnalyticsData[hist.thirty_day] < 0 ? "#FF0000" : "#245F00"} colorMode={colorMode} variant={"converter_low_high"}>{coinAnalyticsData[hist.thirty_day]?.toFixed(2)}%</Text>
                                        </Td>
                                        <Td>
                                            <Text color={coinAnalyticsData[hist.one_year] < 0 ? "#FF0000" : "#245F00"} colorMode={colorMode} variant={"converter_low_high"}>{coinAnalyticsData[hist.one_year]?.toFixed(2)}%</Text>
                                        </Td>
                                    </Tr>
                                ))
                            }
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>
        </Box >
    );
};

export default IntervalWiseTableData;
