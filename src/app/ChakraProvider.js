// app/providers.tsx
"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, useColorModeValue } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import Button from "/src/app/components/button";
import Text from "/src/app/components/text";
import Accordion from "/src/app/components/accordion";

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
  const colors = {
    // Define colors for both light and dark themes

    colors: {
      primary: {
        black: {
          1: "#000000",
          2: "#090909",
          3: "#202020",
          4: "#191919",
          5: "#272727",
          6: "#131313",
        },
        gray: {
          1: "#8F8F8F",
          2: "#888888",
          3: "#676767",
          4: "#E8E8E8",
          5: "#A8ADBD",
          6: "#3A3A3A",
          7: "#FAFAFB",
          8: "#E1E1E1",
          9: "#313131",
          10: "#EDEDED",
          11: "#E7E7E7",
          12: "#C7CAD2",
          13: "#454853",
          14: "#F5F5F7",
          15: "#303030",
          16: "#00000014",
          17: "#DFDFDF",
          18: "#D9D9D9",
          19: "#E0E0E0",
          20: "#CECECE",
          21: "#2F2F2F",
          22: "#ADADAD",
          23: "#6F7383",
          24: "#212121",
          25: "#979AA5",
        },
        white: {
          1: "#FEFEFE",
          2: "#A2A280",
          3: "#ABADBO",
          4: "#FFFFFF",
          5: "#FAFAFA",
          6: "#F0F0F5",
          7: "#D8D8DC",
          8: "#ESEBES",
          9: "#36363A",
        },
        red: {
          1: "#BA8B80",
          2: "#FF3535",
          3: "#EF1E1E",
          4: "#FF7373",
        },
        green: {
          1: "#60C000",
          2: "#245F00",
          3: "#71D268",
          4: "#9ADA8A",
          5: "#55A406",
          6: "#00B913",
        },
        blue: {
          1: "#676DFF",
          2: "#117CCA",
        },
        yellow: {
          1: "#FFD976",
        },
        orange: {
          1: "#FFB287",
        },
        dark: {
          1: "#434347",
          2: "#333333",
          3: "#161718",
          4: "#222222",
          5: "#16171B",
        },
      },
      graph: {
        1: "#29A88E",
        2: "#DE50CF",
        3: "#ACC94C",
        4: "#FF5C00",
        5: "#FF7272",
        6: "#FF9F6A",
        7: "#FFACAC",
        8: "#FFCCAF",
        9: "#C3F0B8",
        10: "#FF5C01",
        11: "#24A48A",
        12: "#3A3D46",
        13: "#00E0FF",
      },
    },
  };

  const theme = extendTheme({
    breakpoints,
    colors,
    components: {
      Button,
      Text,
    },
    layerStyles: {
      spacebetween: {
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
