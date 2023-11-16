"use client";
import React from "react";
import { Box, useColorModeValue, useDisclosure, useMediaQuery } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import "/styles/styles.scss";
import SidebarContent from "@/app/components/sidebar";
import Footer from "@/app/components/footer";
import Navbar from "@/app/components/header";

export default function LayoutProvider({ children }) {
	const [isMd] = useMediaQuery("(min-width: 768px)");

	const { onOpen, onClose } = useDisclosure();
	const isSidebarCollapsed = useSelector(
		(state) => state?.appData?.isSidebarCollapsed
	);
	const isMobileSidebarCollapsed = useSelector(
		(state) => state?.appData?.isMobileSidebarCollapsed
	);
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
