import React from "react";
import { Avatar, Box, Text, useColorModeValue } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import BlockchainSelectionMenu from "@/app/components/blockchainSelectionMenu";
import { useRouter } from "next/navigation";

const Banner = () => {
	const router = useRouter();
	const defiData = useSelector(
		(state) => state?.defiDashboardData?.DefiData?.data
	);

	return (
		<>
			<Box
				display={{ base: "none", lg: "flex" }}
				justifyContent={"space-between"}
				w={"100%"}
				p={"10px 20px"}
				borderBottom={useColorModeValue(
					"1px solid #BFBFBF",
					"1px solid #2F2F2F"
				)}
				bgColor={useColorModeValue("#F0F0F5", "#191919")}
			>
				<Box
					display={"flex"}
					alignItems={"center"}
					bgColor={useColorModeValue("#F0F0F5", "#191919")}
					p={{ md: "15px" }}
				>
					{typeof window !== "undefined" && (
						<Avatar
							w={"50px"}
							h={"50px"}
							borderRadius={"50%"}
							src={defiData?.logo}
							name={defiData?.name}
						/>
					)}

					<Box
						h={"80%"}
						layerStyle={"flexColumn"}
						justifyContent={"space-between"}
					>
						<Box layerStyle={"center"}>
							{defiData?.name !== "undefined" && (
								<Text
									variant={"h1"}
									fontWeight={{ base: "400", md: "500" }}
									textTransform={"capitalize"}
								>
									{defiData?.name}
								</Text>
							)}
						</Box>
						<Box
							cursor={"pointer"}
							borderRight={useColorModeValue(
								"1px solid #BFBFBF",
								"1px solid #2F2F2F"
							)}
							onClick={() => {
								router.push(defiData.url);
							}}
							px={"20px"}
						>
							<Text
								variant={"h3"}
								color={useColorModeValue("#000000", "#A8ADBD")}
								as="a"
								href={defiData?.url}
								target="_blank"
								rel="noopener noreferrer"
								textDecoration={"underline"}
							>
								{defiData?.url}
							</Text>
						</Box>
					</Box>

					<Box
						h={"80%"}
						display={"flex"}
						justifyContent={"center"}
						alignItems={"end"}
					>
						<Box
							layerStyle={"center"}
							gap={"15px"}
							px={"15px"}
							borderRight={useColorModeValue(
								"1px solid #BFBFBF",
								"1px solid #2F2F2F"
							)}
						>
							<Text
								variant={"h3"}
								color={useColorModeValue("#3A3A3A", "#A8ADBD")}
							>
								{defiData?.chains?.length ?? 0}{" "}
								{defiData?.chains?.length > 1
									? "chains"
									: "chain"}
							</Text>
							<Box layerStyle={"center"}>
								<BlockchainSelectionMenu
									chains={defiData?.chains}
								/>
							</Box>
						</Box>
					</Box>

					<Box
						h={"80%"}
						display={"flex"}
						justifyContent={"center"}
						alignItems={"end"}
					>
						<Box layerStyle={"center"} gap={"10px"} px={"15px"}>
							<Text
								variant={"h3"}
								color={useColorModeValue("#000000", "#A8ADBD")}
							>
								{" "}
                                Token{" "}
							</Text>
							{typeof window !== "undefined" && (
								<Avatar
									w={"16px"}
									h={"16px"}
									borderRadius={"50%"}
									src={defiData?.logo}
									name={defiData?.name ?? "defi_logo"}
								/>
							)}

							<Text
								variant={"h3"}
								color={useColorModeValue("#000000", "#A8ADBD")}
								fontWeight={"600"}
								as={"a"}
								target="_blank"
								href={`https://www.coingecko.com/en/coins/${defiData?.symbol.toLowerCase()}`}
							>
								{defiData?.symbol}
							</Text>
						</Box>
					</Box>
				</Box>

				<Box display={"flex"} alignItems={"end"}>
					<ScoreBox score={defiData?.safety_score} />
				</Box>
			</Box>

			<Box
				display={{ base: "flex", lg: "none" }}
				flexDir={"column"}
				justifyContent={"space-between"}
				w={"100%"}
				gap={"15px"}
				borderBottom={useColorModeValue(
					"1px solid #BFBFBF",
					"1px solid #2F2F2F"
				)}
				bgColor={useColorModeValue("#FFFFFF", "#202020")}
			>
				<Box display={"flex"} flexDir={"column"} gap={"15px"}>
					<Box display={"flex"} w={"100%"} p={"15px"}>
						{typeof window !== "undefined" && (
							<Avatar
								w={"50px"}
								h={"50px"}
								borderRadius={"50%"}
								src={defiData?.logo}
								name={defiData?.name}
							/>
						)}

						<Box
							layerStyle={"flexColumn"}
							justifyContent={"space-between"}
							px={"20px"}
						>
							<Box>
								{defiData?.name !== "undefined" && (
									<Text
										variant={"h1"}
										fontWeight={"500"}
										textTransform={"capitalize"}
										textAlign={"left"}
									>
										{defiData?.name}
									</Text>
								)}
							</Box>
							<Box
								cursor={"pointer"}
								onClick={() => {
									router.push(defiData.url);
								}}
							>
								<Text
									variant={"h3"}
									color={useColorModeValue(
										"#000000",
										"#A8ADBD"
									)}
									as="a"
									href={defiData?.url}
									target="_blank"
									rel="noopener noreferrer"
									textDecoration={"underline"}
								>
									{defiData?.url}
								</Text>
							</Box>
						</Box>
					</Box>

					<Box
						display={"flex"}
						w={"100%"}
						justifyContent={"left"}
						px={"15px"}
					>
						<Text
							variant={"h3"}
							color={useColorModeValue("#3A3A3A", "#A8ADBD")}
						>
							{defiData?.chains?.length ?? 0} chains
						</Text>
					</Box>

					<Box
						display={"flex"}
						justifyContent={"left"}
						overflow={"auto"}
						px={{ base: "0px", md: "15px" }}
					>
						<BlockchainSelectionMenu chains={defiData?.chains} />
					</Box>

					<Box
						h={"80%"}
						w={"100%"}
						display={"flex"}
						justifyContent={"left"}
						alignItems={"end"}
					>
						<Box layerStyle={"center"} gap={"10px"} px={"15px"}>
							<Text
								variant={"h3"}
								color={useColorModeValue("#000000", "#A8ADBD")}
							>
								{" "}
                                Token{" "}
							</Text>
							{typeof window !== "undefined" && (
								<Avatar
									w={"16px"}
									h={"16px"}
									borderRadius={"50%"}
									src={defiData?.logo}
									name={defiData?.symbol}
								/>
							)}

							<Text
								variant={"h3"}
								color={useColorModeValue("#000000", "#A8ADBD")}
								fontWeight={"600"}
								as={"a"}
								target="_blank"
								href={`https://www.coingecko.com/en/coins/${defiData?.symbol.toLowerCase()}`}
							>
								{defiData?.symbol}
							</Text>
						</Box>
					</Box>
				</Box>

				<Box
					display={"flex"}
					justifyContent={"center"}
					alignItems={"end"}
				>
					<ScoreBox score={defiData?.safety_score} />
				</Box>
			</Box>
		</>
	);
};

export default Banner;

const ScoreBox = ({ score }) => {
	return (
		<Box
			display={"flex"}
			alignItems={"center"}
			position={"relative"}
			bgColor={{
				base: useColorModeValue("#F0F0F5", "#191919"),
				lg: useColorModeValue("#FFFFFF", "#202020"),
			}}
			p={"10px"}
			gap={"10px"}
			h="fit-content"
			borderRadius={"6px"}
			_after={{
				position: "absolute",
				content: '""',
				bottom: "0px",
				left: "10px",
				width: "85%",
				height: "1px",
				bgColor: "#00B913",
			}}
		>
			<Text variant={"h4"}> Safety Score </Text>
			<Text variant={"h2"} fontWeight={"700"} lineHeight={"20px"}>
				{score}/100
			</Text>
		</Box>
	);
};
