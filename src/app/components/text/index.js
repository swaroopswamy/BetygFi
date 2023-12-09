import { defineStyleConfig } from "@chakra-ui/react";

const Text = defineStyleConfig({
    baseStyle: {
        fontSize: "14px",
        fontWeight: "400",
        lineHeight: "20px",
    },
    variants: {
        base: {},
        h0: ({ colorMode }) => ({
            fontFamily: "Inter",
            fontSize: "28px",
            fontWeight: "400",
            color: colorMode === "light" ? "#161616" : "#FFFFFF",
        }),
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
        h5: () => ({
            fontFamily: "Inter",
            fontSize: "12px",
            fontWeight: "400",
            lineHeight: "20px",
        }),
        h6: () => ({
            fontSize: "14px",
            fontWeight: "400",
            fontFamily: "Inter",
            lineHeight: "20px",
            letterSpacing: "1.4px",
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
        noDataText: ({ colorMode }) => ({
            fontSize: "17px",
            fontWeight: "400",
            fontFamily: "Inter",
            lineHeight: "20px",
            letterSpacing: "1px",
            opacity: 0.6,
            color: colorMode === "light" ? "#16171B" : "#FFFFFF",
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
        bigHeading: () => ({
            fontSize: "36px",
            fontWeight: "400",
            lineHeight: "46px",
            fontFamily: "Inter",
        }),
        content: ({ colorMode }) => ({
            fontSize: "14px",
            fontWeight: "400",
            lineHeight: "26px",
            fontFamily: "Inter",
            color: colorMode === "light" ? "#191919" : "#FFFFFF",
            opacity: "0.8",
        }),
        footnoteText: ({ colorMode }) => ({
            fontSize: "10px",
            fontWeight: "400",
            lineHeight: "15px",
            fontFamily: "Inter",
            color: colorMode === "light" ? "#191919" : "#FFFFFF",
            // opacity: "0.8",
        }),
        contentHeading: ({ colorMode }) => ({
            fontSize: "24px",
            fontWeight: "400",
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
            fontSize: "16px",
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
        TabText: () => ({
            fontFamily: "Inter",
            fontSize: { base: "10px", md: "14px" },
            fontWeight: { base: "700", md: "600" },
            lineHeight: "10px",
            textAlign: "center",
            marginRight: { base: "10px", md: "44px" },
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
            fontsize: "11px",
            fontFamily: "Inter",
            fontWeight: "400",
            lineHeight: "20px",
            opacity: "0.6",
            color: colorMode === "light" ? "#191919" : "#FFF",
        }),
        SettingsText3: ({ colorMode }) => ({
            fontsize: "12px",
            fontFamily: "Inter",
            fontWeight: "400",
            lineHeight: "10px",
            opacity: "0.5",
            color: colorMode === "light" ? "#191919" : "#FFF",
        }),
        SettingsButtonText: () => ({
            fontSize: "12px",
            fontWeight: "700",
            lineHeight: "12px",
            fontFamily: "Inter",
            textAlign: "center",
        }),
        SearchText: () => ({
            fontSize: "14px",
            lineHeight: "10px",
            fontFamily: "Inter",
            textAlign: "center",
        }),
        extraSmall: () => ({
            fontFamily: "Inter",
            fontSize: "13px",
            fontWeight: "400",
            lineHeight: "10px",
            color: "#191919",
        }),
        customModalHeader: (colorMode) => ({
            fontSize: "24px",
            fontFamily: "Inter",
            fontWeight: "400",
            color: colorMode === "light" ? "#FFF" : "#161616",
        }),
        dropdownName: (colorMode) => ({
            fontFamily: "Inter",
            fontWeight: "400",
            color: colorMode === "light" ? "#FFF" : "#525252",
            lineHeight: "16px",
            letterSpacing: "0.32px",
            fontSize: "12px",
        }),
        boldHeader: (colorMode) => ({
            fontFamily: "Inter",
            fontWeight: "700",
            color: colorMode !== "light" ? "#161616" : "#FFF",
            fontSize: "14px",
        }),
        secondaryContent: (colorMode) => ({
            fontFamily: "Inter",
            fontWeight: "400",
            color: colorMode !== "light" ? "#525252" : "#FFF",
            fontSize: "12px",
        }),
        linkPrimary: () => ({
            fontFamily: "Inter",
            fontWeight: "400",
            color: "#117CCA",
            fontSize: "14px",
        }),
        h1new: ({ colorMode }) => ({
            fontSize: "28px",
            fontFamily: "Inter",
            fontWeight: "400",
            lineHeight: "36px",
            color: colorMode === "light" ? "#161616" : "#FFF",
        }),
        greySmallText: ({ colorMode }) => ({
            fontSize: "10px",
            fontFamily: "Inter",
            fontWeight: "400",
            letterSpacing: "0.5px",
            color: colorMode === "light" ? "rgba(25, 25, 25, 0.60)" : "#FFF",
        }),
        tableHead2: ({ colorMode }) => ({
            fontSize: "14px",
            color: colorMode === "light" ? "#161616" : "#FFF",
            lineHeight: "18px",
            letterSpacing: "0.16px",
        }),
        modalHeader: ({ colorMode }) => ({
            color: colorMode === "light" ? "#000" : "#FFFFFF",
            fontFamily: "Inter",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "16px",
            letterSpacing: "0.32px",
        }),
        modalTableHeader: ({ colorMode }) => ({
            color: colorMode === "light" ? "#757575" : "#A5A5A5",
            fontFeatureSettings: "'cv11' on, 'cv01' on, 'ss01' on",
            fontFamily: "Inter",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "20px",
        }),
        modalTableData: ({ colorMode }) => ({
            color: colorMode === "light" ? "#191919" : "#FFFFFF",
            fontFeatureSettings: "'cv11' on, 'cv01' on, 'ss01' on",
            fontFamily: "Inter",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "20px",
        }),
        modalTableDataShort: ({ colorMode }) => ({
            color: colorMode === "light" ? "#757575" : "#A5A5A5",
            fontFeatureSettings: "'cv11' on, 'cv01' on, 'ss01' on",
            fontFamily: "Inter",
            fontSize: "12px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "20px",
        }),
    },
    defaultProps: {
        variant: "base",
    },
});

export default Text;
