/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect } from "react";
import { Box, useColorModeValue, useDisclosure, useMediaQuery } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import "/styles/styles.scss";
import SidebarContent from "@/app/components/sidebar";
import Footer from "@/app/components/footer";
import Navbar from "@/app/components/header";
import { signIn, signOut, useSession } from "next-auth/react";
//import { StoreLoggedInUserDataGoogle, socialLoginGoogle } from "@/redux/auth_data/authSlice";
import { AUTH_COOKIE_NAME } from "@util/utility";
import { getCookieByName } from "@util/cookieHelper";
import isEmpty from "is-empty";
import { useDisconnect } from "wagmi";

export default function LayoutProvider({ children }) {
	const [isMd] = useMediaQuery("(min-width: 768px)");
	//const dispatch = useDispatch();
	const { onOpen, onClose } = useDisclosure();
	const isSidebarCollapsed = useSelector(
		(state) => state?.appData?.isSidebarCollapsed
	);
	const isMobileSidebarCollapsed = useSelector(
		(state) => state?.appData?.isMobileSidebarCollapsed
	);
	const { disconnect } = useDisconnect();
	const { status, update } = useSession();

	/* const GoogleVerifiedData = useSelector((state) => state.authData.GoogleVerifiedData);
	
		useEffect(() => {
			if (AuthSession?.id_token) {
				if (!getCookieByName(AUTH_COOKIE_NAME)) {
					const payload = {
						token: AuthSession?.id_token
					};
					dispatch(socialLoginGoogle(payload));
				}
			} else {
				if (AuthSession?.user?.name) { update(); }
			}
		}, [AuthSession]);
	
	
		useEffect(() => {
			if (GoogleVerifiedData.isSuccess) {
				dispatch(StoreLoggedInUserDataGoogle());
			}
		}, [GoogleVerifiedData]); */

	useEffect(() => {
		const visibilityHandler = async () => {

			if (document.visibilityState === "visible") {
				const cookie = getCookieByName(AUTH_COOKIE_NAME);

				// checking autheticated or not
				if (status === "authenticated") {
					// someone logsout from other microservice
					if (isEmpty(cookie)) {
						disconnect();
						signOut({ callbackUrl: process.env.NEXTAUTH_URL });
					} else {
						// no work required here
					}
				} else {
					// if not authenticated and no cookie is present means no user
					// if cookie is present means user logged in from somewhere else
					if (cookie !== undefined) {
						const cookie = getCookieByName(AUTH_COOKIE_NAME);
						if (status !== "authenticated") {
							const verifiedState = {
								token: cookie?.state?.token,
								public_address: cookie?.state?.public_address,
								isWeb3: true
							};
							signIn('web3', verifiedState);
							/* else {
							   signIn('google');
						   } */
						}
					}

				}
			}
		};
		window.addEventListener("visibilitychange", visibilityHandler, false);

		return () => window.removeEventListener("visibilitychange", visibilityHandler, false);
	}, [update]);

	useEffect(() => {
		const cookie = getCookieByName(AUTH_COOKIE_NAME);
		if (cookie !== undefined) {
			const cookie = getCookieByName(AUTH_COOKIE_NAME);
			if (status !== "authenticated") {
				const verifiedState = {
					token: cookie?.state?.token,
					public_address: cookie?.state?.public_address,
					isWeb3: true
				};
				signIn('web3', verifiedState);
				/* else {
				   signIn('google');
			   } */
			}
		} else {
			if (status === "authenticated") {
				signOut({ callbackUrl: process.env.NEXTAUTH_URL });
			}
		}
	}, []);
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
