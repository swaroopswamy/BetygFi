"use client";
import React from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import {
	Text,
	Box,
	useColorModeValue,
	Button,
	useColorMode,
	Tr,
	Th,
	Td,
} from "@chakra-ui/react";
import GenericTable from "@components/table";
import { DefiAssetsSmallTableHeader } from "@components/pages/defiDashboard/helper";
import LastUpdate from "@components/lastUpdate";
import TooltipComp from "@components/tooltipComp";
import CustomAvatar from "@components/avatar";

let USDollar = new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD",
});

function DefiAssetsSmallTable({ searchParamProtocolSlug }) {
	const router = useRouter();

	const defiAssetsTableData = useSelector(
		(state) => state?.defiDashboardData?.DefiAssetCompositionTableData
	);

	const { colorMode } = useColorMode();

	return (
		<Box
			w={{ base: "100%", lg: "50%" }}
			height={"370px"}
			borderRadius={"6px"}
			bg={useColorModeValue("#FFFFFF", "#202020")}
			borderColor={useColorModeValue("#F0F0F5", "#272727")}
		>
			<Box layerStyle={"spaceBetween"} p={"20px"}>
				<Box layerStyle={"center"} gap={"5px"}>
					<Text variant={"smallTableHeader"}>DeFi Asset Composition</Text>
					<TooltipComp label="Asset composition matrix shows the compositions of the assets of the DeFi in percentage terms and the individual value of the subclass of the assets of the DeFi." />
				</Box>

				{defiAssetsTableData?.data?.data?.length > 4 && (
					<Button
						variant={"viewMore"}
						onClick={() => {
							if (searchParamProtocolSlug && searchParamProtocolSlug !== '') {
								router.push(
									`/protocol/${searchParamProtocolSlug}/asset-composition`
								);
							}
						}}
					>
						{" "}
						View More{" "}
					</Button>
				)}
			</Box>

			<Box
				h={"70%"}
				overflow={defiAssetsTableData?.isSuccess ? "auto" : "hidden"}
			>
				<GenericTable
					tableHeader={DefiAssetsSmallTableHeader}
					tableData={defiAssetsTableData}
					TableRow={TableRow}
					TableHeaderRowMobile={TableHeaderRowMobile}
					ButtonComp={(item) => {
						return (
							<Box layerStyle={"spaceBetween"} w={"90%"}>
								<Box layerStyle={"flexCenter"} gap={"10px"}>
									<CustomAvatar
										height={"24px"}
										width={"24px"}
										src={item?.item?.logoUrl}
										name={item?.item?.assetName}
									/>
									<Text variant={"h3"}> {item?.item?.assetName} </Text>
								</Box>
								<Box layerStyle={"center"}>
									<Text
										variant={"h3"}
										fontWeight={"600"}
										letterSpacing={"1.4px"}
										color={
											item?.item?.value > 0
												? colorMode === "light"
													? "#245F00"
													: "#60C000"
												: colorMode === "light"
													? "#EF1E1E"
													: "#FF3535"
										}
									>
										{item?.item?.value > 0 ? "+ " : "- "}
										{USDollar.format(item?.item?.value)}
									</Text>
								</Box>
							</Box>
						);
					}}
					PanelComp={(item) => {
						return (
							<Box display={"flex"} minH={"50px"} gap={"20px"}>
								<Text variant={"h3"} color={"#8F8F8F"}>
									{" "}
									Share{" "}
								</Text>
								<Text variant={"h3"}> {item?.item?.share}% </Text>
							</Box>
						);
					}}
					SkeletonRowsColumnsDesktop={{
						numColumns: 3,
						numRows: 5,
					}}
					SkeletonRowsColumnsMobile={{
						numColumns: 2,
						numRows: 5,
					}}
				/>
			</Box>

			<LastUpdate p={"10px"} time={"3"} />
		</Box>
	);
}
export default DefiAssetsSmallTable;

function TableRow({ item, i }) {

	return (
		<>
			<Tr
				key={i}
				cursor={"pointer"}
				bgColor={useColorModeValue("#FFFFFF", "#202020")}
				borderBottom={"1px"}
				borderColor={useColorModeValue("#DFDFDF", "#313131")}
				borderRadius={"2px"}
			>
				<Td>
					<Box layerStyle={"flexCenter"} gap={"10px"}>
						<CustomAvatar
							height={"24px"}
							width={"24px"}
							src={item?.logoUrl}
							name={item?.assetName}
						/>
						<Text variant={"h3"}> {item?.assetName} </Text>
					</Box>
				</Td>

				<Td>
					<Box>
						<Text variant={"h3"}> {item?.share}% </Text>
					</Box>
				</Td>

				<Td>
					<Box>
						<Text variant={"h3"}> {USDollar.format(item?.value)} </Text>
					</Box>
				</Td>
			</Tr>
		</>
	);
}

const TableHeaderRowMobile = () => {
	return (
		<Tr>
			<Th>
				<Box layerStyle={"flexCenter"}>
					<Text variant={"smallTableHeaderMobile"}>Asset Name</Text>
				</Box>
			</Th>
			<Th>
				<Box layerStyle={"flexCenter"}>
					<Text variant={"smallTableHeaderMobile"}>Value</Text>
				</Box>
			</Th>
		</Tr>
	);
};
