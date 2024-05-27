import CoinPage from "@components/pages/coin/CoinPage";
import { DefiLandingPageMetas } from "@util/metaHelper";

export const metadata = DefiLandingPageMetas('');

const HomePage = () => {
    return (
        <CoinPage />
    );
};

export default HomePage;
