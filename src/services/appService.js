import { axiosInstance } from "../../util/axiosInstance";

export const getBlockchainListData = async () => {
    try {
        console.log("TRY");
        const { data, status, message } = await axiosInstance.get(
            `protocols/blockchains`
        );
        console.log("STATUS: ", status);
        return data;
    } catch (err) {
        return rejectWithValue(err);
    }
};

export default {
    getBlockchainListData
};