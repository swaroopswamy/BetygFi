/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Box, Table, Tbody, Text, Th, Thead, Tr, Td, Spinner, Icon, useMediaQuery } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { SingleAccordionComp } from "@components/accordion";
import { HiSortAscending, HiSortDescending } from "react-icons/hi";
import { isNotNullAndUndefined, orderByKey } from "@util/utility";

const TooltipComp = dynamic(() => import("@components/tooltipComp"));
const SkeletonTable = dynamic(() => import("@components/skeleton"));

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
	showSortingIcon
}) => {
	const [isMd] = useMediaQuery("(min-width: 768px)");

	const [tableBodyData, setTableBodyData] = useState([]);
	const [sortedState, setSortedState] = useState({ on: null, by: 'asc' });

	useEffect(() => {
		if (Array.isArray(tableData?.data?.data)) {
			setTableBodyData([...tableData.data.data]);
		}
	}, []);

	useEffect(() => {
		if (tableData?.data?.data) {
			const tableData_ = [...tableData.data.data].map(tb => {
				const tbCopy = { ...tb };
				if (isNotNullAndUndefined(tb.mcap) && isNotNullAndUndefined(tb.tvl)) {
					tbCopy['mcap-tvl'] = tbCopy.mcap / tbCopy.tvl;
				}
				return tbCopy;
			});
			setTableBodyData(tableData_);
		}
	}, [tableData]);

	useEffect(() => {
		if (sortedState.on !== null) {
			if (tableBodyData?.length > 0) {
				setTableBodyData(orderByKey(tableBodyData, sortedState.on, sortedState.by));
			}
		}
	}, [sortedState]);

	const onClickHeader = headerItem => {
		if (showSortingIcon) {
			setSortedState({ on: headerItem.accessor, by: sortedState.on === headerItem.accessor && sortedState.by === 'desc' ? 'asc' : 'desc' });
		}
	};

	const renderMDTable = () => {
		return (
			<Table
				variant="simple"
				w={"100%"}
				display={{ base: "none", md: "table" }}
				minW={bigTable ? "1200px" : "unset"}
			>
				<Thead
					_light={{ bgColor: "#F5F5F7", }}
					_dark={{ bgColor: "#191919", }}
					position="sticky"
					top={0}
					zIndex={"99"}
				>
					<Tr>
						{
							tableHeader.map((item, i) => (
								<Th key={i} border={"0px"}>
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
										{item.isTooltip && (
											<TooltipComp
												label={item?.tooltipLabel}
											/>
										)}
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
							<Td
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

	const renderSMTable = () => {
		return (
			<Table variant={"unstyled"} display={{ base: "table", md: "none" }}>
				<Thead _light={{ bgColor: "#F5F5F7", }} _dark={{ bgColor: "#191919", }} >
					<TableHeaderRowMobile />
				</Thead>

				<Tbody _light={{ bgColor: "#FFF", }} _dark={{ bgColor: "#202020", }} >
					{(tableData?.isError || tableData === null) && (
						<Tr>
							<Td
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
							numColumns={SkeletonRowsColumnsMobile.numColumns}
							numRows={SkeletonRowsColumnsMobile.numRows}
						/>
					)}

					{tableData?.isSuccess &&
						(tableBodyData?.length > 0 ? (
							tableBodyData.map((item, rowIndex) => (
								<Tr key={rowIndex}>
									<Td p={0} colSpan={3}>
										<SingleAccordionComp
											display={"flex"}
											minH={"50px"}
											w={"100%"}
											borderRadius={"0px"}
											ButtonComp={() => <ButtonComp item={item} />}
											PanelComp={() => <PanelComp item={item} />}
										/>
									</Td>
								</Tr>
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

	return isMd ? renderMDTable() : renderSMTable();
};

export default GenericTable;
