/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { fetchDefiAssetCompositionTableData } from "@redux/defi_dashboard_data/dataSlice";
import {
	Text,
	Td,
	Tr,
	Th,
	Flex,
	Box,
	useColorModeValue,
	useColorMode,
} from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { DefiAssetsBigTableHeader } from "@components/pages/defiDashboard/helper";
import dynamic from "next/dynamic";

const PageButtonsWide = dynamic(() => import('@components/pageButtonsWide'), { ssr: false });
const CustomAvatar = dynamic(() => import('@components/avatar'), { ssr: false });
const GenericTable = dynamic(() => import('@components/table'), { ssr: false });


let USDollar = new Intl.NumberFormat("en-US", {
	currency: "USD",
});

function AssetComposition({ params }) {
	const searchParamProtocolSlug = params?.protocol_slug;
	const router = useRouter();
	const dispatch = useDispatch();

	const [tablePage, setTablePage] = useState(1);
	const [tableLimit, setTableLimit] = useState(10);

	const pageChangeHandler = (page) => {
		if (page == "") {
			setTablePage(page);
		}
		if (page >= 1) {
			setTablePage(page);
		}
	};

	const blockchainSelected = useSelector((state) => state?.dashboardTableData?.blockchainType);
	const defiAssetsTableData = useSelector((state) => state?.defiDashboardData?.DefiAssetCompositionTableData);

	const getDefiAssetsTableDataHandler = () => {
		const payload = {
			blockchain: blockchainSelected,
			page: tablePage,
			limit: tableLimit,
		};
		if (searchParamProtocolSlug && searchParamProtocolSlug !== '') {
			payload.defi = searchParamProtocolSlug;
		}
		dispatch(fetchDefiAssetCompositionTableData(payload));
	};

	useEffect(() => {
		if (tablePage != "") {
			setTimeout(() => {
				getDefiAssetsTableDataHandler();
			}, 1500);
		}
	}, [blockchainSelected, tablePage, tableLimit, setTablePage]);

	const pageMenuList = [
		{ value: 10 },
		{ value: 20 },
		{ value: 50 },
	];

	return (
		<Box
			display={"flexColumn"}
			padding={{ base: "20px 15px", md: "20px 30px" }}
			pb={{ base: "120px", md: "none" }}
			bgColor={useColorModeValue("#F0F0F5", "#191919")}
			borderColor={useColorModeValue("#F0F0F5", "#191919")}
		>
			<Box
				layerStyle={"flexCenter"}
				cursor={"pointer"}
				gap={"10px"}
				my={"20px"}
				onClick={() => router.push(`/protocol/${searchParamProtocolSlug}`)}
			>
				<ChevronLeftIcon
					w={"24px"}
					h={"24px"}
					borderRadius={"50%"}
					border={useColorModeValue(
						"1px solid #E1E1E1",
						"1px solid #333333"
					)}
				/>
				<Text
					variant={"h5"}
					letterSpacing={"1.2px"}
					_light={{ color: "#16171B" }}
					_dark={{ color: "#A8ADBD" }}
				>
					Home/DeFi Dashboard/DeFi Asset Composition
				</Text>
			</Box>

			<Box
				layerStyle={"flexColumn"}
				borderRadius={"6px"}
				bg={useColorModeValue("#FFFFFF", "#202020")}
			>
				<Box layerStyle={"spaceBetween"} minH={"70px"} p={"10px 20px"}>
					<Text variant={"h2"}> DeFi Asset Composition </Text>

					{/* <Box layerStyle={"center"}>
                        <SelectionBox />

                        <SearchBox
                            placeholder={"Search"}
                            w={"200px"}
                        />
                    </Box> */}
				</Box>

				<GenericTable
					tableHeader={DefiAssetsBigTableHeader}
					tableData={defiAssetsTableData}
					TableRow={TableRow}
					TableHeaderRowMobile={TableHeaderRowMobile}
					ButtonComp={(item) => {
						return (
							<Box layerStyle={"spaceBetween"} w={"80%"}>
								<Box layerStyle={"flexCenter"} gap={"10px"}>
									<CustomAvatar
										name={item?.item?.assetName}
										src={item?.item?.logoUrl}
										height={"24px"}
										width={"24px"}
									/>
									<Text variant={"h3"}>
										{" "}
										{item?.item?.assetName}{" "}
									</Text>
								</Box>
								<Box layerStyle={"center"}>
									<Text variant={"h3"}>
										{item?.item?.share + "%"}
									</Text>
								</Box>
							</Box>
						);
					}}
					PanelComp={(item) => {
						return (
							<Box layerStyle={"flexColumn"} gap={"10px"}>
								<Box display={"flex"} gap={"20px"}>
									<Text variant={"h3"} color={"#8F8F8F"}>
										{" "}
										Price{" "}
									</Text>
									<Text variant={"h3"}>
										{" "}
										{item?.item?.price
											? "USD " +
											USDollar.format(item?.item?.price)
											: "-"}{" "}
									</Text>
								</Box>
								<Box display={"flex"} gap={"20px"}>
									<Text variant={"h3"} color={"#8F8F8F"}>
										{" "}
										Amount{" "}
									</Text>
									<Text variant={"h3"}>
										{" "}
										{item?.item?.amount
											? "USD " +
											USDollar.format(
												item?.item?.amount
											)
											: "-"}{" "}
									</Text>
								</Box>
								<Box display={"flex"} gap={"20px"}>
									<Text variant={"h3"} color={"#8F8F8F"}>
										{" "}
										Value{" "}
									</Text>
									<Text variant={"h3"}>
										{" "}
										{item?.item?.value
											? "USD " +
											USDollar.format(item?.item?.value)
											: "-"}{" "}
									</Text>
								</Box>
							</Box>
						);
					}}
					SkeletonRowsColumnsDesktop={{
						numColumns: 5,
						numRows: 10,
					}}
					SkeletonRowsColumnsMobile={{
						numColumns: 2,
						numRows: 5,
					}}
				/>
			</Box>

			<Box
				display={"flex"}
				alignItems={"center"}
				bgColor={useColorModeValue("#FFFFFF", "#202020")}
				minH={"60px"}
				p={{ base: "10px", md: "5px 20px" }}
			>
				<PageButtonsWide
					page={tablePage}
					totalPages={defiAssetsTableData?.data?.totalPages}
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
}
export default AssetComposition;

function TableRow({ item, i }) {
	const [clicked, setClick] = useState(false);
	const { colorMode } = useColorMode();
	const commonStyleTdProp = {
		_light: { bgColor: "#FFFFFF", },
		_dark: { bgColor: "#202020", }
	};
	return (
		<Tr
			key={i}
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
			<Td {...commonStyleTdProp}>
				<Flex>
					<Box
						alignItems={"center"}
						display={"flex"}
						gap={"15px"}
					>
						<CustomAvatar
							name={item?.assetName}
							src={item?.logoUrl}
							height={"24px"}
							width={"24px"}
						/>
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
							{item?.assetName}
						</Text>
					</Box>
				</Flex>
			</Td>

			<Td {...commonStyleTdProp}>
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
							{item?.price
								? "USD " + USDollar.format(item?.price)
								: "-"}
						</Text>
					</Box>
				</Flex>
			</Td>

			<Td {...commonStyleTdProp}>
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
							{item?.amount
								? "USD " + USDollar.format(item?.amount)
								: "-"}
						</Text>
					</Box>
				</Flex>
			</Td>

			<Td {...commonStyleTdProp}>
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
							{item?.value
								? "USD " + USDollar.format(item?.value)
								: "-"}
						</Text>
					</Box>
				</Flex>
			</Td>

			<Td {...commonStyleTdProp}>
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
							{item?.share ? item?.share + "%" : "-"}
						</Text>
					</Box>
				</Flex>
			</Td>
		</Tr>
	);
}

// function SelectionBox () {
//   const { colorMode } = useColorMode();
//   const dispatch = useDispatch();
//   const blockchainListData = useSelector((state) => state?.appData?.BlockchainListData);

//   const blockchainSelected = useSelector(
//     (state) => state?.walletDashboardTableData?.blockchainType
//   );
//   const BlockchainTypeHandler = (type) => {
//     dispatch(blockchainTypeChangedReducer(type));
//   };

//   useEffect(() => {
//     dispatch(fetchBlockchainListData());
//   }, []);

//   return <>
//     <Box
//       display={"flex"}
//       flexDirection={"column"}
//     >
//       <Box
//         w={"100%"}
//         display={"flex"}
//         alignItems={"center"}
//       >
//         <Box
//           position={"relative"}
//           cursor={"pointer"}
//           fontSize={"14px"}
//           fontWeight={blockchainSelected.length === 0 ? "700" : "400"}
//           letterSpacing={"1px"}
//           lineHeight={"20px"}
//           color={useColorModeValue("#3A3A3A", "#FFFFFF")}
//           _after={
//             blockchainSelected.length === 0 && {
//               position: "absolute",
//               content: '""',
//               bottom: "-14px",
//               left: 0,
//               width: "100%",
//               height: "1px",
//               bgColor: colorMode === 'light' ? "#191919" : "#FFFFFF",

//             }
//           }
//           onClick={() => {
//             BlockchainTypeHandler("All");
//           }}
//           mr={"18px"}
//           //textTransform={"lowercase"}
//         >
//                     All
//         </Box>
//         {blockchainListData.isSuccess && blockchainListData.data.map((item, i) => {
//           if (i >= 4) return;
//           return (
//             <Box
//               position={"relative"}
//               cursor={"pointer"}
//               key={i}
//               _after={
//                 blockchainSelected.includes(item.name) && {
//                   position: "absolute",
//                   content: '""',
//                   bottom: "-14px",
//                   left: 0,
//                   width: "100%",
//                   height: "1px",
//                   bgColor: colorMode === 'light' ? "#191919" : "#FFFFFF",
//                 }
//               }
//               onClick={() => {
//                 BlockchainTypeHandler(item.name);
//               }}
//               mr={"10px"}
//               display={"flex"}
//               alignItems={"center"}
//             >
//               <Image
//                 w={"20px"}
//                 h={"20px"}
// unoptimized = "true";
// priority = "true";
//                 mr={"11px"}
//                 src={item.logoUrl}
//                 alt=""
//               ></Image>
//               <Text
//                 fontSize={"14px"}
//                 fontWeight={blockchainSelected.includes(item.name) ? "700" : "400"}
//                 lineHeight={"21.826px"}
//                 letterSpacing={"1.4px"}
//                 color={colorMode === 'light' ?
//                   blockchainSelected.includes(item.name) ? "#191919" : "#191919"
//                   :
//                   blockchainSelected.includes(item.name) ? "#FFFFFF" : "#FFFFFF"
//                 }
//               >
//                 {item.name}
//               </Text>
//             </Box>
//           );
//         })}
//       </Box>
//     </Box>
//   </>;
// }

const TableHeaderRowMobile = () => {
	return (
		<Tr>
			<Th _light={{ bgColor: "#F5F5F7", }} _dark={{ bgColor: "#191919", }}>
				<Box layerStyle={"flexCenter"}>
					<Text variant={"smallTableHeaderMobile"}>Asset Name</Text>
				</Box>
			</Th>
			<Th _light={{ bgColor: "#F5F5F7", }} _dark={{ bgColor: "#191919", }}>
				<Box layerStyle={"flexCenter"}>
					<Text variant={"smallTableHeaderMobile"}>Share</Text>
				</Box>
			</Th>
		</Tr>
	);
};
