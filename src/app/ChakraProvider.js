"use client";
import React from "react";
import { CacheProvider } from "@chakra-ui/next-js";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import { colors } from "@util/constant";
import Button from "@/app/components/button";
import Text from "@/app/components/text";

export function Providers({ children }) {
    const breakpoints = {
        base: "0px",
        sm: "320px",
        midSize: "460px",
        md: "768px",
        lg: "960px",
        bigSize: "1164px",
        xl: "1200px",
        "2xl": "1536px",
    };

    // Naming convention diplayAlignItemsJustifyContent
    // For ex flexCenterCenter ==  display= flex alignItems = center justifyContent = center
    const theme = extendTheme({
        initialColorMode:
            localStorage.getItem("chakra-ui-color-mode") || "dark",
        useSystemColorMode: true,
        breakpoints,
        colors,
        components: {
            Button,
            Text,
        },
        semanticTokens: {
            colors: {
                background: {
                    primary: {
                        _light: "#F0F0F5",
                        _dark: "#191919",
                    },
                    secondary: {
                        _light: "#FFFFFF",
                        _dark: "#282828",
                    },
                },
                text: {
                    primary: {
                        _light: "#191919",
                        _dark: "#FFFFFF",
                    },
                    secondary: {
                        _light: "#525252",
                        _dark: "rgba(255, 255, 255, 0.60)",
                    },
                    green: {
                        _light: "#245F00",
                        _dark: "#60C000",
                    },
                    red: {
                        _light: "#C50606",
                        _dark: "#FF3535",
                    },
                },
            },
        },
        layerStyles: {
            spaceBetween: {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            },
            flexCenter: {
                display: "flex",
                alignItems: "center",
            },
            flexColumn: {
                display: "flex",
                flexDirection: "column",
            },
            flexColumnSpaceBetween: {
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
            },
            center: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            },
            flexSpaceBetween: {
                display: "flex",
                justifyContent: "space-between",
            },
            flexAlignCenterJustifyCenter: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            },
            flexCenterSpaceBetween: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
            },
            flexCenterSpaceEvenly: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
            },
            flexCenterFlexStart: {
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
            },
            FlexCenterflexStart: {
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
            },
            FlexColumnCenter: {
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                justifyItems: "center",
            },
        },
    });

    return (
        <CacheProvider>
            <ChakraProvider theme={theme}>{children}</ChakraProvider>
        </CacheProvider>
    );
}
