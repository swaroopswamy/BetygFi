"use client";
import { Box, Text, useColorMode, Progress } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";

const ARKInvest = () => {
    const { colorMode } = useColorMode();

    return (
        <Box
            width={"100%"}
            height={"236px"}
            p={"20px"}
            borderRadius={"10px"}
            bg={colorMode === 'light' ? "#FFFFFF" : "#282828"}
        >
            <Box layerStyle={"flexSpaceBetween"}>
                <Box>
                    <Box layerStyle={"flexCenter"} gap={"10px"}>
                        <Text
                            fontSize={"32px"}
                            fontWeight={500}
                            lineHeight={"22px"}
                            letterSpacing={"0.2rem"}
                            variant={"modalHeader"}
                        >
                            40.78
                        </Text>
                        <Text
                            fontSize={"20px"}
                            lineHeight={"22px"}
                            variant={"contentHeading4"}
                            letterSpacing={"0.1rem"}
                            color={colorMode === 'light' ? "#0B866E" : "#60C000"}
                        >
                            +1.23 (+3.11%)
                        </Text>
                    </Box>
                    <Box layerStyle={"flexCenter"} gap={"5px"} mt={"10px"}>
                        <Image src={"/icons/Red_Dot.svg"} width={9} height={9} alt=" "></Image>
                        <Text fontSize={"14px"} lineHeight={"17px"} variant={"contentHeading"}>Pre-Market</Text>
                    </Box>
                </Box>
                <Box>
                    <Box layerStyle={"flexCenter"} gap={"5px"}>
                        <Text fontSize={"14px"} lineHeight={"17px"} variant={"contentHeading"}>Volume</Text>
                        <Image src={"/icons/tooltip.svg"} width={16} height={16} alt=" "></Image>
                    </Box>
                    <Box mt={"15px"}>
                        <Text fontSize={"20px"} lineHeight={"18px"} variant={"contentHeading4"}>89,933,8383</Text>
                    </Box>
                </Box>
            </Box>
            <Box mt={"25"}>
                <Box layerStyle={"spaceBetween"}>
                    <Text variant={"contentHeading3"} fontWeight={500}>37.77</Text>
                    <Text variant={"contentHeading3"} fontWeight={500} color={colorMode === 'light' ? "#525252" : "#FFF"}>Day’s Range</Text>
                    <Text variant={"contentHeading3"} fontWeight={500}>40.2</Text>
                </Box>
                <Progress 
                value={50} 
                colorScheme='green' 
                mt={"5px"} 
                bg={colorMode === 'light' ? "#D9D9D9" : "#333333"}
                borderRadius={"70px"}
                 />
            </Box>
            <Box mt={"30"}>
                <Box layerStyle={"spaceBetween"}>
                    <Text variant={"contentHeading3"} fontWeight={500}>21.54</Text>
                    <Text variant={"contentHeading3"} fontWeight={500} color={colorMode === 'light' ? "#525252" : "#FFF"}>52 Week Range</Text>
                    <Text variant={"contentHeading3"} fontWeight={500}>40.2</Text>
                </Box>
                <Progress 
                value={25} 
                colorScheme='green' 
                mt={"5px"} 
                bg={colorMode === 'light' ? "#D9D9D9" : "#333333"}
                borderRadius={"70px"}
                 />
            </Box>
        </Box>
    );
};

export default ARKInvest;