import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import TopGainersSmallBox from "@/components/pages/coin/TopGainersSmallBox";
//import TopLosersSmallBox from "@/components/pages/coin/TopLosersSmallBox";
import { fetchTopGainersAndLosersData, fetchSAPData } from "@redux/coin_data/dataSlice";
//import BTCetfSmallBox from "./BTCetfSmallBox";
import BTCDominanceSmallBox from "./BTCDominanceSmallBox";
import SandPSmallBox from "./S&PSmallBox";

const HighlightsBox = () => {
    const dispatch = useDispatch();

    const fetchTopGainersAndLosersDataHandler = () => {
        dispatch(fetchTopGainersAndLosersData());
    };

const fetchSAPDataHandler = () => {
    dispatch(fetchSAPData());
};

    useEffect(() => {
        fetchTopGainersAndLosersDataHandler();
        fetchSAPDataHandler();
    }, []);

    return (
        <Box w="100%" layerStyle={"flexCenter"} overflowX={"scroll"} overflowY={"hidden"} gap={"15px"}>
            <TopGainersSmallBox />
            {/* <TopLosersSmallBox /> */}
            {/* <BTCetfSmallBox /> */}
            <BTCDominanceSmallBox />
            <SandPSmallBox />
        </Box>
    );
};

export default HighlightsBox;