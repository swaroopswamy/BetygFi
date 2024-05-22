"use client";
import { Box, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const FeatureCard = ({
    id,
    icon,
    bigTitle,
    smallTitle,
    desc,
    onClick
}) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <Box
            mx={"10px"}
            my={"10px"}
            cursor={"pointer"}
            className="ent-feature-card"
            onMouseEnter={() => { setIsHovered(true); }}
            onMouseLeave={() => { setIsHovered(false); }}
            bgImage={isHovered ? "url('/images/ent_feature_card_hover_bg.svg')" : "url('/images/ent_feature_card_bg.svg')"}
            bgSize={"auto"}
            bgRepeat={"no-repeat"}
            onClick={() => { onClick(id); }}
        >
            {
                !isHovered ? (
                    <Box
                        p={"24px 40px"}
                        layerStyle={"flexColumn"}
                    >
                        <i className={`icon ${icon}`} />
                        <Text mt={"20px"} variant={"ent_feature_title"}>{bigTitle}</Text>
                    </Box>
                ) : (
                    <Box
                        p={"22px"}
                        layerStyle={"flexColumn"}
                    >
                        <Text mb={"10px"} variant={"ent_feature_title"}>{smallTitle}</Text>
                        <Text mt={"10px"} variant={"ent_feature_desc"}>{desc}</Text>
                    </Box>
                )
            }
        </Box>
    );
};

export default FeatureCard;