"use client";
import React, { useState } from "react";
import { Box, Text, useColorMode, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, ModalCloseButton, Button, Tab, Tabs, TabList, TabPanel, TabPanels } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import dynamic from "next/dynamic";
import Image from "next/image";

const CustomizeTabLayoutPanel = dynamic(() => import("@components/pages/coin/CustomizeTabLayoutSettings"), { ssr: false });
const CustomizeTabAssetsPanel = dynamic(() => import("@components/pages/coin/CustomizeTabAssets"), { ssr: false });

const CustomizeTabModal = ({ isCustomizeTabModalOpen, onCustomizeTabModalClose }) => {

    const { colorMode } = useColorMode();
    const [tabIndex, setTabIndex] = useState(0);
    const ValidatedUserData = useSelector((state) => state.authData.ValidatedUserData);
    {
        ValidatedUserData?.AnnotationState &&
            <Box>
                <Image src={"/icons/tooltip.svg"} width={16} height={16} alt=" "></Image>
            </Box>;
    }

    return (
        <Modal isOpen={isCustomizeTabModalOpen} onClose={onCustomizeTabModalClose} >
            <ModalOverlay
                bg="blackAlpha.300"
                backdropFilter="blur(10px) "
            />
            <ModalContent zIndex={10000} maxW={"800px"} padding={"20px 10px"} bgColor={colorMode === 'light' ? "#FFFFFF" : "#202020"} position={"fixed"}>
                <ModalHeader>
                    <Text variant={"bigText"} fontWeight={500} lineHeight={"16px"} letterSpacing={"0.32px"}>Tab Name</Text>
                </ModalHeader>
                <ModalCloseButton borderRadius={"50%"} backgroundColor={colorMode === 'light' ? "#F0F0F5" : "#191919"} mt={"10px"} />
                <ModalBody>
                    <Tabs onChange={(index) => setTabIndex(index)} mt={"15px"}>
                        <TabList>
                            <Tab padding={"0px"}>
                                <Box
                                    layerStyle={"flexCenter"}
                                    w={{ base: "100%", sm: "100%", midSize: "auto", md: "auto" }}
                                    padding={{ base: "12px 6px 12px 6px", md: "13px 19px 12px 12px" }}
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
                                </Box>
                            </Tab>
                            <Tab padding={"0px"}>
                                <Box
                                    w={{ base: "100%", sm: "100%", midSize: "auto", md: "auto" }}
                                    layerStyle={"flexCenter"}
                                    padding={{ base: "12px 6px 12px 6px", md: "13px 19px 12px 15x" }}
                                    bgColor={tabIndex === 1 ?
                                        (colorMode === 'light' ? "#202020" : "#FFFFFF") :
                                        (colorMode === 'light' ? "#F0F0F5" : "#202020")
                                    }
                                >
                                    <Text
                                        variant={"TabText"}
                                        color={tabIndex === 1 ?
                                            (colorMode === 'light' ? "#FFFFFF" : "#202020") :
                                            (colorMode === 'light' ? "#202020" : "#FFFFFF")
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
                    <Box layerStyle={"flexCenterSpaceBetween"} m={"50px 20px 10px 20px"}>
                        <Button variant={"modalButton"} width={100} height={30}>
                            Reset
                        </Button>
                        <Box layerStyle={"flexCenter"} gap={"10px"}>
                            <Button variant={"modalButton"} width={100} height={30} onClick={onCustomizeTabModalClose}>
                                Cancel
                            </Button>
                            <Button variant={"modalButton"} width={100} height={30}>
                                Apply
                            </Button>
                        </Box>
                    </Box>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default CustomizeTabModal;