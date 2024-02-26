"use client";
import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Text, Box } from '@chakra-ui/react';
import React from 'react';
import PublicNotificationCard from '@/components/notification/card/public';
import { useSession } from 'next-auth/react';
//import PrivateTabPanel from '@/components/notification/drawer/privateTabPanel';
import { useDispatch, useSelector } from 'react-redux';
import { clearAllNotification, clearAllNotificationReducer, markNotificationAsReadReducer, markNotificationRead } from '@/redux/app_data/dataSlice';
import NoNotificationCard from '@/components/notification/drawer/noNotificationCard';

const NotificationDrawer = ({ isOpen, onClose, notifications = [{ data: [] }] }) => {
    const { data: AuthSession } = useSession();
    const dispatch = useDispatch();
    const ValidatedUserData = useSelector((state) => state.authData.ValidatedUserData);

    const handleNotificationClick = (id) => {
        const payload = {
            id: id,
            userId: ValidatedUserData?.data?.id
        };
        Promise.all([dispatch(markNotificationAsReadReducer(payload)), dispatch(markNotificationRead(payload))]).then(res => res);
    };
    const handleClearNotification = () => {
        const payload = {
            userId: ValidatedUserData?.data?.id
        };
        Promise.all([dispatch(clearAllNotification(payload)), dispatch(clearAllNotificationReducer())]);
    };
    return (
        <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}

        >
            <DrawerOverlay backdropFilter="blur(10px)" />
            <DrawerContent
                w={{ md: "507px!important" }}
                maxWidth={{ md: "unset!important" }}
                _dark={{
                    bgColor: "#000000"
                }}
            >
                <Box layerStyle="spaceBetween">
                    <DrawerHeader pt="34px">
                        <Text variant="h1">
                            Notifications
                        </Text>
                    </DrawerHeader>
                    <DrawerCloseButton mt="13px" />
                </Box>

                <DrawerBody px="0px">

                    {(notifications.data?.length === 0 || notifications.data === null) ? (
                        <NoNotificationCard />
                    ) : (
                        /*  AuthSession ? (
                             <PrivateTabPanel notifications={notifications} handleNotificationClick={handleNotificationClick} />
                         ) : ( */

                        notifications.data?.map((notification, i) => {
                            return (
                                <PublicNotificationCard notification={notification} key={i} handleNotificationClick={handleNotificationClick} />
                            );
                        })
                        //)
                    )}
                    {AuthSession && (
                        notifications?.data?.notifications?.length > 0 && (
                            <Box
                                onClick={() => {
                                    handleClearNotification();
                                }}
                                my={"5px"}
                                pl={"26px"}
                                cursor={"pointer"}
                            >
                                <Text variant="blueLinkText">
                                    Clear All
                                </Text>
                            </Box>
                        )
                    )}
                </DrawerBody>

            </DrawerContent>
        </Drawer >
    );
};

export default NotificationDrawer;