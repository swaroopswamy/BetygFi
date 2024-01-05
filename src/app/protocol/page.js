import ProtocolPage from "@/components/pages/defiDashboard/ProtocolPage";
import { DefiLandingPageMetas } from "@util/metaHelper";

export const metadata = DefiLandingPageMetas('protocol');

const ProtocolListPage = () => {
    return (
        <ProtocolPage />
    );
};

export default ProtocolListPage;
