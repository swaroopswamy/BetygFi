import { Box, Text, useColorMode, Tooltip } from "@chakra-ui/react";
import { convertENotationToNumber } from "@util/utility";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";

const TopLosersSmallBox = () => {
    const { colorMode } = useColorMode();
    const TopGainersAndLosersData = useSelector((state) => state.coinData.TopGainersAndLosersData);
    const router = useRouter();

    return (
        <Box
            mx={"10px"}
            width={"30%"}
            minW={"295px"}
            height={"197px"}
            borderRadius={"8px"}
            mb={"15px"}
            p={"12px"}
            _light={{ bg: "#FFFFFF" }}
            _dark={{ bg: "#282828" }}
            key="top-losers"
        >
            <Box layerStyle={"spaceBetween"} mb="12px">
                <Box layerStyle={"flexCenter"}>
                    <Image
                        height={32}
                        width={32}
                        src="/icons/trending-down.svg"
                        alt="trophy_icon"
                        unoptimized="true"
                        priority="true"
                    ></Image>
                    <Text variant={"contentHeading3"} fontWeight={500} ml={"8px"}>
                        Top Losers
                    </Text>
                </Box>
                <Box layerStyle={"flexCenter"} gap={"3px"}
                    cursor={"pointer"}
                    onClick={() => {
                        router.push(`/coin?on=change_24hr&by=asc`);
                    }}
                >
                    <Text variant={"footnoteText"} fontSize={"12px"} fontWeight={500}
                        _light={{ color: "#757575" }}
                        _dark={{ color: "#A5A5A5" }}
                    >
                        View more
                    </Text>
                    <Image
                        height={5}
                        width={8}
                        src={colorMode === "light" ? "/icons/Arrow_Right.svg" : "/icons/Arrow_down_dark.svg"}
                        style={colorMode !== "light" ? { transform: "rotate(-90deg)" } : {}}
                        mr={"5px"}
                        alt="view_more"
                        unoptimized="true"
                        priority="true"
                    ></Image>
                </Box>
            </Box>
            {TopGainersAndLosersData.data?.losers?.map((loser, i) => (
                <Box
                    layerStyle={"spaceBetween"} key={i} mb="12px"
                    onClick={() => {
                        if (loser?.slug) router.push(`/coin/${loser?.slug}`);
                    }}
                    cursor={"pointer"}>
                    <Box layerStyle={"flexCenter"}>
                        <Image
                            height={35}
                            width={35}
                            src={loser?.logoUrl ?? '/icons/bitcoin_logo.svg'}
                            style={{ marginRight: "7px", borderRadius: "50%" }}
                            alt="bitcoin"></Image>
                        <Text variant={"contentHeading4"} fontSize={"14px"} lineHeight={"17px"}>
                            {loser?.name}
                        </Text>
                    </Box>
                    <Box layerStyle={"flexCenter"} gap={"2px"}>
                        <Tooltip hasArrow label={`$ ${convertENotationToNumber(loser?.price)}`}>
                            <Text variant={"contentHeading4"} fontSize={"14px"} lineHeight={"17px"} cursor={"pointer"}>
                                ${convertENotationToNumber(loser?.price).toString().split('').slice(0, 4).join('') +
                                    "..." +
                                    convertENotationToNumber(loser?.price).toString().slice(-2)}
                            </Text>
                        </Tooltip>

                        <Box
                            width={"70px"}
                            layerStyle={"flexCenter"}
                            justifyContent={"center"}
                            height={"21px"}
                            padding={"2px 8px"}
                            borderRadius={"16px"}
                            _light={{ bg: "#FF00001F" }}
                            _dark={{ bg: "#FF35351F" }}
                        >
                            <Text variant={"baseStyle"} lineHeight={"17px"}
                                _light={{ color: "#FF0000" }}
                                _dark={{ color: "#FF3535" }}
                            >
                                {`${loser?.change?.toFixed(1)}%`}
                            </Text>
                        </Box>
                    </Box>
                </Box>
            ))}
        </Box>
    );
};


export default TopLosersSmallBox;
