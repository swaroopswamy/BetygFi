import { ChevronDownIcon } from "@chakra-ui/icons";
import { Box, Button, Input, InputGroup, InputRightAddon, Menu, MenuButton, MenuItem, MenuList, Text, useColorMode, useColorModeValue, useDisclosure, useMediaQuery } from "@chakra-ui/react";
import { convertExpToNumber, getCurrencyDetails, renderSVG } from "@util/utility";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CryptoConversionWithChart from "./CryptoConversionWithChart";

const CoinConverterRightBlock = ({ coinDetails, toCurrency, coinAnalyticsData, currentPrice }) => {
    const router = useRouter();
    const { isOpen } = useDisclosure();
    const [coinSearchTerm, setCoinSearchTerm] = useState('');
    const [currencysearchTerm, setCurrencySearchTerm] = useState('');
    const allowedCurrenciesData = useSelector((state) => state?.coinData?.AllowedCurrenciesForConversionData);
    const coinsData = useSelector((state) => state?.coinData?.CoinRankingsTableData);

    const CONVERTER_INPUT_VERSION = 2;
    const { colorMode } = useColorMode();
    const [isMd] = useMediaQuery("(min-width: 768px)");
    const [coinValue, setCoinValue] = useState(1);
    const [currencyValue, setCurrencyValue] = useState(currentPrice);
    const [coinSelected, setCoinSelected] = useState('');
    const [currencySelected, setCurrencySelected] = useState('');
    const [coinList, setCoinList] = useState([]);
    const [currencyList, setCurrencyList] = useState([]);

    const checkIfToShowOneToOneConversion = () => coinSelected && coinSelected !== '' && currencySelected && currencySelected !== '';

    useEffect(() => {
        settingUpCurrencyData();
    }, [allowedCurrenciesData]);

    useEffect(() => {
        settingUpCoinData();
    }, [coinsData]);

    const settingUpCoinData = () => {
        const coinList = coinsData?.data?.data;
        if (coinList?.length > 0) {
            setCoinList(coinList);
            const foundCoin = coinList.some(coin => coin.slug === coinDetails?.slug);
            if (foundCoin) {
                setCoinSelected(coinDetails?.ticker);
            }
        }
    };

    const settingUpCurrencyData = () => {
        const currencyObject = allowedCurrenciesData?.data?.currencies;
        if (currencyObject) {
            const currencyList = [];
            for (const [key, value] of Object.entries(currencyObject)) {
                currencyList.push({ name: key, slug: key.toLowerCase(), description: value });
            }
            setCurrencyList(currencyList);
            const foundCurrency = currencyList.some(currency => currency.slug === toCurrency);
            if (foundCurrency) {
                setCurrencySelected(toCurrency?.toUpperCase());
            }
        }
    };

    const onCurrencyValueChange = (event) => {
        const value = convertExpToNumber(Number(event.target.value));
        if (value < 0) {
            setCurrencyValue(0);
        } else {
            setCurrencyValue(value);
        }
        setCoinValue(value / currentPrice);
    };

    const onCoinValueChange = (event) => {
        const value = convertExpToNumber(Number(event.target.value));
        if (value < 0) {
            setCoinValue(0);
        } else {
            setCoinValue(value);
        }
        setCurrencyValue(value * currentPrice);
    };

    const onCoinItemClick = (slug) => {
        router.push(`/converter/${slug}/${toCurrency?.toLowerCase()}`);
    };

    const onCurrencyItemClick = (slug) => {
        router.push(`/converter/${coinDetails?.slug}/${slug}`);
    };

    const getShowNameConversionMenu = (type, item) => {
        if (type === "coin") {
            return (
                <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"0.5rem"}>
                    <Image src={item.logoUrl} alt={"coin_logo"} width={24} height={24} />
                    <Text variant={"converter_menu_item"}>{item.name} </Text>
                </Box>
            );
        } else {
            return (
                <Text variant={"converter_menu_item"}>{`${item.description} (${item.name})`}</Text>
            );
        }
    };

    const onSearchInputChange = (value, type) => {
        if (type === "coin") {
            setCoinSearchTerm(value);
            if (value === '') {
                settingUpCoinData();
            } else {
                const filteredList = coinList.filter((option) => {
                    return (option?.name?.toLowerCase().includes(value.toLowerCase()) || option?.ticker?.toLowerCase().includes(value.toLowerCase()));
                });
                setCoinList(filteredList);
            }
        } else {
            setCurrencySearchTerm(value);
            if (value === '') {
                settingUpCurrencyData();
            } else {
                const filteredList = currencyList.filter((option) => {
                    return (option?.name?.toLowerCase().includes(value.toLowerCase()) || option?.description?.toLowerCase().includes(value.toLowerCase()));
                });
                setCurrencyList(filteredList);
            }
        }
    };
    const renderCompareDropDown = (type) => {
        const list = type === "coin" ? coinList : currencyList;
        const mobileMenuListStyles = {};
        if (!isMd) {
            mobileMenuListStyles.position = "absolute";
            mobileMenuListStyles.left = "-8.6rem";
            mobileMenuListStyles.top = "-16.3rem";
        }
        return (
            <Menu variant={"converterMenu"} onClose={() => { settingUpCoinData(); settingUpCurrencyData(); }}>
                <MenuButton as={Button}
                    transition='all 0.2s'
                    isActive={isOpen}
                    rightIcon={<ChevronDownIcon />}>
                    {type === "coin" ? coinSelected : currencySelected}
                </MenuButton>
                <MenuList pt={"0px"} {...mobileMenuListStyles}>
                    <Input colorScheme={"#4682B4"} borderRadius={"2px"} size='md'
                        placeholder={type === "coin" ? "Search Coin" : "Search Currency"}
                        value={type === "coin" ? coinSearchTerm : currencysearchTerm}
                        onChange={(e) => onSearchInputChange(e.target.value, type)}
                    />
                    <Box overflowY={"scroll"} maxHeight={"10rem"} >
                        {
                            list?.length > 0 && list.map(item => <MenuItem onClick={() => type === "coin" ? onCoinItemClick(item?.slug) : onCurrencyItemClick(item?.slug)} key={item.slug}>{getShowNameConversionMenu(type, item)}</MenuItem>)
                        }
                    </Box>
                </MenuList>
            </Menu>
        );
    };

    const renderInput = (inputValue, showValue, type) => {
        if (CONVERTER_INPUT_VERSION === 1) {
            return (
                <InputGroup colorScheme={"#4682B4"} borderRadius={"2px"} size='md'>
                    <Input type="number" value={inputValue} onChange={(e) => {
                        type === "coin" ? onCoinValueChange(e) : onCurrencyValueChange(e);
                    }} min={0} />
                    <InputRightAddon>
                        <Text colorMode={colorMode} variant={"converter_calc_desc"} fontWeight={600}>
                            {showValue}
                        </Text>
                    </InputRightAddon>
                </InputGroup>
            );
        } else if (CONVERTER_INPUT_VERSION === 2) {
            return (
                <InputGroup border='1px solid #4682B4' background='#ECF2F7' variant="custom" colorScheme={"#4682B4"} borderRadius={"4px"} size='md'>
                    <Input background='#ECF2F7' type="number" value={inputValue} onChange={(e) => {
                        type === "coin" ? onCoinValueChange(e) : onCurrencyValueChange(e);
                    }} min={0} />
                    <InputRightAddon>
                        {renderCompareDropDown(type)}
                    </InputRightAddon>
                </InputGroup>
            );
        }
    };

    return (
        <Box borderRadius={"3px"} gap={"1.25rem"} flexDir={"column"} display={"flex"} width={{ base: "100%", md: "74%" }}>
            <Box p={"1.25rem"} display={"flex"} gap={"1rem"} bg={useColorModeValue("#FFFFFF", "#191919")} flexDir={"column"}>
                <Box display={"flex"} gap={"0.5rem"} flexDir={"column"}>

                    <Text colorMode={colorMode} variant={"converter_heading"} lineHeight={"22px"}>Convert {coinDetails?.name} to {getCurrencyDetails(toCurrency, 'description')} ({coinDetails?.ticker} to {toCurrency?.toUpperCase()})</Text>
                    <Text colorMode={colorMode} variant={"converter_calc_desc"}>The price of converting 1 {coinDetails?.name} ({coinDetails?.ticker}) to {toCurrency?.toUpperCase()} is {getCurrencyDetails(toCurrency, 'symbol')} {currentPrice?.toLocaleString(getCurrencyDetails(toCurrency, 'locale'))} today.</Text>
                </Box>
                <Box borderRadius='2px' background='rgba(70, 130, 180, 0.10)'>
                    <Box p={"1.25rem"} gap={"0.5rem"} flexDir={"column"} display={"flex"}>

                        <Box w={"100%"} display={"flex"} justifyContent={"center"} alignItems={"center"} gap={{ base: "1rem", md: "2rem" }} flexDir={{ base: "column", md: "row" }}>
                            {renderInput(coinValue, coinDetails?.ticker, "coin")}
                            {
                                isMd ?
                                    <Box mx={"2rem"}>
                                        {renderSVG("right-arrow", colorMode)}
                                    </Box>
                                    :
                                    <Box transform={`rotate(90deg)`}>
                                        {renderSVG("right-arrow", colorMode)}
                                    </Box>
                            }
                            {renderInput(currencyValue, toCurrency?.toUpperCase(), "currency")}
                        </Box>
                        {
                            checkIfToShowOneToOneConversion() &&
                            <Box display={"flex"} justifyContent={"space-between"}   >
                                <Box display={"flex"} justifyContent={"flex-start"}>
                                    <Text colorMode={colorMode} textAlign='start' variant={"cookies_footer"}>
                                        1 {coinDetails?.ticker} = {getCurrencyDetails(toCurrency, 'symbol')} {currentPrice?.toLocaleString(getCurrencyDetails(toCurrency, 'locale'))}
                                    </Text>
                                </Box>
                                <Box display={"flex"} justifyContent={"flex-end"}>
                                    <Text colorMode={colorMode} textAlign='end' variant={"cookies_footer"}>
                                        1 {toCurrency?.toUpperCase()} = {convertExpToNumber(Number(1 / currentPrice))} {coinDetails?.ticker}
                                    </Text>
                                </Box>
                            </Box>
                        }
                    </Box>
                </Box>
            </Box>

            <Box bg={useColorModeValue("#FFFFFF", "#191919")}>
                <CryptoConversionWithChart
                    coinDetails={coinDetails}
                    coinAnalyticsData={coinAnalyticsData}
                    toCurrency={toCurrency}
                    currentPrice={currentPrice}
                />
            </Box>
        </Box>
    );
};

export default CoinConverterRightBlock;
