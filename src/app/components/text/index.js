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
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: "10px",
      color: colorMode === "light" ? "#191919" : "#FFFFFF",
    }),
    tableHead: ({ colorMode }) => ({
      fontFamily: "Inter",
      fontSize: "14px",
      fontWeight: "400",
      lineHeight: "20px",
      letterSpacing: "1.2px",
      color: colorMode === "light" ? "rgba(22, 23, 27, 0.80)" : "#A8ADBD",
    }),
    h6: ({ colorMode }) => ({
      fontSize: "12px",
      fontWeight: "400",
      lineHeight: "20px",
      color: colorMode === "light" ? "#16171B" : "#A8ADBD",
    }),
    h5: ({ colorMode }) => ({
      fontSize: "12px",
      fontWeight: "400",
      lineHeight: "20px",
      color: colorMode === "light" ? "#16171B" : "#FFFFFF",
    }),
    noDataText: ({ colorMode }) => ({
      fontSize: "20px",
      fontWeight: "400",
      lineHeight: "20px",
      letterSpacing: "1px",
      opacity: 0.6,
      color: colorMode === "light" ? "#16171B" : "#FFFFFF",
    }),
    smallTableHeader: ({ colorMode }) => ({
      fontSize: "18px",
      fontWeight: "600",
      lineHeight: "20px",
      color: colorMode === "light" ? "#212121" : "#FFFFFF",
    }),
    smallTableHeaderMobile: ({ colorMode }) => ({
      fontSize: "14px",
      fontWeight: "400",
      lineHeight: "20px",
      fontFamily: "Inter",
      letterSpacing: "1px",
      textTransform: "capitalize",
      color: colorMode === "light" ? "#16171B" : "#A8ADBD",
    }),
    smallTableBodyMobile: ({ colorMode }) => ({
      fontSize: "14px",
      fontWeight: "400",
      lineHeight: "20px",
      fontFamily: "Inter",
      letterSpacing: "1.4px",
      color: colorMode === "light" ? "#16171B" : "#FFF",
    }),
    bigHeading: ({ colorMode }) => ({
      fontSize: "36px",
      fontWeight: "400",
      lineHeight: "46px",
      fontFamily: "Inter",
      color: "#FFF",
    }),
    bigHeading2: ({ colorMode }) => ({
      fontSize: "36px",
      fontWeight: "400",
      lineHeight: "46px",
      fontFamily: "Inter",
      color: colorMode === "light" ? "#000000" : "#FFFFFF",
    }),
    
    content: ({ colorMode }) => ({
      fontSize: "14px",
      fontWeight: "400",
      lineHeight: "26px",
      fontFamily: "Inter",
      color: colorMode === "light" ? "#191919" : "#F0F0F5",
      opacity: "0.8",
    }),
    contentHeading: ({ colorMode }) => ({
      fontSize: "24px",
      fontWeight: "400",
      lineHeight: "20px",
      fontFamily: "Inter",
      color: colorMode === "light" ? "#191919" : "#F0F0F5",
    }),
  },
  defaultProps: {
    variant: "base",
  },
});

export default Text;
