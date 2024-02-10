import { getDefiDataFetched } from "@services/defiDashboardService";
import ProtocolDetailPage from "@components/pages/defiDashboard/ProtocolDetailPage";
import { DefiDetailPageMetas } from "@util/metaHelper";

export async function generateMetadata({ params }) {
    const defiData = await getDefiDataFetched({ id: params?.protocol_slug });
    return DefiDetailPageMetas(defiData?.data);
}

const ProtocolPage = async ({ params }) => {
    const searchParamProtocolSlug = params?.protocol_slug;
    const defiData = await getDefiDataFetched({ id: params?.protocol_slug });
    return (
        <ProtocolDetailPage
            defiData={defiData?.data}
            searchParamProtocolSlug={searchParamProtocolSlug}
        />
    );
};

export default ProtocolPage;
