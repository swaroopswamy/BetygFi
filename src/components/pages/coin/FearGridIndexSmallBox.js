import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const FearGridIndexSmallBox = () => {
    return (
        <Box
            width={"20%"}
            height={"197px"}
            borderRadius={"8px"}
            _light={{
                bg: "#FFFFFF"
            }}
            _dark={{
                bg: "#282828"
            }}
            p={"10px"}
        >
            <Box layerStyle={"spaceBetween"}>
                <Box layerStyle={"flexColumn"}>
                    <Box layerStyle={"flexCenter"}>
                        <Image
                            height={25}
                            width={25}

                            src="/icons/trophy.svg"
                            alt="trophy_icon"></Image>
                        <Text variant={"contentHeading3"} fontWeight={500} pl={"8px"}>
                            Fear/Greed Index
                        </Text>
                    </Box>
                    <Text variant={"textBold"} fontSize={"24px"}>Greed</Text>
                    <Text variant={"textBold"} fontSize={"24px"}>Next Update: 10hrs, 59 min</Text>

                </Box>
            </Box>
        </Box>
    );
};

export default FearGridIndexSmallBox;