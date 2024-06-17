import { TopWalletDetailPageMetas } from "@util/metaHelper";
import dynamic from "next/dynamic";
const TopWalletDetailPage = dynamic(() => import('@/components/pages/topWallets/TopWalletDetailPage'), { ssr: false });
export async function generateMetadata({ params }) {
	return TopWalletDetailPageMetas(params?.wallet_address);
}

const TopWalletsDetailPage = ({ params }) => <TopWalletDetailPage searchParamAddress={params?.wallet_address} />;

export default TopWalletsDetailPage;
