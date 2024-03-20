import React from "react";
import {
	Box,
	Text,
	Tr,
	Th,
	Td,
	useColorModeValue,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { USDollar } from "@util/utility";
import {
	InflowTokensTableHeader,
	InflowTokensDesktop,
	InflowTokensMobile,
} from "@components/pages/walletDashboard/helper";
import dynamic from "next/dynamic";
import Image from "next/image";
import CustomAvatar from "@components/avatar";

const TooltipComp = dynamic(() => import("@components/tooltipComp"));
const GenericTable = dynamic(() => import("@components/table"));

const InflowTokensBox = () => {
	const inflowOutflowTokensData = useSelector(
		(state) => state?.walletDashboardTableData?.inflowOutflowTokensForAddress
	);
	let inflowTokensData = {
		data: { data: inflowOutflowTokensData?.data?.inflow },
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
				}}
				_light={{
					bg: "#FFFFFF",
				}}
				pb="14px"
				layerStyle={"flexCenterSpaceBetween"}
				px={"20px"}
			>
				<Box layerStyle={"flexCenter"} pt="15px">
					<Text variant={"smallTableHeader"}>Inflow Tokens (30 Days)</Text>
					<TooltipComp label="Inflow shows the number of tokens received by the wallet." />
				</Box>
			</Box>
			<Box overflow={inflowTokensData?.isSuccess ? "auto" : "hidden"}>
				<GenericTable
					tableHeader={InflowTokensTableHeader}
					tableData={inflowTokensData}
					TableRow={TableRowDesktop}
					TableHeaderRowMobile={TableHeaderRowMobile}
					ButtonComp={TableBodyRowMobileButtonComp}
					PanelComp={TableBodyRowMobilePanelComp}
					SkeletonRowsColumnsDesktop={InflowTokensDesktop}
					SkeletonRowsColumnsMobile={InflowTokensMobile}
				/>
			</Box>
		</Box>
	);
};

const TableRowDesktop = ({ item, i }) => {
	if (i === 5) return;
	return (
		<Tr height={"40px"} key={i}>
			<Td _dark={{ color: "#FFFFFF", bgColor: "#202020", }} _light={{ color: "#16171B", bgColor: "#FFFFFF", }}>
				<Box layerStyle={"flexCenter"}>
					<CustomAvatar
						width={5}
						height={5}
						name={item?.symbol ?? "logo"}
						style={{ borderRadius: "50%" }}
						src={item?.logoUrl}
					/>
					<Text ml="6px" variant={"h3"}>
						{item?.symbol}
					</Text>
				</Box>
			</Td>

			<Td _light={{ bgColor: "#FFFFFF", }} _dark={{ bgColor: "#202020", }}>
				<Box layerStyle={"flexCenter"}>
					<Text
						variant={"h3"}
						_dark={{ color: "#245F00" }}
						_light={{ color: "#60C000" }}
					>
						+ USD {USDollar.format(item?.value)}
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
		<Box w="100%" m={"16px"} layerStyle={"flexCenter"}>
			<Box layerStyle={"flexCenterSpaceBetween"} w={"100%"}>
				<Box layerStyle={"flexCenterSpaceBetween"}>
					<Image
						width={20}
						height={20}
						src={item?.logoUrl}
						style={{ borderRadius: "50%" }}
						alt=""
					/>
					<Text variant={"smallTableHeaderMobile"} ml="12px">
						{item?.symbol}
					</Text>
				</Box>

				<Text
					variant={"smallTableHeaderMobile"}
					textAlign={"left"}
					color={useColorModeValue("#245F00", "#60C000")}
				>
					+ USD {USDollar.format(item?.value)}
				</Text>
			</Box>
		</Box>
	);
};
const TableBodyRowMobilePanelComp = ({ item }) => {
	return (
		<Box layerStyle={"flexColumn"} my={"10px"}>
			<Box display={"flex"}>
				<Text
					variant={"h6"}
					_light={{ color: "#16171B" }}
					_dark={{ color: "#FFFFFF" }}
					textAlign={"left"}
					color={"#8F8F8F"}
				>
					Share
				</Text>

				<Text
					variant={"h6"}
					textAlign={"left"}
					ml={"20px"}
					_light={{ color: "#16171B" }}
					_dark={{ color: "#FFFFFF" }}
				>
					{item?.percentage}%
				</Text>
			</Box>
		</Box>
	);
};

export default InflowTokensBox;
