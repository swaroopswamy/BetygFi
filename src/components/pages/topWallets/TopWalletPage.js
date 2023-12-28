"use client";
import React from "react";
import {
	Box,
	Text,
	useColorModeValue,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
const WalletTable = dynamic(() => import("@components/pages/topWallets/walletTable"));

const WalletDashboardPage = () => {
	return (
		<Box
			bgColor={useColorModeValue("#F5F5F7", "#131313")}
			layerStyle={"flexColumnSpaceBetween"}
		>
			<Box
				layerStyle={"flexSpaceBetween"}
				padding={"38px 30px 0px 30px"}
				bgColor={useColorModeValue("#FFFFFF", "#131313")}
			>
				<Box layerStyle={"flexColumnSpaceBetween"}>
					<Text variant={"contentHeading"} lineHeight={"20px"}>
						Top Wallets
					</Text>

					<Box
						display={{ base: "none", md: "block" }}
						layerStyle={"flexCenter"}
						mt={"13px"}
					>
						<Text variant={"TopWalletsText"} paddingBottom={"30px"}>
							BetygFi have filtered and identified a comprehensive collection of
							significant wallet addresses, enabling you to effortlessly monitor
							and analyze critical on-chain events and transactions.
						</Text>
					</Box>
				</Box>
			</Box>

			<Box
				layerStyle={"flexColumnSpaceBetween"}
				padding={{ base: "15px", md: "10px 30px 50px 30px" }}
				bgColor={useColorModeValue("#F0F0F5", "#191919")}
			>
				<Box
					pt={{ base: "0", md: "20px" }}
					bgColor={useColorModeValue("#F0F0F5", "#191919")}
				>
					<WalletTable />
				</Box>
			</Box>
		</Box>
	);
};

export default WalletDashboardPage;
