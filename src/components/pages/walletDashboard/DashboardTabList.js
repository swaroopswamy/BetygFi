import { Box, Tab, TabList, Text, useColorMode } from "@chakra-ui/react";
import { walletDashboardTabListData } from "@util/constant";
import Image from "next/image";
import React from "react";

const DashboardTabList = ({ tabIndex }) => (
	<TabList
		paddingLeft={{ base: "0px", md: "30px" }}
		w={{ base: "100%", sm: "100%", midSize: "auto", md: "auto" }}
	>
		{walletDashboardTabListData.map((tabData, index) => (
			<DashboardTabItem
				key={index}
				tabData={tabData}
				index={index}
				tabIndex={tabIndex}
			/>
		))}
	</TabList>
);

const DashboardTabItem = ({ tabData, tabIndex, index }) => {
	const { colorMode } = useColorMode();
	return (
		<Tab padding="0" w={{ base: "100%", sm: "100%", midSize: "auto", md: "auto" }}>
			<Box
				layerStyle={"flexCenter"}
				h={"35px"}
				w={{ base: "100%", sm: "100%", midSize: "auto", md: "auto" }}
				padding={{
					base: "12px 6px 12px 6px",
					md: "13px 19px 12px 12px",
				}}
				bgColor={
					tabIndex === index
						? colorMode === "light" ? "#202020" : "#FFFFFF"
						: colorMode === "light" ? "#F0F0F5" : "#202020"
				}
			>
				<Text
					fontSize={{ base: "12px", md: "14px" }}
					fontWeight={tabIndex === index ? "600" : "400"}
					color={
						tabIndex === index
							? colorMode === "light" ? "#FFFFFF" : "#000000"
							: colorMode === "light" ? "#000000" : "#FFFFFF"
					}
					mr={{ base: "10px", md: "44px" }}
					lineHeight={"10px"}>{tabData?.name}</Text>
				<Image
					width={25}
					height={25}
					alt="icon"
					// unoptimized="true"
					// priority="true"
					src={
						tabIndex === index
							? colorMode === "light" ? tabData?.iconLight : tabData?.iconDark
							: colorMode === "light" ? tabData?.iconDark : tabData?.iconLight
					}
				/>
			</Box>
		</Tab>
	);
};

export default DashboardTabList;
