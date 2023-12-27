"use client";
import React, { useEffect, useState } from "react";
import {
	Avatar,
	Box,
	Button,
	Checkbox,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Text,
	useColorMode,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { blockchainTypeChangedReducer } from "@/redux/dashboard_data/dataSlice";
import dynamic from "next/dynamic";
const SearchBox = dynamic(() => import("@components/searchBox"));

const BlockchainSelectionMenuNew = () => {
	const dispatch = useDispatch();
	const { colorMode } = useColorMode();

	const [tempBlockchain, setTempBlockchain] = useState([]);

	const [searchableBlockchains, setSearchableBlockchains] = useState([]);

	const blockchainSearchHandler = (e) => {
		const value = e.target.value;
		if (searchableBlockchains && value !== "") {
			let tempBlockchainArray = searchableBlockchains.filter((item) => {
				return item.name.toLowerCase().includes(value);
			});
			setTempBlockchain(tempBlockchainArray);
		} else {
			setTempBlockchain(blockchainListData?.data.slice(5));
		}
	};
	const blockchainListData = useSelector(
		(state) => state?.appData?.BlockchainListData
	);
	const BlockchainTypeHandler = (type) => {
		dispatch(blockchainTypeChangedReducer(type));
	};
	const blockchainSelected = useSelector(
		(state) => state?.dashboardTableData?.blockchainType
	);

	let blockchains = {
		data: blockchainListData.data,
		isSuccess: blockchainListData.isSuccess,
	};
	useEffect(() => {
		setSearchableBlockchains(blockchainListData?.data?.slice(5));
		setTempBlockchain(blockchainListData?.data?.slice(5));
	}, [blockchainListData]);

	return (
		<>
			<Box
				display={"flex"}
				alignItems={{ base: "start", md: "center" }}
				flexDirection={{ base: "column", md: "row" }}
				justifyContent={{ md: "space-between" }}
				w="100%"
				gap={"20px"}
			>
				<Box display={"flex"} alignItems={"center"} gap={"10px"} overflowX={"auto"}>
					<Button variant='coin' isActive={blockchainSelected.length === 0}>
						All
					</Button>
					{blockchains?.data?.map((coin, i) => {
						if (i > 4) return;
						return (
							<Button variant='coin' key={i} layerStyle={"center"}
								isActive={blockchainSelected.includes(coin.id)}
								onClick={() => {
									BlockchainTypeHandler(coin.id);
								}}
							>
								{coin.name}
							</Button>
						);
					})}
				</Box>

				{blockchains?.data?.length > 6 && (
					<Menu
						closeOnSelect={false}
						suppressHydrationWarning={true}
						isLazy
						matchWidth
					>
						{({ isOpen }) => (
							<>
								<MenuButton
									isActive={isOpen}
									borderRadius="8px"
									p="12px 16px"
									transition="all 0.2s"
									_focus={{ boxShadow: "outline" }}
									color="#000"
									_focusVisible={{ outline: "none" }}
									suppressHydrationWarning={true}
									zIndex={"10"}
									w={{ base: "90%", md: "228px" }}
									m={{ base: "0px 14px" }}
									_light={{
										background: isOpen
											? "rgba(28, 28, 28, 0.05)"
											: "transparent",
										border: "1px solid #1C1C1C",
									}}
									_dark={{
										background: "#191919",
										border: "1px solid #FFF",
									}}
								>
									<Box
										display={"flex"}
										alignItems={"center"}
										flexDirection={"row"}
										justifyContent={"space-between"}
									>
										<Text
											variant={"extraSmall"}
											_dark={{
												color: "white",
											}}
										>
											More Chains
										</Text>
										<i
											className={`icon ${colorMode === "light"
												? isOpen
													? "dropdown_black_open"
													: "dropdown_black"
												: isOpen
													? "dropdown_white_open"
													: "dropdown_white"
												}`}
										/>
									</Box>
								</MenuButton>
								<MenuList
									zIndex={"10"}
									boxShadow={
										"0px 5px 4px 0px rgba(0, 0, 0, 0.10)"
									}
									bgColor={
										colorMode === "light"
											? "#FFF"
											: "#191919"
									}
								>
									<Box px={"10px"}>
										<SearchBox
											placeholder="Search"
											onChange={(e) =>
												blockchainSearchHandler(e)
											}
											width={"100%"}
										></SearchBox>
									</Box>
									{blockchainListData?.isSuccess &&
										tempBlockchain?.map((item, i) => {
											return (
												<MenuItem
													key={i}
													bgColor={
														colorMode === "light"
															? "#FFF"
															: "#191919"
													}
													_hover={{
														bg:
															colorMode ===
																"light"
																? "#F5F5F7"
																: "#202020",
													}}
												>
													<Checkbox
														colorScheme="green"
														value={item.name}
														checked={blockchainSelected.includes(
															item.id
														)}
														onChange={() => {
															BlockchainTypeHandler(
																item.id
															);
														}}
													>
														<Box
															display={"flex"}
															cursor={"pointer"}
															alignItems={
																"center"
															}
															justifyContent={
																"center"
															}
														>
															<Avatar
																width={"24px"}
																height={"24px"}
																src={
																	item.logoUrl
																}
																name={
																	item.id ??
																	"Coin"
																}
																style={{
																	marginRight:
																		"20px",
																	marginLeft:
																		"14px",
																}}
															></Avatar>
															<Text
																fontSize={
																	"12px"
																}
																fontWeight={
																	"400"
																}
																lineHeight={
																	"20px"
																}
																letterSpacing={
																	"1px"
																}
																color={
																	colorMode ===
																		"light"
																		? "#16171B"
																		: "#FFF"
																}
															>
																{item.name}
															</Text>
														</Box>
													</Checkbox>
												</MenuItem>
											);
										})}
								</MenuList>
							</>
						)}
					</Menu>
				)}
			</Box>
		</>
	);
};

export default BlockchainSelectionMenuNew;
