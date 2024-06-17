"use client";
import { Box, Image, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useColorMode } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const TermsPanelComponent = dynamic(() => import("@components/pages/legal/terms"), { ssr: false });
const PrivacyPanelComponent = dynamic(() => import("@components/pages/legal/privacy"), { ssr: false });

const MdLegalPage = ({ tabIndex, setTabIndex }) => {
    const { colorMode } = useColorMode();

    return (
        <Box
            display={{ base: "none", md: "block" }}
            width={"100%"}
            padding={"0px"}
        >
            <Box
                width={"100%"}
                height={"175px"}
                flexShrink={0}
                _light={{
                    bg: "#E8E8E8"
                }}
                _dark={{
                    bg: "#131313"
                }}
            >
                <Box layerStyle={"flexSpaceBetween"}>
                    <Box padding={"50px 0px 44px 74px"} >
                        <Text variant={"bigHeading"} _light={{ color: "#000" }} _dark={{ color: "#FFF" }}>Legal</Text>
                    </Box>
                    <Box p={"9px 205px 16px 0px"}>
                        <Image
                            // unoptimized="true"
                            // priority="true"
                            src={colorMode === "light" ? "/images/bg-logo.svg" : "/images/bg-logo-dark.svg"}
                            alt=" " width={153} height={150} flexShrink={0} />
                    </Box>
                </Box>
            </Box>
            <Tabs onChange={(index) => setTabIndex(index)}>
                <TabList
                    paddingLeft={{ base: "0px", md: "74px" }}
                    w={{ base: "100%", sm: "100%", midSize: "auto", md: "auto" }}
                    _light={{
                        bg: "#E8E8E8"
                    }}
                    _dark={{
                        bg: "#131313"
                    }}
                >
                    <Tab
                        padding="0"
                        w={{ base: "100%", sm: "100%", midSize: "auto", md: "auto" }}
                    >
                        <Box
                            layerStyle={"flexCenter"}
                            w={{ base: "100%", sm: "100%", midSize: "auto", md: "auto" }}
                            padding={{ base: "12px 6px 12px 6px", md: "13px 19px 12px 12px" }}
                            bgColor={tabIndex === 0 ?
                                (colorMode === 'light' ? "#202020" : "#FFFFFF") :
                                (colorMode === 'light' ? "#F0F0F5" : "#202020")
                            }
                        >
                            <Text
                                variant={"TabText"}
                                color={tabIndex === 0 ?
                                    (colorMode === 'light' ? "#FFFFFF" : "#000000") :
                                    (colorMode === 'light' ? "#000000" : "#FFFFFF")
                                }
                            >
                                Terms & Conditions
                            </Text>
                        </Box>
                    </Tab>
                    <Tab
                        padding="0"
                        w={{ base: "100%", sm: "100%", midSize: "auto", md: "auto" }}
                    >
                        <Box
                            w={{ base: "100%", sm: "100%", midSize: "auto", md: "auto" }}
                            layerStyle={"flexCenter"}
                            padding={{ base: "12px 6px 12px 6px", md: "13px 19px 12px 15x" }}
                            bgColor={tabIndex === 1 ?
                                (colorMode === 'light' ? "#202020" : "#FFFFFF") :
                                (colorMode === 'light' ? "#F0F0F5" : "#202020")
                            }
                        >
                            <Text
                                variant={"TabText"}
                                color={tabIndex === 1 ?
                                    (colorMode === 'light' ? "#FFFFFF" : "#202020") :
                                    (colorMode === 'light' ? "#202020" : "#FFFFFF")
                                }
                            >
                                Privacy Policy
                            </Text>
                        </Box>
                    </Tab>
                </TabList>
                <TabPanels>
                    <TabPanel p="0px">
                        <TermsPanelComponent />
                    </TabPanel>
                    <TabPanel p="0px">
                        <PrivacyPanelComponent />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    );
};

export default MdLegalPage;