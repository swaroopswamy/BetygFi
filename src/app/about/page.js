"use client";
import React from "react";
import { Box, Text, useColorMode } from "@chakra-ui/react";

const About = () => {
	const { colorMode } = useColorMode();

	return (
		<>
			<Box
				display={{ base: "none", md: "block" }}
				position={"relative"}
				maxWidth={"100%"}
				bg={colorMode === 'light' ? "#F0F0F5" : "#191919"}
			>
				<Box
					height={"25rem"}
					width={"100vw"}
					backgroundImage={'url("/images/sunshine.svg")'}
					backgroundPosition={"center"}
					backgroundRepeat={"no-repeat"}
					backgroundSize={"100% 100%"}
					display={"flex"}
					alignItems={"center"}
					justifyContent={"flex-start"}
					backgroundAttachment={"fixed"}
				>
					<Text
						// position={"absolute"}
						// top={"6%"}
						// left={"5%"}
						ml={"4rem"}
						color={"#FFF"}
						textShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
						fontSize={"54px"}
						fontWeight={700}
						lineHeight={"46px"}
					>
						About BetygFi
					</Text>
				</Box>
				<Box bg={colorMode === 'light' ? "#FFFFFF" : "#282828"} height={"1050px"} borderRadius={"6px"} m={"20px"}>
					<Box display={"flex"} p={"35px 20px"} width={"100%"} gap={"27px"}>
						<Box width={"28%"}>
							<Text variant={"approachPaperHeading"}>
								Democratizing Access to Information
							</Text>
						</Box>
						<Box width={"72%"}>
							<Text variant={"smApproachSmallText"}>At BetygFi, we are more than just a company; we are an Information Utility (emphasis supplied), dedicated to democratizing access to information. Blockchain as a technology is unique; it makes information available real-time. Notwithstanding public perception of blockchain as a technology, real-time access to financial data without a gatekeeper is unprecedented.</Text>
						</Box>
					</Box>
					<Box display={"flex"} p={"0px 20px"} width={"100%"} gap={"27px"}>
						<Box width={"28%"}>
							<Text variant={"approachPaperHeading"}>
								The Blockchain Challenge
							</Text>
						</Box>
						<Box width={"72%"} borderBottom={colorMode === 'light' ? "1px solid rgba(0, 0, 0, 0.2)" : "1px solid rgba(255, 255, 255, 0.2)"} pb={"35px"}>
							<Text variant={"smApproachSmallText"}>Despite real-time availability of financial data, the process of accessing data is technically challenging and understanding on-chain data is difficult. Bad actors have leveraged this information asymmetry, hence actors using blockchain have become synonymous with malicious conduct. Retail investors and the community have lost huge amounts of capital because of these bad actors (emphasis supplied).</Text>
						</Box>
					</Box>
					<Box display={"flex"} p={"0px 20px 35px"} width={"100%"} gap={"27px"}>
						<Box mt={"1.4rem"} width={"28%"}>
							<Text variant={"approachPaperHeading"}>
								BetygFi’s Vision
							</Text>
						</Box>
						<Box width={"72%"}>
							<Box borderBottom={colorMode === 'light' ? "1px solid rgba(0, 0, 0, 0.2)" : "1px solid rgba(255, 255, 255, 0.2)"}>
								<Text variant={"bigText"} p={"35px"} textAlign={"center"} >Sunlight is the Best Disinfectant</Text>
							</Box>
							<Box>
								<Text variant={"smApproachSmallText"} pt={"25px"}>BetygFi’s foundational thesis is that sunlight is the best disinfectant, it provides actionable intelligence on the blockchain ecosystem. It leverages proprietary ML modelling and AI to provide actionable intelligence to stakeholders viz. regulators and the community globally.</Text>
							</Box>
						</Box>
					</Box>
					<Box display={"flex"} p={"0px 20px"} width={"100%"} gap={"27px"}>
						<Box width={"28%"}>
							<Text variant={"approachPaperHeading"}>
								Same Activity, Same Risk, Same Regulation
							</Text>
						</Box>
						<Box width={"72%"} pb={"35px"}>
							<Text variant={"smApproachSmallText"}>
								BetygFi has built an approach that leverages its model to enable the foundational premise of the IMF-FSB paper which is the principle of ’’same activity, same risk, same regulation’’ (emphasis supplied).<br /><br />
								Our approach endeavors to simplify on-chain data, it enables stakeholders to better understand actors that inhabit the blockchain paradigm and take decision accordingly.
							</Text>
						</Box>
					</Box>
					<Box
						background={colorMode === 'light' ? "linear-gradient(180deg, #FFFBD4 0%, rgba(251,250,222,0.35) 100%)" : "#FFFBD3"}
						height={"150px"}
						mx={"20px"}
						borderRadius={"7px"}
					>
						<Text variant={"contentHeading"} fontSize={"21px"} color={"#191919"} mx={"25px"} paddingTop={"30px"}>
							Join us in our mission to bring transparency and intelligence to the blockchain ecosystem.
						</Text>
						<Text variant={"bigText"} fontWeight={600} color={"#191919"} mx={"30px"} paddingTop={"50px"}>
							BetygFi - where information becomes power.
						</Text>
					</Box>
				</Box>
			</Box>

			{/* Mobile Optimization Part */}
			<Box
				display={{ base: "block", md: "none" }}
				position={"relative"}
				maxWidth={"100%"}
				bg={colorMode === 'light' ? "#F0F0F5" : "#191919"}
			>
				<Box
					height={"10rem"}
					width={"100vw"}
					backgroundImage={'url("/images/sunshine_MO.svg")'}
					backgroundPosition={"center"}
					backgroundRepeat={"no-repeat"}
					backgroundSize={"cover"}
					display={"flex"}
					alignItems={"center"}
					justifyContent={"flex-start"}
				>
					<Text
						ml={"5%"}
						color={"#FFF"}
						textShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
						fontSize={"24px"}
						fontWeight={700}
						lineHeight={"46px"}
					>
						About BetygFi
					</Text>
				</Box>
				<Box bg={colorMode === 'light' ? "#FFFFFF" : "#282828"} height={"auto"}>
					<Box mx={"20px"} pt={"25px"} borderBottom={colorMode === 'light' ? "1px solid rgba(0, 0, 0, 0.2)" : "1px solid rgba(255, 255, 255, 0.2)"}>
						<Text variant={"approachPaperHeading"}>Democratizing Access to Information</Text>
						<Text variant={"smApproachSmallText"} pt={"15px"}>At BetygFi, we are more than just a company; we are an Information Utility (emphasis supplied), dedicated to democratizing access to information. Blockchain as a technology is unique; it makes information available real-time. Notwithstanding public perception of blockchain as a technology, real-time access to financial data without a gatekeeper is unprecedented.</Text>
						<Text variant={"approachPaperHeading"} pt={"25px"}>The Blockchain Challenge</Text>
						<Text variant={"smApproachSmallText"} pt={"15px"}>Despite real-time availability of financial data, the process of accessing data is technically challenging and understanding on-chain data is difficult. Bad actors have leveraged this information asymmetry, hence actors using blockchain have become synonymous with malicious conduct. Retail investors and the community have lost huge amounts of capital because of these bad actors (emphasis supplied).</Text>
						<Text variant={"approachPaperHeading"} pt={"25px"} pb={"15px"}>BetygFi’s Vision</Text>
					</Box>
					<Box layerStyle={"center"} mx={"20px"} borderBottom={colorMode === 'light' ? "1px solid rgba(0, 0, 0, 0.2)" : "1px solid rgba(255, 255, 255, 0.2)"}>
						<Text variant={"contentHeading4"} fontWeight={400} lineHeight={"24px"} pt={"25px"} pb={"25px"}>Sunlight is the Best Disinfectant </Text>
					</Box>
					<Box mx={"20px"}>
						<Text variant={"smApproachSmallText"} pt={"25px"}>BetygFi’s foundational thesis is that sunlight is the best disinfectant, it provides actionable intelligence on the blockchain ecosystem. It leverages proprietary ML modelling and AI to provide actionable intelligence to stakeholders viz. regulators and the community globally.</Text>
						<Text variant={"approachPaperHeading"} pt={"25px"}>Same Activity, Same Risk, Same Regulation</Text>
						<Text variant={"smApproachSmallText"} pt={"15px"}>BetygFi has built an approach that leverages its model to enable the foundational premise of the IMF-FSB paper which is the principle of ’’same activity, same risk, same regulation’’ (emphasis supplied).<br /><br />
							Our approach endeavors to simplify on-chain data, it enables stakeholders to better understand actors that inhabit the blockchain paradigm and take decision accordingly.</Text>
					</Box>
					<Box
						background={colorMode === 'light' ? "linear-gradient(180deg, #FFFBD4 0%, rgba(251,250,222,0.35) 100%)" : "#FFFBD3"}
						layerStyle={"flexColumnSpaceBetween"}
						height={"200px"}
						borderRadius={"7px"}
						mt={"20px"}
						marginBottom={"100px"}
					>
						<Text variant={"contentHeading4"} color={"#191919"} fontWeight={400} lineHeight={"24px"} mx={"20px"} pt={"15px"}>Join us in our mission to bring transparency and intelligence to the blockchain ecosystem. </Text>
						<Text variant={"approachPaperHeading"} fontWeight={600} color={"#191919"} mx={"20px"}>
							BetygFi - where information becomes power.
						</Text>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default About;
