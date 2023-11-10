/* eslint-disable max-len */
import { Box, Text, Tooltip } from "@chakra-ui/react";
import { calculatePercentage } from "@util/globalHelper";
import React from "react";
const boxData = [
	{ bgColor: "#0E6027", label: "Extreme", index: 3 },
	{ bgColor: "#00799F", label: "High", index: 2 },
	{ bgColor: "#B87A00", label: "Moderate", index: 1 },
	{ bgColor: "#FF0000", label: "Low", index: 0 },
];

const ScoreBox = ({ data, totalDefis, scoreTotalData }) => {
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
					borde
					transition="transform 0.3s"
					_hover={{
						transform: 'scale(1.1)',
						zIndex: 1,
						dropShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
					}}
					_notHovered={{
						zIndex: 0,
					}}
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
							<ScoreBox key={i} data={data} totalDefis={totalDefis} scoreTotalData={scoreTotalData} />
						);
					})}
				</Box>
			</Box>
		)
	);
};

export default ScoreDistribuition;