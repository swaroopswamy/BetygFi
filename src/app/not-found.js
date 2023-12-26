"use client";
import { Box, Button, Text, useColorMode, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";
import React, { useEffect } from "react";
import Link from 'next/link';

export default function NotFoundPage() {

	const { colorMode } = useColorMode();
	const [isMd] = useMediaQuery("(min-width: 768px)");

	useEffect(() => {
		const footer = document.getElementById("betygfi-footer");
		footer.style.display = "none";
		return () => {
			footer.style.display = "block";
		};
	}, []);

	const navigateToPageList = [
		{
			btnText: "Defi Dashboard",
			btnTextMob: "Defi Dashboard",
			btnLink: "/protocol"
		},
		{
			btnText: "Coin Dashboard",
			btnTextMob: "Coin Dashboard",
			btnLink: "/coin"
		},
		{
			btnText: "Top Wallets",
			btnTextMob: "Top Wallets",
			btnLink: "/top-wallets"
		}
	];

	const renderMobile404 = () => (
		<Box
			overflowY={"hidden"}
			display={"flex"}
			backgroundColor={colorMode === "light" ? "#F0F0F5" : "#191919"}
			height={"100vh"}
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
				<Text mt={"50px"} variant={"h4"}>
					The page can not be found
				</Text>
				<Text mt={"40px"} variant={"h4"}>
					Based on what you are looking for,
				</Text>
				<Text mt={"10px"} variant={"h4"}>
					the links below might help.
				</Text>

				<Box display={"flex"} mt={"21px"} flexDir={"row"}>
					{
						navigateToPageList.map((page, index) => (
							<Box key={index} mr={"6px"}>
								<Link href={`${page.btnLink}`}>
									<CtaBtn colorMode={colorMode} btnText={page.btnTextMob} />
								</Link>
							</Box>
						))
					}
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
			width={"100vw"}
			marginLeft={"-100px"}
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
				<Text mt={"50px"} variant={"bigText"}>
					The page can not be found
				</Text>
				<Text mt={"70px"} >
					Based on what you are looking for, the links below might help.
				</Text>

				<Box display={"flex"} mt={"21px"} flexDir={"row"}>
					{
						navigateToPageList.map((page, index) => (
							<Box key={index} mr={"10px"}>
								<Link href={`${page.btnLink}`}>
									<CtaBtn colorMode={colorMode} btnText={page.btnText} />
								</Link>
							</Box>
						))
					}
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

const CtaBtn = ({ btnText, colorMode }) => {
	return (
		<Button
			border={colorMode === "dark" ? "1px solid rgba(255, 255, 255, 0.60)" : "1px solid #494949"}
			borderRadius={"1000px"}
			width={"100%"}>
			{btnText}
		</Button>
	);
};