import { Box, Text } from "@chakra-ui/react";
import React from "react";

const TiltedBox = React.memo(() => {
    return (
        <Box
            w="105%"
            layerStyle={"center"}
            position={"absolute"}
            top={0}
            left={"-5px"}
            className="tilted-div"
            zIndex={2}
            py="2px"
        >
            <Box
                mb="2px"
                p="60px"
                bgImage={"/images/tilted_sec_bg.svg"}
                bgRepeat={"no-repeat"}
                bgSize={"cover"}
                w="100%"
                h={"100%"}
                border={"2px solid #F1F6FF"}
            >
                <Text variant={"campaign_feature_heading"} fontWeight={400} w="100%" textAlign={"center"} color={"#FFFFFF"}>
                    Claim your <b>$1,236</b> worth of <b>Credit for free</b> valid for a year!
                </Text>
            </Box>

        </Box>
    );
});

TiltedBox.displayName = "TiltedBox";
export default TiltedBox;