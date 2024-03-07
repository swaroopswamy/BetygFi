import { Box, Text, useColorMode } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const FearGridIndexSmallBox = () => {
    const { colorMode } = useColorMode();
    return (
        <Box
            width={"30%"}
            minW={"295px"}
            height={"197px"}
            borderRadius={"8px"}
            mb={"15px"}
            pl={"0px"}
            pr={"0px"}
            _light={{
                bg: "#FFFFFF"
            }}
            _dark={{
                bg: "#282828"
            }}
        >
            <Box layerStyle={"flexCenter"} p={"12px"}>
                <Image
                    height={32}
                    width={32}
                    src="/icons/bitcoin_logo.svg"
                    alt="bitcoin_icon"></Image>
                <Text variant={"contentHeading3"} color={colorMode === 'light' ? "#757575" : "#A5A5A5"} fontWeight={500} ml={"8px"}>
                    Fear/Greed Index
                </Text>
            </Box>
            <Box layerStyle={"flexCenter"} pl={"10px"}>
                <Text variant={"textBold"} fontSize={"24px"}>
                    Greed
                </Text>
            </Box>
            <Text p={"12px"} variant={"SettingsText3"} fontWeight={500} lineHeight={"16px"}>
                Next Update: 10hrs, 59 min
            </Text>
            <Box
                height={"70px"}
                mx={"10px"}
                backgroundColor={colorMode === 'light' ? "#F0F0F5" : "#191919"}
                borderRadius={"6px"}
            >
                <Text p={"8px"} variant={"SettingsText3"} fontWeight={500} lineHeight={"16px"}>
                    Historical Values
                </Text>
                <Box layerStyle={"flexCenter"}>
                    <Box borderRight={colorMode === 'light' ? "1px solid #757575" : "1px solid #A5A5A5"}>
                        <Text p={"3px 10px 0px 10px"} variant={"modalHeader"} fontWeight={500} color={colorMode === 'light' ? "#245000" : "#60C000"}>
                            72
                        </Text>
                        <Text p={"0px 10px 0px 10px"} variant={"SettingsText3"} fontSize={"10px"} fontWeight={500} lineHeight={"16px"}>
                            24h ago
                        </Text>
                    </Box>
                    <Box borderRight={colorMode === 'light' ? "1px solid #757575" : "1px solid #A5A5A5"}>
                        <Text p={"3px 10px 0px 10px"} variant={"modalHeader"} fontWeight={500} color={colorMode === 'light' ? "#245000" : "#60C000"}>
                            72
                        </Text>
                        <Text p={"0px 10px 0px 10px"} variant={"SettingsText3"} fontSize={"10px"} fontWeight={500} lineHeight={"16px"}>
                            7day ago
                        </Text>
                    </Box>
                    <Box>
                        <Text p={"3px 10px 0px 10px"} variant={"modalHeader"} fontWeight={500} color={colorMode === 'light' ? "#245000" : "#60C000"}>
                            64
                        </Text>
                        <Text p={"0px 10px 0px 10px"} variant={"SettingsText3"} fontSize={"10px"} fontWeight={500} lineHeight={"16px"}>
                            1min ago
                        </Text>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default FearGridIndexSmallBox;