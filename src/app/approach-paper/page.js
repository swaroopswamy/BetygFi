"use client";
import { TriangleUpIcon } from "@chakra-ui/icons";
import { Box, Button, Text, useMediaQuery } from "@chakra-ui/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const ApproachPaperPage = () => {
    const [isMd] = useMediaQuery("(min-width: 768px)");
    const [isVisible, setIsVisible] = useState(false);
    const [isBigVisible, setIsBigVisible] = useState(false);

    const scrollToElementById = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleScroll = () => {
        // Check if the user has scrolled down 200 pixels
        const scrollDiv = document.getElementById('main-body');

        if (scrollDiv.scrollTop > 200) {
            setIsBigVisible(true);
        } else {
            setIsBigVisible(false);
        }
    };

    const scrollToTop = () => {
        const scrollDiv = document.getElementById('main-body');
        scrollDiv.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        // Add scroll event listener when the component mounts
        const scrollDiv = document.getElementById('main-body');

        scrollDiv.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            scrollDiv.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const handleScrollToTopSmallScreen = () => {
        if (window.pageYOffset > 200) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };
    const scrollToTopSmallScreen = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        // Add scroll event listener when the component mounts
        window.addEventListener('scroll', handleScrollToTopSmallScreen);
        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScrollToTopSmallScreen);
        };
    }, []);
    return (
        <Box
            id="main-body"
            display={"flex"}
            px={{ sm: "10px", md: "30px" }}
            _light={{
                bgColor: "#F0F0F5"
            }}
            _dark={{
                bgColor: "#191919"
            }}
            flexDir={"column"}

        >
            <Text variant="approachPaperHeading" my="30px">Approach Paper</Text>
            <Box
                display={"flex"}
                px={{ sm: "10px", md: "25px" }}
                py={{ sm: "15px", md: "34px" }}
                borderRadius={"6px"}
                _light={{
                    bgColor: "#FFFFFF"
                }}
                _dark={{
                    bgColor: "#282828"
                }}
                flexDir={"column"}
                pos="relative"
            >
                <Box display={"flex"} flexDir={{ sm: "column", md: "row" }} mb="40px">
                    <Box w={{ sm: "100%", md: "30%" }} pr="10px">
                        <Text variant="approachPaperHeading" fontWeight={"500"} mb={{ sm: "10px" }}>
                            Introduction
                        </Text>
                    </Box>
                    <Box w={{ sm: "100%", md: "70%" }}>
                        <Text variant={"h4"} lineHeight={"28px"}>
                            BetygFi is an <b>Information Utility</b> (emphasis supplied) that democratizes access to information within the
                            blockchain ecosystem. This paper explores the challenges posed by bad actors in the blockchain space, the
                            evolving regulatory landscape, and BetygFi&apos;s innovative approach to addressing these issues.
                        </Text>
                    </Box>
                </Box>
                <Box display={"flex"} flexDir={{ sm: "column", md: "row" }} mb="40px">
                    <Box w={{ sm: "100%", md: "30%" }} pr="10px">
                        <Text variant="approachPaperHeading" fontWeight={"500"} lineHeight={"normal"} mb={{ sm: "10px" }}>
                            Real-Time Access to <br></br>
                            Financial Data
                        </Text>
                    </Box>
                    <Box w={{ sm: "100%", md: "70%" }}>
                        <Text variant={"h4"} lineHeight={"28px"} mb="32px">
                            Blockchain, as a technology, is unique; it makes information available real time. Notwithstanding public
                            perception of blockchain as a technology, real time access to financial data without a gatekeeper is
                            unprecedented. Despite real time availability of financial data, the process of accessing data is technically
                            challenging and understanding on chain data is difficult. Bad actors have leveraged this information
                            asymmetry, hence actors using blockchain have become synonymous with malicious conduct.<sup id="footnote-1" onClick={() => scrollToElementById('footnote-bottom-1')} style={{ cursor: "pointer" }}>[1]</sup>
                        </Text>
                        <Text
                            variant={'bigText'}
                            fontSize={{ sm: "18px", md: "32px" }}
                            _light={{
                                borderTop: "1px solid #000000",
                                borderBottom: "1px solid #000000"
                            }}
                            _dark={{
                                borderTop: "1px solid #FFFFFF",
                                borderBottom: "1px solid #FFFFFF"
                            }}
                            py="46px"
                            textAlign={"center"}
                        >
                            Retail investors and the community have lost huge
                            amounts of capital because of these bad actors.
                        </Text>
                    </Box>
                </Box>
                <Box display={"flex"} flexDir={{ sm: "column", md: "row" }} mb="40px">
                    <Box w={{ sm: "100%", md: "30%" }} pr="10px">
                        <Text variant="approachPaperHeading" fontWeight={"500"} lineHeight={"normal"} mb={{ sm: "10px" }}>
                            Regulatory Landscape
                        </Text>
                    </Box>
                    <Box w={{ sm: "100%", md: "70%" }}>
                        <Text variant={"h4"} lineHeight={"28px"} mb="30px">
                            The blockchain ecosystem has evolved into a dynamic and complex market segment, with a myriad of actors
                            and constituents interwoven in intricate relationships. As regulatory oversight becomes paramount, it is
                            imperative to employ advanced ML/AI solutions to assess and monitor systemic risk embedded within this
                            ecosystem effectively.
                        </Text>
                        <Text
                            variant={'bigText'}
                            fontSize={{ sm: "18px", md: "32px" }}
                            _light={{
                                borderTop: "1px solid #000000",
                                borderBottom: "1px solid #000000"
                            }}
                            _dark={{
                                borderTop: "1px solid #FFFFFF",
                                borderBottom: "1px solid #FFFFFF"
                            }}
                            py="46px"
                            textAlign={"center"}
                            mb="30px"
                        >
                            Trust in the ecosystem has been the biggest casualty.
                        </Text>
                        <Text variant={"h4"} lineHeight={"28px"}>
                            Regulators globally, having taken note of repeated malicious conduct by actors, have started closely
                            scrutinizing activity on the blockchain.
                        </Text>
                    </Box>
                </Box>

                <Box display={"flex"} flexDir={{ sm: "column", md: "row" }} mb="40px">
                    <Box w={{ sm: "100%", md: "30%" }} pr="10px">
                        <Text variant="approachPaperHeading" fontWeight={"500"} lineHeight={"normal"} mb={{ sm: "10px" }}>
                            IMF-FSB Synthesis
                            Paper
                        </Text>
                    </Box>
                    <Box w={{ sm: "100%", md: "70%" }}>
                        <Text variant={"h4"} mb="20px" lineHeight={"28px"}>
                            The recent &ldquo;IMF-FSB Synthesis Paper: Policies for Crypto Assets&rdquo; is a consequence of the collaborative
                            effort between the International Monetary Fund (IMF) and the Financial Stability Board (FSB), considering the
                            serious concern by regulators globally in the backdrop of the growing prominence of crypto assets in the
                            global economy.
                        </Text>
                        <Text variant={"h4"} mb="30px" lineHeight={"28px"} >
                            Regulators globally have recognized that crypto as an asset class poses significant macroeconomic and
                            financial stability risk.
                        </Text>
                        <Text
                            variant={'bigText'}
                            fontSize={{ sm: "18px", md: "32px" }}
                            _light={{
                                borderTop: "1px solid #000000",
                                borderBottom: "1px solid #000000"
                            }}
                            _dark={{
                                borderTop: "1px solid #FFFFFF",
                                borderBottom: "1px solid #FFFFFF"
                            }}
                            py="46px"
                            textAlign={"center"}
                            mb="30px"
                        >
                            It has the potential to undermine monetary policy and
                            become a systemic threat to economies.
                        </Text>
                        <Text variant={"h4"} lineHeight={"28px"} mb="30px">
                            The IMF-FSB Synthesis Paper therefore emphasizes the need for a comprehensive regulatory response and
                            seeks global co ordination to enable the same. It highlights concerns such as undermining monetary policy,
                            fiscal risks, and the potential for systemic threats. The document emphasizes the need for a comprehensive
                            regulatory response, advocating for strengthened monetary policy frameworks, clear tax treatments, and
                            robust supervisory oversight.<sup id="footnote-2" onClick={() => scrollToElementById('footnote-bottom-2')} style={{ cursor: "pointer" }}>[2]</sup>
                        </Text>
                        <Text variant={"h4"} lineHeight={"28px"}>
                            Notwithstanding the negative sentiment as recognized by the IMF-FSB paper, it is hard to ignore the
                            unprecedented benefits of blockchain. Regulators globally whilst discouraging the traditional idea of
                            cryptocurrency, have started exploring use cases premised on blockchain viz. CBDCs and are feverishly
                            working towards developing mechanisms to better understand and regulate digital assets that utilize
                            blockchain as an underlying infrastructure.
                        </Text>
                    </Box>
                </Box>
                <Box display={"flex"} flexDir={{ sm: "column", md: "row" }} mb="40px">
                    <Box w={{ sm: "100%", md: "30%" }} pr="10px">
                        <Text variant="approachPaperHeading" fontWeight={"500"} lineHeight={"normal"} mb={{ sm: "10px" }}>
                            BetygFi&apos;s Foundational Thesis
                        </Text>
                    </Box>
                    <Box w={{ sm: "100%", md: "70%" }}>
                        <Text variant={"h4"} lineHeight={"28px"} mb="40px">
                            BetygFi&apos;s foundational thesis is that sunlight is the best disinfectant, it provides actionable intelligence on the
                            blockchain ecosystem. It leverages proprietary ML modelling and AI to provide actionable intelligence to
                            stakeholders viz. regulators and the community globally.
                        </Text>
                        <Text
                            variant={'bigText'}
                            fontSize={{ sm: "18px", md: "32px" }}
                            _light={{
                                borderTop: "1px solid #000000",
                                borderBottom: "1px solid #000000"
                            }}
                            _dark={{
                                borderTop: "1px solid #FFFFFF",
                                borderBottom: "1px solid #FFFFFF"
                            }}
                            py="46px"
                            textAlign={"center"}

                        >
                            BetygFi has built an approach that leverages its model
                            to enable the foundational premise of the IMF-FSB
                            paper which is the principle of &ldquo;same activity, same
                            risk, same regulation &rdquo;.

                        </Text>
                    </Box>
                </Box>
                <Box display={"flex"} flexDir={{ sm: "column", md: "row" }} mb="40px">
                    <Box w={{ sm: "100%", md: "30%" }} pr="10px">
                        <Text variant="approachPaperHeading" fontWeight={"500"} lineHeight={"normal"} mb={{ sm: "10px" }}>
                            Simplifying On-Chain
                            Data
                        </Text>
                    </Box>
                    <Box w={{ sm: "100%", md: "70%" }}>
                        <Text variant={"h4"} lineHeight={"28px"} mb="30px">
                            Our approach endeavors to simplify on chain data, it enables stakeholders to better understand actors that
                            inhabit the blockchain paradigm and take decision accordingly. We present a comprehensive analysis of the
                            systemic risk within the blockchain paradigm, leveraging a proprietary Machine Learning (ML) model that
                            operates on real-time on chain data (emphasis supplied).
                        </Text>
                        <Text variant={"h4"} lineHeight={"28px"}>
                            The model provides relative health and growth scoring of actors and constituents within the ecosystem viz.
                            it attributes real time dynamic score to Decentralized Financial Organizations (DeFis), Coins/Tokens and
                            Wallets and further establishes relationship modeling to highlight real time systemic risk.<sup id="footnote-3" onClick={() => scrollToElementById('footnote-bottom-3')} style={{ cursor: "pointer" }}>[3]</sup>
                        </Text>
                    </Box>
                </Box>
                <Box display={"flex"} flexDir={{ sm: "column", md: "row" }} mb="40px">
                    <Box w={{ sm: "100%", md: "30%" }} pr="10px">
                        <Text variant="approachPaperHeading" fontWeight={"500"} lineHeight={"normal"} mb={{ sm: "10px" }}>
                            Stack
                        </Text>
                    </Box>
                    <Box w={{ sm: "100%", md: "70%" }}>
                        <Text variant={"h4"} lineHeight={"28px"}>
                            At the core of BetygFi is a stack developed by Solvendo. The stack leverages lessons from the decentralized
                            financial ecosystem and the traditional financial ecosystem and utilizes foundational models to solve the
                            fundamental problem that plagues all financial ecosystems information asymmetry.
                        </Text>
                    </Box>
                </Box>
                <Box display={"flex"} flexDir={{ sm: "column", md: "row" }} mb="40px">
                    <Box w={{ sm: "100%", md: "30%" }} pr="10px">
                        <Text variant="approachPaperHeading" fontWeight={"500"} lineHeight={"normal"} mb={{ sm: "10px" }}>
                            Community
                        </Text>
                    </Box>
                    <Box w={{ sm: "100%", md: "70%" }}>
                        <Text variant={"h4"} lineHeight={"28px"} mb="30px">
                            Our machine learning model constantly revisits its output and score though a learning loop. It is our
                            endeavour to build the most accurate, efficient and democratic model over time. As part of our endeavour to
                            ensure that our model is democratic, it is designed to constantly learn from the community
                        </Text>
                        <Text variant={"h4"} lineHeight={"28px"} mb="30px">
                            We have devoted significant thought, time and effort to build a square where the community engages with
                            each other and BetygFi, to enable us to learn from the community and reassess the machine learning model.
                        </Text>
                        <Text
                            variant={'bigText'}
                            fontSize={{ sm: "18px", md: "32px" }}
                            _light={{
                                borderTop: "1px solid #000000",
                                borderBottom: "1px solid #000000"
                            }}
                            _dark={{
                                borderTop: "1px solid #FFFFFF",
                                borderBottom: "1px solid #FFFFFF"
                            }}
                            py="46px"
                            textAlign={"center"}
                            mb="30px"
                        >
                            Our ability to learn from the community is underpinned
                            by technology that enables BetygFi to distinguish
                            between signal and noise.
                        </Text>
                        <Text variant={"h4"} lineHeight={"28px"}>
                            We hope to create community space, where the community has access to real time credible data and
                            actionable intelligence; and hope to incentivise the community to provide feedback, necessary to
                            democratise finance, through gamification.
                        </Text>
                    </Box>
                </Box>
                <Box display={"flex"}
                    flexDir={"column"}
                    p={"10px"}
                    bgColor={"#FFFBD3"}
                    borderRadius={"7px"}
                    className="list-body"
                >
                    <Text variant={"smApproachSmallHeading"}>
                        Highlights of BetygFi&apos;s Machine Learning model:
                    </Text>
                    <Box display={"flex"} flexDirection={"column"} pl="24px">
                        <ul>
                            <li>
                                <Text variant={"smApproachSmallHeading"}>
                                    ML Model for Real-Time Analysis:
                                </Text>
                            </li>
                        </ul>
                        <Text variant={"smApproachSmallText"} my="30px" color={"#3F3F41"}>
                            Our proprietary ML model processes real time on chain data to calculate risk scores for entities that leverage the blockchain ecosystem.
                            These scores are derived from a comprehensive set of metrics both financial and non financial, including transaction volume, volatility, smart
                            contract activity and network participation.
                        </Text>
                    </Box>
                    <Box display={"flex"} flexDirection={"column"} pl="24px">
                        <ul>
                            <li>
                                <Text variant={"smApproachSmallHeading"}>
                                    Relationship Graphs:
                                </Text>
                            </li>
                        </ul>
                        <Text variant={"smApproachSmallText"} my="30px" color={"#3F3F41"}>
                            The model constructs relationship graphs to illustrate the interdependencies among various modules within the ecosystem. This processing
                            aids in understanding the systemic implications of disruptions or anomalies in specific entities or sectors and their correlations.
                        </Text>
                    </Box>
                    <Box display={"flex"} flexDirection={"column"} pl="24px">
                        <ul>
                            <li>
                                <Text variant={"smApproachSmallHeading"}>
                                    Risk Score
                                </Text>
                            </li>
                        </ul>
                        <Text variant={"smApproachSmallText"} my="30px" color={"#3F3F41"}>
                            The Risk score provides valuable insights into the stability and potential trajectory of individual actors and constituents. Entities with
                            consistently high scores demonstrate robustness and positive growth potential, while those with declining scores may warrant further scrutiny
                        </Text>
                    </Box>
                    <Box display={"flex"} flexDirection={"column"} pl="24px">
                        <ul>
                            <li>
                                <Text variant={"smApproachSmallHeading"}>
                                    Systemic Risk Indicators
                                </Text>
                            </li>
                        </ul>
                        <Text variant={"smApproachSmallText"} my="30px" color={"#3F3F41"}>
                            The model identifies key systemic risk indicators, including high concentration of influence, excessive dependence on specific entities, and
                            anomalies in transaction patterns. These indicators serve as early warning signals for potential systemic vulnerabilities.
                        </Text>
                    </Box>
                    <Box display={"flex"} flexDirection={"column"} pl="24px">
                        <ul>
                            <li>
                                <Text variant={"smApproachSmallHeading"}>
                                    Open Access Data Platform (Data Studio)
                                </Text>
                            </li>
                        </ul>
                        <Text variant={"smApproachSmallText"} my="30px" color={"#3F3F41"}>
                            The Data Studio is designed to democratize data access and reduce information symmetry on account of lack of data access. It allows
                            proficient users to leverage BetygFi data repository to enable them to build applications, solutions and/or bespoke analysis. The Data Studio
                            will in time make data, technological tools and machine learning capabilities available to users.
                        </Text>
                    </Box>
                    <Box display={"flex"} flexDirection={"column"} pl="24px">
                        <ul>
                            <li>
                                <Text variant={"smApproachSmallHeading"}>
                                    Community and Feedback based Learning
                                </Text>
                            </li>
                        </ul>
                        <Text variant={"smApproachSmallText"} my="30px" color={"#3F3F41"}>
                            The community space enables the community to access real time credible data and actionable intelligence. We hope to incentivise the
                            community to actively participate and provide feedback on our machine learning efforts, necessary to democratise finance.
                        </Text>
                        <Text variant={"smApproachSmallText"} mb="30px" color={"#3F3F41"}>
                            Insights generated from the community are integrated into the model, enabling it to adapt and refine its risk assessment capabilities over time.
                            This iterative process ensures that the model remains responsive to evolving market dynamics and is democratic.
                        </Text>
                        <Text variant={"smApproachSmallText"} mb="20px" color={"#3F3F41"}>
                            We are working towards gamifying community participation to incentivise community to actively participate with BetygFi.
                        </Text>
                    </Box>
                </Box>
                <Text variant="approachPaperHeading" mt="30px" fontWeight={"700"} >
                    References
                </Text>
                <Text variant={"footNoteText"} mt="10px" mb="30px"
                    id={`footnote-bottom-1`}
                    onClick={() => scrollToElementById('footnote-1')}
                    cursor={"pointer"}
                >
                    [1] It is our approach to identify the problem and solve for it agnostic of intent; for the consequences of actions notwithstanding intent are the same. It is debatable and the subject matter of judicial review as to whether actors that inhabit the crypto and blockchain space acted out of malice, negligence or both. It is however not a matter of debate that their actions had serious consequences on retail investors and the community. <br></br>&ldquo;Never attribute to malice what can be sufficiently explained by ignorance&rdquo;
                </Text>
                <Text variant={"footNoteText"} mb="30px"
                    id={`footnote-bottom-2`}
                    onClick={() => scrollToElementById('footnote-2')}
                    cursor={"pointer"}
                >
                    [2] Please see the IMF-FSB Synthesis Paper: <Link href={"https://www.fsb.org/wp-content/uploads/R070923-1.pdf"} target="_blank" style={{ color: "#0066CC", textDecoration: "underline" }}>https://www.fsb.org/wp-content/uploads/R070923-1.pdf</Link>
                </Text>
                <Text variant={"footNoteText"} mb="30px"
                    id={`footnote-bottom-3`}
                    onClick={() => scrollToElementById('footnote-3')}
                    cursor={"pointer"}
                >
                    [3] Coin typically refers to a unit of digital currency. It&apos;s like the money you use in your wallet, but it exists in electronic form on the blockchain.
                </Text>
                <Text variant={"footNoteText"} mb="30px" pl="10px"
                    id={`footnote-bottom-3`}
                    onClick={() => scrollToElementById('footnote-3')}
                    cursor={"pointer"}
                >
                    A token is a digital asset that can represent a variety of assets or values. Tokens can be like certificates that represent ownership of something or the right to access certain services within a specific blockchain ecosystem.
                </Text>
                <Text variant={"footNoteText"} mb="30px" pl="10px"
                    id={`footnote-bottom-3`}
                    onClick={() => scrollToElementById('footnote-3')}
                    cursor={"pointer"}
                >
                    A digital wallet in blockchain is like a digital pocket that helps you store and manage your online coin/token.
                </Text>
                {isMd ? (isBigVisible && (
                    <Button
                        alt=""
                        mb={"5px"}
                        component="button"
                        onClick={scrollToTop}
                        id="myBtn"
                        flexShrink="0"
                        pos={"fixed"}
                        bottom={"30px"}
                        right={"60px"}
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
                        <Text fontSize={"14px"}>Back to Top</Text>
                    </Button>
                )) : (
                    isVisible && (<Button
                        component="button"
                        onClick={scrollToTopSmallScreen}
                        id="myBtn"
                        w="36px"
                        h="36px"
                        layerStyle={"center"}
                        borderRadius={"50%"}
                        pos={"fixed"}
                        bottom={"30px"}
                        right={"60px"}
                        _dark={{
                            color: "#191919",
                            bg: "#FFFF",
                        }}
                        _light={{
                            color: "#FFFF",
                            bg: "#191919",
                        }}
                    >
                        <TriangleUpIcon w="3" h="3" />
                    </Button>
                    )
                )
                }


            </Box>
            <Box h="1px" w="100%" bgColor="#D5D5D5" my="30px"></Box>
        </Box>
    );
};


export default ApproachPaperPage;