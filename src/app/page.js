import ProtocolPage from "@components/pages/defiDashboard/ProtocolPage";
import { DefiLandingPageMetas } from "@util/metaHelper";

export const metadata = DefiLandingPageMetas('');

const HomePage = () => {
	return (
		<ProtocolPage />
	);
};

export default HomePage;
