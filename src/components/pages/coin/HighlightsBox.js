"use client";
import React, { useRef, useState } from "react";
import { Box, useColorMode } from "@chakra-ui/react";

/* 
import TopGainersSmallBox from "@/components/pages/coin/TopGainersSmallBox";
import TopLosersSmallBox from "@/components/pages/coin/TopLosersSmallBox";
import BTCetfSmallBox from "./BTCetfSmallBox";
import BTCDominanceSmallBox from "./BTCDominanceSmallBox";
import SandPSmallBox from "./S&PSmallBox";
import FearGridIndexSmallBox from "./FearGridIndexSmallBox";
*/
import dynamic from "next/dynamic";

const TopGainersSmallBox = dynamic(() => import('@/components/pages/coin/TopGainersSmallBox'), { ssr: false });
const TopLosersSmallBox = dynamic(() => import('@/components/pages/coin/TopLosersSmallBox'), { ssr: false });
const BTCetfSmallBox = dynamic(() => import('@/components/pages/coin/BTCetfSmallBox'), { ssr: false });
const BTCDominanceSmallBox = dynamic(() => import('@/components/pages/coin/BTCDominanceSmallBox'), { ssr: false });
const SandPSmallBox = dynamic(() => import('@/components/pages/coin/S&PSmallBox'), { ssr: false });
const FearGridIndexSmallBox = dynamic(() => import('@/components/pages/coin/FearGridIndexSmallBox'), { ssr: false });


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const HighlightsBox = () => {
    const sliderRef = useRef();
    const { colorMode } = useColorMode();
    const [currentSlide, setCurrentSlide] = useState(0);

    const goToNextSlide = () => {
        sliderRef.current.slickNext();
    };

    const goToPrevSlide = () => {
        sliderRef.current.slickPrev();
    };

    const settings = {
        dots: false,
        infinite: true,
        vertical: false,
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 2,
        variableWidth: true,
        ref: sliderRef,
        className: "custom-slick",
        afterChange: (current) => setCurrentSlide(current),
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

    return (
        <Box pos={"relative"} p={"20px"} pt={"0px"}>
            <Box
                pos="absolute"
                left="0"
                top="0"
                bottom="0"
                width="50px"
                bg={colorMode === 'light' ? "linear-gradient(89.22deg, #F0F0F5 63.38%, rgba(240, 240, 245, 0) 99.45%)" : "linear-gradient(89.22deg, #191919 9.63%, rgba(25, 25, 25, 0.898319) 29.31%, rgba(25, 25, 25, 0.8) 39.06%, rgba(25, 25, 25, 0.5) 66.57%, rgba(25, 25, 25, 0) 96.15%)"}
                zIndex={1}
            />
            <Box
                pos="absolute"
                right="0"
                top="0"
                bottom="0"
                width="50px"
                bg={colorMode === 'light' ? "linear-gradient(270.78deg, #F0F0F5 63.38%, rgba(240, 240, 245, 0) 99.45%)" : "linear-gradient(270.43deg, #191919 9.63%, rgba(25, 25, 25, 0.898319) 29.31%, rgba(25, 25, 25, 0.8) 39.06%, rgba(25, 25, 25, 0.5) 66.57%, rgba(25, 25, 25, 0) 96.15%)"}
                zIndex={1}
            />
            <Slider {...settings} zIndex="0">
                <TopGainersSmallBox key="top-gainers" />
                <TopLosersSmallBox key="top-losers" />
                <BTCetfSmallBox key="btc-etf" />
                <BTCDominanceSmallBox key="btc-dominance" />
                <FearGridIndexSmallBox key="fear-grid" />
                <SandPSmallBox key="sandp" />
            </Slider>
            {
                currentSlide > 0 && (
                    <Box onClick={goToPrevSlide} pos={"absolute"} left={"4px"} top={"98px"} borderRadius={"50%"} w="24px" h="24px" cursor={"pointer"} zIndex={2}>
                        <i className="icon arrow_circle_light" style={{ rotate: "180deg" }} />
                    </Box>
                )
            }
            <Box onClick={goToNextSlide} pos={"absolute"} right={"10px"} top={"98px"} borderRadius={"50%"} w="24px" h="24px" cursor={"pointer"} zIndex={2}>
                <i className="icon arrow_circle_light" />
            </Box>
        </Box>
    );
};

export default HighlightsBox;
