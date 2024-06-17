"use client";
import { Box, Text } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
const TrendingCoinPanel = dynamic(() => import("@components/trendingCoinPanel"), { ssr: false });


const TrendingCoinSection = () => {
    const trendingCoinsData = useSelector((state) => state?.coinData?.TrendingCoinsData);
    return (
        <Box display={"flex"} flexDir={"column"} gap={"25px"} my={"20px"} mx={"20px"}>
            <Text
                fontSize={"32px"}
                lineHeight={"36px"}
                color={"text.primary"}
            >
                {" "}
                Trending Coins{" "}
            </Text>

            <Box
                display={"flex"}
                flexDir={{ base: "column", lg: "row" }}
                gap={"20px"}
                w={"100%"}
            >
                {trendingCoinsData.isSuccess &&
                    trendingCoinsData.data.map((coinData, i) => {
                        if (i > 2) return;
                        return (
                            <TrendingCoinPanel
                                key={i}
                                coinData={coinData}
                            />
                        );
                    })}
            </Box>
        </Box>

    );
};

export default TrendingCoinSection;