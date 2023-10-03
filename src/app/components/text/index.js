import { defineStyleConfig } from "@chakra-ui/react";

const Text = defineStyleConfig({
  baseStyle: {
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "20px",
  },
  variants: {
    base: {},
    h1: ({ colorMode }) => ({
      fontSize: { base: "18px", md: "24px" },
      fontWeight: "600",
      lineHeight: "20px",
      letterSpacing: { base: "1.8px", md: "2.4px" },
      color: colorMode === "light" ? "#191919" : "#FFFFFF",
    }),
    h2: ({ colorMode }) => ({
      fontSize: "18px",
      fontWeight: "600",
      lineHeight: { base: "10px", md: "20px" },
      color: colorMode === "light" ? "#16171B" : "#FFFFFF",
    }),
    h3: ({ colorMode }) => ({
      fontSize: "14px",
      fontWeight: "400",
      lineHeight: "20px",
      color: colorMode === "light" ? "#16171B" : "#FFFFFF",
    }),
    h4: ({ colorMode }) => ({
      fontSize: "12px",
      fontWeight: "400",
      lineHeight: "20px",
      color: colorMode === "light" ? "#16171B" : "#A8ADBD",
    }),
  },
  defaultProps: {
    variant: "base",
  },
});

export default Text;
