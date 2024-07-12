import { Box, Divider, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import { NumbersDataArray } from "../helper";
const CampaignPageSection3 = React.memo(() => {
    const [isLg] = useMediaQuery("(min-width: 960px)");

    return (
        <Box
            bgImage={{ base: "/images/section_3_base.svg", lg: "/images/section_3_bg.svg" }}
            bgRepeat={"no-repeat"}
            bgSize={"cover"}
            layerStyle={"center"}
            flexDir={"column"}
            py="102px"
            pb={{ base: "120px", lg: "102px" }}
            px={{ base: "16px" }}
        >
            <Box w="100" layerStyle={"flexColumn"} alignItems={"center"} mb="18px">
                <Text variant={"campaign_big_text"} mb="16px">
                    The numbers don’t lie
                </Text>
                <Text variant={"campaign_mid_text"} textAlign={"center"}>
                    BetygFi collects On-chain and off-chain from all possible sources and provide<br />
                    accurate and comprehensive cryptocurrency data you can trust.
                </Text>
            </Box>
            <Box p="40px" layerStyle={"flexCenter"} flexDir={{ base: "column", lg: "row" }} bgColor={"#FFFFFF"} borderRadius={"12px"} justifyContent={"space-between"} alignItems={{ base: "baseline", lg: "center" }} gap={"40px"} boxShadow={"0px 14px 64px 0px rgba(15, 15, 15, 0.10)"}>
                {NumbersDataArray.map((entry, i) => {
                    return (
                        <React.Fragment key={i}>
                            <Box layerStyle={"flexColumn"}   >
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
                                    isLg ?
                                        <Divider orientation={'vertical'} bgColor={"#E5E5E5"} opacity={1} height={"88px"} w={"1px"} />
                                        :
                                        <Divider orientation={'horizontal'} bgColor={"#E5E5E5"} opacity={1} height={"1px"} w={"100%"} />
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