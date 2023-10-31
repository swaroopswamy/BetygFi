/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React from "react";
import {
	Box,
	Button,
	Text,
	useColorModeValue,
	useMediaQuery,
} from "@chakra-ui/react";
import { categories } from "@util/constant";
import { useDispatch, useSelector } from "react-redux";
import { categoryChangedReducer } from "@/redux/dashboard_data/dataSlice";
import "/styles/styles.scss";

import BlockchainSelectionMenu from "/src/app/components/blockchainSelectionMenu";
import Rankings from "/src/app/components/pages/dashboard/defiRankingsTable";
import OverviewColumnChart from "/src/app/components/pages/dashboard/overviewColumnChart";
import OverviewBox from "/src/app/components/pages/dashboard/overviewBox";

const Dashboard = () => {
	const [isMd] = useMediaQuery("(min-width: 768px)");
	return (
		<>
			<Box display={"flex"} flexDir={"column"} overflow={"hidden"}>
				{isMd ? (
					<Box
						display={{ base: "none", md: "flex" }}
						alignItems={"center"}
						w={"100%"}
						pt={"30px"}
						gap={"20px"}
					>
						<Text variant="h1" px={"30px"}>
							{" "}
              DeFi Markets{" "}
						</Text>
						<BlockchainSelectionMenu />
					</Box>
				) : (
					<>
						<Box display={{ base: "flex", md: "none" }} pt={"30px"}>
							<Text variant="h1" px={"18px"}>
								{" "}
                DeFi Markets{" "}
							</Text>
						</Box>

						<Box
							display={{ base: "flex", md: "none" }}
							py={"15px"}
							overflow={"auto"}
						>
							<BlockchainSelectionMenu />
						</Box>
					</>
				)}

				<Box
					display={{ base: "none", md: "block" }}
					px={{ base: "18px", md: "30px" }}
					py={"15px"}
					w={{ base: "100%", md: "80%" }}
				>
					<Text textStyle="body">
            Filter your DeFi exploration by focusing on both the blockchain
            technology it utilises and its specific industry application. This
            way, you'll uncover the projects best suited to your interests,
            whether in Prediction Markets, Lending and Borrowing, or Insurance.
					</Text>
				</Box>

				<Box display={"flex"} overflow={"auto"}>
					<DashboardDefiSelection />
				</Box>

				<Box
					display={"flex"}
					flexDir={"column"}
					bg={useColorModeValue("#F0F0F5", "#191919")}
					px={{ base: "18px", md: "30px" }}
					borderTop={useColorModeValue(
						"1px solid rgba(0, 0, 0, 0.1)",
						"1px solid rgba(255, 255, 255, 0.1)"
					)}
				>
					<Box
						display={"flex"}
						flexDir={{ base: "column", lg: "row" }}
						py={"30px"}
						gap={"15px"}
					>
						<OverviewBox />
						<OverviewColumnChart />
					</Box>

					<Rankings />
				</Box>
			</Box>
		</>
	);
};

export default Dashboard;

const DashboardDefiSelection = ({ ...rest }) => {
	const dispatch = useDispatch();

	const categorySelected = useSelector(
		(state) => state?.dashboardTableData?.categorySelected
	);
	const categoryChangedHandler = (category) => {
		dispatch(categoryChangedReducer(category));
	};

	return (
		<>
			<Box
				display={"flex"}
				h={"40px"}
				px={{ base: "18px", md: "30px" }}
				{...rest}
			>
				<Button
					variant={{ base: "defiMobile", md: "defi" }}
					isActive={categorySelected.length === 0}
					onClick={() => categoryChangedHandler("All")}
					borderRight={useColorModeValue(
						"1px solid rgba(0, 0, 0, 0.1)",
						"1px solid rgba(255, 255, 255, 0.1)"
					)}
				>
					{" "}
          All{" "}
				</Button>
				{categories.map((category, i) => (
					<Button
						key={i}
						variant={{ base: "defiMobile", md: "defi" }}
						isActive={categorySelected.includes(category)}
						onClick={() => categoryChangedHandler(category)}
						borderRight={useColorModeValue(
							"1px solid rgba(0, 0, 0, 0.1)",
							"1px solid rgba(255, 255, 255, 0.1)"
						)}
					>
						{" "}
						{category}{" "}
					</Button>
				))}
			</Box>
		</>
	);
};
