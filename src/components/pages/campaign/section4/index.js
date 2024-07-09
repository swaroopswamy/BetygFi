import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { PrivateKeyUses } from "../helper";

const CampaignPageSection4 = React.memo(() => {
    return (
        <Box
            w="100%"
            bgColor="#F1F6FF"
            layerStyle={"center"}
            flexDir={"column"}
            py={"120px"}
        >
            <Box w="100" layerStyle={"flexColumn"} alignItems={"center"} mb="48px" >
                <Text variant={"campaign_big_text"} mb="16px">
                    Your private key for all crypto use cases
                </Text>
            </Box>
            <Box layerStyle={"flexCenter"} gap={"24px"}>
                {PrivateKeyUses.map((entry, i) => {
                    return (
                        <Box key={i} p={"44px 24px"} layerStyle={"flexColumn"} w={"308px"} h={"408px"} borderRadius={"12px"} bgColor={"#FFFFFF"} boxShadow={"0px 14px 64px -48px rgba(15, 15, 15, 0.10)"}>
                            <i className={`icon ${entry.icon}`} />
                            <Text variant={"campaign_private_use_name"} my="24px">
                                {entry.name}
                            </Text>
                            <Text variant={"campaign_sm_text"} color={"#4E525F"}>
                                {entry.para}
                            </Text>
                        </Box>
                    );
                })}
            </Box>
        </Box>
    );
});

CampaignPageSection4.displayName = "CampaignPageSection4";
export default CampaignPageSection4;