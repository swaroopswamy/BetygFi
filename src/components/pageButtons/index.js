import React from "react";
import { Text, Box, Button, useColorMode } from "@chakra-ui/react";
import Image from "next/image";
const PageButtons = ({ page, totalPages = 0, pageChangeHandler }) => {
	const { colorMode } = useColorMode();

	return (
		<>
			{totalPages !== 0 && (
				<Box
					display={"flex"}
					_dark={{
						bg: "#202020",
					}}
					_light={{
						bg: "#FFFFFF",
					}}
					alignItems={"center"}
					justifyContent={"right"}
					my={"1.25rem"}
					pr={"2.5rem"}
				>
					<Box layerStyle={"flexCenter"} gap={"20px"}>
						<Box layerStyle={"flexCenter"} gap={"5px"}>
							<Text variant={"h3"}>Page</Text>
							<Text variant={"h2"}>{page}</Text>
						</Box>

						<Box display={"flex"}>
							<Button
								bg={colorMode === 'light' ? "#FFFFFF" : "#202020"}
								border={"1px"}
								p={"0px"}
								borderColor={colorMode === 'light' ? "#DDDDDD" : "#454853"}
								onClick={() => {
									if (page > 1) pageChangeHandler(page - 1);
								}}
								cursor={page === 1 ? "not-allowed" : "pointer"}
								disabled={page === 1}
							>
								<Image
									width={15}
									height={15}
									style={{ rotate: "180deg" }}
									src={colorMode === 'light' ?
										"/icons/direction-arrow.svg" :
										"/icons/direction-icon-dark.svg"
									}
									alt="prev-arrow"
								// unoptimized="true"
								// priority="true"
								/>
							</Button>

							<Button
								bg={colorMode === 'light' ? "#FFFFFF" : "#202020"}
								border={"1px"}
								p={"0px"}
								borderColor={colorMode === 'light' ? "#DDDDDD" : "#454853"}
								onClick={() => {
									if (page < totalPages) pageChangeHandler(page + 1);
								}}
								cursor={page === totalPages ? "not-allowed" : "pointer"}
								disabled={page === totalPages}
							>
								<Image
									// unoptimized="true"
									// priority="true"
									width={15}
									height={15}
									alt="next-arrow"
									src={colorMode === 'light' ?
										"/icons/direction-arrow.svg" :
										"/icons/direction-icon-dark.svg"
									}
								/>
							</Button>
						</Box>
					</Box>
				</Box>
			)}
		</>
	);
};
export default PageButtons;
