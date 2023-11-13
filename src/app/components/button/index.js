import { defineStyleConfig } from "@chakra-ui/react";

const Button = defineStyleConfig({
	baseStyle: {
		fontSize: "14px",
		fontWeight: "400",
		lineHeight: "10px",
		borderRadius: "0px"
	},
	variants: {
		base: {},
		defi: ({ colorMode }) => ({
			bg: colorMode === 'light' ? "#F0F0F5" : '#202020',
			color: colorMode === 'light' ? "#000000" : '#FFFFFF',
			_hover: {
				bg: colorMode === 'light' ? "#202020" : '#FFFFFF',
				color: colorMode === 'light' ? "#FFFFFF" : '#000000'
			},
			_active: {
				bg: colorMode === 'light' ? "#202020" : '#FFFFFF',
				color: colorMode === 'light' ? "#FFFFFF" : '#000000'
			},

		}),
		defiMobile: ({ colorMode }) => ({
			bg: colorMode === 'light' ? "#F0F0F5" : '#202020',
			color: colorMode === 'light' ? "#000000" : '#FFFFFF',
			_active: {
				bg: colorMode === 'light' ? "#202020" : '#FFFFFF',
				color: colorMode === 'light' ? "#FFFFFF" : '#000000'
			},
		}),
		link: ({ colorMode }) => ({
			bg: colorMode === 'light' ? "#F0F0F5" : '#333333',
			color: colorMode === 'light' ? "#000000" : '#FFFFFF',
			p: "10px"
		}),
		search: ({ colorMode }) => ({
			bg: colorMode === 'light' ? "#F0F0F5" : "#191919",
			border: "1px",
			p: "0",
			borderColor: colorMode === 'light' ? '#E8E8E8' : '#333333',
			fontWeight: "500",
			color: colorMode === 'light' ? "#000000" : '#FFFFFF'
		}),
		viewMore: ({ colorMode }) => ({
			height: "25px",
			fontSize: "14px",
			bg: colorMode === 'light' ? '#D9D9D9' : '#333333',
			border: "0px",
			borderRadius: "1px",
			color: colorMode === 'light' ? '#16171B' : '#FFFFFF'
		}),
		menu: ({ colorMode }) => ({
			height: "30px",
			fontSize: "14px",
			bg: colorMode === 'light' ? '#F0F0F5' : '#191919',
			border: "1px",
			borderRadius: "1px",
			borderColor: colorMode === 'light' ? '#E8E8E8' : '#333333',
			color: colorMode === 'light' ? '#16171B' : '#FFFFFF',
			p: "2px 12px"
		})
	},
	defaultProps: {
		variant: 'base'
	}
});

export default Button;