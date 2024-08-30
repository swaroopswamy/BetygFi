
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
import { renderSVG } from "@util/utility";
import { RangeDatepicker } from "chakra-dayzed-datepicker";
import { format } from 'date-fns';
import { useEffect, useState } from "react";
import 'react-date-range/dist/styles.css'; // Main css file
import 'react-date-range/dist/theme/default.css'; // Theme css file
import { useDispatch, useSelector } from 'react-redux';
import PeriodSelection from "./PeriodSelection";
// const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const CryptoConversionChart = ({ coinDetails }) => {
    const [selectedDates, setSelectedDates] = useState([new Date(), new Date()]);
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

    const periods = ["24h", "7d", "14d", "30d", "1yr", "Max", "comp-calendar"];
    const chartFilters_ = ["icon-line-chart", "icon-candle-stick-chart"];
    const priceMCaps_ = ["Price", "MarketCap"];

    const [period, setPeriod] = useState("24h");
    const [priceMCaps, setPriceMCaps] = useState(priceMCaps_);
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
            datePickerElem.innerHTML = "";
            datePickerElem.style.height = "2rem";
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
            const formatDate = (date) => format(new Date(date),
                chartFilter === "icon-line-chart" ? "d MMM HH:mm" : "d MMM yy hh:mm a");

            if (chartFilter === "icon-line-chart") {
                const mappedXConversionChartData = conversionChartGraphData.map((icm) => formatDate(icm.timestamp));

                const mappedYConversionChartData = conversionChartGraphData.map(icm => {
                    if (priceMCap === "Price") {
                        icm = +icm.close.toFixed(2);
                    } else {
                        icm = +icm.marketCap.toFixed(2);
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
                    formatter: (val) => (+val),
                    labels: {
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
                        formatter: val => formatDate(val)
                    }
                };
                const yaxisCandleStick = {
                    tooltip: {
                        enabled: true,
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
            setPriceMCap(val);
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
            setPriceMCaps(["Price"]);
        } else {
            setPriceMCaps(["Price", "MarketCap"]);
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

    const renderDatePicker = () => {
        return (
            <Box display={"flex"}>
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

                <Box mt={"12px"} pos={"relative"}>
                    <CustomChart
                        options={chartOptions}
                        series={chartSeries}
                        type={chartFilter === "icon-line-chart" ? "line" : "candlestick"}
                        height={405}
                    />

                    {/* <Box display={{ base: "none", lg: "block" }} w={"100%"}>
                        <SelectorGraph period={period} colorMode={colorMode} />
                    </Box> */}

                </Box>
                {
                    isMd ?
                        <Box pos={"absolute"} top={"16%"} left={"91%"}>
                            {renderSVG("betygfi-logo")}
                        </Box>
                        :
                        <Box pos={"absolute"} top={"32%"} left={"68%"}>
                            {renderSVG("betygfi-logo")}
                        </Box>
                }
            </Box>
        </>
    );
};

// const SelectorGraph = ({ period, colorMode }) => {
//     const CoinPriceData = useSelector(
//         (state) => state?.coinData?.CoinPriceData
//     );

//     const series = useMemo(
//         () => [
//             {
//                 data: CoinPriceData?.data?.data,
//             },
//         ],
//         [CoinPriceData]
//     );

//     let [options, setOptions] = useState({
//         chart: {
//             id: "selection",
//             toolbar: {
//                 show: false,
//             },
//             stacked: false,
//             type: "line",
//             brush: {
//                 enabled: true,
//                 target: "coinOverview",
//                 autoScaleYaxis: true,
//             },
//             selection: {
//                 enabled: true,
//                 fill: {
//                     color: "#667AFF4D",
//                     opacity: 0.3,
//                 },
//                 stroke: {
//                     width: 1,
//                     color: ["#544FC5", "#00E272"],
//                 },
//             },
//             animations: {
//                 enabled: false,
//             },
//         },
//         stroke: {
//             show: true,
//         },
//         colors: ["#544FC5", "#00E272"],
//         xaxis: {
//             type: "datetime",
//             labels: {
//                 show: false,
//             },
//             axisTicks: {
//                 show: false,
//             },
//             axisBorder: {
//                 show: false,
//             },
//         },
//         yaxis: {
//             labels: {
//                 show: false,
//             },
//         },
//         dataLabels: {
//             enabled: false,
//         },
//         legend: {
//             show: false,
//         },
//         tooltip: {
//             enabled: false,
//         },
//         grid: {
//             borderColor: colorMode === "light" ? "#191919" : "#36363A",
//             xaxis: {
//                 lines: {
//                     show: false,
//                 },
//             },
//             yaxis: {
//                 lines: {
//                     show: false,
//                 },
//             },
//         },
//     });

//     const setSelectionHandler = (value) => {
//         let newOptions = {
//             ...options,
//             chart: {
//                 ...options.chart,
//                 selection: {
//                     ...options.chart.selection,
//                     xaxis: value,
//                 },
//             },
//             grid: {
//                 ...options.grid,
//                 borderColor: colorMode === "light" ? "#191919" : "#36363A",
//             },
//         };
//         setOptions(newOptions);
//     };

//     useEffect(() => {
//         if (CoinPriceData?.isSuccess && CoinPriceData?.data != undefined) {
//             if (period === "7d") {
//                 let minDate = new Date(
//                     Date.parse(series[0].data.slice(-1)[0][0])
//                 );
//                 minDate.setDate(minDate.getDate() - 7);
//                 minDate.setHours(0, 0, 0, 0);
//                 setSelectionHandler({
//                     min: Date.parse(minDate),
//                     max: Date.parse(series[0].data.slice(-1)[0][0]),
//                 });
//             }
//             if (period === "14d") {
//                 let minDate = new Date(
//                     Date.parse(series[0].data.slice(-1)[0][0])
//                 );
//                 minDate.setDate(minDate.getDate() - 14);
//                 minDate.setHours(0, 0, 0, 0);
//                 setSelectionHandler({
//                     min: Date.parse(minDate),
//                     max: Date.parse(series[0].data.slice(-1)[0][0]),
//                 });
//             }
//             if (period === "30d") {
//                 let minDate = new Date(
//                     Date.parse(series[0].data.slice(-1)[0][0])
//                 );
//                 minDate.setMonth(minDate.getMonth() - 1);
//                 minDate.setHours(0, 0, 0, 0);
//                 setSelectionHandler({
//                     min: Date.parse(minDate),
//                     max: Date.parse(series[0].data.slice(-1)[0][0]),
//                 });
//             }
//             if (period === "1yr") {
//                 let minDate = new Date(
//                     Date.parse(series[0].data.slice(-1)[0][0])
//                 );
//                 minDate.setDate(minDate.getDate() - 365);
//                 minDate.setHours(0, 0, 0, 0);
//                 setSelectionHandler({
//                     min: Date.parse(minDate),
//                     max: Date.parse(series[0].data.slice(-1)[0][0]),
//                 });
//             }
//             if (period === "Max") {
//                 setSelectionHandler({
//                     min: Date.parse(series[0].data.slice(0)[0][0]),
//                     max: Date.parse(series[0].data.slice(-1)[0][0]),
//                 });
//             }
//         }
//     }, [period, CoinPriceData, colorMode]);

//     return (
//         <>
//             <Box
//                 px={"20px"}
//                 layerStyle={"flexColumn"}
//                 justifyContent={"center"}
//             >
//                 <Chart
//                     options={options}
//                     series={series}
//                     type={options.chart.type}
//                     height={"100px"}
//                     width={"100%"}
//                 />
//             </Box>
//         </>
//     );
// };

export default CryptoConversionChart;