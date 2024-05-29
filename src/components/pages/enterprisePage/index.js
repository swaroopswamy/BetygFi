"use client";
import { Box, Button, Grid, GridItem, Text } from "@chakra-ui/react";
import React, { useEffect, useRef, useState, } from "react";
import FeatureCard from "./components/featureCard";
import CarouselCard from "./components/carouselCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EnterpriseHeader from "./header";
import EnterpriseFooter from "./footer";
import VideoBox from "./components/videoBox";
import { directionAnimations, features, scrollToId, words } from "./helper";
import ScrollDownBox from "./components/scrollDownBox";
import { motion } from 'framer-motion';
import BoxMap from "./components/mapBox";

const EnterpriseLandingPage = () => {
    const [featureSelected, setFeatureSelected] = useState(null);
    const [animationDirection, setAnimationDirection] = useState(null);
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleFeatureSelect = (index) => {
        if (index === null) {
            setFeatureSelected(null);
            setAnimationDirection(null);
        } else {
            setFeatureSelected(index - 1);
            setAnimationDirection(index - 1);
        }
    };



    return (
        <Box display={"flex"} flexDir={"column"} w="100%" bg={"#000000"}  >
            <section id="section_1" ref={section1Ref}>
                <EnterpriseHeader />
                <Box1 />
                <ScrollDownBox />
            </section>
            <section ref={section2Ref} id="section_2">
                <Box2 featureSelected={featureSelected} animationDirection={animationDirection} setFeatureSelected={handleFeatureSelect} />
            </section>
            <section id="section_4">
                <Box4 />
            </section>
            <section id="section_5">
                <CarouselBox />
            </section>
            <section id="section_6">
                <AssetBox />
            </section>
            <section id="final_section" >
                <BoxMap />
                <EnterpriseFooter />
            </section>

        </Box>
    );
};

const Box1 = () => {
    const [wordIndex, setWordIndex] = useState(0);
    const [displayedWord, setDisplayedWord] = useState(words[0]);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        let timeout;
        if (deleting) {
            timeout = setTimeout(() => {
                setDisplayedWord(prev => prev.slice(0, -1));
                if (displayedWord.length === 0) {
                    setDeleting(false);
                    setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
                }
            }, 100);
        } else {
            timeout = setTimeout(() => {
                setDisplayedWord(words[wordIndex].slice(0, displayedWord.length + 1));
                if (displayedWord.length === words[wordIndex].length) {
                    setDeleting(true);
                }
            }, 200);
        }

        return () => clearTimeout(timeout);
    }, [displayedWord, deleting, wordIndex]);
    return (
        <Box
            h="85vh"
            w={"100%"}
            bgImage={"/images/ent_bg_image_1_with_black.svg"}
            bgSize={"cover"}
            layerStyle={"center"}
            className="ent-box1"
        >
            <Box display={"flex"} flexDir={"column"} alignItems={"center"} pos={"relative"} top="50px">
                <Text variant={"ent_title"} lineHeight={"75px"} w="max-content">
                    Blockchain data
                </Text>
                <Text variant={"ent_title"} lineHeight={"75px"} layerStyle={"flexCenter"} pl={"100px"} gap={"10px"}>information utility for  <span className={"wordContainer"}>
                    {displayedWord}
                </span></Text>
                <Text variant={"ent_subtitle"} mt="40px" lineHeight={"25px"}>
                    Experience seamless and immediate access to comprehensive on chain and off chain data,<br /> right at your fingertips.
                </Text>
            </Box>
        </Box>
    );
};



// eslint-disable-next-line no-empty-pattern
const Box2 = ({
    animationDirection,
    featureSelected,
    setFeatureSelected
}) => {
    return (
        <Box layerStyle={"center"} flexDir={"column"} pt="50px" pb="50px" w="100%" h="100vh" >
            <Text variant={"ent_md_title"} mb="16px">
                Features that work for your future.
            </Text>
            <Text variant={"ent_subtitle"} mb="16px">
                Check out our amazing features and experience the power of BetygFi for yourself.
            </Text>
            <Box layerStyle={"center"} mt={"47px"} w="100%">
                <Grid
                    templateRows="repeat(2, 1fr)"
                    templateColumns="repeat(3, 1fr)"
                    gap={4}
                >
                    {features.map((item, i) => {
                        return (
                            <GridItem key={i} colSpan={1} rowSpan={1}>
                                <FeatureCard
                                    id={item?.id}
                                    icon={item?.icon}
                                    desc={item?.desc}
                                    bigTitle={item?.title}
                                    smallTitle={item?.subTitle}
                                    onClick={setFeatureSelected}
                                />
                            </GridItem>
                        );
                    })}
                </Grid>

            </Box>
            {featureSelected !== null && (
                <motion.div
                    className="fullscreen-video-box"
                    initial={directionAnimations[animationDirection]?.initial}
                    animate={directionAnimations[animationDirection]?.animate}
                    exit={directionAnimations[animationDirection]?.initial}
                    transition={{ duration: 0.6, ease: [0.42, 0, 0.58, 1] }}
                >
                    <VideoBox featureSelected={featureSelected} setFeatureSelected={setFeatureSelected} />
                </motion.div>
            )}
        </Box>
    );
};




const Box4 = () => {
    return (
        <Box w="100%" h="100vh"
            bgImage={"/images/ent_limitless_bg.svg"}
            bgSize={"cover"}
            bgRepeat={"no-repeat"}
            layerStyle={"center"}
        >
            <Box
                w="570px"
                h="448px"
                px="40px"
                py={"90px"}
                bgColor={"rgba(6, 6, 6, 0.90)"}
            >
                <Text variant={"ent_md_title"} mb="8px">
                    The Limitless Engine
                </Text>
                <Text variant={"ent_subtitle"} textAlign={"left"}>
                    BetygFi’s proprietary system, code named - <b>Limitless Engine</b>, is a <b>proprietary AI system</b>, backed by a data warehouse for blockchain data decryption. It gathers <b>on-chain and off-chain data</b> from
                    a myriad of sources and synthesizes them to form a single, massively scalable source of truth.
                </Text>
                <Text variant={"ent_subtitle"} textAlign={"left"} color={"#63B8FF"} textDecoration={"underline"}
                    onClick={() => scrollToId('section_5')}
                    cursor={"pointer"}
                    mt={"26px"}
                >
                    Learn more
                </Text>
            </Box>
        </Box>
    );
};

const CarouselBox = () => {
    const sliderRef = useRef();
    const settings = {
        dots: false,
        infinite: true,
        vertical: false,
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 0,
        variableWidth: true,
        ref: sliderRef,
        className: "custom-slick",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const goToNextSlide = () => {
        sliderRef.current.slickNext();
    };

    const goToPrevSlide = () => {
        sliderRef.current.slickPrev();
    };


    return (
        <Box w="100%" h="100vh"
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            pt="100px"
        >
            <Box w="90%" layerStyle={"flexColumn"}>
                <Box layerStyle={"flexCenter"} justifyContent={"space-between"}>
                    <Box layerStyle={"flexColumn"}>
                        <Text variant={"ent_md_title"} textAlign={"left"} mb="20px">
                            Limitless’s features that <br /> work for your future
                        </Text>
                        <Text variant={"ent_subtitle"} textAlign={"left"}>
                            BetygFi’s proprietary system, code named - <b>Limitless Engine</b>, is a <b>proprietary AI system</b>, backed by a data <br />warehouse for blockchain data decryption.
                        </Text>
                    </Box>
                    <Box layerStyle={"flexCenter"} gap="25px">
                        <Button variant="ent_carousel_button" onClick={() => { goToPrevSlide(); }} className="ent_carousel_button">
                            <i className="icon ent-carousel-arrow-left" />
                        </Button>
                        <Button variant="ent_carousel_button" onClick={() => { goToNextSlide(); }} className="ent_carousel_button">
                            <i className="icon ent-carousel-arrow-right" />
                        </Button>
                    </Box>
                </Box>
                <Box mt={"50px"} pos={"relative"}>
                    <Slider {...settings} zIndex="0">
                        <CarouselCard
                            featureName={"Real-time Data Aggregation"}
                            fetaureText={" Our advanced data ingestion pipeline gathers, cleans, and normalizes data from major cryptocurrency exchanges, blockchains, social media, and macroeconomic sources in real-time. This ensures you have access to the most current and accurate information available."}
                        />
                        <CarouselCard
                            featureName={"Advanced Feature Engineering"}
                            fetaureText={"Limitless utilizes cutting-edge feature engineering techniques to extract valuable insights from collected data. This includes analyzing price trends, volatility, liquidity, and sentiment indicators for level two causal analysis."}
                        />
                        <CarouselCard
                            featureName={"AI-Driven Trading Signals "}
                            fetaureText={"Limitless leverages deep learning and reinforcement learning algorithms to identify arbitrage opportunities, predict price movements, and generate highly accurate trading signals. This enables you to make profitable trades with confidence."}
                        />
                        <CarouselCard
                            featureName={"Sophisticated Risk Management"}
                            fetaureText={"Our system incorporates advanced risk management techniques to control position sizes, manage drawdowns, and adapt to changing market conditions. This ensures the stability and long-term profitability of your trading strategy."}
                        />
                        <CarouselCard
                            featureName={"Realistic Backtesting and Simulation"}
                            fetaureText={"Limitless operates within a realistic backtesting and simulation environment, allowing you to evaluate and refine your trading strategy using historical data. This provides you with the confidence to deploy your system in live markets."}
                        />
                        <CarouselCard
                            featureName={"24/7 Monitoring and Alerts"}
                            fetaureText={"Our system continuously tracks the performance of your trading system in real-time, promptly detecting any anomalies or issues. You are kept informed around the clock, ensuring you never miss critical updates."}
                        />
                    </Slider>
                </Box>
            </Box>
        </Box>
    );
};

const AssetBox = () => {
    return (
        <Box w="100%" h="100vh"
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            pt="20px"
            pb="20px"
            bgImage={"images/asset_bg.svg"}
            bgSize={"cover"}
            bgRepeat={"no-repeat"}
        >
            <Box id="left-box" pl={"6%"} layerStyle={"center"} alignItems={"start"} w="40%">
                <Box layerStyle={"flexColumn"}>
                    <Text variant={"ent_md_title"} fontWeight={400} color={"#63B8FF"} textAlign={"left"} mb="16px">
                        Assets
                    </Text>
                    <Text variant={"ent_md_title"} textAlign={"left"} mb="8px">
                        Leverage Top On-Chain and Market Data
                    </Text>
                    <Text variant={"ent_subtitle"} textAlign={"left"}>
                        Enhance your decision-making with access to thousands of metrics and indicators for Bitcoin, Ethereum, DeFi, stablecoins, leading cryptocurrencies, and derivatives markets.
                    </Text>
                </Box>
            </Box>
            <Box id="right-box" w="50%" height={"100%"} bgImage={"/images/asset_pulse_bg.webp"} bgSize={"cover"} bgRepeat={"no-repeat"} bgPos={"right"}></Box>
        </Box>
    );
};



export default EnterpriseLandingPage;