import { Box, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, useColorMode, useColorModeValue } from "@chakra-ui/react";

const IntervalWiseTableData = () => {
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
                                    { one_hour: "+4.64%", twenty_four_hour: "-4.64%", seven_day: "+4.64%", fourteen_day: "+4.64%", thirty_day: "+4.64%", one_year: "+4.64%" },

                                ].map((hist, index) => (
                                    <Tr key={index}>
                                        <Td borderRight={"1px solid rgba(70, 130, 180, 0.10)"}>
                                            <Text color={hist.one_hour.startsWith("-") ? "#FF0000" : "#245F00"} colorMode={colorMode} variant={"converter_low_high"}>{hist.one_hour}</Text>
                                        </Td>
                                        <Td borderRight={"1px solid rgba(70, 130, 180, 0.10)"}>
                                            <Text color={hist.twenty_four_hour.startsWith("-") ? "#FF0000" : "#245F00"} colorMode={colorMode} variant={"converter_low_high"}>{hist.twenty_four_hour}</Text>
                                        </Td>
                                        <Td borderRight={"1px solid rgba(70, 130, 180, 0.10)"}>
                                            <Text color={hist.seven_day.startsWith("-") ? "#FF0000" : "#245F00"} colorMode={colorMode} variant={"converter_low_high"}>{hist.seven_day}</Text>
                                        </Td>
                                        <Td borderRight={"1px solid rgba(70, 130, 180, 0.10)"}>
                                            <Text color={hist.fourteen_day.startsWith("-") ? "#FF0000" : "#245F00"} colorMode={colorMode} variant={"converter_low_high"}>{hist.fourteen_day}</Text>
                                        </Td>
                                        <Td borderRight={"1px solid rgba(70, 130, 180, 0.10)"}>
                                            <Text color={hist.thirty_day.startsWith("-") ? "#FF0000" : "#245F00"} colorMode={colorMode} variant={"converter_low_high"}>{hist.thirty_day}</Text>
                                        </Td>
                                        <Td>
                                            <Text color={hist.one_year.startsWith("-") ? "#FF0000" : "#245F00"} colorMode={colorMode} variant={"converter_low_high"}>{hist.one_year}</Text>
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
