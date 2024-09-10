import { Box, Text, useColorMode } from '@chakra-ui/react';
import { convertToInternationalCurrencySystem, float2Ratio } from '@util/utility';
import { useRouter } from 'next/navigation';

const CoinData = ({ coinDetails }) => {
    const { colorMode } = useColorMode();
    const router = useRouter();
    const coinDataList = [
        { name: "Daily Volatility", slug: "daily-volatility", info: "", valueAccessor: "daily_vol", valueModifier: "%" },
        { name: "Beta", slug: "beta", info: "", valueAccessor: "beta", valueModifier: "fix-0" },
        { name: "Volume", slug: "volume", info: "", valueAccessor: "volume", valueModifier: "volume" },
        { name: "Volume Volatility", slug: "volume-volatility", info: "", valueAccessor: "volume_vol", valueModifier: "volatility" },
        { name: "Liquidity Ratio", slug: "liquidity-ratio", info: "", valueAccessor: "liquid_ratio", valueModifier: "ratio" },
        { name: "Liquidity Volatility", slug: "liquidity-volatility", info: "", valueAccessor: "liquid_vol", valueModifier: "volatility" },
    ];

    const getValue = (coin) => {
        const value = coinDetails?.[coin?.valueAccessor];
        if (coin?.valueModifier === "%") {
            return (+value * 100)?.toFixed(2) + "%";
        }
        if (coin?.valueModifier === "fix-0") {
            return (+value)?.toFixed(0);
        }
        if (coin?.valueModifier === "volume") {
            return (value?.toFixed(2));
        }
        if (coin?.valueModifier === "volatility") {
            return convertToInternationalCurrencySystem(value);
        }
        if (coin?.valueModifier === "ratio") {
            return float2Ratio(value);
        }
        return value;
    };

    return (
        <Box display={"flex"} flexDir={"column"} gap={"0.95rem"}>
            <Box display={"grid"} gridTemplateColumns={"1fr 1fr"} gap={"0.5rem"}>
                {coinDataList.length > 0 && coinDataList.map(coin => (
                    <Box flexDir={"column"} display={"flex"} gap={"0.35rem"} key={coin.slug}>
                        <Box flexDir={"row"} display={"flex"} gap={"0.5rem"} key={coin.slug}>
                            <Text colorMode={colorMode} variant={"converter_betygfi_coin_details_key"}>{coin?.name}</Text>
                            {/* {renderSVG("info")} */}
                        </Box>
                        <Text colorMode={colorMode} variant={"converter_betygfi_coin_details_value"}>{getValue(coin)}</Text>
                    </Box>
                ))}
            </Box>
            <Box display='flex'
                padding='8px 16px'
                justifyContent='center'
                alignItems='center'
                gap='10px'
                borderRadius='4px'
                _light={{ background: '#202020' }}
                _dark={{ background: '#FFFFFF' }}
                onClick={() => router.push("/campaign")}
            >
                <Text cursor={"pointer"} colorMode={colorMode} variant={"converter_get_api_key"}>
                    Get This Data By API
                </Text>
            </Box>
        </Box>
    );
};

export default CoinData;
