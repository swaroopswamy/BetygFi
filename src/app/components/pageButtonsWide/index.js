import React from "react";
import { Text, Box, useColorMode, Input, Menu, MenuButton, MenuList, MenuItem, 
	Button, useColorModeValue } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import LastUpdate from "../lastUpdate";

const PageButtonsWide = ({ page, totalPages = 0, pageChangeHandler, tableLimit, setTableLimit, time, ...rest }) => {
	// const { colorMode } = useColorMode();

	if (totalPages === 0) {
		return;
	}

	return (
		<>
			<Box display={{ base: "none", md: "flex" }} 
				justifyContent={"space-between"} alignItems={"center"} {...rest}>
				<LastUpdate
					time={time}
				/>

				<Box display={"flex"} justifyContent={"space-evenly"} alignItems={"center"} gap={"8px"}>
					<Buttons
						page={page}
						pageChangeHandler={pageChangeHandler}
						totalPages={totalPages}
					/>
				</Box>

				<Box layerStyle={"center"} gap={"8px"}>
					<Text variant={"h3"}> Show </Text>

					<TableLimitMenu
						tableLimit={tableLimit}
						setTableLimit={setTableLimit}
					/>
				</Box>

			</Box>

			<Box display={{ base: "flex", md: "none" }} flexDir={"column"} my={"10px"} g
				ap={"30px"} justifyContent={"space-between"} alignItems={"center"} {...rest}>
				<Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} w={"100%"}>
					<LastUpdate time={time} />

					<TableLimitMenu
						tableLimit={tableLimit}
						setTableLimit={setTableLimit}
					/>
				</Box>

				<Box display={"flex"} justifyContent={"space-evenly"} alignItems={"center"} gap={"8px"} w={"80%"}>
					<Buttons
						page={page}
						pageChangeHandler={pageChangeHandler}
						totalPages={totalPages}
					/>
				</Box>
			</Box>
		</>
	);
};

export default PageButtonsWide;

const Buttons = ({ page, pageChangeHandler, totalPages }) => {
	const { colorMode } = useColorMode();

	return (
		<>
			<RoundButton opacity={"0.4"}
				cursor={page > 1 ? "pointer" : "not-allowed"}
				onClick={() => {
					pageChangeHandler(1);
				}}
			>
				<ArrowLeftIcon
					boxSize={"12px"}
				/>
			</RoundButton>

			<RoundButton opacity={"0.4"}
				cursor={page > 1 ? "pointer" : "not-allowed"}
				onClick={() => {
					pageChangeHandler(page - 1);
				}}
			>
				<ChevronLeftIcon />
			</RoundButton>

			<Box layerStyle={"center"} gap={"8px"}>
				<Input
					p={"8px 15px"}
					borderRadius={"0px"}
					borderColor={colorMode === 'light' ? "#E8E8E8" : "#454853"}
					background={colorMode === 'light' ? "#F0F0F5" : "#191919"}
					width={"65px"}
					height={"30px"}
					type="number"
					onChange={(e) => {
						let value = e.target.value;
						if (value < 0) {
							value = 1;
						}
						if (value > totalPages) {
							value = totalPages;
						}
						pageChangeHandler(value);
					}}
					value={page}
					textAlign={"center"}
				></Input>

				<Text variant={"h3"}>
          of {totalPages} pages
				</Text>
			</Box>

			<RoundButton opacity={"1"}
				cursor={page < totalPages ? "pointer" : "not-allowed"}
				onClick={() => {
					pageChangeHandler(page + 1);
				}}
			>
				<ChevronRightIcon />
			</RoundButton>

			<RoundButton opacity={"1"}
				cursor={page < totalPages ? "pointer" : "not-allowed"}
				onClick={() => {
					pageChangeHandler(totalPages);
				}}
			>
				<ArrowRightIcon
					boxSize={"12px"}
				/>
			</RoundButton>
		</>
	);
};

const TableLimitMenu = ({ tableLimit, setTableLimit }) => {
	return (
		<Menu>
			<MenuButton as={Button} variant={"menu"}>
				<Box layerStyle={"spaceBetween"} >
					{tableLimit} / Page
					<ChevronDownIcon />
				</Box>
			</MenuButton>
			<MenuList
				boxShadow={"0px 5px 4px 0px rgba(0, 0, 0, 0.10)"}
				bgColor={useColorModeValue("#FFF", "#191919")}
				minWidth={"50px"}
			>
				<PageMenuItem onClick={() => { setTableLimit(10); }}> 10 / Page </PageMenuItem>
				<PageMenuItem onClick={() => { setTableLimit(20); }}> 20 / Page </PageMenuItem>
				<PageMenuItem onClick={() => { setTableLimit(30); }}> 30 / Page </PageMenuItem>
			</MenuList>
		</Menu>
	);
};

const RoundButton = ({ children, ...rest }) => {
	const { colorMode } = useColorMode();

	return (
		<Box
			layerStyle={"center"}
			bg={colorMode === 'light' ? '#FFFFFF' : '#191919'}
			minW={"32px"}
			minH={"32px"}
			borderRadius={"50%"}
			border={colorMode === 'light' ? "1px solid rgba(241, 241, 241, 1)" : "1px solid rgba(51, 51, 51, 1)"}
			cursor={"pointer"}
			{...rest}
		>
			{children}
		</Box>
	);
};

const PageMenuItem = ({ children, ...rest }) => {
	const { colorMode } = useColorMode();

	return (
		<MenuItem
			bgColor={colorMode === "light" ? "#FFF" : "#191919"}
			_hover={{
				bg: colorMode === "light" ? "#F5F5F7" : "#202020",
			}}
			minW={"100px"}
			{...rest}
		>
			<Text variant={"h3"} color={colorMode === 'light' ? '#191919' : '#FFFFFF'}>
				{children}
			</Text>
		</MenuItem>
	);
};
