import TopWalletDetailPage from "@/components/pages/topWallets/TopWalletDetailPage";
import { TopWalletDetailPageMetas } from "@util/metaHelper";

export async function generateMetadata({ params }) {
	return TopWalletDetailPageMetas(params?.wallet_address);
}

const TopWalletsDetailPage = ({ params }) => <TopWalletDetailPage searchParamAddress={params?.wallet_address} />;

export default TopWalletsDetailPage;
