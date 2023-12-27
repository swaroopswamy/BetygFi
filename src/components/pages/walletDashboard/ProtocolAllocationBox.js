import React from "react";
import { Box, Image, Text, Tr, Th, Td } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { USDollar } from "@util/globalHelper";
import {
	ProtocolAllocationsTableHeader,
	ProtocolAllocationsDesktop,
	ProtocolAllocationsMobile,
} from "@components/pages/walletDashboard/helper";
import dynamic from "next/dynamic";

const TooltipComp = dynamic(() => import("@components/tooltipComp"));
const GenericTable = dynamic(() => import("@components/table"));

const ProtocolAllocationBox = () => {
	const protocolAllocationData = useSelector(
		(state) => state?.walletDashboardTableData?.protocolAllocationForAddress
	);

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
					<Text variant={"smallTableHeader"}>Protocol Allocation</Text>
					<TooltipComp label="Protocol allocation list shows how the assets of an individual wallet are distributed between DeFi’s in value and percentage terms." />
				</Box>
			</Box>
			<GenericTable
				tableHeader={ProtocolAllocationsTableHeader}
				tableData={protocolAllocationData}
				TableRow={TableRowDesktop}
				TableHeaderRowMobile={TableHeaderRowMobile}
				ButtonComp={TableBodyRowMobileButtonComp}
				PanelComp={TableBodyRowMobilePanelComp}
				SkeletonRowsColumnsDesktop={ProtocolAllocationsDesktop}
				SkeletonRowsColumnsMobile={ProtocolAllocationsMobile}
			/>
		</Box>
	);
};
const TableRowDesktop = ({ item, i }) => {
	return (
		<Tr height={"40px"} key={i}>
			<Td _dark={{ color: "#FFFFFF" }} _light={{ color: "#16171B" }}>
				<Box layerStyle={"flexCenter"}>
					<Image width={5} height={5} alt="logo" src={item?.logoUrl}></Image>

					<Text ml="6px" variant={"h3"}>
						{item?.name}
					</Text>
				</Box>
			</Td>

			<Td>
				<Box layerStyle={"flexCenter"}>
					<Text variant={"h3"} ml="6px">
						{item?.percentage}%
					</Text>
				</Box>
			</Td>
			<Td variant={"h3"}>USD {USDollar.format(item?.value)}</Td>
		</Tr>
	);
};

const TableHeaderRowMobile = () => {
	return (
		<Tr>
			<Th>
				<Box layerStyle={"flexCenter"}>
					<Text variant={"smallTableHeaderMobile"}>DeFi Name</Text>
				</Box>
			</Th>
			<Th>
				<Box layerStyle={"flexAlignCenterJustifyCenter"} w="100%">
					<Text variant={"smallTableHeaderMobile"}>Share</Text>
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
						w={"20px"}
						h={"20px"}
						src={item?.logoUrl}
						style={{ borderRadius: "50%" }}
						alt=""
					></Image>

					<Text variant={"smallTableHeaderMobile"} ml="12px">
						{item?.name}
					</Text>
				</Box>

				<Text variant={"smallTableHeaderMobile"} textAlign={"left"}>
					{item?.percentage}%
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
					_light={{ color: "#16171B" }}
					_dark={{ color: "#FFFFFF" }}>
					Value
				</Text>

				<Text variant={"h6"}
					textAlign={"left"}
					ml={"20px"}
					_light={{ color: "#16171B" }}
					_dark={{ color: "#FFFFFF" }}>
					USD {USDollar.format(item?.value)}
				</Text>
			</Box>
		</Box>
	);
};

export default ProtocolAllocationBox;
