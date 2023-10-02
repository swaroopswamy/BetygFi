// app/providers.tsx
"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, useColorModeValue } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import Button from "/src/app/components/button";

export function Providers({ children }) {
  const breakpoints = {
    base: "0px",
    sm: "320px",
    midSize:"460px",
    md: "768px",
    lg: "960px",
    bigSize:"1164px",
    xl: "1200px",
    "2xl": "1536px",
  };

  const theme = extendTheme({ 
    breakpoints,
    components: {
      Button
    },
    layerStyles: {
      one: {
        bg: {
          light: '#FFFFFF',
          dark: '#191919'
        },
        border: '0px',
      }
    },
    textStyles: {
      h1: {
        fontSize: {base: '18px', md:'24px'},
        fontWeight: '600',
        lineHeight: '20px',
        letterSpacing: {base: '1.8px', md: '2.4px'},
        color: {
          light: '#191919',
          dark: '#FFFFFF'
        }
      },
      body: {
        fontSize: '14px',
        fontWeight: '400',
        lineHeight: '20px',
        letterSpacing: {base: '1.2px', md: '1.4px'},
        color: {
          light: '#16171B',
          dark: '#A8ADBD'
        }
      },
      h4: {
        fontSize: '10px',
        fontWeight: '400',
        lineHeight: '20px',
        letterSpacing: '1.4px',
        color: {
          light: '#191919',
          dark: '#FFFFFF'
        }
      }
    }
  });
  
  return (
    <>
      <CacheProvider>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </CacheProvider>
    </>
  );
}
