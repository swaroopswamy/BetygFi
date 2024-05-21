import { Box, CloseButton, Text } from "@chakra-ui/react";
import React from "react";
import { features } from "../../helper";

const VideoBox = ({ featureSelected, setFeatureSelected }) => {
    return (
        <Box w="100%" h="100vh" position={"relative"}>
            <CloseButton size='lg' position={"absolute"} top={"20px"} left={"30px"} zIndex={10} onClick={() => { setFeatureSelected(null); }} color={"#FFFFFF"} />
            <Box id="video-player" h="100%" pos={"relative"}>
                <Box className="video-container">
                    <video autoPlay loop muted playsInline className="fullscreen-video"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        }}

                    >
                        <source src="/BetygFi_Video_Final.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </Box>

            </Box>
            <Box layerStyle={"center"}
                position={"absolute"}
                zIndex={10}
                w="100%" pt={"32px"} pb="86px" bg={"rgba(0,0,0,0.5)"}
                borderTop={"1px solid rgba(178, 126, 250, 0.42)"}
                px={"5%"}
                bottom={0}
            >
                <Box layerStyle={"flexCenter"} justifyContent={"space-around"} gap={"5%"}>
                    <Text variant={"ent_md_title"} w="30%">
                        {features[featureSelected]?.title}
                    </Text>
                    <Text variant={"ent_subtitle"} textAlign={"left"} w="60%" lineHeight={"30px"}>
                        {features[featureSelected]?.desc}
                    </Text>
                </Box>
            </Box>
        </Box>
    );
};

export default VideoBox;