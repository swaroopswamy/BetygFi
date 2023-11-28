/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useMemo } from "react";
import {
    Box,
    Icon,
    Skeleton,
    Table,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
    useColorMode,
    useMediaQuery,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useTable, useSortBy } from "react-table";
const TooltipComp = dynamic(() => import("/src/app/components/tooltipComp"));
const SkeletonTable = dynamic(() => import("/src/app/components/skeleton"));
import { SingleAccordionComp } from "/src/app/components/accordion";
import { HiSortAscending, HiSortDescending } from "react-icons/hi";
import isEmpty from "is-empty";
import { colors } from "@util/constant";

const GenericTable = ({
    tableHeader,
    tableData = null,
    TableRow,
    TableHeaderRowMobile,
    ButtonComp,
    PanelComp,
    SkeletonRowsColumnsDesktop,
    SkeletonRowsColumnsMobile,
    isQueryInPendingState = false,
    bigTable = false,
}) => {
    const [isMd] = useMediaQuery("(min-width: 768px)");
    const { colorMode } = useColorMode();

    const data = useMemo(
        () =>
            tableData?.isSuccess && tableData?.data != undefined
                ? tableData?.data?.data
                : Array(30).fill({}),
        [tableData]
    );

    const columns = useMemo(() => tableHeader, [tableHeader]);

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable(
            {
                columns: columns,
                data: data,
            },
            useSortBy
        );

    return (
        <>
            {isMd ? (
                <Table
                    {...getTableProps()}
                    variant="simple"
                    key={1}
                    w={"100%"}
                    display={{ base: "none", md: "table" }}
                    minW={bigTable ? "1200px" : "unset"}
                >
                    <Thead>
                        {headerGroups.map((headerGroup, i) => (
                            <Tr
                                key={i}
                                {...headerGroup.getHeaderGroupProps()}
                                _light={{
                                    bgColor: "#F5F5F7",
                                }}
                                _dark={{
                                    bgColor: "#191919",
                                }}
                                position="sticky"
                                top={0}
                                zIndex={"99"}
                            >
                                {
                                    // Loop over the headers in each row
                                    headerGroup.headers.map((column, i) => (
                                        // Apply the header cell props
                                        <Th
                                            key={i}
                                            {...column.getHeaderProps(
                                                column.getSortByToggleProps({
                                                    title: undefined,
                                                })
                                            )}
                                            p={"12px"}
                                        >
                                            <Box
                                                display={"flex"}
                                                alignItems={"center"}
                                            >
                                                <Text
                                                    variant="tableHead"
                                                    textTransform={"capitalize"}
                                                    textAlign={"left"}
                                                >
                                                    {column.Header}
                                                </Text>
                                                {column.tooltipLabel && (
                                                    <TooltipComp
                                                        label={
                                                            column.tooltipLabel
                                                        }
                                                    />
                                                )}
                                                <Icon
                                                    // as={column.isSorted
                                                    // 	? column.isSortedDesc
                                                    // 	  ? HiSortDescending
                                                    // 	  : HiSortAscending
                                                    // 	: ''}
                                                    as={
                                                        column.isSortedDesc
                                                            ? HiSortDescending
                                                            : HiSortAscending
                                                    }
                                                    visibility={
                                                        column.isSorted
                                                            ? "visible"
                                                            : "hidden"
                                                    }
                                                    boxSize={"16px"}
                                                    alt="Sort"
                                                    ml={"3px"}
                                                />
                                            </Box>
                                        </Th>
                                    ))
                                }
                            </Tr>
                        ))}
                    </Thead>

                    {/* Apply the table body props */}
                    <Tbody {...getTableBodyProps()}>
                        {tableData?.isLoading && (
                            <SkeletonTable
                                numColumns={
                                    SkeletonRowsColumnsDesktop?.numColumns
                                }
                                numRows={SkeletonRowsColumnsDesktop?.numRows}
                            />
                        )}

                        {(tableData?.isError ||
                            (tableData?.isSuccess &&
                                tableData?.data == undefined)) && (
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
                        )}

                        {tableData?.isSuccess &&
                            tableData?.data != undefined &&
                            tableData?.data != null &&
                            rows.map((row, i) => {
                                // Prepare the row for display
                                prepareRow(row);
                                return (
                                    <TableRow
                                        item={row.original}
                                        rowIndex={i}
                                    />
                                );
                            })}
                    </Tbody>
                </Table>
            ) : (
                <Table
                    {...getTableProps()}
                    variant={"simple"}
                    display={{ base: "table", md: "none" }}
                    w={"100%"}
                >
                    <Thead>
                        {headerGroups.map((headerGroup, i) => (
                            <Tr
                                key={i}
                                {...headerGroup.getHeaderGroupProps()}
                                _light={{
                                    bgColor: "#F5F5F7",
                                }}
                                _dark={{
                                    bgColor: "#191919",
                                }}
                                position="sticky"
                                top={0}
                                zIndex={"99"}
                            >
                                {
                                    // Loop over the headers in each row
                                    headerGroup.headers.map(
                                        (column, i) =>
                                            // Apply the header cell props
                                            column.onMobile && (
                                                <Th
                                                    key={i}
                                                    {...column.getHeaderProps(
                                                        column.getSortByToggleProps(
                                                            { title: undefined }
                                                        )
                                                    )}
                                                >
                                                    <Box
                                                        display={"flex"}
                                                        alignItems={"center"}
                                                    >
                                                        <Text
                                                            variant="tableHead"
                                                            textTransform={
                                                                "capitalize"
                                                            }
                                                            textAlign={"left"}
                                                        >
                                                            {column.Header}
                                                        </Text>
                                                        {column.tooltipLabel && (
                                                            <TooltipComp
                                                                label={
                                                                    column.tooltipLabel
                                                                }
                                                            />
                                                        )}
                                                        <Icon
                                                            as={
                                                                column.isSortedDesc
                                                                    ? HiSortDescending
                                                                    : HiSortAscending
                                                            }
                                                            visibility={
                                                                column.isSorted
                                                                    ? "visible"
                                                                    : "hidden"
                                                            }
                                                            boxSize={"16px"}
                                                            alt="Sort"
                                                            ml={"3px"}
                                                        />
                                                    </Box>
                                                </Th>
                                            )
                                    )
                                }
                            </Tr>
                        ))}
                    </Thead>

                    {/* Apply the table body props */}
                    <Tbody {...getTableBodyProps()}>
                        {tableData?.isLoading && (
                            <SkeletonTable
                                numColumns={
                                    SkeletonRowsColumnsMobile.numColumns
                                }
                                numRows={SkeletonRowsColumnsMobile.numRows}
                            />
                        )}

                        {(tableData?.isError || tableData === null) && (
                            <Tr>
                                <Td
                                    p="20px"
                                    textAlign={"center"}
                                    height={"245px"}
                                    colSpan={
                                        SkeletonRowsColumnsMobile?.numColumns
                                    }
                                >
                                    <Text variant={"noDataText"}>
                                        No data available
                                    </Text>
                                </Td>
                            </Tr>
                        )}

                        {tableData?.isSuccess &&
                            tableData?.data != undefined &&
                            tableData?.data != null &&
                            rows.map((row, i) => {
                                // Prepare the row for display
                                prepareRow(row);
                                return (
                                    <Tr key={i}>
                                        <Td p={0} colSpan={3}>
                                            <SingleAccordionComp
                                                display={"flex"}
                                                minH={"50px"}
                                                w={"100%"}
                                                borderRadius={"0px"}
                                                bgColor={"background.secondary"}
                                                ButtonComp={() => {
                                                    return (
                                                        <ButtonComp
                                                            item={row.original}
                                                        />
                                                    );
                                                }}
                                                PanelComp={() => {
                                                    return (
                                                        <PanelComp
                                                            item={row.original}
                                                        />
                                                    );
                                                }}
                                            />
                                        </Td>
                                    </Tr>
                                );
                            })}
                    </Tbody>
                </Table>
            )}
        </>
    );
};

export default GenericTable;
