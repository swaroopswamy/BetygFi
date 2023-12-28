import CoinPage from "@/components/pages/coin/CoinPage";
import { CoinLandingPageMetas } from "@util/metaHelper";

export const metadata = CoinLandingPageMetas('coin');

const CoinListPage = () => {
    return (
        <CoinPage />
    );
};

export default CoinListPage;
