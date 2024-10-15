import CryptoConverterPage from "@components/pages/cryptoConverter/CryptoConverterPage";
import { getCoinDashboardDataFetched, getCoinNewsFetched, getCoinPriceInCurrencyFetched, getCoinRiskPriceConversionAnalyticsFetched } from "@services/coinService";

const CryptoConverter = async ({ params }) => {
    const coinSlug = params?.coin_slug;
    const toCurrency = params?.to_currency;
    const coinDetails = await getCoinDashboardDataFetched({ id: coinSlug });
    const coinAnalyticsData = await getCoinRiskPriceConversionAnalyticsFetched({ id: coinSlug, currency: toCurrency });
    const coinNewsData = await getCoinNewsFetched({ id: coinSlug });
    const coinPriceInCurrency = await getCoinPriceInCurrencyFetched({ id: coinSlug, currency: toCurrency });

    return (
        <CryptoConverterPage
            coinDetails={coinDetails?.data}
            coinAnalyticsData={coinAnalyticsData}
            coinNewsData={coinNewsData?.data}
            currentPrice={coinPriceInCurrency?.price}
            coinSlug={coinSlug}
            toCurrency={toCurrency}
        />
    );
};

export default CryptoConverter;