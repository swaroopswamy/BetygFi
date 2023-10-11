export const tableHeader = [
    {
      value: "rank",
      label: "Rank",
      isTooltip: true,
      isSortingEnabled: false,
      tooltipLabel: "Rank of DeFi out of all the available DeFi's tracked by BetygFi based on the score",
    },
    {
      value: "name",
      label: "Name",
      isTooltip: false,
      isSortingEnabled: false,
      tooltipLabel: null,
    },
    {
      value: "category",
      label: "Category",
      isTooltip: true,
      isSortingEnabled: false,
      tooltipLabel: "Category outlines the type of the services the DeFi provides",
    },
    {
      value: "price",
      label: "Price",
      isTooltip: true,
      isSortingEnabled: false,
      tooltipLabel: "Market price of the DeFi token",
    },
    {
      value: "tvl",
      label: "TVL",
      isTooltip: true,
      isSortingEnabled: false,
      tooltipLabel: "Total value locked (TVL) is the real-time value of the assets that the DeFi holds",
    },
    {
      value: "mcap",
      label: "MCap",
      isTooltip: true,
      isSortingEnabled: false,
      tooltipLabel: "Market capitalization of the DeFi is the total value of tokens of the DeFi",
    },
    {
      value: "mcaptvl",
      label: "MCap/TVL",
      isTooltip: true,
      isSortingEnabled: false,
      tooltipLabel: "The MCAP/TVL Ratio show the difference between the total value of the token issued by the DeFi (Market Value of the DeFi) and the total value of assets of the DeFi",
    },
    {
      value: "score",
      label: "Score",
      isTooltip: true,
      isSortingEnabled: false,
      tooltipLabel: "Solvendo score comprises of DeFi's technical, centralization, financial/market, and userbase quality risks",
    },
  ];

  export const DefiRankingTableDesktop = {
    numColumns: 8,
    numRows: 4,
  };
  export const DefiRankingTableMobile = {
    numColumns: 3,
    numRows: 4,
  };
  