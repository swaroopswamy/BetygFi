import { Box, Text } from "@chakra-ui/react";
import React from "react";

const TiltedBox = React.memo(({ scrollToApply }) => {
    return (
        <Box
            w="105%"
            layerStyle={"center"}
            position={"absolute"}
            top={{ base: "5px", md: "-10px" }}
            left={"-5px"}
            className="tilted-div"
            zIndex={2}
            py="2px"
        >
            <Box
                mb="2px"
                p={{ base: "20px", lg: "60px" }}
                bgImage={"/images/tilted_sec_bg.svg"}
                bgRepeat={"no-repeat"}
                bgSize={"cover"}
                w="100%"
                h={"100%"}
                layerStyle={"center"}
            >
                <Text
                    variant={"campaign_feature_heading"}
                    cursor={"pointer"}
                    fontWeight={400}
                    textAlign={"center"} color={"#FFFFFF"}
                    onClick={() => {
                        scrollToApply();
                    }}
                >
                    Claim your <b>$1,236</b> worth of <b>Credit for free</b> valid for a year! <b><u>Unlock Now</u></b>
                </Text>

            </Box>

        </Box>
    );
});

TiltedBox.displayName = "TiltedBox";
export default TiltedBox;