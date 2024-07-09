import { Box, Text } from "@chakra-ui/react";
import React from "react";
import TabBox from "./TabBox";
import { BuildSteps } from "../helper";

const CampaignPageSection5 = React.memo(() => {
    return (
        <Box
            w="100%"
            bgColor="#FFFFFF"
            layerStyle={"center"}
            flexDir={"column"}
            py={"120px"}
        >
            <Box w="100" layerStyle={"flexColumn"} alignItems={"center"} mb="18px">
                <Text variant={"campaign_big_text"} mb="16px">
                    Build in 3 steps
                </Text>
                <Text variant={"campaign_mid_text"} textAlign={"center"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus mattis<br /> viverra ullamcorper cras viverra elementum donec.
                </Text>
            </Box>
            <Box mt="80px" layerStyle={"flexCenter"} gap={"70px"} px={"70px"}>
                <Box w="50%">
                    <TabBox />
                </Box>
                <Box layerStyle={"flexColumn"} gap={"30px"} >
                    {
                        BuildSteps.map((entry, i) => {
                            return (
                                <Box key={i} display={"flex"} alignItems={"start"} gap={"20px"}>
                                    <i className={`icon ${entry.icon}`} />
                                    <Box layerStyle={"flexColumn"} w={"80%"}>
                                        <Text variant={"campaign_12_text"} mb={"8px"}>
                                            Step {i + 1}
                                        </Text>
                                        <Text variant={"campaign_private_use_name"} mb={"12px"}>
                                            {entry.name}
                                        </Text>
                                        <Text variant={"campaign_sm_text"} color={"#4E525F"}>
                                            {entry.para}
                                        </Text>
                                    </Box>
                                </Box>
                            );
                        })
                    }
                </Box>
            </Box>
        </Box>
    );
});

CampaignPageSection5.displayName = "CampaignPageSection5";
export default CampaignPageSection5;