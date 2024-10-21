"use client";
import React, { useState, useEffect } from "react";
import { Box, Text, useColorMode, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, ModalCloseButton, Button, useDisclosure } from "@chakra-ui/react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";

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
        setPinnedCategories(storedPinnedCategories);
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

    const isCategoryPinned = (category) => pinnedCategories.includes(category.slug);
    const orderedCategories = cryptoCategories.length > 0
        ? [
            ...cryptoCategories.filter(category => isCategoryPinned(category)),
            ...cryptoCategories.filter(category => !isCategoryPinned(category))
        ]
        : [];

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
                            {orderedCategories && orderedCategories.length > 0 ? (
                                orderedCategories.map((category, index) => (
                                    <Box
                                        key={index}
                                        layerStyle={"flexCenterSpaceBetween"}
                                        py={"20px"}
                                        cursor={"pointer"}
                                        _hover={{
                                            bgColor: colorMode === "light" ? "#F0F0F5" : "#191919",
                                        }}
                                        borderBottom={"1px solid #F0F0F5"}
                                        onClick={() => {
                                            setCryptoCategorySelected(category.slug);
                                            setTabSelected(index);
                                            onTabLibraryModalClose();
                                        }}
                                    >
                                        <Box layerStyle={"flexCenter"}>
                                            <Image src={"/icons/Menu_Icon.svg"} width={25} height={25} alt=" "></Image>
                                            <Box layerStyle={"flexCenter"} ml={"15px"}>
                                                <Box m={"5px 0px 0px 5px"} onClick={() => setCryptoCategorySelected(category.slug)}>
                                                    <Text variant={"contentHeading4"} fontSize={"16px"} lineHeight={"10px"} >
                                                        {category.text}
                                                    </Text>
                                                    <Text variant={"contentHeading4"} fontSize={"12px"} mt={"5px"} color={colorMode === 'light' ? "#757575" : "#A5A5A5"}>
                                                        7 Columns, 3 Filters . 10min ago
                                                    </Text>
                                                </Box>
                                            </Box>
                                        </Box>
                                        <Box onClick={(e) => {
                                            e.stopPropagation();
                                            togglePinCategory(category);
                                        }}>
                                            <Image
                                                src={isCategoryPinned(category) ?
                                                    (colorMode === 'light' ? "/icons/Unpin_Icon.svg" : "/icons/Unpin_Icon_Dark.svg") :
                                                    (colorMode === 'light' ? "/icons/Pin_Icon.svg" : "/icons/Pin_Icon_Dark.svg")}
                                                width={24}
                                                height={24}
                                                alt={isCategoryPinned(category) ? "pin" : "Unpin"}
                                            />
                                        </Box>
                                    </Box>
                                ))
                            ) : (
                                <Text>No categories available</Text>
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