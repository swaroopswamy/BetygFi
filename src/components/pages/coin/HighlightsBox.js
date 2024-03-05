import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import TopGainersSmallBox from "@/components/pages/coin/TopGainersSmallBox";
import TopLosersSmallBox from "@/components/pages/coin/TopLosersSmallBox";
import BTC_ETF_SmallBox from "@/components/pages/coin/BTC_ETF_SmallBox";
import { fetchTopGainersAndLosersData } from "@redux/coin_data/dataSlice";

const HighlightsBox = () => {
    const dispatch = useDispatch();

    const fetchTopGainersAndLosersDataHandler = () => {
        dispatch(fetchTopGainersAndLosersData());
    };

    useEffect(() => {
        Promise.all([
            fetchTopGainersAndLosersDataHandler()
        ]).then(res => res);
    }, []);

    return (
        <Box w="100%" layerStyle={"flexCenter"} gap={"25px"} overflowX={"scroll"}>
            <TopGainersSmallBox />
            <TopLosersSmallBox />
            <BTC_ETF_SmallBox />
        </Box>
    );
};

export default HighlightsBox;