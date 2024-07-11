import { cacheHandler, checkIfCacheAvailable } from "@util/cacheHelper";
import { BASE_URL } from "@util/constant";
import { fetchInstance } from "@util/fetchInstance";

const LIMIT = 200;

let API_SERVICE_URL = null;
const getDefiRankingsTableDataSitemapFetch = async (payload) => {
    try {
        if (API_SERVICE_URL == null) {
            const { config } = await fetchInstance({ url: process.env.ADMINWEBURL, method: 'GET' });
            API_SERVICE_URL = config.API_SERVICE_URL;
        }

        const finalUrl = API_SERVICE_URL + `/protocols?sitemap=true&page=${payload.page}`;

        if (checkIfCacheAvailable(finalUrl)) {
            return checkIfCacheAvailable(finalUrl);
        } else {
            const data = await fetchInstance({ url: finalUrl, method: 'POST', payload });
            return cacheHandler(finalUrl, data, false, 24);
        }
    } catch (error) {
        return error;
    }
};

const getProtocolList = async (model, page) => {
    const payload = {
        "blockchain": [],
        "category": [],
        "page": page,
        "limit": LIMIT,
        "score_dist": ""
    };

    const protocolData = await getDefiRankingsTableDataSitemapFetch(payload);
    if (model.list == undefined) {
        model.list = [];
    }
    if (protocolData?.data?.data) {
        if (model.list.length > 0) {
            model.list = [...model.list, ...protocolData.data.data];
        } else {
            model.list = [...protocolData.data.data];
        }

        model.protocolTotalPages = protocolData.data.totalPages;
    }
    return model;
};

const queryMoreProtocols = async (model) => {
    if (model.protocolTotalPages) {
        const list = [...Array(model.protocolTotalPages)].map((x, i) => i + 1);
        list.shift();
        for (const item of list) {
            model = await getProtocolList(model, item);
        }
    }
    return model.list;
};

export default async function sitemap() {
    let model = {};
    model = await getProtocolList(model, 1);
    const protocolList = await queryMoreProtocols(model);

    return protocolList.map((protocol) => ({
        url: `${BASE_URL}/protocol/${protocol?.slug}`,
        lastModified: new Date(),
        changeFrequency: 'hourly',
        priority: 1,
    }));
}
