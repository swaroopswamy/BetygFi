/* eslint-disable max-len */
import React from "react";
import {
	Box,
	Image,
	Text,
	Tr,
	Th,
	Td,
} from "@chakra-ui/react";
import { USDollar } from "@util/globalHelper";

import {
	KnownEntitiesTableHeader,
	KnownEntitiesDesktop,
	KnownEntitiesMobile,
} from "@components/pages/walletDashboard/helper";
import dynamic from "next/dynamic";

const TooltipComp = dynamic(() => import("@components/tooltipComp"));
const GenericTable = dynamic(() => import("@components/table"));

const InteractionWithKnownEntitiesBox = () => {
	return (
		<Box
			w={{ base: "90%", bigSize: "50%", md: "90%" }}
			height={"367px"}
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
					<Text variant={"smallTableHeader"}>
						Interaction with Known Entities
					</Text>
					<TooltipComp label="Interaction with Known Entities shows transactions of an individual wallet with the entities i.e., exchanges." />
				</Box>
			</Box>
			<GenericTable
				tableHeader={KnownEntitiesTableHeader}
				TableRow={TableRowDesktop}
				TableHeaderRowMobile={TableHeaderRowMobile}
				ButtonComp={TableBodyRowMobileButtonComp}
				PanelComp={TableBodyRowMobilePanelComp}
				SkeletonRowsColumnsDesktop={KnownEntitiesDesktop}
				SkeletonRowsColumnsMobile={KnownEntitiesMobile}
			/>
		</Box>
	);
};

export default InteractionWithKnownEntitiesBox;

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
					<Text variant={"h3"} letterSpacing={"1px"} ml="6px">
						{item?.percentage}
					</Text>
				</Box>
			</Td>
			<Td>
				<Text variant={"h3"}>USD {USDollar.format(item?.value)}</Text>
			</Td>
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
					<Text variant={"smallTableHeaderMobile"}>Price(USD)</Text>
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
						borderRadius={"50%"}
						alt="logo"
					></Image>

					<Text
						variant={"smallTableHeaderMobile"}
						letterSpacing={"1.4px"}
						ml="12px"
					>
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
			<Box layerStyle={"flexCenter"}>
				<Text variant={"h6"} _
					light={{ color: "#16171B" }}
					_dark={{ color: "#FFFFFF" }}>Value</Text>
				<Text variant={"h6"}
					ml={"20px"}
					_light={{ color: "#16171B" }}
					_dark={{ color: "#FFFFFF" }}>
					USD {USDollar.format(item?.value)}
				</Text>
			</Box>
		</Box>
	);
};
