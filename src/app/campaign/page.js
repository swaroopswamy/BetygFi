"use client";
import { Box } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
const CampaignHeader = dynamic(() => import('@components/pages/campaign/header'));
const CampaignPageSection1 = dynamic(() => import('@components/pages/campaign/section1'));
const CampaignPageSection2 = dynamic(() => import('@components/pages/campaign/section2'));
const CampaignPageSection3 = dynamic(() => import('@components/pages/campaign/section3'));
const CampaignPageSection4 = dynamic(() => import('@components/pages/campaign/section4'));
const CampaignPageSection5 = dynamic(() => import('@components/pages/campaign/section5'));
const CampaignPageSection6 = dynamic(() => import('@components/pages/campaign/section6'));
const CampaignPageFooter = dynamic(() => import('@components/pages/campaign/footer'));


const CampaignPage = () => {
    const searchParams = useSearchParams();

    const source = searchParams.get('utm_source');
    const medium = searchParams.get('utm_medium');
    const campaign = searchParams.get('utm_campaign');
    const content = searchParams.get('utm_content');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const scrollToApply = () => {
        const section = document.getElementById('apply-form');
        if (section) {
            section.scrollIntoView({
                behavior: "smooth"
            });
        }
    };
    return (
        <Box layerStyle={"flexColumn"} overflow={"hidden"}>
            <CampaignHeader />
            <CampaignPageSection1 scrollToApply={scrollToApply} />
            <CampaignPageSection2 scrollToApply={scrollToApply} />
            <CampaignPageSection3 />
            <CampaignPageSection4 />
            <CampaignPageSection5 />
            <CampaignPageSection6 source={source} medium={medium} campaign={campaign} content={content} />
            <CampaignPageFooter />
        </Box>
    );
};

export default CampaignPage;