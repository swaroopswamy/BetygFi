import { Box, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const TiltedBox = dynamic(() => import("@/components/pages/campaign/tiltedBox"), { ssr: false });

import { featuresArray } from "../helper";

const CampaignPageSection2 = React.memo(({ scrollToApply }) => {
    const [isLg] = useMediaQuery("(min-width: 960px)");

    return (
        <Box
            bgImage={"/images/section_2_bg_new.svg"}
            bgRepeat={"no-repeat"}
            bgSize={"cover"}
            w="100%"
            layerStyle={"flexColumn"}
            pt={{ base: "150px", lg: "260px" }}
            pb={{ base: "100px", lg: "150px" }}
            
            px={{ base: "20px", lg: "60px" }}
            position={"relative"}
            zIndex={1}
        >
            <TiltedBox scrollToApply={scrollToApply} />
            <Box w="100" layerStyle={"flexColumn"} alignItems={"center"} mb="18px">
                <Text variant={"campaign_big_text"} mb="16px">
                    Why BetygFi Crypto APIs?
                </Text>
                <Text variant={"campaign_mid_text"} textAlign={"center"}>
                    BetygFi Crypto APIs offer reliable, all-in-one cryptocurrency data with <br />24/7 support and a nearly perfect uptime record.
                </Text>
            </Box>
            {
                featuresArray.map((entry, i) => {
                    return (
                        isLg ?
                            <LgFeatureBox entry={entry} key={i} />
                            :
                            <BaseFeatureBox entry={entry} key={i} />
                    );
                })
            }
        </Box>
    );
});

const LgFeatureBox = ({ entry, i }) => {
    return (
        <Box display={"flex"} alignItems={"center"} key={i} flexDir={{ base: "column", lg: entry?.turn ? "row-reverse" : "row" }} gap={{ base: "20px", lg: "150px" }}>
            <Box w={{ base: "100%", lg: "35%" }}>
                <Image
                    src={entry.sideBoxImg}
                    width={513}
                    height={489}
                    alt="box-image"
                />
            </Box>
            <Box
                w={{ base: "100%", lg: "65%" }}
                layerStyle={"flexColumn"}
            >
                <Text variant={"campaign_feature_heading"} mb="32px">
                    {entry.name}
                </Text>
                {entry.featureList.map((listEntry, i) => {
                    return (
                        <React.Fragment key={i}>
                            <Box display={"flex"} alignItems="start" gap={"8px"} position={"relative"} mb="16px">
                                <Box w="9px" h="9px" borderRadius={"50%"} bgColor="#0D75D3" mt="7px" position={"absolute"}></Box>
                                <Text variant={"campaign_sm_text"} color="#4E525F" pl="17px">
                                    {listEntry}
                                </Text>
                            </Box>
                        </React.Fragment>
                    );
                })}
            </Box>
        </Box>
    );
};

const BaseFeatureBox = ({ entry, i }) => {
    return (
        <Box display={"flex"} alignItems={"center"} key={i} flexDir={{ base: "column", lg: entry?.turn ? "row-reverse" : "row" }} gap={{ base: "0px", lg: "150px" }} mb={"60px"}>
            <Text variant={"campaign_feature_heading"} mb="32px" fontSize={"20px"}>
                {entry.name}
            </Text>
            <Box w={{ base: "100%", lg: "35%" }}>
                <Image
                    src={entry.sideBoxImg}
                    width={513}
                    height={489}
                    objectFit="cover"
                    alt="box-image"
                />
            </Box>
            <Box
                w={{ base: "100%", lg: "65%" }}
                layerStyle={"flexColumn"}
            >

                {entry.featureList.map((listEntry, i) => {
                    return (
                        <React.Fragment key={i}>
                            <Box display={"flex"} alignItems="start" gap={"8px"} position={"relative"} mb="16px">
                                <Box w="9px" h="9px" borderRadius={"50%"} bgColor="#0D75D3" mt="7px" position={"absolute"}></Box>
                                <Text variant={"campaign_sm_text"} color="#4E525F" pl="17px">
                                    {listEntry}
                                </Text>
                            </Box>
                        </React.Fragment>
                    );
                })}
            </Box>
        </Box>
    );
};

CampaignPageSection2.displayName = "CampaignPageSection2";
export default CampaignPageSection2;