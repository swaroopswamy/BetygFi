import React from "react";
import { Box } from "@chakra-ui/react";
import dynamic from "next/dynamic";
const HeatmapGraphBox = dynamic(() => import("@components/pages/coin/ETFPage/Heatmap", { ssr: false }));
const BTCETFNetInflowBox = dynamic(() => import("@components/pages/coin/ETFPage/BTCETFNetInflowGraph", { ssr: false }));


const HighlightsBox = () => {
    return (
        <Box layerStyle={{ md: "flexCenter" }} mt={"15px"}>
            <Box width={{ base: "100%", md: "45%" }} mr={{ md: "1rem" }} borderRadius={"8px"}>
                <HeatmapGraphBox />
            </Box>
            <Box width={{ base: "100%", md: "55%" }} borderRadius={"8px"}>
                <BTCETFNetInflowBox />
            </Box>
        </Box>
    );
};

export default HighlightsBox;