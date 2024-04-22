import React, { useRef, useState } from "react";
import TopGainersSmallBox from "@/components/pages/coin/TopGainersSmallBox";
import TopLosersSmallBox from "@/components/pages/coin/TopLosersSmallBox";
import DeFiTVLByCategoryBox from "@/components/pages/defiDashboard/DefiTVLCategory";
import DeFiTVLByBlockchainBox from "@/components/pages/defiDashboard/DefiTVLBlockchain";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, useColorMode } from "@chakra-ui/react";

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
        initialSlide: 0,
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
                width="40px"
                bg={colorMode === 'light' ? "linear-gradient(89.22deg, #F0F0F5 63.38%, rgba(240, 240, 245, 0) 99.45%)" : "linear-gradient(270.22deg, rgb(43 43 47 / 59%) 11.4%, rgb(26 26 30) 70.2%)"}
                zIndex={1}
            />
            <Box
                pos="absolute"
                right="0"
                top="0"
                bottom="0"
                width="50px"
                bg={colorMode === 'light' ? "linear-gradient(270.78deg, #F0F0F5 63.38%, rgba(240, 240, 245, 0) 99.45%)" : "linear-gradient(86deg, rgb(43 43 47 / 59%) 11.4%, rgb(26 26 30) 70.2%)"}
                zIndex={1}
            />
            <Slider {...settings} zIndex="0">
                <TopGainersSmallBox />
                <TopLosersSmallBox />
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
            <Box onClick={goToNextSlide} pos={"absolute"} right={"10px"} top={"85px"} borderRadius={"50%"} w="24px" h="24px" cursor={"pointer"} zIndex={2}>
                <i className="icon arrow_circle_light" />
            </Box>
        </Box>
    );
};

export default HighlightsBox;