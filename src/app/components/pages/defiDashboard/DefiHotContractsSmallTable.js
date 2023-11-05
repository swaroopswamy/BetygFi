/* eslint-disable max-len */
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Text, Box, useColorModeValue, useColorMode, Tr, Th, Td } from "@chakra-ui/react";
import GenericTable from "@/app/components/table";
import { DefiUsersSmallTableHeader } from "@/app/components/pages/defiDashboard/helper";
import LastUpdate from "@/app/components/lastUpdate";
import TooltipComp from "@/app/components/tooltipComp";

function DefiHotContractsSmallTable() {

	return (
		<Box w={{ base: "100%", lg: "50%" }} height={"370px"} borderRadius={"6px"} 
			bg={useColorModeValue("#FFFFFF", "#202020")} borderColor={useColorModeValue("#F0F0F5", "#272727")}>
			<Box layerStyle={"spaceBetween"} p={"20px"} >
				<Box layerStyle={"center"} gap={"5px"}>
					<Text variant={"smallTableHeader"}>
                        DeFi Hot/Active Contracts
					</Text>
					<TooltipComp label="DeFi Hot/Active contract is a list of the most interacted smart contract address(es) by wallet address(es)." />
				</Box>

				{/* <Button
                    variant={'viewMore'}
                    onClick={() => {
                        router.push("/defi_dashboard/defi_users");
                    }}
                > View More </Button> */}
			</Box>

			<Box h={"70%"} overflow={"hidden"}>
				<GenericTable
					tableHeader={DefiUsersSmallTableHeader}
					tableData={null}
					TableRow={TableRow}
					TableHeaderRowMobile={TableHeaderRowMobile}
					ButtonComp={(item) => {
						return (
							<Box layerStyle={"flexCenter"}>
								<Text variant={"h3"}> {item?.item?.user} </Text>
							</Box>
						);
					}}
					PanelComp={() => {
						return (
							<Box>

							</Box>
						);
					}}
					SkeletonRowsColumnsDesktop={{
						numColumns: 3,
						numRows: 5
					}}
					SkeletonRowsColumnsMobile={{
						numColumns: 2,
						numRows: 5
					}}
				/>
			</Box>

			<LastUpdate p={"10px"} time={"3"} />
		</Box>
	);
}
export default DefiHotContractsSmallTable;

const TableRow = ({ item, i }) => {
	const [clicked, setClick] = useState(false);
	const { colorMode } = useColorMode();
	const router = useRouter();

	return (
		<>
			<Tr
				key={i}
				cursor={"pointer"}
				bgColor={clicked ?
					(colorMode === "light" ? '#F5F5F7' : '#191919') :
					(colorMode === "light" ? '#FFFFFF' : '#202020')
				}

				onClick={() => {
					setClick(!clicked);
					router.push(`/wallet_dashboard?address=${item.user}`);
				}}
				borderBottom={'1px'}
				borderColor={useColorModeValue('#DFDFDF', '#313131')}
				borderRadius={'2px'}
			>
				<Td>
					<Box
						alignItems={"center"}
						display={"flex"}
						gap={"10px"}
					>
						<Text
							_dark={{
								color: "#FFFFFF"
							}}
							_light={{
								color: "#16171B"
							}}
							fontSize={"14px"}

							fontStyle={"normal"}
							fontWeight={400}
							lineHeight={"20px"}
						>
							{item?.user}
						</Text>
						<Text
							_dark={{
								color: "#A8ADBD"
							}}
							_light={{
								color: "#A8ADBD"
							}}
							fontSize={"12px"}
							fontStyle={"normal"}
							fontWeight={400}
							lineHeight={"20px"}
							textTransform={"uppercase"}
						>
							{item?.amount}
						</Text>
					</Box>
				</Td>
			</Tr>
		</>
	);
};

const TableHeaderRowMobile = () => {
	return (
		<Tr>
			<Th>
				<Box layerStyle={"flexCenter"}>
					<Text variant={"smallTableHeaderMobile"}>User Address</Text>
				</Box>
			</Th>
			<Th>
				<Box layerStyle={"flexAlignCenterJustifyCenter"} w="100%">
					<Text variant={"smallTableHeaderMobile"}>Share</Text>
				</Box>
			</Th>
		</Tr>
	);
};
