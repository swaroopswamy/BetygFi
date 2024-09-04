"use client";
import React, { useRef, useState } from "react";
import { Box, useColorMode } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const TopGainersBox = dynamic(() => import('@/components/pages/defiDashboard/TopGainersBox'), { ssr: false });
const TopLosersBox = dynamic(() => import('@/components/pages/defiDashboard/TopLosersBox'), { ssr: false });
const DeFiTVLByCategoryBox = dynamic(() => import('@/components/pages/defiDashboard/DefiTVLCategory'), { ssr: false });
const DeFiTVLByBlockchainBox = dynamic(() => import('@/components/pages/defiDashboard/DefiTVLBlockchain'), { ssr: false });

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
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 1,
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
        <Box pos={"relative"} p={"20px 0px 10px 0px"}>
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
                <TopGainersBox />
                <TopLosersBox />
                <DeFiTVLByCategoryBox />
                <DeFiTVLByBlockchainBox />
            </Slider>
            {
                currentSlide > 0 && (
                    <Box onClick={goToPrevSlide} pos={"absolute"} left={"5px"} top={"85px"} borderRadius={"50%"} w="24px" h="24px" cursor={"pointer"} zIndex={2}>
                        <i className="icon arrow_circle_light" style={{ rotate: "180deg" }} />
                    </Box>
                )
            }
            <Box onClick={goToNextSlide} pos={"absolute"} right={"0px"} top={"85px"} borderRadius={"50%"} w="24px" h="24px" cursor={"pointer"} zIndex={2}>
                <i className="icon arrow_circle_light" />
            </Box>
        </Box>
    );
};

export default HighlightsBox;
