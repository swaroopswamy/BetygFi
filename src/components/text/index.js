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
        contentHeading4: ({ colorMode }) => ({
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
            color: colorMode === "light" ? "#191919" : "#FFFFFF",
        }),
        SettingsText2: ({ colorMode }) => ({
            fontsize: "11px",
            fontFamily: "Inter",
            fontWeight: "400",
            lineHeight: "20px",
            opacity: "0.6",
            color: colorMode === "light" ? "#191919" : "#FFFFFF",
        }),
        SettingsText3: ({ colorMode }) => ({
            fontsize: "12px",
            fontFamily: "Inter",
            fontWeight: "400",
            lineHeight: "normal",
            color: colorMode === "light" ? "#757575" : "#A5A5A5",
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
        customModalHeader: ({ colorMode }) => ({
            fontSize: "24px",
            fontFamily: "Inter",
            fontWeight: "400",
            color: colorMode !== "light" ? "#FFFFFF" : "#161616",
        }),
        dropdownName: ({ colorMode }) => ({
            fontFamily: "Inter",
            fontWeight: "400",
            color: colorMode !== "light" ? "#FFFFFF" : "#525252",
            lineHeight: "16px",
            letterSpacing: "0.32px",
            fontSize: "12px",
        }),
        boldHeader: ({ colorMode }) => ({
            fontFamily: "Inter",
            fontWeight: "700",
            color: colorMode !== "light" ? "#161616" : "#FFFFFF",
            fontSize: "14px",
        }),
        secondaryContent: ({ colorMode }) => ({
            fontFamily: "Inter",
            fontWeight: "400",
            color: colorMode !== "light" ? "#525252" : "#FFFFFF",
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
            color: colorMode === "light" ? "#161616" : "#FFFFFF",
        }),
        greySmallText: ({ colorMode }) => ({
            fontSize: "10px",
            fontFamily: "Inter",
            fontWeight: "400",
            letterSpacing: "0.5px",
            color: colorMode === "light" ? "rgba(25, 25, 25, 0.60)" : "#FFFFFF",
        }),
        tableHead2: ({ colorMode }) => ({
            fontSize: "14px",
            color: colorMode === "light" ? "#161616" : "#FFFFFF",
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
        modalTableHeader: ({ colorMode, fontSize }) => ({
            color: colorMode === "light" ? "#757575" : "#A5A5A5",
            fontFeatureSettings: "'cv11' on, 'cv01' on, 'ss01' on",
            fontFamily: "Inter",
            fontSize: fontSize || "16px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "20px",
        }),
        modalTableData: ({ colorMode, fontSize }) => ({
            color: colorMode === "light" ? "#191919" : "#FFFFFF",
            fontFeatureSettings: "'cv11' on, 'cv01' on, 'ss01' on",
            fontFamily: "Inter",
            fontSize: fontSize || "16px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "20px",
        }),
        modalTableDataShort: ({ colorMode, fontSize }) => ({
            color: colorMode === "light" ? "#757575" : "#A5A5A5",
            fontFeatureSettings: "'cv11' on, 'cv01' on, 'ss01' on",
            fontFamily: "Inter",
            fontSize: fontSize || "12px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "20px",
        }),
        toastText: ({ colorMode }) => ({
            fontSize: "14px",
            fontWeight: "400",
            lineHeight: "26px",
            fontFamily: "Inter",
            color: colorMode === "light" ? "#FFFFFF" : "#191919",
        }),
        bigText: ({ colorMode }) => ({
            color: colorMode === "light" ? "#191919" : "#FFFFFF",
            fontFamily: "Inter",
            fontSize: "32px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "36px",
        }),
        profileText: () => ({
            fontFamily: "Poppins",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            fontSize: "16px",
            fontWeight: "400",

            lineHeight: "normal",
        }),
        bigTextNumber: ({ colorMode }) => ({
            color: colorMode === "light" ? "#191919" : "#FFFFFF",
            fontFamily: "Inter",
            fontSize: "34px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "normal",
        }),
        approachPaperHeading: ({ colorMode }) => ({
            color: colorMode === "light" ? "#191919" : "#FFFFFF",
            fontFamily: "Inter",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "normal",
        }),
        smApproachSmallHeading: () => ({
            fontFamily: "Inter",
            fontSize: "16px",
            fontWeight: "600",
            lineHeight: "26px",
            color: "#3F3F41",
        }),
        smApproachSmallText: ({ colorMode }) => ({
            color: colorMode === "light" ? "#333" : "#EEE",
            fontFamily: "Inter",
            textAlign: "justify",
            fontSize: "16px",
            fontWeight: "400",
            lineHeight: "28px",
        }),
        footNoteText: ({ colorMode }) => ({
            fontFamily: "Inter",
            fontSize: "14px",
            fontWeight: "400",
            lineHeight: " normal",
            color: colorMode === "light" ? "#666666" : "#EFEFEF",
        }),
        smallText: () => ({
            fontSize: "10px",
            fontFamily: "Inter",
            fontWeight: "400",
            letterSpacing: "0.5px",
            color: "#FFFFFF",
        }),
        textBold: ({ colorMode }) => ({
            fontFamily: "Inter",
            fontSize: "14px",
            fontWeight: "600",
            color: colorMode !== "light" ? "#FFFFFF" : "#191919",
            lineHeight: "24px"
        }),
        ent_title: () => ({
            fontSize: "64px",
            fontStyle: "normal",
            fontWeight: "500",
            fontFamily: "Montserrat",
            color: "#DADADA",
            lineHeight: "100%",
            letterSpacing: "-1.92px",
            textAlign: "center"
        }),
        ent_subtitle: () => ({
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: "400",
            color: "#DADADA",
            textAlign: "center"
        }),
        ent_feature_title: () => ({
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: "500",
            color: "#DADADA",
            letterSpacing: "-0.16px",
        }),
        ent_feature_desc: () => ({
            fontSize: "14px",
            fontWeight: "400",
            color: "#DADADA",
        }),
        ent_md_title: () => ({
            fontSize: "32px",
            fontStyle: "normal",
            fontFamily: "Montserrat",
            fontWeight: "700",
            color: "#DADADA",
            lineHeight: "38px",
            letterSpacing: "-0.32px",
        }),
        campaign_title: () => ({
            fontSize: { base: "32px", lg: "64px" },
            fontStyle: "normal",
            fontWeight: "700",
            fontFamily: "Raleway",
            color: "#DADADA",
            lineHeight: { base: "38px", lg: "78px" },
            letterSpacing: "-1.28px",
            textAlign: "left"
        }),
        campaign_sm_text: () => ({
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "400",
            fontFamily: "DM Sans",
            color: "#FFFFFF",
            lineHeight: "24px",
        }),
        campaign_big_text: () => ({
            fontSize: { base: "24px", lg: "48px" },
            fontStyle: "normal",
            fontWeight: "700",
            fontFamily: "DM Sans",
            color: "#23262F",
            lineHeight: { base: "28px", lg: "56px" },
            letterSpacing: "-0.96px",
            textTransform: "capitalize"
        }),
        campaign_feature_heading: () => ({
            fontSize: { base: "16px", lg: "32px" },
            fontStyle: "normal",
            fontWeight: "700",
            fontFamily: "DM Sans",
            color: "#23262F",
            lineHeight: "24px",
            textTransform: "capitalize"
        }),
        campaign_private_use_name: () => ({
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: "700",
            fontFamily: "DM Sans",
            color: "#23262F",
            lineHeight: "28px",
            textTransform: "capatalize"
        }),
        campaign_12_text: () => ({
            fontSize: "12px",
            fontStyle: "normal",
            fontWeight: "700",
            fontFamily: "DM Sans",
            color: "#1454B2",
            lineHeight: "20px",
            letterSpacing: "1.2px",
            textTransform: "uppercase"
        }),
        cookie_description: ({ colorMode }) => ({
            color: colorMode === "light" ? "#333" : "#FFFFFF",
            fontFamily: "Inter",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "20px",
        }),
        cookie_subheading: ({ colorMode }) => ({
            color: colorMode === "light" ? "#191919" : "#FFFFFF",
            fontFamily: "Inter",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "18px",
            letterSpacing: "0.16px",
        }),
        cookie_item_heading: ({ colorMode }) => ({
            color: colorMode === "light" ? "#191919" : "#FFFFFF",
            fontFamily: "Inter",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "20px",
        }),
        cookie_heading_1: ({ colorMode }) => ({
            color: colorMode === "light" ? "#191919" : "#FFFFFF",
            fontFeatureSettings: 'clig off, liga off',
            fontFamily: "Inter",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "28px",
            letterSpacing: "0.444px",
        }),
        cookie_heading_2: ({ colorMode }) => ({
            color: colorMode === "light" ? "#191919" : "#FFFFFF",
            fontFeatureSettings: 'clig off, liga off',
            fontFamily: "Inter",
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "28px",
        }),
        cookie_description_2: ({ colorMode }) => ({
            color: colorMode === "light" ? "#333" : "#FFFFFF",
            fontFamily: "Inter",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal",
            letterSpacing: "0.7px",
        }),
        cookies_footer: ({ colorMode }) => ({
            color: colorMode === "light" ? "#191919" : "#FFFFFF",
            textAlign: "center",
            fontFeatureSettings: 'clig off, liga off',
            fontFamily: "Inter",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "16px",
            letterSpacing: "0.16px",
            textTransform: "capitalize",
        }),
        converter_heading: ({ colorMode }) => ({
            color: colorMode === "light" ? "#191919" : "#FFFFFF",
            fontSize: "20px",
            fontFamily: "Inter",
            lineHeight: "36px",
            letterSpacing: "0px",
            fontWeight: "500",
        }),
        converter_coin_ship: ({ colorMode }) => ({
            color: colorMode === "light" ? "#4682B4" : "#4682B4",
            fontFeatureSettings: 'salt on, liga off',
            fontFamily: "Inter",
            fontSize: "14px",
            fontStyle: "normal",
            lineHeight: "18.49px",
            fontWeight: "500",
        }),
        converter_main_price: ({ colorMode }) => ({
            color: colorMode === "light" ? "#191919" : "#FFFFFF",
            fontFeatureSettings: 'salt on, liga off',
            fontFamily: "Inter",
            fontSize: "32px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "24px",
        }),
        converter_price_inc_dec: ({ colorMode, type }) => ({
            color: colorMode === "light" ? (type === "decrease" ? "#FF0000" : "#245F00") : (type === "decrease" ? "#FF0000" : "#245F00"),
            fontFamily: 'Inter',
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: '500',
        }),
        converter_trending_coin_percent_change: ({ colorMode, type }) => ({
            color: colorMode === "light" ? (type === "decrease" ? "#FF0000" : "#245F00") : (type === "decrease" ? "#FF0000" : "#245F00"),
            fontFamily: 'Inter',
            fontSize: '12px',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: '16px'
        }),
        converter_price_info: ({ colorMode }) => ({
            color: colorMode === "light" ? "#585858" : "#585858",
            fontFamily: 'Inter',
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: '24px',
        }),
        converter_rank: ({ colorMode }) => ({
            color: colorMode === "light" ? "#4682B4" : "#4682B4",
            fontFeatureSettings: 'salt on, liga off',
            fontFamily: 'Inter',
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: '18.494px'
        }),
        converter_low_high: ({ colorMode }) => ({
            color: colorMode === "light" ? "#191919" : "#FFFFFF",
            fontFamily: 'Inter',
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: 'normal',
            letterSpacing: '0.028px'
        }),
        converter_low_high_table: ({ colorMode }) => ({
            color: colorMode === "light" ? "#191919" : "#FFFFFF",
            fontFamily: 'Inter',
            fontSize: { base: '10px', md: '14px' },
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: 'normal',
            letterSpacing: '0.028px'
        }),
        converter_low_high_value: ({ colorMode }) => ({
            color: colorMode === "light" ? "#191919" : "#FFFFFF",
            fontFamily: 'Inter',
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: '500',
            lineHeight: 'normal',
            letterSpacing: '0.028px'
        }),
        converter_left_box_title: ({ colorMode }) => ({
            color: colorMode === "light" ? "#585858" : "#585858",
            fontFamily: 'Inter',
            fontSize: '12px',
            fontStyle: 'normal',
            fontWeight: '500',
            lineHeight: 'normal',
            letterSpacing: '0.024px'
        }),
        converter_betygfi_score: ({ colorMode }) => ({
            color: colorMode === "light" ? "#4682B4" : "#4682B4",
            fontFamily: 'Inter',
            fontSize: '32px',
            fontStyle: 'normal',
            fontWeight: '500',
            lineHeight: 'normal'
        }),
        converter_betygfi_coin_details_key: ({ colorMode }) => ({
            color: colorMode === "light" ? "#525252" : "#525252",
            fontFamily: 'Inter',
            fontSize: '12px',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: 'normal'
        }),
        converter_betygfi_coin_details_value: ({ colorMode }) => ({
            color: colorMode === "light" ? "#191919" : "#FFFFFF",
            fontFeatureSettings: 'salt on, liga off',
            fontFamily: 'Inter',
            fontSize: { base: '9px', md: '14px' },
            fontStyle: 'normal',
            fontWeight: '500',
            lineHeight: { base: '12px', md: '18px' }
        }),
        converter_get_api_key: ({ colorMode }) => ({
            color: colorMode !== "light" ? "#191919" : "#FFFFFF",
            fontFamily: 'Inter',
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: '500',
            lineHeight: '24px',
        }),
        converter_calc_desc: ({ colorMode }) => ({
            color: colorMode === "light" ? "#757575" : "#757575",
            fontFamily: 'Inter',
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: '22px',
        }),
        converter_news_heading: ({ colorMode }) => ({
            color: colorMode === "light" ? "#191919" : "#FFFFFF",
            fontFamily: 'Inter',
            fontSize: '20px',
            fontStyle: 'normal',
            fontWeight: '500',
            lineHeight: '22px'
        }),
        converter_news_title: ({ colorMode }) => ({
            color: colorMode === "light" ? "#191919" : "#FFFFFF",
            fontFeatureSettings: 'salt on, liga off',
            fontFamily: 'Inter',
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: '600',
            lineHeight: '20.176px'
        }),
        converter_news_description_text: ({ colorMode }) => ({
            color: colorMode === "light" ? "#191919" : "#FFFFFF",
            fontFamily: 'Inter',
            fontSize: '20px',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: '24px'
        }),
        converter_news_description_subtext: ({ colorMode }) => ({
            color: colorMode === "light" ? "#191919" : "#FFFFFF",
            fontFamily: 'Inter',
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: '24px'
        }),
        converter_trending_coin_name: ({ colorMode }) => ({
            color: colorMode === "light" ? "#000000" : "#FFFFFF",
            fontFamily: 'Inter',
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: '500',
            lineHeight: '22px'
        }),
        converter_max_supply: ({ colorMode }) => ({
            color: colorMode === "light" ? "#585858" : "#585858",
            fontFamily: 'Inter',
            fontSize: '12px',
            fontStyle: 'normal',
            fontWeight: '500',
            lineHeight: '24px'
        }),
    },
    defaultProps: {
        variant: "base",
    },
});

export default Text;
