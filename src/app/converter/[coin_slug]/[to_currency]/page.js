import CryptoConverterPage from "@components/pages/cryptoConverter/CryptoConverterPage";
import { getCoinDashboardDataFetched, getCoinINRWeekHistoryTableDataFetched } from "@services/coinService";

const CryptoConverter = async ({ params }) => {
    const coinSlug = params?.coin_slug;
    const toCurrency = params?.to_currency;
    const coinDetails = await getCoinDashboardDataFetched({ id: coinSlug });
    const coinWeeklyData = await getCoinINRWeekHistoryTableDataFetched({ id: coinSlug });

    return (
        <CryptoConverterPage
            coinDetails={coinDetails?.data}
            coinWeeklyData={coinWeeklyData?.data}
            currentPrice={coinWeeklyData?.currentPrice}
            coinSlug={coinSlug}
            toCurrency={toCurrency}
        />
    );
};

export default CryptoConverter;