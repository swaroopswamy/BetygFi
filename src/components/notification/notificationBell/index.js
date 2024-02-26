import { Box, useColorMode } from "@chakra-ui/react";
import React from "react";
import NotificationNumber from "@/components/notification/notificationBell/notificationNumber";


const NotificationBell = ({
    onClick,
    noOfNotifcations = 0,
    ...rest
}) => {
    const { colorMode } = useColorMode();
    return (
        <Box ml={"9px"} pos={"relative"}
            cursor={"pointer"}
            onClick={onClick}
            {...rest}
        >
            <i
                className={`icon ${colorMode === "light" ? "bell_light" : "bell_dark"
                    }`}
            /* onClick={() => {
                toggleColorModeGlobally();
            }} */
            />
            {
                noOfNotifcations !== 0 && (
                    <NotificationNumber
                        noOfNotifcations={noOfNotifcations}
                        pos={"absolute"} top={'-7px'} right={'-5px'} w={'20px'} h={'20px'}
                    />)
            }
        </Box>
    );
};

export default NotificationBell;