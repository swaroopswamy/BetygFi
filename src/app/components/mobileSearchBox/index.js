import React from "react";
import { Search2Icon } from "@chakra-ui/icons";
import { Box, Button, Input, InputGroup, InputLeftElement, InputRightAddon, useColorModeValue } from "@chakra-ui/react";

export const MobileSearchBox = ({ ...rest }) => {
	return (
		<Box layerStyle='center' bg={useColorModeValue('#F5F5F7', '#272727')} p={"8px 20px"}>
			<InputGroup>
				<InputLeftElement>
					<Search2Icon
						boxSize={"14px"}
						color={useColorModeValue('#16171B', '#676767')}
					/>
				</InputLeftElement>
				<Input
					border={"1px"}
					borderRadius={"3px"}
					borderColor={useColorModeValue('#E8E8E8', '#333333')}
					bg={useColorModeValue('#F0F0F5', '#191919')}
					color={useColorModeValue("#16171B", "#A8ADBD")} fontSize={"12px"}
					lineHeight={"20px"}
					letterSpacing={"1.2px"}
					{...rest}
				/>
				<InputRightAddon p={0}>
					<Button variant='search' w={"100%"}> Search </Button>
				</InputRightAddon>
			</InputGroup>
		</Box>
	);
};