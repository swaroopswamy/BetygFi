/* eslint-disable max-len */
import {
	// useColorMode,
	// useColorModeValue,
	Skeleton,
	Box,
	Text,
} from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
// import dynamic from "next/dynamic";
import TooltipComp from "@/app/components/tooltipComp";
// const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

const PerformanceMultiLineChartBox = () => {
	// const { colorMode } = useColorMode();
	const walletBalanceData = useSelector(
		(state) => state?.walletDashboardTableData?.walletBalanceData
	);
	// const options = {
	//   chart: {
	//     toolbar: {
	//       show: false,
	//     },
	//     zoom: {
	//       enabled: false,
	//     },
	//   },
	//   colors: ["#DE50CF", "#F3BA2F", "#9ADA8A"],
	//   grid: {
	//     show: true,
	//   },
	//   legend: {
	//     show: false,
	//   },
	//   dataLabels: {
	//     enabled: false,
	//   },
	//   stroke: {
	//     show: true,
	//     curve: "straight",
	//     dashArray: [0, 5, 5],
	//     width: 2,
	//   },
	//   tooltip: {
	//     theme: colorMode,
	//   },
	//   xaxis: {
	//     categories: ["May", "2021", "May", "2021", "May", "2021"],
	//     labels: {
	//       show: true,
	//       style: {
	//         colors: useColorModeValue("#16171B", "#FFF"),
	//         fontSize: "12px",
	//         fontWeight: 400,
	//       },
	//     },
	//   },
	//   yaxis: {
	//     labels: {
	//       show: true,
	//       style: {
	//         colors: useColorModeValue("#16171B", "#FFF"),
	//         fontSize: "12px",
	//         fontWeight: 400,
	//       },
	//       formatter: (value) => {
	//         return `$${value}B`;
	//       },
	//     },
	//   },
	// };
	// const series = [
	//   {
	//     name: "Wallet Portfolio",
	//     data: [1, 4, 5, 3, 2],
	//   },
	//   {
	//     name: "BTC",
	//     data: [5, 3, 1, 4, 1],
	//   },
	//   {
	//     name: "ETH Trend",
	//     data: [5, 2, 3, 1, 4],
	//   },
	// ];
	return (
		<>
			<Box
				my="20px"
				w={{ base: "90%", md: "100%" }}
				display={"flex"}
				flexDirection={"column"}
				borderRadius={"6px"}
				_dark={{
					bg: "#202020",
				}}
				_light={{
					bg: "#FFFFFF",
				}}
				p="25px"
			>
				<Box
					layerStyle={"flexCenter"}
					height={"10px"}
					borderRadius={"6px"}
					_dark={{
						bg: "#202020",
						color: "#FFFFFF",
					}}
					_light={{
						bg: "#FFFFFF",
						color: "#16171B",
					}}
					pb="14px"
				>
					<Text
						fontSize={"18px"}
						fontWeight={600}
						lineHeight={"20px"}
						_dark={{ color: "#FFF" }}
						_light={{ color: "#212121" }}
						paddingLeft={"15px"}
					>
            Performance
					</Text>
					<TooltipComp label="Performance graph shows the wallet portfolio performance in comparison with Bitcoin and Ethereum market performance." mr="7px" mt={"5px"} />
				</Box>
				{!walletBalanceData?.isSuccess ? (
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
				) : (
					<>
						<Box
							_dark={{
								color: "#FFF",
							}}
							_light={{
								color: "#16171B",
							}}
							fontSize={"20px"}
							fontWeight={"400"}
							letterSpacing={"1px"}
							display={"flex"}
							alignItems={"center"}
							justifyContent={"center"}
							textAlign={"center"}
							height={"245px"}
							opacity={0.6}
						>
              No Data Available
						</Box>
					</>
				)}
				{/* {walletBalanceData?.isSuccess && <ApexCharts options={options} 
            series={series} type="line" height={250} />} */}
			</Box>
		</>
	);
};

export default PerformanceMultiLineChartBox;
