"use client";
import {
	Box,
	Flex,
	Td,
	Text,
	Th,
	Tr,
	useColorMode,
	useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import GenericTable from "@components/table";
import { GovernanceTableHeader } from "@components/pages/defiDashboard/helper";
import PageButtonsWide from "@components/pageButtonsWide";
import { GOVERNANCE_TABLE_DATA_KEYS } from "@util/constant";

const GovernanceTable = ({ tablePage, setTableLimit, pageChangeHandler, tableLimit }) => {
	const defiGovernanceTableData = useSelector(
		(state) => state?.defiDashboardData?.DefiGovernanceTableData
	);

	return (
		<Box
			w={"100%"}
			borderRadius={"6px"}
			bg={useColorModeValue("#FFFFFF", "#202020")}
			borderColor={useColorModeValue("#F0F0F5", "#272727")}
			mb={{ base: "50px", md: "none" }}
		>
			<Box layerStyle={"spaceBetween"} p={"20px"}>
				<Box layerStyle={"center"} gap={"5px"}>
					<Text variant={"smallTableHeader"}>Governance</Text>
					<Text
						variant={"h4"}
						color={useColorModeValue("#434347", "#A8ADBD")}
					>
						| Proposals
					</Text>
				</Box>
			</Box>

			<Box h={"70%"} overflow={"hidden"}>
				<GenericTable
					tableHeader={GovernanceTableHeader}
					tableData={defiGovernanceTableData}
					TableRow={TableRow}
					TableHeaderRowMobile={TableHeaderRowMobile}
					ButtonComp={(item) => {
						return (
							<Box layerStyle={"spaceBetween"} w={"90%"} minH={"60px"}>
								<Box layerStyle={"flexCenter"} gap={"10px"}>
									<Text variant={"h3"}> {item?.item?.Title} </Text>
								</Box>
								<Box alignItems={"center"} display={"flex"} gap={"5px"}>
									<Box
										w="12px"
										h="9px"
										borderRadius={"30px"}
										mr={"4px"}
										bgColor={
											item?.item?.State === "active" ? "#62D845" : "#FF4848"
										}
									></Box>
									<Text
										_dark={{
											color: "#FFFFFF",
										}}
										_light={{
											color: "#16171B",
										}}
										fontSize={"14px"}
										fontStyle={"normal"}
										fontWeight={"400"}
										lineHeight={"20px"}
										textTransform={"capitalize"}
									>
										{item?.item?.State}
									</Text>
								</Box>
							</Box>
						);
					}}
					PanelComp={(item) => {
						return (
							<Box layerStyle={"flexColumn"} gap={"10px"}>
								<Box display={"flex"} gap={"20px"}>
									<Text variant={"h3"} color={"#8F8F8F"}>
										{" "}
										Start{" "}
									</Text>
									<Text variant={"h3"}> {item?.item?.Start} </Text>
								</Box>
								<Box display={"flex"} gap={"20px"}>
									<Text variant={"h3"} color={"#8F8F8F"}>
										{" "}
										End{" "}
									</Text>
									<Text variant={"h3"}> {item?.item?.End} </Text>
								</Box>
								<Box display={"flex"} gap={"20px"}>
									<Text variant={"h3"} color={"#8F8F8F"}>
										{" "}
										Votes{" "}
									</Text>
									<Text variant={"h3"}> {item?.item?.Votes} </Text>
								</Box>
							</Box>
						);
					}}
					SkeletonRowsColumnsDesktop={{
						numColumns: 5,
						numRows: 5,
					}}
					SkeletonRowsColumnsMobile={{
						numColumns: 2,
						numRows: 5,
					}}
				/>
			</Box>

			<Box display={"flex"} bgColor={useColorModeValue('#FFFFFF', '#202020')}
				minH={"60px"} p={{ base: "10px", md: "5px 20px" }}>

				<PageButtonsWide
					page={tablePage}
					totalPages={defiGovernanceTableData?.data?.totalPages}
					pageChangeHandler={pageChangeHandler}
					tableLimit={tableLimit}
					setTableLimit={setTableLimit}
					// time={3}
					w={"100%"}
				/>
			</Box>
		</Box>
	);
};

export default GovernanceTable;

const TableHeaderRowMobile = () => {
	return (
		<Tr>
			<Th>
				<Box layerStyle={"flexCenter"}>
					<Text variant={"smallTableHeaderMobile"}>Title</Text>
				</Box>
			</Th>
			<Th>
				<Box layerStyle={"flexAlignCenterJustifyCenter"} w="100%">
					<Text variant={"smallTableHeaderMobile"}>State</Text>
				</Box>
			</Th>
		</Tr>
	);
};

const TableRow = ({ item, i }) => {
	const [clicked, setClick] = useState(false);
	const { colorMode } = useColorMode();
	const openInNewTab = (discussion) => {
		const newTab = window.open(discussion, '_blank');
		newTab.focus();
	};
	return (
		<Tr
			key={i}
			cursor={"pointer"}
			bgColor={
				clicked
					? colorMode === "light"
						? "#F5F5F7"
						: "#191919"
					: colorMode === "light"
						? "#FFFFFF"
						: "#202020"
			}
			onClick={() => {
				setClick(clicked);
				openInNewTab(item?.Discussion);
			}}
			borderBottom={"1px"}
			borderColor={useColorModeValue("#DFDFDF", "#313131")}
			borderRadius={"2px"}
		>
			{
				GOVERNANCE_TABLE_DATA_KEYS(item).map((item_, index) => <TableData key={index} item={item_} />)
			}
		</Tr>
	);
};

const TableData = ({ item }) => (
	<Td>
		<Flex>
			<Box alignItems={"center"} display={"flex"} gap={item.slug === 'state' ? "5px" : "15px"}>
				{
					item.slug === 'state' && <Box
						w="12px"
						h="9px"
						borderRadius={"30px"}
						mr={"4px"}
						bgColor={item?.State === "active" ? "#62D845" : "#FF4848"}
					></Box>
				}
				<Text
					_dark={{
						color: "#FFFFFF",
					}}
					_light={{
						color: "#16171B",
					}}
					fontSize={"14px"}
					fontStyle={"normal"}
					fontWeight={"400"}
					lineHeight={"20px"}
					textTransform={item.slug === 'state' ? "capitalize" : ""}
				>
					{item?.value}
				</Text>
			</Box>
		</Flex>
	</Td>
);