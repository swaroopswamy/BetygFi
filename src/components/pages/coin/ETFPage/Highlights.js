import React from "react";
import { Box } from "@chakra-ui/react";
import HeatmapGraphBox from "./Heatmap";
import BTCETFNetInflowBox from "./BTCETFNetInflowGraph";

const HighlightsBox = () => {
    return (
        <Box layerStyle={"flexCenter"} mt={"15px"}>
            <Box width={"45%"} mr={"1rem"} borderRadius={"8px"}>
                <HeatmapGraphBox />
            </Box>
            <Box width={"55%"} borderRadius={"8px"} padding={"0px"}>
                <BTCETFNetInflowBox />
            </Box>
        </Box>
    );
};

export default HighlightsBox;