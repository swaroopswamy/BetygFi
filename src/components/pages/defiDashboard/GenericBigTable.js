"use client";
import {
	Input,
	Table,
	Text,
	Tbody,
	Tfoot,
	Th,
	Thead,
	Tr,
	Flex,
	Box,
	useColorModeValue,
	Image,
	useColorMode,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { blockchainTypeChangedReducer } from "@/redux/wallet_dashboard_data/dataSlice";
import { fetchBlockchainListData } from "@/redux/app_data/dataSlice";
import PageButtons from "@components/pageButtons";

const GenericBigTableComponent = ({
	tableName,
	thread,
	tableData,
	RowComponent,
}) => {
	const { colorMode } = useColorMode();

	return (
		<>
			<Box
				border={"2px"}
				borderColor={useColorModeValue("#FFFFFF", "#202020")}
				borderRadius={"6px"}
				mb={"30px"}
			>
				<Box
					display={"flex"}
					justifyContent={"space-between"}
					alignItems={"center"}
					padding={"8px 30px 8px 30px"}
					background={useColorModeValue("#FFFFFF", "#202020")}
				>
					<Box>
						<Text
							color={useColorModeValue("#16171B", "#FFFFFF")}
							//pr={"10px"}
							mb={"20px"}
							mt={"20px"}
							fontSize={"18px"}
							fontWeight={"600"}
							lineHeight={"20px"}
						>
							{tableName}
						</Text>
					</Box>

					<Box display={"flex"} alignItems={"center"} gap={"10px"}>
						<SelectionBox colorMode={colorMode} />

						<Input
							borderColor={useColorModeValue("#E8E8E8", "#333")}
							bgColor={useColorModeValue("#F5F5F7", "#191919")}
							color={useColorModeValue("#16171B", "#A8ADBD")}
							fontSize={"10px"}
							fontWeight={400}
							lineHeight={"20px"}
							letterSpacing={"1.2px"}
							textTransform={"capitalize"}
							w="207px"
							placeholder="Search"
						// onChange={(e) => {
						// 	searchAssetByNameHandler(e.target.value);
						// }}
						/>
					</Box>
				</Box>

				<Table
					variant="unstyled"
					size={"sm"}
					border={"1px"}
					borderColor={useColorModeValue("#FFFFFF", "#272727")}
					borderRadius={"6px"}
				>
					<Thead>
						<Tr
							bg={useColorModeValue("#F5F5F7", "#131313")}
							width={"20%"}
							fontSize={"14px"}
							fontFamily={"Inter"}
							fontWeight={400}
							flex-shrink={"0"}
							borderRadius={"6px"}
							textTransform={"capitalize"}
						>
							{thread.map((item, i) => {
								return <ThreadItem key={i} name={item} />;
							})}
						</Tr>
					</Thead>

					<Tbody>
						<RowComponent tableData={tableData} />
					</Tbody>
					<Tfoot></Tfoot>
				</Table>

				<PageButtons />
			</Box>
		</>
	);
};

export default GenericBigTableComponent;

function ThreadItem({ key, name }) {
	return (
		<>
			<Th
				key={key}
				_light={{
					color: "#16171B",
					opacity: "0.8",
				}}
				_dark={{ color: "#A8ADBD" }}
				fontSize={"14px"}
				fontFamily={"Inter"}
				fontStyle={"normal"}
				fontWeight={"400"}
				lineHeight={"20px"}
				letterSpacing={"1px"}
				textTransform={"capitalize"}
				textAlign={"left"}
			>
				<Flex>
					{name}
					{/* Add an image next to the text */}
					<Image
						mt={"2px"}
						src={useColorModeValue(
							"/images/Arrowdown(light).svg",
							"/images/Arrowdown(dark).svg"
						)}
						alt="Users"
						ml="2"
					/>
				</Flex>
			</Th>
		</>
	);
}

function SelectionBox({ colorMode }) {
	const dispatch = useDispatch();
	const blockchainListData = useSelector(
		(state) => state?.appData?.BlockchainListData
	);

	const blockchainSelected = useSelector(
		(state) => state?.walletDashboardTableData?.blockchainType
	);
	const BlockchainTypeHandler = (type) => {
		dispatch(blockchainTypeChangedReducer(type));
	};

	useEffect(() => {
		dispatch(fetchBlockchainListData());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<Box display={"flex"} flexDirection={"column"}>
				<Box w={"100%"} display={"flex"} alignItems={"center"}>
					<Box
						position={"relative"}
						cursor={"pointer"}
						fontSize={"14px"}
						fontWeight={blockchainSelected.length === 0 ? "700" : "400"}
						letterSpacing={"1px"}
						lineHeight={"20px"}
						color={useColorModeValue("#3A3A3A", "#FFFFFF")}
						_after={
							blockchainSelected.length === 0 && {
								position: "absolute",
								content: '""',
								bottom: "-14px",
								left: 0,
								width: "100%",
								height: "1px",
								bgColor: colorMode === "light" ? "#191919" : "#FFFFFF",
							}
						}
						onClick={() => {
							BlockchainTypeHandler("All");
						}}
						mr={"18px"}
					//textTransform={"lowercase"}
					>
						All
					</Box>
					{blockchainListData.isSuccess &&
						blockchainListData.data.map((item, i) => {
							if (i >= 4) return;
							return (
								<Box
									position={"relative"}
									cursor={"pointer"}
									key={i}
									_after={
										blockchainSelected.includes(item.name) && {
											position: "absolute",
											content: '""',
											bottom: "-14px",
											left: 0,
											width: "100%",
											height: "1px",
											bgColor: colorMode === "light" ? "#191919" : "#FFFFFF",
										}
									}
									onClick={() => {
										BlockchainTypeHandler(item.name);
									}}
									mr={"10px"}
									display={"flex"}
									alignItems={"center"}
								>
									<Image
										w={"20px"}
										h={"20px"}
										mr={"11px"}
										src={item.logoUrl}
										alt=""
									></Image>
									<Text
										fontSize={"14px"}
										fontWeight={
											blockchainSelected.includes(item.name) ? "700" : "400"
										}
										lineHeight={"21.826px"}
										letterSpacing={"1.4px"}
										color={
											colorMode === "light"
												? blockchainSelected.includes(item.name)
													? "#191919"
													: "#191919"
												: blockchainSelected.includes(item.name)
													? "#FFFFFF"
													: "#FFFFFF"
										}
									//textTransform="uppercase"
									>
										{item.name}
									</Text>
								</Box>
							);
						})}
				</Box>
			</Box>
		</>
	);
}
