import { DOMAIN, HOST } from "@util/constant";

// const SHARED_IMAGES_DETAIL = [
//     {
//         url: "https://betygfi.com/icons/light_betgyfi_sm_icon.svg",
//         width: 800,
//         height: 600,
//     },
//     {
//         url: "https://betygfi.com/icons/light_betgyfi_sm_icon.svg",
//         width: 1800,
//         height: 1600,
//         alt: 'My custom alt',
//     },
// ];

const SHARED_IMAGES = [
    "https://betygfi.com/icons/light_betgyfi_sm_icon.svg"
];

const SHARED_OPENGRAPH_IMAGES = () => [...SHARED_IMAGES];
const SHARED_TWITTER_IMAGES = () => [...SHARED_IMAGES];

const openGraphData = ({ url, title, description }) => {
    return {
        title: title,
        description: description,
        siteName: 'Betygfi',
        type: 'website',
        url: HOST + url,
        images: [...SHARED_OPENGRAPH_IMAGES()],
    };
};

const twitterData = ({ url, title, description }) => {
    return {
        card: 'summary_large_image', // "summary"| "summary_large_image"| "app"| "player"
        title: title,
        domain: DOMAIN,
        url: url,
        description: description,
        images: [...SHARED_TWITTER_IMAGES()],
        site: '@BetygFi',
        creator: '@BetygFi',
        // siteId: '1467726470533754880',
        // creatorId: '1467726470533754880',
    };
};

export const DefiLandingPageMetas = (url) => {
    const COMBINED_DASHBOARD = "Betygfi - Defi, Coin, Top Wallet Dashboard";
    const DEFI_DASHBOARD = "Betygfi - Defi Dashboard";

    const title = url === '' ? COMBINED_DASHBOARD : DEFI_DASHBOARD;
    const description = "Elevate your game";

    return {
        metadataBase: new URL(HOST),
        title: title,
        description: description,
        keywords: ['Betygfi', ...SHARED_KEYWORDS.defi],
        openGraph: openGraphData({ url, title, description }),
        twitter: twitterData({ url, title, description }),
    };
};

export const CoinLandingPageMetas = (url) => {
    const title = "Betygfi - Coin Dashboard";
    const description = "Elevate your game";

    return {
        metadataBase: new URL(HOST),
        title: title,
        description: description,
        keywords: ['Betygfi', ...SHARED_KEYWORDS.coin],
        openGraph: openGraphData({ url, title, description }),
        twitter: twitterData({ url, title, description }),
    };
};

export const TopWalletLandingPageMetas = (url) => {
    const title = "Betygfi - Wallet Dashboard";
    const description = "Elevate your game";

    return {
        metadataBase: new URL(HOST),
        title: title,
        description: description,
        keywords: ['Betygfi', ...SHARED_KEYWORDS.wallet],
        openGraph: openGraphData({ url, title, description }),
        twitter: twitterData({ url, title, description }),
    };
};

export const DefiDetailPageMetas = (defiData) => {
    const defiName = defiData?.name;
    const url = `protocol/${defiData?.slug}`;
    const title = `BetygFi - ${defiName} protocol Real-time Data Dashboard`;
    const description = `Explore the dynamic world of decentralized finance (DeFi) with the ${defiName} Protocol Dashboard on BetygFi. Gain comprehensive insights and real-time analytics on the latest trends, lending, borrowing, and liquidity pool activities. Stay ahead in the fast-paced DeFi landscape with our powerful dashboard.`;

    const NAME_SPECIFIC_KEYWORDS = (defiName) => [
        `${defiName} DeFi`,
        `${defiName} Protocol`,
        `${defiName} Dashboard`,
    ];
    return {
        metadataBase: new URL(HOST),
        title: title,
        description: description,
        keywords: ['Betygfi', ...NAME_SPECIFIC_KEYWORDS(defiName), ...SHARED_KEYWORDS.defi],
        openGraph: openGraphData({ url, title, description }),
        twitter: twitterData({ url, title, description }),
    };
};

export const CoinDetailPageMetas = (coinData) => {
    const coinName = coinData?.name;
    const coinTicker = coinData?.ticker;
    const url = `coin/${coinData?.slug}`;
    const title = `BetygFi - ${coinName} Dashboard for Real-time analytics`;
    const description = `Dive into the world of ${coinName} with real-time data dashboard, offering Bitcoin insights and analytics.`;

    const NAME_SPECIFIC_KEYWORDS = (coinName, coinTicker) => [
        `${coinName} Insights`,
        `${coinTicker} Analytics`,
        `${coinName} Market Data`,
        `${coinTicker} Trends`,
        `${coinName} Price Movements`,
        `${coinTicker} Market Trends`,
    ];

    return {
        metadataBase: new URL(HOST),
        title: title,
        description: description,
        keywords: ['Betygfi', ...NAME_SPECIFIC_KEYWORDS(coinName, coinTicker), ...SHARED_KEYWORDS.coin],
        openGraph: openGraphData({ url, title, description }),
        twitter: twitterData({ url, title, description }),
    };
};

export const TopWalletDetailPageMetas = (walletData) => {
    const url = `top-wallets/${walletData}`;
    const title = `BetygFi - Wallet Dashboard: Gain Deep Insights into Wallet Digital Assets insights`;
    const description = `BetygFi Wallet Dashboard empowers you to seamlessly monitor and analyze cryptocurrency transactions, track portfolio performance, and manage digital assets. Stay in the know with real-time updates, delve into transaction history, and benefit from personalized analytics for a comprehensive overview of your crypto journey. `;

    return {
        metadataBase: new URL(HOST),
        title: title,
        description: description,
        keywords: ['Betygfi', ...SHARED_KEYWORDS.wallet],
        openGraph: openGraphData({ url, title, description }),
        twitter: twitterData({ url, title, description }),
    };
};

const SHARED_KEYWORDS = {
    defi: [
        "DeFi Dashboard",
        "Real-time Data Analytics",
        "Decentralized Finance Insights",
        "Lending and Borrowing Trends",
        "Liquidity Pool Analytics",
        "DeFi Trends",
        "Crypto Finance Analytics",
    ],
    coin: [
        "Real-time Price Trends",
        "Crypto Dashboard",
        "Digital Currency Analytics",
        "Cryptocurrency Dashboard",
    ],
    wallet: [
        "Cryptocurrency wallet",
        "Wallet insights",
        "Crypto transactions",
        "Digital assets management",
        "Wallet Profiler",
        "Wallet analytics",
        "Cryptocurrency portfolio",
        "Transaction history",
        "Asset tracking",
    ]
};
