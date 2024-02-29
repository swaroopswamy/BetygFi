import { Box, Text, useColorMode } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const TopGainersSmallBox = () => {
    const { colorMode } = useColorMode();
    return (
        <Box
            width={"30%"}
            height={"197px"}
            borderRadius={"8px"}
            mb={"15px"}
            _light={{ bg: "#FFFFFF" }}
            _dark={{ bg: "#282828" }}
        >
            <Box layerStyle={"spaceBetween"}>
                <Box layerStyle={"flexCenter"}>
                    <Image
                        height={60}
                        width={50}
                        src="/icons/trophy.svg"
                        style={{ padding: "10px 5px 15px 10px" }}
                        alt="trophy_icon"></Image>
                    <Text variant={"contentHeading3"} fontWeight={500}>
                        Top Gainers
                    </Text>
                </Box>
                <Box layerStyle={"flexCenter"} gap={"3px"}>
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
                        alt="view_more"></Image>
                </Box>
            </Box>
            <Box layerStyle={"spaceBetween"}>
                <Box layerStyle={"flexCenter"}>
                    <Image
                        height={32}
                        width={32}
                        src="/icons/bitcoin_logo.svg"
                        style={{ margin: "5px 10px" }}
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
                        _light={{ bg: "#245F001F" }}
                        _dark={{ bg: "#60C0003F" }}
                    >
                        <Text variant={"baseStyle"} lineHeight={"17px"}
                            _light={{ color: "#245F00" }}
                            _dark={{ color: "#60C000" }}
                        >
                            52.0%
                        </Text>
                    </Box>
                </Box>
            </Box>
            <Box layerStyle={"spaceBetween"}>
                <Box layerStyle={"flexCenter"}>
                    <Image
                        height={32}
                        width={32}
                        src="/icons/bitcoin_logo.svg"
                        style={{ margin: "5px 10px" }}
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
                        _light={{ bg: "#245F001F" }}
                        _dark={{ bg: "#60C0003F" }}
                    >
                        <Text variant={"baseStyle"} lineHeight={"17px"}
                            _light={{ color: "#245F00" }}
                            _dark={{ color: "#60C000" }}
                        >
                            52.0%
                        </Text>
                    </Box>
                </Box>
            </Box>
            <Box layerStyle={"spaceBetween"}>
                <Box layerStyle={"flexCenter"}>
                    <Image
                        height={32}
                        width={32}
                        src="/icons/bitcoin_logo.svg"
                        style={{ margin: "5px 10px" }}
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
                        _light={{ bg: "#245F001F" }}
                        _dark={{ bg: "#60C0003F" }}
                    >
                        <Text variant={"baseStyle"} lineHeight={"17px"}
                            _light={{ color: "#245F00" }}
                            _dark={{ color: "#60C000" }}
                        >
                            52.0%
                        </Text>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};


export default TopGainersSmallBox;