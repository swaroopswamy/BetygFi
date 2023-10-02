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
            }
        }),
    },
    defaultProps: {
        variant: 'base'
    }
})

export default Button;