export const AUTH_COOKIE_NAME = "betygfi-auth";
export const SEARCH_TYPE_SELECTED = "betygfi-srch-slct";
export const API_URL_COOKIE_NAME = "bet-api-url";
export const NTF_URL_COOKIE_NAME = "bet-ntf-url";
export const COLOR_MODE_COOKIE_NAME = "bet-color";
export const BLOCK_CHAIN_TYPE_SELECTED_COOKIE_NAME = "bet-blockchain-selected";
export const DOMAIN = "betygfi.com";
export const LOCAL_DASHBOARD_HOST = "local.betygfi.com";
export const LOCAL_SERVER_HOST = "localhost";
export const NEXT_BE_URL_SEPARATOR = '/api/bet-dash/';
export const TRENDING_DEFIS_TITLE = "Trending DeFi’s";
export const TRENDING_DEFIS_SLUG = "trending-defis";
export const TRENDING_COINS_TITLE = "Trending Coin’s";
export const TRENDING_COINS_SLUG = "trending-coins";
export const TRENDING_WALLETS_TITLE = "Trending Wallet’s";
export const TRENDING_WALLETS_SLUG = "trending-wallets";

export const HOST = `https://${DOMAIN}/`;

export const blockchains = [
    "Ethereum",
    "Arbitrum",
    "Polygon",
    "Optimism",
    "Avalanche",
    "Mixin",
    "Solana",
    "Kava",
];

export const GOVERNANCE_TABLE_DATA_KEYS = (item) => [
    {
        value: item?.Title,
        slug: "title"
    },
    {
        value: item?.Start,
        slug: "start"
    },
    {
        value: item?.End,
        slug: "end"
    },
    {
        value: item?.State,
        slug: "state"
    },
    {
        value: item?.Votes,
        slug: "votes"
    },
];

export const defiCategories = [
    { name: "Prediction Markets", id: "Prediction Market", slug: "prediction-market" },
    { name: "Derivatives", id: "Derivatives", slug: "derivatives" },
    { name: "Insurance", id: "Insurance", slug: "insurance" },
    { name: "Yield", id: "Yield", slug: "yield" },
    { name: "CDP", id: "CDP", slug: "cdp" },
    { name: "Lending", id: "Lending", slug: "lending" },
    { name: "Launchpad", id: "Launchpad", slug: "launchpad" },
];

export const walletDashboardTabListData = [
    {
        name: "Transactions",
        slug: "transactions",
        iconLight: "/images/transactions_black.svg",
        iconDark: "/images/transactions_white.svg"
    },
    {
        name: "Portfolio",
        slug: "portfolio",
        iconLight: "/images/portfolio_black.svg",
        iconDark: "/images/portfolio_white.svg"
    },
    {
        name: "Wallet Analytics",
        slug: "wallet-analytics",
        iconLight: "/images/wallet_analytics_black.svg",
        iconDark: "/images/wallet_analytics_white.svg"
    },
];

export const categoryIds = [
    "Prediction Market",
    "Derivatives",
    "Insurance",
    "Yield",
    "CDP",
    "Lending",
    "Launchpad",
];

export const colors = {
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
                2: "#EF1E1E",
                3: "#EF1E1E",
                4: "#FF7373",
            },
            green: {
                1: "#245F00",
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

export const walletArray = [
    {
        name: "Metamask",
        slug: "metamask",
        icon: "metamask_icon.png",
        key: 1,
    },
];

export const SEARCH_LIST = [
    {
        title: TRENDING_DEFIS_TITLE,
        slug: TRENDING_DEFIS_SLUG,
    },
    {
        title: TRENDING_COINS_TITLE,
        slug: TRENDING_COINS_SLUG,
    },
    {
        title: TRENDING_WALLETS_TITLE,
        slug: TRENDING_WALLETS_SLUG,
    },
];

export const BASE_URL = 'platform.betygfi.com';