import { axiosInstance } from "@util/axiosInstance";
import { cacheHandler, checkIfCacheAvailable } from "@util/cacheHelper";
import { getAPI_URL } from "@util/utility";

export const getCoinDashboardData = async (payload, rejectWithValue) => {
    try {
        const url = `coin-risk/coin-dashboard/${payload.id}`;
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

export const getCoinRankingsTableData = async (payload, rejectWithValue) => {
    try {
        const { data } = await axiosInstance(getAPI_URL()).post(
            `coin-risk/coins-table`,
            payload
        );
        return data;
    } catch (err) {
        return rejectWithValue(err);
    }
};

export const getCoinScoresData = async (rejectWithValue) => {
    try {
        const { data } = await axiosInstance(getAPI_URL()).get(`coin-risk/scores`);
        return data;
    } catch (err) {
        return rejectWithValue(err);
    }
};

export const getTrendingCoinsData = async (rejectWithValue) => {
    try {
        const { data } = await axiosInstance(getAPI_URL()).get(`coin-risk/trending-coins`);
        return data;
    } catch (err) {
        return rejectWithValue(err);
    }
};

export const getCoinPriceData = async (payload, rejectWithValue) => {
    try {
        const { data } = await axiosInstance(getAPI_URL()).post(
            `coin-risk/graph-data/`,
            payload
        );
        return data;
    } catch (err) {
        return rejectWithValue(err);
    }
};

export const getCoinDevelopmentData = async (payload, rejectWithValue) => {
    try {
        const { data } = await axiosInstance(getAPI_URL()).get(
            `coin-risk/development-analysis/${payload.id}`,
            payload
        );
        return data;
    } catch (err) {
        return rejectWithValue(err);
    }
};

export default {
    getCoinRankingsTableData,
    getCoinScoresData,
    getTrendingCoinsData,
    getCoinDashboardData,
    getCoinPriceData,
    getCoinDevelopmentData,
};
