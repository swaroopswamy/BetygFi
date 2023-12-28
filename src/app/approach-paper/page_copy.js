/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect, useState } from "react";
import {
	Box,
	useColorModeValue,
	Text,
	Link,
	Button,
} from "@chakra-ui/react";
import { TriangleUpIcon } from "@chakra-ui/icons";
import Image from "next/image";

const Footnote = ({ number, onClick }) => (
	<sup>
		<a
			href={`#footnote${number}`}
			onClick={() => onClick(number)}
			style={{ color: "#0000FF" }}
		>
			[{number}]
		</a>
	</sup>
);

const Approach = () => {
	const handleScrollToTop = () => {
		window !== undefined && window.scrollTo({ top: 0, behavior: "smooth" });
	};
	const [showScrollButton, setShowScrollButton] = useState(false);

	useEffect(() => {
		const handleScrollButtonVisibility = () => {
			window.scrollY > 300
				? setShowScrollButton(true)
				: setShowScrollButton(false);
		};

		window.addEventListener("scroll", handleScrollButtonVisibility);

		return () => {
			window.removeEventListener("scroll", handleScrollButtonVisibility);
		};
	}, []);

	// const [activeFootnote, setActiveFootnote] = useState(null);

	const showFootnote = (/* number */) => {
		// setActiveFootnote(number);
	};

	return (
		<Box maxW={"100%"} padding={"0px"}>
			<Box
				background={useColorModeValue("#E8E8E8", "#222")}
				display={{ base: "none", md: "block" }}
			>
				<Box layerStyle={"flexSpaceBetween"} h={"175px"}>
					<Box padding={"90px 0px 0px 50px"}>
						<Text
							variant={"bigHeading"}
							_light={{ color: "#000" }}
							_dark={{ color: "#FFF" }}
						>
							Approach Paper
						</Text>
					</Box>
					<Box width={"90%"} display={{ base: "none", md: "block" }}>
						<Box
							padding={"29px 0px 0px 50px"}
							color={useColorModeValue("#191919", "#FFFFFF")}
						>
							<Text padding={"10px 0px 20px 0px"}>
								We are an information utility that democratizes access to
								information. Blockchain as a technology is unique; it makes
								information available real-time. Notwithstanding public
								perception of blockchain as a technology, real-time access to
								financial data without a gatekeeper is unprecedented.{" "}
							</Text>

							<Text variant={"contentHeading5"}>Problem Statement </Text>
							<Text padding={"10px 0px 0px 20px"} variant={"content"}>
								Despite real-time availability of financial data, the process of
								accessing data is technically challenging and understanding
								on-chain data is difficult. Bad actors have leveraged this
								information asymmetry, hence actors using blockchain have become
								synonymous with malicious conduct.
								<Footnote number={1} onClick={showFootnote} /> Retail investors
								and the community have lost huge amounts of capital because of
								these bad actors.
								<br />
								<br />
								The blockchain ecosystem has evolved into a dynamic and complex
								market segment, with a myriad of actors and constituents
								interwoven in intricate relationships. As regulatory oversight
								becomes paramount, it is imperative to employ advanced ML/AI
								solutions to assess and monitor systemic risk embedded within
								this ecosystem effectively.
								<br />
								<br />
								Trust in the ecosystem has been the biggest casualty. Regulators
								globally, having taken note of repeated malicious conduct by
								actors, have started closely scrutinizing activity on the
								blockchain.
								<br />
								<br />
								The recent "IMF-FSB Synthesis Paper: Policies for Crypto-Assets"
								is a consequence of the collaborative effort between the
								International Monetary Fund (IMF) and the Financial Stability
								Board (FSB), considering the serious concern by regulators
								globally in the backdrop of the growing prominence of
								crypto-assets in the global economy.
								<br />
								<br />
								Regulators globally have recognized that crypto as an asset
								class poses significant macroeconomic and financial stability
								risk. It has the potential to undermine monetary policy and
								become a systemic threat to economies.
								<br />
								<br />
								The IMF-FSB Synthesis Paper therefore emphasizes the need for a
								comprehensive regulatory response and seeks global co-ordination
								to enable the same. It highlights concerns such as undermining
								monetary policy, fiscal risks, and the potential for systemic
								threats. The document emphasizes the need for a comprehensive
								regulatory response, advocating for strengthened monetary policy
								frameworks, clear tax treatments, and robust supervisory
								oversight.
								<Footnote number={2} onClick={showFootnote} />
								<br />
								<br />
								Notwithstanding the negative sentiment as recognized by the
								IMF-FSB paper, it is hard to ignore the unprecedented benefits
								of blockchain. Regulators globally whilst discouraging the
								traditional idea of cryptocurrency, have started exploring use
								cases premised on blockchain viz. CBDCs and are feverishly
								working towards developing mechanisms to better understand and
								regulate digital assets that utilize blockchain as the
								underlying infrastructure.
							</Text>

							<Text
								padding={"10px 0px 0px 20px"}
								variant={"content"}
								fontWeight={"600"}
							>
								BetygFi’s foundational thesis is that sunlight is the best
								disinfectant, it provides ‘information therapy’ for what ails
								the blockchain ecosystem. It leverages proprietary ML modelling
								and AI to provide actionable intelligence to stakeholders viz.
								regulators and the community globally.
								<br />
								<br />
								BetygFi has built an approach that leverages its model to enable
								the foundational premise of the IMF-FSB paper which is the
								principle of "same activity, same risk, same regulation."
							</Text>

							<Text padding={"10px 0px 0px 20px"} variant={"content"}>
								Our approach endeavors to simplify on-chain data and through
								actionable intelligence enables stakeholders to better
								understand actors that inhabit the blockchain paradigm.
								<br />
								<br />
								We present a comprehensive analysis of the systemic risk within
								the blockchain paradigm, leveraging a proprietary Machine
								Learning (ML) model that operates on real-time on-chain data.
								The model provides relative health and growth scoring of actors
								and constituents within the ecosystem, and further establishes
								relationship modeling to offer a holistic view of systemic risk.
								For further details, please reference the Methodology section.
								Additionally, a community feedback system has been integrated to
								enhance model performance through open access data contributions
								and insights generation.
							</Text>
						</Box>

						<Box
							padding={"29px 0px 0px 50px"}
							color={useColorModeValue("#191919", "#FFFFFF")}
						>
							<Text variant={"contentHeading5"}>Stack</Text>
							<Text padding={"10px 0px 0px 20px"} variant={"content"}>
								At the core of BetygFi is a stack developed by Solvendo. The
								stack leverages lessons from the decentralized financial
								ecosystem and the traditional financial ecosystem and utilizes
								foundational models to solve the fundamental problem that
								plagues all financial ecosystems – information asymmetry.
							</Text>

							<Box padding={"29px 0px 0px 50px"}>
								<Text variant={"contentHeading5"}>BetygFi Methodology: </Text>

								<Text padding={"10px 0px 0px 30px"} variant={"contentHeading6"}>
									ML Model for Real-Time Analysis:{" "}
								</Text>
								<Text padding={"10px 0px 0px 30px"} variant={"content"}>
									Our proprietary ML model processes real-time on-chain data to
									calculate health and growth scores for each entity within the
									blockchain ecosystem. These scores are derived from a
									comprehensive set of metrics, including transaction volume,
									smart contract activity, and network participation.{" "}
								</Text>

								<Text padding={"10px 0px 0px 30px"} variant={"contentHeading6"}>
									Relationship Graphs:{" "}
								</Text>
								<Text padding={"10px 0px 0px 30px"} variant={"content"}>
									The model constructs relationship graphs to illustrate the
									interdependencies among various modules within the ecosystem.
									This processing aids in understanding the systemic
									implications of disruptions or anomalies in specific entities
									or sectors and their correlations.{" "}
								</Text>

								<Text padding={"10px 0px 0px 30px"} variant={"contentHeading6"}>
									Health and Growth Scores{" "}
								</Text>
								<Text padding={"10px 0px 0px 30px"} variant={"content"}>
									The health and growth scores provide valuable insights into
									the stability and potential trajectory of individual actors
									and constituents. Entities with consistently high scores
									demonstrate robustness and positive growth potential, while
									those with declining scores may warrant further scrutiny.{" "}
								</Text>

								<Text padding={"10px 0px 0px 30px"} variant={"contentHeading6"}>
									Systemic Risk Indicators{" "}
								</Text>
								<Text padding={"10px 0px 0px 30px"} variant={"content"}>
									The model identifies key systemic risk indicators, including
									high concentration of influence, excessive dependence on
									specific entities, and anomalies in transaction patterns.
									These indicators serve as early warning signals for potential
									systemic vulnerabilities.{" "}
								</Text>

								<Text padding={"10px 0px 0px 30px"} variant={"contentHeading6"}>
									Open Access Data Platform{" "}
								</Text>
								<Text padding={"10px 0px 0px 30px"} variant={"content"}>
									The community feedback system fosters collaboration and
									transparency by providing an open access platform for
									stakeholders to contribute data and insights. This platform
									ensures a collective approach to risk assessment and enriches
									the model with diverse perspectives.{" "}
								</Text>

								<Text padding={"10px 0px 0px 30px"} variant={"contentHeading6"}>
									Feedback-Based Learning{" "}
								</Text>
								<Text padding={"10px 0px 0px 30px"} variant={"content"}>
									Insights generated from the community are integrated into the
									model, enabling it to adapt and refine its risk assessment
									capabilities over time. This iterative process ensures that
									the model remains responsive to evolving market dynamics.{" "}
								</Text>
							</Box>

							<Box padding={"29px 0px 20px 50px"}>
								<Text variant={"contentHeading5"}>Conclusion </Text>
								<Text padding={"10px 0px 0px 5px"}>
									{" "}
									The integration of a proprietary ML model, relationship
									graphs, and a community feedback system empowers stakeholders
									with a sophisticated toolkit for assessing systemic risk
									within the blockchain paradigm. This approach provides a
									comprehensive and transparent view of the ecosystem, allowing
									for targeted regulatory interventions and proactive risk
									management.{" "}
								</Text>

								<Text padding={"10px 0px 0px 30px"} variant={"contentHeading6"}>
									Continued Monitoring:
								</Text>
								<Text padding={"10px 0px 0px 30px"} variant={"content"}>
									{" "}
									Regularly monitor health and growth scores, as well as
									systemic risk indicators, to identify emerging trends and
									potential vulnerabilities.{" "}
								</Text>

								<Text padding={"10px 0px 0px 30px"} variant={"contentHeading6"}>
									Community Engagement:
								</Text>
								<Text padding={"10px 0px 0px 30px"} variant={"content"}>
									Encourage active participation from the blockchain community
									to enrich the dataset and refine the risk assessment model.{" "}
								</Text>

								<Text padding={"10px 0px 0px 30px"} variant={"contentHeading6"}>
									Regulatory Flexibility:
								</Text>
								<Text padding={"10px 0px 0px 30px"} variant={"content"}>
									Maintain a flexible regulatory framework that adapts to the
									evolving nature of the blockchain ecosystem, while ensuring
									safeguards against systemic risks.{" "}
								</Text>

								<Text padding={"10px 0px 0px 30px"} variant={"contentHeading6"}>
									Collaborative Research:
								</Text>
								<Text padding={"10px 0px 0px 30px"} variant={"content"}>
									Foster collaboration between regulators, industry
									stakeholders, and academia to advance research on blockchain
									systemic risk assessment methodologies.
								</Text>
								<Box>
									<Text variant={"contentHeading5"} marginTop={"20px"}>
										Footnotes
									</Text>

									<Box
										id={`footnote1`}
										fontSize={"10px"}
										variant={"footnoteTex"}
										marginTop={"5px"}
									>
										[1] It is our approach to identify the problem and solve for
										it agnostic of intent; for the consequences of actions
										notwithstanding intent are the same. It is debatable and the
										subject matter of judicial review as to whether actors that
										inhabit the crypto and blockchain space acted out of malice,
										negligence or both. It is, however, not a matter of debate
										that their actions had serious consequences on retail
										investors and the community. “Never attribute to malice what
										can be sufficiently explained by ignorance.”
									</Box>
									<Box
										id="footnote2"
										fontSize={"10px"}
										variant={"footnoteTex"}
										marginTop={"5px"}
									>
										[2] Please see the IMF-FSB Synthesis Paper:
										<Link
											target="_blank"
											color="#0000FF"
											href="https://www.fsb.org/wp-content/uploads/R070923-1.pdf"
										>
											https://www.fsb.org/wp-content/uploads/R070923-1.pdf
										</Link>
									</Box>
								</Box>
							</Box>
							{showScrollButton === true && (
								<Box
									_dark={{ bgcolor: "#FFFFFF" }}
									_
									light={{ bgcolor: "#16171B" }}
								>
									<Button
										alt=""
										mb={"5px"}
										component="button"
										onClick={handleScrollToTop}
										id="myBtn"
										height="30px"
										flexShrink="0"
										style={{
											position: "fixed",
											bottom: "80px",
											right: "20px",
											zIndex: "9999",
										}}
										_dark={{
											color: "#191919",
											bg: "#FFFF",
										}}
										_light={{
											color: "#FFFF",
											bg: "#191919",
										}}
									>
										<TriangleUpIcon mr={"5px"} />
										<Text fontSize={"9px"}>Back to Top</Text>
									</Button>
								</Box>
							)}
						</Box>
					</Box>
				</Box>
				<Box width={"90%"} display={{ base: "none", md: "block" }}>
					<Box
						padding={"29px 0px 0px 50px"}
						color={useColorModeValue("#191919", "#FFFFFF")}
					>
						<Text variant={"contentHeading3"} fontWeight={"600"}>
							1. Abstract:
						</Text>
						<Text padding={"10px 0px 0px 20px"} variant={"content"}>
							Decentralized Finance (DeFi) has gained significant traction in
							recent years. We believe that, in the future Decentralized Finance
							holds promise for it has the potential to democratize finance like
							never before; its potential is premised on its ability to comply
							with rules and regulations of the sovereign and its ability to
							continuously demonstrate that it does not intend to defraud the
							community that supports and nurtures it.
							<br />
							<br />
							BetygFi is a comprehensive machine learning-based approach to
							assess DeFi protocols. The goal is to evolve a robust, real time,
							neutral, self-learning approach towards analyzing DeFi’s.
							<br />
							<br />
							The model underpinning Betygfi currently analyses technical risk,
							centralization risk, financial/market risk, and userbase quality
							risks. The model currently leverages a combination of supervised
							and unsupervised learning techniques to enable classification of
							DeFi protocols/projects.
						</Text>
					</Box>

					{/* mobile Optimized part */}
					<Box
						background={useColorModeValue("#E8E8E8", "#222")}
						display={{ base: "block", md: "none" }}
					>
						<Box layerStyle={"spaceBetween"}>
							<Text variant={"bigHeading2"} ml={"20px"}>
								Approach Paper
							</Text>
							<Image
								unoptimized="true"
								priority="true"
								height={40}
								width={40}
								src={useColorModeValue(
									"/images/bg-logo.png",
									"/images/bg-logo-dark.png"
								)}
								alt="bg-logo"
							/>
						</Box>
					</Box>
					<Box width={"90%"} display={{ base: "block", md: "none" }}>
						<Box
							padding={"29px 0px 0px 20px"}
							color={useColorModeValue("#191919", "#FFFFFF")}
						>
							<Text padding={"10px 0px 20px 0px"}>
								We are an information utility that democratizes access to
								information. Blockchain as a technology is unique; it makes
								information available real-time. Notwithstanding public
								perception of blockchain as a technology, real-time access to
								financial data without a gatekeeper is unprecedented.{" "}
							</Text>
							<Text variant={"contentHeading5"}>Problem Statement</Text>
							<Text padding={"10px 0px 0px 20px"} variant={"content"}>
								Despite real-time availability of financial data, the process of
								accessing data is technically challenging and understanding
								on-chain data is difficult. Bad actors have leveraged this
								information asymmetry, hence actors using blockchain have become
								synonymous with malicious conduct.
								<Footnote number={1} onClick={showFootnote} /> Retail investors
								and the community have lost huge amounts of capital because of
								these bad actors.
								<br />
								<br />
								The blockchain ecosystem has evolved into a dynamic and complex
								market segment, with a myriad of actors and constituents
								interwoven in intricate relationships. As regulatory oversight
								becomes paramount, it is imperative to employ advanced ML/AI
								solutions to assess and monitor systemic risk embedded within
								this ecosystem effectively.
								<br />
								<br />
								Trust in the ecosystem has been the biggest casualty. Regulators
								globally, having taken note of repeated malicious conduct by
								actors, have started closely scrutinizing activity on the
								blockchain.
								<br />
								<br />
								The recent "IMF-FSB Synthesis Paper: Policies for Crypto-Assets"
								is a consequence of the collaborative effort between the
								International Monetary Fund (IMF) and the Financial Stability
								Board (FSB), considering the serious concern by regulators
								globally in the backdrop of the growing prominence of
								crypto-assets in the global economy.
								<br />
								<br />
								Regulators globally have recognized that crypto as an asset
								class poses significant macroeconomic and financial stability
								risk. It has the potential to undermine monetary policy and
								become a systemic threat to economies.
								<br />
								<br />
								The IMF-FSB Synthesis Paper therefore emphasizes the need for a
								comprehensive regulatory response and seeks global co-ordination
								to enable the same. It highlights concerns such as undermining
								monetary policy, fiscal risks, and the potential for systemic
								threats. The document emphasizes the need for a comprehensive
								regulatory response, advocating for strengthened monetary policy
								frameworks, clear tax treatments, and robust supervisory
								oversight.
								<Footnote number={2} onClick={showFootnote} />
								<br />
								<br />
								Notwithstanding the negative sentiment as recognized by the
								IMF-FSB paper, it is hard to ignore the unprecedented benefits
								of blockchain. Regulators globally whilst discouraging the
								traditional idea of cryptocurrency, have started exploring use
								cases premised on blockchain viz. CBDCs and are feverishly
								working towards developing mechanisms to better understand and
								regulate digital assets that utilize blockchain as the
								underlying infrastructure.
							</Text>

							<Text
								padding={"10px 0px 0px 20px"}
								variant={"content"}
								fontWeight={"600"}
							>
								BetygFi’s foundational thesis is that sunlight is the best
								disinfectant, it provides ‘information therapy’ for what ails
								the blockchain ecosystem. It leverages proprietary ML modelling
								and AI to provide actionable intelligence to stakeholders viz.
								regulators and the community globally.
								<br />
								<br />
								BetygFi has built an approach that leverages its model to enable
								the foundational premise of the IMF-FSB paper which is the
								principle of "same activity, same risk, same regulation."
							</Text>

							<Text padding={"10px 0px 0px 20px"} variant={"content"}>
								Our approach endeavors to simplify on-chain data and through
								actionable intelligence enables stakeholders to better
								understand actors that inhabit the blockchain paradigm.
								<br />
								<br />
								We present a comprehensive analysis of the systemic risk within
								the blockchain paradigm, leveraging a proprietary Machine
								Learning (ML) model that operates on real-time on-chain data.
								The model provides relative health and growth scoring of actors
								and constituents within the ecosystem, and further establishes
								relationship modeling to offer a holistic view of systemic risk.
								For further details, please reference the Methodology section.
								Additionally, a community feedback system has been integrated to
								enhance model performance through open access data contributions
								and insights generation.
							</Text>
						</Box>

						<Box
							padding={"29px 0px 0px 20px"}
							color={useColorModeValue("#191919", "#FFFFFF")}
						>
							<Text variant={"contentHeading5"}>Stack</Text>
							<Text padding={"10px 0px 0px 20px"} variant={"content"}>
								At the core of BetygFi is a stack developed by Solvendo. The
								stack leverages lessons from the decentralized financial
								ecosystem and the traditional financial ecosystem and utilizes
								foundational models to solve the fundamental problem that
								plagues all financial ecosystems – information asymmetry.
							</Text>

							<Box padding={"29px 0px 0px 15px"}>
								<Text variant={"contentHeading5"}>BetygFi Methodology: </Text>

								<Text padding={"10px 0px 0px 20px"} variant={"contentHeading6"}>
									ML Model for Real-Time Analysis:{" "}
								</Text>
								<Text padding={"10px 0px 0px 20px"} variant={"content"}>
									Our proprietary ML model processes real-time on-chain data to
									calculate health and growth scores for each entity within the
									blockchain ecosystem. These scores are derived from a
									comprehensive set of metrics, including transaction volume,
									smart contract activity, and network participation.{" "}
								</Text>

								<Text padding={"10px 0px 0px 20px"} variant={"contentHeading6"}>
									Relationship Graphs:{" "}
								</Text>
								<Text padding={"10px 0px 0px 20px"} variant={"content"}>
									The model constructs relationship graphs to illustrate the
									interdependencies among various modules within the ecosystem.
									This processing aids in understanding the systemic
									implications of disruptions or anomalies in specific entities
									or sectors and their correlations.{" "}
								</Text>

								<Text padding={"10px 0px 0px 20px"} variant={"contentHeading6"}>
									Health and Growth Scores{" "}
								</Text>
								<Text padding={"10px 0px 0px 20px"} variant={"content"}>
									The health and growth scores provide valuable insights into
									the stability and potential trajectory of individual actors
									and constituents. Entities with consistently high scores
									demonstrate robustness and positive growth potential, while
									those with declining scores may warrant further scrutiny.{" "}
								</Text>

								<Text padding={"10px 0px 0px 20px"} variant={"contentHeading6"}>
									Systemic Risk Indicators{" "}
								</Text>
								<Text padding={"10px 0px 0px 20px"} variant={"content"}>
									The model identifies key systemic risk indicators, including
									high concentration of influence, excessive dependence on
									specific entities, and anomalies in transaction patterns.
									These indicators serve as early warning signals for potential
									systemic vulnerabilities.{" "}
								</Text>

								<Text padding={"10px 0px 0px 20px"} variant={"contentHeading6"}>
									Open Access Data Platform{" "}
								</Text>
								<Text padding={"10px 0px 0px 20px"} variant={"content"}>
									The community feedback system fosters collaboration and
									transparency by providing an open access platform for
									stakeholders to contribute data and insights. This platform
									ensures a collective approach to risk assessment and enriches
									the model with diverse perspectives.{" "}
								</Text>

								<Text padding={"10px 0px 0px 20px"} variant={"contentHeading6"}>
									Feedback-Based Learning{" "}
								</Text>
								<Text padding={"10px 0px 0px 20px"} variant={"content"}>
									Insights generated from the community are integrated into the
									model, enabling it to adapt and refine its risk assessment
									capabilities over time. This iterative process ensures that
									the model remains responsive to evolving market dynamics.{" "}
								</Text>
							</Box>

							<Box padding={"29px 0px 20px 15px"}>
								<Text variant={"contentHeading5"}>Conclusion </Text>
								<Text padding={"10px 0px 0px 5px"}>
									{" "}
									The integration of a proprietary ML model, relationship
									graphs, and a community feedback system empowers stakeholders
									with a sophisticated toolkit for assessing systemic risk
									within the blockchain paradigm. This approach provides a
									comprehensive and transparent view of the ecosystem, allowing
									for targeted regulatory interventions and proactive risk
									management.{" "}
								</Text>

								<Text padding={"10px 0px 0px 20px"} variant={"contentHeading6"}>
									Continued Monitoring:
								</Text>
								<Text padding={"10px 0px 0px 20px"} variant={"content"}>
									{" "}
									Regularly monitor health and growth scores, as well as
									systemic risk indicators, to identify emerging trends and
									potential vulnerabilities.{" "}
								</Text>

								<Text padding={"10px 0px 0px 20px"} variant={"contentHeading6"}>
									Community Engagement:
								</Text>
								<Text padding={"10px 0px 0px 20px"} variant={"content"}>
									Encourage active participation from the blockchain community
									to enrich the dataset and refine the risk assessment model.{" "}
								</Text>

								<Text padding={"10px 0px 0px 20px"} variant={"contentHeading6"}>
									Regulatory Flexibility:
								</Text>
								<Text padding={"10px 0px 0px 20px"} variant={"content"}>
									Maintain a flexible regulatory framework that adapts to the
									evolving nature of the blockchain ecosystem, while ensuring
									safeguards against systemic risks.{" "}
								</Text>

								<Text padding={"10px 0px 0px 20px"} variant={"contentHeading6"}>
									Collaborative Research:
								</Text>
								<Text padding={"10px 0px 0px 20px"} variant={"content"}>
									Foster collaboration between regulators, industry
									stakeholders, and academia to advance research on blockchain
									systemic risk assessment methodologies.{""}
									<sup>
										<a href="#footnote1">1</a>
									</sup>
								</Text>
							</Box>
							<Box marginBottom={"30px"}>
								<Text variant={"contentHeading5"} marginTop={"20px"}>
									Footnotes
								</Text>

								<Box
									id={`footnote1`}
									fontSize={"10px"}
									variant={"footnoteTex"}
									marginTop={"5px"}
								>
									[1] It is our approach to identify the problem and solve for
									it agnostic of intent; for the consequences of actions
									notwithstanding intent are the same. It is debatable and the
									subject matter of judicial review as to whether actors that
									inhabit the crypto and blockchain space acted out of malice,
									negligence or both. It is, however, not a matter of debate
									that their actions had serious consequences on retail
									investors and the community. “Never attribute to malice what
									can be sufficiently explained by ignorance.”
								</Box>
								<Box
									id="footnote2"
									fontSize={"10px"}
									variant={"footnoteTex"}
									marginTop={"5px"}
								>
									[2] Please see the IMF-FSB Synthesis Paper:
									<Link
										target="_blank"
										color="#0000FF"
										href="https://www.fsb.org/wp-content/uploads/R070923-1.pdf"
									>
										https://www.fsb.org/wp-content/uploads/R070923-1.pdf
									</Link>
								</Box>
							</Box>
							{showScrollButton === true && (
								<Box
									_dark={{ bgcolor: "#FFFFFF" }}
									_
									light={{ bgcolor: "#16171B" }}
								>
									<Button
										alt=""
										mb={"5px"}
										component="button"
										onClick={handleScrollToTop}
										id="myBtn"
										height="30px"
										w={"80px"}
										flexShrink="0"
										style={{
											position: "fixed",
											bottom: "80px",
											right: "20px",
											zIndex: "9999",
										}}
										_dark={{
											color: "#191919",
											bg: "#FFFF",
										}}
										_light={{
											color: "#FFFF",
											bg: "#191919",
										}}
									>
										<TriangleUpIcon mr={"5px"} />
										<Text fontSize={"9px"}>Back to Top</Text>
									</Button>
								</Box>
							)}
						</Box>
					</Box>
				</Box>

				<Box
					padding={"29px 0px 0px 50px"}
					color={useColorModeValue("#191919", "#FFFFFF")}
				>
					<Text variant={"contentHeading3"} fontWeight={"600"}>
						3. Model Training Methodology
					</Text>
					<Text padding={"10px 0px 0px 20px"} variant={"content"}>
						Our approach combines supervised and unsupervised machine learning
						techniques to derive a comprehensive scoring system for DeFi
						protocols. With reference to the ETL process mentioned above,
						currently we first preprocess data by normalizing features; then
						deal with the missing values and encode categorical variables. We
						thereafter perform the following steps:
					</Text>

					<Box padding={"29px 0px 0px 70px"}>
						<Text variant={"contentHeading3"} fontWeight={"700"}>
							3.1 Unsupervised Learning
						</Text>
						<Box padding={"10px 0px 0px 45px"}>
							<ul>
								<li>
									{" "}
									<Text variant={"content"}>
										Implement clustering algorithms (e.g., K-means, DBSCAN) to
										identify patterns and group DeFi protocols based on their
										inherent risk characteristics.
									</Text>{" "}
								</li>
								<li>
									{""}
									<Text>
										Analyze the resulting clusters to derive insights into the
										risk profiles of different DeFi protocols.
									</Text>
									{""}
								</li>
							</ul>
						</Box>
					</Box>

					<Box padding={"29px 0px 0px 70px"}>
						<Text variant={"contentHeading3"} fontWeight={"700"}>
							3.2 Supervised Learning
						</Text>
						<Box padding={"10px 0px 0px 45px"}>
							<ul paddingTop={"10px"} variant={"content"} paddingLeft={"50px"}>
								<li>
									{" "}
									<Text variant={"content"}>
										{" "}
										Train classification models (e.g., Random Forest, Support
										Vector Machine, Neural Networks) on a labeled dataset, where
										each DeFi protocol is assigned a risk score based on expert
										opinion or historical performance.
									</Text>{" "}
								</li>
								<li>
									{" "}
									<Text variant={"content"}>
										{" "}
										Evaluate the performance of the classifiers using metrics
										such as accuracy, precision, recall, and F1 score.
									</Text>{" "}
								</li>
								<li>
									{" "}
									<Text variant={"content"}>
										Optimize the best-performing model using techniques such as
										hyperparameter tuning and feature selection.
									</Text>{" "}
								</li>
							</ul>
						</Box>
					</Box>
				</Box>

				<Box
					padding={"29px 0px 0px 50px"}
					color={useColorModeValue("#191919", "#FFFFFF")}
				>
					<Text variant={"contentHeading3"} fontWeight={"600"}>
						4. Model Evaluation:
					</Text>
					<Text padding={"10px 0px 0px 20px"} variant={"content"}>
						After training and optimizing the model, we evaluate the model's
						performance on a test dataset. We use a myriad of approaches
						including comparing the model’s generated scores with actual
						performance. We also analyze feature importance to understand the
						key factors contributing to the risk profiles of DeFi protocols.
					</Text>
				</Box>

				<Box
					padding={"29px 0px 0px 50px"}
					color={useColorModeValue("#191919", "#FFFFFF")}
				>
					<Text variant={"contentHeading3"} fontWeight={"600"}>
						5. Scoring:
					</Text>
					<Text padding={"10px 0px 0px 20px"} variant={"content"}>
						We truly believe that all the advances in machine learning including
						natural language processing (NLP) through foundation models, can
						best be utilized to navigate real world problems - by designing
						solutions that are binary but explainable. This approach enables
						users to understand and consume the output easily. This belief is at
						the core of Solvendo’s thesis and existence and is also reflected in
						the approach at BetygFi.
						<br />
						The Solvendo score that underpins the efforts at BetygFi is intended
						to enable users to understand at a glance, the risk reward profile
						of DeFi protocols to further enable informed decision making. As
						indicated above currently the score comprises an analysis of DeFi's
						technical, centralization, financial/market, and userbase quality
						risks.
					</Text>
				</Box>

				<Box
					padding={"29px 0px 0px 50px"}
					color={useColorModeValue("#191919", "#FFFFFF")}
				>
					<Text variant={"contentHeading3"} fontWeight={"600"}>
						6. Future:
					</Text>
					<Text padding={"10px 0px 0px 20px"} variant={"content"}>
						The model’s evolution will be reflected in the accuracy, predictive
						performance and therefore usefulness of the score. We have a broad
						outline of how we plan to train and evolve the model for the benefit
						of users and their better understanding of DeFi protocols/projects.
						<br />
						Keeping with our intention to continuously improve the accuracy and
						efficiency of the model, our ongoing efforts include as under:
					</Text>

					<Box padding={"29px 0px 0px 70px"}>
						<Text variant={"contentHeading3"} fontWeight={"700"}>
							6.1 Feature Set Expansion:
						</Text>
						<Text variant={"content"} padding={"10px 0px 10px 40px"}>
							Additional features will continuously be included to enable a
							comprehensive view of the risks associated with DeFi protocols. In
							our opinion, incorporating data on protocol-specific features or
							emerging risks would enhance the model's performance.
						</Text>
					</Box>

					<Box padding={"29px 0px 0px 70px"}>
						<Text variant={"contentHeading3"} fontWeight={"700"}>
							6.2 Real-Time Risk Assessment:
						</Text>
						<Text variant={"content"} padding={"10px 0px 10px 40px"}>
							It is our continuous pursuit to make our ETL process real time; to
							enable us to integrate real time data into the model, thus to
							enable dynamic real time risk assessment for DeFi protocols. We
							believe that such real time risk assessment would be a game
							changer in risk assessment and management.
						</Text>
					</Box>

					<Box padding={"29px 0px 0px 70px"}>
						<Text variant={"contentHeading3"} fontWeight={"700"}>
							6.3 Better Machine Learning Techniques:{" "}
						</Text>
						<Text variant={"content"} padding={"10px 0px 10px 40px"}>
							We continue to explore advancements in machine learning. The space
							is fast evolving and is at the moment witnessing a gold rush. As a
							consequence of these efforts, we expect promising first and second
							layer approaches and use cases. For example, better deep learning
							or ensemble methods could potentially improve the predictive
							performance of the model. Implementing recurrent neural networks
							(RNNs) or 4 transformers to analyze time-series data or using
							stacking techniques to combine the predictions of multiple models
							could yield better results.
						</Text>
					</Box>

					<Box padding={"29px 0px 0px 70px"}>
						<Text variant={"contentHeading3"} fontWeight={"700"}>
							6.4 Explainable Results:{" "}
						</Text>
						<Text variant={"content"} padding={"10px 0px 10px 40px"}>
							Notwithstanding all of the benefits of machine learning, we
							anticipate black box models will face significant challenges, as
							results and use cases from such models become more mainstream. It
							is accepted that increase in complexity of the model makes it more
							challenging to interpret, complexity also makes it difficult to
							understand the logic behind the model's decisions. Implementing
							explainable AI techniques, such as Shapley Additive Explanations
							(SHAP) values or Local Interpretable Model-agnostic Explanations
							(LIME), usually help stakeholders better understand the underlying
							reasons behind the model's risk assessments. It is our constant
							endeavor to deploy the best available tools to enable us to best
							explain our efforts and results.
						</Text>
					</Box>

					<Box padding={"29px 0px 0px 70px"}>
						<Text variant={"contentHeading3"} fontWeight={"700"}>
							6.5 Cross-Chain and Layer-2 Protocols:{" "}
						</Text>
						<Text variant={"content"} padding={"10px 0px 80px 40px"}>
							As the DeFi ecosystem continues to evolve, we expect more
							cross-chain and layer-2 protocols to emerge. Incorporating these
							new technologies into our risk assessment framework will be
							crucial to enable us to continue to provide a comprehensive and
							up-to-date understanding of the DeFi landscape and associated
							risks.
							<br />
							<br />
							Our approach is an attempt to explain transparently our value
							proposition and efforts. We hope to continuously strive to enable
							actionable insights for stakeholders in the decentralized
							financial ecosystem.
						</Text>
					</Box>
					{showScrollButton === true && (
						<Box
							_dark={{ bgcolor: "#FFFFFF" }}
							_
							light={{ bgcolor: "#16171B" }}
						>
							<Button
								alt=""
								mb={"5px"}
								component="button"
								onClick={handleScrollToTop}
								id="myBtn"
								height="30px"
								flexShrink="0"
								style={{
									position: "fixed",
									bottom: "80px",
									right: "20px",
									zIndex: "9999",
								}}
								_dark={{
									color: "#191919",
									bg: "#FFFF",
								}}
								_light={{
									color: "#FFFF",
									bg: "#191919",
								}}
							>
								<TriangleUpIcon mr={"5px"} />
								<Text fontSize={"9px"}>Back to Top</Text>
							</Button>
						</Box>
					)}
				</Box>
			</Box>
		</Box>
	);
};

export default Approach;
