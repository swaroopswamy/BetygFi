import React from "react";
import { Box, Text, useColorMode } from "@chakra-ui/react";
import Image from "next/image";

const KeyStats = () => {
    const { colorMode } = useColorMode();

    return (
        <Box
            width={"100%"}
            height={"100%"}
            borderRadius={"10px"}
            bg={colorMode === 'light' ? "#FFFFFF" : "#282828"}
            padding={"20px"}
            layerStyle={"flexSpaceBetween"}
        >
            <Box>
                <Box>
                    <Box layerStyle={"flexCenter"} gap={"8px"}>
                        <Text variant={"h5"} lineHeight={"15px"} color={colorMode === 'light' ? "#525252" : "#A5A5A5"}>Open</Text>
                        <Image src={"/icons/tooltip.svg"} width={16} height={16} alt=" "></Image>
                    </Box>
                    <Text variant={"contentHeading4"} fontSize={"14px"} lineHeight={"18px"} mt={"7px"}>38.935</Text>
                </Box>
                <Box mt={"16px"}>
                    <Box layerStyle={"flexCenter"} gap={"8px"}>
                        <Text variant={"h5"} lineHeight={"15px"} color={colorMode === 'light' ? "#525252" : "#A5A5A5"}>Day High</Text>
                        <Image src={"/icons/tooltip.svg"} width={16} height={16} alt=" "></Image>
                    </Box>
                    <Text variant={"contentHeading4"} fontSize={"14px"} lineHeight={"18px"} mt={"7px"}>40.2</Text>
                </Box>
                <Box mt={"16px"}>
                    <Box layerStyle={"flexCenter"} gap={"8px"}>
                        <Text variant={"h5"} lineHeight={"15px"} color={colorMode === 'light' ? "#525252" : "#A5A5A5"}>Day Low</Text>
                        <Image src={"/icons/tooltip.svg"} width={16} height={16} alt=" "></Image>
                    </Box>
                    <Text variant={"contentHeading4"} fontSize={"14px"} lineHeight={"18px"} mt={"7px"}>37.77</Text>
                </Box>
                <Box mt={"16px"}>
                    <Box layerStyle={"flexCenter"} gap={"8px"}>
                        <Text variant={"h5"} lineHeight={"15px"} color={colorMode === 'light' ? "#525252" : "#A5A5A5"}>Prev Close</Text>
                        <Image src={"/icons/tooltip.svg"} width={16} height={16} alt=" "></Image>
                    </Box>
                    <Text variant={"contentHeading4"} fontSize={"14px"} lineHeight={"18px"} mt={"7px"}>39.55</Text>
                </Box>
                <Box mt={"16px"}>
                    <Box layerStyle={"flexCenter"} gap={"8px"}>
                        <Text variant={"h5"} lineHeight={"15px"} color={colorMode === 'light' ? "#525252" : "#A5A5A5"}>10 Day Average Volume </Text>
                        <Image src={"/icons/tooltip.svg"} width={16} height={16} alt=" "></Image>
                    </Box>
                    <Text variant={"contentHeading4"} fontSize={"14px"} lineHeight={"18px"} mt={"7px"}>34.81M</Text>
                </Box>
                <Box mt={"16px"}>
                    <Box layerStyle={"flexCenter"} gap={"8px"}>
                        <Text variant={"h5"} lineHeight={"15px"} color={colorMode === 'light' ? "#525252" : "#A5A5A5"}>Expense Ratio</Text>
                        <Image src={"/icons/tooltip.svg"} width={16} height={16} alt=" "></Image>
                    </Box>
                    <Text variant={"contentHeading4"} fontSize={"14px"} lineHeight={"18px"} mt={"7px"}>0.25%</Text>
                </Box>
                <Box mt={"16px"}>
                    <Box layerStyle={"flexCenter"} gap={"8px"}>
                        <Text variant={"h5"} lineHeight={"15px"} color={colorMode === 'light' ? "#525252" : "#A5A5A5"}>AUM</Text>
                        <Image src={"/icons/tooltip.svg"} width={16} height={16} alt=" "></Image>
                    </Box>
                    <Text variant={"contentHeading4"} fontSize={"14px"} lineHeight={"18px"} mt={"7px"}>12,966,000,000</Text>
                </Box>
            </Box>
            <Box>
                <Box>
                    <Box layerStyle={"flexCenter"} gap={"8px"}>
                        <Text variant={"h5"} lineHeight={"15px"} color={colorMode === 'light' ? "#525252" : "#A5A5A5"}>52 Week High </Text>
                        <Image src={"/icons/tooltip.svg"} width={16} height={16} alt=" "></Image>
                    </Box>
                    <Text variant={"contentHeading4"} fontSize={"14px"} lineHeight={"18px"} mt={"7px"}>40.2</Text>
                </Box>
                <Box mt={"16px"}>
                    <Box layerStyle={"flexCenter"} gap={"8px"}>
                        <Text variant={"h5"} lineHeight={"15px"} color={colorMode === 'light' ? "#525252" : "#A5A5A5"}>52 Week High Date</Text>
                        <Image src={"/icons/tooltip.svg"} width={16} height={16} alt=" "></Image>
                    </Box>
                    <Text variant={"contentHeading4"} fontSize={"14px"} lineHeight={"18px"} mt={"7px"}>03-03-2024</Text>
                </Box>
                <Box mt={"16px"}>
                    <Box layerStyle={"flexCenter"} gap={"8px"}>
                        <Text variant={"h5"} lineHeight={"15px"} color={colorMode === 'light' ? "#525252" : "#A5A5A5"}>52 Week Low</Text>
                        <Image src={"/icons/tooltip.svg"} width={16} height={16} alt=" "></Image>
                    </Box>
                    <Text variant={"contentHeading4"} fontSize={"14px"} lineHeight={"18px"} mt={"7px"}>21.54</Text>
                </Box>
                <Box mt={"16px"}>
                    <Box layerStyle={"flexCenter"} gap={"8px"}>
                        <Text variant={"h5"} lineHeight={"15px"} color={colorMode === 'light' ? "#525252" : "#A5A5A5"}>52 Week Low Date</Text>
                        <Image src={"/icons/tooltip.svg"} width={16} height={16} alt=" "></Image>
                    </Box>
                    <Text variant={"contentHeading4"} fontSize={"14px"} lineHeight={"18px"} mt={"7px"}>09-04-2024</Text>
                </Box>
                <Box mt={"16px"}>
                    <Box layerStyle={"flexCenter"} gap={"8px"}>
                        <Text variant={"h5"} lineHeight={"15px"} color={colorMode === 'light' ? "#525252" : "#A5A5A5"}>YTD % Change </Text>
                        <Image src={"/icons/tooltip.svg"} width={16} height={16} alt=" "></Image>
                    </Box>
                    <Text variant={"contentHeading4"} fontSize={"14px"} lineHeight={"18px"} mt={"7px"}>41.55%</Text>
                </Box>
                <Box mt={"16px"}>
                    <Box layerStyle={"flexCenter"} gap={"8px"}>
                        <Text variant={"h5"} lineHeight={"15px"} color={colorMode === 'light' ? "#525252" : "#A5A5A5"}>1 Year % Change</Text>
                        <Image src={"/icons/tooltip.svg"} width={16} height={16} alt=" "></Image>
                    </Box>
                    <Text variant={"contentHeading4"} fontSize={"14px"} lineHeight={"18px"} mt={"7px"}>40.65%</Text>
                </Box>
                <Box mt={"16px"}>
                    <Box layerStyle={"flexCenter"} gap={"8px"}>
                        <Text variant={"h5"} lineHeight={"15px"} color={colorMode === 'light' ? "#525252" : "#A5A5A5"}>Shares Outstanding</Text>
                        <Image src={"/icons/tooltip.svg"} width={16} height={16} alt=" "></Image>
                    </Box>
                    <Text variant={"contentHeading4"} fontSize={"14px"} lineHeight={"18px"} mt={"7px"}>335,520,000</Text>
                </Box>
            </Box>
        </Box>
    );
};

export default KeyStats;