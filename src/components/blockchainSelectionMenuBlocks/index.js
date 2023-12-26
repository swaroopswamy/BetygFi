import React from "react";
import {
	Box,
	Image,
	Text,
	Tooltip,
	useColorMode,
	useColorModeValue,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { blockchainTypeChangedReducer } from "@/redux/wallet_dashboard_data/dataSlice";

const BlockchainSelectionMenuBlocks = () => {
	const dispatch = useDispatch();
	const { colorMode } = useColorMode();
	const blockchains = useSelector(
		(state) => state?.appData?.BlockchainListData?.data
	);
	const blockchainSelected = useSelector(
		(state) => state?.walletDashboardTableData?.blockchainType
	);
	const BlockchainTypeHandler = (type) => {
		dispatch(blockchainTypeChangedReducer(type));
	};

	return (
		<Box
			w={"100%"}
			layerStyle={"flexCenter"}
			borderBottom={useColorModeValue("1px solid #CECECE", "1px solid #2F2F2F")}
			pb="14px"
			pt={{ base: "10px" }}
			overflowX="auto"
			flexWrap="nowrap"
			css={{
				"&::-webkit-scrollbar": {
					width: "0.2rem",
					height: "0.2rem",
				},
				"&::-webkit-scrollbar-thumb": {
					backgroundColor: "transparent",
				},
			}}
		>
			<Box
				layerStyle={"flexCenter"}
				position={"relative"}
				cursor={"pointer"}
				fontSize={"14px"}
				fontWeight={blockchainSelected.length === 0 ? "700" : "400"}
				lineHeight={"20px"}
				color={useColorModeValue("#3A3A3A", "#FFFFFF")}
				whiteSpace="nowrap"
				_after={
					blockchainSelected.length === 0 && {
						position: "absolute",
						content: '""',
						bottom: "-14px",
						left: 0,
						width: "100%",
						height: "2px",
						bgColor: colorMode === "light" ? "#16171B" : "#FFFFFF",
					}
				}
				onClick={() => {
					BlockchainTypeHandler("All");
				}}
				mr={{ base: "18px", md: "18px" }}
				ml={{ base: "10px" }}
			>
				All
			</Box>
			{blockchains?.map((item, i) => {
				return (
					<Box
						position={"relative"}
						cursor={"pointer"}
						key={i}
						_after={
							blockchainSelected.includes(item.id) && {
								position: "absolute",
								content: '""',
								bottom: "-14px",
								left: 0,
								width: "100%",
								height: "2px",
								bgColor: colorMode === "light" ? "#16171B" : "#FFFFFF",
							}
						}
						onClick={() => {
							BlockchainTypeHandler(item.id);
						}}
						mr={{ base: "20px", md: "20px" }}
						display={"flex"}
						alignItems={"center"}
						whiteSpace="nowrap"
					>
						<Tooltip key={i} label={item.name}>
							<Image
								w={"18px"}
								h={"18px"}
								mr={"3px"}
								style={{ borderRadius: "50%" }}
								src={item.logoUrl}
								alt={`${item.id}_icon`}
							></Image>
						</Tooltip>
						<Text
							fontSize={"14px"}
							ml={"6px"}
							fontWeight={blockchainSelected.includes(item.id) ? "700" : "400"}
							lineHeight={"20px"}
							color={
								colorMode === "light"
									?
									// blockchainSelected.includes(item.id)
									// 	? "#191919"
									// 	: 
									"#191919"
									:
									// blockchainSelected.includes(item.id)
									// 	?
									// 	"#FFFFFF"
									// 	:
									"#FFFFFF"
							}
							textTransform={"capitalize"}
							mr={{ base: "18px", md: "18px" }}
						>
							{item.name}
						</Text>
					</Box>
				);
			})}
		</Box>
	);
};

export default BlockchainSelectionMenuBlocks;
