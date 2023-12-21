import { axiosInstance } from "@util/axiosInstance";

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

export const getCoinDashboardData = async (payload, rejectWithValue) => {
    try {
        const { data } = await axiosInstance.get(
            `coin-risk/coin-dashboard/${payload.id}`
        );
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
