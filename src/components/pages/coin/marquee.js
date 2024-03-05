import { Box, Text } from "@chakra-ui/react";
import React from "react";

const marquee_tiles = [
    {
        key: "S&P 500: ",
        value: "$5000.50",
        percentage: "0.96%"
    },
    {
        key: "24h vol: ",
        value: "$114.82 B",
        percentage: "-8.48%"
    },
    {
        key: "BTC Dominance: ",
        value: "51.89%",
        percentage: " "
    },
    {
        key: "ETH Gas: ",
        value: "28Gwei",
        percentage: " "
    },
];
const Marquee = () => {
    return (
        <Box w="90%" className="marquee-container">
            <Box className="marquee-div">
                <Box display={"flex"} className="marquee-content">
                    {marquee_tiles.map((tile, i) => {
                        const isNegative = tile.percentage && tile.percentage.startsWith("-");
                        return (
                            <Box layerStyle={"flexCenter"} mx={"10px"} key={i}>
                                <Text
                                    variant={"h5"}
                                    lineHeight={"16px"}
                                    fontWeight={500}
                                    _light={{ color: "#757575" }}
                                    _dark={{ color: "#A5A5A5" }}
                                >
                                    {tile.key}
                                </Text>
                                <Text
                                    variant={"h5"}
                                    lineHeight={"16px"}
                                    _light={{ color: "#191919" }}
                                    _dark={{ color: "#FFFFFF" }}
                                >
                                    {tile.value}
                                </Text>
                                <Text
                                    variant={"h5"}
                                    lineHeight={"16px"}
                                    _light={{ color: isNegative ? "#FF0000" : "#245F00" }}
                                    _dark={{ color: isNegative ? "#FF3535" : "#60C000" }}
                                    ml={"3px"}
                                >
                                    {tile.percentage}
                                </Text>
                            </Box>
                        );
                    })}
                </Box>
                <Box display={"flex"} className="marquee-content">
                    {marquee_tiles.map((tile, i) => {
                        const isNegative = tile.percentage && tile.percentage.startsWith("-");
                        return (
                            <Box layerStyle={"flexCenter"} mx={"10px"} key={i}>
                                <Text
                                    variant={"h5"}
                                    lineHeight={"16px"}
                                    fontWeight={500}
                                    _light={{ color: "#757575" }}
                                    _dark={{ color: "#A5A5A5" }}
                                >
                                    {tile.key}
                                </Text>
                                <Text
                                    variant={"h5"}
                                    lineHeight={"16px"}
                                    _light={{ color: "#191919" }}
                                    _dark={{ color: "#FFFFFF" }}
                                >
                                    {tile.value}
                                </Text>
                                <Text
                                    variant={"h5"}
                                    lineHeight={"16px"}
                                    _light={{ color: isNegative ? "#FF0000" : "#245F00" }}
                                    _dark={{ color: isNegative ? "#FF3535" : "#60C000" }}
                                    ml={"3px"}
                                >
                                    {tile.percentage}
                                </Text>
                            </Box>
                        );
                    })}
                </Box>
            </Box>
        </Box>
    );
};

export default Marquee;