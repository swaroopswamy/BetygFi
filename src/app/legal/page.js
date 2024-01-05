"use client";
import {
	Box, useColorModeValue, Text, Tab, TabList, TabPanels,
	Tabs, TabPanel, useColorMode
} from "@chakra-ui/react";
import TermsPanelComponent from "@components/pages/legal/terms";
import PrivacyPanelComponent from "@components/pages/legal/privacy";
import React, { useState } from "react";
import Image from "next/image";

const Legal = () => {
	const { colorMode } = useColorMode();
	const [tabIndex, setTabIndex] = useState(0);

	return (
		<>
			<Box
				display={{ base: "none", md: "block" }}
				width={"100%"}
				padding={"0px"}
			>
				<Box
					width={"100%"}
					height={"175px"}
					flexShrink={0}
					background={useColorModeValue("#E8E8E8", "#131313")}>
					<Box layerStyle={"flexSpaceBetween"}>
						<Box padding={"50px 0px 44px 74px"} >
							<Text variant={"bigHeading"} _light={{ color: "#000" }} _dark={{ color: "#FFF" }}>Legal</Text>
						</Box>
						<Box p={"9px 205px 16px 0px"}>
							<Image unoptimized="true"
								priority="true"
								src={useColorModeValue("/images/bg-logo.svg", "/images/bg-logo-dark.svg")}
								alt=" " width={153} height={150} flexShrink={0} />
						</Box>
					</Box>
				</Box>
				<Tabs onChange={(index) => setTabIndex(index)}>
					<TabList
						paddingLeft={{ base: "0px", md: "74px" }}
						w={{ base: "100%", sm: "100%", midSize: "auto", md: "auto" }}
						background={useColorModeValue("#E8E8E8", "#131313")}
					>
						<Tab
							padding="0"
							w={{ base: "100%", sm: "100%", midSize: "auto", md: "auto" }}
						>
							<Box
								layerStyle={"flexCenter"}
								w={{ base: "100%", sm: "100%", midSize: "auto", md: "auto" }}
								padding={{ base: "12px 6px 12px 6px", md: "13px 19px 12px 12px" }}
								bgColor={tabIndex === 0 ?
									(colorMode === 'light' ? "#202020" : "#FFFFFF") :
									(colorMode === 'light' ? "#F0F0F5" : "#202020")
								}
							>
								<Text
									variant={"TabText"}
									color={tabIndex === 0 ?
										(colorMode === 'light' ? "#FFFFFF" : "#000000") :
										(colorMode === 'light' ? "#000000" : "#FFFFFF")
									}
								>
									Terms & Conditions
								</Text>
							</Box>
						</Tab>
						<Tab
							padding="0"
							w={{ base: "100%", sm: "100%", midSize: "auto", md: "auto" }}
						>
							<Box
								w={{ base: "100%", sm: "100%", midSize: "auto", md: "auto" }}
								layerStyle={"flexCenter"}
								padding={{ base: "12px 6px 12px 6px", md: "13px 19px 12px 15x" }}
								bgColor={tabIndex === 1 ?
									(colorMode === 'light' ? "#202020" : "#FFFFFF") :
									(colorMode === 'light' ? "#F0F0F5" : "#202020")
								}
							>
								<Text
									variant={"TabText"}
									color={tabIndex === 1 ?
										(colorMode === 'light' ? "#FFFFFF" : "#202020") :
										(colorMode === 'light' ? "#202020" : "#FFFFFF")
									}
								>
									Privacy Policy
								</Text>
							</Box>
						</Tab>
					</TabList>
					<TabPanels>
						<TabPanel p="0px">
							<TermsPanelComponent />
						</TabPanel>
						<TabPanel p="0px">
							<PrivacyPanelComponent />
						</TabPanel>
					</TabPanels>
				</Tabs>
			</Box>

			{/* Mobile Optimization Part */}

			<Box
				display={{ base: "block", md: "none" }}
				maxW={"100%"}
				padding={"0px"}>
				<Box
					width={"100%"}
					height={"134px"}
					flexShrink={0}
					background={useColorModeValue("#E8E8E8", "#131313")}>
					<Box layerStyle={"flexSpaceBetween"}>
						<Box padding={"21px 0px 58px 20px"} >
							<Text variant={"contentHeading2"}>Legal</Text>
						</Box>
						<Box p={"6px 8px 28px 0px"}>
							<Image
								unoptimized="true"
								priority="true"
								src={useColorModeValue("/images/bg-logo.svg", "/images/bg-logo-dark.svg")}
								alt=" " width={102} height={100} flexShrink={0} />
						</Box>
					</Box>
				</Box>
				<Tabs onChange={(index) => setTabIndex(index)}>
					<TabList
						paddingLeft={{ base: "0px", md: "74px" }}
						paddingRight={{ base: "80px", md: "0px" }}
						w={{ base: "100%", sm: "100%", midSize: "auto", md: "auto" }}
						background={useColorModeValue("#E8E8E8", "#131313")}
					>
						<Tab
							padding="0"
							w={{ base: "100%", sm: "100%", midSize: "auto", md: "auto" }}
						>
							<Box
								layerStyle={"flexCenter"}
								w={{ base: "100%", sm: "100%", midSize: "auto", md: "auto" }}
								padding={{ base: "12px 6px 12px 6px", md: "13px 19px 12px 12px" }}
								bgColor={tabIndex === 0 ?
									(colorMode === 'light' ? "#202020" : "#FFFFFF") :
									(colorMode === 'light' ? "#F0F0F5" : "#202020")
								}
							>
								<Text
									variant={"TabText"}
									color={tabIndex === 0 ?
										(colorMode === 'light' ? "#FFFFFF" : "#000000") :
										(colorMode === 'light' ? "#000000" : "#FFFFFF")
									}
								>
									Terms & Conditions
								</Text>
							</Box>
						</Tab>
						<Tab
							padding="0"
							w={{ base: "100%", sm: "100%", midSize: "auto", md: "auto" }}
						>
							<Box
								w={{ base: "100%", sm: "100%", midSize: "auto", md: "auto" }}
								layerStyle={"flexCenter"}
								padding={{ base: "12px 6px 12px 6px", md: "13px 19px 12px 15x" }}
								bgColor={tabIndex === 1 ?
									(colorMode === 'light' ? "#202020" : "#FFFFFF") :
									(colorMode === 'light' ? "#F0F0F5" : "#202020")
								}
							>
								<Text
									variant={"TabText"}
									color={tabIndex === 1 ?
										(colorMode === 'light' ? "#FFFFFF" : "#202020") :
										(colorMode === 'light' ? "#202020" : "#FFFFFF")
									}
									fontWeight={tabIndex === 1 ? "700" : "400"}
								>
									Privacy Policy
								</Text>
							</Box>
						</Tab>
					</TabList>
					<TabPanels>
						<TabPanel p="0px">
							<TermsPanelComponent />
						</TabPanel>
						<TabPanel p="0px">
							<PrivacyPanelComponent />
						</TabPanel>
					</TabPanels>
				</Tabs>
			</Box>
		</>
	);
};

export default Legal;



