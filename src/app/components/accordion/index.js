import React from "react";
import {
	AccordionButton,
	Accordion,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	useColorModeValue,
} from "@chakra-ui/react";

export const SingleAccordionComp = ({ ButtonComp, PanelComp, ...rest }) => {
	return (
		<Accordion
			{...rest}
			allowToggle
			layerStyle={"spaceBetween"}
			bg={useColorModeValue("#FFFFFF", "#202020")}
			border={"1px"}
			borderColor={useColorModeValue("#FFFFFF", "#272727")}
			borderRadius={"6px"}
		>
			<AccordionItem w={"100%"} border={"0px"}>
				<AccordionButton layerStyle={"spaceBetween"}>
					<ButtonComp />
					<AccordionIcon />
				</AccordionButton>
				<AccordionPanel>
					<PanelComp />
				</AccordionPanel>
			</AccordionItem>
		</Accordion>
	);
};
