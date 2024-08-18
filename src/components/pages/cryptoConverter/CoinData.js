import { Box, Text, useColorMode } from '@chakra-ui/react';
import { renderSVG } from '@util/utility';

const CoinData = () => {
    const { colorMode } = useColorMode();

    const coinDataList = [
        { name: "Daily Volatility", slug: "daily-volatility", info: "", valueAccessor: "" },
        { name: "Beta", slug: "beta", info: "", valueAccessor: "" },
        { name: "Volume", slug: "volume", info: "", valueAccessor: "" },
        { name: "Volume Volatility", slug: "volume-volatility", info: "", valueAccessor: "" },
        { name: "Liquidity Ratio", slug: "liquidity-ratio", info: "", valueAccessor: "" },
        { name: "Liquidity Volatility", slug: "liquidity-volatility", info: "", valueAccessor: "" },
    ];
    return (
        <Box display={"flex"} flexDir={"column"} gap={"0.95rem"}>
            <Box display={"grid"} gridTemplateColumns={"1fr 1fr"} gap={"0.5rem"}>
                {coinDataList.length > 0 && coinDataList.map(coin => (
                    <Box flexDir={"column"} display={"flex"} gap={"0.15rem"} key={coin.slug}>
                        <Box flexDir={"row"} display={"flex"} gap={"0.5rem"} key={coin.slug}>
                            <Text colorMode={colorMode} variant={"converter_betygfi_coin_details_key"}>{coin?.name}</Text>
                            {renderSVG("info")}
                        </Box>
                        <Text colorMode={colorMode} variant={"converter_betygfi_coin_details_value"}>asflns</Text>
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
            >
                <Text colorMode={colorMode} variant={"converter_get_api_key"}>
                    Get This Data By API
                </Text>
            </Box>
        </Box>
    );
};

export default CoinData;
