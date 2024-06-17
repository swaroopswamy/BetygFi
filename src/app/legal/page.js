"use client";
import React, { useState } from "react";
import { useMediaQuery } from "@chakra-ui/react";

import dynamic from "next/dynamic";
const MdLegalPage = dynamic(() => import("@components/pages/legal/MdLegalPage", { ssr: false }));
const BaseLegalPage = dynamic(() => import("@components/pages/legal/BaseLegalPage", { ssr: false }));


const Legal = () => {
	const [isMd] = useMediaQuery("(min-width: 768px)");

	const [tabIndex, setTabIndex] = useState(0);

	return (
		<>
			{
				isMd
					?
					<MdLegalPage tabIndex={tabIndex} setTabIndex={setTabIndex} />
					:
					<BaseLegalPage tabIndex={tabIndex} setTabIndex={setTabIndex} />
			}
		</>
	);
};

export default Legal;



