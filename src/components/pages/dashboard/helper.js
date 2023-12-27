export const tableHeader = [
	{
		accessor: "rank",
		Header: "Rank",
		isTooltip: true,
		isSortingEnabled: false,
		tooltipLabel: "Rank of DeFi out of all the available DeFi's tracked by BetygFi based on the score",
		onMobile: true
	},
	{
		accessor: "name",
		Header: "Name",
		isTooltip: false,
		isSortingEnabled: false,
		tooltipLabel: null,
		onMobile: true
	},
	{
		accessor: "category",
		Header: "Category",
		isTooltip: true,
		isSortingEnabled: false,
		tooltipLabel: "Category outlines the type of the services the DeFi provides",
	},
	{
		accessor: "price",
		Header: "Price",
		isTooltip: true,
		isSortingEnabled: false,
		tooltipLabel: "Market price of the DeFi token",
	},
	{
		accessor: "tvl",
		Header: "TVL",
		isTooltip: true,
		isSortingEnabled: false,
		tooltipLabel: "Total accessor locked (TVL) is the real-time accessor of the assets that the DeFi holds",
	},
	{
		accessor: "mcap",
		Header: "MCap",
		isTooltip: true,
		isSortingEnabled: false,
		tooltipLabel: "Market capitalization of the DeFi is the total accessor of tokens of the DeFi",
	},
	{
		Header: "MCap/TVL",
		isTooltip: true,
		isSortingEnabled: false,
		tooltipLabel: "The MCAP/TVL Ratio show the difference between the total accessor of the token issued by the DeFi (Market Value of the DeFi) and the total accessor of assets of the DeFi",
	},
	{
		accessor: "score",
		Header: "Score",
		isTooltip: true,
		isSortingEnabled: false,
		tooltipLabel: "Solvendo score comprises of DeFi's technical, centralization, financial/market, and userbase quality risks",
		onMobile: true
	},
];