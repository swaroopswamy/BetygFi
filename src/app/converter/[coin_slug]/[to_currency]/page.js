import CryptoConverterPage from "@components/pages/cryptoConverter/CryptoConverterPage";
import { getCoinDashboardDataFetched, getCoinNewsFetched, getCoinRiskPriceConversionAnalyticsFetched } from "@services/coinService";

const CryptoConverter = async ({ params }) => {
    const coinSlug = params?.coin_slug;
    const toCurrency = params?.to_currency;
    const coinDetails = await getCoinDashboardDataFetched({ id: coinSlug });
    const coinAnalyticsData = await getCoinRiskPriceConversionAnalyticsFetched({ id: coinSlug });
    const coinNewsData = await getCoinNewsFetched({ id: coinSlug });

    return (
        <CryptoConverterPage
            coinDetails={coinDetails?.data}
            coinAnalyticsData={coinAnalyticsData}
            coinNewsData={coinNewsData?.data}
            currentPrice={coinAnalyticsData?.currentPrice}
            coinSlug={coinSlug}
            toCurrency={toCurrency}
        />
    );
};

export default CryptoConverter;