"use client";
import { Box, Button, Text, useColorMode, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NotFoundPage() {
	const router = useRouter();
	const { colorMode } = useColorMode();
	const [isMd] = useMediaQuery("(min-width: 768px)");

	useEffect(() => {
		const footer = document.getElementById("betygfi-footer");
		footer.style.display = "none";
		return () => {
			footer.style.display = "block";
		};
	}, []);

	const renderMobile404 = () => (
		<Box
			overflowY={"hidden"}
			display={"flex"}
			backgroundColor={colorMode === "light" ? "#F0F0F5" : "#191919"}
			height={"100vh"}
			width={"100%!important"}
			flexDir={"column"}
			justifyContent={"center"}
			alignItems={"center"}
		>
			<Box
				zIndex={99}
				display={"flex"}
				justifyContent={"center"}
				alignItems={"center"}
				flexDir={"column"}
			>
				<Box display={"flex"} flexDir={"row"}>
					<Image
						width={75}
						height={75}
						src={`/images/404-${colorMode}-4.svg`}
						alt="4"
					/>
					<Image
						width={150}
						height={150}
						src={`/images/universe-${colorMode}.svg`}
						alt="universe"
					/>
					<Image
						width={75}
						height={75}
						src={`/images/404-${colorMode}-4.svg`}
						alt="4"
					/>
				</Box>
				<Text mt={"25px"} variant={"h4"}>
					The page can not be found
				</Text>
				<Text mt={"50px"} variant={"h4"}>
					Based on what you are looking for,
				</Text>
				<Text mt={"10px"} variant={"h4"}>
					the links below might help.
				</Text>
				<Box layerStyle={"flexCenter"} justifyContent={"center"} mt={"20px"}>
					<Button
						variant={"outline"}
						height={"30px"}
						width={"85px"}
						style={{ borderRadius: "24px 24px 24px 24px" }}
						borderColor={"2px solid #191919"}
						onClick={() => router.push("/")}
					>
						Home
					</Button>
				</Box>
			</Box>
			<Box
				position={"fixed"}
				height={"100vh"}
				width={"100vw"}
				backgroundRepeat={"no-repeat"}
				backgroundImage={`url('/images/404-${colorMode}-bg.svg')`}
			>
			</Box>
		</Box>
	);

	const renderDesktop404 = () => (
		<Box
			overflowY={"hidden"}
			display={"flex"}
			backgroundColor={colorMode === "light" ? "#F0F0F5" : "#191919"}
			height={"100vh"}
			width={"100%"}
			flexDir={"column"}
			justifyContent={"center"}
			alignItems={"center"}
		>
			<Box
				zIndex={99}
				display={"flex"}
				justifyContent={"center"}
				alignItems={"center"}
				flexDir={"column"}
			>
				<Box display={"flex"} flexDir={"row"}>
					<Image
						width={150}
						height={150}
						src={`/images/404-${colorMode}-4.svg`}
						alt="universe"
					/>
					<Image
						width={300}
						height={300}
						src={`/images/universe-${colorMode}.svg`}
						alt="universe"
					/>
					<Image
						width={150}
						height={150}
						src={`/images/404-${colorMode}-4.svg`}
						alt="universe"
					/>
				</Box>
				<Text mt={"25px"} variant={"bigText"}>
					The page can not be found
				</Text>
				<Text mt={"35px"} >
					Based on what you are looking for, the links below might help.
				</Text>
				<Box layerStyle={"flexCenter"} justifyContent={"center"} mt={"20px"} ml={"10px"}>
					<Button
						variant={"outline"}
						height={"35px"}
						width={"150px"}
						style={{ borderRadius: "24px 24px 24px 24px" }}
						borderColor={"2px solid #191919"}
						onClick={() => router.push("/")}
					>
						Home
					</Button>
				</Box>
			</Box>
			<Box
				position={"fixed"}
				top={70}
				left={360}
				right={0}
				height={"100vh"}
				width={"100vw"}
				backgroundRepeat={"no-repeat"}
				backgroundImage={`url('/images/404-${colorMode}-bg.svg')`}
			>
			</Box>
		</Box>
	);
	return (
		isMd ? renderDesktop404() : renderMobile404()
	);
}
