import React from "react";
import { Box, Text, Tr, Th, Td, useColorModeValue } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { USDollar } from "@util/utility";
import {
	OutflowTokensTableHeader,
	OutflowTokensDesktop,
	OutflowTokensMobile,
} from "@components/pages/walletDashboard/helper";
import dynamic from "next/dynamic";
import Image from "next/image";

const TooltipComp = dynamic(() => import("@components/tooltipComp"), { ssr: false });
const GenericTable = dynamic(() => import("@components/table"), { ssr: false });

const OutflowTokensBox = () => {
	const inflowOutflowTokensData = useSelector(
		(state) => state?.walletDashboardTableData?.inflowOutflowTokensForAddress
	);
	let outflowTokensData = {
		data: { data: inflowOutflowTokensData?.data?.outflow },
		isError: inflowOutflowTokensData?.isError,
		isLoading: inflowOutflowTokensData?.isLoading,
		isSuccess: inflowOutflowTokensData?.isSuccess,
	};

	return (
		<Box
			w={{ base: "90%", bigSize: "50%", md: "90%" }}
			height={{ base: "none", md: "367px" }}
			layerStyle={"flexColumn"}
			borderRadius={"6px"}
			_dark={{
				bg: "#202020",
			}}
			_light={{
				bg: "#FFFFFF",
			}}
		>
			<Box
				height={"50px"}
				borderRadius={"6px"}
				_dark={{
					bg: "#202020",
					color: "#FFFFFF",
				}}
				_light={{
					bg: "#FFFFFF",
					color: "#16171B",
				}}
				pb="14px"
				layerStyle={"flexCenterSpaceBetween"}
				px={"20px"}
			>
				<Box layerStyle={"flexCenter"} pt="15px">
					<Text variant={"smallTableHeader"} >
						Outflow Tokens (30 Days)
					</Text>
					<TooltipComp label="Outflow shows the number of tokens sent by the wallet." />
				</Box>
			</Box>
			<Box overflow={outflowTokensData?.isSuccess ? "auto" : "hidden"}>
				<GenericTable
					tableHeader={OutflowTokensTableHeader}
					tableData={outflowTokensData}
					TableRow={TableRowDesktop}
					TableHeaderRowMobile={TableHeaderRowMobile}
					ButtonComp={TableBodyRowMobileButtonComp}
					PanelComp={TableBodyRowMobilePanelComp}
					SkeletonRowsColumnsDesktop={OutflowTokensDesktop}
					SkeletonRowsColumnsMobile={OutflowTokensMobile}
				/>
			</Box>
		</Box>
	);
};

const TableRowDesktop = ({ item, i }) => {
	return (
		<Tr height={"40px"} key={i}>
			<Td _dark={{ color: "#FFFFFF", bgColor: "#202020", }} _light={{ color: "#16171B", bgColor: "#FFFFFF", }}>
				<Box layerStyle={"flexCenter"}>
					<Image
						width={5}
						height={5}
						alt="logo"
						style={{ borderRadius: "50%" }}
						src={item?.logoUrl}
					// unoptimized="true"
					// priority="true"
					/>
					<Text ml="6px" variant={"h3"}>
						{item?.symbol}
					</Text>
				</Box>
			</Td>

			<Td _light={{ bgColor: "#FFFFFF", }} _dark={{ bgColor: "#202020", }}>
				<Box layerStyle={"flexCenter"}>
					<Text variant={"h3"} color={useColorModeValue('#EF1E1E', '#FF3535')}>
						- USD {USDollar.format(item?.value)}
					</Text>
				</Box>
			</Td>

			<Td _light={{ bgColor: "#FFFFFF", }} _dark={{ bgColor: "#202020", }}>
				<Box layerStyle={"flexCenter"}>
					<Text variant={"h3"}>{item?.percentage}%</Text>
				</Box>
			</Td>
		</Tr>
	);
};
const TableHeaderRowMobile = () => {
	return (
		<Tr>
			<Th _light={{ bgColor: "#F5F5F7", }} _dark={{ bgColor: "#191919", }}>
				<Box layerStyle={"flexCenter"}>
					<Text variant={"smallTableHeaderMobile"}>Asset Name</Text>
				</Box>
			</Th>
			<Th _light={{ bgColor: "#F5F5F7", }} _dark={{ bgColor: "#191919", }}>
				<Box layerStyle={"flexAlignCenterJustifyCenter"} w="100%">
					<Text variant={"smallTableHeaderMobile"}>Value</Text>
				</Box>
			</Th>
		</Tr>
	);
};

const TableBodyRowMobileButtonComp = ({ item }) => {
	return (
		<Box w="100%" m={"15px 8px"} layerStyle={"flexCenter"}>
			<Box layerStyle={"flexCenterSpaceBetween"} w={"100%"}>
				<Box layerStyle={"flexCenterSpaceBetween"}>
					<Image
						width={20}
						height={20}
						// unoptimized="true"
						// priority="true"
						src={item?.logoUrl}
						style={{ borderRadius: '50%' }}
						alt="logo"
					/>
					<Text variant={"smallTableHeaderMobile"} textAlign={"left"} ml="10px">
						{item?.symbol}
					</Text>
				</Box>

				<Text variant={"smallTableHeaderMobile"}
					//textAlign={"left"}
					color={useColorModeValue('#EF1E1E', '#FF3535')}>
					- USD {USDollar.format(item?.value)}
				</Text>
			</Box>
		</Box>
	);
};
const TableBodyRowMobilePanelComp = ({ item }) => {
	return (
		<Box layerStyle={"flexColumn"} my={"10px"}>
			<Box display={"flex"}>
				<Text variant={"h6"}
					textAlign={"left"}
					color={"#8F8F8F"}
					_light={{ color: "#16171B" }}
					_dark={{ color: "#FFFFFF" }}>
					Share
				</Text>

				<Text variant={"h6"}
					textAlign={"left"}
					ml={"20px"}
					_light={{ color: "#16171B" }}
					_dark={{ color: "#FFFFFF" }}>
					{item?.percentage}%
				</Text>
			</Box>
		</Box>
	);
};
export default OutflowTokensBox;
