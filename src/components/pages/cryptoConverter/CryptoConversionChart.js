import React from 'react';

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
import 'react-date-range/dist/styles.css'; // Main css file
import 'react-date-range/dist/theme/default.css'; // Theme css file
import PeriodSelection from "./PeriodSelection";

const CryptoConversionChart = () => {
    // const [state, setState] = useState([
    //     {
    //         startDate: new Date(),
    //         endDate: null,
    //         key: 'selection'
    //     }
    // ]);
    // const [selectedDates, setSelectedDates] = useState([new Date(), new Date()]);

    const annualizedVolatilityChartOptions = {
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

    const periods = ["24h", "7d", "14d", "30d", "1yr", "Max", "comp-calendar"];
    const chartFilters = ["icon-line-chart", "icon-candle-stick-chart"];
    const priceMCaps = ["Price", "MarketCap"];

    const [period, setPeriod] = useState("24h");
    const [priceMCap, setPriceMCap] = useState("Price");
    const [chartFilter, setChartFilter] = useState("icon-line-chart");

    const [chartOptions, setChartOptions] = useState(annualizedVolatilityChartOptions);
    const [chartSeries,] = useState([]);
    const { colorMode } = useColorMode();

    // const dispatch = useDispatch();

    const getTooltipData = () => {
        return {
            enabled: true,
            theme: colorMode === "light" ? "light" : "dark",
        };
    };

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
    }, []);

    // useEffect(() => {
    //     fetchAnnualizedVolatilityHandler();
    // }, [period]);

    // useEffect(() => {
    //     const annualizedVolData = annualizedVolatilityData?.data;
    //     if (annualizedVolData) {
    //         const formatDate = (date) => format(new Date(date), "d MMM yy");
    //         const mappedXAnnualizedVolatilityData = annualizedVolData.map((icm) => formatDate(icm.day));
    //         const mappedYAnnualizedVolatilityData = annualizedVolData.map(icm => {
    //             if (icm.volitility !== undefined && icm.day !== undefined) {
    //                 return +icm.volitility.toFixed(2);
    //             }
    //         }).filter(e => e);
    //         const xaxis = {
    //             categories: mappedXAnnualizedVolatilityData,
    //             tickAmount: 10,
    //             labels: {
    //                 style: {
    //                     colors: colorMode === "light" ? "#757575" : "#A5A5A5",
    //                     fontSize: "12px",
    //                     fontWeight: 300,
    //                     fontFamily: getFontFamilyCustomized(),
    //                 },
    //             },
    //         };
    //         const yaxis = {
    //             formatter: (val) => convertToInternationalCurrencySystem(val),
    //             labels: {
    //                 style: {
    //                     colors: colorMode === "light" ? "#757575" : "#A5A5A5",
    //                     fontSize: "12px",
    //                     fontWeight: 300,
    //                     fontFamily: getFontFamilyCustomized(),
    //                 },
    //             },
    //         };
    //         setChartOptions({ ...chartOptions, xaxis, yaxis });
    //         setChartSeries([{ name: `Annualized Volatility`, data: mappedYAnnualizedVolatilityData }]);
    //     } else {
    //         fetchAnnualizedVolatilityHandler();
    //     }
    // }, [period]);

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
        if (val === period) setPeriod("24h");
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
                renderComponent={null}
                // renderComponent={renderDatePicker}
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
                    px={2}
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

    // const renderDatePicker = () => {
    //     return (
    //         <Box /* display={"none"} */ style={{ border: '1px solid red' }} display={"flex"}>
    //             {/* <DateRangePicker
    //                 appearance="default"
    //                 placeholder="Default"
    //                 style={{ width: 230 }}
    //             /> */}
    //             {/* <RangeDatepicker
    //                 selectedDates={selectedDates}
    //                 onDateChange={setSelectedDates}
    //             >{children}</RangeDatepicker> */}
    //             <DateRange
    //                 editableDateInputs={true}
    //                 onChange={item => setState([item.selection])}
    //                 showSelectionPreview={false}
    //             // moveRangeOnFirstSelection={false}
    //             // ranges={state}
    //             />
    //         </Box>
    //     );
    // };

    return (
        <>
            <Box style={{ border: '1px solid red' }} height={"458px"}
                bgColor={useColorModeValue("#FFFFFF", "#282828")}
            // border={"1px solid #D9D9D9"}
            // boxShadow={"0px 6px 6px 2px rgba(0, 0, 0, 0.15)"}
            // borderRadius={"10px"}
            >
                {/* {
                    annualizedVolatilityData?.isLoading && (
                        <CustomSpinner height="300px" />
                    )
                } */}
                {

                    <React.Fragment>
                        <Box style={{ border: '1px solid red' }}  >

                            <Box zIndex={"99"} display={"flex"} flexDir={"row"} justifyContent={"space-between"}>

                                {/* <Text onClick={() => onZoomCLicked()} float={"left"} cursor={"pointer"} fontSize={"16px"} mr={"9px"}>Zoom</Text> */}
                                <Box display={"flex"} flexDir={"row"} justifyContent={"center"} alignItems={"center"} gap={"0.8rem"}>
                                    {renderPriceMarketCapSelection()}
                                    {renderChartFilterSelection()}
                                </Box>
                                <Box display={"flex"} flexDir={"row"} justifyContent={"center"} alignItems={"center"} gap={"0.5rem"}>
                                    {renderCompareDropDown()}
                                    {renderPeriodSelection()}
                                    {/* {renderDatePicker()} */}
                                </Box>
                            </Box>
                        </Box>
                        <CustomChart
                            options={chartOptions}
                            series={chartSeries}
                            type="line"
                            height={205}
                        />
                    </React.Fragment>

                }
            </Box>
        </>
    );
};

export default CryptoConversionChart;