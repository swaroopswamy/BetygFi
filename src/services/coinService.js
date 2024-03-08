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
            return cacheHandler(url, data, 4, false);
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
            return cacheHandler(url, data, 4, false);
        }
    } catch (error) {
        return error;
    }
};

export const getCoinRankingsTableData = async (payload, rejectWithValue) => {
    try {
        const url = NEXT_BE_URL_SEPARATOR + `coin-risk/coins-table`;
        const { data } = await axiosInstance(getAPI_URL()).post(url, payload);
        return data;
    } catch (err) {
        return rejectWithValue(err);
    }
};

export const getCoinScoresData = async (rejectWithValue) => {
    try {
        const url = NEXT_BE_URL_SEPARATOR + `coin-risk/scores`;
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

export const getSAPData = async (rejectWithValue) => {
    try {
        const url = NEXT_BE_URL_SEPARATOR + `coin-risk/sap-500`;
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
