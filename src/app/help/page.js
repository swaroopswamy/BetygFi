"use client";
import React from "react";
import {
	useMediaQuery,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
const MdHelpPage = dynamic(() => import("@components/pages/help/MdHelpPage"), { ssr: false });
const BaseHelpPage = dynamic(() => import("@components/pages/help/BaseHelpPage"), { ssr: false });

const Help = () => {
	const [isMd] = useMediaQuery("(min-width: 768px)");
	return (
		<>
			{
				isMd ?
					<MdHelpPage />
					:
					<BaseHelpPage />
			}
		</>
	);
};
export default Help;
