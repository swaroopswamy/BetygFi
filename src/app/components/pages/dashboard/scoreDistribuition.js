/* eslint-disable max-len */
import { scoreChangedReducer } from "@/redux/dashboard_data/dataSlice";
import { Box, Text, Tooltip } from "@chakra-ui/react";
import { calculatePercentage } from "@util/globalHelper";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
const boxData = [
	{ bgColor: "#0E6027", label: "Extreme", index: 3 },
	{ bgColor: "#00799F", label: "High", index: 2 },
	{ bgColor: "#B87A00", label: "Moderate", index: 1 },
	{ bgColor: "#FF0000", label: "Low", index: 0 },
];

const ScoreBox = ({ data, totalDefis, scoreTotalData, ScoreSelectHandler }) => {
	const scoreSelected = useSelector(
		(state) => state?.dashboardTableData?.scoreSelected
	);

	return (
		<>
			<Tooltip label={`View All ${data.label} DeFis`}>
				<Box
					key={data.index}
					minW={data.index === 0 || data.index === 1 ? "90px" : "70px"}
					position={"relative"}
					borderTopLeftRadius={data.index === 3 ? "14px" : "0px"}
					borderBottomLeftRadius={data.index === 3 ? "14px" : "0px"}
					borderTopRightRadius={data.index === 0 ? "14px" : "0px"}
					borderBottomRightRadius={data.index === 0 ? "14px" : "0px"}
					bgColor={scoreTotalData[data.index].value === 0 ? "#8F8F8F" : data.bgColor}
					display={"flex"}
					flexDirection={"column"}
					cursor={"pointer"}

					transition="transform 0.3s"
					_hover={{
						transform: 'scale(1.1)',
						zIndex: 1,
						boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
					}}
					_notHovered={{
						transform: 'scale(1.0)',
						zIndex: 0,
					}}
					transform={scoreSelected === data.label ? "scale(1.1)" : "scale(1)"}
					zIndex={scoreSelected === data.label ? 1 : 0}
					boxShadow={scoreSelected === data.label ? "0px 4px 4px rgba(0, 0, 0, 0.25)" : "none"}
					onClick={() => ScoreSelectHandler(data.label)}
					p={"7px 10px"}
					alignItems={"start"}
					w={`${calculatePercentage(scoreTotalData[data.index].value, totalDefis)}%`}
				>
					<Text variant={"content"} fontWeight={700} color={"#FFF"}>{data.label}</Text>
					<Text variant={"content"} fontWeight={700} color={"#FFF"}>{scoreTotalData[data.index].value ?? '-'}</Text>
				</Box>

			</Tooltip>

		</>

	);

};
const ScoreDistribuition = ({ totalDefis, scoreTotalData }) => {
	const dispatch = useDispatch();
	const ScoreSelectHandler = (selected) => {
		dispatch(scoreChangedReducer(selected));
	};
	return (
		scoreTotalData && (
			<Box
				display={"flex"}
				flexDirection={"column"}
				alignItems={"start"}
				w={{ base: "100%", md: "unset" }}
			>
				<Box layerStyle={"flexCenter"} mb={{ base: "20px", md: "0px" }}>
					<Text variant={"content"} fontWeight={"500"}
						_light={{
							color: "#161616"
						}}
						_dark={{
							color: "#FFFFFF"
						}}
					>
						Score distribution
					</Text>
				</Box>
				<Box
					w={{ base: "100%", md: "400px", lg: "500px" }}
					display={"flex"}
					alignItems={"center"}
					position={"relative"}
					mb={{ base: "24px", md: "0px", lg: "0px" }}
				>
					{boxData.map((data, i) => {

						return (
							<ScoreBox key={i} data={data} totalDefis={totalDefis} scoreTotalData={scoreTotalData} ScoreSelectHandler={ScoreSelectHandler} />
						);
					})}
				</Box>
			</Box>
		)
	);
};

export default ScoreDistribuition;