"use client";
import React from "react";
import { Text, Td, Th, Tr, Box, Icon, Image as ChakraImage } from "@chakra-ui/react";
import isEmpty from "lodash/isEmpty";
import dynamic from "next/dynamic";
import Image from "next/image";
import { portfolioTableHeader, PortfolioTableDesktop, PortfolioTableMobile, } from "@components/pages/walletDashboard/helper";

const GenericTable = dynamic(() => import("@components/table"));

const DefiTable = ({ walletBalanceData }) => {
	return (
		<Box display={"flex"} overflow={"auto"}>
			<GenericTable
				tableHeader={portfolioTableHeader}
				tableData={walletBalanceData}
				TableRow={TableRowDesktop}
				TableHeaderRowMobile={TableHeaderRowMobile}
				ButtonComp={TableBodyRowMobileButtonComp}
				PanelComp={TableBodyRowMobilePanelComp}
				SkeletonRowsColumnsDesktop={PortfolioTableDesktop}
				SkeletonRowsColumnsMobile={PortfolioTableMobile}
				isQueryInPendingState={walletBalanceData?.data?.isQueryInPendingState}
			/>
		</Box>
	);
};

const TableRowDesktop = ({ item, i }) => {
	return (
		<Tr key={i + 1}>
			{/*   <Td
                              _dark={{
                                  color: "#FFF"
                              }}
                              _light={{
                                  color: "#16171B"
                              }}
                              fontSize={"14px"}
                              fontWeight={"400"}
                              letterSpacing={"1px"}
                          >
                              {item?.symbol}
                          </Td> */}
			<Td
				_dark={{
					bgColor: "#202020",
				}}
				_light={{
					bgColor: "#FFFFFF",
				}}
			>
				<Box display={"flex"} alignItems={"center"}>
					{!isEmpty(item?.logoUrl) ? (
						<Image
							width={20}
							height={20}
							style={{ borderRadius: "50%" }}
							alt="logo"
							src={item?.logoUrl}
						// unoptimized="true"
						// priority="true"
						/>
					) : (
						<Box
							width={"20px"}
							height={"20px"}
							alignItems={"center"}
							justifyContent={"center"}
							display={"flex"}
							borderRadius={"50%"}
							_light={{
								bgColor: "#676DFF",
							}}
							_dark={{
								bgColor: "#ADADAD",
							}}
						>
							<Text color={"#FFF"} fontSize={"12px"} fontWeight={600}>
								{item.symbol.charAt(0)}
							</Text>
						</Box>
					)}
					<Text
						_light={{
							color: "#16171B",
						}}
						_dark={{
							color: "#FFF",
						}}
						fontSize={"14px"}
						fontWeight={400}
						letterSpacing={"1px"}
						ml="6px"
					>
						{item?.symbol}
					</Text>
				</Box>
			</Td>
			<Td
				_dark={{
					bgColor: "#202020",
					color: "#FFF",
				}}
				_light={{
					bgColor: "#FFFFFF",
					color: "#16171B",
				}}
				fontSize={"14px"}
				fontWeight={400}
				letterSpacing={"1px"}
			>
				{item?.price === undefined ? "-" : item?.price}
			</Td>
			<Td
				_dark={{
					bgColor: "#202020",
					color: "#FFF",
				}}
				_light={{
					bgColor: "#FFFFFF",
					color: "#16171B",
				}}
				fontSize={"14px"}
				fontWeight={"400"}
				letterSpacing={"1px"}
			>
				{item?.value?.toFixed(3)}
			</Td>
			<Td
				_dark={{
					bgColor: "#202020",
					color: "#FFF",
				}}
				_light={{
					bgColor: "#FFFFFF",
					color: "#16171B",
				}}
				fontSize={"14px"}
				fontWeight={"400"}
				letterSpacing={"1px"}
			>
				{Math.trunc(item?.value * item?.price).toLocaleString("en-US", {
					style: "currency",
					currency: "USD",
				})}
			</Td>

			<Td
				_dark={{
					bgColor: "#202020",
					color: "#FFF",
				}}
				_light={{
					bgColor: "#FFFFFF",
					color: "#16171B",
				}}
				fontSize={"14px"}
				fontWeight={"400"}
				letterSpacing={"1px"}
				h="100%"
			>
				<Box display={"flex"} alignItems={"center"} h="100%">
					{item.percentageValue?.toFixed(2)} {"%"}
				</Box>
			</Td>
		</Tr>
	);
};

const TableHeaderRowMobile = () => {
	return (
		<Tr>
			<Th _light={{ bgColor: "#F5F5F7", }} _dark={{ bgColor: "#191919", }}>
				<Box display={"flex"} alignItems={"center"}>
					<Text
						_light={{
							color: "#16171B",
							opacity: "0.8",
						}}
						_dark={{ color: "#A8ADBD" }}
						fontSize={"14px"}
						fontFamily={"Inter"}
						fontWeight={400}
						letterSpacing={"1px"}
						alignItems={"center"}
						textTransform={"capitalize"}
					>
						Token
					</Text>
					<Icon
						ml="3px"
						mt="5px"
						w="10px"
						h="10px"
					// as={useColorModeValue(SortBlackIcon, SortWhiteIcon)}
					></Icon>
				</Box>
			</Th>
			<Th _light={{ bgColor: "#F5F5F7", }} _dark={{ bgColor: "#191919", }}>
				<Box
					display={"flex"}
					alignItems={"center"}
					w="100%"
					justifyContent={"center"}
				>
					<Text
						_light={{
							color: "#16171B",
							opacity: "0.8",
						}}
						_dark={{ color: "#A8ADBD" }}
						fontSize={"14px"}
						fontFamily={"Inter"}
						fontWeight={400}
						letterSpacing={"1px"}
						alignItems={"center"}
						textTransform={"capitalize"}
					>
						Price(USD)
					</Text>
					<ChakraImage
						ml="3px"
						mt="5px"
						w="10px"
						h="10px"
						// as={useColorModeValue(SortBlackIcon, SortWhiteIcon)}
						alt=""
					></ChakraImage>
				</Box>
			</Th>
		</Tr>
	);
};

const TableBodyRowMobileButtonComp = ({ item }) => {
	return (
		<Box display={"flex"} w="100%" justifyContent={"space-between"}>
			<Box
				display={"flex"}
				//flexDirection={"column"}
				alignItems={"center"}
				justifyContent={"space-between"}
			>
				<Box display={"flex"} alignItems={"center"}>
					{!isEmpty(item?.logoUrl) ? (
						<Image
							width={5}
							height={5}
							style={{ borderRadius: "50%" }}
							alt="logo"
							src={item?.logoUrl}
						// unoptimized="true"
						// priority="true"
						/>
					) : (
						<Box
							width={"20px"}
							height={"20px"}
							alignItems={"center"}
							justifyContent={"center"}
							display={"flex"}
							borderRadius={"50%"}
							_light={{
								bgColor: "#676DFF",
							}}
							_dark={{
								bgColor: "#ADADAD",
							}}
						>
							<Text color={"#FFF"} fontSize={"12px"} fontWeight={"600"}>
								{item.symbol.charAt(0)}
							</Text>
						</Box>
					)}
					<Text
						_light={{
							color: "#16171B",
						}}
						_dark={{
							color: "#FFF",
						}}
						fontSize={"14px"}
						fontWeight={"400"}
						letterSpacing={"1px"}
						ml="6px"
					>
						{item?.symbol}
					</Text>
				</Box>
			</Box>
			<Box display={"flex"} alignItems={"end"} justifyContent={"space-between"}>
				<Text
					fontSize={"14px"}
					fontWeight={"400"}
					letterSpacing={"1px"}
					mb="10px"
					mr={"20px"}
					_light={{
						color: "#16171B",
					}}
					_dark={{
						color: "#FFF",
					}}
				>
					{item?.price} USD
				</Text>
			</Box>
		</Box>
	);
};

const TableBodyRowMobilePanelComp = ({ item }) => {
	return (
		<Tr borderBottom={"none"}>
			<Td _light={{ bgColor: "#FFFFFF", }} _dark={{ bgColor: "#202020", }} colSpan={2} borderBottom={"none"} p={1}>
				<Box display={"flex"} flexDirection={"column"}>
					<Box display={"flex"} alignItems={"center"} mb={"15px"}>
						<Text
							fontSize={"14px"}
							fontWeight={"400"}
							letterSpacing={"1px"}
							mr={"20px"}
							_light={{
								color: "#8F8F8F",
							}}
							_dark={{
								color: "#ADADAD",
							}}
						>
							Token / Amount
						</Text>
						<Text
							_dark={{
								color: "#FFF",
							}}
							_light={{
								color: "#16171B",
							}}
							fontSize={"14px"}
							fontWeight={"400"}
							letterSpacing={"1px"}
						>
							{item?.value?.toFixed(3)}
						</Text>
					</Box>
					<Box display={"flex"} alignItems={"center"} mb={"15px"}>
						<Text
							fontSize={"14px"}
							fontWeight={"400"}
							letterSpacing={"1px"}
							mr={"20px"}
							_light={{
								color: "#8F8F8F",
							}}
							_dark={{
								color: "#ADADAD",
							}}
						>
							Value(USD)
						</Text>
						<Text
							_dark={{
								color: "#FFF",
							}}
							_light={{
								color: "#16171B",
							}}
							fontSize={"14px"}
							fontWeight={"400"}
							letterSpacing={"1px"}
						>
							{Math.trunc(item?.value * item?.price).toLocaleString("en-US", {
								style: "currency",
								currency: "USD",
							})}
						</Text>
					</Box>
					<Box display={"flex"} alignItems={"center"} mb={"15px"}>
						<Text
							fontSize={"14px"}
							fontWeight={"400"}
							letterSpacing={"1px"}
							mr={"20px"}
							_light={{
								color: "#8F8F8F",
							}}
							_dark={{
								color: "#ADADAD",
							}}
						>
							% Share
						</Text>
						<Text
							_dark={{
								color: "#FFF",
							}}
							_light={{
								color: "#16171B",
							}}
							fontSize={"14px"}
							fontWeight={"400"}
							letterSpacing={"1px"}
						>
							{item.percentageValue?.toFixed(2)} {"%"}
						</Text>
					</Box>
				</Box>
			</Td>
		</Tr>
	);
};
export default DefiTable;
