import TopWalletDetailPage from "@components/pages/topWallets/TopWalletDetailPage";

const ProtocolPage = async ({ params }) => {
	const searchParamAddress = params?.wallet_address;
	return (
		<TopWalletDetailPage
			searchParamAddress={searchParamAddress}
		/>
	);
};

export default ProtocolPage;
