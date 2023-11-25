/* eslint-disable max-len */
export const tableHeader = [
    {
        accessor: "rank",
        Header: "Rank",
        isTooltip: false,
        isSortingEnabled: false,
        tooltipLabel:
            "Rank of DeFi out of all the available DeFi's tracked by BetygFi based on the score",
        onMobile: true,
    },
    {
        accessor: "name",
        Header: "Coin Name",
        isTooltip: false,
        isSortingEnabled: false,
        tooltipLabel: null,
        onMobile: true,
    },
    {
        accessor: "price",
        Header: "Price",
        isTooltip: false,
        isSortingEnabled: false,
        tooltipLabel: "Market price of the DeFi token",
    },
    {
        accessor: "change_1hr",
        Header: "1hr",
        isTooltip: false,
        isSortingEnabled: false,
        tooltipLabel:
            "Category outlines the type of the services the DeFi provides",
    },
    {
        accessor: "change_24hr",
        Header: "24hr",
        isTooltip: false,
        isSortingEnabled: false,
        tooltipLabel:
            "Category outlines the type of the services the DeFi provides",
    },
    {
        accessor: "change_7d",
        Header: "7d",
        isTooltip: false,
        isSortingEnabled: false,
        tooltipLabel:
            "Category outlines the type of the services the DeFi provides",
    },
    {
        accessor: "volume_24hr",
        Header: "24hr Volume",
        isTooltip: false,
        isSortingEnabled: false,
        tooltipLabel:
            "Category outlines the type of the services the DeFi provides",
    },
    {
        accessor: "mcap",
        Header: "Market Cap",
        isTooltip: false,
        isSortingEnabled: false,
        tooltipLabel:
            "Market capitalization of the DeFi is the total value of tokens of the DeFi",
    },
    {
        accessor: "score",
        Header: "Score",
        isTooltip: false,
        isSortingEnabled: false,
        tooltipLabel:
            "Solvendo score comprises of DeFi's technical, centralization, financial/market, and userbase quality risks",
        onMobile: true,
    },
];

export const DefiRankingTableDesktop = {
    numColumns: 9,
    numRows: 4,
};
export const DefiRankingTableMobile = {
    numColumns: 3,
    numRows: 4,
};

export const faq = {
    questions: [
        {
            question: "What is the purpose of this cryptocurrency dashboard?",
            answer: "Our dashboard is designed to provide users with real-time data and analytics on various cryptocurrencies. It includes information such as market capitalization, price changes, trading volume, and rankings to help users make informed investment decisions.",
        },
        {
            question: "How often is the data on the dashboard updated?",
            answer: "The data is updated in real-time, with price and market cap fluctuations reflected instantly to ensure that users have access to the most current information.",
        },
        {
            question:
                "Can I track specific cryptocurrencies on this dashboard?",
            answer: "Yes, you can filter the view to track specific cryptocurrencies by selecting from the available options such as Ethereum, Bitcoin, Tron, and Binance.",
        },
        {
            question:
                "What do the different colors in the 'Score distribution' indicate?",
            answer: "The score distribution is a risk assessment tool that categorizes cryptocurrencies based on their volatility and market behavior. 'Extreme' indicates high volatility, 'High' signifies above-average volatility, 'Moderate' represents average market risk, and 'Low' suggests below-average volatility.",
        },
        {
            question: "How is the 'Score' for each cryptocurrency determined?",
            answer: "The score is calculated using a proprietary algorithm that considers factors like market capitalization, price stability, trading volume, and historical performance.",
        },
        {
            question:
                "Can I connect my cryptocurrency wallet to this dashboard?",
            answer: "Yes, you can connect your wallet by clicking the 'Connect Wallet' button. This will allow for seamless tracking of your personal holdings alongside the broader market data.",
        },
        {
            question:
                "What are 'Prediction Markets', 'Derivatives', and 'Insurance' in the context of this dashboard?",
            answer: "These are categories of financial instruments and products in the cryptocurrency market. Prediction Markets are platforms for trading on the outcome of events, Derivatives are contracts that derive value from the performance of an underlying entity, and Insurance relates to products that provide coverage against certain risks in the crypto space.",
        },
        {
            question: "How can I learn more about using the dashboard?",
            answer: "For new users, we offer a tutorial that walks through all features of the dashboard. You can access this tutorial by clicking on the 'Help' or 'Tutorial' section of the website.",
        },
        {
            question:
                "Who can I contact for support if I encounter issues with the dashboard?",
            answer: "If you have any problems or need assistance, our support team is available 24/7. You can reach them through the 'Contact Us' link at the bottom of the page or by directly emailing our support address listed in the 'About' section.",
        },
        {
            question:
                "What does 'Market Capitalization' mean, and what is its calculation method?",
            answer: "Market Capitalization represents a metric for determining the comparative size of a cryptocurrency in the market. It is determined by taking the current market price of a single cryptocurrency unit and multiplying it by the total number of coins currently in circulation.\n\nThe formula for Market Cap is: Market Cap = Current Price of Cryptocurrency × Number of Coins in Circulation.",
        },
        {
            question:
                "What does the color-coded 'Score' represent on the dashboard?",
            answer: "The color-coded 'Score' on our cryptocurrency dashboard is a visual indicator that represents the risk level and stability of each cryptocurrency, based on our proprietary analysis. Here's what each color signifies:\n\nGreen: This color indicates a cryptocurrency with low risk, suggesting stability and less volatility in its market price. Green scores typically are assigned to well-established cryptocurrencies with a strong track record.\n\nBlue: Blue scores represent cryptocurrencies that exhibit moderate risk, with potential for steady growth. These might have relatively stable performance, but not as consistent as those marked green.\n\nYellow: Yellow suggests caution, as these cryptocurrencies are considered to have moderate to high risk. They might show more price volatility and could be influenced by unpredictable market trends.\n\nRed: Red is used for the highest risk cryptocurrencies. These are often highly volatile and may experience significant price fluctuations. Red scores alert users to potential risk and the possibility of rapid changes in market value.\n\nKeep in mind that while these scores provide a snapshot of current market conditions, the cryptocurrency market is highly dynamic, and risk levels can change frequently. Investors should use these scores as one of several tools for making informed investment decisions.",
        },
    ],
};
