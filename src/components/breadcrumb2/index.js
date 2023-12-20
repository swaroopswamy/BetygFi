import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Box, useColorModeValue, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";

export const BreadCrumb = ({ text, link }) => {
    const router = useRouter();

    return (
        <Box
            layerStyle={"flexCenter"}
            cursor={"pointer"}
            gap={"10px"}
            onClick={() => router.push(link)}
        >
            <ChevronLeftIcon
                w={"24px"}
                h={"24px"}
                borderRadius={"50%"}
                border={useColorModeValue("1px solid #E1E1E1", "1px solid #333333")}
            />
            <Text
                variant={"h5"}
                letterSpacing={"1.2px"}
                _light={{ color: "#16171B" }}
                _dark={{ color: "#A8ADBD" }}
            >
                {text}
            </Text>
        </Box>
    );
};