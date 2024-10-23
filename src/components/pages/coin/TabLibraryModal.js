"use client";
import React, { useState, useEffect } from "react";
import { Box, Text, useColorMode, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, ModalCloseButton, Button, useDisclosure } from "@chakra-ui/react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";

const CustomizeNewTabModal = dynamic(() => import("@components/pages/coin/CustomizeNewTabModal"), { ssr: false });
const LoginPage = dynamic(() => import("@components/login"), { ssr: false });

const TabLibraryModal = ({
    isTabLibraryModalOpen,
    onTabLibraryModalClose,
    setCryptoCategorySelected,
    setTabSelected,
    cryptoCategories = []
}) => {
    const { colorMode } = useColorMode();
    const { data: AuthSession } = useSession();
    const [pinnedCategories, setPinnedCategories] = useState([]);
    const [pinnedLayouts, setPinnedLayouts] = useState([]);
    const CreatedTabLayoutsData = useSelector((state) => state?.authData?.CreatedTabLayoutsData);

    const handleCategorySelection = (category, index) => {
        setCryptoCategorySelected(category.slug);
        setTabSelected(index);
        onTabLibraryModalClose(); 
    };

    const {
        isOpen: isLoginModalOpen,
        onOpen: onLoginModalOpen,
        onClose: onLoginModalClose,
    } = useDisclosure();

    const {
        isOpen: isCustomizeNewTabModalOpen,
        onOpen: onCustomizeNewTabModalOpen,
        onClose: onCustomizeNewTabModalClose,
    } = useDisclosure();
    useEffect(() => {
        const storedPinnedCategories = JSON.parse(localStorage.getItem('pinnedCategories')) || [];
        const storedPinnedLayouts = JSON.parse(localStorage.getItem('pinnedLayouts')) || [];
        setPinnedCategories(storedPinnedCategories);
        setPinnedLayouts(storedPinnedLayouts);
    }, []);

    const togglePinCategory = (category) => {
        let updatedPinnedCategories;
        if (pinnedCategories.includes(category.slug)) {
            updatedPinnedCategories = pinnedCategories.filter(slug => slug !== category.slug);
        } else {
            updatedPinnedCategories = [...pinnedCategories, category.slug];
        }
        setPinnedCategories(updatedPinnedCategories);
        localStorage.setItem('pinnedCategories', JSON.stringify(updatedPinnedCategories));
    };

    const togglePinLayout = (layout) => {
        let updatedPinnedLayouts;
        if (pinnedLayouts.includes(layout._id)) {
            updatedPinnedLayouts = pinnedLayouts.filter(id => id !== layout._id);
        } else {
            updatedPinnedLayouts = [...pinnedLayouts, layout._id];
        }
        setPinnedLayouts(updatedPinnedLayouts);
        localStorage.setItem('pinnedLayouts', JSON.stringify(updatedPinnedLayouts));
    };

    const isCategoryPinned = (category) => pinnedCategories.includes(category.slug);
    const isLayoutPinned = (layout) => pinnedLayouts.includes(layout._id);

    const orderedItems = [
        ...cryptoCategories.filter(category => isCategoryPinned(category)),
        ...(CreatedTabLayoutsData?.data?.filter(layout => isLayoutPinned(layout)) || []),
        ...cryptoCategories.filter(category => !isCategoryPinned(category)),
        ...(CreatedTabLayoutsData?.data?.filter(layout => !isLayoutPinned(layout)) || [])
    ];

    return (
        <>
            <Modal isOpen={isTabLibraryModalOpen} onClose={onTabLibraryModalClose} >
                <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
                <ModalContent
                    zIndex={10000}
                    maxW={"800px"}
                    width={{ base: "90%" }}
                    padding={{ base: "10px", md: "20px 10px" }}
                    bgColor={colorMode === 'light' ? "#FFFFFF" : "#313131"}
                    position={{ md: "fixed" }}
                >
                    <ModalHeader>
                        <Text variant={"bigText"} fontSize={{ base: "24px" }} fontWeight={500} lineHeight={"16px"} letterSpacing={"0.32px"}>Tab Library</Text>
                    </ModalHeader>
                    <ModalCloseButton borderRadius={"50%"} backgroundColor={colorMode === 'light' ? "#F0F0F5" : "#191919"} mt={"10px"} />
                    <ModalBody>
                        <Box className="hidescrollbar" layerStyle={"flexColumn"} overflowY={"auto"} maxHeight={"400px"} mt={"15px"}>
                            {orderedItems && orderedItems.length > 0 ? (
                                orderedItems.map((item, index) => {
                                    const isCategory = item.slug ? true : false;
                                    return (
                                        <Box
                                            key={isCategory ? item.slug : item._id}
                                            layerStyle={"flexCenterSpaceBetween"}
                                            py={"20px"}
                                            cursor={"pointer"}
                                            _hover={{
                                                bgColor: colorMode === "light" ? "#F0F0F5" : "#191919",
                                            }}
                                            borderBottom={"1px solid #F0F0F5"}
                                            onClick={() => handleCategorySelection(isCategory ? item : item.layout, index)}
                                        >
                                            <Box layerStyle={"flexCenter"}>
                                                <Image src={"/icons/Menu_Icon.svg"} width={25} height={25} alt=" "></Image>
                                                <Box layerStyle={"flexCenter"} ml={"15px"}>
                                                    <Box m={"5px 0px 0px 5px"}>
                                                        <Text variant={"contentHeading4"} fontSize={"16px"} lineHeight={"10px"} >
                                                            {isCategory ? item.text : item.layoutName}
                                                        </Text>
                                                        <Text variant={"contentHeading4"} fontSize={"12px"} mt={"5px"} color={colorMode === 'light' ? "#757575" : "#A5A5A5"}>
                                                            {isCategory ? "7 Columns, 3 Filters . 10min ago" : `${item.columns} Columns . ${item.ageFromCreation} ago`}
                                                        </Text>
                                                    </Box>
                                                </Box>
                                            </Box>
                                            <Box onClick={(e) => {
                                                e.stopPropagation();
                                                if (isCategory) {
                                                    togglePinCategory(item);
                                                } else {
                                                    togglePinLayout(item);
                                                }
                                            }}>
                                                <Image
                                                    src={isCategory
                                                        ? (isCategoryPinned(item) ?
                                                            (colorMode === 'light' ? "/icons/Unpin_Icon.svg" : "/icons/Unpin_Icon_Dark.svg") :
                                                            (colorMode === 'light' ? "/icons/Pin_Icon.svg" : "/icons/Pin_Icon_Dark.svg"))
                                                        : (isLayoutPinned(item) ?
                                                            (colorMode === 'light' ? "/icons/Unpin_Icon.svg" : "/icons/Unpin_Icon_Dark.svg") :
                                                            (colorMode === 'light' ? "/icons/Pin_Icon.svg" : "/icons/Pin_Icon_Dark.svg"))
                                                    }
                                                    width={24}
                                                    height={24}
                                                    alt={isCategory
                                                        ? (isCategoryPinned(item) ? "Unpin" : "Pin")
                                                        : (isLayoutPinned(item) ? "Unpin" : "Pin")}
                                                />
                                            </Box>
                                        </Box>
                                    );
                                })
                            ) : (
                                <Text>No categories or layouts available</Text>
                            )}
                        </Box>

                        <Box layerStyle={"flexCenterSpaceBetween"} m={"100px 20px 10px 20px"}>
                            <Box position="absolute" bottom="35px" right="25px">
                                <Button variant={"blackButton"} width={150} height={35}
                                    onClick={() => {
                                        if (!AuthSession) {
                                            onLoginModalOpen();
                                        } else {
                                            onCustomizeNewTabModalOpen();
                                            onTabLibraryModalClose();
                                        }
                                    }}>
                                    Create New Tab
                                </Button>
                            </Box>
                        </Box>
                    </ModalBody>
                </ModalContent>
            </Modal>
            <LoginPage
                isOpen={isLoginModalOpen}
                onOpen={onLoginModalOpen}
                onClose={onLoginModalClose}
            />
            <CustomizeNewTabModal
                isCustomizeNewTabModalOpen={isCustomizeNewTabModalOpen}
                onCustomizeNewTabModalClose={onCustomizeNewTabModalClose}
            />
        </>
    );
};

export default TabLibraryModal;