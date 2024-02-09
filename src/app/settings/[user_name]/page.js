"use client";
import {
	Box,
	useColorMode,
	Text,
	Button,
	useDisclosure,
	Image,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	Input,
	FormControl,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";

const LoginPage = dynamic(() => import("@components/login"));
import { LogoutReducer, getUserCount, getUserDetails } from "@redux/auth_data/authSlice";
import DynamicIcon from "@components/icons/index_new";
import { useDispatch, useSelector } from "react-redux";
import ProfileBox from "@components/settingsPage/ProfileBox";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
//import Image from "next/image";

const Settings = ({ params }) => {
	const { user_name } = params;

	const { colorMode, toggleColorMode } = useColorMode();
	const dispatch = useDispatch();
	const {
		isOpen: isLoginModalOpen,
		onOpen: onLoginModalOpen,
		onClose: onLoginModalClose,
	} = useDisclosure();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const preLoadedData = useSelector((state) => state.authData.preLoadedData);

	const getUserDetailsHandler = () => {
		const payload = {
			user_name: user_name
		};
		dispatch(getUserDetails(payload));
	};

	const getUserCountHandler = () => {
		dispatch(getUserCount());
	};
	useEffect(() => {
		Promise.all([
			getUserDetailsHandler(),
			getUserCountHandler()
		]).then(res => res);
	}, []);

	const { data: AuthSession } = useSession();
	if (AuthSession === null) {
		return redirect("/");
	} else {
		return (
			<>
				<Box
					display={{ base: "none", md: "block" }}
					width={"100%"}
					_light={{
						bg: "#F0F0F5"
					}}
					_dark={{
						bg: "#191919"
					}}
					p={"20px 30px"}
				>
					<Text
						variant={"contentHeading"}
						lineHeight={"46px"}
						mb="18px"
					>
						Profile Settings
					</Text>
					<ProfileBox />
					<Box
						height={"250px"}
						borderRadius={"6px"}
						_light={{
							bg: "#FFFFFF"
						}}
						_dark={{
							bg: "#202020"
						}}
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
										<Text variant={"bigTextNumber"}>
											142
										</Text>
										<Text variant={"toastText"}
											_light={{
												color: "#757575"
											}}
											_dark={{
												color: "#A5A5A5"
											}}
											p={"10px 0px 0px 5px"}>
											Followers
										</Text>
									</Box>
									<Box w={"37%"} layerStyle={"flexCenter"} borderRight={"2px solid #D9D9D9"} pl={"20px"}>
										<Text variant={"bigTextNumber"}>
											386
										</Text>
										<Text variant={"toastText"}
											_light={{
												color: "#757575"
											}}
											_dark={{
												color: "#A5A5A5"
											}}
											p={"10px 5px 0px"}>
											Following
										</Text>
									</Box>
									<Box w={"30%"} layerStyle={"flexCenter"} pl={"20px"}>
										<Text variant={"bigTextNumber"}>
											46
										</Text>
										<Text variant={"toastText"}
											_light={{
												color: "#757575"
											}}
											_dark={{
												color: "#A5A5A5"
											}}
											p={"10px 5px 0px"}>
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
										<Text variant={"bigTextNumber"}>
											142
										</Text>
										<Text variant={"toastText"}
											_light={{
												color: "#757575"
											}}
											_dark={{
												color: "#A5A5A5"
											}} p={"10px 0px 0px 5px"}>
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
						_light={{
							bg: "#FFFFFF"
						}}
						_dark={{
							bg: "#202020"
						}}
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
									_light={{
										bg: "#FFFFFF"
									}}
									_dark={{
										bg: "#191919"
									}}
								>
									<Text
										variant={"SettingsButtonText"}
										_light={{
											color: "#191919"
										}}
										_dark={{
											color: "#FFFFFF"
										}}
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
									_light={{
										bg: "#FFFFFF"
									}}
									_dark={{
										bg: "#191919"
									}}

								>
									<Text
										variant={"SettingsButtonText"}
										_light={{
											color: "#191919"
										}}
										_dark={{
											color: "#FFFFFF"
										}}
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
									_light={{
										bg: "#FFFFFF"
									}}
									_dark={{
										bg: "#191919"
									}}
								>
									<Text
										variant={"SettingsButtonText"}
										_light={{
											color: "#191919"
										}}
										_dark={{
											color: "#FFFFFF"
										}}
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
						_light={{
							bg: "#FFFFFF"
						}}
						_dark={{
							bg: "#202020"
						}}
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
										_light={{
											color: "#191919"
										}}
										_dark={{
											color: "#FFFFFF"
										}}
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
										_light={{
											color: "#191919"
										}}
										_dark={{
											color: "#FFFFFF"
										}}
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
										_light={{
											color: "#191919"
										}}
										_dark={{
											color: "#FFFFFF"
										}}
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
									onClick={onOpen}
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
					_light={{
						bg: "#F0F0F5"
					}}
					_dark={{
						bg: "#191919"
					}}
				>
					<Text variant={"contentHeading2"} p={"25px 0px 25px 15px"}>
						Profile Settings
					</Text>
					<ProfileBox />
					<Box
						height={"500px"}
						flexShrink={"0"}
						borderRadius={"6px"}
						_light={{
							bg: "#FFFFFF"
						}}
						_dark={{
							bg: "#202020"
						}}
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
									<Text variant={"bigTextNumber"}>
										142
									</Text>
									<Text variant={"toastText"}
										_light={{
											color: "#757575"
										}}
										_dark={{
											color: "#A5A5A5"
										}}
									>
										Followers
									</Text>
								</Box>
								<Box w={"34%"} borderRight={"2px solid #D9D9D9"} p={"0px 25px"}>
									<Text variant={"bigTextNumber"}>
										386
									</Text>
									<Text variant={"toastText"}
										_light={{
											color: "#757575"
										}}
										_dark={{
											color: "#A5A5A5"
										}}

									>
										Following
									</Text>
								</Box>
								<Box w={"33%"} p={"0px 25px"}>
									<Text variant={"bigTextNumber"}>
										46
									</Text>
									<Text variant={"toastText"}
										_light={{
											color: "#757575"
										}}
										_dark={{
											color: "#A5A5A5"
										}}
									>
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
									<Text variant={"bigTextNumber"}>
										142
									</Text>
									<Text variant={"toastText"}
										_light={{
											color: "#757575"
										}}
										_dark={{
											color: "#A5A5A5"
										}}
									>
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
						_light={{
							bg: "#FFFFFF"
						}}
						_dark={{
							bg: "#202020"
						}}
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
								_light={{
									bg: "#FFFFFF"
								}}
								_dark={{
									bg: "#191919"
								}}
							>
								<Text
									variant={"SettingsButtonText"}
									_light={{
										color: "#191919"
									}}
									_dark={{
										color: "#FFFFFF"
									}}
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
								_light={{
									bg: "#FFFFFF"
								}}
								_dark={{
									bg: "#191919"
								}}
							>
								<Text
									variant={"SettingsButtonText"}
									_light={{
										color: "#FFFFFF"
									}}
									_dark={{
										color: "#191919"
									}}
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
								_light={{
									bg: "#FFFFFF"
								}}
								_dark={{
									bg: "#191919"
								}}
							>
								<Text
									variant={"SettingsButtonText"}
									_light={{
										color: "#191919"
									}}
									_dark={{
										color: "#FFFFFF"
									}}
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
						_light={{
							bg: "#FFFFFF"
						}}
						_dark={{
							bg: "#202020"
						}}
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
											_light={{
												color: "#191919"
											}}
											_dark={{
												color: "#FFFFFF"
											}}
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
											_light={{
												color: "#191919"
											}}
											_dark={{
												color: "#FFFFFF"
											}}
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
											_light={{
												color: "#191919"
											}}
											_dark={{
												color: "#FFFFFF"
											}} 
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
									onClick={onOpen}
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
				</Box >
				<LoginPage
					isOpen={isLoginModalOpen}
					onOpen={onLoginModalOpen}
					onClose={onLoginModalClose}
				/>
				<Modal isOpen={isOpen} onClose={onClose} size={{ base: "sm", md: "lg" }}>
					<ModalOverlay
						bg="blackAlpha.300"
						backdropFilter="blur(3px) hue-rotate(90deg)"
					/>
					<ModalContent
						_light={{
							bg: "#FFFFFF"
						}}
						_dark={{
							bg: "#313131"
						}}
						mx={{ base: "18px", md: "0px" }}>
						<ModalHeader py={"40px"}>
							<Text variant={"approachPaperHeading"} lineHeight={"20px"}>
								Delete BetygFi Account Confirmation
							</Text>
						</ModalHeader>
						<ModalBody>
							<Text variant={"baseStyle"}
								_light={{
									color: "#191919"
								}}
								_dark={{
									color: "#FFFFFF"
								}} >
								We’re sorry to see you go. We will retain your data for 15 days and then it will be permanently deleted. You can reactivate your account at any point within 15 days of deactivation by logging back in. Once your account is deleted, all your content will be permanently gone, including your profile, posts, queries, comments, and followers.
							</Text>
							<Box layerStyle={"flexCenterSpaceAround"}>
								<Text variant={"baseStyle"} 
									_light={{
										color: "#191919"
									}}
									_dark={{
										color: "#FFFFFF"
									}}  p={"30px 0px 15px 0px"}>
									To confirm deletion, type “delete” below:
								</Text>
							</Box>
							<FormControl px={{ base: "0px", md: "50px" }} borderRadius={"7px"}>
								<Input placeholder='Type “delete”' />
							</FormControl>
						</ModalBody>

						<ModalFooter
							justifyContent={{ base: "none", md: "space-evenly" }}
							layerStyle={{ base: "flexColumnCenterSpaceAround", md: "none" }}
							mx={{ base: "0px", md: "50px" }}
						>
							<Button variant={"modalButton"}>
								Confirm Account Deletion
							</Button>
							<Button onClick={onClose} variant={"modalButton"} mt={"20px"}>
								Cancel
							</Button>
						</ModalFooter>
					</ModalContent>
				</Modal>
			</>
		);
	}
};

export default Settings;
