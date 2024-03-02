import { Box, Flex, Text, useColorMode } from "@chakra-ui/react";
import moment from "moment";
import Link from "next/link";
import React from "react";

const PublicNotificationCard = ({ notification,/*  handleNotificationClick  */ }) => {
    const { colorMode } = useColorMode();
    return (
        <Link
            href={notification?.link}
            target="_blank"
            /* onClick={() => {
                handleNotificationClick(notification?._id)
            }} */
            cursor={"pointer"}
        >
            <Box
                cursor={"pointer"}
                display={"flex"}
                alignItems={"start"}
                borderRadius={"5px"}
                mb='2px'
                py="25px"
                _light={{
                    bgColor: notification?.isSeen === false ? "#F1F3FD" : "transparent"
                }}
                _dark={{
                    bgColor: notification?.isSeen === false ? "#2C2C2C" : "transparent"
                }}
                pos={"relative"}
                _after={{
                    width: "90%",
                    height: "1px",
                    bgColor: '#D9D9D9',
                    bottom: '-1px',
                    left: "0px",
                    right: "0px",
                    marginRight: "auto",
                    marginLeft: "auto",
                    pos: "absolute",
                    content: '""'

                }}
            >
                <Flex alignItems={"center"} pl={notification?.isSeen !== false ? "24px" : "0px"}>
                    {
                        notification?.isSeen === false && (
                            <Box w="8px" h="8px" bgColor={"#2A85FF"} mx="9px" borderRadius={"50%"}></Box>
                        )
                    }
                    <i className={`icon ${colorMode === 'light' ? 'solvendo_notification_light' : 'solvendo_notification_dark'}`} />
                </Flex>
                <Box layerStyle={"flexColumn"} pl="8px">
                    <Text variant={"textBold"}>
                        Explore Top Tags and Posts!
                    </Text>
                    <Text variant={"textBold"} fontWeight={'400'}>
                        {notification?.message}
                    </Text>
                    <Text variant={"greySmallText"}>
                        {moment(notification?.updatedAt).fromNow()}
                    </Text>
                </Box>
            </Box>
        </Link>
    );
};

export default PublicNotificationCard;