import { Box } from "@chakra-ui/react";
import React from "react";
import TopGainersSmallBox from "@/components/pages/coin/TopGainersSmallBox";

const HighlightsBox = () => {
    return (
        <Box w="100%" layerStyle={"flexCenter"} overflowX={"scroll"}>
            <TopGainersSmallBox />
        </Box>
    );
};

export default HighlightsBox;