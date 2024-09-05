"use client";
import React from "react";
import { Box, Text, useColorMode, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, ModalCloseButton, Button, useDisclosure } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Image from "next/image";
import LoginPage from "@components/login";
import { useSession } from "next-auth/react";

const TabLibraryModal = ({ isTabLibraryModalOpen, onTabLibraryModalClose, onCustomizeTabModalOpen }) => {
    const { colorMode } = useColorMode();
    const { data: AuthSession } = useSession();
    const ValidatedUserData = useSelector((state) => state.authData.ValidatedUserData);
    {
        ValidatedUserData?.AnnotationState &&
            <Box>
                <Image src={"/icons/tooltip.svg"} width={16} height={16} alt=" "></Image>
            </Box>;
    }

    const {
        isOpen: isLoginModalOpen,
        onOpen: onLoginModalOpen,
        onClose: onLoginModalClose,
    } = useDisclosure();

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
                            <Box layerStyle={"flexCenterSpaceBetween"} my={"20px"}>
                                <Box layerStyle={"flexCenter"}>
                                    <Image src={"/icons/Menu_Icon.svg"} width={25} height={25} alt=" "></Image>
                                    <Box layerStyle={"flexCenter"} ml={"15px"}>
                                        <Box m={"5px 0px 0px 5px"}>
                                            <Text variant={"contentHeading4"} fontSize={"16px"} lineHeight={"10px"} >
                                                Prediction Markets
                                            </Text>
                                            <Text variant={"contentHeading4"} fontSize={"12px"} mt={"5px"} color={colorMode === 'light' ? "#757575" : "#A5A5A5"}>
                                                7  Columns, 3 Filters . 10min ago
                                            </Text>
                                        </Box>
                                    </Box>
                                </Box>
                                <Image src={"/icons/Pin_Icon.svg"} width={24} height={24} alt=" "></Image>
                            </Box>
                            <Box layerStyle={"flexCenterSpaceBetween"} my={"20px"}>
                                <Box layerStyle={"flexCenter"}>
                                    <Image src={"/icons/Menu_Icon.svg"} width={25} height={25} alt=" "></Image>
                                    <Box layerStyle={"flexCenter"} ml={"15px"}>
                                        <Box m={"5px 0px 0px 5px"}>
                                            <Text variant={"contentHeading4"} fontSize={"16px"} lineHeight={"10px"} >
                                                Insurance
                                            </Text>
                                            <Text variant={"contentHeading4"} fontSize={"12px"} mt={"5px"} color={colorMode === 'light' ? "#757575" : "#A5A5A5"}>
                                                7  Columns, 3 Filters . 10min ago
                                            </Text>
                                        </Box>
                                    </Box>
                                </Box>
                                <Image src={"/icons/Pin_Icon.svg"} width={24} height={24} alt=" "></Image>
                            </Box>
                            <Box layerStyle={"flexCenterSpaceBetween"} my={"20px"}>
                                <Box layerStyle={"flexCenter"}>
                                    <Image src={"/icons/Menu_Icon.svg"} width={25} height={25} alt=" "></Image>
                                    <Box layerStyle={"flexCenter"} ml={"15px"}>
                                        <Box m={"5px 0px 0px 5px"}>
                                            <Text variant={"contentHeading4"} fontSize={"16px"} lineHeight={"10px"} >
                                                Derivatives
                                            </Text>
                                            <Text variant={"contentHeading4"} fontSize={"12px"} lineHeight={"22px"} mt={"3px"}>
                                                Lorem ipsum dolor sit amet consectetur. Fringilla ante nulla euismod risus. Nec nulla pellentesque...
                                            </Text>
                                            <Text variant={"contentHeading4"} fontSize={"12px"} mt={"1px"} color={colorMode === 'light' ? "#757575" : "#A5A5A5"}>
                                                7  Columns, 3 Filters . 10min ago
                                            </Text>
                                        </Box>
                                    </Box>
                                </Box>
                                <Image src={"/icons/Pin_Icon.svg"} width={24} height={24} alt=" "></Image>
                            </Box>
                            <Box layerStyle={"flexCenterSpaceBetween"} my={"20px"}>
                                <Box layerStyle={"flexCenter"}>
                                    <Image src={"/icons/Menu_Icon.svg"} width={25} height={25} alt=" "></Image>
                                    <Box layerStyle={"flexCenter"} ml={"15px"}>
                                        <Box m={"5px 0px 0px 5px"}>
                                            <Text variant={"contentHeading4"} fontSize={"16px"} lineHeight={"10px"} >
                                                Prediction Markets
                                            </Text>
                                            <Text variant={"contentHeading4"} fontSize={"12px"} mt={"5px"} color={colorMode === 'light' ? "#757575" : "#A5A5A5"}>
                                                7  Columns, 3 Filters . 10min ago
                                            </Text>
                                        </Box>
                                    </Box>
                                </Box>
                                <Image src={"/icons/Pin_Icon.svg"} width={24} height={24} alt=" "></Image>
                            </Box>
                            <Box layerStyle={"flexCenterSpaceBetween"} my={"20px"}>
                                <Box layerStyle={"flexCenter"}>
                                    <Image src={"/icons/Menu_Icon.svg"} width={25} height={25} alt=" "></Image>
                                    <Box layerStyle={"flexCenter"} ml={"15px"}>
                                        <Box m={"5px 0px 0px 5px"}>
                                            <Text variant={"contentHeading4"} fontSize={"16px"} lineHeight={"10px"} >
                                                Insurance
                                            </Text>
                                            <Text variant={"contentHeading4"} fontSize={"12px"} mt={"5px"} color={colorMode === 'light' ? "#757575" : "#A5A5A5"}>
                                                7  Columns, 3 Filters . 10min ago
                                            </Text>
                                        </Box>
                                    </Box>
                                </Box>
                                <Image src={"/icons/Pin_Icon.svg"} width={24} height={24} alt=" "></Image>
                            </Box>
                            <Box layerStyle={"flexCenterSpaceBetween"} my={"20px"}>
                                <Box layerStyle={"flexCenter"}>
                                    <Image src={"/icons/Menu_Icon.svg"} width={25} height={25} alt=" "></Image>
                                    <Box layerStyle={"flexCenter"} ml={"15px"}>
                                        <Box m={"5px 0px 0px 5px"}>
                                            <Text variant={"contentHeading4"} fontSize={"16px"} lineHeight={"10px"} >
                                                Derivatives
                                            </Text>
                                            <Text variant={"contentHeading4"} fontSize={"12px"} lineHeight={"22px"} mt={"3px"}>
                                                Lorem ipsum dolor sit amet consectetur. Fringilla ante nulla euismod risus. Nec nulla pellentesque...
                                            </Text>
                                            <Text variant={"contentHeading4"} fontSize={"12px"} mt={"1px"} color={colorMode === 'light' ? "#757575" : "#A5A5A5"}>
                                                7  Columns, 3 Filters . 10min ago
                                            </Text>
                                        </Box>
                                    </Box>
                                </Box>
                                <Image src={"/icons/Pin_Icon.svg"} width={24} height={24} alt=" "></Image>
                            </Box>
                            <Box layerStyle={"flexCenterSpaceBetween"} my={"20px"}>
                                <Box layerStyle={"flexCenter"}>
                                    <Image src={"/icons/Menu_Icon.svg"} width={25} height={25} alt=" "></Image>
                                    <Box layerStyle={"flexCenter"} ml={"15px"}>
                                        <Box m={"5px 0px 0px 5px"}>
                                            <Text variant={"contentHeading4"} fontSize={"16px"} lineHeight={"10px"} >
                                                Prediction Markets
                                            </Text>
                                            <Text variant={"contentHeading4"} fontSize={"12px"} mt={"5px"} color={colorMode === 'light' ? "#757575" : "#A5A5A5"}>
                                                7  Columns, 3 Filters . 10min ago
                                            </Text>
                                        </Box>
                                    </Box>
                                </Box>
                                <Image src={"/icons/Pin_Icon.svg"} width={24} height={24} alt=" "></Image>
                            </Box>
                            <Box layerStyle={"flexCenterSpaceBetween"} my={"20px"}>
                                <Box layerStyle={"flexCenter"}>
                                    <Image src={"/icons/Menu_Icon.svg"} width={25} height={25} alt=" "></Image>
                                    <Box layerStyle={"flexCenter"} ml={"15px"}>
                                        <Box m={"5px 0px 0px 5px"}>
                                            <Text variant={"contentHeading4"} fontSize={"16px"} lineHeight={"10px"} >
                                                Insurance
                                            </Text>
                                            <Text variant={"contentHeading4"} fontSize={"12px"} mt={"5px"} color={colorMode === 'light' ? "#757575" : "#A5A5A5"}>
                                                7  Columns, 3 Filters . 10min ago
                                            </Text>
                                        </Box>
                                    </Box>
                                </Box>
                                <Image src={"/icons/Pin_Icon.svg"} width={24} height={24} alt=" "></Image>
                            </Box>
                            <Box layerStyle={"flexCenterSpaceBetween"} my={"20px"}>
                                <Box layerStyle={"flexCenter"}>
                                    <Image src={"/icons/Menu_Icon.svg"} width={25} height={25} alt=" "></Image>
                                    <Box layerStyle={"flexCenter"} ml={"15px"}>
                                        <Box m={"5px 0px 0px 5px"}>
                                            <Text variant={"contentHeading4"} fontSize={"16px"} lineHeight={"10px"} >
                                                Derivatives
                                            </Text>
                                            <Text variant={"contentHeading4"} fontSize={"12px"} lineHeight={"22px"} mt={"3px"}>
                                                Lorem ipsum dolor sit amet consectetur. Fringilla ante nulla euismod risus. Nec nulla pellentesque...
                                            </Text>
                                            <Text variant={"contentHeading4"} fontSize={"12px"} mt={"1px"} color={colorMode === 'light' ? "#757575" : "#A5A5A5"}>
                                                7  Columns, 3 Filters . 10min ago
                                            </Text>
                                        </Box>
                                    </Box>
                                </Box>
                                <Image src={"/icons/Pin_Icon.svg"} width={24} height={24} alt=" "></Image>
                            </Box>
                        </Box>
                        <Box layerStyle={"flexCenterSpaceBetween"} m={"100px 20px 10px 20px"}>
                            <Box position="absolute" bottom="35px" right="25px">
                                <Button variant={"blackButton"} width={150} height={35} onClick={() => {
                                    if (!AuthSession) {
                                        onLoginModalOpen();
                                    } else {
                                        onCustomizeTabModalOpen();
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
        </>
    );
};

export default TabLibraryModal; 