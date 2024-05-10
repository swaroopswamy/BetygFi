import React from "react";
import { Box } from "@chakra-ui/react";
import HeatmapGraphBox from "./Heatmap";
import BTCETFNetInflowBox from "./BTCETFNetInflowGraph";

const HighlightsBox = () => {
    return (
        <Box layerStyle={{ md: "flexCenter" }} mt={"15px"}>
            <Box width={{ base: "100%", md: "45%" }} mr={{ md: "1rem" }} borderRadius={"8px"}>
                <HeatmapGraphBox />
            </Box>
            <Box width={{ base: "100%", md: "55%" }} mt={{ base: "20px", md:"5px" }} borderRadius={"8px"} padding={"0px"}>
                <BTCETFNetInflowBox />
            </Box>
        </Box>
    );
};

export default HighlightsBox;