
import CustomChart from "@/components/graph";
// import CustomSpinner from "@/components/spinner";
// import TopCoinToolBar from "@/components/topCoinToolbar";
import { ChevronDownIcon } from '@chakra-ui/icons';
import {
    Box,
    Button,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    useColorMode,
    useColorModeValue
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
import { fetchConversionCoinChartGraphData } from '@redux/coin_data/dataSlice';
import { filterTimestampsByPeriod } from '@util/utility';
import { RangeDatepicker } from "chakra-dayzed-datepicker";
import { format } from 'date-fns';
import 'react-date-range/dist/styles.css'; // Main css file
import 'react-date-range/dist/theme/default.css'; // Theme css file
import { useDispatch, useSelector } from 'react-redux';
import PeriodSelection from "./PeriodSelection";

const CryptoConversionChart = ({ coinDetails }) => {
    const [selectedDates, setSelectedDates] = useState([new Date(), new Date()]);

    // const [state, setState] = useState([
    //     {
    //         startDate: new Date(),
    //         endDate: null,
    //         key: 'selection'
    //     }
    // ]);
    // const [selectedDates, setSelectedDates] = useState([new Date(), new Date()]);

    const coinConversionChartOptions = {
        chart: {
            toolbar: {
                show: false,
            },
            type: 'area',
            stacked: false,
            height: 350,
            zoom: {
                type: 'x',
                enabled: true,
                autoScaleYaxis: true
            }
        },
        dataLabels: {
            enabled: false
        },
        markers: {
            size: 0,
        },
        stroke: {
            curve: 'straight',
            width: 1
        },
        toolbar: {
            show: false
        },
        tooltip: {
            shared: false,
        }
    };

    const periods = ["7d", "14d", "30d", "1yr", "Max", "comp-calendar"];
    const chartFilters = ["icon-line-chart", "icon-candle-stick-chart"];
    const priceMCaps = ["Price", "MarketCap"];

    const [period, setPeriod] = useState("7d");
    const [priceMCap, setPriceMCap] = useState("Price");
    const [chartFilter, setChartFilter] = useState("icon-line-chart");

    const [chartOptions, setChartOptions] = useState(coinConversionChartOptions);
    const [chartSeries, setChartSeries] = useState([]);
    const { colorMode } = useColorMode();
    const dispatch = useDispatch();

    const conversionChartData = useSelector((state) => state?.coinData?.CoinConverterGraphData);

    useEffect(() => {
        const grid = {
            row: {
                //colors: [colorMode === "light" ? "#FFFFFF" : "#282828"],
                opacity: 0.5,
            },
        };
        const tooltip = getTooltipData();
        const chartOptionsDup = { ...chartOptions, grid, tooltip };
        setChartOptions(chartOptionsDup);

        setTimeout(() => {
            const datePickerElem = document.getElementById("popover-trigger-converter-range-date");
            datePickerElem.innerHTML = "";
            datePickerElem.style.height = "2rem";
        }, 1500);
        // var innerDiv = document.createElement('svg');



        // <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M2.08203 2.29175C2.08203 2.12599 2.01618 1.96702 1.89897 1.84981C1.78176 1.7326 1.62279 1.66675 1.45703 1.66675C1.29127 1.66675 1.1323 1.7326 1.01509 1.84981C0.897879 1.96702 0.832031 2.12599 0.832031 2.29175V17.7084C0.832031 18.0534 1.11203 18.3334 1.45703 18.3334H16.6654C16.8311 18.3334 16.9901 18.2676 17.1073 18.1504C17.2245 18.0331 17.2904 17.8742 17.2904 17.7084C17.2904 17.5427 17.2245 17.3837 17.1073 17.2665C16.9901 17.1493 16.8311 17.0834 16.6654 17.0834H2.08203V2.29175Z" fill="white"></path><path d="M18.5667 6.48333C18.6771 6.36485 18.7372 6.20814 18.7343 6.04623C18.7315 5.88431 18.6659 5.72982 18.5514 5.61531C18.4368 5.5008 18.2824 5.43521 18.1204 5.43235C17.9585 5.42949 17.8018 5.48959 17.6833 5.59999L12.9167 10.3667L9.81667 7.26666C9.69948 7.14962 9.54063 7.08388 9.375 7.08388C9.20938 7.08388 9.05052 7.14962 8.93334 7.26666L3.93334 12.2667C3.87193 12.3239 3.82268 12.3929 3.78852 12.4695C3.75436 12.5462 3.73599 12.629 3.73451 12.7129C3.73303 12.7968 3.74847 12.8802 3.7799 12.958C3.81134 13.0358 3.85812 13.1065 3.91747 13.1659C3.97682 13.2252 4.04752 13.272 4.12534 13.3034C4.20316 13.3349 4.28652 13.3503 4.37044 13.3488C4.45436 13.3473 4.53712 13.329 4.61378 13.2948C4.69045 13.2607 4.75945 13.2114 4.81667 13.15L9.375 8.59166L12.475 11.6917C12.5922 11.8087 12.751 11.8744 12.9167 11.8744C13.0823 11.8744 13.2411 11.8087 13.3583 11.6917L18.5667 6.48333Z" fill="white"></path></svg>

        // innerDiv.id = 'converter-calendar';
        // innerDiv.className = 'csdonverter-calendar';
        // innerDiv.dangerouslySetInnerHTML = { __html: 'First · Second' };
        // datePickerElem.appendChild(innerDiv);

    }, []);

    useEffect(() => {
        dispatch(fetchConversionCoinChartGraphData({ coinSlug: coinDetails?.slug, filter: priceMCap === "Price" ? "price" : "marketCap" }));
    }, [priceMCap]);

    const getTooltipData = () => {
        return {
            enabled: true,
            theme: colorMode === "light" ? "light" : "dark",
        };
    };

    useEffect(() => {
        const conversionChartGraphData = filterTimestampsByPeriod(conversionChartData?.data, period);
        if (conversionChartGraphData) {
            const formatDate = (date) => format(new Date(date), "d MMM yy");
            const mappedXConversionChartData = conversionChartGraphData.map((icm) => formatDate(icm.timestamp));
            const mappedYConversionChartData = conversionChartGraphData.map(icm => +icm.value.toFixed(2));
            const xaxis = {
                categories: mappedXConversionChartData,
                tickAmount: 10,
                labels: {
                    style: {
                        colors: colorMode === "light" ? "#757575" : "#A5A5A5",
                        fontSize: "12px",
                        fontWeight: 300,
                        // fontFamily: getFontFamilyCustomized(),
                    },
                },
            };
            const yaxis = {
                formatter: (val) => (val),
                labels: {
                    style: {
                        colors: colorMode === "light" ? "#757575" : "#A5A5A5",
                        fontSize: "12px",
                        fontWeight: 300,
                        // fontFamily: getFontFamilyCustomized(),
                    },
                },
            };
            setChartOptions({ ...chartOptions, xaxis, yaxis });
            setChartSeries([{ name: `hello`, data: mappedYConversionChartData }]);
        } else {
            // fetchAnnualizedVolatilityHandler();
        }
    }, [conversionChartData, period]);

    useEffect(() => {
        const grid = {
            row: {
                //colors: [colorMode === "light" ? "#FFFFFF" : "#282828"],
                opacity: 0.5,
            },
        };
        const tooltip = getTooltipData();
        setChartOptions({ ...chartOptions, grid, tooltip });
    }, [colorMode]);

    const periodSelectionHandler = (val) => {
        if (val === period) setPeriod("7d");
        else setPeriod(val);
    };

    const priceMCapSelectionHandler = (val) => {
        if (val === priceMCap) setPriceMCap("Price");
        else setPriceMCap(val);
    };

    const chartFilterSelectionHandler = (val) => {
        if (val === chartFilter) setChartFilter("icon-line-chart");
        else setChartFilter(val);
    };

    const renderPeriodSelection = () => {
        return (
            <PeriodSelection
                periods={periods}
                currPeriod={period}
                renderComponent={renderDatePicker}
                periodSelectionHandler={periodSelectionHandler}
            />
        );
    };

    const renderChartFilterSelection = () => {
        return (
            <PeriodSelection
                periods={chartFilters}
                currPeriod={chartFilter}
                renderComponent={null}
                periodSelectionHandler={chartFilterSelectionHandler}
            />
        );
    };

    const renderCompareDropDown = () => {
        return (
            <Menu >
                <MenuButton as={Button}
                    px={{ base: 0, md: 2 }}
                    py={2}
                    transition='all 0.2s'
                    borderRadius='md'
                    borderWidth='1px'
                    rightIcon={<ChevronDownIcon />}>
                    Compare
                </MenuButton>
                <MenuList>
                    <MenuItem>24h</MenuItem>
                    <MenuItem>24h</MenuItem>
                    <MenuItem>24h</MenuItem>
                    <MenuItem>24h</MenuItem>
                </MenuList>
            </Menu>
        );
    };

    const renderPriceMarketCapSelection = () => {
        return (
            <PeriodSelection
                periods={priceMCaps}
                currPeriod={priceMCap}
                renderComponent={null}
                periodSelectionHandler={priceMCapSelectionHandler}
            />
        );
    };

    const renderDatePicker = () => {
        return (
            <Box /* display={"none"} */ display={"flex"}>
                {/* <DateRangePicker
                    appearance="default"
                    placeholder="Default"
                    style={{ width: 230 }}
                /> */}
                {/* <RangeDatepicker
                    selectedDates={selectedDates}
                    onDateChange={setSelectedDates}
                >{children}</RangeDatepicker> */}
                {/* <DateRange
                    editableDateInputs={true}
                    onChange={item => setState([item.selection])}
                    showSelectionPreview={false}
                // moveRangeOnFirstSelection={false}
                // ranges={state}
                /> */}
                <RangeDatepicker
                    id="converter-range-date"
                    selectedDates={selectedDates}
                    onDateChange={setSelectedDates}
                />
            </Box>
        );
    };

    return (
        <>
            <Box
                height={"458px"}
                bgColor={useColorModeValue("#FFFFFF", "#282828")}
            >
                <Box>
                    <Box zIndex={"99"} display={"flex"} gap={{ base: "0.4rem", md: "1rem" }} flexDir={{ base: "column", md: "row" }} justifyContent={"space-between"}>

                        {/* <Text onClick={() => onZoomCLicked()} float={"left"} cursor={"pointer"} fontSize={"16px"} mr={"9px"}>Zoom</Text> */}
                        <Box display={"flex"} flexDir={"row"} justifyContent={{ base: "space-between", md: "center" }} alignItems={"center"} gap={"0.8rem"}>
                            {renderPriceMarketCapSelection()}
                            {renderChartFilterSelection()}
                        </Box>
                        <Box display={"flex"} flexDir={"row"} justifyContent={{ base: "space-between", md: "center" }} alignItems={"center"} gap={"0.5rem"}>
                            {renderCompareDropDown()}
                            {renderPeriodSelection()}
                        </Box>
                    </Box>
                </Box>
                <CustomChart
                    options={chartOptions}
                    series={chartSeries}
                    type="line"
                    height={405}
                />
            </Box>
        </>
    );
};

export default CryptoConversionChart;