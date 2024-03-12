"use client";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import {
	Text,
	Box,
	useColorModeValue,
	useColorMode,
	Tr,
	Th,
	Td,
} from "@chakra-ui/react";
import GenericTable from "@components/table";
import { DefiUsersSmallTableHeader } from "@components/pages/defiDashboard/helper";
import LastUpdate from "@components/lastUpdate";

function DefiUsersSmallTable() {
	const defiUsersTableData = useSelector((state) => state?.defiDashboardData?.DefiUsersTableData);

	return (
		<Box
			w={{ base: "100%", lg: "50%" }}
			height={"370px"}
			borderRadius={"6px"}
			bg={useColorModeValue("#FFFFFF", "#202020")}
			borderColor={useColorModeValue("#F0F0F5", "#272727")}
		>
			<Box layerStyle={"spaceBetween"} p={"20px"}>
				<Text variant={"smallTableHeader"}>DeFi Users</Text>

				{/* <Button
                    variant={'viewMore'}
                    onClick={() => {
                        router.push("/defi_dashboard/defi_users");
                    }}
                > View More </Button> */}
			</Box>

			<Box h={"70%"} overflow={"auto"}>
				<GenericTable
					tableHeader={DefiUsersSmallTableHeader}
					tableData={defiUsersTableData}
					TableRow={TableRow}
					TableHeaderRowMobile={TableHeaderRowMobile}
					ButtonComp={(item) => (
						<Box layerStyle={"flexCenter"}>
							<Text variant={"h3"}>
								{item?.item?.user?.split("").join("").substring(0, 8) +
									"..." +
									item?.item?.user?.slice(-5)}
							</Text>
						</Box>
					)}
					PanelComp={() => (<Box></Box>)}
					SkeletonRowsColumnsDesktop={{ numColumns: 1, numRows: 5 }}
					SkeletonRowsColumnsMobile={{ numColumns: 2, numRows: 5 }}
				/>
			</Box>
			<LastUpdate p={"10px"} time={"3"} />
		</Box>
	);
}
export default DefiUsersSmallTable;

const TableRow = ({ item, i }) => {
	const [clicked, setClick] = useState(false);
	const { colorMode } = useColorMode();
	const router = useRouter();
	const commonStyleTdProp = {
		_light: { bgColor: "#FFFFFF", },
		_dark: { bgColor: "#202020", }
	};
	return (
		<>
			<Tr
				key={i}
				cursor={"pointer"}
				bgColor={
					clicked
						? colorMode === "light"
							? "#F5F5F7"
							: "#191919"
						: colorMode === "light"
							? "#FFFFFF"
							: "#202020"
				}
				onClick={() => {
					setClick(!clicked);
					router.push(`/top-wallets/${item.user}`);
				}}
				borderBottom={"1px"}
				borderColor={useColorModeValue("#DFDFDF", "#313131")}
				borderRadius={"2px"}
			>
				<Td {...commonStyleTdProp}>
					<Box alignItems={"center"} display={"flex"} gap={"10px"}>
						<Text
							_dark={{
								color: "#FFFFFF",
							}}
							_light={{
								color: "#16171B",
							}}
							fontSize={"14px"}
							fontStyle={"normal"}
							fontWeight={400}
							lineHeight={"20px"}
						>
							{item?.user}
							{/* {item?.user?.split("").join("").substring(0, 8) +
                "..." +
                item?.user?.slice(-5)} */}
						</Text>
						<Text
							_dark={{
								color: "#A8ADBD",
							}}
							_light={{
								color: "#A8ADBD",
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
			<Th _light={{ bgColor: "#F5F5F7", }} _dark={{ bgColor: "#191919", }}>
				<Box layerStyle={"flexCenter"}>
					<Text variant={"smallTableHeaderMobile"}>User Address</Text>
				</Box>
			</Th>
			{/* <Th _light={{ bgColor: "#F5F5F7", }} _dark={{ bgColor: "#191919", }}>
        <Box layerStyle={"flexAlignCenterJustifyCenter"} w="100%">
          <Text variant={"smallTableHeaderMobile"}>Share</Text>
        </Box>
      </Th> */}
		</Tr>
	);
};
