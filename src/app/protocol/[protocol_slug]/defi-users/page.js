"use client";
import React, { useState } from "react";
import {
	Icon,
	Text,
	Td,
	Tr,
	Flex,
	Box,
	useColorModeValue,
	Image,
	useColorMode,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import BackIconWhite from "/public/icons/backIconWhite.svg";
import BackIconBlack from "/public/icons/backIconBlack.svg";
import dynamic from "next/dynamic";
const GenericBigTableComponent = dynamic(() => import('@components/pages/defiDashboard/GenericBigTable'));

function DefiUsers() {
	const router = useRouter();
	const { colorMode } = useColorMode();
	const tableName = "DeFi Users";
	const thread = ["Users", "Deposited", "Borrowed", "Assets", "Share"];
	const tableData = [
		[
			"/images/Ethereumlogo.svg",
			"AAVE V2 ",
			"USD 65.930000",
			"USD 356,456,560",
			"/images/Ethlogo(withbackground).svg",
			"/images/Tron&Binancelogo(withbackground).svg",
			"/images/Arbitrumlogo(withbackground).svg",
			"/images/Ellipselogo(withbackground).svg",
			"/images/Polygonlogo(withbackground).svg",
			"/images/SquareEllipselogo(withbackground).svg",
			"60%",
		],
		[
			"/images/Tronlogo.svg",
			"AAVE V3 ",
			"USD 65.930000",
			"USD 1,434,771,959",
			"/images/Ethlogo(withbackground).svg",
			"/images/Tron&Binancelogo(withbackground).svg",
			"/images/Arbitrumlogo(withbackground).svg",
			"/images/Ellipselogo(withbackground).svg",
			"/images/Polygonlogo(withbackground).svg",
			"/images/SquareEllipselogo(withbackground).svg",
			"56%",
		],
		[
			"/images/Binancelogo.svg",
			"Compound",
			"USD 35.700000",
			"USD 1,284,778,438",
			"/images/Ethlogo(withbackground).svg",
			"/images/Tron&Binancelogo(withbackground).svg",
			"/images/Arbitrumlogo(withbackground).svg",
			"/images/Ellipselogo(withbackground).svg",
			"/images/Polygonlogo(withbackground).svg",
			"/images/SquareEllipselogo(withbackground).svg",
			"45%",
		],
		[
			"/images/Arbitrumlogo.svg",
			"JustLend",
			"USD 0.023387",
			"USD 3,740,295,842",
			"/images/Ethlogo(withbackground).svg",
			"/images/Tron&Binancelogo(withbackground).svg",
			"/images/Arbitrumlogo(withbackground).svg",
			"/images/Ellipselogo(withbackground).svg",
			"/images/Polygonlogo(withbackground).svg",
			"/images/SquareEllipselogo(withbackground).svg",
			"40%",
		],
		[
			"/images/Polygonmaticlogo.svg",
			"Venus",
			"USD 5.100000",
			"USD 802,259,792",
			"/images/Ethlogo(withbackground).svg",
			"/images/Tron&Binancelogo(withbackground).svg",
			"/images/Arbitrumlogo(withbackground).svg",
			"/images/Ellipselogo(withbackground).svg",
			"/images/Polygonlogo(withbackground).svg",
			"/images/SquareEllipselogo(withbackground).svg",
			"25%",
		],
		[
			"/images/Ethereumlogo.svg",
			"Morpho Aave",
			"USD 0.001782",
			"USD 315,485,747",
			"/images/Ethlogo(withbackground).svg",
			"/images/Tron&Binancelogo(withbackground).svg",
			"/images/Arbitrumlogo(withbackground).svg",
			"/images/Ellipselogo(withbackground).svg",
			"/images/Polygonlogo(withbackground).svg",
			"/images/SquareEllipselogo(withbackground).svg",
			"20%",
		],
		[
			"/images/Tronlogo.svg",
			"Compound V3",
			"USD 35.700000",
			"USD 563,991,620",
			"/images/Ethlogo(withbackground).svg",
			"/images/Tron&Binancelogo(withbackground).svg",
			"/images/Arbitrumlogo(withbackground).svg",
			"/images/Ellipselogo(withbackground).svg",
			"/images/Polygonlogo(withbackground).svg",
			"/images/SquareEllipselogo(withbackground).svg",
			"16%",
		],
		[
			"/images/Binancelogo.svg",
			"Radiant V2",
			"USD 0.313472",
			"USD 259,911,221",
			"/images/Ethlogo(withbackground).svg",
			"/images/Tron&Binancelogo(withbackground).svg",
			"/images/Arbitrumlogo(withbackground).svg",
			"/images/Ellipselogo(withbackground).svg",
			"/images/Polygonlogo(withbackground).svg",
			"/images/SquareEllipselogo(withbackground).svg",
			"14%",
		],
		[
			"/images/Arbitrumlogo.svg",
			"FluidTokens",
			"NA",
			"USD 234,308",
			"/images/Ethlogo(withbackground).svg",
			"/images/Tron&Binancelogo(withbackground).svg",
			"/images/Arbitrumlogo(withbackground).svg",
			"/images/Ellipselogo(withbackground).svg",
			"/images/Polygonlogo(withbackground).svg",
			"/images/SquareEllipselogo(withbackground).svg",
			"12%",
		],
		[
			"/images/Polygonmaticlogo.svg",
			"Trader Joe Lend",
			"USD 0.379546",
			"USD 7,562,768",
			"/images/Ethlogo(withbackground).svg",
			"/images/Tron&Binancelogo(withbackground).svg",
			"/images/Arbitrumlogo(withbackground).svg",
			"/images/Ellipselogo(withbackground).svg",
			"/images/Polygonlogo(withbackground).svg",
			"/images/SquareEllipselogo(withbackground).svg",
			"10%",
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
					router.push(
						`/protocol/aave-v2`
						// `/defi_dashboard?defi=aave-v2&id=64dd07303aadfa8bc5badabc`
					);
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

export default DefiUsers;

function RowComponent({ tableData }) {
	return (
		<>
			{tableData.map((item, i) => {
				return (
					<TableRow
						key={i}
						item={item}
						users={{ name: item[1], src: item[0] }}
						deposited={item[2]}
						borrowed={item[3]}
						assets={[item[4], item[5], item[6], item[7], item[8], item[9]]}
						share={item[10]}
					/>
				);
			})}
		</>
	);
}

function TableRow({ key, users, deposited, borrowed, assets, share }) {
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
								src={users.src}
								alt="logo"
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
								{users.name}
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
								{deposited}
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
								{borrowed}
							</Text>
						</Box>
					</Flex>
				</Td>

				<Td>
					<Flex>
						<Box>
							<Flex gap={"-10px"}>
								{assets.map((item, i) => {
									return (
										<Box key={i}>
											<Image alt={""} key={i} src={assets[i]}></Image>
										</Box>
									);
								})}
							</Flex>
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
								{share}
							</Text>
						</Box>
					</Flex>
				</Td>
			</Tr>
		</>
	);
}
