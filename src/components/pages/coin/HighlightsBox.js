import { Box } from "@chakra-ui/react";
import React from "react";
import TopGainersSmallBox from "@/components/pages/coin/TopGainersSmallBox";
import TopLosersSmallBox from "@/components/pages/coin/TopLosersSmallBox";
import BTC_ETF_SmallBox from "@/components/pages/coin/BTCDominanceSmallBox";

const HighlightsBox = () => {
    return (
        <Box w="100%" layerStyle={"flexCenter"} gap={"25px"} overflowX={"scroll"}>
            <TopGainersSmallBox />
            <TopLosersSmallBox />
            <BTC_ETF_SmallBox />
        </Box>
    );
};

export default HighlightsBox;