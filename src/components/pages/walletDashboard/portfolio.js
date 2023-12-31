/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import {
	Box,
	Text,
	useColorModeValue,
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionIcon,
	AccordionPanel,
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	Flex,
	Skeleton,
	useColorMode,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	defiArrayChangedReducer,
	fetchWalletBalanceData,
} from "@redux/wallet_dashboard_data/dataSlice";
import dynamic from "next/dynamic";
import Image from "next/image";

const DefiTable = dynamic(() => import("@components/pages/walletDashboard/DefiTable"));

const PortfolioPanelComponent = () => {
	const { colorMode } = useColorMode();
	const dispatch = useDispatch();

	const walletBalanceData = useSelector(
		(state) => state?.walletDashboardTableData?.walletBalanceData
	);

	const fetchWalletBalanceDataHandler = () => {
		dispatch(fetchWalletBalanceData());
	};

	const defiSelected = useSelector(
		(state) => state?.walletDashboardTableData?.defiArraySelected
	);
	const DefiArrayHandler = (type) => {
		dispatch(defiArrayChangedReducer(type));
	};
	const defiArray = ["Wallet"];

	useEffect(() => {
		fetchWalletBalanceDataHandler();
	}, []);

	return (
		<>
			<Box display={"flex"} flexDirection={"column"} px={{ base: 4 }}>
				<Box
					mt="25px"
					borderRadius={"6px"}
					bgColor={useColorModeValue("#FFFFFF", "#202020")}
				>
					<Box
						display={"flex"}
						justifyContent={"space-between"}
						alignItems={"center"}
						py={"18px"}
						px="26px"
					>
						<Box
							display={"flex"}
							justifyContent={"flex-start"}
							alignItems={"center"}
						>
							<Box
								textAlign={"center"}
								p="8px"
								bgColor={
									defiSelected.length === 0
										? colorMode === "light"
											? "#202020"
											: "#FFF"
										: colorMode === "light"
											? "#FFF"
											: "#202020"
								}
								onClick={() => {
									DefiArrayHandler("All");
								}}
								borderRadius={"2px"}
								opacity={defiSelected.length !== 0 ? "0.5" : "1"}
								mr={"10px"}
								cursor={"pointer"}
								border={useColorModeValue(
									"1px solid #979AA5",
									"1px solid #787878"
								)}
							>
								<Text
									fontSize={"14px"}
									fontWeight={defiSelected.length === 0 ? "600" : "400"}
									lineHeight={"20px"}
									color={
										defiSelected.length === 0
											? colorMode === "light"
												? "#FFF"
												: "#191919"
											: colorMode === "light"
												? "#191919"
												: "#FFFFFF"
									}
								>
									All
								</Text>
							</Box>
							{defiArray.map((item, i) => {
								return (
									<Box
										key={i}
										textAlign={"center"}
										p="8px"
										bgColor={
											defiSelected.includes(item)
												? colorMode === "light"
													? "#202020"
													: "#FFF"
												: colorMode === "light"
													? "#FFFFFF"
													: "#202020"
										}
										onClick={() => {
											DefiArrayHandler(item);
										}}
										cursor={"pointer"}
										opacity={defiSelected.includes(item) ? "1" : "0.5"}
										mr={"10px"}
										borderRadius={"2px"}
										_light={{ border: "1px solid #979AA5" }}
										_dark={{ border: "1px solid #787878" }}
									>
										<Text
											fontSize={"14px"}
											fontWeight={defiSelected.includes(item) ? "600" : "400"}
											lineHeight={"20px"}
											color={
												defiSelected.includes(item)
													? colorMode === "light"
														? "#FFF"
														: "#191919"
													: colorMode === "light"
														? "#191919"
														: "#FFFFFF"
											}
										>
											{item}
										</Text>
									</Box>
								);
							})}
						</Box>
					</Box>

					<DefiTable />
				</Box>

				<Box mt={"20px"}>
					<Text fontSize={"16px"} fontWeight={"600"} lineHeight={"20px"}>
						DeFi Positions
					</Text>
				</Box>

				<Box
					flex-shrink={"0"}
					filter={"drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.05))"}
					paddingTop={"10px"}
				>
					<PorfolioAccordion
						name={"Fantom"}
						value={"$15,664,793.04"}
						thread={["Token", "Balance", "Price", "Value (USD)"]}
						tableData={walletBalanceData}
					/>
				</Box>
			</Box>
		</>
	);
};

export default PortfolioPanelComponent;

const PorfolioAccordion = ({ thread, tableData }) => {
	return (
		<>
			<Accordion
				defaultIndex={[0]}
				allowMultiple
				background={useColorModeValue("#FFFFFF", "#202020")}
				mb={"40px"}
				borderRadius={"6px"}
			>
				<AccordionItem>
					<h2>
						<AccordionButton>
							<Box as="span" flex="1" textAlign="left">
								<Box as="span" flex="1" textAlign="left">
									<Flex>
										<Text
											color={useColorModeValue("#202020", "#FFFFFF")}
											fontSize={"14px"}
											fontStyle={"normal"}
											fontWeight={"600"}
											lineHeight={"20px"}
											mt={"5px"}
										>
											Savings
										</Text>
									</Flex>
								</Box>
							</Box>

							<Box
								borderRadius="50%"
								border={useColorModeValue(
									"1px solid #E8E8E8",
									"1px solid #333333"
								)}
								background={useColorModeValue("#D9D9D9", "#191919")}
								ml={"5px"}
							>
								<AccordionIcon margin={"4px"} />
							</Box>
						</AccordionButton>
					</h2>

					<AccordionPanel
						pb={4}
						paddingInlineStart={"1"}
						paddingInlineEnd={"1"}
					>
						<Table
							variant="simple"
							display={{ base: "none", md: "table" }}
							w={"100%"}
						>
							<Thead>
								<Tr
									bg={useColorModeValue("#F5F5F7", "#191919")}
									width={"100%"}
									flex-shrink={"0"}
								>
									{thread.map((item, i) => {
										return (
											<Th
												key={i}
												_light={{
													color: "#16171B",
													opacity: "0.8",
												}}
												_dark={{ color: "#A8ADBD" }}
												fontSize={"14px"}
												fontFamily={"Inter"}
												fontWeight={"400"}
												lineHeight={"20px"}
												letterSpacing={"1px"}
												textTransform={"uppercase"}
												textAlign={"left"}
											>
												{item}
											</Th>
										);
									})}
								</Tr>
							</Thead>

							<Tbody>
								{(tableData?.isError || !tableData?.data?.defiBalance) && (
									<>
										<Tr>
											<Td colSpan={"8"}>
												<Text
													_light={{
														color: "#16171B",
													}}
													_dark={{
														color: "#FF",
													}}
													fontSize={"20px"}
													fontWeight={"400"}
													letterSpacing={"1px"}
													textAlign={"center"}
													p="20px"
													opacity={0.6}
												>
													No Data available
												</Text>
											</Td>
										</Tr>
									</>
								)}

								{tableData?.isLoading && (
									<>
										<SkeletonRow />
										<SkeletonRow />
										<SkeletonRow />
									</>
								)}

								{tableData?.isSuccess &&
									tableData?.data?.defiBalance &&
									tableData?.data?.defiBalance?.map((item, i) => {
										return (
											<Tr key={i}>
												<Td>
													<Flex>
														<Image
															width={24}
															height={24}
															src={item.tokenLogoUrl}
															alt=""
															unoptimized="true"
															priority="true"
														/>
														<Text
															_light={{
																color: "#16171B",
															}}
															_dark={{
																color: "#FFFFFF",
															}}
															fontSize={"14px"}
															fontStyle={"normal"}
															fontWeight={"600"}
															lineHeight={"11px"}
															mt={"10px"}
															ml={"10px"}
														>
															{item.token}
														</Text>
													</Flex>
												</Td>

												<Td>
													<Flex>
														<Text
															_light={{
																color: "#16171B",
															}}
															_dark={{
																color: "#FFFFFF",
															}}
															fontSize={"14px"}
															fontStyle={"normal"}
															fontWeight={"400"}
															lineHeight={"20px"}
														>
															{item.balance}
														</Text>
													</Flex>
												</Td>

												<Td>
													<Flex>
														<Text
															_light={{
																color: "#16171B",
															}}
															_dark={{
																color: "#FFFFFF",
															}}
															fontSize={"14px"}
															fontStyle={"normal"}
															fontWeight={"400"}
															lineHeight={"20px"}
														>
															{item.price}
														</Text>
													</Flex>
												</Td>

												<Td>
													<Flex>
														<Text
															_light={{
																color: "#16171B",
															}}
															_dark={{
																color: "#FFFFFF",
															}}
															fontSize={"14px"}
															fontStyle={"normal"}
															fontWeight={"400"}
															lineHeight={"20px"}
														>
															{(item?.value)?.toLocaleString("en-US", {
																style: "currency",
																currency: "USD",
															})}
														</Text>
													</Flex>
												</Td>
											</Tr>
										);
									})}
							</Tbody>
						</Table>

						{tableData?.isSuccess &&
							tableData?.data?.defiBalance &&
							tableData?.data?.defiBalance?.map((item, i) => {
								return (
									<Box
										key={i}
										display={{ base: "flex", md: "none" }}
										flexDirection={"column"}
										p={2}
									>
										<Box
											display={"flex"}
											alignItems={"start"}
											flexDirection={"column"}
											mb={"15px"}
										>
											<Text
												fontSize={"14px"}
												fontWeight={"400"}
												letterSpacing={"1px"}
												mr={"20px"}
												_light={{
													color: "#8F8F8F",
												}}
												_dark={{
													color: "#ADADAD",
												}}
											>
												Token
											</Text>
											<Flex>
												<Image
													width={24}
													height={24}
													src={item?.tokenLogoUrl}
													alt=""
													unoptimized="true"
													priority="true"
												/>
												<Text
													_light={{
														color: "#16171B",
													}}
													_dark={{
														color: "#FFFFFF",
													}}
													fontSize={"14px"}
													fontStyle={"normal"}
													fontWeight={"600"}
													lineHeight={"11px"}
													mt={"10px"}
													ml={"10px"}
												>
													{item?.token}
												</Text>
											</Flex>
										</Box>
										<Box
											display={"flex"}
											alignItems={"start"}
											flexDirection={"column"}
											mb={"15px"}
										>
											<Text
												fontSize={"14px"}
												fontWeight={"400"}
												letterSpacing={"1px"}
												mr={"20px"}
												_light={{
													color: "#8F8F8F",
												}}
												_dark={{
													color: "#ADADAD",
												}}
											>
												Balance
											</Text>
											<Text
												_dark={{
													color: "#FFF",
												}}
												_light={{
													color: "#16171B",
												}}
												fontSize={"14px"}
												fontWeight={"400"}
												letterSpacing={"1px"}
											></Text>
										</Box>
										<Box
											display={"flex"}
											alignItems={"start"}
											flexDirection={"column"}
											mb={"15px"}
										>
											<Text
												fontSize={"14px"}
												fontWeight={"400"}
												letterSpacing={"1px"}
												mr={"20px"}
												_light={{
													color: "#8F8F8F",
												}}
												_dark={{
													color: "#ADADAD",
												}}
											>
												% Share
											</Text>
											<Text
												_dark={{
													color: "#FFF",
												}}
												_light={{
													color: "#16171B",
												}}
												fontSize={"14px"}
												fontWeight={"400"}
												letterSpacing={"1px"}
											></Text>
										</Box>
									</Box>
								);
							})}
					</AccordionPanel>
				</AccordionItem>
			</Accordion>
		</>
	);
};

const SkeletonRow = () => (
	<Box as="tr">
		<Td>
			<Skeleton height="20px" my={4} />
		</Td>
		<Td>
			<Skeleton height="20px" my={4} />
		</Td>
		<Td>
			<Skeleton height="20px" my={4} />
		</Td>
	</Box>
);
