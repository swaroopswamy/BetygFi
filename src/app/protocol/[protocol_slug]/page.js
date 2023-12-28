import { getDefiData } from "@/services/defiDashboardService";
import ProtocolDetailPage from "@/components/pages/defiDashboard/ProtocolDetailPage";
import { DefiDetailPageMetas } from "@util/metaHelper";

export async function generateMetadata({ params }) {
    const defiData = await getDefiData({ id: params?.protocol_slug });
    return DefiDetailPageMetas(defiData?.data);
}

const ProtocolPage = async ({ params }) => {
    const searchParamProtocolSlug = params?.protocol_slug;
    const defiData = await getDefiData({ id: searchParamProtocolSlug });

    return (
        <ProtocolDetailPage
            defiData={defiData?.data}
            searchParamProtocolSlug={searchParamProtocolSlug}
        />
    );
};

export default ProtocolPage;
