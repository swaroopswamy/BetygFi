/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable max-len */
import { Box, Select, useColorMode, useColorModeValue } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import CustomChart from "@/app/components/graph";
import { useSelector } from "react-redux";
import millify from "millify";
import CurrencyButtons from "@/app/components/currencyButtons";

const OverviewAreaChart = () => {
	const { colorMode } = useColorMode();
	const [currencySelected, setCurrencyType] = useState("USD");
	const overviewGraphData = useSelector(
		(state) => state?.dashboardTableData?.OverviewGraphData
	);

	const CurrencyTypeHandler = (type) => {
		setCurrencyType(type);
	};
	const categorySelected = useSelector(
		(state) => state?.dashboardTableData?.categorySelected
	);

	const options = {
		chart: {
			toolbar: {
				show: false,
			},
			zoom: {
				enabled: false,
			},
			id: 'overview',
			stacked: false,
			animations: {
				enabled: false
			}
		},
		colors: ["#29A88E", "#DE50CF", "#ACC94C", "#FF5C00"],
		grid: {
			show: true,
		},
		legend: {
			show: true,
		},
		dataLabels: {
			enabled: false,
		},
		tooltip: {
			enabled: true,
			theme: colorMode,
			custom: function ({ series, seriesIndex, dataPointIndex, w }) {
				let val = millify(series[seriesIndex][dataPointIndex], {
					precision: 2,
					locales: "en-US"
				});
				return (
					'<div class="donut_tooltip">' +
					'<div class="donut_tooltip_text">' +
					`<span style="display: flex; border-radius: 50%; height: 14px; width: 14px; background-color: ${w.config.series[seriesIndex].color};"></span>` + " " + w.config.series[seriesIndex].name +
					"</div>" +
					'<div class="donut_tooltip_text">' +
					val +
					" USD" +
					"</div>" +
					"</div>"
				);
			}
		},
		/* 	fill: {
				type: "gradient",
				gradient: {
					shadeIntensity: 0.7,
					opacityFrom: 0.5,
					opacityTo: 0.1,
					stops: [0, 90, 100],
				},
			}, */
		stroke: {
			show: true,
			curve: "smooth",
			width: [2, 2],
		},
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
				show: true,
			},
		},
		yaxis: {
			tickAmount: 5,
			labels: {
				show: true,
				style: {
					colors: useColorModeValue("#16171B", "#FFF"),
					fontSize: "11px",
					fontWeight: 400,
				},
				formatter: (value) => {
					return (
						`$${millify(value, {
							precision: 2,
							locales: "en-US"
						})}`
					);
				},
			},
		},
	};

	let colors = ["#29A88E", "#DE50CF", "#ACC94C", "#FF5C00"];
	let series = [];

	overviewGraphData?.isSuccess && overviewGraphData?.data?.graphData.map((category, i) => {
		if (categorySelected.includes(category?.name) || categorySelected.length === 0) {
			let categorySeries = {
				name: category?.name,
				data: category?.graphData.slice(0, -2),
				color: colors[i % 4]
			};
			series.push(categorySeries);
		}
	});

	return (
		<>
			<Box width={"100%"}>
				<Box px={{ base: "10px", md: "20px" }} display={"flex"} flexDirection={"column"} >
					<Box
						justifyContent={"flex-end"}
						display={"flex"}
						alignItems={"center"}
						ml={"auto"}
					>
						<CurrencyButtons
							currencySelected={currencySelected}
							CurrencyTypeHandler={CurrencyTypeHandler}
							colorMode={colorMode}
						/>
						<Select
							ml={"10px"}
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
					</Box>

					<CustomChart className="overview-chart" options={options} series={series} type="line" height={205} />
				</Box>

				<Box display={{ base: "none", lg: "block" }} w={"100%"}>
					<SelectorGraph series={series} />
				</Box>
				<Box id="legend-container" mt="20px"></Box>
			</Box>
		</>
	);
};

export default OverviewAreaChart;

const SelectorGraph = ({ series }) => {
	const { colorMode } = useColorMode;
	const selection = useRef({ min: new Date("19 Aug 2023").getTime(), max: new Date("25 Aug 2023").getTime() });

	const overviewGraphData = useSelector(
		(state) => state?.dashboardTableData?.OverviewGraphData
	);

	let greySeries = [];

	if (series.length > 0) {
		greySeries.push(structuredClone(series[0]));
		greySeries[0].color = "#3A3D46";
	}

	const options = {
		chart: {
			toolbar: {
				show: false,
			},
			stacked: false,
			type: "area",
			brush: {
				enabled: true,
				target: "overview",
				autoScaleYaxis: true,
			},
			selection: {
				enabled: true,
				fill: {
					color: "#00E0FF",
					opacity: 0.15,
				},
				xaxis: {
					min: selection.current.min,
					max: selection.current.max,
				},
				stroke: {
					width: 0,
					dashArray: 0,
					color: colorMode === "light" ? "#313131" : "#FFF",
				},
			},
			animations: {
				enabled: false
			},
			events: {
				brushScrolled: function (chartContext, config) {
					selection.current = config.xaxis;
				},
			}
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
			{overviewGraphData?.isSuccess &&
				<Box px={"20px"}>
					<CustomChart
						options={options}
						series={greySeries}
						type={options.chart.type}
						height={"100px"}
						width={"100%"}
					/>
				</Box>
			}
		</>
	);
};

