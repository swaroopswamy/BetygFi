"use client";

import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";

const CampaignPageSection1 = React.memo(({ scrollToApply }) => {
    return (
        <Box
            h="100%"
            bgImage={"url('/images/section_1_bg_new.svg')"}
            bgRepeat={"no-repeat"}
            bgSize={"cover"}
            w="100%"
            layerStyle={"center"}
            py={"150px"}
            gap={"150px"}
            px={{ base: "20px" }}
        >
            <Box layerStyle={"flexColumn"} justifyContent={"center"} alignItems={"center"} textAlign={"center"}>
                <Text variant={"campaign_title"} color={"#FFFFFF"} >
                    API Sponsorship
                </Text>
                <Text variant={"campaign_title"} color={"#FFFFFF"} >
                    Program
                </Text>
                <Text variant={"campaign_private_use_name"} color={"#FFFFFF"} fontWeight={"400"} fontSize={{ base: "14px", lg: "20px" }} lineHeight={{ base: "20px" }} mt={"24px"} mb={"48px"}>
                    Unlock <b>$1,236</b> in Crypto API credits - <b>Free for First 100 Users!</b> <br />Limited-time API sponsorship!
                </Text>
                <Button variant={"ent_header_launch_button"}
                    bgColor={"#0D75D3"}
                    color={"#FFFFFF"}
                    border={"none"}
                    w={{ base: "140px", lg: "185px" }} borderRadius={"90px"} p="24px"
                    h="100%"
                    fontWeight={700}
                    onClick={() => {
                        scrollToApply();
                    }}
                >
                    Apply
                </Button>
            </Box>
            {/*  <Box w="648px" h="374px" bgImage={"/images/section_1_sidebox.svg"} bgRepeat={"no-repeat"}
                bgSize={"cover"}
            >
            </Box> */}
        </Box>
    );
});
CampaignPageSection1.displayName = "CampaignPageSection1";
export default CampaignPageSection1;
