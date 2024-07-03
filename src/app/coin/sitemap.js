import { getCoinRankingsTableDataFetched } from "@services/coinService";
import { BASE_URL } from "@util/constant";

const LIMIT = 200;

const getCoinList = async (model, page) => {
    const payload = {
        "category": "all",
        "page": page,
        "limit": LIMIT,
        "score_dist": ""
    };

    const coinData = await getCoinRankingsTableDataFetched(payload);
    if (model.list == undefined) {
        model.list = [];
    }
    if (coinData?.data?.data) {
        if (model.list.length > 0) {
            model.list = [...model.list, ...coinData.data.data];
        } else {
            model.list = [...coinData.data.data];
        }

        model.coinTotalPages = coinData.data.totalPages;
    }
    return model;
};

const queryMoreCoins = async (model) => {
    if (model.coinTotalPages) {
        const list = [...Array(model.coinTotalPages)].map((x, i) => i + 1);
        list.shift();
        for (const item of list) {
            model = await getCoinList(model, item);
        }
    }
    return model.list;
};

export default async function sitemap() {
    let model = {};
    model = await getCoinList(model, 1);
    const coinList = await queryMoreCoins(model);

    return coinList.map((coin) => ({
        url: `${BASE_URL}/coin/${coin?.slug}`,
        lastModified: new Date(),
        changeFrequency: 'hourly',
        priority: 1,
    }));
}
