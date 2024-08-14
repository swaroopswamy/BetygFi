import CryptoConverterPage from "@components/pages/cryptoConverter/CryptoConverterPage";

const CryptoConverter = async ({ params }) => {
    const fromCrypto = params?.fromCrypto;
    const toCurrency = params?.toCurrency;
    return (
        <CryptoConverterPage
            fromCrypto={fromCrypto}
            toCurrency={toCurrency}
        />
    );
};

export default CryptoConverter;