import { CampaignLandingPageMetas } from "@util/metaHelper";
import dynamic from "next/dynamic";
const CampaignPage = dynamic(() => import("@components/pages/campaign/CampaignPage/index.js"), { ssr: false });

export const metadata = CampaignLandingPageMetas("campaign");

const CampaignLandingPage = () => {
    return (
        <CampaignPage />
    );
};

export default CampaignLandingPage;
