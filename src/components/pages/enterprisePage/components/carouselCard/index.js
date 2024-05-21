import { Box, Text } from "@chakra-ui/react";
import React from "react";

const CarouselCard = ({
    featureName,
    fetaureText
}) => {
    return (
        <Box
            mr={"20px"}
            height={"400px"}
            padding={"2px"}
            borderRadius={"2px"}
            display="flex"
            w="280px"
            bgImage={"images/ent_carousel_card_frame.svg"}
            bgSize={"cover"}
            bgRepeat={"no-repeat"}
            flexDirection="column"
            transition="all 0.8s ease"
            _hover={{
                "& .first-part": {
                    height: "20%",
                },
                "& .second-part": {
                    height: "80%",
                    transform: "scaleY(1)",
                    backgroundImage: "/images/ent_carousel_card_hover.svg",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                },
                "& .hidden-area": {
                    display: "flex",
                }
            }}
        >
            <Box
                borderRadius={"2px"}
                id="ent-carousel-card-bg-box"
                className="first-part" h="80%"
                bgImage={"/images/ent_carousel_card_bg.svg"}
                bgSize={"cover"}
                bgRepeat={"no-repeat"}
                transition="all 0.5s ease"
            >

            </Box>
            <Box className="second-part" layerStyle={"flexColumn"} h="20%" bg="#060606" transition="all 0.3s ease" px="16px" py="10px">
                <Text variant={"ent_feature_title"} mb={"12px"} lineHeight={"28px"}>
                    {featureName}
                </Text>
                <Box layerStyle={"flexColumn"} className="hidden-area" display={"none"} >
                    <Text variant={"ent_subtitle"} textAlign={"left"} lineHeight={"21px"}>
                        {fetaureText}
                    </Text>
                </Box>
            </Box>
        </Box>
    );
};

export default CarouselCard;