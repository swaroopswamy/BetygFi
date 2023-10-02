import { defineStyleConfig } from '@chakra-ui/react'

const Button = defineStyleConfig({
    baseStyle: {
        fontSize: "14px",
        fontWeight: "400",
        lineHeight: "10px",
        borderRadius: "0px"
    },
    variants: {
        base: {},
        light: {
            bg: "#F0F0F5",
            color: "#000000",
            _hover: {
                bg: "#202020",
                color: "#FFFFFF"
            },
            _active: {
                bg: "#202020",
                color: "#FFFFFF"
            }
        },
        dark: {
            bg: "#202020",
            color: "#FFFFFF",
            _hover: {
                bg: "#FFFFFF",
                color: "#000000"
            },
            _active: {
                bg: "#FFFFFF",
                color: "#000000"
            }
        }
    },
    defaultProps: {
        variant: 'base'
    }
})

export default Button;