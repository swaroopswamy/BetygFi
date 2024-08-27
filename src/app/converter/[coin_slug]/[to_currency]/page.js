import CryptoConverterPage from "@components/pages/cryptoConverter/CryptoConverterPage";
import { getCoinDashboardDataFetched, getCoinRiskPriceConversionAnalyticsFetched } from "@services/coinService";

const CryptoConverter = async ({ params }) => {
    const coinSlug = params?.coin_slug;
    const toCurrency = params?.to_currency;
    const coinDetails = await getCoinDashboardDataFetched({ id: coinSlug });
    const coinAnalyticsData = await getCoinRiskPriceConversionAnalyticsFetched({ id: coinSlug });

    return (
        <CryptoConverterPage
            coinDetails={coinDetails?.data}
            coinAnalyticsData={coinAnalyticsData}
            currentPrice={coinAnalyticsData?.currentPrice}
            coinSlug={coinSlug}
            toCurrency={toCurrency}
        />
    );
};

export default CryptoConverter;