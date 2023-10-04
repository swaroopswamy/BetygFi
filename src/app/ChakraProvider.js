// app/providers.tsx
"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, useColorModeValue } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import Button from "/src/app/components/button";
import Text from "/src/app/components/text";
import { colors } from "../../util/constant";
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

  const theme = extendTheme({
    breakpoints,
    colors,
    components: {
      Button,
      Text,
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
      flexSpaceBetween: {
        display: "flex",
        justifyContent: "space-between",
      },
      flexAlignCenterJustifyCenter: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
    },
  });

  return (
    <>
      <CacheProvider>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </CacheProvider>
    </>
  );
}
