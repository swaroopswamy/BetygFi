import React from "react";
import { useColorMode } from "@chakra-ui/react";
import CustomChart from '@/app/components/graph';

const SplineAreaChart = () => {
	const { colorMode } = useColorMode();
	const options = {
		chart: {
			toolbar: {
				show: false,
			},
			zoom: {
				enabled: false,
			},
		},
		colors: ["#0A7F00"],
		grid: {
			show: false,
		},
		legend: {
			show: false,
		},
		dataLabels: {
			enabled: false,
		},
		tooltip: {
			enabled: false,
			theme:colorMode
		},
		fill: {
			type: "gradient",
			gradient: {
				shadeIntensity: 1,
				opacityFrom: 0.7,
				opacityTo: 0.9,
				stops: [0, 90, 100],
			},
		},

		stroke: {
			show: true,
			curve: "smooth",
			width: 1,
		},
		xaxis: {
			show: false,
			categories: ["May", "2021", "May", "2021", "May", "2021"],
			labels: {
				show: false,
			},
			axisBorder: {
				show: false
			},
			axisTicks: {
				show: false
			},
		},
		yaxis: {
			show: false,
			labels: {
				show: false,

			},
		},
	};
	const series = [
		{
			name: "Series 1",
			data: [1, 4, 5, 3, 2],
		},
	];
	return (
		<>
			<CustomChart options={options} series={series} type="area" height={80} />
		</>
	);
};

export default SplineAreaChart;