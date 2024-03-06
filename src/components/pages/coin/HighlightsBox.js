import { Box } from "@chakra-ui/react";
import React from "react";
import TopGainersSmallBox from "@/components/pages/coin/TopGainersSmallBox";
import TopLosersSmallBox from "@/components/pages/coin/TopLosersSmallBox";
import BTCetfSmallBox from "./BTCetfSmallBox";
import BTCDominanceSmallBox from "./BTCDominanceSmallBox";
import SandPSmallBox from "./S&PSmallBox";

const HighlightsBox = () => {

    return (
        <Box w="100%" layerStyle={"flexCenter"} overflowX={"scroll"} overflowY={"hidden"} gap={"15px"}>
            <TopGainersSmallBox />
            <TopLosersSmallBox />
            <BTCetfSmallBox />
            <BTCDominanceSmallBox />
            <SandPSmallBox />
        </Box>
    );
};

export default HighlightsBox;