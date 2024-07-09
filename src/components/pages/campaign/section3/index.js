import { Box, Divider, Text } from "@chakra-ui/react";
import React from "react";
import { NumbersDataArray } from "../helper";
const CampaignPageSection3 = React.memo(() => {
    return (
        <Box
            bgImage={"/images/section_3_bg.svg"}
            bgRepeat={"no-repeat"}
            bgSize={"cover"}
            layerStyle={"center"}
            flexDir={"column"}
            py="102px"
        >
            <Box w="100" layerStyle={"flexColumn"} alignItems={"center"} mb="18px">
                <Text variant={"campaign_big_text"} mb="16px">
                    The numbers don’t lie
                </Text>
                <Text variant={"campaign_mid_text"} textAlign={"center"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus mattis<br /> viverra ullamcorper cras viverra elementum donec.
                </Text>
            </Box>
            <Box p="40px" layerStyle={"flexCenter"} bgColor={"#FFFFFF"} borderRadius={"12px"} justifyContent={"space-between"} gap={"40px"} boxShadow={"0px 14px 64px 0px rgba(15, 15, 15, 0.10)"}>
                {NumbersDataArray.map((entry, i) => {
                    return (
                        <React.Fragment key={i}>
                            <Box layerStyle={"flexColumn"} >
                                <Box layerStyle={"flexCenter"} gap={"12px"}>
                                    <i className={`icon ${entry.icon}`} />
                                    <Text variant={"campaign_sm_text"} fontSize={"20px"} color={"#4E525F"}>
                                        {entry.name}
                                    </Text>
                                </Box>
                                <Text variant={"campaign_big_text"}>
                                    {entry.value}
                                </Text>
                            </Box>
                            {
                                i !== 2 && (
                                    <Divider orientation='vertical'  bgColor={"#E5E5E5"} opacity={1} height={"88px"} w={"1px"}/>
                                )
                            }
                        </React.Fragment>
                    );
                })}
            </Box>
        </Box>
    );
});

CampaignPageSection3.displayName = "CampaignPageSection3";

export default CampaignPageSection3;