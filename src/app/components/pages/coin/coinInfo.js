import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import ScoreMeter from "@/app/components/pages/coin/scoreMeter";
import React from "react";
import { useSelector } from "react-redux";

const CoinInfo = () => {
    const CoinDashboardData = useSelector(
        (state) => state?.coinData?.CoinDashboardData?.data
    );

    return (
        <Box
            display={"flex"}
            flexDir={{ base: "column", bigSize: "row" }}
            gap={"20px"}
        >
            <Box
                display={"flex"}
                flexDir={{ base: "column", bigSize: "row" }}
                justifyContent={"space-between"}
                bgColor={"background.secondary"}
                borderRadius={"6px"}
                w={{ base: "100%", bigSize: "70%" }}
            >
                <Box
                    p={"15px"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    minW={{ base: "100%", bigSize: "40%" }}
                >
                    <ScoreMeter score={[CoinDashboardData?.score]} />
                </Box>

                <Box
                    display={"flex"}
                    flexDir={"column"}
                    justifyContent={"space-between"}
                    w={"100%"}
                    gap={"15px"}
                    p={"15px"}
                >
                    <Box
                        layerStyle={"flexColumn"}
                        justifyContent={"space-between"}
                        p={"10px"}
                        pt={"40px"}
                        minW={{ base: "100%", bigSize: "60%" }}
                        gap={"30px"}
                    >
                        <Box display={"flex"} justifyContent={"space-between"}>
                            <DashboardCell
                                label={"Daily Volatility"}
                                value={
                                    CoinDashboardData?.daily_vol
                                        ? 100 *
                                              CoinDashboardData?.daily_vol?.toFixed(
                                                  3
                                              ) +
                                          "%"
                                        : "-"
                                }
                                tooltip={"Hi"}
                            />
                            <DashboardCell
                                label={"Beta"}
                                value={
                                    CoinDashboardData?.beta
                                        ? CoinDashboardData?.beta.toFixed(3)
                                        : "-"
                                }
                                tooltip={"Hi"}
                            />
                        </Box>
                        <Box display={"flex"} justifyContent={"space-between"}>
                            <DashboardCell
                                label={"Volume"}
                                value={
                                    CoinDashboardData?.volume
                                        ? CoinDashboardData?.volume.toLocaleString(
                                              "en-US",
                                              {
                                                  style: "currency",
                                                  currency: "USD",
                                              }
                                          )
                                        : "-"
                                }
                                tooltip={"Hi"}
                            />
                            <DashboardCell
                                label={"Volume Volatility"}
                                value={CoinDashboardData?.volume_vol}
                                tooltip={"Hi"}
                            />
                        </Box>
                        <Box display={"flex"} justifyContent={"space-between"}>
                            <DashboardCell
                                label={"Liquidity Ratio"}
                                value={
                                    CoinDashboardData?.liquid_ratio
                                        ? CoinDashboardData?.liquid_ratio?.toFixed(
                                              3
                                          )
                                        : "-"
                                }
                                tooltip={"Hi"}
                            />
                            <DashboardCell
                                label={"Liquidity Volatility"}
                                value={
                                    CoinDashboardData?.liquid_vol
                                        ? CoinDashboardData?.liquid_vol?.toFixed(
                                              3
                                          )
                                        : "-"
                                }
                                tooltip={"Hi"}
                            />
                        </Box>
                    </Box>

                    <Box display={"flex"} justifyContent={"end"} gap={"5px"}>
                        <Text
                            color={"#A8ADBD"}
                            fontSize={"12px"}
                            fontWeight={400}
                            lineHeight={"20px"}
                        >
                            Last Update
                        </Text>
                        <Text
                            variant={"h5"}
                            color={useColorModeValue("#16171B", "#A8ADBD")}
                        >
                            {new Date().toDateString()}
                        </Text>
                    </Box>
                </Box>
            </Box>

            <Box
                layerStyle={"flexColumn"}
                bgColor={"background.secondary"}
                borderRadius={"6px"}
                w={{ base: "100%", bigSize: "30%" }}
                p={"15px"}
                gap={"20px"}
            >
                <Text fontSize={"20px"} fontWeight={"500"} lineHeight={"22px"}>
                    Info
                </Text>

                <Box layerStyle={"flexColumn"}>
                    <Text fontSize={"12px"} color={"text.secondary"}>
                        Links
                    </Text>

                    {CoinDashboardData?.links.map((link, i) => {
                        if (i > 2) return;
                        return (
                            <Link key={i} href={link}>
                                <Text fontSize={"14px"} color={"text.primary"}>
                                    {link}
                                </Text>
                            </Link>
                        );
                    })}
                </Box>

                <Box layerStyle={"flexColumn"}>
                    <Text fontSize={"12px"} color={"text.secondary"}>
                        Category
                    </Text>
                    <Text
                        fontSize={"14px"}
                        color={"text.primary"}
                        textTransform={"capitalize"}
                    >
                        {CoinDashboardData?.category}
                    </Text>
                </Box>

                <Box layerStyle={"flexColumn"}>
                    <Text fontSize={"12px"} color={"text.secondary"}>
                        Explorers
                    </Text>

                    <Box display={"flex"} flexDir={"column"}>
                        {CoinDashboardData?.explorers.map((link, i) => {
                            if (i > 2) return;
                            return (
                                <Link key={i} href={link}>
                                    <Text
                                        fontSize={"14px"}
                                        color={"text.primary"}
                                    >
                                        {link
                                            .split("")
                                            .join("")
                                            .substring(0, 40) + "......"}
                                    </Text>
                                </Link>
                            );
                        })}
                    </Box>
                </Box>

                <Box layerStyle={"flexColumn"}>
                    <Text fontSize={"12px"} color={"text.secondary"}>
                        Smart Contracts
                    </Text>
                    <Text fontSize={"14px"} color={"text.primary"}>
                        {CoinDashboardData?.smart_contracts
                            .slice(0, 3)
                            .join(", ")}
                    </Text>
                </Box>
            </Box>
        </Box>
    );
};

export default CoinInfo;

const DashboardCell = ({ label, value }) => {
    return (
        <Box layerStyle={"flexColumn"} w={"50%"}>
            <Text fontSize={"12px"} color={"text.secondary"}>
                {label}
            </Text>
            <Text fontSize={"14px"} color={"text.primary"}>
                {value}
            </Text>
        </Box>
    );
};
