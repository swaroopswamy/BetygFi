import { axiosInstance } from "../../util/axiosInstance";

export const getBlockchainListData = async () => {
    try {
        const { data } = await axiosInstance.get(
            `protocols/blockchains`
        );
        return data;
    } catch (err) {
        return rejectWithValue(err);
    }
};

export default {
    getBlockchainListData
};