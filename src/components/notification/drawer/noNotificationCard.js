import { Box, Text, useColorMode } from '@chakra-ui/react';
import React from 'react';

const NoNotificationCard = () => {
    const { colorMode } = useColorMode();
    return (
        <Box
            layerStyle={"center"}
            flexDir={"column"}
        >
            <Box w="230px" h="210px" mt="50px" mb={"20px"}>
                <i className={`icon ${colorMode === "light" ? 'no_notification_light' : 'no_notification_dark'}`} />
            </Box>
            <Text variant={"smallBoxHeader"} fontWeight={"700"} fontSize={"24px"} mb="16px">
                No Notifications!
            </Text>
            <Text variant={"paraText"} opacity={1} textAlign={"center"}>
                Stay tuned for updates and important <br /> announcements.
            </Text>
        </Box>
    )
}

export default NoNotificationCard;