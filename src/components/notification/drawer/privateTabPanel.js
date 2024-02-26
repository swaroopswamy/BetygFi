import { Tab, TabList, TabPanel, TabPanels, Tabs, Text, /* useColorMode */ } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
//import NotificationNumber from "@/components/notifcation/notificationBell/notificationNumber";
import PrivateNotificationCard from "@/components/notification/card/private";
import NoNotificationCard from '@/components/notification/drawer/noNotificationCard';


const PrivateTabPanel = ({ handleNotificationClick, notifications }) => {
    //const { colorMode } = useColorMode();
    const [tabSelected, setTabSelected] = useState(0);
    const handleTabSelected = (tab) => {
        setTabSelected(tab);
    };
    const [hasPrivate, setHasPrivate] = useState(false);
    useEffect(() => {

        notifications?.data?.notifications.map((notification) => {
            if (notification?.type === 'private') {
                setHasPrivate(true);
            }
        });
    }, [notifications]);
    return (
        <Tabs index={tabSelected} onChange={(i) => { handleTabSelected(i); }} >
            <TabList
                px="24px"
                borderTopLeftRadius={"5px"}
                borderTopRightRadius={"5px"}>
                <Tab
                    layerStyle={"flexCenter"}
                    _selected={{
                        bgColor: "#F1F3FD",
                        borderTopLeftRadius: "5px",
                        borderTopRightRadius: "5px"
                    }}
                    h="30px"
                >
                    <Text
                        variant={"tabText"}
                        fontWeight={tabSelected === 0 ? "700" : "400"}
                        _dark={{
                            color: tabSelected === 0 && "#000000"
                        }}
                    >
                        All
                    </Text>
                    {/* {
                        (notifications?.data?.publicCount + notifications?.data?.privateCount) > 0 && (
                            <NotificationNumber
                                noOfNotifcations={notifications?.data?.publicCount + notifications?.data?.privateCount}
                                w={'20px'}
                                h={'20px'}
                                ml="7px"
                            />
                        )
                    } */}

                </Tab>
                <Tab
                    layerStyle={"flexCenter"}
                    _selected={{
                        bgColor: "#F1F3FD",
                        borderTopLeftRadius: "5px",
                        borderTopRightRadius: "5px"
                    }}
                    h="30px"
                >
                    <Text
                        variant={"tabText"}
                        _dark={{
                            color: tabSelected === 1 && "#000000"
                        }}
                        fontWeight={tabSelected === 1 ? "700" : "400"}
                    >
                        Community
                    </Text>
                    {/* {
                        notifications?.data?.privateCount > 0 && (
                            <NotificationNumber
                                noOfNotifcations={notifications?.data?.privateCount}
                                w={'20px'}
                                h={'20px'}
                                ml="7px"
                            />
                        )
                    } */}
                </Tab>
            </TabList>

            <TabPanels >
                <TabPanel px="0">
                    {
                        notifications?.data?.publicCount || notifications?.data?.privateCount > 0 ? (
                            notifications?.data?.notifications?.map((notification, i) => {
                                return (
                                    <PrivateNotificationCard notification={notification} key={i} handleNotificationClick={handleNotificationClick} />
                                );
                            })) : (
                            <NoNotificationCard />
                        )
                    }
                </TabPanel>
                <TabPanel px="0">
                    {
                        hasPrivate ?
                            (notifications?.data?.notifications?.map((notification, i) => {
                                if (notification?.type === "private") {
                                    return (
                                        <PrivateNotificationCard notification={notification} key={i} handleNotificationClick={handleNotificationClick} />
                                    );
                                }
                            }))
                            :
                            (
                                <NoNotificationCard />
                            )
                    }
                </TabPanel>
            </TabPanels>
        </Tabs >
    );
};

export default PrivateTabPanel;