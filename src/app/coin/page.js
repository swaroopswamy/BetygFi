import dynamic from "next/dynamic";
const CoinPage = dynamic(() => import("@components/pages/coin/CoinPage"));
import { CoinLandingPageMetas } from "@util/metaHelper";

export const metadata = CoinLandingPageMetas('coin');

const CoinListPage = () => <CoinPage />;

export default CoinListPage;
