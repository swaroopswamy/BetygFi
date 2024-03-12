import { Box, Icon, Spinner, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import SkeletonTable from "@components/skeleton";
import TooltipComp from "@components/tooltipComp";
import './index.css';

const SlideLeftTable = ({
    tableHeader,
    tableData = null,
    TableRow,
    SkeletonRowsColumnsDesktop,
    isQueryInPendingState = false,
    bigTable = false,
    showSortingIcon,
    onClickHeader,
    sortedState,
    tableBodyData,
    HiSortAscending,
    HiSortDescending
}) => {
    return (
        <Table
            variant="simple"
            w={"100%"}
            display={"table"}
            minW={bigTable ? "1200px" : "unset"}
        >
            <Thead
                _light={{ bgColor: "#F5F5F7", }}
                _dark={{ bgColor: "#191919", }}
                position="sticky"
                top={0}
            >
                <Tr color={"gray.200"}>
                    {
                        tableHeader.map((item, i) => (
                            <Th key={i} border={"0px"} _light={{ bgColor: "#F5F5F7", }}
                                _dark={{ bgColor: "#191919", }}>
                                <Box
                                    onClick={() => onClickHeader(item)}
                                    cursor={"pointer"}
                                    display={"flex"}
                                    alignItems={"center"}
                                    gap={"3px"}
                                >
                                    <Text
                                        variant={"tableHead"}
                                        textTransform={"capitalize"}
                                        textAlign={"left"}
                                    >
                                        {item.Header || item.label}
                                    </Text>
                                    {item.isTooltip && <TooltipComp label={item?.tooltipLabel} />}
                                    {
                                        showSortingIcon &&
                                        <Icon as={sortedState.on == item.accessor && item.accessor !== undefined && sortedState.by === 'desc' ? HiSortDescending : HiSortAscending}
                                            boxSize={"16px"}
                                            alt="Sort"
                                            ml={"3px"}
                                        />
                                    }
                                </Box>
                            </Th>
                        ))
                    }
                </Tr>
            </Thead>

            <Tbody
                border={"0px"}
                _light={{ bgColor: "#FFF", }}
                _dark={{ bgColor: "#202020", }}
            >
                {(tableData?.isError || tableData === null) && (
                    <Tr>
                        <Td _light={{ bgColor: "#FFFFFF", }}
                            _dark={{ bgColor: "#202020", }}
                            p="20px"
                            textAlign={"center"}
                            height={"245px"}
                            colSpan={SkeletonRowsColumnsDesktop?.numColumns}
                        >
                            <Text variant={"noDataText"}>
                                No data available
                            </Text>
                        </Td>
                    </Tr>
                )}
                {tableData?.isLoading && (
                    <SkeletonTable
                        numColumns={SkeletonRowsColumnsDesktop?.numColumns}
                        numRows={SkeletonRowsColumnsDesktop?.numRows}
                    />
                )}
                {isQueryInPendingState && (
                    <Tr>
                        <Td
                            minH={"212px"}
                            colSpan={SkeletonRowsColumnsDesktop?.numColumns}
                            textAlign={"center"}
                            p="20px"
                        >
                            <Box
                                display={"flex"}
                                flexDirection={"column"}
                                alignItems={"center"}
                                justifyContent={"center"}
                            >
                                <Text
                                    variant={"noDataText"}
                                    mt="44px"
                                    mb="20px"
                                >
                                    We are retrieving data from the Blockchain.
                                </Text>
                                <Spinner
                                    thickness="4px"
                                    speed="0.65s"
                                    emptyColor="gray.200"
                                    color="blue.500"
                                    size="xl"
                                />
                                <Text
                                    variant={"noDataText"}
                                    mt="20px"
                                    mb="8px"
                                >
                                    This process might take
                                    approximately 2-3 minutes.
                                </Text>
                                <Text variant={"noDataText"} mb="50px">
                                    You have the option to wait or
                                    return later.
                                </Text>
                            </Box>
                        </Td>
                    </Tr>
                )}
                {tableData?.isSuccess &&
                    (tableBodyData?.length > 0 ? (
                        tableBodyData.map((item, rowIndex) => (
                            <TableRow
                                key={rowIndex}
                                item={item}
                                rowIndex={rowIndex}
                            />
                        ))
                    ) : (
                        <Tr>
                            <Td
                                p="20px"
                                textAlign={"center"}
                                height={"245px"}
                                colSpan={
                                    SkeletonRowsColumnsDesktop?.numColumns
                                }
                            >
                                <Text variant={"noDataText"}>
                                    No data available
                                </Text>
                            </Td>
                        </Tr>
                    ))}
            </Tbody>
        </Table>
    );
};

export default SlideLeftTable;
