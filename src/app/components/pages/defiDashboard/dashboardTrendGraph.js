/* eslint-disable no-mixed-spaces-and-tabs */
"use client";
import {
	Box,
	Image,
	Text,
	useColorModeValue,
	useColorMode,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import graphData2 from "./exampleTrendGraphData.json";
import { useSelector } from "react-redux";
import millify from "millify";

const axios = require("axios");
const CustomChart = dynamic(() => import("/src/app/components/graph"));

function getEveryNth(arr, nth) {
	const result = [];

	for (let index = 0; index < arr.length; index += nth) {
		result.push(arr[index]);
	}

	return result;
}

function DashboardTrendGraph() {
	const { colorMode } = useColorMode();
	const [graphTypeSelected, setGraphTypeSelected] = useState(["tvl"]);
	// const [currencySelected, setCurrencyType] = useState("USD");
	const [series, setSeries] = useState([]);

	const [graphData, setGraphData] = useState(null);
	const [tvlData, setTVLData] = useState(null);

	const graphTypes = [
		{ name: "TVL", value: "tvl" },
		{ name: "MCap", value: "mcap" },
		{ name: "Price", value: "price" },
		/*      { name: "Users", value: "users" },
             { name: "FDV", value: "fdv" },
             { name: "Borrowed", value: "borrowed" },
             { name: "Median APY", value: "median_apy" } */
	];

	// const CurrencyTypeHandler = (type) => {
	//   setCurrencyType(type);
	// };

	const GraphTypeHandler = (type) => {
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
	};

	// const SeriesHandler = () => {
	//     let mapdata = [];
	//     graphData2?.data?.map((item) => {
	//         if (graphTypeSelected.includes(item.name)) {
	//             mapdata.push(item);
	//             console.log("mapdata", mapdata);
	//         }
	//     })
	//     setSeries(mapdata);
	// }

	const SeriesHandler = () => {
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

	useEffect(() => {
		SeriesHandler();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [graphTypeSelected, graphData]);

 
	useEffect(() => {
		axios
			.get(
				"https://api.coingecko.com/api/v3/coins/aave/market_chart/range?vs_currency=usd&from=0&to=1693552768123"
			)
			.then(function (response) {
				setGraphData(response.data);
			})
			.catch(function (/* error */) {
				// console.log(error);
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
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
				<Box display={"flex"} mt={"10px"} height={"24px"}>
					{/* Graph type selection */}
					<Box display={"flex"} gap={"10px"} ml={"24px"}>
						{graphTypes.map((item, i) => {
							return (
								<TrendGraphTypeButton
									key={i}
									name={item.name}
									value={item.value}
									graphTypeSelected={graphTypeSelected}
									GraphTypeHandler={GraphTypeHandler}
									colorMode={colorMode}
								/>
							);
						})}

						<Box
							position={"relative"}
							padding={"7px 4px"}
							borderRight={"1px"}
							borderRadius={"2px"}
							borderColor={useColorModeValue("#E0E0E0", "#333")}
							display={"flex"}
							alignItems={"center"}
							cursor={"pointer"}
						>
							<Image
								width={"12px"}
								height={"12px"}
								alt="next-arrow"
								src={useColorModeValue(
									"/icons/direction-arrow.svg",
									"/icons/direction-icon-dark.svg"
								)}
							></Image>
						</Box>
					</Box>

					{/* Currency selection */}
					{/*   <Box
                        display={"flex"}
                        ml={"auto"}
                    >
                        <CurrencyButtons
                            currencySelected={currencySelected}
                            CurrencyTypeHandler={CurrencyTypeHandler}
                            colorMode={colorMode}
                        />
                    </Box> */}

					{/* Period selector */}
					{/*  <Box
                        display={"flex"}
                        mr={"26px"}
                        ml={"10px"}
                    >
                        <Select
                            fontSize={"10px"}
                            fontWeight={"600"}
                            height={"24px"}
                            border={"1px"}
                            borderRadius={"2px"}
                            borderColor={useColorModeValue("#E0E0E0", "#333")}
                            padding={"0"}
                            mt={"-2px"}
                        >
                            <option value='Daily'>Daily</option>
                            <option value='Monthly'>Monthly</option>
                            <option value='Yearly'>Yearly</option>
                        </Select>
                    </Box> */}
				</Box>

				<Box
					padding={"20px 20px 0px 20px"}
					borderBottom={"1px"}
					borderColor={colorMode === "light" ? "#F0F0F5" : "#333"}
				>
					<Graph series={series} />
				</Box>

				<SelectorGraph tvlData={tvlData} />
			</Box>
		</>
	);
}

export default DashboardTrendGraph;

function SelectorGraph({ tvlData }) {
	if (!tvlData) return;

	const tvl = [
		{
			name: "tvl",
			type: "area",
			color: "#3A3D46",
			data: tvlData ? getEveryNth(tvlData[0].data, 10) : null,
		},
	];

	const { colorMode } = useColorMode;

	// useEffect(() => {
	//     let chart = ApexCharts.getChartByID('trendgraph');
	//     console.log(chart.w.globals.minX, chart.w.globals.maxX);
	// })

	const options = {
		chart: {
			toolbar: {
				show: false,
			},
			stacked: false,
			type: "line",
			brush: {
				enabled: true,
				target: "trendgraph",
				autoScaleYaxis: true,
			},
			selection: {
				enabled: true,
				fill: {
					color: "#00E0FF",
					opacity: 0.15,
				},
				stroke: {
					width: 0,
					dashArray: 0,
					color: colorMode === "light" ? "#313131" : "#FFF",
				},
				xaxis: {
					min: new Date("19 Jun 2021").getTime(),
					max: new Date("14 Aug 2023").getTime(),
				},
			},
			animations: {
				enabled: false,
			},
		},
		fill: {
			colors: ["#3A3D46"],
			type: "solid",
			opacity: "0.25",
		},
		stroke: {
			show: false,
		},
		colors: ["#000"],
		xaxis: {
			type: "datetime",
			labels: {
				show: false,
			},
			axisTicks: {
				show: false,
			},
			axisBorder: {
				show: false,
			},
		},
		yaxis: {
			labels: {
				show: false,
			},
		},
		dataLabels: {
			enabled: false,
		},
		legend: {
			show: false,
		},
		tooltip: {
			enabled: false,
			custom: function ({ series }) {
				// console.log(Math.max(...series[0]))
				return (
					'<div class="selection_box_tooltip">' +
          "<span>" +
          Math.max(series[0]) +
          "</span>" +
          "</div>"
				);
			},
		},
		grid: {
			borderColor: colorMode === "light" ? "#191919" : "#36363A",
			xaxis: {
				lines: {
					show: false,
				},
			},
			yaxis: {
				lines: {
					show: false,
				},
			},
		},
	};

	return (
		<>
			<Box marginTop={"-30px"} marginBottom={"-30px"}>
				<CustomChart
					options={options}
					series={tvl}
					type={options.chart.type}
					height={"100px"}
					width={"100%"}
				/>
			</Box>
		</>
	);
}

function Graph({ series }) {
	const options = {
		chart: {
			toolbar: {
				show: false,
			},
			id: "trendgraph",
			stacked: false,
			animations: {
				enabled: false,
			},
		},
		stroke: {
			width: [2, 2],
		},
		fill: {
			colors: ["#FF5C00", "#C0E253", "#DE50CF", "#29A88E"],
			type: "gradient",
			gradient: {
				shadeIntensity: 0.7,
				opacityFrom: 0.5,
				opacityTo: 0.1,
				stops: [0, 90, 100],
			},
		},
		colors: ["#FF5C00", "#C0E253", "#DE50CF", "#29A88E"],
		xaxis: {
			type: "datetime",
			labels: {
				show: true,
				style: {
					colors: useColorModeValue("#16171B", "#FFF"),
					fontSize: "11px",
					fontWeight: 300,
				},
			},
			axisTicks: {
				show: false,
			},
		},
		yaxis: series?.map((item, i) => {
			return {
				opposite: i !== 0 && true,
				seriesName: item?.name,
				tickAmount: 5,
				labels: {
					show: true,
					style: {
						colors: item?.color,
						fontSize: "11px",
						fontWeight: 300,
					},
					formatter: function (val) {
						return (
							"$" +
              millify(val, {
              	precision: 2,
              	locales: "en-US",
              })
						);
					},
				},
				axisBorder: {
					show: i !== 0 && true,
					color: item?.color,
					offsetX: i !== 0 && "50px",
				},
				axisTicks: {
					show: false,
				},
			};
		}),

		dataLabels: {
			enabled: false,
		},
		legend: {
			show: false,
		},
		tooltip: {
			enabled: false,
		},
		grid: {
			borderColor: useColorModeValue("#191919", "#36363A"),
			xaxis: {
				lines: {
					show: false,
				},
			},
			yaxis: {
				lines: {
					show: true,
				},
			},
		},
	};

	return (
		<>
			<CustomChart
				options={options}
				series={series}
				type={options.chart.type}
				height={"200px"}
			/>

			{/*   <Box
                _dark={{
                    color: "#FFF"
                }}
                _light={{
                    color: "#16171B"
                }}
                fontSize={"20px"}
                fontWeight={"400"}
                letterSpacing={"1px"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                textAlign={"center"}
                height={"245px"}
                mb={"20px"}
            >
                No Data Available
            </Box> */}
		</>
	);
}

// function CurrencyButtons({ currencySelected, CurrencyTypeHandler, colorMode }) {
//   return (
//     <>
//       <Box
//         position={"relative"}
//         padding={"7px 8px"}
//         border={"1px"}
//         borderRadius={"2px"}
//         borderColor={useColorModeValue("#E0E0E0", "#333")}
//         display={"flex"}
//         alignItems={"center"}
//         cursor={"pointer"}
//         onClick={() => {
//           CurrencyTypeHandler("USD");
//         }}
//         _after={
//           currencySelected === "USD" && {
//             bgColor: colorMode === "light" ? "#F5F5F7" : "#191919",
//           }
//         }
//         bgColor={
//           currencySelected === "USD"
//             ? colorMode === "light"
//               ? "#F5F5F7"
//               : "#191919"
//             : colorMode === "light"
//               ? "#FFFFFF"
//               : "#202020"
//         }
//       >
//         <Text
//           fontSize={"10px"}
//           lineHeight={"10px"}
//           fontWeight={currencySelected === "USD" ? 600 : 400}
//         >
//           USD
//         </Text>
//       </Box>
//       <Box
//         position={"relative"}
//         padding={"7px 8px"}
//         border={"1px"}
//         borderRadius={"2px"}
//         borderColor={useColorModeValue("#E0E0E0", "#333")}
//         display={"flex"}
//         alignItems={"center"}
//         cursor={"pointer"}
//         onClick={() => {
//           CurrencyTypeHandler("BTC");
//         }}
//         _after={
//           currencySelected === "BTC" && {
//             bgColor: colorMode === "light" ? "#F5F5F7" : "#191919",
//           }
//         }
//         bgColor={
//           currencySelected === "BTC"
//             ? colorMode === "light"
//               ? "#F5F5F7"
//               : "#191919"
//             : colorMode === "light"
//               ? "#FFFFFF"
//               : "#202020"
//         }
//       >
//         <Text
//           fontSize={"10px"}
//           lineHeight={"10px"}
//           fontWeight={currencySelected === "BTC" ? 600 : 400}
//         >
//           BTC
//         </Text>
//       </Box>
//       <Box
//         position={"relative"}
//         padding={"7px 8px"}
//         border={"1px"}
//         borderRadius={"2px"}
//         borderColor={useColorModeValue("#E0E0E0", "#333")}
//         display={"flex"}
//         alignItems={"center"}
//         cursor={"pointer"}
//         onClick={() => {
//           CurrencyTypeHandler("ETH");
//         }}
//         _after={
//           currencySelected === "ETH" && {
//             bgColor: colorMode === "light" ? "#F5F5F7" : "#191919",
//           }
//         }
//         bgColor={
//           currencySelected === "ETH"
//             ? colorMode === "light"
//               ? "#F5F5F7"
//               : "#191919"
//             : colorMode === "light"
//               ? "#FFFFFF"
//               : "#202020"
//         }
//       >
//         <Text
//           fontSize={"10px"}
//           lineHeight={"10px"}
//           fontWeight={currencySelected === "ETH" ? 600 : 400}
//         >
//           ETH
//         </Text>
//       </Box>
//     </>
//   );
// }

function TrendGraphTypeButton({
	name,
	value,
	graphTypeSelected,
	GraphTypeHandler,
	colorMode,
}) {
	const defiData = useSelector(
		(state) => state?.defiDashboardData?.DefiData?.data
	);
	return (
		<>
			<Box
				position={"relative"}
				padding={"7px 8px"}
				border={"1px"}
				borderRadius={"2px"}
				borderColor={useColorModeValue("#E0E0E0", "#333")}
				display={"flex"}
				alignItems={"center"}
				justifyContent={"center"}
				cursor={"pointer"}
				onClick={() => {
					GraphTypeHandler(value);
				}}
				_after={
					graphTypeSelected.includes(value) && {
						bgColor: colorMode === "light" ? "#F5F5F7" : "#191919",
					}
				}
				bgColor={
					graphTypeSelected.includes(value)
						? colorMode === "light"
							? "#F5F5F7"
							: "#191919"
						: colorMode === "light"
							? "#FFFFFF"
							: "#202020"
				}
			>
				<Text
					fontSize={"10px"}
					lineHeight={"10px"}
					fontWeight={graphTypeSelected.includes(value) ? 600 : 400}
					textTransform={"capitalize"}
				>
					{value === "price" ? `${defiData?.symbol} price` : name}
				</Text>
			</Box>
		</>
	);
}
