"use client";
import React from "react";
import { Table, Text, Tbody, Th, Thead, Tr, Flex, Box, useColorModeValue, Tooltip, Image as ChakraImage } from "@chakra-ui/react";
import Image from "next/image";

const GenericSmallTableComponent = ({ tableName, thread, tableData, RowComponent, Definitions }) => {
	return (
		<Box
			border={"2px"}
			borderColor={useColorModeValue('#FFFFFF', '#202020')}
			borderRadius={"6px"}
		>
			<Flex
				borderRadius={"6px"}
				_dark={{
					bg: "#202020",
					color: "#FFFFFF"
				}}
				_light={{
					bg: "#FFFFFF",
					color: "#16171B"
				}}
			>
				<Text
					_light={{ color: "#16171B" }}
					_dark={{ color: "#FFFFFF" }}
					fontSize={"18px"}
					fontWeight={600}
					lineHeight={"20px"}
					ml={"22px"}
					mt={"15px"}
					mb={"15px"}
				>
					{tableName}
				</Text>
				<Tooltip label={Definitions}
					bgColor={useColorModeValue("rgba(97, 97, 97, 0.92)", "#FFF")}
					padding="4px 8px"
					fontWeight={400}
					fontSize={"10px"}

				>
					<Image
						width={12}
						height={12}
						flexShrink={"0"}
						mt={"22px"}
						ml={"5px"}
						alt=''
						// unoptimized="true"
						// priority="true"
						src={"/images/Frame.svg"}
					/>
				</Tooltip>
			</Flex>

			<Table variant='unstyled'
				size={'sm'}
				border={"1px"}
				borderColor={useColorModeValue("#FFFFFF", "#272727")}
				borderRadius={"6px"}

			>
				<Thead>
					<Tr
						bg={useColorModeValue("#F5F5F7", "#131313")}
						width={"20%"}
						fontSize={"14px"}
						fontFamily={"Inter"}
						fontWeight={400}
						flex-shrink={"0"}
						borderRadius={'6px'}
					>
						{thread.map((item, i) => {
							return (
								<ThreadItem
									key={i}
									name={item}
								/>
							);
						})}

					</Tr>
				</Thead>

				<Tbody
				>
					<RowComponent
						tableData={tableData}
					/>
				</Tbody>
			</Table>
		</Box>
	);
};

export default GenericSmallTableComponent;

function ThreadItem({ key, name }) {
	return (
		<Th
			key={key}
			_light={{
				color: "#16171B",
				opacity: "0.8"
			}}
			_dark={{ color: "#A8ADBD" }}
			fontSize={"14px"}
			fontFamily={"Inter"}
			fontStyle={"normal"}
			fontWeight={"400"}
			lineHeight={"20px"}
			letterSpacing={"1px"}
			textTransform={"capitalize"}
			textAlign={"left"}
		>
			<Flex>
				{name}
				<ChakraImage
					unoptimized="true"
					priority="true"
					src={useColorModeValue("/images/Arrowdown(light).svg", "/images/Arrowdown(dark).svg")}
					alt="Users" ml="5px" mt={"3px"} />
			</Flex>
		</Th>
	);
}
