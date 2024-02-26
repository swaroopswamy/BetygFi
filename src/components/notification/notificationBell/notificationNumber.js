import { Box, Text } from "@chakra-ui/react";
import React from "react";

const NotificationNumber = ({ noOfNotifcations, ...rest }) => {
    return (
        <Box borderRadius={"50%"} bgColor={"#2A85FF"}
            layerStyle={"center"}
            {...rest}
        >
            <Text variant={'smallText'}>
                {noOfNotifcations}
            </Text>
        </Box>
    );
};

export default NotificationNumber;