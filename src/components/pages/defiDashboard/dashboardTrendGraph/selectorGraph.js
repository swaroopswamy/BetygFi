import { Box } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React, { useEffect, useMemo, } from "react";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const SelectorGraph = ({ defiGraphData, options }) => {

    const series = useMemo(
        () => [
            {
                data: defiGraphData?.data?.data,
            },
        ],
        [defiGraphData]
    );

    // let [options, setOptions] = useState({
    //     chart: {
    //         id: "selection",
    //         toolbar: {
    //             show: false,
    //         },
    //         stacked: false,
    //         type: "line",
    //         brush: {
    //             enabled: true,
    //             target: "defi",
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
    // });

    function getDate(timeStamp) {
        let d = new Date(0);
        d.setUTCSeconds(timeStamp);
        return d;
    }

    // const setSelectionHandler = (value) => {
    //     let newOptions = {
    //         ...options,
    //         chart: {
    //             ...options.chart,
    //             selection: {
    //                 ...options.chart.selection,
    //                 xaxis: value,
    //             },
    //         },
    //         grid: {
    //             ...options.grid,
    //             borderColor: colorMode === "light" ? "#191919" : "#36363A",
    //         },
    //     };
    //     setOptions(newOptions);
    // };

    useEffect(() => {
        if (defiGraphData?.isSuccess && defiGraphData?.data != undefined) {
            setSelectionHandler({
                min: Date.parse(getDate(series[0].data.slice(0)[0].x)),
                max: Date.parse(getDate(series[0].data.slice(-1)[0].x)),
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Box
                px={"20px"}
                layerStyle={"flexColumn"}
                justifyContent={"center"}
            >
                <Chart
                    options={options}
                    series={series[0].data}
                    type={options.chart.type}
                    height={"100px"}
                    width={"100%"}
                />
            </Box>
        </>
    );
};

// const PeriodSelection = ({ currPeriod, periodSelectionHandler }) => {
//     return (
//         <Box
//          display={"flex"}>
//             {periods.map((period, i) => {
//                 return (
//                     <Button
//                         key={i}
//                         variant="graphButton"
//                         onClick={() => {
//                             periodSelectionHandler(period);
//                         }}
//                         isActive={period === currPeriod}
//                     >
//                         {period}
//                     </Button>
//                 );
//             })}
//         </Box>
//     );
// };


export default SelectorGraph;