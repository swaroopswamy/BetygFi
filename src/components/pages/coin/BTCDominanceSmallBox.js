/* import { Box } from "@chakra-ui/react";
import React from "react";


const BTCDominanceSmallBox = () => {
    return (
        <Box borderRadius={}></Box>
    );
};
  */

"use client";
import React from "react";
import { Box, Text, useColorModeValue, Image } from "@chakra-ui/react";

const Top_Gainers_Losers_BTCetf = () => {
    return (
        <Box layerStyle={"flexCenter"} gap={"25px"}>
            <Box
                width={"295px"}
                height={"197px"}
                borderRadius={"8px"}
                background={useColorModeValue("#FFFFFF", "#282828")}
            >
                <Box layerStyle={"spaceBetween"}>
                    <Box layerStyle={"flexCenter"}>
                        <Image
                            src="/icons/trending-down.svg"
                            p={"15px 10px 10px 10px"}
                            alt=" "></Image>
                        <Text variant={"contentHeading3"} fontWeight={500}>
                            Top Losers
                        </Text>
                    </Box>
                    <Box layerStyle={"flexCenter"} gap={"3px"}>
                        <Text variant={"footnoteText"} fontSize={"12px"} fontWeight={500} color={useColorModeValue("#757575", "#A5A5A5")}>
                            view more
                        </Text>
                        <Image
                            src={useColorModeValue("/icons/Arrow_Right.svg", "/icons/Arrow_down_dark.svg")}
                            mr={"5px"}
                            alt=" "></Image>
                    </Box>
                </Box>
                <Box layerStyle={"spaceBetween"}>
                    <Box layerStyle={"flexCenter"}>
                        <Image
                            src="/icons/bitcoin_logo.svg"
                            p={"10px 10px 5px 10px"}
                            alt=" "></Image>
                        <Text variant={"contentHeading4"} fontSize={"14px"} lineHeight={"17px"}>
                            Livepeer
                        </Text>
                    </Box>
                    <Box layerStyle={"flexCenter"} gap={"5px"}>
                        <Text variant={"contentHeading4"} fontSize={"14px"} lineHeight={"17px"}>
                            $12.29
                        </Text>
                        <Box
                            width={"57px"}
                            height={"21px"}
                            mr={"5px"}
                            top={"67px"}
                            left={"226px"}
                            padding={"2px 8px"}
                            borderRadius={"16px"}
                            gap={"10px"}
                            background={useColorModeValue("#FF00001F", "#FF00003F")}
                        >
                            <Text variant={"baseStyle"} lineHeight={"17px"} color={useColorModeValue("#FF0000", "#FF0000")}>
                                52.0%
                            </Text>
                        </Box>
                    </Box>
                </Box>
                <Box layerStyle={"spaceBetween"}>
                    <Box layerStyle={"flexCenter"}>
                        <Image
                            src="/icons/bitcoin_logo.svg"
                            p={"5px 10px"}
                            alt=" "></Image>
                        <Text variant={"contentHeading4"} fontSize={"14px"} lineHeight={"17px"}>
                            Livepeer
                        </Text>
                    </Box>
                    <Box layerStyle={"flexCenter"} gap={"5px"}>
                        <Text variant={"contentHeading4"} fontSize={"14px"} lineHeight={"17px"}>
                            $12.29
                        </Text>
                        <Box
                            width={"57px"}
                            height={"21px"}
                            mr={"5px"}
                            top={"67px"}
                            left={"226px"}
                            padding={"2px 8px"}
                            borderRadius={"16px"}
                            gap={"10px"}
                            background={useColorModeValue("#FF00001F", "#FF00003F")}
                        >
                            <Text variant={"baseStyle"} lineHeight={"17px"} color={useColorModeValue("#FF0000", "#FF0000")}>
                                52.0%
                            </Text>
                        </Box>
                    </Box>
                </Box>
                <Box layerStyle={"spaceBetween"}>
                    <Box layerStyle={"flexCenter"}>
                        <Image
                            src="/icons/bitcoin_logo.svg"
                            p={"5px 10px"}
                            alt=" "></Image>
                        <Text variant={"contentHeading4"} fontSize={"14px"} lineHeight={"17px"}>
                            Livepeer
                        </Text>
                    </Box>
                    <Box layerStyle={"flexCenter"} gap={"5px"}>
                        <Text variant={"contentHeading4"} fontSize={"14px"} lineHeight={"17px"}>
                            $12.29
                        </Text>
                        <Box
                            width={"57px"}
                            height={"21px"}
                            mr={"5px"}
                            top={"67px"}
                            left={"226px"}
                            padding={"2px 8px"}
                            borderRadius={"16px"}
                            gap={"10px"}
                            background={useColorModeValue("#FF00001F", "#FF00003F")}
                        >
                            <Text variant={"baseStyle"} lineHeight={"17px"} color={useColorModeValue("#FF0000", "#FF0000")}>
                                52.0%
                            </Text>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box
                width={"295px"}
                height={"197px"}
                borderRadius={"8px"}
                background={useColorModeValue("#FFFFFF", "#282828")}
            >
                <Box layerStyle={"spaceBetween"}>
                    <Box layerStyle={"flexCenter"}>
                        <Image
                            src="/icons/bitcoin_logo.svg"
                            p={"10px 10px 10px 10px"}
                            alt=" "></Image>
                        <Text variant={"contentHeading3"} fontWeight={500}>
                            BTC ETF
                        </Text>
                    </Box>
                    <Box layerStyle={"flexCenter"} gap={"3px"}>
                        <Text variant={"footnoteText"} fontSize={"12px"} fontWeight={500} color={useColorModeValue("#757575", "#A5A5A5")}>
                            view more
                        </Text>
                        <Image
                            src={useColorModeValue("/icons/Arrow_Right.svg", "/icons/Arrow_down_dark.svg")}
                            mr={"5px"}
                            alt=" "></Image>
                    </Box>
                </Box>
                <Box layerStyle={"spaceBetween"}>
                    <Box layerStyle={"flexCenter"}>
                        <Image
                            src="/icons/bitcoin_logo.svg"
                            p={"10px 10px 5px 10px"}
                            alt=" "></Image>
                        <Text variant={"contentHeading4"} fontSize={"14px"} lineHeight={"17px"}>
                            Livepeer
                        </Text>
                    </Box>
                    <Box layerStyle={"flexCenter"} gap={"5px"}>
                        <Text variant={"contentHeading4"} fontSize={"14px"} lineHeight={"17px"}>
                            $12.29
                        </Text>
                        <Box
                            width={"57px"}
                            height={"21px"}
                            mr={"5px"}
                            top={"67px"}
                            left={"226px"}
                            padding={"2px 8px"}
                            borderRadius={"16px"}
                            gap={"10px"}
                            background={useColorModeValue("#FF00001F", "#FF00003F")}
                        >
                            <Text variant={"baseStyle"} lineHeight={"17px"} color={useColorModeValue("#FF0000", "#FF0000")}>
                                52.0%
                            </Text>
                        </Box>
                    </Box>
                </Box>
                <Box layerStyle={"spaceBetween"}>
                    <Box layerStyle={"flexCenter"}>
                        <Image
                            src="/icons/bitcoin_logo.svg"
                            p={"5px 10px"}
                            alt=" "></Image>
                        <Text variant={"contentHeading4"} fontSize={"14px"} lineHeight={"17px"}>
                            Livepeer
                        </Text>
                    </Box>
                    <Box layerStyle={"flexCenter"} gap={"5px"}>
                        <Text variant={"contentHeading4"} fontSize={"14px"} lineHeight={"17px"}>
                            $12.29
                        </Text>
                        <Box
                            width={"57px"}
                            height={"21px"}
                            mr={"5px"}
                            top={"67px"}
                            left={"226px"}
                            padding={"2px 8px"}
                            borderRadius={"16px"}
                            gap={"10px"}
                            background={useColorModeValue("#FF00001F", "#FF00003F")}
                        >
                            <Text variant={"baseStyle"} lineHeight={"17px"} color={useColorModeValue("#FF0000", "#FF0000")}>
                                52.0%
                            </Text>
                        </Box>
                    </Box>
                </Box>
                <Box layerStyle={"spaceBetween"}>
                    <Box layerStyle={"flexCenter"}>
                        <Image
                            src="/icons/bitcoin_logo.svg"
                            p={"5px 10px"}
                            alt=" "></Image>
                        <Text variant={"contentHeading4"} fontSize={"14px"} lineHeight={"17px"}>
                            Livepeer
                        </Text>
                    </Box>
                    <Box layerStyle={"flexCenter"} gap={"5px"}>
                        <Text variant={"contentHeading4"} fontSize={"14px"} lineHeight={"17px"}>
                            $12.29
                        </Text>
                        <Box
                            width={"57px"}
                            height={"21px"}
                            mr={"5px"}
                            top={"67px"}
                            left={"226px"}
                            padding={"2px 8px"}
                            borderRadius={"16px"}
                            gap={"10px"}
                            background={useColorModeValue("#FF00001F", "#FF00003F")}
                        >
                            <Text variant={"baseStyle"} lineHeight={"17px"} color={useColorModeValue("#FF0000", "#FF0000")}>
                                52.0%
                            </Text>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Top_Gainers_Losers_BTCetf;
