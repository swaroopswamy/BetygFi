"use client";
import { Box, Text, useColorMode, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, ModalCloseButton, Button } from "@chakra-ui/react";
import Image from "next/image";

const TabLibraryModal = ({
    isTabLibraryModalOpen,
    onTabLibraryModalClose,

}) => {
    const { colorMode } = useColorMode();
    return (
        <Modal isOpen={isTabLibraryModalOpen} onClose={onTabLibraryModalClose} >
            <ModalOverlay
                bg="blackAlpha.300"
                backdropFilter="blur(10px) "
            />
            <ModalContent zIndex={10000} maxW={"800px"} className="hidescrollbar">
                <ModalHeader>
                    Tab Library
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Box mt={"15px"}>
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
                        <Button variant={"modalButton"} width={100} height={30}>
                            Create New Tab
                        </Button>
                    </Box>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default TabLibraryModal;