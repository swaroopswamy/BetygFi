import {
	useColorMode,
	useColorModeValue,
	Skeleton,
	Box,
} from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import dynamic from "next/dynamic";

const CustomChart = dynamic(() => import("../../graph"));

const AssetTrendSplineChart = () => {
	const { colorMode } = useColorMode();
	const walletBalanceData = useSelector(
		(state) => state?.walletDashboardTableData?.walletBalanceData
	);
	const options = {
		chart: {
			toolbar: {
				show: false,
			},
			zoom: {
				enabled: false,
			},
		},
		colors: ["#DE50CF"],
		grid: {
			show: true,
		},
		legend: {
			show: false,
		},
		dataLabels: {
			enabled: false,
		},
		tooltip: {
			theme: colorMode,
		},
		stroke: {
			show: true,
			curve: "smooth",
			width: 2,
		},
		xaxis: {
			categories: ["May", "2021", "May", "2021", "May", "2021"],
			labels: {
				show: true,
				style: {
					colors: useColorModeValue("#16171B", "#FFF"),
					fontSize: "11px",
					fontWeight: 400,
				},
			},
		},
		yaxis: {
			labels: {
				show: true,
				style: {
					colors: useColorModeValue("#16171B", "#FFF"),
					fontSize: "11px",
					fontWeight: 400,
				},
				formatter: (value) => {
					return `$${value}B`;
				},
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
			{!walletBalanceData?.isSuccess && (
				<Skeleton>
					<Box
						width={"1074px"}
						height={"217px"}
						pt={"9px"}
						display={"flex"}
						justifyContent={"center"}
						alignItems={"center"}
					></Box>
				</Skeleton>
			)}
			{walletBalanceData?.isSuccess && (
				<CustomChart
					options={options}
					series={series}
					type="line"
					height={250}
				/>
			)}
		</>
	);
};

export default AssetTrendSplineChart;
