import { Box } from "@chakra-ui/react";
import React from "react";
import TopGainersSmallBox from "@/components/pages/coin/TopGainersSmallBox";
import TopLosersSmallBox from "./TopLosersSmallBox";
import BTCetfSmallBox from "./BTCetfSmallBox";
import BTCDominanceSmallBox from "./BTCDominanceSmallBox";

const HighlightsBox = () => {
    return (
        <Box w="100%" layerStyle={"flexCenter"} overflowX={"scroll"} overflowY={"hidden"} gap={"15px"}>
            <TopGainersSmallBox />
            <TopLosersSmallBox />
            <BTCetfSmallBox />
            <BTCDominanceSmallBox />
        </Box>
    );
};

export default HighlightsBox;