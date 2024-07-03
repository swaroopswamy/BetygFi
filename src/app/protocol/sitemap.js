import { getDefiRankingsTableDataFetched } from "@services/dashboardService";
import { BASE_URL } from "@util/constant";

const LIMIT = 200;

const getProtocolList = async (model, page) => {
    const payload = {
        "blockchain": [],
        "category": [],
        "page": page,
        "limit": LIMIT,
        "score_dist": ""
    };

    const protocolData = await getDefiRankingsTableDataFetched(payload);
    if (protocolData?.data?.data) {
        if (model.list == undefined) {
            model.list = [];
        }
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
    const list = [...Array(model.protocolTotalPages)].map((x, i) => i + 1);
    list.shift();
    for (const item of list) {
        model = await getProtocolList(model, item);
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
