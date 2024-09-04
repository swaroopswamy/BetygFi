import { Box, useColorMode } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ConverterChartSelectionGraph = ({ period }) => {
    const { colorMode } = useColorMode();
    const conversionChartData = useSelector((state) => state?.coinData?.CoinConverterGraphData);

    const series = useMemo(
        () => [
            {
                data: conversionChartData?.data,
            },
        ], [conversionChartData]
    );

    // console.log("🤦‍♀️🤷‍♂️🤔 ~ ConverterChartSelectionGraph ~ conversionChartData:", conversionChartData);
    // console.log("🤦‍♀️🤷‍♂️🤔 ~ ConverterChartSelectionGraph ~ series:", series);
    // const selectionOption = {
    //     chart: {
    //         id: "selection",
    //         toolbar: {
    //             show: false,
    //         },
    //         stacked: false,
    //         type: "line",
    //         brush: {
    //             enabled: true,
    //             target: "coinOverview",
    //             autoScaleYaxis: true,
    //         },
    //         selection: {
    //             enabled: true,
    //             fill: {
    //                 color: "#667AFF4D",
    //                 opacity: 0.3,
    //             },
    //             stroke: {
    //                 width: 1,
    //                 color: ["#544FC5", "#00E272"],
    //             },
    //         },
    //         animations: {
    //             enabled: false,
    //         },
    //     },
    //     stroke: {
    //         show: true,
    //     },
    //     colors: ["#544FC5", "#00E272"],
    //     xaxis: {
    //         type: "datetime",
    //         labels: {
    //             show: false,
    //         },
    //         axisTicks: {
    //             show: false,
    //         },
    //         axisBorder: {
    //             show: false,
    //         },
    //     },
    //     yaxis: {
    //         labels: {
    //             show: false,
    //         },
    //     },
    //     dataLabels: {
    //         enabled: false,
    //     },
    //     legend: {
    //         show: false,
    //     },
    //     tooltip: {
    //         enabled: false,
    //     },
    //     grid: {
    //         borderColor: colorMode === "light" ? "#191919" : "#36363A",
    //         xaxis: {
    //             lines: {
    //                 show: false,
    //             },
    //         },
    //         yaxis: {
    //             lines: {
    //                 show: false,
    //             },
    //         },
    //     },
    // };
    const selectionOptionData = {
        series: [{
            name: 'commits',
            data: []
        }],
        chart: {
            height: 150,
            type: 'line',
            background: '#F6F8FA',
            toolbar: {
                autoSelected: 'selection',
            },
            brush: {
                enabled: true,
                target: 'chartyear'
            },
            selection: {
                enabled: true,
                xaxis: {
                    min: new Date('15 Feb 2016').getTime(),
                    max: new Date('14 Feb 2017').getTime()
                }
            },
        },
        colors: ['#7BD39A'],
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: 0,
            curve: 'monotoneCubic'
        },
        fill: {
            opacity: 1,
            type: 'solid'
        },
        legend: {
            position: 'top',
            horizontalAlign: 'left'
        },
        xaxis: {
            type: 'datetime'
        },
    };
    let [options, setOptions] = useState(selectionOptionData);

    const setSelectionHandler = (value) => {
        let newOptions = {
            ...options,
            chart: {
                ...options.chart,
                selection: {
                    ...options.chart.selection,
                    xaxis: value,
                },
            },
            grid: {
                ...options.grid,
                borderColor: colorMode === "light" ? "#191919" : "#36363A",
            },
        };
        setOptions(newOptions);
    };

    useEffect(() => {
        if (conversionChartData?.isSuccess && conversionChartData?.data != undefined) {
            if (period === "7d") {
                let minDate = new Date(
                    Date.parse(series[0].data.slice(-1)[0][0])
                );
                minDate.setDate(minDate.getDate() - 7);
                minDate.setHours(0, 0, 0, 0);
                setSelectionHandler({
                    min: Date.parse(minDate),
                    max: Date.parse(series[0].data.slice(-1)[0][0]),
                });
            }
            if (period === "14d") {
                let minDate = new Date(
                    Date.parse(series[0].data.slice(-1)[0][0])
                );
                minDate.setDate(minDate.getDate() - 14);
                minDate.setHours(0, 0, 0, 0);
                setSelectionHandler({
                    min: Date.parse(minDate),
                    max: Date.parse(series[0].data.slice(-1)[0][0]),
                });
            }
            if (period === "30d") {
                let minDate = new Date(
                    Date.parse(series[0].data.slice(-1)[0][0])
                );
                minDate.setMonth(minDate.getMonth() - 1);
                minDate.setHours(0, 0, 0, 0);
                setSelectionHandler({
                    min: Date.parse(minDate),
                    max: Date.parse(series[0].data.slice(-1)[0][0]),
                });
            }
            if (period === "1yr") {
                let minDate = new Date(
                    Date.parse(series[0].data.slice(-1)[0][0])
                );
                minDate.setDate(minDate.getDate() - 365);
                minDate.setHours(0, 0, 0, 0);
                setSelectionHandler({
                    min: Date.parse(minDate),
                    max: Date.parse(series[0].data.slice(-1)[0][0]),
                });
            }
            if (period === "Max") {
                setSelectionHandler({
                    min: Date.parse(series[0].data.slice(0)[0][0]),
                    max: Date.parse(series[0].data.slice(-1)[0][0]),
                });
            }
        }
    }, [period, conversionChartData, colorMode]);

    return (
        <>
            <Box
                px={"20px"}
                layerStyle={"flexColumn"}
                justifyContent={"center"}
            >
                <Chart
                    options={options}
                    series={series}
                    type={options.chart.type}
                    height={"100px"}
                    width={"100%"}
                />
            </Box>
        </>
    );
};

export default ConverterChartSelectionGraph;
