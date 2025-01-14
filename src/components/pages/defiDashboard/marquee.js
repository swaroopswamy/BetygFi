import { Box, Text } from "@chakra-ui/react";
import millify from "millify";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";


const Marquee = () => {
    const MarqueeData = useSelector((state) => state.coinData.MarqueeData);

    const [marqueetiles, setMarqueetiles] = useState([
        {
            key: "BTC Price: ",
            value: MarqueeData?.data?.btcPrice === undefined
                ? "-"
                : MarqueeData?.data?.btcPrice?.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                }),
            percentage: false
        },
        {
            key: "ETH Price: ",
            value: MarqueeData?.data?.ethPrice === undefined
                ? "-"
                : MarqueeData?.data?.ethPrice?.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                }),
            percentage: false
        },
        {
            key: "MCAP: ",
            value: MarqueeData?.data?.totalMarketCap === undefined
                ? "-"
                : "$" + millify(MarqueeData?.data?.totalMarketCap,
                    { precision: 2, locales: "en-US" }
                ),
            percentage: false
        },
        {
            key: "BTC Dominance: ",
            value: MarqueeData?.data?.btcDominance === undefined
                ? "-"
                : MarqueeData?.data?.btcDominance + "%",
            percentage: true
        },
        {
            key: "ETH Dominance: ",
            value: MarqueeData?.data?.ethDominance === undefined
                ? "-"
                : MarqueeData?.data?.ethDominance + "%",
            percentage: true
        },
        {
            key: "ETH Gas Price: ",
            value: MarqueeData?.data?.ethGasPrice === undefined
                ? "-"
                : MarqueeData?.data?.ethGasPrice + " Gwei",
            percentage: false
        },
        {
            key: "24 Hr Vol: ",
            value: MarqueeData?.data?.totalVolume_24 === undefined
                ? "-"
                : "$" + millify(MarqueeData?.data?.totalVolume_24,
                    { precision: 2, locales: "en-US" }
                ),
            percentage: false
        },
        {
            key: "No of DeFi: ",
            value: MarqueeData?.data?.totalDefis === undefined
                ? "-"
                : MarqueeData?.data?.totalDefis,
            percentage: false
        }
    ]);
    useEffect(() => {
        setMarqueetiles([
            {
                key: "BTC Price: ",
                value: MarqueeData?.data?.btcPrice === undefined
                    ? "-"
                    : MarqueeData?.data?.btcPrice?.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                    }),
                percentage: false
            },
            {
                key: "ETH Price: ",
                value: MarqueeData?.data?.ethPrice === undefined
                    ? "-"
                    : MarqueeData?.data?.ethPrice?.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                    }),
                percentage: false
            },
            {
                key: "MCAP: ",
                value: MarqueeData?.data?.totalMarketCap === undefined
                    ? "-"
                    : "$" + millify(MarqueeData?.data?.totalMarketCap,
                        { precision: 2, locales: "en-US" }
                    ),
                percentage: false
            },
            {
                key: "BTC Dominance: ",
                value: MarqueeData?.data?.btcDominance === undefined
                    ? "-"
                    : MarqueeData?.data?.btcDominance + "%",
                percentage: true
            },
            {
                key: "ETH Dominance: ",
                value: MarqueeData?.data?.ethDominance === undefined
                    ? "-"
                    : MarqueeData?.data?.ethDominance + "%",
                percentage: true
            },
            {
                key: "ETH Gas Price: ",
                value: MarqueeData?.data?.ethGasPrice === undefined
                    ? "-"
                    : MarqueeData?.data?.ethGasPrice + " Gwei",
                percentage: false
            },
            {
                key: "24 Hr Vol: ",
                value: MarqueeData?.data?.totalVolume_24 === undefined
                    ? "-"
                    : "$" + millify(MarqueeData?.data?.totalVolume_24,
                        { precision: 2, locales: "en-US" }
                    ),
                percentage: false
            },
            {
                key: "No of DeFi: ",
                value: MarqueeData?.data?.totalDefis === undefined
                    ? "-"
                    : MarqueeData?.data?.totalDefis,
                percentage: false
            }
        ]);
    }, [MarqueeData]);
    return (
        <Box w="90%" className="marquee-container">
            <Box className="marquee-div">
                <Box display={"flex"} className="marquee-content" mr={"350px"}>
                    {marqueetiles.map((tile, i) => {
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
                                {
                                    tile.percentage ?
                                        <Text
                                            variant={"h5"}
                                            lineHeight={"16px"}
                                            _light={{ color: "#191919" }}
                                            _dark={{ color: "#FFFFFF" }}
                                        >
                                            {tile.value}
                                        </Text>
                                        :
                                        <Text
                                            variant={"h5"}
                                            lineHeight={"16px"}
                                            _light={{ color: tile.value < 0 ? "#FF0000" : "#245F00" }}
                                            _dark={{ color: tile.value < 0 ? "#FF3535" : "#60C000" }}
                                            ml={"3px"}
                                        >
                                            {tile.value}
                                        </Text>
                                }
                            </Box>
                        );
                    })}
                </Box>
                <Box display={"flex"} className="marquee-content" >
                    {marqueetiles.map((tile, i) => {
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
                                {
                                    tile.percentage ?
                                        <Text
                                            variant={"h5"}
                                            lineHeight={"16px"}
                                            _light={{ color: "#191919" }}
                                            _dark={{ color: "#FFFFFF" }}
                                        >
                                            {tile.value}
                                        </Text>
                                        :
                                        <Text
                                            variant={"h5"}
                                            lineHeight={"16px"}
                                            _light={{ color: tile.value < 0 ? "#FF0000" : "#245F00" }}
                                            _dark={{ color: tile.value < 0 ? "#FF3535" : "#60C000" }}
                                            ml={"3px"}
                                        >
                                            {tile.value}
                                        </Text>
                                }
                            </Box>
                        );
                    })}
                </Box>
            </Box>
        </Box>
    );
};

export default Marquee;