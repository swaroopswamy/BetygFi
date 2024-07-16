"use client";
import React from "react";
import { Box, Text, Checkbox, CloseButton } from "@chakra-ui/react";
import Image from "next/image";

const CustomizeTabLayoutPanel = () => {

    return (
        <>
            <Box width={"100%"}>
                <Text variant={"contentHeading4"} fontSize={"20px"} lineHeight={"10px"} mt={"25px"}>Layout Settings</Text>
                <Box display={{ base: "none", md: "flex" }} layerStyle={"flexCenter"} width={"100%"} mt={"20px"} gap={"8px"}>
                    <Box width={"50%"}>
                        <Box p={"20px"} bg={"background.primary"} borderRadius={"6px"}>
                            <Text variant={"SettingsText3"} fontSize={"14px"} fontWeight={500} lineHeight={"16px"}>Price</Text>
                            <Box layerStyle={"flexColumn"} gap={"8px"} mt={"10px"}>
                                <Checkbox><Text variant={"footnoteText"} fontSize={"14px"} lineHeight={"16px"}>Price USD</Text></Checkbox>
                                <Checkbox><Text variant={"footnoteText"} fontSize={"14px"} lineHeight={"16px"}>Price BTC</Text></Checkbox>
                                <Checkbox><Text variant={"footnoteText"} fontSize={"14px"} lineHeight={"16px"}>Price ETH</Text></Checkbox>
                            </Box>
                        </Box>
                        <Box p={"20px"} bg={"background.primary"} borderRadius={"6px"} mt={"3px"} height={"215px"}>
                            <Text variant={"SettingsText3"} fontSize={"14px"} fontWeight={500} lineHeight={"16px"}>Market Cap</Text>
                            <Box layerStyle={"flexColumn"} gap={"8px"} mt={"10px"}>
                                <Checkbox><Text variant={"footnoteText"} fontSize={"14px"} lineHeight={"16px"}>Full. Dil. Valuation (FDV) </Text></Checkbox>
                                <Checkbox><Text variant={"footnoteText"} fontSize={"14px"} lineHeight={"16px"}>Circ Supply </Text></Checkbox>
                                <Checkbox><Text variant={"footnoteText"} fontSize={"14px"} lineHeight={"16px"}>Circ Supply (%) </Text></Checkbox>
                            </Box>
                        </Box>
                    </Box>
                    <Box width={"50%"} className="hidescrollbar" overflowY={"auto"} maxHeight={"350px"}>
                        <Box bg={"background.primary"} borderRadius={"4px"} padding={"8px 10px"} layerStyle={"flexSpaceBetween"}>
                            <Box layerStyle={"flexCenter"}>
                                <Image src={"/icons/Menu_Icon.svg"} width={25} height={25} alt=" "></Image>
                                <Text variant={"footnoteText"} fontSize={"14px"} lineHeight={"16px"} pl={"25px"}>Full. Dil. Valuation (FDV)</Text>
                            </Box>
                            <CloseButton />
                        </Box>
                        <Box bg={"background.primary"} borderRadius={"4px"} padding={"8px 10px"} layerStyle={"flexSpaceBetween"} mt={"3px"}>
                            <Box layerStyle={"flexCenter"}>
                                <Image src={"/icons/Menu_Icon.svg"} width={25} height={25} alt=" "></Image>
                                <Text variant={"footnoteText"} fontSize={"14px"} lineHeight={"16px"} pl={"25px"}>Full. Dil. Valuation (FDV)</Text>
                            </Box>
                            <CloseButton />
                        </Box>
                        <Box bg={"background.primary"} borderRadius={"4px"} padding={"8px 10px"} layerStyle={"flexSpaceBetween"} mt={"3px"}>
                            <Box layerStyle={"flexCenter"}>
                                <Image src={"/icons/Menu_Icon.svg"} width={25} height={25} alt=" "></Image>
                                <Text variant={"footnoteText"} fontSize={"14px"} lineHeight={"16px"} pl={"25px"}>Full. Dil. Valuation (FDV)</Text>
                            </Box>
                            <CloseButton />
                        </Box>
                        <Box bg={"background.primary"} borderRadius={"4px"} padding={"8px 10px"} layerStyle={"flexSpaceBetween"} mt={"3px"}>
                            <Box layerStyle={"flexCenter"}>
                                <Image src={"/icons/Menu_Icon.svg"} width={25} height={25} alt=" "></Image>
                                <Text variant={"footnoteText"} fontSize={"14px"} lineHeight={"16px"} pl={"25px"}>Full. Dil. Valuation (FDV)</Text>
                            </Box>
                            <CloseButton />
                        </Box>
                        <Box bg={"background.primary"} borderRadius={"4px"} padding={"8px 10px"} layerStyle={"flexSpaceBetween"} mt={"3px"}>
                            <Box layerStyle={"flexCenter"}>
                                <Image src={"/icons/Menu_Icon.svg"} width={25} height={25} alt=" "></Image>
                                <Text variant={"footnoteText"} fontSize={"14px"} lineHeight={"16px"} pl={"25px"}>Full. Dil. Valuation (FDV)</Text>
                            </Box>
                            <CloseButton />
                        </Box>
                        <Box bg={"background.primary"} borderRadius={"4px"} padding={"8px 10px"} layerStyle={"flexSpaceBetween"} mt={"3px"}>
                            <Box layerStyle={"flexCenter"}>
                                <Image src={"/icons/Menu_Icon.svg"} width={25} height={25} alt=" "></Image>
                                <Text variant={"footnoteText"} fontSize={"14px"} lineHeight={"16px"} pl={"25px"}>Full. Dil. Valuation (FDV)</Text>
                            </Box>
                            <CloseButton />
                        </Box>
                        <Box bg={"background.primary"} borderRadius={"4px"} padding={"8px 10px"} layerStyle={"flexSpaceBetween"} mt={"3px"}>
                            <Box layerStyle={"flexCenter"}>
                                <Image src={"/icons/Menu_Icon.svg"} width={25} height={25} alt=" "></Image>
                                <Text variant={"footnoteText"} fontSize={"14px"} lineHeight={"16px"} pl={"25px"}>Full. Dil. Valuation (FDV)</Text>
                            </Box>
                            <CloseButton />
                        </Box>
                        <Box bg={"background.primary"} borderRadius={"4px"} padding={"8px 10px"} layerStyle={"flexSpaceBetween"} mt={"3px"}>
                            <Box layerStyle={"flexCenter"}>
                                <Image src={"/icons/Menu_Icon.svg"} width={25} height={25} alt=" "></Image>
                                <Text variant={"footnoteText"} fontSize={"14px"} lineHeight={"16px"} pl={"25px"}>Full. Dil. Valuation (FDV)</Text>
                            </Box>
                            <CloseButton />
                        </Box>
                    </Box>
                </Box>
                <Box display={{ base: "block", md: "none" }} width={"100%"} mt={"20px"} gap={"8px"}>
                    <Box width={"100%"} className="hidescrollbar" overflowY={"auto"} maxHeight={"350px"}>
                        <Box bg={"background.primary"} borderRadius={"4px"} padding={"8px 10px"} layerStyle={"flexSpaceBetween"}>
                            <Box layerStyle={"flexCenter"}>
                                <Image src={"/icons/Menu_Icon.svg"} width={25} height={25} alt=" "></Image>
                                <Text variant={"footnoteText"} fontSize={"14px"} lineHeight={"16px"} pl={"25px"}>Full. Dil. Valuation (FDV)</Text>
                            </Box>
                            <CloseButton />
                        </Box>
                        <Box bg={"background.primary"} borderRadius={"4px"} padding={"8px 10px"} layerStyle={"flexSpaceBetween"} mt={"3px"}>
                            <Box layerStyle={"flexCenter"}>
                                <Image src={"/icons/Menu_Icon.svg"} width={25} height={25} alt=" "></Image>
                                <Text variant={"footnoteText"} fontSize={"14px"} lineHeight={"16px"} pl={"25px"}>Full. Dil. Valuation (FDV)</Text>
                            </Box>
                            <CloseButton />
                        </Box>
                        <Box bg={"background.primary"} borderRadius={"4px"} padding={"8px 10px"} layerStyle={"flexSpaceBetween"} mt={"3px"}>
                            <Box layerStyle={"flexCenter"}>
                                <Image src={"/icons/Menu_Icon.svg"} width={25} height={25} alt=" "></Image>
                                <Text variant={"footnoteText"} fontSize={"14px"} lineHeight={"16px"} pl={"25px"}>Full. Dil. Valuation (FDV)</Text>
                            </Box>
                            <CloseButton />
                        </Box>
                        <Box bg={"background.primary"} borderRadius={"4px"} padding={"8px 10px"} layerStyle={"flexSpaceBetween"} mt={"3px"}>
                            <Box layerStyle={"flexCenter"}>
                                <Image src={"/icons/Menu_Icon.svg"} width={25} height={25} alt=" "></Image>
                                <Text variant={"footnoteText"} fontSize={"14px"} lineHeight={"16px"} pl={"25px"}>Full. Dil. Valuation (FDV)</Text>
                            </Box>
                            <CloseButton />
                        </Box>
                        <Box bg={"background.primary"} borderRadius={"4px"} padding={"8px 10px"} layerStyle={"flexSpaceBetween"} mt={"3px"}>
                            <Box layerStyle={"flexCenter"}>
                                <Image src={"/icons/Menu_Icon.svg"} width={25} height={25} alt=" "></Image>
                                <Text variant={"footnoteText"} fontSize={"14px"} lineHeight={"16px"} pl={"25px"}>Full. Dil. Valuation (FDV)</Text>
                            </Box>
                            <CloseButton />
                        </Box>
                        <Box bg={"background.primary"} borderRadius={"4px"} padding={"8px 10px"} layerStyle={"flexSpaceBetween"} mt={"3px"}>
                            <Box layerStyle={"flexCenter"}>
                                <Image src={"/icons/Menu_Icon.svg"} width={25} height={25} alt=" "></Image>
                                <Text variant={"footnoteText"} fontSize={"14px"} lineHeight={"16px"} pl={"25px"}>Full. Dil. Valuation (FDV)</Text>
                            </Box>
                            <CloseButton />
                        </Box>
                        <Box bg={"background.primary"} borderRadius={"4px"} padding={"8px 10px"} layerStyle={"flexSpaceBetween"} mt={"3px"}>
                            <Box layerStyle={"flexCenter"}>
                                <Image src={"/icons/Menu_Icon.svg"} width={25} height={25} alt=" "></Image>
                                <Text variant={"footnoteText"} fontSize={"14px"} lineHeight={"16px"} pl={"25px"}>Full. Dil. Valuation (FDV)</Text>
                            </Box>
                            <CloseButton />
                        </Box>
                        <Box bg={"background.primary"} borderRadius={"4px"} padding={"8px 10px"} layerStyle={"flexSpaceBetween"} mt={"3px"}>
                            <Box layerStyle={"flexCenter"}>
                                <Image src={"/icons/Menu_Icon.svg"} width={25} height={25} alt=" "></Image>
                                <Text variant={"footnoteText"} fontSize={"14px"} lineHeight={"16px"} pl={"25px"}>Full. Dil. Valuation (FDV)</Text>
                            </Box>
                            <CloseButton />
                        </Box>
                    </Box>
                    <Box width={"100%"} mt={"20px"}>
                        <Box p={"20px"} bg={"background.primary"} borderRadius={"6px"}>
                            <Box layerStyle={"flexCenter"} gap={"7px"}>
                                <Text variant={"SettingsText3"} fontSize={"14px"} fontWeight={500} lineHeight={"16px"}>Price</Text>
                                <Image src={"/icons/tooltip.svg"} width={16} height={16} alt=" "></Image>
                            </Box>
                            <Box layerStyle={"flexColumn"} gap={"8px"} mt={"10px"}>
                                <Checkbox><Text variant={"footnoteText"} fontSize={"14px"} lineHeight={"16px"}>Price USD</Text></Checkbox>
                                <Checkbox><Text variant={"footnoteText"} fontSize={"14px"} lineHeight={"16px"}>Price BTC</Text></Checkbox>
                                <Checkbox><Text variant={"footnoteText"} fontSize={"14px"} lineHeight={"16px"}>Price ETH</Text></Checkbox>
                            </Box>
                        </Box>
                        <Box p={"20px"} bg={"background.primary"} borderRadius={"6px"} mt={"3px"} height={"215px"}>
                            <Box layerStyle={"flexCenter"} gap={"7px"}>
                                <Text variant={"SettingsText3"} fontSize={"14px"} fontWeight={500} lineHeight={"16px"}>Market Cap</Text>
                                <Image src={"/icons/tooltip.svg"} width={16} height={16} alt=" "></Image>
                            </Box>
                            <Box layerStyle={"flexColumn"} gap={"8px"} mt={"10px"}>
                                <Checkbox><Text variant={"footnoteText"} fontSize={"14px"} lineHeight={"16px"}>Full. Dil. Valuation (FDV) </Text></Checkbox>
                                <Checkbox><Text variant={"footnoteText"} fontSize={"14px"} lineHeight={"16px"}>Circ Supply </Text></Checkbox>
                                <Checkbox><Text variant={"footnoteText"} fontSize={"14px"} lineHeight={"16px"}>Circ Supply (%) </Text></Checkbox>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default CustomizeTabLayoutPanel;