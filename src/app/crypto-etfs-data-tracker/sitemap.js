import { BASE_URL } from "@util/constant";
import { fetchInstance } from "@util/fetchInstance";

const LIMIT = 200;

let API_SERVICE_URL = null;
const getETFListDataSitemapFetch = async (payload) => {
    try {
        if (API_SERVICE_URL == null) {
            const { config } = await fetchInstance({ url: process.env.ADMINWEBURL, method: 'GET' });
            API_SERVICE_URL = config.API_SERVICE_URL;
        }
        const finalUrl = API_SERVICE_URL + `/coin-risk/etf-list?sitemap=true&type=${payload}`;
        return await fetchInstance({ url: finalUrl, method: 'GET' });
    } catch (error) {
        return error;
    }
};

const getEtfList = async (model, page) => {
    const payload = {
        "category": "all",
        "page": page,
        "limit": LIMIT,
        "score_dist": ""
    };

    const etfData = await getETFListDataSitemapFetch(payload);
    if (model.list == undefined) {
        model.list = [];
    }
    if (etfData?.data) {
        if (model.list.length > 0) {
            model.list = [...model.list, ...etfData.data];
        } else {
            model.list = [...etfData.data];
        }

        model.etfTotalPages = etfData.data.totalPages;
    }
    return model;
};

const queryMoreEtfs = async (model) => {
    if (model.etfTotalPages && model.etfTotalPages > LIMIT) {
        const list = [...Array(model.etfTotalPages)].map((x, i) => i + 1);
        list.shift();
        for (const item of list) {
            model = await getEtfList(model, item);
        }
    }
    return model.list;
};

export default async function sitemap() {
    let model = {};
    model = await getEtfList(model, 1);
    const etfList = await queryMoreEtfs(model);

    return etfList.map((etf) => ({
        url: `${BASE_URL}/crypto-etfs-data-tracker/${etf?.ticker}`,
        lastModified: new Date(),
        changeFrequency: 'hourly',
        priority: 1,
    }));
}
