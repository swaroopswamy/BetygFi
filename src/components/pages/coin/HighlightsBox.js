import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import TopGainersSmallBox from "@/components/pages/coin/TopGainersSmallBox";
import TopLosersSmallBox from "@/components/pages/coin/TopLosersSmallBox";
import { fetchTopGainersAndLosersData } from "@redux/coin_data/dataSlice";
import BTCetfSmallBox from "./BTCetfSmallBox";
import BTCDominanceSmallBox from "./BTCDominanceSmallBox";

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
        <Box w="100%" layerStyle={"flexCenter"} overflowX={"scroll"} overflowY={"hidden"} gap={"15px"}>
            <TopGainersSmallBox />
            <TopLosersSmallBox />
            <BTCetfSmallBox />
            <BTCDominanceSmallBox />
        </Box>
    );
};

export default HighlightsBox;