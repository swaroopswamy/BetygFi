import { axiosInstance } from "@util/axiosInstance";
import { cacheHandler, checkIfCacheAvailable } from "../../util/cacheHelper";

export const getBlockchainListData = async () => {
    try {
        const url = `protocols/blockchains`;
        if (checkIfCacheAvailable(url)) {
            return checkIfCacheAvailable(url);
        } else {
            const { data } = await axiosInstance.get(url);
            return cacheHandler(url, data, 4, false);
        }
    } catch (err) {
        return rejectWithValue(err);
    }
};

export default {
    getBlockchainListData
};