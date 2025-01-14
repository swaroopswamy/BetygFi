import React from "react";
import { Tooltip, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";

function GenericInfoTooltip({ label }) {
	return (
		<Tooltip
			bgColor={useColorModeValue(
				"rgba(97, 97, 97, 0.92)",
				"colors.primary.white.4"
			)}
			className="tooltip-styles"
			label={label}
		>
			<Image
				// unoptimized="true"
				// priority="true"
				className="tooltip-img"
				src={"/icons/info_sm_icon.svg"}
				width={12}
				height={12}
				alt={"info-icon"}
			/>
		</Tooltip>
	);
}

export default GenericInfoTooltip;
