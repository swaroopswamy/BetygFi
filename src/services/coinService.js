import { axiosInstance } from "@util/axiosInstance";
import { cacheHandler, checkIfCacheAvailable } from "@util/cacheHelper";

export const getCoinDashboardData = async (payload, rejectWithValue) => {
    try {
        const url = `coin-risk/coin-dashboard/${payload.id}`;
        if (checkIfCacheAvailable(url)) {
            return checkIfCacheAvailable(url);
        } else {
            const { data } = await axiosInstance.get(url);
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
        const { data } = await axiosInstance.post(
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
        const { data } = await axiosInstance.get(`coin-risk/scores`);
        return data;
    } catch (err) {
        return rejectWithValue(err);
    }
};

export const getTrendingCoinsData = async (rejectWithValue) => {
    try {
        const { data } = await axiosInstance.get(`coin-risk/trending-coins`);
        return data;
    } catch (err) {
        return rejectWithValue(err);
    }
};

export const getCoinPriceData = async (payload, rejectWithValue) => {
    try {
        const { data } = await axiosInstance.post(
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
        const { data } = await axiosInstance.get(
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
