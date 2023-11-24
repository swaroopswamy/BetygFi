/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect } from "react";
import { Box, useColorModeValue, useDisclosure, useMediaQuery } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import "/styles/styles.scss";
import SidebarContent from "@/app/components/sidebar";
import Footer from "@/app/components/footer";
import Navbar from "@/app/components/header";
import { useSession } from "next-auth/react";
import { StoreLoggedInUserDataGoogle, socialLoginGoogle } from "@/redux/auth_data/authSlice";

export default function LayoutProvider({ children }) {
	const [isMd] = useMediaQuery("(min-width: 768px)");
	const dispatch = useDispatch();
	const { onOpen, onClose } = useDisclosure();
	const isSidebarCollapsed = useSelector(
		(state) => state?.appData?.isSidebarCollapsed
	);
	const isMobileSidebarCollapsed = useSelector(
		(state) => state?.appData?.isMobileSidebarCollapsed
	);
	const { data: AuthSession, update } = useSession();
	const GoogleVerifiedData = useSelector(
		(state) => state.authData.GoogleVerifiedData
	);
	/* 	const LoggedInData = useSelector((state) => state.authData.LoggedInData);
	 */
	useEffect(() => {
		if (AuthSession?.id_token) {
			if (!localStorage.getItem("verifiedState")) {
				const payload = {
					token: AuthSession?.id_token,
				};
				dispatch(socialLoginGoogle(payload));
			}
		} else {
			if (AuthSession?.user?.name) {
				update();
			}
		}
	}, [AuthSession]);

	useEffect(() => {
		if (GoogleVerifiedData.isSuccess) {
			dispatch(StoreLoggedInUserDataGoogle());
		}
	}, [GoogleVerifiedData]);

	return (
		<Box
			width="100%"
			minH="100vh"
			bg={useColorModeValue("#F0F0F5", "#191919")}
			display={"flex"}
		>
			<SidebarContent
				onClose={() => onClose}
				w={isMobileSidebarCollapsed ? "null" : "80%"}
				h={"100%"}
			/>
			{isMd ? (
				<>
					<Box
						display={{
							base: "none",
							md: isMobileSidebarCollapsed ? "flex" : "none",
						}}
						flexDirection={"column"}
						className="margin-conditions"
						id="main-body"
						aria-expanded={isSidebarCollapsed ? "false" : "true"}

						w="100%"
						overflowX={"hidden"}
					>
						<Navbar onOpenMenu={onOpen} />
						<Box p="0"
							_light={{
								bgColor: "#FFF"
							}}
							_dark={{
								bgColor: "#131313"
							}}
							w="100%">
							{children}
							<Footer />
						</Box>
					</Box>

				</>
			) : (<>
				<Box
					display={{ base: "flex", md: "none" }}
					flexDirection={"column"}
					overflowX={"hidden"}
					mt={"60px"}

					w="100%"
				>
					<Navbar onOpenMenu={onOpen} />
					<Box p="0"
						_light={{
							bgColor: "#FFF"
						}}
						_dark={{
							bgColor: "#282828"
						}}
						w="100%">
						{children}
						<Footer />
					</Box>
				</Box>
			</>)}

		</Box>
	);
}
