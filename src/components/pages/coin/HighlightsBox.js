import React, { useRef, useState } from "react";
import { Box } from "@chakra-ui/react";
import TopGainersSmallBox from "@/components/pages/coin/TopGainersSmallBox";
import TopLosersSmallBox from "@/components/pages/coin/TopLosersSmallBox";
import BTCetfSmallBox from "./BTCetfSmallBox";
import BTCDominanceSmallBox from "./BTCDominanceSmallBox";
import SandPSmallBox from "./S&PSmallBox";
import FearGridIndexSmallBox from "./FearGridIndexSmallBox";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const HighlightsBox = () => {
    const sliderRef = useRef();
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
        <Box pos={"relative"} px={"20px"}>
            <Slider {...settings}>
                <TopGainersSmallBox />
                <TopLosersSmallBox />
                <BTCetfSmallBox />
                <BTCDominanceSmallBox />
                <FearGridIndexSmallBox />
                <SandPSmallBox />
            </Slider>
            {
                currentSlide > 0 && (
                    <Box onClick={goToPrevSlide} pos={"absolute"} left={"4px"} top={"85px"} borderRadius={"50%"} w="24px" h="24px" cursor={"pointer"}>
                        <i className="icon arrow_circle_light" style={{ rotate: "180deg" }} />
                    </Box>
                )
            }
            <Box onClick={goToNextSlide} pos={"absolute"} right={"10px"} top={"85px"} borderRadius={"50%"} w="24px" h="24px" cursor={"pointer"}>
                <i className="icon arrow_circle_light" />
            </Box>
        </Box>

    );
};

export default HighlightsBox;