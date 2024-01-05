/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import {
	Box,
	Text,
	useColorModeValue,
	useColorMode,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { defiArrayChangedReducer, fetchWalletBalanceData } from "@/redux/wallet_dashboard_data/dataSlice";
import dynamic from "next/dynamic";
const PorfolioAccordion = dynamic(() => import("@components/pages/walletDashboard/portfolioAccordion"));
const DefiTable = dynamic(() => import("@components/pages/walletDashboard/DefiTable"));

const PortfolioPanelComponent = () => {
	const defiArray = ["Wallet"];
	const { colorMode } = useColorMode();
	const dispatch = useDispatch();

	const defiSelected = useSelector((state) => state?.walletDashboardTableData?.defiArraySelected);
	const walletBalanceData = useSelector((state) => state?.walletDashboardTableData?.walletBalanceData);

	const fetchWalletBalanceDataHandler = () => {
		dispatch(fetchWalletBalanceData());
	};

	const DefiArrayHandler = (type) => {
		dispatch(defiArrayChangedReducer(type));
	};

	useEffect(() => {
		fetchWalletBalanceDataHandler();
	}, []);

	return (
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
										: "#FFFFFF"
									: colorMode === "light"
										? "#FFFFFF"
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
											? "#FFFFFF"
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
												: "#FFFFFF"
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
												? (colorMode === "light"
													? "#FFFFFF"
													: "#191919")
												: (colorMode === "light"
													? "#191919"
													: "#FFFFFF")
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
	);
};

export default PortfolioPanelComponent;



