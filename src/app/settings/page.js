"use client";
import {
	Box,
	useColorMode,
	useColorModeValue,
	Text,
	Button,
	useDisclosure,
	Image,
} from "@chakra-ui/react";
import React from "react";
import dynamic from "next/dynamic";

const LoginPage = dynamic(() => import("@components/login"));
import { LogoutReducer } from "@/redux/auth_data/authSlice";
import DynamicIcon from "@components/icons/index_new";
import { useDispatch, useSelector } from "react-redux";
//import Image from "next/image";

const Settings = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const dispatch = useDispatch();
	const {
		isOpen: isLoginModalOpen,
		onOpen: onLoginModalOpen,
		onClose: onLoginModalClose,
	} = useDisclosure();
	const preLoadedData = useSelector((state) => state.authData.preLoadedData);

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
					p={"15px 33px"}
				>
					Profile Settings
				</Text>
				<Box
					height={"325px"}
					borderRadius={"6px"}
					background={useColorModeValue("#FFFFFF", "#202020")}
					m={"0px 20px 20px 33px"}
				>
					<Box ml={"25px"} pt={"20px"} layerStyle={"flexCenter"} gap={"17px"}>
						<Text variant={"contentHeading3"} fontWeight={"400"}>
							Profile Details
						</Text>
						<Button variant={"settingsButton"}>
							<Text variant={"SettingsButtonText"}>
								Edit Details
							</Text>
						</Button>
					</Box>
					<Box ml={"25px"} pt={"20px"} layerStyle={"flexCenterSpaceBetween"}>
						<Box layerStyle={"flexCenter"} gap={"17px"}>
							<Image
								borderRadius={"full"}
								boxSize={"150px"}
								alt=" "
								src="/images/Profile_photo.svg"
							></Image>
							<Box >
								<Text variant={"smallTableHeader"} lineHeight={"normal"}>
									Cameron Williamson
								</Text>
								<Text variant={"h3"} lineHeight={"normal"} color={useColorModeValue("#757575", "#A5A5A5")} pt={"6px"}>
									@TBgjD…CYVg4
								</Text>
								<Text variant={"h3"} lineHeight={"normal"} color={useColorModeValue("#757575", "#A5A5A5")} pt={"6px"}>
									Member since: 12/11/2022
								</Text>
							</Box>
						</Box>
						<Box
							width={"184px"}
							height={"70px"}
							background={"#494949"}
							borderRadius={"10px"}
							mr={"25px"}
						>
							<Box p={"12px 0px 3px"} layerStyle={"flexCenterSpaceAround"}>
								<Box borderBottom={"dotted"} borderColor={"#A4A8AB"} pt={"2px"}>
									<Text variant={"profileText"} pb={"5px"}>
										Profile Score
									</Text>
								</Box>
								<Image src="/icons/question_mark_lg_icon.svg" alt=" "></Image>
							</Box>
							<Text variant={"profileText"} fontSize={"24px"} p={"1px 24px"}>
								72
							</Text>
						</Box>
					</Box>
					<Box ml={"25px"} pt={"20px"}>
						<Text variant={"h3"} lineHeight={"normal"} color={useColorModeValue("#757575", "#A5A5A5")}>
							About Me:
						</Text>
						<Text variant={"h3"} lineHeight={"normal"} color={useColorModeValue("#191919", "#FFFFFF")} paddingTop={"10px"}>
							I’m a crypto enthusiast—navigating the blockchain with a passion for decentralized innovation and a keen eye on the ever-evolving landscape, reshaping the future of finance one digital asset at a time.
						</Text>
					</Box>
				</Box>

				<Box
					height={"250px"}
					borderRadius={"6px"}
					background={useColorModeValue("#FFFFFF", "#202020")}
					m={"20px 20px 0px 33px"}
				>
					<Box ml={"25px"} pt={"20px"}>
						<Text variant={"contentHeading3"} fontWeight={"400"}>
							My Stats
						</Text>
					</Box>
					<Box display={"flex"} w={"100%"}>
						<Box w={"50%"} borderRight={"2px solid #D9D9D9"}>
							<Box layerStyle={"flexCenter"} p={"30px 20px"} gap={"70px"}>
								<Text variant={"contentHeading"} lineHeight={"normal"}>BetygFi Community</Text>
								<Button variant={"settingsButton"}>
									<Text variant={"SettingsButtonText"}>
										Go To Community
									</Text>
								</Button>
							</Box>
							<Box layerStyle={"flexCenter"} p={"45px 15px 0px"}>
								<Box w={"33%"} layerStyle={"flexCenter"} borderRight={"2px solid #D9D9D9"} pl={"10px"}>
									<Text variant={"bigNumericText"}>
										142
									</Text>
									<Text variant={"toastText"} color={useColorModeValue("#757575", "#A5A5A5")} p={"10px 0px 0px 5px"}>
										Followers
									</Text>
								</Box>
								<Box w={"37%"} layerStyle={"flexCenter"} borderRight={"2px solid #D9D9D9"} pl={"20px"}>
									<Text variant={"bigNumericText"}>
										386
									</Text>
									<Text variant={"toastText"} color={useColorModeValue("#757575", "#A5A5A5")} p={"10px 5px 0px"}>
										Following
									</Text>
								</Box>
								<Box w={"30%"} layerStyle={"flexCenter"} pl={"20px"}>
									<Text variant={"bigNumericText"}>
										46
									</Text>
									<Text variant={"toastText"} color={useColorModeValue("#757575", "#A5A5A5")} p={"10px 5px 0px"}>
										Posts
									</Text>
								</Box>
							</Box>
						</Box>
						<Box w={"50%"}>
							<Box layerStyle={"flexCenter"} p={"30px 20px"} gap={"70px"}>
								<Text variant={"contentHeading"} lineHeight={"normal"}>BetygFi Data Studio</Text>
								<Button variant={"settingsButton"}>
									<Text variant={"SettingsButtonText"}>
										Go To Data Studio
									</Text>
								</Button>
							</Box>
							<Box layerStyle={"flexCenter"} p={"45px 15px 0px"}>
								<Box w={"50%"} layerStyle={"flexCenter"} pl={"15px"}>
									<Text variant={"bigNumericText"}>
										142
									</Text>
									<Text variant={"toastText"} color={useColorModeValue("#757575", "#A5A5A5")} p={"10px 0px 0px 5px"}>
										My Queries
									</Text>
								</Box>
							</Box>
						</Box>
					</Box>
				</Box>

				<Box
					height={"175px"}
					flexShrink={"0"}
					borderRadius={"6px"}
					background={useColorModeValue("#FFFFFF", "#202020")}
					boxShadow={"0px 4px 4px 0px rgba(0, 0, 0, 0.05)"}
					m={"20px 20px 0px 33px"}
				>
					<Text variant={"contentHeading3"} fontWeight={"400"} ml={5} pt={5}>
						Account Settings
					</Text>
					<Box layerStyle={"flexCenter"}>
						<Box
							w={"33%"}
							h={"93px"}
							layerStyle={"flexCenter"}
							m={"25px 0px 0px 25px"}
							gap={"40px"}
							borderRight={"2px solid #D9D9D9"}
						>
							<Box layerStyle={"flexCenterFlexStart"}>
								<Image src="/images/Web3.svg" alt=" "></Image>
								<Box layerStyle={"flexColumn"}>
									<Text variant={"SettingsText1"} ml={"15px"}>
										Web 3
									</Text>
									<Text variant={"SettingsText2"} ml={"15px"}>
										Not Verified
									</Text>
								</Box>
							</Box>
							<Button
								variant={"outline"}
								border={"1px"}
								width={"110px"}
								height={"34px"}
								background={useColorModeValue("#FFFFFF", "#191919")}
							>
								<Text
									variant={"SettingsButtonText"}
									color={useColorModeValue("#191919", "#FFFFFF")}
								>
									Verify
								</Text>
							</Button>
						</Box>

						<Box
							w={"33%"}
							h={"93px"}
							layerStyle={"flexCenter"}
							ml={"15px"}
							mt={"25px"}
							gap={"50px"}
							borderRight={"2px solid #D9D9D9"}
						>
							<Box layerStyle={"flexCenterFlexStart"}>
								<Image src="/images/Google.svg" alt=" "></Image>
								<Box layerStyle={"flexColumn"}>
									<Text variant={"SettingsText1"} ml={"15px"}>
										Email
									</Text>
									<Text variant={"SettingsText2"} ml={"15px"}>
										Not Added
									</Text>
								</Box>
							</Box>
							<Button
								variant={"outline"}
								border={"1px"}
								width={"110px"}
								height={"34px"}
								background={useColorModeValue("#FFFFFF", "#191919")}
							>
								<Text
									variant={"SettingsButtonText"}
									color={useColorModeValue("#191919", "#FFFFFF")}
								>
									Add Email
								</Text>
							</Button>
						</Box>

						<Box
							w={"33%"}
							h={"93px"}
							layerStyle={"flexCenter"}
							ml={"15px"}
							mt={"25px"}
							gap={"50px"}
						>
							<Box layerStyle={"flexCenterFlexStart"}>
								<Image src="/images/Twitter.svg" alt=" "></Image>
								<Box layerStyle={"flexColumn"}>
									<Text variant={"SettingsText1"} ml={"15px"}>
										Twitter
									</Text>
									<Text variant={"SettingsText2"} ml={"15px"}>
										Not Added
									</Text>
								</Box>
							</Box>
							<Button
								variant={"outline"}
								border={"1px"}
								width={"110px"}
								height={"34px"}
								background={useColorModeValue("#FFFFFF", "#191919")}
							>
								<Text
									variant={"SettingsButtonText"}
									color={useColorModeValue("#191919", "#FFFFFF")}
								>
									Add Twitter
								</Text>
							</Button>
						</Box>
					</Box>
				</Box>

				<Box
					height={"230px"}
					flexShrink={"0"}
					borderRadius={"6px"}
					background={useColorModeValue("#FFFFFF", "#202020")}
					boxShadow={"0px 4px 4px 0px rgba(0, 0, 0, 0.05)"}
					m={"20px 20px 0px 33px"}
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
								alt=" "
							/>
							<Box layerStyle={"flexCenterFlexStart"} mt={"10px"}>
								{/* <DynamicIcon
                                    name={colorMode === "light" ? "green_tick" : "unticked"}
                                /> */}
								<Text
									variant={" h6"}
									textTransform={"uppercase"}
									color={useColorModeValue("#191919", "#FFFFFF")}
									m={"2px 0px 0px 15px"}
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
								alt=" "
								unoptimized="true"
								priority="true"
							/>
							<Box layerStyle={"flexCenterFlexStart"} mt={"10px"}>
								<DynamicIcon
									name={colorMode === "light" ? "green_tick" : "unticked"}
								/>
								<Text
									variant={" h6"}
									textTransform={"uppercase"}
									color={useColorModeValue("#191919", "#FFFFFF")}
									m={"2px 0px 0px 15px"}
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
									layerStyle={" h6"}
									textTransform={"uppercase"}
									color={useColorModeValue("#191919", "#FFFFFF")}
									m={"2px 0px 0px 15px"}
								>
									DARK THEME
								</Text>
							</Box>
						</Box>
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
						<Box layerStyle={"flexSpaceBetween"} p={"50px 35px 20px 50px"}>
							<Text variant={"contentHeading3"} fontWeight={"400"}>
								Delete Account
							</Text>
							<Text variant={"SettingsText3"} mx={"25px"} mt={"5px"}>
								We will retain your data for 15 days and then it will be permanently deleted. You can reactivate your account at any point within 15 days of deactivation by logging back in.
							</Text>
							<Button
								width={"150px"}
								height={"28px"}
								variant={"outline"}
								border={"1px"}
								onClick={() => dispatch(LogoutReducer())}
							>
								<Text
									variant={"SettingsButtonText"}
									_light={{ color: "#191919" }}
									_dark={{ color: "#FFFFFF" }}
								>
									Delete Account
								</Text>
							</Button>
						</Box>

						<Box layerStyle={"flexSpaceBetween"} p={"50px 35px 90px 50px"}>
							<Text variant={"contentHeading3"} fontWeight={"400"}>
								Logout of BetygFi
							</Text>
							<Text variant={"SettingsText3"} mx={"25px"} mt={"5px"}>
								After logging out, the verification information for the current
								address will be deleted from your browser.
							</Text>
							<Button
								width={"116px"}
								height={"28px"}
								variant={"outline"}
								border={"1px"}
								onClick={() => dispatch(LogoutReducer())}
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
				<Text variant={"contentHeading2"} p={"25px 0px 25px 15px"}>
					Profile Settings
				</Text>
				<Box
					height={"525px"}
					flexShrink={0}
					borderRadius={"6px"}
					background={useColorModeValue("#FFFFFF", "#202020")}
					mx={"15px"}
				>
					<Box p={"15px 0px 20px 21px"} layerStyle={"flexCenterSpaceBetween"}>
						<Text variant={"contentHeading3"} fontWeight={"400"}>
							Profile Details
						</Text>
						<Image src={useColorModeValue("/icons/Edit_icon.svg", "/icons/Edit_icon(Dark).svg")} alt=" " mr={"25px"}></Image>
					</Box>

					<Box layerStyle={"flexColumnCenterSpaceAround"}>
						<Image
							borderRadius={"full"}
							boxSize={"150px"}
							alt=" "
							src="/images/Profile_photo.svg"
						></Image>
						<Text variant={"smallTableHeader"} lineHeight={"normal"} pt={"15px"}>
							Cameron Williamson
						</Text>
						<Text variant={"h3"} lineHeight={"normal"} color={useColorModeValue("#757575", "#A5A5A5")} pt={"10px"}>
							@TBgjD…CYVg4
						</Text>
						<Text variant={"h3"} lineHeight={"normal"} color={useColorModeValue("#757575", "#A5A5A5")} pt={"10px"}>
							Member since: 12/11/2022
						</Text>
						<Box mx={"20px"} pt={"25px"}>
							<Text variant={"h3"} lineHeight={"normal"} color={useColorModeValue("#757575", "#A5A5A5")}>
								About Me:
							</Text>
							<Text variant={"h3"} lineHeight={"normal"} color={useColorModeValue("#191919", "#FFFFFF")} paddingTop={"10px"}>
								I’m a crypto enthusiast—navigating the blockchain with a passion for decentralized innovation and a keen eye on the ever-evolving landscape, reshaping the future of finance one digital asset at a time.
							</Text>
						</Box>
						<Box
							width={"290px"}
							height={"50px"}
							background={"#494949"}
							borderRadius={"10px"}
							mt={"20px"}
						>
							<Box p={"5px 0px 20px 13px"} borderColor={"#A4A8AB"} layerStyle={"flexCenterSpaceBetween"}>
								<Box layerStyle={"flexCenter"}>
									<Text variant={"profileText"}>
										Profile Score
									</Text>
									<Image src="/icons/question_mark_lg_icon.svg" alt=" " ml={"15px"}></Image>
								</Box>
								<Text variant={"profileText"} fontSize={"24px"} p={"5px 24px"}>
									72
								</Text>
							</Box>
						</Box>
					</Box>
				</Box>

				<Box
					height={"500px"}
					flexShrink={"0"}
					borderRadius={"6px"}
					background={useColorModeValue("#FFFFFF", "#202020")}
					m={"20px 15px 0px 15px"}
				>
					<Box p={"15px 0px 15px 20px"}>
						<Text variant={"contentHeading3"} fontWeight={400}>
							My Stats
						</Text>
					</Box>
					<Box>
						<Box layerStyle={"flexColumnCenterSpaceAround"}>
							<Text variant={"contentHeading4"} lineHeight={"normal"}>BetygFi Community</Text>
						</Box>
						<Box layerStyle={"flexCenter"} p={"25px 0px 0px"}>
							<Box w={"33%"} borderRight={"2px solid #D9D9D9"} p={"0px 20px"}>
								<Text variant={"bigNumericText"}>
									142
								</Text>
								<Text variant={"toastText"} color={useColorModeValue("#757575", "#A5A5A5")}>
									Followers
								</Text>
							</Box>
							<Box w={"34%"} borderRight={"2px solid #D9D9D9"} p={"0px 25px"}>
								<Text variant={"bigNumericText"}>
									386
								</Text>
								<Text variant={"toastText"} color={useColorModeValue("#757575", "#A5A5A5")}>
									Following
								</Text>
							</Box>
							<Box w={"33%"} p={"0px 25px"}>
								<Text variant={"bigNumericText"}>
									46
								</Text>
								<Text variant={"toastText"} color={useColorModeValue("#757575", "#A5A5A5")}>
									Posts
								</Text>
							</Box>
						</Box>
						<Box borderBottom={"2px solid #D9D9D9"} layerStyle={"flexColumnCenterSpaceAround"} mx={"25px"}>
							<Button variant={"settingsButton"} my={"30px"}>
								<Text variant={"SettingsButtonText"}>
									Go To Community
								</Text>
							</Button>
						</Box>

						<Box layerStyle={"flexColumnCenterSpaceAround"}>
							<Text variant={"contentHeading4"} lineHeight={"normal"} mt={"30px"}>BetygFi Data Studio</Text>
							<Box pl={"15px"} pt={"15px"}>
								<Text variant={"bigNumericText"}>
									142
								</Text>
								<Text variant={"toastText"} color={useColorModeValue("#757575", "#A5A5A5")}>
									My Queries
								</Text>
							</Box>
							<Button variant={"settingsButton"} my={"30px"}>
								<Text variant={"SettingsButtonText"}>
									Go To Data Studio
								</Text>
							</Button>
						</Box>
					</Box>
				</Box>

				<Box
					height={"285px"}
					flexShrink={"0"}
					borderRadius={"6px"}
					background={useColorModeValue("#FFFFFF", "#202020")}
					m={"15px 15px 20px 15px"}
				>
					<Box p={"15px 0px 20px 21px"}>
						<Text variant={"contentHeading3"} fontWeight={400}>
							Account Settings
						</Text>
					</Box>
					<Box
						mx={"23px"}
						layerStyle={"flexSpaceBetween"}
						borderBottom={"2px solid #D9D9D9"}
					>
						<Box layerStyle={"flexCenterFlexStart"}>
							<Image src="/images/Web3.svg" mb={"20px"} alt=""></Image>
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
							variant={"outline"}
							border={"1px"}
							width={"110px"}
							height={"34px"}
							background={useColorModeValue("#FFFFFF", "#191919")}
						>
							<Text
								variant={"SettingsButtonText"}
								color={useColorModeValue("#191919", "#FFFFFF")}
							>
								Verify
							</Text>
						</Button>
					</Box>

					<Box
						layerStyle={"flexSpaceBetween"}
						m={"21px 23px 0px 23px"}
						borderBottom={"2px solid #D9D9D9"}
					>
						<Box layerStyle={"flexCenter"}>
							<Image
								src="/images/Google.svg"
								mb={"20px"}
								ml={"7px"}
								alt=""
							></Image>
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
							variant={"outline"}
							border={"1px"}
							width={"110px"}
							height={"34px"}
							background={useColorModeValue("#FFFFFF", "#191919")}
						>
							<Text
								variant={"SettingsButtonText"}
								color={useColorModeValue("#191919", "#FFFFFF")}
							>
								Add Email
							</Text>
						</Button>
					</Box>

					<Box
						layerStyle={"flexSpaceBetween"}
						mx={"23px"}
						mt={"21px"}
					>
						<Box layerStyle={"flexCenterFlexStart"}>
							<Image
								src="/images/Twitter.svg"
								mb={"20px"}
								ml={"7px"}
								alt=""
							></Image>
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
							variant={"outline"}
							border={"1px"}
							width={"110px"}
							height={"34px"}
							background={useColorModeValue("#FFFFFF", "#191919")}
						>
							<Text
								variant={"SettingsButtonText"}
								color={useColorModeValue("#191919", "#FFFFFF")}
							>
								Add Twitter
							</Text>
						</Button>
					</Box>
				</Box>

				<Box
					height={"650px"}
					flexShrink={"0"}
					borderRadius={"6px"}
					background={useColorModeValue("#FFFFFF", "#202020")}
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
								{/* <Image src="/images/SelectBox.svg" alt="" ml={"21px"}></Image> */}
								<Box ml={"50px"}>
									<Text
										variant={" h6"}
										textTransform={"uppercase"}
										color={useColorModeValue("#191919", "#FFFFFF")}
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
								m={"12px 0px 0px 21px"}
							></Image>
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
										color={useColorModeValue("#191919", "#FFFFFF")}
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
								m={"12px 0px 0px 21px"}
							></Image>
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
										color={useColorModeValue("#191919", "#FFFFFF")}
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
								m={"12px 0px 0px 21px"}
							></Image>
						</Box>
					</Box>
				</Box>

				{preLoadedData?.data === null || preLoadedData?.data === undefined ? (
					<>
						<Box layerStyle={"flexColumn"} p={"30px 15px 90px 15px"}>
							<Text variant={"contentHeading3"} fontWeight={"400"}>
								Login to BetygFi
							</Text>
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
						<Box layerStyle={"flexColumn"} p={"30px 15px 30px 15px"}>
							<Text variant={"contentHeading3"} fontWeight={"400"}>
								Delete Account
							</Text>
							<Box mr={"15px"} mt={"15px"}>
								<Text variant={"SettingsText3"}>
									We will retain your data for 15 days and then it will be permanently deleted. You can reactivate your account at any point within 15 days of deactivation by logging back in.
								</Text>
							</Box>
							<Button
								width={"100%"}
								height={"28px"}
								variant={"outline"}
								mt={"15px"}
								border={"1px"}
							>
								<Text
									variant={"SettingsButtonText"}
									_light={{ color: "#191919" }}
									_dark={{ color: "#FFFFFF" }}
								>
									Delete Account
								</Text>
							</Button>
						</Box>

						<Box layerStyle={"flexColumn"} p={"20px 15px 100px 15px"}>
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
								onClick={() => dispatch(LogoutReducer())}
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
