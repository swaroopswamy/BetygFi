import { Box, Text, useColorMode } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const BTCetfSmallBox = () => {
    const { colorMode } = useColorMode();
    return (
        <Box
            width={"20%"}
            height={"197px"}
            borderRadius={"8px"}
            _light={{
                bg: "#FFFFFF"
            }}
            _dark={{
                bg: "#282828"
            }}
            p={"10px"}
        >
            <Box layerStyle={"spaceBetween"}>
                <Box layerStyle={"flexCenter"}>
                    <Image
                        height={25}
                        width={25}

                        src="/icons/bitcoin_logo.svg"
                        alt="trophy_icon"></Image>
                    <Text variant={"contentHeading3"} fontWeight={500} pl={"8px"}>
                        BTC ETF
                    </Text>
                </Box>
                <Box layerStyle={"flexCenter"} gap={"3px"} >
                    <Text variant={"footnoteText"} fontSize={"12px"} fontWeight={500}
                        _light={{
                            color: "#757575"
                        }}
                        _dark={{
                            color: "#A5A5A5"
                        }}>
                        View more
                    </Text>
                    <Image
                        src={colorMode === "light" ? "/icons/arrow_right.svg" : "/icons/Arrow_down_dark.svg"}
                        height={6}
                        width={6}
                        alt="arrow">
                    </Image>
                </Box>
            </Box>
            <Box layerStyle={"spaceBetween"} mt={"10px"}>
                <Box layerStyle={"flexCenter"}>
                    <Image
                        height={40}
                        width={40}

                        src="/icons/bitcoin_logo.svg"
                        p={"10px 10px 5px 10px"}
                        alt=" "></Image>
                    <Text variant={"contentHeading4"} fontSize={"14px"} lineHeight={"17px"} pl={"8px"}>
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
                        _light={{
                            bg: "#245F001F"
                        }}
                        _dark={{
                            bg: "#60C0003F"
                        }}
                    >
                        <Text variant={"baseStyle"} lineHeight={"17px"}
                            _light={{
                                color: "#245F00"
                            }}
                            _dark={{
                                color: "#60C000"
                            }}
                        >
                            52.0%
                        </Text>
                    </Box>
                </Box>
            </Box>
        </Box>

    );
};


export default BTCetfSmallBox;