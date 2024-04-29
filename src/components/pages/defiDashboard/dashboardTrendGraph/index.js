"use client";
import {
    Box,
    useColorMode,
    useColorModeValue,
    Text,
} from "@chakra-ui/react";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import TrendGraph from "./trendGraph";
// import dynamic from "next/dynamic";

// const periods = ["7d", "14d", "30d", "1yr", "Max"];
// const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const DashboardTrendGraph = ({ searchParamProtocolSlug }) => {
    const { colorMode } = useColorMode();
    //const [graphTypeSelected, setGraphTypeSelected] = useState(["tvl"]);
    // const [currencySelected, setCurrencyType] = useState("USD");
    // const [series, setSeries] = useState([]);
    const defiGraphData = useSelector((state) => state?.defiDashboardData?.DefiGraphData);

    //const [graphData, setGraphData] = useState(null);
    // const [tvlData, setTVLData] = useState(null);

    /*  const graphTypes = [
        { name: "TVL", value: "tvl" },
        { name: "MCap", value: "mcap" },
        { name: "Price", value: "price" },
        // { name: "Users", value: "users" },
        // { name: "FDV", value: "fdv" },
        // { name: "Borrowed", value: "borrowed" },
        // { name: "Median APY", value: "median_apy" }
    ]; */

    // const CurrencyTypeHandler = (type) => {
    //   setCurrencyType(type);
    // };

    /* `const GraphTypeHandler = (type) => {
        const arr = graphTypeSelected.slice();

        const index = arr.indexOf(type);
        if (index > -1) {
            arr.splice(index, 1);
        } else {
            arr.push(type);
        }
        if (arr?.length == 0) {
            arr.push(graphTypes[0].value);
        }

        setGraphTypeSelected(arr);
    };` */

    // const SeriesHandler = () => {
    //     let mapdata = [];
    //     graphData2?.data?.map((item) => {
    //         if (graphTypeSelected.includes(item.name)) {
    //             mapdata.push(item);
    //         }
    //     })
    //     setSeries(mapdata);
    // }

    /*     const SeriesHandler = () => {
           let mapdata = [];
           if (!graphData) {
               return;
           }
                graphData2?.data?.map((item) => {
                   if (graphTypeSelected.includes(item.name)) {
                       if (item.name === "tvl") {
                           item.data = graphData["total_volumes"];
                           if (!tvlData) {
                               let tvl = [];
                               tvl.push(item);
                               setTVLData(tvl);
                           }
                       }
                       if (item.name === "mcap") {
                           item.data = graphData["market_caps"];
                       }
                       if (item.name === "sushi_price") {
                           item.data = graphData["prices"];
                       }
                       mapdata.push(item);
                   }
               }); 
          setSeries(mapdata);
       };
    */
    /*     useEffect(() => {
            SeriesHandler();
        }, [graphTypeSelected, graphData]);
     */

    // useEffect(() => {
    //     if (defiGraphData?.isSuccess) {
    //         setSeries(defiGraphData?.data?.data);
    //     }
    // }, [defiGraphData]);

    // const renderTrendGraphFilters = () => {
    //     return (
    //         <Box display={"flex"} mt={"10px"} height={"24px"}>

    //             <Box display={"flex"} gap={"10px"} ml={"24px"}>

    //                 {graphTypes.map((item, i) => {
    //                     return (
    //                         <TrendGraphTypeButton
    //                             key={i}
    //                             name={item.name}
    //                             value={item.value}
    //                             graphTypeSelected={graphTypeSelected}
    //                             GraphTypeHandler={GraphTypeHandler}
    //                             colorMode={colorMode}
    //                         />
    //                     );
    //                 })
    //                 }

    //                 <Box
    //                     position={"relative"}
    //                     padding={"7px 4px"}
    //                     borderRight={"1px"}
    //                     borderRadius={"2px"}
    //                     borderColor={useColorModeValue("#E0E0E0", "#333")}
    //                     display={"flex"}
    //                     alignItems={"center"}
    //                     cursor={"pointer"}
    //                 >
    //                     <Image
    //                         width={"12px"}
    //                         height={"12px"}
    //                         alt="next-arrow"
    //                         src={useColorModeValue(
    //                             "/icons/direction-arrow.svg",
    //                             "/icons/direction-icon-dark.svg"
    //                         )}
    //                     />
    //                 </Box>
    //             </Box>
    //             <Box
    //                 display={"flex"}
    //                 ml={"auto"}
    //             >
    //                 <CurrencyButtons
    //                     currencySelected={currencySelected}
    //                     CurrencyTypeHandler={CurrencyTypeHandler}
    //                     colorMode={colorMode}
    //                 />
    //             </Box>

    //             <Box
    //                 display={"flex"}
    //                 mr={"26px"}
    //                 ml={"10px"}
    //             >
    //                 <Select
    //                     fontSize={"10px"}
    //                     fontWeight={"600"}
    //                     height={"24px"}
    //                     border={"1px"}
    //                     borderRadius={"2px"}
    //                     borderColor={useColorModeValue("#E0E0E0", "#333")}
    //                     padding={"0"}
    //                     mt={"-2px"}
    //                 >
    //                     <option value='Daily'>Daily</option>
    //                     <option value='Monthly'>Monthly</option>
    //                     <option value='Yearly'>Yearly</option>
    //                 </Select>
    //             </Box>
    //         </Box>
    //     );
    // };

    const series = useMemo(() => [{
        data: defiGraphData?.data?.data,
    }], [defiGraphData]);

    return (
        <Box
            display={"flex"}
            flexDirection={"column"}
            alignContent={"center"}
            // height={"400px"}
            width={{ base: "100%", lg: "70%" }}
            bgColor={useColorModeValue("#FFFFFF", "#202020")}
            border={"1px"}
            borderColor={useColorModeValue("#FFFFFF", "#272727")}
            borderRadius={"6px"}
        >
            <Box padding={"20px 0 0 20px"}>
                <Text fontSize={"18px"} fontWeight={600} lineHeight={"20px"}>
                    Trend Graph
                </Text>
            </Box>

            {/* Buttons and selection go here */}
            {/* {renderTrendGraphFilters()} */}

            <Box
                padding={"20px 20px 0px 20px"}
                borderBottom={"1px"}
                borderColor={colorMode === "light" ? "#F0F0F5" : "#333"}
            >
                <TrendGraph
                    colorMode={colorMode}
                    searchParamProtocolSlug={searchParamProtocolSlug}
                    series={series}
                />
            </Box>

            {/* <Box display={{ base: "none", lg: "block" }} w={"100%"}>
                    <SelectorGraph colorMode={colorMode} />
                </Box> */}
        </Box>
    );
};

export default DashboardTrendGraph;

// const SelectorGraph = ({ colorMode }) => {
//     const defiGraphData = useSelector(
//         (state) => state?.defiDashboardData?.DefiGraphData
//     );

//     const series = useMemo(() => [{
//         data: defiGraphData?.data?.data,
//     }], [defiGraphData]);

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
//                 target: "defi",
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

//     // const setSelectionHandler = (value) => {
//     //     let newOptions = {
//     //         ...options,
//     //         chart: {
//     //             ...options.chart,
//     //             selection: {
//     //                 ...options.chart.selection,
//     //                 xaxis: value,
//     //             },
//     //         },
//     //         grid: {
//     //             ...options.grid,
//     //             borderColor: colorMode === "light" ? "#191919" : "#36363A",
//     //         },
//     //     };
//     //     setOptions(newOptions);
//     // };

//     // useEffect(() => {
//     //     if (defiGraphData?.isSuccess && defiGraphData?.data != undefined) {
//     //         setSelectionHandler({
//     //             min: Date.parse(getDate(series[0].data.slice(0)[0].x)),
//     //             max: Date.parse(getDate(series[0].data.slice(-1)[0].x)),
//     //         });
//     //     }
//     // }, []);

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
//                     height={100}
//                     width={"100%"}
//                 />
//             </Box>
//         </>
//     );
// };