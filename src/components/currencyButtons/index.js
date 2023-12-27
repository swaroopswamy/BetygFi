
import React from "react";
import { Box, Text, } from "@chakra-ui/react";

function CurrencyButtons({ currencySelected, CurrencyTypeHandler, colorMode }) {
	const currencies = ["USD", "BTC", "ETH"];

	return (
		<>
			{currencies.map((currency, i) => (
				<Box
					key={currency}
					position={"relative"}
					padding={"7px 8px"}
					border={"1px"}
					borderRadius={"2px"}
					_light={{ borderColor: "#E0E0E0" }}
					_dark={{ borderColor: "#C6C6C6" }}
					borderRight={i !== 2 && 'none'}
					display={"flex"}
					alignItems={"center"}
					cursor={"pointer"}
					onClick={() => {
						CurrencyTypeHandler(currency);
					}}
					_after={
						currencySelected === currency && {
							bgColor: colorMode === "light" ? "#F5F5F7" : "#191919",
						}
					}
					bgColor={
						currencySelected === currency
							?
							// colorMode === "light"
							// 	? "#191919"
							// 	: 
							"#191919"
							: colorMode === "light"
								? "#FFFFFF"
								: "#202020"
					}
				>
					<Text
						fontSize={"14px"}
						lineHeight={"10px"}
						_light={{
							color: currencySelected === currency ? "#FFFFFF" : "#16171B"
						}}
						_dark={{
							color: /* currencySelected === currency ? "#FFFFFF" : */ "#FFFFFF",
							opacity: currencySelected === currency ? 1 : 0.5
						}}
						fontWeight={currencySelected === currency ? 600 : 400}
					>
						{currency}
					</Text>
				</Box>
			))}
		</>
	);
}

export default CurrencyButtons;
