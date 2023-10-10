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

  // Naming convention diplayAlignItemsJustifyContent
  // For ex flexCenterCenter ==  display= flex alignItems = center justifyContent = center
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
      flexColumnSpaceBetween: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      },
      center: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
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
