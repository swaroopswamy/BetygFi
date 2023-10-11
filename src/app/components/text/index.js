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
      fontFamily: "Inter",
      fontSize: { base: "18px", md: "24px" },
      fontWeight: "600",
      lineHeight: "20px",
      letterSpacing: { base: "1.8px", md: "2.4px" },
      color: colorMode === "light" ? "#191919" : "#FFFFFF",
    }),
    h2: ({ colorMode }) => ({
      fontFamily: "Inter",
      fontSize: "18px",
      fontWeight: "600",
      lineHeight: { base: "10px", md: "20px" },
      color: colorMode === "light" ? "#16171B" : "#FFFFFF",
    }),
    h3: ({ colorMode }) => ({
      fontFamily: "Inter",
      fontSize: "14px",
      fontWeight: "400",
      lineHeight: "20px",
      color: colorMode === "light" ? "#16171B" : "#FFFFFF",
    }),
    h4: ({ colorMode }) => ({
      fontFamily: "Inter",
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
      letterSpacing: "1.4px",
      textTransform: "capitalize",
      color: colorMode === "light" ? "rgba(22, 23, 27, 0.80)" : "#A8ADBD",
    }),
    h5: ({ colorMode }) => ({
      fontFamily: "Inter",
      fontSize: "12px",
      fontWeight: "400",
      lineHeight: "20px",
      color: colorMode === "light" ? "#16171B" : "#FFFFFF",
    }),
    h6: ({ colorMode }) => ({
      fontFamily: "Inter",
      fontSize: "12px",
      fontWeight: "400",
      lineHeight: "20px",
      letterSpacing: "1.2px",
      color: colorMode === "light" ? "#16171B" : "#A8ADBD",
    }),
    h7: ({ colorMode }) => ({
      fontFamily: "Inter",
      fontSize: "14px",
      fontWeight: "600",
      lineHeight: "20px",
      color: colorMode === "light" ? "#16171B" : "#FFFFFF",
    }),
    h8: ({ colorMode }) => ({
      fontSize: "14px",
      fontWeight: "400",
      fontFamily: "Inter",
      lineHeight: "20px",
      letterSpacing: "1.4px",
      color: colorMode === "light" ? "#8F8F8F" : "#A8ADBD",
    }),
    h9: ({ colorMode }) => ({
      fontFamily: "Inter",
      fontSize: "14px",
      fontWeight: "400",
      lineHeight: "10px",
      color: colorMode === "light" ? "#16171B" : "#FFFFFF",
    }),
    noDataText: ({ colorMode }) => ({
      fontSize: "17px",
      fontWeight: "400",
      fontFamily: "Inter",
      lineHeight: "20px",
      letterSpacing: "1px",
      opacity: 0.6,
      color: colorMode === "light" ? "#16171B" : "#FFFFFF",
    }),
    NAtext: ({ colorMode }) => ({
      fontSize: "12px",
      fontFamily: "Inter",
      fontWeight: "400",
      lineHeight: "20px",
      color: colorMode === "light" ? "#090909" : "#FFFFFF",
    }),
    smallTableHeader: ({ colorMode }) => ({
      fontFamily: "Inter",
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
    TopWalletsText: ({ colorMode }) => ({
      fontSize: "14px",
      fontWeight: "400",
      lineHeight: "20px",
      fontFamily: "Inter",
      letterSpacing: "1.4px",
      color: colorMode === "light" ? "#191919" : "#FFF",
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
      color: colorMode === "light" ? "#000" : "#FFF",
    }),
    content: ({ colorMode }) => ({
      fontSize: "14px",
      fontWeight: "400",
      lineHeight: "26px",
      fontFamily: "Inter",
      color: colorMode === "light" ? "#191919" : "#FFFFFF",
      opacity: "0.8",
    }),
    contentHeading: ({ colorMode }) => ({
      fontSize: "24px",
      fontWeight: "400",
      lineHeight: "20px",
      fontFamily: "Inter",
      color: colorMode === "light" ? "#191919" : "#FFFFFF",
    }),
    contentHeading2: ({ colorMode }) => ({
      fontSize: "24px",
      fontWeight: "600",
      lineHeight: "20px",
      letterSpacing: "2.4px",
      fontFamily: "Inter",
      color: colorMode === "light" ? "#16171B" : "#FFFFFF",
    }),
    contentHeading3: ({ colorMode }) => ({
      fontSize: "24px",
      fontWeight: "400",
      lineHeight: "46px",
      fontFamily: "Inter",
      color: colorMode === "light" ? "#191919" : "#FFFFFF",
    }),
    contentHeading4: ({ colorMode }) => ({
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: "20px",
      fontFamily: "Inter",
      color: colorMode === "light" ? "#191919" : "#FFFFFF",
    }),
    contentHeading5: ({ colorMode }) => ({
      fontSize: "16px",
      fontWeight: "600",
      lineHeight: "20px",
      fontFamily: "Inter",
      color: colorMode === "light" ? "#191919" : "#FFFFFF",
    }),
    contentHeading6: ({ colorMode }) => ({
      fontSize: "16px",
      fontWeight: "700",
      lineHeight: "20px",
      fontFamily: "Inter",
      color: colorMode === "light" ? "#191919" : "#FFFFFF",
    }),
    contentHeading_MobileOptimization: ({ colorMode }) => ({
      fontSize: "18px",
      fontWeight: "500",
      lineHeight: "20px",
      fontFamily: "Inter",
      color: colorMode === "light" ? "#191919" : "#FFFFFF",
    }),
    TabText: ({ colorMode }) => ({
      fontFamily: "Inter",
      fontSize: { base: "10px", md: "14px" },
      fontWeight: { base: "700", md: "600" },
      lineHeight: "10px",
      textAlign: "center",
      marginRight: { base: "10px", md: "44px" },
    }),
    ThemeText: ({ colorMode }) => ({
      fontSize: "14px",
      fontWeight: "400",
      lineHeight: "20px",
      fontFamily: "Inter",
      letterSpacing: "1.4px",
      textTransform: "uppercase",
      color: colorMode === "light" ? "#191919" : "#FFF",
    }),
    SettingsText1: ({ colorMode }) => ({
      fontSize: "15px",
      fontWeight: "400",
      lineHeight: "20px",
      fontFamily: "Inter",
      textTransform: "capitalize",
      color: colorMode === "light" ? "#191919" : "#FFF",
    }),
    SettingsText2: ({ colorMode }) => ({
      fontSize: "11px",
      fontWeight: "400",
      lineHeight: "20px",
      fontFamily: "Inter",
      opacity: "0.6",
      color: colorMode === "light" ? "#191919" : "#FFF",
    }),
    SettingsText3: ({ colorMode }) => ({
      fontSize: "12px",
      fontWeight: "400",
      lineHeight: "10px",
      fontFamily: "Inter",
      opacity: "0.5",
      color: colorMode === "light" ? "#191919" : "#FFF",
    }),
    SettingsButtonText: ({ colorMode }) => ({
      fontSize: "12px",
      fontWeight: "700",
      lineHeight: "12px",
      fontFamily: "Inter",
      textAlign: "center",
      color: colorMode === "light" ? "#FFFFFF" : "#191919",
    }),
    SettingsButtonText2: ({ colorMode }) => ({
      fontSize: "12px",
      fontWeight: "700",
      lineHeight: "12px",
      fontFamily: "Inter",
      textAlign: "center",
      color: colorMode === "light" ? "#191919" : "#FFFFFF",
    }),
    ConectWalletText: ({ colorMode }) => ({
      fontSize: "14px",
      fontWeight: "600",
      lineHeight: "10px",
      fontFamily: "Inter",
      color: colorMode === "light" ? "#FAFAFB" : "#000",
    }),
    SearchText: ({ colorMode }) => ({
      fontSize: "14px",
      fontWeight: "500",
      lineHeight: "10px",
      fontFamily: "Inter",
      textAlign: "center",
    }),
    extraSmall: ({ colorMode }) => ({
      fontFamily: "Inter",
      fontSize: "13px",
      fontWeight: "400",
      lineHeight: "10px",
      color: "#191919" ,
    }),
  },
  defaultProps: {
    variant: "base",
  },
});

export default Text;
