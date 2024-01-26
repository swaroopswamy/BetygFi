import { defineStyleConfig } from "@chakra-ui/react";

const Button = defineStyleConfig({
    baseStyle: {
        fontSize: "14px",
        fontWeight: "400",
        lineHeight: "10px",
        borderRadius: "0px",
    },
    variants: {
        base: {},
        defi: ({ colorMode }) => ({
            bg: colorMode === "light" ? "#F0F0F5" : "#202020",
            color: colorMode === "light" ? "#000000" : "#FFFFFF",
            _hover: {
                bg: colorMode === "light" ? "#202020" : "#FFFFFF",
                color: colorMode === "light" ? "#FFFFFF" : "#000000",
            },
            _active: {
                bg: colorMode === "light" ? "#202020" : "#FFFFFF",
                color: colorMode === "light" ? "#FFFFFF" : "#000000",
            },
        }),
        defiMobile: ({ colorMode }) => ({
            bg: colorMode === "light" ? "#F0F0F5" : "#202020",
            color: colorMode === "light" ? "#000000" : "#FFFFFF",
            _active: {
                bg: colorMode === "light" ? "#202020" : "#FFFFFF",
                color: colorMode === "light" ? "#FFFFFF" : "#000000",
            },
        }),
        link: ({ colorMode }) => ({
            bg: colorMode === "light" ? "#F0F0F5" : "#333333",
            color: colorMode === "light" ? "#000000" : "#FFFFFF",
            p: "10px",
        }),
        search: ({ colorMode }) => ({
            bg: colorMode === "light" ? "#F0F0F5" : "#191919",
            border: "1px",
            p: "0",
            borderColor: colorMode === "light" ? "#E8E8E8" : "#333333",
            fontWeight: "500",
            color: colorMode === "light" ? "#000000" : "#FFFFFF",
        }),
        viewMore: ({ colorMode }) => ({
            height: "25px",
            fontSize: "14px",
            bg: colorMode === "light" ? "#D9D9D9" : "#333333",
            border: "0px",
            borderRadius: "1px",
            color: colorMode === "light" ? "#16171B" : "#FFFFFF",
        }),
        menu: ({ colorMode }) => ({
            height: "30px",
            fontSize: "14px",
            bg: colorMode === "light" ? "#F0F0F5" : "#191919",
            border: "1px",
            borderRadius: "1px",
            borderColor: colorMode === "light" ? "#E8E8E8" : "#333333",
            color: colorMode === "light" ? "#16171B" : "#FFFFFF",
            p: "2px 12px",
        }),
        submitModal: ({ colorMode }) => ({
            height: "30px",
            fontSize: "14px",
            bgColor: colorMode === "light" ? "#202020" : "#FFF",
            p: "11px 36px",
            borderRadius: "2px",
            color: colorMode === "light" ? "#FAFAFB" : "#191919",
        }),
        coin: ({ colorMode }) => ({
            bg: colorMode === "light" ? "#F4F4F4" : "#191919",
            border: "1px",
            borderColor:
                colorMode === "light" ? "#C6C6C6" : "rgba(255, 255, 255, 0.60)",
            height: "32px",
            p: "8px 16px",
            borderRadius: "32px",
            fontSize: "14px",
            color: colorMode === "light" ? "#161616" : "#FFFFFF",
            _active: {
                bg: colorMode === "light" ? "#191919" : "#FFFFFF",
                color: colorMode === "light" ? "#FFFFFF" : "#000000",
            },
        }),
        graphButton: ({ colorMode }) => ({
            border: "1px",
            borderRadius: "2px",
            fontSize: "14px",
            lineHeight: "10px",
            color: colorMode === "light" ? "#16171B" : "#FFFFFF",
            p: "0px",
            height: "26px",
            opacity: "0.5",
            borderColor:
                colorMode === "light" ? "#C6C6C6" : "rgba(255, 255, 255, 0.60)",
            _active: {
                border: "1px",
                borderRadius: "2px",
                bg: colorMode === "light" ? "#191919" : "#FFFFFF",
                color: colorMode === "light" ? "#FFFFFF" : "#000000",
                borderColor:
                    colorMode === "light"
                        ? "#C6C6C6"
                        : "rgba(255, 255, 255, 0.60)",
                fontWeight: "600",
                opacity: "1",
            },
        }),
        settingsButton: ({ colorMode }) => ({
            width: "140px",
            height: "30px",
            border: colorMode === "light" ? "1px solid #191919" : "1px solid #FFFFFF",
            borderRadius: "3px",
            bg: colorMode === "light" ? "#FFFFFF" : "#202020",
            color: colorMode === "light" ? "#191919" : "#FFFFFF",
            _active: {
                bg: colorMode === "light" ? "#202020" : "#FFFFFF",
                color: colorMode === "light" ? "#FFFFFF" : "#191919",
            },
        }),
        modalButton: ({ colorMode }) => ({
            bg: colorMode === "light" ? "#FFFFFF" : "#313131",
            color: colorMode === "light" ? "#191919" : "#FFFFFF",
            textAlign: "center",
            fontSize: "14px",
            fontWeight: "600",
            lineHeight: "12px",
            variant: "outline",
            borderRadius: "6px",
            border: "1px",
            _active: {
                bg: colorMode === "light" ? "#191919" : "#FFFFFF",
                color: colorMode === "light" ? "#FFFFFF" : "#191919",
            },
        }),
    },
    defaultProps: {
        variant: "base",
    },
});

export default Button;
