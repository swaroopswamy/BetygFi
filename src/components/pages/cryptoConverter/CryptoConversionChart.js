
import CustomChart from "@/components/graph";
// import CustomSpinner from "@/components/spinner";
// import TopCoinToolBar from "@/components/topCoinToolbar";
import {
    Box,
    useColorMode,
    useColorModeValue,
    useMediaQuery
} from "@chakra-ui/react";
import { fetchConversionCoinChartGraphData } from '@redux/coin_data/dataSlice';
import { convertToInternationalCurrencySystem, renderSVG } from "@util/utility";
// import { RangeDatepicker } from "chakra-dayzed-datepicker";
import { format } from 'date-fns';
import { useEffect, useState } from "react";
import 'react-date-range/dist/styles.css'; // Main css file
import 'react-date-range/dist/theme/default.css'; // Theme css file
import { useDispatch, useSelector } from 'react-redux';
import PeriodSelection from "./PeriodSelection";

const CryptoConversionChart = ({ coinDetails, ToCaptureRef }) => {
    // const [selectedDates, setSelectedDates] = useState([new Date(), new Date()]);
    const [isMd] = useMediaQuery("(min-width: 768px)");
    const coinConversionLineChartOptions = {
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

    const coinConversionCandleStickChartOptions = {
        chart: {
            toolbar: {
                show: false,
            },
            type: 'candlestick',
            // stacked: false,
            height: 350,
            zoom: {
                type: 'x',
                enabled: true,
                autoScaleYaxis: true
            }
        },
        // dataLabels: {
        //     enabled: false
        // },
        // markers: {
        //     size: 0,
        // },
        // // stroke: {
        // //     curve: 'straight',
        // //     width: 1
        // // },
        // toolbar: {
        //     show: false
        // },
        tooltip: {
            enabled: true,
        },
        annotations: {
            xaxis: [
                {
                    x: 'Oct 06 14:00',
                    borderColor: '#00E396',
                    label: {
                        borderColor: '#00E396',
                        style: {
                            fontSize: '12px',
                            color: '#fff',
                            background: '#00E396'
                        },
                        orientation: 'horizontal',
                        offsetY: 7,
                        text: 'Annotation Test'
                    }
                }
            ]
        },
    };

    const periods = ["24h", "7d", "14d", "30d", "1yr", "Max"/* , "comp-calendar" */];
    const chartFilters_ = ["icon-line-chart", "icon-candle-stick-chart"];
    const priceMCaps_ = ["Price", "MarketCap"];

    const [period, setPeriod] = useState("24h");
    const [priceMCaps,] = useState(priceMCaps_);
    const [priceMCap, setPriceMCap] = useState("Price");
    const [chartFilters, setChartFilters] = useState(chartFilters_);
    const [chartFilter, setChartFilter] = useState("icon-line-chart");

    const [chartOptions, setChartOptions] = useState(coinConversionLineChartOptions);
    const [chartSeries, setChartSeries] = useState([]);
    const { colorMode } = useColorMode();
    const dispatch = useDispatch();

    const conversionChartData = useSelector((state) => state?.coinData?.CoinConverterGraphData);

    // const checkIfRangeDateIsValid = (selectedDates) => {
    //     if (selectedDates[0].getTime() === selectedDates[1].getTime()) {
    //         return false;
    //     }
    //     return true;
    // };
    // useEffect(() => {
    //     if (selectedDates.length > 1) {
    //         const isDateValid = checkIfRangeDateIsValid(selectedDates);
    //         if (isDateValid) {

    //         }
    //     }
    // }, [selectedDates]);

    useEffect(() => {
        const grid = {
            row: {
                opacity: 0.5,
            },
        };
        const tooltip = getTooltipData();
        const chartOptionsDup = { ...chartOptions, grid, tooltip };
        setChartOptions(chartOptionsDup);

        setTimeout(() => {
            const datePickerElem = document.getElementById("popover-trigger-converter-range-date");
            if (datePickerElem) {
                datePickerElem.innerHTML = "";
                datePickerElem.style.height = "2rem";
            }
        }, 500);
    }, []);

    useEffect(() => {
        dispatch(fetchConversionCoinChartGraphData({ coinSlug: coinDetails?.slug, filter: priceMCap === "Price" ? "price" : "marketCap", interval: period }));
    }, [priceMCap, period]);

    useEffect(() => {
        if (chartFilter === "icon-line-chart") {
            setChartOptions(coinConversionLineChartOptions);
        } else {
            setChartOptions(coinConversionCandleStickChartOptions);
        }
    }, [chartFilter]);

    const getTooltipData = () => {
        return {
            enabled: true,
            theme: colorMode === "light" ? "light" : "dark",
        };
    };

    useEffect(() => {
        const conversionChartGraphData = conversionChartData?.data;
        if (conversionChartGraphData) {
            const formatDate = (date) => {
                if (period === "24h") {
                    return format(new Date(date), "d MMM yy HH:mm");
                } else {
                    return format(new Date(date), "d MMM");
                }
                // if (chartFilter === "icon-line-chart") {
                //     return format(new Date(date), "d MMM HH:mm");
                // } else {
                //     return format(new Date(date), "d MMM yy HH:mm a");
                // }
            };

            if (chartFilter === "icon-line-chart") {
                const mappedXConversionChartData = conversionChartGraphData.map((icm) => formatDate(icm.timestamp));

                const mappedYConversionChartData = conversionChartGraphData.map(icm => {
                    if (priceMCap === "Price") {
                        icm = +icm.close.toFixed(2);
                    } else {
                        if (icm.marketCap) {
                            icm = +icm.marketCap.toFixed(2);
                        } else {
                            icm = +icm.close.toFixed(2);
                        }
                    }
                    return icm;
                });

                const xaxisLine = {
                    categories: mappedXConversionChartData,
                    tickAmount: 10,
                    labels: {
                        style: {
                            colors: colorMode === "light" ? "#757575" : "#A5A5A5",
                            fontSize: "12px",
                            fontWeight: 300,
                        },
                    },
                };
                const yaxisLine = {
                    tooltip: {
                        enabled: true,
                    },
                    labels: {
                        formatter: (val) => convertToInternationalCurrencySystem(val),
                        style: {
                            colors: colorMode === "light" ? "#757575" : "#A5A5A5",
                            fontSize: "12px",
                            fontWeight: 300,
                        },
                    },
                };

                setChartOptions({ ...chartOptions, xaxis: xaxisLine, yaxis: yaxisLine });
                setChartSeries([{ name: `${coinDetails?.name}`, data: mappedYConversionChartData }]);
            } else {
                const mappedCandleStickConversionChartData = conversionChartGraphData.map(icm => {
                    if (priceMCap === "Price") {
                        const open = +icm.open.toFixed(2);
                        const high = +icm.high.toFixed(2);
                        const low = +icm.low.toFixed(2);
                        const close = +icm.close.toFixed(2);
                        const list = [open, high, low, close];
                        return {
                            x: formatDate(icm.timestamp),
                            y: list,
                        };
                    }
                });

                const xaxisCandleStick = {
                    tickAmount: 10,
                    type: 'category',
                    labels: {
                        style: {
                            colors: colorMode === "light" ? "#757575" : "#A5A5A5",
                            fontSize: "12px",
                            fontWeight: 300,
                        },
                    },
                };

                const yaxisCandleStick = {
                    tooltip: {
                        enabled: true,
                    },
                    labels: {
                        formatter: (val) => convertToInternationalCurrencySystem(val),
                        style: {
                            colors: colorMode === "light" ? "#757575" : "#A5A5A5",
                            fontSize: "12px",
                            fontWeight: 300,
                        },
                    },
                };

                setChartOptions({ ...chartOptions, xaxis: xaxisCandleStick, yaxis: yaxisCandleStick });
                setChartSeries([{ name: `${coinDetails?.name}`, data: mappedCandleStickConversionChartData }]);
            }
        }
    }, [conversionChartData, chartFilter]);

    useEffect(() => {
        const grid = {
            row: {
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
        if (val === priceMCap) {
            setPriceMCap("Price");
        } else {
            if (val === "MarketCap") {
                setChartFilter("icon-line-chart");
                setPriceMCap(val);
            } else {
                setPriceMCap(val);
            }
        }
    };

    useEffect(() => {
        if (priceMCap === "MarketCap") {
            setChartFilters(["icon-line-chart"]);
        } else {
            setChartFilters(["icon-line-chart", "icon-candle-stick-chart"]);
        }
    }, [priceMCap]);

    useEffect(() => {
        if (chartFilter === "icon-candle-stick-chart") {
            setPriceMCap("Price");
            // setPriceMCaps(["Price"]);
            // } else {
            //     setPriceMCaps(["Price", "MarketCap"]);
        }
    }, [chartFilter]);

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

    // const renderCompareDropDown = () => {
    //     return (
    //         <Menu >
    //             <MenuButton as={Button}
    //                 px={{ base: 0, md: 2 }}
    //                 py={2}
    //                 transition='all 0.2s'
    //                 borderRadius='md'
    //                 borderWidth='1px'
    //                 rightIcon={<ChevronDownIcon />}>
    //                 Compare
    //             </MenuButton>
    //             <MenuList>
    //                 <MenuItem>24h</MenuItem>
    //                 <MenuItem>24h</MenuItem>
    //                 <MenuItem>24h</MenuItem>
    //                 <MenuItem>24h</MenuItem>
    //             </MenuList>
    //         </Menu>
    //     );
    // };

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
    //         <Box display={"flex"}>
    //             <RangeDatepicker
    //                 id="converter-range-date"
    //                 selectedDates={selectedDates}
    //                 onDateChange={setSelectedDates}
    //             />
    //         </Box>
    //     );
    // };

    return (
        <>
            <Box
                height={"458px"}
                bgColor={useColorModeValue("#FFFFFF", "#282828")}
            >
                <Box>
                    <Box zIndex={"99"} display={"flex"} gap={{ base: "0.4rem", md: "1rem" }} flexDir={{ base: "column", md: "row" }} justifyContent={"space-between"}>
                        <Box display={"flex"} flexDir={"row"} justifyContent={{ base: "space-between", md: "center" }} alignItems={"center"} gap={"0.8rem"}>
                            {renderPriceMarketCapSelection()}
                            {renderChartFilterSelection()}
                        </Box>
                        <Box display={"flex"} flexDir={"row"} justifyContent={{ base: "space-between", md: "center" }} alignItems={"center"} gap={"0.5rem"}>
                            {/* {renderCompareDropDown()} */}
                            {renderPeriodSelection()}
                        </Box>
                    </Box>
                </Box>

                <Box ref={ToCaptureRef} id={"conversion-chart"} mt={"12px"} pos={"relative"}>
                    <CustomChart
                        options={chartOptions}
                        series={chartSeries}
                        type={chartFilter === "icon-line-chart" ? "line" : "candlestick"}
                        height={405}
                    />

                    {/* <Box style={{ border: '1px solid red' }} w={"100%"}>
                        <ConverterChartSelectionGraph period={period} />
                    </Box> */}

                    {
                        isMd ?
                            <Box pos={"absolute"} top={"58%"} left={"91%"}>
                                {renderSVG("betygfi-logo")}
                            </Box>
                            :
                            <Box pos={"absolute"} top={"62%"} left={"72%"}>
                                {renderSVG("betygfi-logo")}
                            </Box>
                    }
                </Box>
            </Box>
        </>
    );
};



export default CryptoConversionChart;