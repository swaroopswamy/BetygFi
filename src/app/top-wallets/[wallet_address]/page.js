"use client";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import {
	Box,
	TabPanel,
	TabPanels,
	Tabs,
	useColorModeValue,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
	fetchAssetAllocationForAddress,
	fetchBlockchainAllocationForAddress,
	fetchProtocolAllocationForAddress,
	fetchInflowOutflowTokensForAddress,
	fetchWalletBalanceData,
	walletAddressChangedReducer,
} from "@/redux/wallet_dashboard_data/dataSlice";
import { fetchBlockchainListData } from "@/redux/app_data/dataSlice";

const PortfolioPanelComponent = dynamic(() => import("@components/pages/walletDashboard/portfolio.js"));
const WalletAnalyticsPanel = dynamic(() => import("@components/pages/walletDashboard/wallet_analytics"));
const TransactionPanelComponent = dynamic(() => import("@components/pages/walletDashboard/transaction"));
const Breadcrumb = dynamic(() => import("@components/breadcrumb"));
const HeaderComponent = dynamic(() => import("@components/pages/walletDashboard/HeaderComponent"));
const DashboardTabList = dynamic(() => import("@components/pages/walletDashboard/DashboardTabList"));
const BlockchainSelectionMenuBlocks = dynamic(() => import("@components/blockchainSelectionMenuBlocks"));

export default function WalletDashboardPage({ params }) {
	const searchParamAddress = params?.wallet_address;
	const dispatch = useDispatch();
	const [tabIndex, setTabIndex] = useState(0);

	const blockchainSelected = useSelector(
		(state) => state?.walletDashboardTableData?.blockchainType
	);
	const walletAddress = useSelector(
		(state) => state?.walletDashboardTableData?.walletAddress
	);

	const walletBalanceData = useSelector(
		(state) => state?.walletDashboardTableData?.walletBalanceData?.data
	);

	const fetchWalletBalanceDataHandler = (blockchainSelected, searchParamAddress) => {
		const data = {
			payload: {
				blockchain: blockchainSelected,
			},
		};
		if (searchParamAddress && searchParamAddress !== '') {
			data.address = searchParamAddress;
		}
		dispatch(fetchWalletBalanceData(data));
	};

	const fetchAssetAllocationForAddressHandler = () => {
		const data = {
			address: searchParamAddress,
		};
		dispatch(fetchAssetAllocationForAddress(data));
	};

	const fetchProtocolAllocationForAddressHandler = () => {
		const data = {
			address: searchParamAddress,
		};
		dispatch(fetchProtocolAllocationForAddress(data));
	};

	const fetchBlockchainAllocationForAddressHandler = () => {
		const data = {
			address: searchParamAddress,
		};
		dispatch(fetchBlockchainAllocationForAddress(data));
	};

	const fetchInflowOutflowTokensForAddressHandler = () => {
		const data = {
			address: searchParamAddress,
		};
		dispatch(fetchInflowOutflowTokensForAddress(data));
	};

	useEffect(() => {
		// Promise.all([
		fetchWalletBalanceDataHandler(blockchainSelected, searchParamAddress);
		if (searchParamAddress && searchParamAddress !== '') {
			fetchAssetAllocationForAddressHandler();
			fetchProtocolAllocationForAddressHandler();
			fetchBlockchainAllocationForAddressHandler();
			fetchInflowOutflowTokensForAddressHandler();
		}
		// ]);
	}, [blockchainSelected, searchParamAddress]);

	useEffect(() => {
		dispatch(fetchBlockchainListData());
		if (searchParamAddress && searchParamAddress !== '') {
			dispatch(walletAddressChangedReducer(searchParamAddress));
		}
	}, []);

	useEffect(() => {
		if (walletBalanceData?.isQueryInPendingState) {
			setTimeout(() => {
				fetchWalletBalanceDataHandler(blockchainSelected, searchParamAddress);
			}, 5000);
		}
	}, [walletBalanceData]);

	return (
		<>
			<Box
				bgColor={useColorModeValue("#FFFFFF", "#131313")}
				layerStyle={"flexColumn"}
				w="100%"
			>
				<Breadcrumb
					link="/top-wallets"
					text="Top Wallets/"
					additionalText={walletBalanceData?.name}
				/>
				<HeaderComponent
					walletBalanceData={walletBalanceData}
					walletAddress={walletAddress}
				/>

				<Box>
					<Tabs onChange={(index) => setTabIndex(index)}>
						<DashboardTabList tabIndex={tabIndex} />
						<Box
							bgColor={useColorModeValue("#F0F0F5", "#191919")}
							padding={{ base: "0px", md: "32px" }}
						>
							<Box display={"flex"} flexDirection={"column"}>
								<BlockchainSelectionMenuBlocks />
							</Box>
							<TabPanels bgColor={useColorModeValue("#F0F0F5", "#191919")}>
								<TabPanel
									p="0px"
									bgColor={useColorModeValue("#F0F0F5", "#191919")}
								>
									<TransactionPanelComponent
										searchParamAddress={searchParamAddress}
									/>
								</TabPanel>
								<TabPanel
									p="0px"
									bgColor={useColorModeValue("#F0F0F5", "#191919")}
								>
									<PortfolioPanelComponent />
								</TabPanel>
								<TabPanel
									p="0px"
									bgColor={useColorModeValue("#F0F0F5", "#191919")}
								>
									<WalletAnalyticsPanel />
								</TabPanel>
							</TabPanels>
						</Box>
					</Tabs>
				</Box>
			</Box>
		</>
	);
}
