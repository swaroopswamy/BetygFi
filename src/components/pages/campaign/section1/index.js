"use client";

import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";

const CampaignPageSection1 = React.memo(() => {
    return (
        <Box
            h="100%"
            bgImage={"url('/images/section_1_bg.svg')"}
            bgRepeat={"no-repeat"}
            bgSize={"cover"}
            w="100%"
            layerStyle={"center"}
            py={"150px"}
            gap={"150px"}
        >
            <Box layerStyle={"flexColumn"} justifyContent={"start"}>
                <Text variant={"campaign_title"} color={"#FFFFFF"}>
                    Free
                </Text>
                <Text variant={"campaign_title"} color={"#191919"}>
                    API Scholarship<br /> Program
                </Text>
                <Text variant={"campaign_private_use_name"} color={"#FFFFFF"} fontWeight={"400"} mt={"24px"} mb={"48px"}>
                    FREE access premium features to the first 100 users!
                </Text>
                <Button variant={"ent_header_launch_button"} w="185px" borderRadius={"90px"} p="24px" fontWeight={700}
                    onClick={() => {
                        window.scrollTo({
                            top: document.body.scrollHeight,
                            behavior: 'smooth'
                        });
                    }}
                >
                    Apply
                </Button>
            </Box>
            <Box w="648px" h="374px" bgImage={"/images/section_1_sidebox.svg"} bgRepeat={"no-repeat"}
                bgSize={"cover"}
            >
            </Box>
        </Box>
    );
});
CampaignPageSection1.displayName = "CampaignPageSection1";
export default CampaignPageSection1;
