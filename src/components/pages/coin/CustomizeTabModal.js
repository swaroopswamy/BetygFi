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
            <ModalContent
                zIndex={10000}
                maxW={"800px"}
                width={{ base: "90%" }}
                padding={{ base: "10px", md: "20px 10px" }}
                bgColor={colorMode === 'light' ? "#FFFFFF" : "#313131"}
                position={{ md: "fixed" }}
            >
                <ModalHeader>
                    <Text variant={"bigText"} fontSize={{ base: "24px" }} fontWeight={500} lineHeight={"16px"} letterSpacing={"0.32px"}>Tab Name</Text>
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
                        <Box layerStyle={"flexCenter"} gap={"10px"}>
                            <Button display={{ base: "none", md: "block" }} variant={"modalButton"} width={100} height={30} onClick={onCustomizeTabModalClose}>
                                Cancel
                            </Button>
                            <Button variant={"modalButton"} width={100} height={30}>
                                Apply
                            </Button>
                        </Box>
                    </Box>
                </ModalBody>
            </ModalContent>
        </Modal >
    );
};

export default CustomizeTabModal;