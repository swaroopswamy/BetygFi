import { Box, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import { BuildSteps } from "../helper";
import dynamic from "next/dynamic";
const TabBox = dynamic(() => import("@/components/pages/campaign/section5/TabBox"), { ssr: false });


const CampaignPageSection5 = React.memo(() => {
    const [isLg] = useMediaQuery("(min-width: 960px)");

    return (
        <Box
            w="100%"
            bgColor="#FFFFFF"
            layerStyle={"center"}
            flexDir={"column"}
            py={{ base: "50px", lg: "120px" }}
            px={{ base: "16px", lg: "0px" }}
        >
            <Box w="100" layerStyle={"flexColumn"} alignItems={"center"} mb="18px">
                <Text variant={"campaign_big_text"} mb="16px">
                    Build in 3 steps
                </Text>
                <Text variant={"campaign_mid_text"} textAlign={"center"}>
                    Follow three simple steps to get started with BetygFi<br /> Crypto APIs.
                </Text>
            </Box>
            <Box mt={{ base: "20px", lg: "80px" }} layerStyle={"flexCenter"} gap={"70px"} px={{ base: "0px", lg: "70px" }} flexDir={{ base: "column", lg: "row" }}>
                <Box w={{ base: "70%", lg: "50%" }}>
                    <TabBox />
                </Box>
                <Box layerStyle={"flexColumn"} gap={"30px"} w={{ base: "70%", lg: "50%" }}>
                    {
                        BuildSteps.map((entry, i) => {
                            return (
                                isLg ?
                                    <LgBuildSteps entry={entry} i={i} />
                                    :
                                    <BaseBuildSteps entry={entry} i={i} />
                            );
                        })
                    }
                </Box>
            </Box>
        </Box>
    );
});

const LgBuildSteps = ({ entry, i }) => {
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
};

const BaseBuildSteps = ({ entry, i }) => {
    return (
        <Box key={i} display={"flex"} alignItems={"center"} flexDir={"column"} gap={"20px"} >
            <Box layerStyle={"flexColumn"} alignItems={"center"} w={"100%"}>
                <Text variant={"campaign_12_text"} mb={"8px"}>
                    Step {i + 1}
                </Text>
                <i className={`icon ${entry.icon}`} />

                <Text variant={"campaign_private_use_name"} mb={"12px"}>
                    {entry.name}
                </Text>
                <Text variant={"campaign_sm_text"} color={"#4E525F"} textAlign={"center"}>
                    {entry.para}
                </Text>
            </Box>
        </Box>
    );
};

CampaignPageSection5.displayName = "CampaignPageSection5";
export default CampaignPageSection5;