"use client";
import React, { useState } from "react";
import { Box, Text, useColorMode, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, ModalCloseButton, Button, Tab, Tabs, TabList, TabPanel, TabPanels, useDisclosure } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import Image from "next/image";

const CustomizeTabLayoutPanel = dynamic(() => import("@components/pages/coin/CustomizeTabLayoutSettings"), { ssr: false });
const CustomizeTabAssetsPanel = dynamic(() => import("@components/pages/coin/CustomizeTabAssets"), { ssr: false });
const EditTabModal = dynamic(() => import("@components/pages/coin/EditTabModal"), { ssr: false });

const CustomizeCurrentTabModal = ({ isCustomizeCurrentTabModalOpen, onCustomizeCurrentTabModalClose, selectedCategory }) => {
    const { colorMode } = useColorMode();
    const [tabIndex, setTabIndex] = useState(0);
    const {
        isOpen: isEditTabModalOpen,
        onOpen: onEditTabModalOpen,
        onClose: onEditTabModalClose,
    } = useDisclosure();

    return (
        <>
            <Modal isOpen={isCustomizeCurrentTabModalOpen} onClose={onCustomizeCurrentTabModalClose} >
                <ModalOverlay
                    bg="blackAlpha.300"
                    backdropFilter="blur(10px) "
                />
                <ModalContent
                    zIndex={10000}
                    maxW={"800px"}
                    width={{ base: "90%" }}
                    padding={{ base: "10px", md: "20px 10px" }}
                    bgColor={colorMode === 'light' ? "#FFFFFF" : "#313131"}
                >
                    <ModalHeader layerStyle={"flexCenter"}>
                        <Text variant={"bigText"} fontSize={{ base: "24px" }} fontWeight={500} lineHeight={"16px"} letterSpacing={"0.32px"}>{selectedCategory}</Text>
                        <Box layerStyle={"flexCenter"} gap={"15px"} ml={"12px"}>
                            <Box onClick={onEditTabModalOpen} cursor={"pointer"}>
                                <Image width={24} height={24} src={colorMode === 'light' ? "/icons/Edit_Tab_Light.svg" : "/icons/Edit_Tab_Dark.svg"}></Image>
                            </Box>
                            <Box>
                                <Image width={24} height={24} src={colorMode === 'light' ? "/icons/Share_Tab_Light.svg" : "/icons/Share_Tab_Dark.svg"}></Image>
                            </Box>
                            <Box>
                                <Image width={24} height={24} src={colorMode === 'light' ? "/icons/Delete_Tab_Light.svg" : "/icons/Delete_Tab_Dark.svg"}></Image>
                            </Box>
                        </Box>
                    </ModalHeader>
                    <ModalCloseButton borderRadius={"50%"} backgroundColor={colorMode === 'light' ? "#F0F0F5" : "#191919"} mt={"10px"} />
                    <ModalBody px={{ base: "8px" }}>
                        <Tabs onChange={(index) => setTabIndex(index)} mt={"15px"}>
                            <TabList>
                                <Tab padding={"0px"}>
                                    <Box
                                        layerStyle={"flexCenter"}
                                        borderLeftRadius={"4px"}
                                        w={{ base: "100%", sm: "100%", midSize: "auto", md: "auto" }}
                                        padding={{ base: "12px 6px", md: "13px 15px" }}
                                        bgColor={tabIndex === 0 ?
                                            (colorMode === 'light' ? "#202020" : "#FFFFFF") :
                                            (colorMode === 'light' ? "#F0F0F5" : "#202020")
                                        }
                                    >
                                        <Text
                                            variant={"TabText"}
                                            color={tabIndex === 0 ?
                                                (colorMode === 'light' ? "#FFFFFF" : "#000000") :
                                                (colorMode === 'light' ? "#000000" : "#FFFFFF")
                                            }
                                        >
                                            Layout
                                        </Text>
                                        <Box
                                            display={{ base: "none", md: "block" }}
                                            width={15}
                                            height={15}
                                            paddingY={"3px"}
                                            borderRadius={"4px"}
                                            bgColor={tabIndex === 0 ?
                                                (colorMode === 'light' ? "#FFFFFF" : "#191919") :
                                                (colorMode === 'light' ? "#191919" : "#FFFFFF")
                                            }
                                            textAlign={"center"}
                                        >
                                            <Text
                                                variant={"footnoteText"}
                                                fontWeight={500}
                                                lineHeight={"10px"}
                                                color={tabIndex === 0 ?
                                                    (colorMode === 'light' ? "#191919" : "#FFFFFF") :
                                                    (colorMode === 'light' ? "#FFFFFF" : "#191919")
                                                }>
                                                1
                                            </Text>
                                        </Box>
                                    </Box>
                                </Tab>
                                <Tab padding={"0px"}>
                                    <Box
                                        layerStyle={"flexCenter"}
                                        borderRightRadius={"4px"}
                                        w={{ base: "100%", sm: "100%", midSize: "auto", md: "auto" }}
                                        padding={{ base: "12px 6px 12px 6px", md: "13px 19px 12px 15x" }}
                                        bgColor={tabIndex === 1 ?
                                            (colorMode === 'light' ? "#202020" : "#FFFFFF") :
                                            (colorMode === 'light' ? "#F0F0F5" : "#202020")
                                        }
                                    >
                                        <Text
                                            variant={"TabText"}
                                            color={tabIndex === 1 ?
                                                (colorMode === 'light' ? "#FFFFFF" : "#000000") :
                                                (colorMode === 'light' ? "#000000" : "#FFFFFF")
                                            }
                                        >
                                            Assets
                                        </Text>
                                    </Box>
                                </Tab>
                            </TabList>
                            <TabPanels>
                                <TabPanel p="0px">
                                    <CustomizeTabLayoutPanel />
                                </TabPanel>
                                <TabPanel p="0px">
                                    <CustomizeTabAssetsPanel />
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                        <Box layerStyle={"flexCenterSpaceBetween"} m={"40px 20px 10px 20px"}>
                            <Button variant={"modalButton"} width={100} height={30}>
                                Reset
                            </Button>
                            <Button display={{ base: "none", md: "block" }} variant={"modalButton"} width={100} height={30} onClick={onCustomizeCurrentTabModalClose}>
                                Cancel
                            </Button>
                        </Box>
                    </ModalBody>
                </ModalContent>
            </Modal >
            <EditTabModal
                isEditTabModalOpen={isEditTabModalOpen}
                onEditTabModalClose={onEditTabModalClose}
            />
        </>
    );
};

export default CustomizeCurrentTabModal;