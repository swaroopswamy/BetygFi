"use client";
import { Box } from "@chakra-ui/react";
import dynamic from "next/dynamic";
const CampaignHeader = dynamic(() => import('@components/pages/campaign/header'), { ssr: false });
const CampaignPageSection1 = dynamic(() => import('@components/pages/campaign/section1'), { ssr: false });
const CampaignPageSection2 = dynamic(() => import('@components/pages/campaign/section2'), { ssr: false });
const CampaignPageSection3 = dynamic(() => import('@components/pages/campaign/section3'), { ssr: false });
const CampaignPageSection4 = dynamic(() => import('@components/pages/campaign/section4'), { ssr: false });
const CampaignPageSection5 = dynamic(() => import('@components/pages/campaign/section5'), { ssr: false });
const CampaignPageSection6 = dynamic(() => import('@components/pages/campaign/section6'), { ssr: false });

const CampaignPage = () => {
    return (
        <Box layerStyle={"flexColumn"} overflow={"hidden"}>
            <CampaignHeader />
            <CampaignPageSection1 />
            <CampaignPageSection2 />
            <CampaignPageSection3 />
            <CampaignPageSection4 />
            <CampaignPageSection5 />
            <CampaignPageSection6 />
        </Box>
    );
};

export default CampaignPage;