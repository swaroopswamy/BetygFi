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
            transform={"rotate(-2deg);"}
            bgImage={"/images/tilted_sec_bg.svg"}
            bgRepeat={"no-repeat"}
            bgSize={"cover"}
            zIndex={2}
            p="40px"
        >
            <Text variant={"campaign_feature_heading"} fontWeight={400} color={"#FFFFFF"}>
                Claim your <b>$1,236</b> worth of <b>Credit for free</b> valid for a year!
            </Text>
        </Box>
    );
});

TiltedBox.displayName = "TiltedBox";
export default TiltedBox;