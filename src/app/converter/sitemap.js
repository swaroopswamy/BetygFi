import { BASE_URL } from "@util/constant";
import { fetchInstance } from "@util/fetchInstance";

const LIMIT = 800;
const currencyList = ["AUD", "CAD", "CNY", "EUR", "GBP", "INR", "JPY", "KRW", "RUB", "USD"];
let API_SERVICE_URL = null;

const getCoinRankingsTableDataSitemapFetch = async (payload) => {
    try {
        if (API_SERVICE_URL == null) {
            const { config } = await fetchInstance({ url: process.env.ADMINWEBURL, method: 'GET' });
            API_SERVICE_URL = config.API_SERVICE_URL;
        }
        const finalUrl = API_SERVICE_URL + `/coin-risk/coins-table?sitemap=true&page=${payload.page}`;
        return await fetchInstance({ url: finalUrl, method: 'POST', payload });
    } catch (error) {
        return error;
    }
};

const getCoinList = async (model, page) => {
    const payload = {
        "category": "all",
        "page": page,
        "limit": LIMIT,
        "score_dist": ""
    };

    const coinData = await getCoinRankingsTableDataSitemapFetch(payload);
    if (model.list == undefined) {
        model.list = [];
    }
    if (coinData?.data?.data?.length > 0) {
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

export async function generateSitemaps() {
    const siteMapReq = [];
    currencyList.forEach((currency, index) => {
        siteMapReq.push({ id: index + 1 });
    });
    return siteMapReq;
}
export default async function sitemap({ id }) {
    let model = {};
    let sitemapList = [];
    model = await getCoinList(model, 1);
    const coinList = await queryMoreCoins(model);
    for (let coin of coinList) {
        const sitemapObject = {
            url: `${BASE_URL}/converter/${coin?.slug}/${currencyList?.[id]?.toLowerCase()}`,
            lastModified: new Date(),
            changeFrequency: 'hourly',
            priority: 1,
        };
        sitemapList.push(sitemapObject);
    }
    return sitemapList;
}
