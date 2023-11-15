"use client";
import {
	Text,
	Icon,
	Td,
	Tr,
	Flex,
	Box,
	useColorModeValue,
	Image,
	useColorMode,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
const GenericBigTableComponent = dynamic(() =>
	import("@/app/components/pages/defiDashboard/GenericBigTable")
);
import BackIconWhite from "../../../../public/icons/backIconWhite.svg";
import BackIconBlack from "../../../../public/icons/backIconBlack.svg";

function TVL_Ranking() {
	const router = useRouter();
	const { colorMode } = useColorMode();
	const tableName = "DeFi Category by TVL Rankings";
	const thread = [
		"DeFi Category",
		"Available Blockchains",
		"Available DeFi ",
		"TVL",
		"7 Days",
	];
	const tableData = [
		[
			"AAVE V2 ",
			"406",
			"3457",
			"USD 65.930000",
			"/icons/aave_logo.svg",
			"/icons/line_graph.svg",
		],
		[
			"AAVE V3 ",
			"567",
			"8765",
			"USD 65.930000",
			"/icons/aave_logo.svg",
			"/icons/line_graph.svg",
		],
		[
			"Compound",
			"234",
			"76346",
			"USD 35.700000",
			"/icons/compound_logo.svg",
			"/icons/line_graph.svg",
		],
		[
			"JustLend",
			"5634",
			"567",
			"USD 0.023387",
			"/icons/justlend_logo.svg",
			"/icons/line_graph.svg",
		],
		[
			"Venus",
			"12",
			"2376",
			"USD 5.100000",
			"/icons/venus_logo.svg",
			"/icons/line_graph.svg",
		],
		[
			"Morpho Aave",
			"345",
			"8456",
			"USD 0.001782",
			"/icons/morphoaave_logo.svg",
			"/icons/line_graph.svg",
		],
		[
			"Compound V3",
			"876",
			"8734",
			"USD 35.700000",
			"/icons/compoundv3.svg",
			"/icons/line_graph.svg",
		],
		[
			"Radiant V2",
			"3456",
			"436",
			"USD 0.313472",
			"/icons/radiantv2_logo.svg",
			"/icons/line_graph.svg",
		],
		[
			"FluidTokens",
			"123",
			"864",
			"USD 45.90988",
			"/icons/fluidtoken_logo.svg",
			"/icons/line_graph.svg",
		],
		[
			"Trader Joe Lend",
			"876",
			"963",
			"USD 45.90988",
			"/icons/traderjoelend_logo.svg",
			"/icons/line_graph.svg",
		],
	];

	return (
		<Box
			padding={"20px 30px"}
			bgColor={useColorModeValue("#F0F0F5", "#191919")}
			borderColor={useColorModeValue("#F0F0F5", "#191919")}
		>
			<Flex
				cursor={"pointer"}
				ml={"5px"}
				mb={"20px"}
				align={"center"}
				onClick={() => {
					router.push(`/protocol/`);
				}}
			>
				<Icon
					w="24px"
					h="24px"
					as={colorMode === "light" ? BackIconWhite : BackIconBlack}
					mr="6px"
				/>
				<Text
					fontSize={"10px"}
					fontStyle={"normal"}
					fontWeight={"400"}
					lineHeight={"20px"}
					letterSpacing={"1px"}
					textTransform={"uppercase"}
					ml={"5px"}
				>
          BACK
				</Text>
			</Flex>
			<GenericBigTableComponent
				tableName={tableName}
				thread={thread}
				tableData={tableData}
				RowComponent={RowComponent}
			/>
		</Box>
	);
}
export default TVL_Ranking;

function RowComponent({ tableData }) {
	return (
		<>
			{tableData.map((item, i) => {
				return (
					<TableRow
						key={i}
						DeFi={{
							Category: item[0],
							src: item[4],
						}}
						AvailableBlockchains={item[1]}
						AvailableDeFi={item[2]}
						TVL={item[3]}
						Days={{ src: item[5] }}
					/>
				);
			})}
		</>
	);
}

function TableRow({
	key,
	DeFi,
	AvailableBlockchains,
	AvailableDeFi,
	TVL,
}) {
	const [clicked, setClick] = useState(false);
	const { colorMode } = useColorMode();
	return (
		<>
			<Tr
				key={key}
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
					setClick(!clicked);
				}}
				borderBottom={"1px"}
				borderColor={useColorModeValue("#DFDFDF", "#313131")}
				borderRadius={"2px"}
			>
				<Td>
					<Flex>
						<Box alignItems={"center"} display={"flex"} gap={"10px"}>
							<Image
								height={"24px"}
								width={"24px"}
								src={DeFi.src}
								alt="defi_logo"
								// url={"/icons/Ethereum_sm_icon.svg"}
								//  src="/icons/aave_logo.svg"
							></Image>
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
							>
								{DeFi.Category}
							</Text>
						</Box>
					</Flex>
				</Td>

				<Td>
					<Flex>
						<Box>
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
							>
								{AvailableBlockchains}
							</Text>
						</Box>
					</Flex>
				</Td>

				<Td>
					<Flex>
						<Box>
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
							>
								{AvailableDeFi}
							</Text>
						</Box>
					</Flex>
				</Td>

				<Td>
					<Flex>
						<Box>
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
							>
								{TVL}
							</Text>
						</Box>
					</Flex>
				</Td>

				<Td>
					<Flex>
						<Box width={"87px"} height={"23px"}>
							<Image alt="line_graph" src={"/icons/line_graph.svg"}></Image>
						</Box>
					</Flex>
				</Td>
			</Tr>
		</>
	);
}
