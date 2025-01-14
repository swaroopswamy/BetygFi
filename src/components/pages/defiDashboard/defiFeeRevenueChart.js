"use client";
import React from "react";
import {
	Box,
	Text,
	useColorModeValue,
	useColorMode,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
import LastUpdate from "@components/lastUpdate";
import TooltipComp from "@components/tooltipComp";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
let USDollar = new Intl.NumberFormat("en-US");

function DefiFeeRevenueChart() {
	const { colorMode } = useColorMode();

	const DefiFeeRevenueData = useSelector(
		(state) => state?.defiDashboardData?.DefiFeeRevenueData
	);

	const options = {
		labels: ["Fee", "Revenue"],
		chart: {
			toolbar: {
				show: false,
			},
			type: "donut",
		},
		plotOptions: {
			pie: {
				customScale: 1,
			},
		},
		tooltip: {
			theme: colorMode,
			custom: function ({ series, seriesIndex, w }) {
				return (
					'<div class="donut_tooltip">' +
					'<div class="donut_tooltip_text">' +
					w.globals.labels[seriesIndex] +
					"</div>" +
					'<div class="donut_tooltip_text">' +
					USDollar.format(series[seriesIndex]) +
					" USD" +
					"</div>" +
					"</div>"
				);
			},
		},
		stroke: {
			width: 0,
		},
		legend: {
			show: true,
			position: "left",
			horizontalAlign: "center",
			fontSize: "14px",
			fontFamily: "Inter",
			fontWeight: "400",
			labels: {
				colors: useColorModeValue("#16171B", "#FFFFFF"),
			},
			markers: {
				offsetY: 2,
			},
			formatter: function (text, opts) {
				return [
					text,
					USDollar.format(opts.w.globals.series[opts.seriesIndex]) + " USD",
				];
			},
		},
		dataLabels: {
			enabled: false,
		},
		colors: ["#FF5C01", "#24A48A"],
	};

	return (
		<>
			<Box
				w={{ base: "100%", lg: "50%" }}
				layerStyle={"flexColumn"}
				justifyContent={"space-between"}
				height={"370px"}
				borderRadius={"6px"}
				bgColor={useColorModeValue('#FFFFFF', "#202020")}
			>
				<Box layerStyle={"spaceBetween"} p={"20px"} >
					<Box layerStyle={"flexCenter"} gap={"5px"}>
						<Text variant={"smallTableHeader"}>
							DeFi Fee and Revenue
						</Text>
						<TooltipComp label="DeFi fee is the amount of value DeFi has collected by providing services and revenue reflects the earnings or profits of the DeFi available for distribution." />
					</Box>


					{/* <Button
              variant={'viewMore'}
              // onClick={() => {
              //     router.push("/defi_dashboard/defi_users");
              // }}
          > View More </Button> */}
				</Box>

				<Box >
					{DefiFeeRevenueData?.isError && (
						<>
							<Box layerStyle='center' p="20px" text textAlign={"center"} height={"245px"}>
								<Text variant={"noDataText"}>No data available</Text>
							</Box>
						</>
					)}
					{DefiFeeRevenueData?.isSuccess && (
						<Chart
							options={options}
							series={[
								DefiFeeRevenueData?.data?.totalFees,
								DefiFeeRevenueData?.data?.totalRevenue,
							]}
							type={options.chart.type}
							height={"250px"}
						/>
					)}

				</Box>

				<LastUpdate p={"15px"} time={"3"} />
			</Box>
		</>
	);
}

export default DefiFeeRevenueChart;
