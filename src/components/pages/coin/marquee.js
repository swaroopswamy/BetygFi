import { Box, Text } from "@chakra-ui/react";
import React from "react";

const marquee_tiles = [
    {
        key: "S&P 500:",
        value: "$5000",
        percentage: "0.96"
    },
    {
        key: "S&P 500:",
        value: "$5000",
        percentage: "0.96"
    },
    {
        key: "S&P 500:",
        value: "$5000",
        percentage: "0.96"
    },
    {
        key: "S&P 500:",
        value: "$5000",
        percentage: "0.96"
    },
];
const Marquee = () => {
    return (
        <Box w="90%" className="marquee-container">
            <Box className="marquee-div">
                <Box display={"flex"} className="marquee-content">
                    {marquee_tiles.map((tile, i) => {
                        return (
                            <Box layerStyle={"flexCenter"} mx={"10px"} key={i}>
                                <Text variant={"greySmallText"}>{tile.key}</Text>
                                <Text variant={"footnoteText"}>{tile.value}</Text>
                                <Text variant={"greySmallText"} ml={"3px"}>{tile.key}</Text>
                            </Box>
                        );
                    })}
                </Box>
                <Box display={"flex"} className="marquee-content">
                    {marquee_tiles.map((tile, i) => {
                        return (
                            <Box layerStyle={"flexCenter"} mx={"10px"} key={i}>
                                <Text variant={"greySmallText"}>{tile.key}</Text>
                                <Text variant={"footnoteText"}>{tile.value}</Text>
                                <Text variant={"greySmallText"} ml={"3px"}>{tile.key}</Text>
                            </Box>
                        );
                    })}
                </Box>
            </Box>

        </Box>
    );
};

export default Marquee;