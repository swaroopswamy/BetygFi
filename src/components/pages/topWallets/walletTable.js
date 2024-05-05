"use client";
import React from "react";
import { Text, Box, useColorModeValue, useMediaQuery, } from "@chakra-ui/react";
import MDWalletTable from "./MDWalletTable";
import SMWalletTable from "./SMWalletTable";
import SlideToLeftWalletTable from "./SlideToLeftWalletTable";

const WalletTable = ({ slideToLeftFeature }) => {
    const [isMd] = useMediaQuery("(min-width: 768px)");

    return (
        <Box
            borderRadius={"6px"}
            _light={{ borderColor: "#FFFFFF" }}
            _dark={{ borderColor: "#202020" }}
            overflow={"auto"}
        >
            <Box
                width={"160vw"}
                layerStyle={"flexCenterSpaceBetween"}
                padding={{ base: "0px", md: "8px 30px 8px 30px" }}
                background={useColorModeValue("#FFFFFF", "#202020")}
            >
                <Box>
                    <Text
                        color={useColorModeValue("#16171B", "#FFFFFF")}
                        ml={{ base: "14px", md: "10px" }}
                        mb={"20px"}
                        mt={"20px"}
                        fontSize={{ base: "14px", md: "18px" }}
                        fontWeight={600}
                        lineHeight={"20px"}
                        textTransform={"capitalize"}
                    >
                        Top Value Holders
                    </Text>
                </Box>
            </Box>
            {
                isMd
                    ? <MDWalletTable />
                    : (
                        slideToLeftFeature
                            ? <SlideToLeftWalletTable slideToLeftFeature />
                            : <SMWalletTable />
                    )}
        </Box>
    );
};

export default WalletTable;
