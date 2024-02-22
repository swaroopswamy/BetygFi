"use client";
import {
	Box,
	useColorModeValue,
	Text,
	Button,
	useDisclosure,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	Input,
	FormControl,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import dynamic from "next/dynamic";

const LoginPage = dynamic(() => import("@components/login"));
import { LogoutReducer } from "@redux/auth_data/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "next-auth/react";
import { useDisconnect } from "wagmi";
import ThemeBox from "@components/settingsPage/themeBox";
import AppConfigContext from "@components/context/appConfigContext";

const Settings = () => {
	const appConfig = useContext(AppConfigContext);
	const dispatch = useDispatch();
	const { disconnect } = useDisconnect();
	const {
		isOpen: isLoginModalOpen,
		onOpen: onLoginModalOpen,
		onClose: onLoginModalClose,
	} = useDisclosure();
	const { isOpen, /* onOpen, */ onClose } = useDisclosure();
	const ValidatedUserData = useSelector((state) => state.authData.ValidatedUserData);
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
				<ThemeBox />


				{ValidatedUserData?.data === null || ValidatedUserData?.data === undefined ? (
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
								onClick={() => {
									disconnect();
									setTimeout(() => {
										dispatch(LogoutReducer());
										setTimeout(() => {
											signOut({ callbackUrl: appConfig.NEXTAUTH_URL });
										}, 200);
									}, 100);
								}}

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


				<ThemeBox />

				{ValidatedUserData?.data === null || ValidatedUserData?.data === undefined ? (
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
								onClick={() => {
									disconnect();
									setTimeout(() => {
										dispatch(LogoutReducer());
										setTimeout(() => {
											signOut({ callbackUrl: appConfig.NEXTAUTH_URL });
										}, 200);
									}, 100);
								}}
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
			<Modal isOpen={isOpen} onClose={onClose} size={{ base: "sm", md: "lg" }}>
				<ModalOverlay
					bg="blackAlpha.300"
					backdropFilter="blur(3px) hue-rotate(90deg)"
				/>
				<ModalContent background={useColorModeValue("#FFFFFF", "#313131")} mx={{ base: "18px", md: "0px" }}>
					<ModalHeader py={"40px"}>
						<Text variant={"approachPaperHeading"} lineHeight={"20px"}>
							Delete BetygFi Account Confirmation
						</Text>
					</ModalHeader>
					<ModalBody>
						<Text variant={"baseStyle"} color={useColorModeValue("#191919", "#FFFFFF")}>
							We’re sorry to see you go. We will retain your data for 15 days and then it will be permanently deleted. You can reactivate your account at any point within 15 days of deactivation by logging back in. Once your account is deleted, all your content will be permanently gone, including your profile, posts, queries, comments, and followers.
						</Text>
						<Box layerStyle={"flexCenterSpaceAround"}>
							<Text variant={"baseStyle"} color={useColorModeValue("#191919", "#FFFFFF")} p={"30px 0px 15px 0px"}>
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
};

export default Settings;
