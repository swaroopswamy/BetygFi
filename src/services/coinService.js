import { axiosInstance } from "@util/axiosInstance";
import { cacheHandler, checkIfCacheAvailable } from "@util/cacheHelper";
import { NEXT_BE_URL_SEPARATOR } from "@util/constant";
import { fetchInstance } from "@util/fetchInstance";
import { getAPI_URL } from "@util/utility";

export const getCoinDashboardData = async (payload, rejectWithValue) => {
    try {
        const url = NEXT_BE_URL_SEPARATOR + `coin-risk/coin-dashboard/${payload.id}`;
        if (checkIfCacheAvailable(url)) {
            return checkIfCacheAvailable(url);
        } else {
            const { data } = await axiosInstance(getAPI_URL()).get(url);
            return cacheHandler(url, data, false, 0.5);
        }
    } catch (err) {
        if (rejectWithValue) {
            return rejectWithValue(err);
        } else {
            return err;
        }
    }
};

export const getCoinDashboardDataFetched = async (payload) => {
    try {
        const url = NEXT_BE_URL_SEPARATOR + `coin-risk/coin-dashboard/${payload.id}`;
        const finalUrl = `http://localhost:${process.env.APP_PORT || 7000}` + url;
        if (checkIfCacheAvailable(url)) {
            return checkIfCacheAvailable(url);
        } else {
            const data = await fetchInstance({ url: finalUrl, method: 'GET' });
            return cacheHandler(url, data, false, 4);
        }
    } catch (error) {
        return error;
    }
};

export const getAllAllowedCurrenciesData = async (payload, rejectWithValue) => {
    try {
        const url = NEXT_BE_URL_SEPARATOR + `coin-risk/allowed-currencies`;
        if (checkIfCacheAvailable(url)) {
            return checkIfCacheAvailable(url);
        } else {
            const data = await axiosInstance(getAPI_URL()).get(url, payload);
            return cacheHandler(url, data, false, 4);
        }
    } catch (err) {
        return rejectWithValue(err);
    }
};

export const getAllAllowedCurrenciesFetched = async () => {
    try {
        const baseUrl = `http://localhost:${7000}`;
        const url = (NEXT_BE_URL_SEPARATOR || "/api/bet-dash/") + `coin-risk/allowed-currencies?abc=fetch`;
        const data = await fetchInstance({ url: baseUrl + url, method: 'GET' });
        return data;
    } catch (error) {
        return error;
    }
};

export const getCoinINRWeekHistoryTableDataFetched = async (payload) => {
    try {
        const url = NEXT_BE_URL_SEPARATOR + `coin-risk/coin-inr-week-history/${payload.id}`;
        const finalUrl = `http://localhost:${process.env.APP_PORT || 7000}` + url;
        if (checkIfCacheAvailable(url)) {
            return checkIfCacheAvailable(url);
        } else {
            const data = await fetchInstance({ url: finalUrl, method: 'GET' });
            return cacheHandler(url, data, false, 4);
        }
    } catch (error) {
        return error;
    }
};

export const getCoinPriceConversionDataFetched = async (payload) => {
    try {
        const url = NEXT_BE_URL_SEPARATOR + `coin-risk/price-conversion-table/${payload.id}`;
        const finalUrl = `http://localhost:${process.env.APP_PORT || 7000}` + url;
        if (checkIfCacheAvailable(url)) {
            return checkIfCacheAvailable(url);
        } else {
            const data = await fetchInstance({ url: finalUrl, method: 'GET' });
            return cacheHandler(url, data, false, 4);
        }
    } catch (error) {
        return error;
    }
};

export const getCoinRiskPriceConversionAnalyticsFetched = async (payload) => {
    try {
        const url = NEXT_BE_URL_SEPARATOR + `coin-risk/price-conversion-analytics/${payload.id}/${payload.currency}`;
        const finalUrl = `http://localhost:${process.env.APP_PORT || 7000}` + url;
        if (checkIfCacheAvailable(url)) {
            return checkIfCacheAvailable(url);
        } else {
            const data = await fetchInstance({ url: finalUrl, method: 'GET' });
            return cacheHandler(url, data, false, 4);
        }
    } catch (error) {
        return error;
    }
};

export const getCoinNewsFetched = async (payload) => {
    try {
        const url = NEXT_BE_URL_SEPARATOR + `coin-risk/coin-news/${payload.id}`;
        const finalUrl = `http://localhost:${process.env.APP_PORT || 7000}` + url;
        if (checkIfCacheAvailable(url)) {
            return checkIfCacheAvailable(url);
        } else {
            const data = await fetchInstance({ url: finalUrl, method: 'GET' });
            return cacheHandler(url, data, false, 4);
        }
    } catch (error) {
        return error;
    }
};

export const getCoinRankingsTableDataFetched = async (payload) => {
    try {
        const url = NEXT_BE_URL_SEPARATOR + `coin-risk/coins-table?sitemap=true`;
        const finalUrl = `http://localhost:${process.env.APP_PORT || 7000}` + url;
        if (checkIfCacheAvailable(url)) {
            return checkIfCacheAvailable(url);
        } else {
            const data = await fetchInstance({ url: finalUrl, method: 'POST', payload });
            return cacheHandler(url, data, false, 4);
        }
    } catch (error) {
        return error;
    }
};

export const getETFListDataFetched = async (type) => {
    try {
        const url = NEXT_BE_URL_SEPARATOR + `coin-risk/etf-list?sitemap=true&type=${type}`;
        const finalUrl = `http://localhost:${process.env.APP_PORT || 7000}` + url;
        if (checkIfCacheAvailable(url)) {
            return checkIfCacheAvailable(url);
        } else {
            const data = await fetchInstance({ url: finalUrl, method: 'GET' });
            return cacheHandler(url, data, false, 4);
        }
    } catch (error) {
        return error;
    }
};

export const getCoinRankingsTableData = async (payload, rejectWithValue) => {
    try {
        const url = NEXT_BE_URL_SEPARATOR + `coin-risk/coins-table`;
        // const finalUrl = url + payload.page + payload.score_dist + payload.category + payload.limit;
        const finalUrl = url;
        if (checkIfCacheAvailable(finalUrl)) {
            return checkIfCacheAvailable(finalUrl);
        } else {
            const { data } = await axiosInstance(getAPI_URL()).post(url, payload);
            return cacheHandler(finalUrl, data, false, 4);
        }
    } catch (err) {
        return rejectWithValue(err);
    }
};

export const getCoinScoresData = async (query, rejectWithValue) => {
    try {
        const url = NEXT_BE_URL_SEPARATOR + `coin-risk/scores-v2${query ? '?category=' + query : ''}`;
        const { data } = await axiosInstance(getAPI_URL()).get(url);
        return data;
    } catch (err) {
        return rejectWithValue(err);
    }
};

export const getCryptoCategoriesData = async (rejectWithValue) => {
    try {
        const url = NEXT_BE_URL_SEPARATOR + `coin-risk/categories`;
        const { data } = await axiosInstance(getAPI_URL()).get(url);
        return data;
    } catch (err) {
        return rejectWithValue(err);
    }
};

export const getTrendingCoinsData = async (rejectWithValue) => {
    try {
        const url = NEXT_BE_URL_SEPARATOR + `coin-risk/trending-coins`;
        const { data } = await axiosInstance(getAPI_URL()).get(url);
        return data;
    } catch (err) {
        return rejectWithValue(err);
    }
};

export const getCoinPriceData = async (payload, rejectWithValue) => {
    try {
        const url = NEXT_BE_URL_SEPARATOR + `coin-risk/graph-data`;
        const { data } = await axiosInstance(getAPI_URL()).post(url, payload);
        return data;
    } catch (err) {
        return rejectWithValue(err);
    }
};

export const getCoinDevelopmentData = async (payload, rejectWithValue) => {
    try {
        const url = NEXT_BE_URL_SEPARATOR + `coin-risk/development-analysis/${payload.id}`;
        const { data } = await axiosInstance(getAPI_URL()).get(url, payload);
        return data;
    } catch (err) {
        return rejectWithValue(err);
    }
};

export const getTopGainersAndLosersData = async (rejectWithValue) => {
    try {
        const url = NEXT_BE_URL_SEPARATOR + `coin-risk/gainers-losers`;
        const { data } = await axiosInstance(getAPI_URL()).get(url);
        return data;
    } catch (err) {
        return rejectWithValue(err);
    }
};

export const getTopBTCETFData = async (rejectWithValue) => {
    try {
        const url = NEXT_BE_URL_SEPARATOR + `coin-risk/top-etfs`;
        const { data } = await axiosInstance(getAPI_URL()).get(url);
        return data;
    } catch (err) {
        return rejectWithValue(err);
    }
};

export const getFearAndGreedData = async (rejectWithValue) => {
    try {
        const url = NEXT_BE_URL_SEPARATOR + `coin-risk/btc-fear-and-index`;
        const { data } = await axiosInstance(getAPI_URL()).get(url);
        return data;
    } catch (err) {
        return rejectWithValue(err);
    }
};

export const getSAPData = async (payload, rejectWithValue) => {
    try {
        const url = NEXT_BE_URL_SEPARATOR + `coin-risk/sap-500?type=${payload?.day}`;
        const { data } = await axiosInstance(getAPI_URL()).get(url);
        return data;
    } catch (err) {
        return rejectWithValue(err);
    }
};

export const getBTCDominanceScoresAPI = async (payload, rejectWithValue) => {
    try {
        const url = NEXT_BE_URL_SEPARATOR + `coin-risk/btc-dominance-scores/${payload?.day}`;
        const { data } = await axiosInstance(getAPI_URL()).get(url, payload);
        return data;
    } catch (err) {
        return rejectWithValue(err);
    }
};

export const getMarqueeDataAPI = async (payload, rejectWithValue) => {
    try {
        const url = NEXT_BE_URL_SEPARATOR + `coin-risk/marquee-data`;
        const { data } = await axiosInstance(getAPI_URL()).get(url, payload);
        return data;
    } catch (err) {
        return rejectWithValue(err);
    }
};

export const getETFListData = async (type, { rejectWithValue }) => {
    try {
        const url = NEXT_BE_URL_SEPARATOR + `coin-risk/etf-list?type=${type}`;
        const { data } = await axiosInstance(getAPI_URL()).get(url);
        return data;
    } catch (err) {
        return rejectWithValue(err);
    }
};

export const getBTCETFInflowOutflowData = async (payload, rejectWithValue) => {
    try {
        const url = NEXT_BE_URL_SEPARATOR + `coin-risk/etf-inflow-outflow`;
        const { data } = await axiosInstance(getAPI_URL()).get(url, payload);
        return data;
    } catch (err) {
        return rejectWithValue(err);
    }
};

export const getETFHeatMapData = async (payload, rejectWithValue) => {
    try {
        const url = NEXT_BE_URL_SEPARATOR + `coin-risk/etf-heatmap`;
        const { data } = await axiosInstance(getAPI_URL()).get(url, payload);
        return data;
    } catch (err) {
        return rejectWithValue(err);
    }
};

export const getTickerInflowOutflowData = async (payload, rejectWithValue) => {
    try {
        const url = NEXT_BE_URL_SEPARATOR + `coin-risk/etf/${payload.ticker}/inflow-outflow`;
        const { data } = await axiosInstance(getAPI_URL()).get(url, payload);
        return data;
    } catch (err) {
        return rejectWithValue(err);
    }
};

export const getETFChartData = async (payload, rejectWithValue) => {
    try {
        const url = NEXT_BE_URL_SEPARATOR + `coin-risk/etf/${payload.ticker}/chart-data`;
        const { data } = await axiosInstance(getAPI_URL()).get(url, payload);
        return data;
    } catch (err) {
        return rejectWithValue(err);
    }
};

export const getETFNewsData = async (payload, rejectWithValue) => {
    try {
        const url = NEXT_BE_URL_SEPARATOR + `coin-risk/etf/${payload.ticker}/news`;
        const { data } = await axiosInstance(getAPI_URL()).get(url, payload);
        return data;
    } catch (err) {
        return rejectWithValue(err);
    }
};

export const getConversionCoinChartGraphData = async (payload, rejectWithValue) => {
    try {
        const url = NEXT_BE_URL_SEPARATOR + `coin-risk/price-conversion-chart?id=${payload.coinSlug}&filter=${payload.filter}&interval=${payload.interval == "Max" ? "max" : payload.interval}&currency=${payload.currency?.toUpperCase()}`;
        const { data } = await axiosInstance(getAPI_URL()).get(url, payload);
        return data;
    } catch (err) {
        return rejectWithValue(err);
    }
};

export const getTabLayoutsData = async (payload, rejectWithValue) => {
    try {
        const url = NEXT_BE_URL_SEPARATOR + `coin-risk/tab-layouts`;
        const { data } = await axiosInstance(getAPI_URL()).get(url, payload);
        return data;
    } catch (err) {
        return rejectWithValue(err);
    }
};

// export const customizeTabData = async (payload, rejectWithValue) => {
//     try {
//         const url = NEXT_BE_URL_SEPARATOR + `coin-risk/tab-customize/${payload.name}`;
//         const { data } = await axiosInstance(getAPI_URL()).get(url, payload);
//         return data;
//     } catch (err) {
//         return rejectWithValue(err);
//     }
// };
