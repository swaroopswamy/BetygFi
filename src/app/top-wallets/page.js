import TopWalletPage from "@/components/pages/topWallets/TopWalletPage";
import { TopWalletLandingPageMetas } from "@util/metaHelper";

export const metadata = TopWalletLandingPageMetas('top-wallets');

const WalletListPage = () => {
	return (
		<TopWalletPage />
	);
};

export default WalletListPage;
