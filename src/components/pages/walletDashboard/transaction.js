/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import {
	Text,
	useColorModeValue,
	Box,
	Tooltip,
	Tr,
	Th,
	Td,
	Flex,
	Link,
	useColorMode,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment/moment";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import React, { useEffect, useState, useCallback } from "react";
import dynamic from "next/dynamic";
import { fetchWalletTransactionsData } from "@redux/wallet_dashboard_data/dataSlice";
import { tableHeader, TransactionTableDesktop, TransactionTableMobile, } from "@components/pages/walletDashboard/helper";
import Image from "next/image";


//import CustomAvatar from "@components/avatar";
const CustomAvatar = dynamic(() => import("@components/avatar"), { ssr: false });
const GenericTable = dynamic(() => import("@components/table"), { ssr: false });
const PageButtonsWide = dynamic(() => import("@components/pageButtonsWide"), { ssr: false });

const TransactionPanelComponent = ({ searchParamAddress }) => {
	const dispatch = useDispatch();
	const [tablePage, setTablePage] = useState(1);
	const [tableLimit, setTableLimit] = useState(10);

	const walletTransactionsData = useSelector((state) => state?.walletDashboardTableData?.walletTransactionsData);

	const blockchainSelected = useSelector((state) => state?.walletDashboardTableData?.blockchainType);

	const pageChangeHandler = (page) => {
		if (page == "") {
			setTablePage(page);
		}
		if (page >= 1) {
			setTablePage(page);
		}
	};

	const fetchWalletTransactionsDataHandler = useCallback(() => {
		const data = {
			payload: {
				blockchain: blockchainSelected,
				limit: tableLimit,
				page: tablePage,
			},
		};
		if (searchParamAddress && searchParamAddress !== '') {
			data.address = searchParamAddress;
		}
		if (tablePage != "") {
			setTimeout(() => {
				dispatch(fetchWalletTransactionsData(data));
			}, 1500);
		}
	}, [blockchainSelected, tablePage, searchParamAddress, tableLimit, setTablePage]);

	useEffect(() => {
		fetchWalletTransactionsDataHandler();
	}, [fetchWalletTransactionsDataHandler]);

	const pageMenuList = [
		{ value: 10 },
		{ value: 20 },
		{ value: 50 },
	];

	return (
		<Box
			w={"100%"}
			pt="25px"
			borderRadius={"6px"}
			bgColor={useColorModeValue("#F0F0F5", "#191919")}
			px={"2px"}
			overflow={"auto"}
			mb="20px"
		>
			<Flex
				py={{ base: "20px", md: "25px" }}
				px={{ base: "10px", md: "25px" }}
				mx={{ base: "10px", md: "0px" }}
				borderRadius={"6px"}
				bgColor={useColorModeValue("#FFF", "#202020")}
				display={"block"}
			>
				<Text variant={"h2"} textTransform={"capitalize"}>
					Wallet Transaction
				</Text>
			</Flex>

			<Box overflow={"auto"} px={{ base: "10px", md: "0px" }}>
				<GenericTable
					tableHeader={tableHeader}
					tableData={walletTransactionsData}
					TableRow={TableRow}
					TableHeaderRowMobile={TableHeaderRowMobile}
					ButtonComp={TableBodyRowMobileButtonComp}
					PanelComp={TableBodyRowMobilePanelComp}
					SkeletonRowsColumnsDesktop={TransactionTableDesktop}
					SkeletonRowsColumnsMobile={TransactionTableMobile}
					bigTable={true}
				/>
			</Box>

			<Box display={"flex"} alignItems={"center"} bgColor={useColorModeValue('#FFFFFF', '#202020')}
				minH={"60px"} p={{ base: "10px", md: "5px 20px" }}>
				<PageButtonsWide
					page={tablePage}
					totalPages={walletTransactionsData?.data?.totalPages}
					pageChangeHandler={pageChangeHandler}
					tableLimit={tableLimit}
					setTableLimit={setTableLimit}
					time={3}
					pageMenuList={pageMenuList}
					w={"100%"}
				/>
			</Box>
		</Box>
	);
};

const TableRow = ({ item, rowIndex }) => {
	const { colorMode } = useColorMode();
	const walletAddress = useSelector((state) => state?.walletDashboardTableData?.walletAddress);
	const commonStyleTdProp = {
		_light: { bgColor: "#FFFFFF", },
		_dark: { bgColor: "#202020", }
	};
	return (
		<Tr key={rowIndex}>
			<Td {...commonStyleTdProp}>
				<Box layerStyle={"flexCenter"} gap={"10px"}>
					<Tooltip label={item?.blockchain}>
						<Image
							width={18}
							height={18}
							// unoptimized="true"
							// priority="true"
							src={item.logoUrl}
							alt={`${item?.blockchain}_icon`}
							style={{ borderRadius: "50%", marginRight: "3px" }}
						/>
					</Tooltip>

					<Box w={"100%"}>
						<Text variant={"h3"} ml="6px">
							{walletAddress?.split("").join("").substring(0, 8) +
								"......" +
								walletAddress?.slice(-5)}
						</Text>
						<Text
							opacity={"0.6000000238418579"}
							variant={"h5"}
							ml="6px"
							_light={{ color: "#16171B" }}
							_dark={{ color: "#FFFFFF" }}
						>
							{moment.unix(item?.timeStamp).format("Do MMM YYYY")}
						</Text>
					</Box>
				</Box>
			</Td>

			<Td {...commonStyleTdProp}>
				<Box layerStyle={"flexCenter"}>
					<Link
						fontSize={"14px"}
						ml="4px"
						layerStyle={"flexCenter"}
						_dark={{
							color: "#FFF",
						}}
						_light={{
							color: "#6F7383",
						}}
						isExternal
						href={item?.blockExplorerUrl}
					>
						{item?.hash.substring(0, 0)}
						<ExternalLinkIcon mx="4px" />
						<Text
							variant={"h3"}
							_dark={{
								opacity: "0.6",
							}}
							textTransform={"capitalize"}
						>
							{item?.functionName?.split("(")[0]}
						</Text>
					</Link>
				</Box>
			</Td>

			<Td {...commonStyleTdProp}>
				<Box layerStyle={"flexCenter"}>
					<CustomAvatar
						width={"18px"}
						height={"18px"}
						name={item?.tokenSymbol ?? "logo"}
						src={item?.tokenUrl}
						style={{ borderRadius: "50%" }}
					/>

					<Text variant={"h3"} ml="6px">
						{Number(item?.value).toFixed(2)}
					</Text>

					<Text variant={"h3"} letterSpacing={"1px"} ml="6px">
						{item?.tokenSymbol}
					</Text>
				</Box>
			</Td>

			<Td {...commonStyleTdProp}>
				<Tooltip label={item?.to}>
					<Box layerStyle={"flexCenter"}>
						<Text variant={"h3"} letterSpacing={"1px"} w="95px">
							{item?.to.split("").join("").substring(0, 6) +
								"..." +
								item?.to.slice(-5)}
						</Text>
					</Box>
				</Tooltip>
			</Td>

			<Td {...commonStyleTdProp}>
				<Tooltip label={item?.from}>
					<Box layerStyle={"flexCenter"}>
						<Text variant={"h3"} letterSpacing={"1px"} w="95px">
							{item?.from.split("").join("").substring(0, 6) +
								"..." +
								item?.from.slice(-5)}
						</Text>
					</Box>
				</Tooltip>
			</Td>

			<Td {...commonStyleTdProp}>
				<Box layerStyle={"flexCenter"}>
					<Text
						fontSize={"14px"}
						fontWeight={"600"}
						ml="4px"
						color={
							item?.usdValue >= 0
								? colorMode === "light"
									? "#245F00"
									: "#60C000"
								: colorMode === "light"
									? "#EF1E1E"
									: "#FF3535"
						}
					>
						{item?.usdValue >= 0 ? "+" : "-"}
						{item?.usdValue} USD
					</Text>
				</Box>
			</Td>
		</Tr>
	);
};

const TableHeaderRowMobile = () => {
	return (
		<Tr>
			<Th colSpan={2} _light={{ bgColor: "#F5F5F7", }} _dark={{ bgColor: "#191919", }}>
				<Box layerStyle={"spaceBetween"}>
					<Text
						_light={{
							opacity: "0.8",
						}}
						variant={"h3"}
						textTransform={"capitalize"}
					>
						Address And Date
					</Text>
					<Text
						_light={{
							color: "#16171B",
						}}
						variant={"h3"}
						textTransform={"capitalize"}
					>
						USD Value
					</Text>
				</Box>
			</Th>
		</Tr>
	);
};

const TableBodyRowMobileButtonComp = ({ item }) => {
	const { colorMode } = useColorMode();
	const walletAddress = useSelector(
		(state) => state?.walletDashboardTableData?.walletAddress
	);
	return (
		<Box display={"flex"} w="100%" justifyContent={"space-between"}>
			<Box
				display={"flex"}
				//flexDirection={"column"}
				alignItems={"center"}
				justifyContent={"space-between"}
			>
				<Image
					width={5}
					height={5}
					alt="logo"
					// unoptimized="true"
					// priority="true"
					style={{ borderRadius: "50%" }}
					src={item?.logoUrl}
				/>
				<Box flexDirection={"row"} justifyContent={"space-between"}>
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
						ml="6px"
					>
						{walletAddress?.split("").join("").substring(0, 6) +
							"..." +
							walletAddress?.slice(-5)}
					</Text>
					<Text
						opacity={"0.6000000238418579"}
						_dark={{
							color: "#FFF",
						}}
						_light={{
							color: "#16171B",
						}}
						fontSize={"12px"}
						fontWeight={"400"}
						letterSpacing={"1px"}
						ml="6px"
						textAlign={"left"}
					>
						{moment.unix(item?.timeStamp).format("Do MMM YYYY")}
					</Text>
				</Box>
			</Box>
			<Box display={"flex"} alignItems={"end"} justifyContent={"space-between"}>
				<Text
					fontSize={"14px"}
					fontWeight={"400"}
					letterSpacing={"1px"}
					mb="10px"
					mr={"20px"}
					color={
						item?.usdValue >= 0
							? colorMode === "light"
								? "#245F00"
								: "#60C000"
							: colorMode === "light"
								? "#EF1E1E"
								: "#FF3535"
					}
				>
					{item?.usdValue >= 0 ? "+" : "-"}
					{item?.usdValue} USD
				</Text>
			</Box>
		</Box>
	);
};
const TableBodyRowMobilePanelComp = ({ item }) => (
	<Box display={"flex"} mt={"20px"} >
		<Box display={"flex"} flexDirection={"column"} gap={4} w={"40%"}>
			<Text
				_light={{
					color: "#434347",
				}}
				_dark={{
					color: "#A8ADBD",
				}}
				fontSize={"14px"}
				fontWeight={400}
				letterSpacing={"1.4px"}
				lineHeight={"20px"}
				alignItems={"center"}
				textTransform={"capitalize"}
			>
				Method
			</Text>
			<Text
				_light={{
					color: "#434347",
				}}
				_dark={{
					color: "#A8ADBD",
				}}
				fontSize={"14px"}
				fontWeight={400}
				letterSpacing={"1.4px"}
				lineHeight={"20px"}
				mr="6px"
				textTransform={"capitalize"}
			>
				Amount / Token
			</Text>
			<Text
				_light={{
					color: "#434347",
				}}
				_dark={{
					color: "#A8ADBD",
				}}
				fontSize={"14px"}
				fontWeight={400}
				letterSpacing={"1.4px"}
				lineHeight={"20px"}
				textTransform={"capitalize"}
			>
				From
			</Text>
			<Text
				_light={{
					color: "#434347",
				}}
				_dark={{
					color: "#A8ADBD",
				}}
				fontSize={"14px"}
				fontWeight={400}
				letterSpacing={"1.4px"}
				lineHeight={"20px"}
				textTransform={"capitalize"}
			>
				To
			</Text>
		</Box>
		<Box display={"flex"} flexDirection={"column"} gap={4} w={"60%"}>
			<Link
				fontSize={"14px"}
				fontWeight={"400"}
				fontStyle={"normal"}
				letterSpacing={"1px"}
				ml="4px"
				display={"flex"}
				alignItems={"center"}
				_dark={{
					color: "#FFF",
				}}
				_light={{
					color: "#16171B",
				}}
				isExternal
				href={item?.blockExplorerUrl}
			>
				{item?.hash.substring(0, 0)}
				<ExternalLinkIcon mx="4px" />
				<Text
					color={"#16171B"}
					fontSize={"14px"}
					fontWeight={500}
					lineHeight={"20px"}
					_dark={{
						color: "#FFF",
					}}
					_light={{
						color: "#16171B",
					}}
					textTransform={"capitalize"}
				>
					{item?.functionName?.split("(")[0]}
				</Text>
			</Link>
			<Box display={"flex"} alignItems={"center"}>
				<Image
					width={5}
					height={5}
					alt="logo"
					src={item?.tokenUrl}
					// unoptimized="true"
					// priority="true"
					style={{ borderRadius: "50%" }}
				/>

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
					ml="6px"
				>
					{item?.tokenSymbol}
				</Text>
				<Text
					opacity={"0.6000000238418579"}
					_dark={{
						color: "#FFF",
					}}
					_light={{
						color: "#16171B",
					}}
					fontSize={"14px"}
					fontWeight={400}
					letterSpacing={"1px"}
					ml="6px"
				>
					{Number(item?.value).toFixed(2)}
				</Text>
			</Box>
			<Box display={"flex"} alignItems={"center"}>
				<Link
					fontSize={"14px"}
					fontWeight={"400"}
					fontStyle={"normal"}
					letterSpacing={"1px"}
					ml="4px"
					layerStyle={"flexCenter"}
					isExternal
					href={item?.blockExplorerUrl}
				>
					<Text
						_dark={{
							color: "#117CCA",
						}}
						_light={{
							color: "#117CCA",
						}}
						fontSize={"14px"}
						fontWeight={"400"}
						letterSpacing={"1px"}
						w="95px"
					>
						{item?.from.split("").join("").substring(0, 6) +
							"..." +
							item?.from.slice(-5)}
					</Text>
				</Link>
			</Box>
			<Box display={"flex"} alignItems={"center"}>
				<Link
					fontSize={"14px"}
					fontWeight={"400"}
					fontStyle={"normal"}
					letterSpacing={"1px"}
					ml="4px"
					layerStyle={"flexCenter"}
					isExternal
					href={item?.blockExplorerUrl}
				>
					<Text
						_dark={{
							color: "#117CCA",
						}}
						_light={{
							color: "#117CCA",
						}}
						fontSize={"14px"}
						fontWeight={"400"}
						letterSpacing={"1px"}
						w="95px"
					>
						{item?.to.split("").join("").substring(0, 6) +
							"..." +
							item?.to.slice(-5)}
					</Text>
				</Link>
			</Box>
		</Box>
	</Box>
);
export default TransactionPanelComponent;
