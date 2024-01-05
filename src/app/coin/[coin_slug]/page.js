import CoinDetailPage from "@/components/pages/coin/CoinDetailPage";
import { getCoinDashboardData } from "@/services/coinService";
import { CoinDetailPageMetas } from "@util/metaHelper";

export async function generateMetadata({ params }) {
    const coinDetails = await getCoinDashboardData({ id: params?.coin_slug });
    return CoinDetailPageMetas(coinDetails?.data);
}

const CoinDescriptionPage = async ({ params }) => {
    const coinSlug = params?.coin_slug;
    const coinDetails = await getCoinDashboardData({ id: coinSlug });

    return (
        <CoinDetailPage
            coinSlug={coinSlug}
            coinDetails={coinDetails?.data}
        />
    );
};

export default CoinDescriptionPage;