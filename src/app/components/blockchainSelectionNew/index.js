/* eslint-disable max-len */
/* eslint-disable no-mixed-spaces-and-tabs */
"use client";
import React from "react";
import {
	Avatar,
	Box,
	Checkbox,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Text,
	Tooltip,
	useColorMode,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { blockchainTypeChangedReducer } from "@/redux/dashboard_data/dataSlice";
import dynamic from "next/dynamic";
const DynamicIcon = dynamic(() => import("../icons/index_new"), { ssr: false });

const BlockchainSelectionMenuNew = ({ chains }) => {

	const dispatch = useDispatch();
	const { colorMode } = useColorMode();

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
		data: chains ? chains : blockchainListData.data,
		isSuccess: blockchainListData.isSuccess
	};


	return (
		<>
			<Box display={"flex"} alignItems={{ base: "start", md: "center" }} flexDirection={{ base: "column", md: "row" }}
				justifyContent={{ md: "space-between" }}
				w="100%"
			>
				<Box
					display={"flex"} alignItems={"center"}
					p={{ base: "10px 14px" }}
				>
					<Box
						borderRadius={"20px"}
						p={"2px 20px"}
						border={"1px solid #C6C6C6"}
					>
						<Text
							variant={"content"}
						>
                            All
						</Text>
					</Box>
					{blockchains?.data?.map((item, i) => {
						if (i >= 5) return;
						return (
							<Tooltip key={i} label={item.name}>
								<Box
									layerStyle={"flexCenter"}
									justifyContent={"center"}
									cursor={"pointer"}
									_light={{
										bg: blockchainSelected.includes(item.id) ? "#D9D9D9" : "#FFF"
									}}
									_dark={{
										bg: blockchainSelected.includes(item.id) ? "#FFFFFF" : "#989898"
									}}
									border={
										blockchainSelected.includes(item.id)
											? "2px solid #245F00"
											: "1px solid rgba(0, 0, 0, 0.10)"
									}
									dropShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
									borderRadius="50%"
									w="32px"
									h="32px"
									ml={"15px"}
									onClick={() => {
										BlockchainTypeHandler(item.id);
									}}
								>
									<Avatar
										style={{ borderRadius: "50%" }}
										width={"21px"}
										height={"21px"}
										src={item?.logoUrl}
										alt={item.id ?? "Coin"}
									></Avatar>
								</Box>
							</Tooltip>
						);
					})}
				</Box>


				{blockchains?.data?.length > 5 && (
					<Menu closeOnSelect={false} suppressHydrationWarning={true}

					>
						<MenuButton
							borderRadius="8px"
							p="12px 16px"
							transition="all 0.2s"
							border="1px solid #1C1C1C"
							_focus={{ boxShadow: "outline" }}
							color="#000"
							_focusVisible={{ outline: "none" }}
							suppressHydrationWarning={true}
							zIndex={"10"}
							w={{ base: "90%", md: "228px" }}
							m={{ base: "0px 14px" }}
						>
							<Box
								display={"flex"}
								alignItems={"center"}
								flexDirection={"row"}

								justifyContent={"space-between"}
							>
								<Text variant={"extraSmall"}>
                                    More DeFi Markets
								</Text>
								<DynamicIcon
									name={colorMode === "light" ? "dropdown_black" : "x_light"}
								/>
							</Box>

						</MenuButton>
						<MenuList
							boxShadow={"0px 5px 4px 0px rgba(0, 0, 0, 0.10)"}
							bgColor={colorMode === "light" ? "#FFF" : "#191919"}
							w={"100%"}
						>
							{blockchainListData?.isSuccess &&
                                blockchains?.data?.map((item, i) => {
                                	if (i < 4) return;
                                	return (
                                		<MenuItem
                                			key={i}
                                			bgColor={colorMode === "light" ? "#FFF" : "#191919"}
                                			_hover={{
                                				bg: colorMode === "light" ? "#F5F5F7" : "#202020",
                                			}}
                                		>
                                			<Checkbox
                                				colorScheme="green"
                                				value={item.name}
                                				checked={blockchainSelected.includes(item.id)}
                                				onChange={() => {
                                					BlockchainTypeHandler(item.id);
                                				}}
                                			>
                                				<Box
                                					display={"flex"}
                                					cursor={"pointer"}
                                					alignItems={"center"}
                                					justifyContent={"center"}
                                				>
                                					<Avatar
                                						width={"24px"}
                                						height={"24px"}
                                						src={item.logoUrl}
                                						alt={item.id ?? "Coin"}
                                						style={{ marginRight: "20px", marginLeft: "14px" }}
                                					></Avatar>
                                					<Text
                                						fontSize={"12px"}
                                						fontWeight={"400"}
                                						lineHeight={"20px"}
                                						letterSpacing={"1px"}
                                						color={colorMode === "light" ? "#16171B" : "#FFF"}
                                					>
                                						{item.name}
                                					</Text>
                                				</Box>
                                			</Checkbox>
                                		</MenuItem>
                                	);
                                })}
						</MenuList>
					</Menu>
				)}

			</Box>
		</>
	);
};

export default BlockchainSelectionMenuNew; 