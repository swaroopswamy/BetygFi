import { Box, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const TabBox = React.memo(() => {
    const [tabIndex, setTabIndex] = useState(0);
    return (
        <Box
            layerStyle={"flexColumn"}
            maxW={"575px"}
            borderRadius={'12px'}
            bgColor={"#060606"}
            p={"0px"}
            h="100%"
        >
            <Tabs onChange={(index) => setTabIndex(index)} p={"0px"}>
                <TabList
                    padding={"12px 14px"}
                    w={{ base: "100%", sm: "100%", midSize: "auto", md: "auto" }}
                    bg="transparent"
                    gap={"18px"}
                >
                    <Tab
                        padding="2px 8px"
                        bg="transparent"
                        borderRadius={"8px"}
                        border={tabIndex === 0 ? "1px solid #FFFFFF" : "transparent"}
                        w={{ base: "100%", sm: "100%", midSize: "auto", md: "auto" }}
                    >
                        <Text variant={"campaign_sm_text"}>
                            Lorem ipsum
                        </Text>
                    </Tab>
                    <Tab
                        padding="0"
                        bg="transparent"
                        borderRadius={"8px"}
                        border={tabIndex === 1 ? "1px solid #FFFFFF" : "transparent"}
                        w={{ base: "100%", sm: "100%", midSize: "auto", md: "auto" }}
                    >
                        <Text variant={"campaign_sm_text"}>
                            Lorem ipsum
                        </Text>
                    </Tab>
                </TabList>
                <TabPanels p={"24px"}>
                    <TabPanel p={"0px"}>
                        <Box layerStyle={"flexColumn"}>
                            <Text variant={"campaign_sm_text"}>
                                Lorem ipsum dolor sit amet consectetur Arcu neque blandit laoreet at eleifend Dui scelerisque blandit nibh lacus libero volutpat eu Bibendum rhoncus egestas quis ut aenean Lorem ipsum dolor sit amet consectetur Arcu neque blandit laoreet at eleifend Dui scelerisque blandit nibh lacus libero volutpat eu
                            </Text>
                        </Box>
                    </TabPanel>
                    <TabPanel p={"0px"}>
                        <Box layerStyle={"flexColumn"}>
                            <Text variant={"campaign_sm_text"}>
                                Lorem ipsum dolor sit amet consectetur Arcu neque blandit laoreet at eleifend Dui scelerisque blandit nibh lacus libero volutpat eu Bibendum rhoncus egestas quis ut aenean Lorem ipsum dolor sit amet consectetur Arcu neque blandit laoreet at eleifend Dui scelerisque blandit nibh lacus libero volutpat eu
                            </Text>
                        </Box>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box >
    );
});

TabBox.displayName = TabBox;
export default TabBox;
