import dynamic from "next/dynamic";
const CoinDetailPage = dynamic(() => import("@components/pages/coin/CoinDetailPage"), { ssr: false });
import { getCoinDashboardDataFetched } from "@services/coinService";
import { CoinDetailPageMetas } from "@util/metaHelper";

export async function generateMetadata({ params }) {
    const coinDetails = await getCoinDashboardDataFetched({ id: params?.coin_slug });
    return CoinDetailPageMetas(coinDetails?.data);
}

const CoinDescriptionPage = async ({ params }) => {
    const coinSlug = params?.coin_slug;
    const coinDetails = await getCoinDashboardDataFetched({ id: coinSlug });

    return (
        <CoinDetailPage
            coinSlug={coinSlug}
            coinDetails={coinDetails?.data}
        />
    );
};

export default CoinDescriptionPage;
