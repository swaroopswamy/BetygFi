"use client";
import {
	Box,
	useColorMode,
	useColorModeValue,
	Text,
	Button,
	useDisclosure,
	Image as ChakraImage
} from "@chakra-ui/react";
import React from "react";
import dynamic from "next/dynamic";

const LoginPage = dynamic(() => import("@components/login"));
import { LogoutReducer } from "@redux/auth_data/authSlice";
import DynamicIcon from "@components/icons/index_new";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";

const Settings = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const dispatch = useDispatch();
	const {
		isOpen: isLoginModalOpen,
		onOpen: onLoginModalOpen,
		onClose: onLoginModalClose,
	} = useDisclosure();
	const preLoadedData = useSelector((state) => state.authData.preLoadedData);
	const appConfigState = useSelector((state) => state?.appData?.appConfigData);

	return (
		<>
			<Box
				display={{ base: "none", md: "block" }}
				width={"100%"}
				background={useColorModeValue("#F0F0F5", "#191919")}
			>
				<Text
					variant={"contentHeading"}
					lineHeight={"46px"}
					p={"30px 0px 10px 33px"}
				>
					Settings
				</Text>
				<Box
					height={"275px"}
					flexShrink={"0"}
					borderRadius={"6px"}
					background={useColorModeValue("#FFFFFF", "#202020")}
					boxShadow={"0px 4px 4px 0px rgba(0, 0, 0, 0.05)"}
					ml={"33px"}
					mr={"20px"}
				>
					<Box ml={"25px"} pt={"20px"}>
						<Text variant={"contentHeading3"} fontWeight={"400"}>
							Theme
						</Text>
					</Box>
					<Box layerStyle={"flexCenterSpaceEvenly"} mt={"10px"}>
						<Box layerStyle={"flexColumn"} cursor={"pointer"}>
							<Image
								unoptimized="true"
								priority="true"
								src="/images/SystemDefault.svg"
								width={183}
								height={133}
								alt=""
							/>
							<Box layerStyle={"flexCenterFlexStart"} mt={"10px"}>
								{/* <DynamicIcon
                                    name={colorMode === "light" ? "green_tick" : "unticked"}
                                /> */}
								<Text
									variant={" h6"}
									textTransform={"uppercase"}
									_light={{ color: "#191919" }}
									_dark={{ color: "#FFF" }}
									ml={"15px"}
									mt={"2px"}
								>
									System Default
								</Text>
							</Box>
						</Box>

						<Box
							layerStyle={"flexColumn"}
							cursor={"pointer"}
							onClick={() => {
								toggleColorMode();
							}}
						>
							<Image
								src=" /images/LightTheme.svg"
								width={183}
								height={133}
								alt=""
								unoptimized="true"
								priority="true"
							/>
							<Box layerStyle={"flexCenterFlexStart"} mt={"10px"}>
								<DynamicIcon
									name={colorMode === "light" ? "green_tick" : "unticked"}
								/>
								<Text
									color={useColorModeValue("#191919", "#FFFFFF")}
									variant={" h6"}
									textTransform={"uppercase"}
									_light={{ color: "#191919" }}
									_dark={{ color: "#FFF" }}
									ml={"15px"}
									mt={"2px"}
								>
									Light THEME
								</Text>
							</Box>
						</Box>

						<Box
							layerStyle={"flexColumn"}
							cursor={"pointer"}
							onClick={() => {
								toggleColorMode();
							}}
						>
							<Image
								src="/images/DarkTheme.svg"
								width={183}
								height={133}
								alt=""
								unoptimized="true"
								priority="true"
							/>
							<Box layerStyle={"flexCenterFlexStart"} mt={"10px"}>
								<DynamicIcon
									name={colorMode === "dark" ? "green_tick" : "unticked"}
								/>
								<Text
									color={useColorModeValue("#191919", "#FFFFFF")}
									layerStyle={" h6"}
									textTransform={"uppercase"}
									_light={{ color: "#191919" }}
									_dark={{ color: "#FFF" }}
									ml={"15px"}
									mt={"2px"}
								>
									DARK THEME
								</Text>
							</Box>
						</Box>
					</Box>
				</Box>

				<Box
					height={"350px"}
					flexShrink={"0"}
					borderRadius={"6px"}
					background={useColorModeValue("#FFFFFF", "#202020")}
					boxShadow={"0px 4px 4px 0px rgba(0, 0, 0, 0.05)"}
					ml={"33px"}
					mt={"40px"}
					mr={"20px"}
				>
					<Text variant={"contentHeading3"} fontWeight={"400"} ml={5} pt={5}>
						Account Settings
					</Text>
					<Box
						layerStyle={"flexSpaceBetween"}
						ml={"150px"}
						mt={"30px"}
						mr={"50px"}
						borderBottom={useColorModeValue(
							"1px solid #191919",
							"1px solid #FFFFFF"
						)}
					>
						<Box layerStyle={"flexCenterFlexStart"}>
							<ChakraImage src="/images/Web3.svg" mb={"20px"} alt="" unoptimized="true"
								priority="true" />
							<Box layerStyle={"flexColumn"} pb={"15px"}>
								<Text variant={"SettingsText1"} ml={"15px"}>
									Web 3
								</Text>
								<Text variant={"SettingsText2"} ml={"15px"}>
									Not Added
								</Text>
							</Box>
						</Box>
						<Button
							width={"116px"}
							height={"28px"}
							flexShrink={"0"}
							background={useColorModeValue("#202020", "#FFFFFF")}
						>
							<Text
								variant={"SettingsButtonText"}
								_light={{ color: "#FFFFFF" }}
								_dark={{ color: "#191919" }}
							>
								Verify
							</Text>
						</Button>
					</Box>

					<Box
						layerStyle={"flexSpaceBetween"}
						ml={"150px"}
						mt={"20px"}
						mr={"50px"}
						borderBottom={useColorModeValue(
							"1px solid #191919",
							"1px solid #FFFFFF"
						)}
					>
						<Box layerStyle={"flexCenter"}>
							<ChakraImage
								unoptimized="true"
								priority="true"
								src="/images/Google.svg"
								mb={"20px"}
								ml={"7px"}
								alt=""
							/>
							<Box flexDirection={"column"} mb={"17px"} ml={"5px"}>
								<Text variant={"SettingsText1"} ml={"15px"}>
									Email
								</Text>
								<Text variant={"SettingsText2"} ml={"15px"}>
									Not Added
								</Text>
							</Box>
						</Box>
						<Button
							width={"116px"}
							height={"28px"}
							flexShrink={"0"}
							background={useColorModeValue("#202020", "#FFFFFF")}
						>
							<Text
								variant={"SettingsButtonText"}
								_light={{ color: "#FFFFFF" }}
								_dark={{ color: "#191919" }}
							>
								Add Email
							</Text>
						</Button>
					</Box>

					<Box
						layerStyle={"flexSpaceBetween"}
						ml={"150px"}
						mt={"20px"}
						mr={"50px"}
						borderBottom={useColorModeValue(
							"1px solid #191919",
							"1px solid #FFFFFF"
						)}
					>
						<Box layerStyle={"flexCenterFlexStart"}>
							<ChakraImage
								src="/images/Twitter.svg"
								mb={"20px"}
								ml={"7px"}
								alt=""
								unoptimized="true"
								priority="true"
							/>
							<Box layerStyle={"flexColumn"} mb={"17px"} ml={"5px"}>
								<Text variant={" SettingsText1"} ml={"15px"}>
									Twitter
								</Text>
								<Text variant={"SettingsText2"} ml={"15px"}>
									Not Added
								</Text>
							</Box>
						</Box>
						<Button
							width={"116px"}
							height={"28px"}
							flexShrink={"0"}
							background={useColorModeValue("#202020", "#FFFFFF")}
						>
							<Text
								variant={"SettingsButtonText"}
								_light={{ color: "#FFFFFF" }}
								_dark={{ color: "#191919" }}
							>
								Add Twitter
							</Text>
						</Button>
					</Box>
				</Box>

				{preLoadedData?.data === null || preLoadedData?.data === undefined ? (
					<>
						<Box layerStyle={"flexSpaceBetween"} p={"50px 35px 90px 50px"}>
							<Text variant={"contentHeading3"} fontWeight={"400"}>
								Login to BetygFi
							</Text>
							{/* <Text
                                        variant={"SettingsText3"}
                                        ml={"50px"}
                                        mt={"3px"}>
                                        After logging out, the verification information for the current address will be deleted from your browser.
                                    </Text> */}
							<Button
								width={"116px"}
								height={"28px"}
								cursor={"pointer"}
								onClick={onLoginModalOpen}
								ml={"60px"}
								variant={"outline"}
								border={"1px"}
							>
								<Text
									variant={"SettingsButtonText"}
									_light={{ color: "#191919" }}
									_dark={{ color: "#FFFFFF" }}
								>
									Login
								</Text>
							</Button>
						</Box>
					</>
				) : (
					<>
						<Box layerStyle={"flexSpaceBetween"} p={"50px 35px 90px 50px"}>
							<Text variant={"contentHeading3"} fontWeight={"400"}>
								Logout of BetygFi
							</Text>
							<Text variant={"SettingsText3"} ml={"50px"} mt={"3px"}>
								After logging out, the verification information for the current
								address will be deleted from your browser.
							</Text>
							<Button
								width={"116px"}
								height={"28px"}
								ml={"60px"}
								variant={"outline"}
								border={"1px"}
								onClick={() => dispatch(LogoutReducer(appConfigState))}
							>
								<Text
									variant={"SettingsButtonText"}
									_light={{ color: "#191919" }}
									_dark={{ color: "#FFFFFF" }}
								>
									Logout
								</Text>
							</Button>
						</Box>
					</>
				)}
			</Box>
			{/* Mobile Optimization Part */}

			<Box
				display={{ base: "block", md: "none" }}
				width={"100%"}
				background={useColorModeValue("#F0F0F5", "#191919")}
			>
				<Text variant={"contentHeading2"} p={"54px 0px 29px 15px"}>
					Settings
				</Text>

				<Box
					height={"650px"}
					flexShrink={"0"}
					borderRadius={"6px"}
					background={useColorModeValue("#FFFFFF", "#202020")}
					boxShadow={"0px 4px 4px 0px rgba(0, 0, 0, 0.05)"}
					mx={"15px"}
				>
					<Box p={"15px 0px 15px 21px"}>
						<Text variant={"contentHeading3"} fontWeight={"400"}>
							Theme
						</Text>
					</Box>
					<Box layerStyle={"flexColumn"}>
						<Box layerStyle={"flexColumn"} cursor={"pointer"}>
							<Box layerStyle={"flexCenterFlexStart"}>
								<ChakraImage src="/images/SelectBox.svg" alt="" ml={"21px"} unoptimized="true"
									priority="true" />
								<Box ml={"10px"}>
									<Text
										variant={" h6"}
										textTransform={"uppercase"}
										_light={{ color: "#191919" }}
										_dark={{ color: "#FFF" }}
									>
										System Default
									</Text>
								</Box>
							</Box>
							<Image
								src="/images/SystemDefault.svg"
								width={183}
								height={133}
								alt=""
								mt={"12px"}
								ml={"21px"}
								unoptimized="true"
								priority="true"
							/>
						</Box>

						<Box
							layerStyle={"flexColumn"}
							cursor={"pointer"}
							onClick={() => {
								toggleColorMode();
							}}
						>
							<Box layerStyle={"flexCenterFlexStart"} mt={"34px"}>
								<Box ml={"21px"}>
									<DynamicIcon
										name={colorMode === "light" ? "green_tick" : "unticked"}
									/>
								</Box>
								<Box ml={"10px"}>
									<Text
										variant={" h6"}
										textTransform={"uppercase"}
										_light={{ color: "#191919" }}
										_dark={{ color: "#FFF" }}
									>
										Light THEME
									</Text>
								</Box>
							</Box>
							<Image
								src="/images/LightTheme.svg"
								width={183}
								height={133}
								unoptimized="true"
								priority="true"
								alt=""
								mt={"12px"}
								ml={"21px"}
							/>
						</Box>

						<Box
							layerStyle={"flexColumn"}
							cursor={"pointer"}
							onClick={() => {
								toggleColorMode();
							}}
						>
							<Box layerStyle={"flexCenterFlexStart"} mt={"34px"}>
								<Box ml={"21px"}>
									<DynamicIcon
										name={colorMode === "dark" ? "green_tick" : "unticked"}
									/>
								</Box>
								<Box ml={"10px"}>
									<Text
										layerStyle={" h6"}
										textTransform={"uppercase"}
										_light={{ color: "#191919" }}
										_dark={{ color: "#FFF" }}
									>
										DARK THEME
									</Text>
								</Box>
							</Box>
							<Image
								src="/images/DarkTheme.svg"
								unoptimized="true"
								priority="true"
								width={183}
								height={133}
								alt=""
								mt={"12px"}
								ml={"21px"}
							/>
						</Box>
					</Box>
				</Box>

				<Box
					height={"330px"}
					flexShrink={"0"}
					borderRadius={"6px"}
					background={useColorModeValue("#FFFFFF", "#202020")}
					boxShadow={"0px 4px 4px 0px rgba(0, 0, 0, 0.05)"}
					mx={"15px"}
					mt={"30px"}
				>
					<Box p={"15px 0px 20px 21px"}>
						<Text variant={"contentHeading3"} fontWeight={"400"}>
							Account Settings
						</Text>
					</Box>
					<Box
						mx={"23px"}
						layerStyle={"flexSpaceBetween"}
						borderBottom={useColorModeValue(
							"1px solid #191919",
							"1px solid #FFFFFF"
						)}
					>
						<Box layerStyle={"flexCenterFlexStart"}>
							<ChakraImage src="/images/Web3.svg" mb={"20px"} alt="" unoptimized="true"
								priority="true" />
							<Box layerStyle={"flexColumn"} pb={"15px"}>
								<Text variant={"SettingsText1"} ml={"15px"}>
									Web 3
								</Text>
								<Text variant={"SettingsText2"} ml={"15px"}>
									Not Added
								</Text>
							</Box>
						</Box>
						<Button
							width={"116px"}
							height={"28px"}
							flexShrink={"0"}
							background={useColorModeValue("#202020", "#FFFFFF")}
						>
							<Text
								variant={"SettingsButtonText"}
								_light={{ color: "#FFFFFF" }}
								_dark={{ color: "#191919" }}
							>
								Verify
							</Text>
						</Button>
					</Box>

					<Box
						layerStyle={"flexSpaceBetween"}
						mx={"23px"}
						mt={"21px"}
						borderBottom={useColorModeValue(
							"1px solid #191919",
							"1px solid #FFFFFF"
						)}
					>
						<Box layerStyle={"flexCenter"}>
							<ChakraImage
								src="/images/Google.svg"
								mb={"20px"}
								ml={"7px"}
								alt=""
								unoptimized="true"
								priority="true"
							/>
							<Box flexDirection={"column"} mb={"17px"} ml={"5px"}>
								<Text variant={"SettingsText1"} ml={"15px"}>
									Email
								</Text>
								<Text variant={"SettingsText2"} ml={"15px"}>
									Not Added
								</Text>
							</Box>
						</Box>
						<Button
							width={"116px"}
							height={"28px"}
							flexShrink={"0"}
							background={useColorModeValue("#202020", "#FFFFFF")}
						>
							<Text
								variant={"SettingsButtonText"}
								_light={{ color: "#FFFFFF" }}
								_dark={{ color: "#191919" }}
							>
								Add Email
							</Text>
						</Button>
					</Box>

					<Box
						layerStyle={"flexSpaceBetween"}
						mx={"23px"}
						mt={"21px"}
						borderBottom={useColorModeValue(
							"1px solid #191919",
							"1px solid #FFFFFF"
						)}
					>
						<Box layerStyle={"flexCenterFlexStart"}>
							<ChakraImage
								src="/images/Twitter.svg"
								mb={"20px"}
								ml={"7px"}
								alt=""
								unoptimized="true"
								priority="true"
							/>
							<Box layerStyle={"flexColumn"} mb={"17px"} ml={"5px"}>
								<Text variant={" SettingsText1"} ml={"15px"}>
									Twitter
								</Text>
								<Text variant={"SettingsText2"} ml={"15px"}>
									Not Added
								</Text>
							</Box>
						</Box>
						<Button
							width={"116px"}
							height={"28px"}
							flexShrink={"0"}
							background={useColorModeValue("#202020", "#FFFFFF")}
						>
							<Text
								variant={"SettingsButtonText"}
								_light={{ color: "#FFFFFF" }}
								_dark={{ color: "#191919" }}
							>
								Add Twitter
							</Text>
						</Button>
					</Box>
				</Box>

				{preLoadedData?.data === null || preLoadedData?.data === undefined ? (
					<>
						<Box layerStyle={"flexColumn"} p={"30px 15px 90px 15px"}>
							<Text variant={"contentHeading3"} fontWeight={"400"}>
								Login to BetygFi
							</Text>
							{/* <Box
                                        mr={"15px"}
                                        mt={"15px"}>
                                        <Text variant={"SettingsText3"}>
                                            After logging out, the verification information for the current address will be deleted from your browser.
                                        </Text>
                                    </Box> */}
							<Button
								width={"100%"}
								height={"28px"}
								variant={"outline"}
								cursor={"pointer"}
								onClick={onLoginModalOpen}
								mt={"15px"}
								border={"1px"}
							>
								<Text
									variant={"SettingsButtonText"}
									_light={{ color: "#191919" }}
									_dark={{ color: "#FFFFFF" }}
								>
									Login
								</Text>
							</Button>
						</Box>
					</>
				) : (
					<>
						<Box layerStyle={"flexColumn"} p={"30px 15px 90px 15px"}>
							<Text variant={"contentHeading3"} fontWeight={"400"}>
								Logout of BetygFi
							</Text>
							<Box mr={"15px"} mt={"15px"}>
								<Text variant={"SettingsText3"}>
									After logging out, the verification information for the
									current address will be deleted from your browser.
								</Text>
							</Box>
							<Button
								width={"100%"}
								height={"28px"}
								variant={"outline"}
								mt={"15px"}
								border={"1px"}
								onClick={() => dispatch(LogoutReducer(appConfigState))}
							>
								<Text
									variant={"SettingsButtonText"}
									_light={{ color: "#191919" }}
									_dark={{ color: "#FFFFFF" }}
								>
									Logout
								</Text>
							</Button>
						</Box>
					</>
				)}
			</Box>
			<LoginPage
				isOpen={isLoginModalOpen}
				onOpen={onLoginModalOpen}
				onClose={onLoginModalClose}
			/>
		</>
	);
};

export default Settings;
