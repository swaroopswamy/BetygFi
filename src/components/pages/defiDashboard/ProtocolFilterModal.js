"use client";

import { Box, Button, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, useColorMode } from "@chakra-ui/react";
import Image from "next/image";

const ProtocolFilterModal = ({ isOpen, onClose }) => {
    const { colorMode } = useColorMode();

    return (
        <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader mt={"15px"} layerStyle={"flexCenter"}>
                    <Text variant={"bigTextNumber"} lineHeight={"16px"}>Filter</Text>
                    <Image width={18} height={18} src={"/icons/info_sm_icon.svg"} alt=" "></Image>
                </ModalHeader>
                <ModalCloseButton mt={"15px"} />
                <ModalBody>
                    <Text variant={"contentHeading4"} fontSize={"20px"} lineHeight={"10px"}>
                        DeFi Market
                    </Text>
                    <InputGroup width={"100%"}>
                        <InputLeftElement my={"7px"}><Image src={"/icons/search_Light.svg"} width={16} height={16} alt=" "></Image></InputLeftElement>
                        <Input
                            bg={"#F0F0F5"}
                            mt={"15px"}
                            ml={"10px"}
                            width={"100%"}
                            placeholder='Search for asset'
                            size='xs'
                            color={colorMode === 'light' ? "#6F6F6F" : "#191919"}
                        ></Input>
                    </InputGroup>
                    <Box mt={"15px"}>
                        <Box layerStyle={"flexCenterSpaceBetween"} my={"20px"}>
                            <Box layerStyle={"flexCenter"}>
                                <Image src={"/icons/Menu_Icon.svg"} width={25} height={25} alt=" "></Image>
                                <Box layerStyle={"flexCenter"} ml={"10px"}>
                                    <Image src={"/icons/bitcoin_logo.svg"} width={32} height={32} alt=" "></Image>
                                    <Box m={"5px 0px 0px 5px"}>
                                        <Text variant={"contentHeading4"} fontSize={"16px"} lineHeight={"10px"} >
                                            BTC
                                        </Text>
                                        <Text variant={"contentHeading4"} fontSize={"12px"} mt={"5px"} color={colorMode === 'light' ? "#757575" : "#A5A5A5"}>
                                            Bitcoin
                                        </Text>
                                    </Box>
                                </Box>
                            </Box>
                            <Image src={"/icons/Pin_Icon.svg"} width={24} height={24} alt=" "></Image>
                        </Box>
                        <Box layerStyle={"flexCenterSpaceBetween"} my={"20px"}>
                            <Box layerStyle={"flexCenter"}>
                                <Image src={"/icons/Menu_Icon.svg"} width={25} height={25} alt=" "></Image>
                                <Box layerStyle={"flexCenter"} ml={"10px"}>
                                    <Image src={"/icons/bitcoin_logo.svg"} width={32} height={32} alt=" "></Image>
                                    <Box m={"5px 0px 0px 5px"}>
                                        <Text variant={"contentHeading4"} fontSize={"16px"} lineHeight={"10px"} >
                                            BTC
                                        </Text>
                                        <Text variant={"contentHeading4"} fontSize={"12px"} mt={"5px"} color={colorMode === 'light' ? "#757575" : "#A5A5A5"}>
                                            Bitcoin
                                        </Text>
                                    </Box>
                                </Box>
                            </Box>
                            <Image src={"/icons/Pin_Icon.svg"} width={24} height={24} alt=" "></Image>
                        </Box>
                        <Box layerStyle={"flexCenterSpaceBetween"} my={"20px"}>
                            <Box layerStyle={"flexCenter"}>
                                <Image src={"/icons/Menu_Icon.svg"} width={25} height={25} alt=" "></Image>
                                <Box layerStyle={"flexCenter"} ml={"10px"}>
                                    <Image src={"/icons/bitcoin_logo.svg"} width={32} height={32} alt=" "></Image>
                                    <Box m={"5px 0px 0px 5px"}>
                                        <Text variant={"contentHeading4"} fontSize={"16px"} lineHeight={"10px"} >
                                            BTC
                                        </Text>
                                        <Text variant={"contentHeading4"} fontSize={"12px"} mt={"5px"} color={colorMode === 'light' ? "#757575" : "#A5A5A5"}>
                                            Bitcoin
                                        </Text>
                                    </Box>
                                </Box>
                            </Box>
                            <Image src={"/icons/Pin_Icon.svg"} width={24} height={24} alt=" "></Image>
                        </Box>
                    </Box>
                </ModalBody>

                <Box layerStyle={"flexCenterSpaceBetween"} m={"40px 20px 10px 20px"}>
                    <Button variant={"modalButton"} width={100} height={30}>
                        Reset
                    </Button>
                    <Box layerStyle={"flexCenter"} gap={"10px"}>
                        <Button variant={"modalButton"} onClick={onClose} width={100} height={30}>
                            Cancel
                        </Button>
                        <Button variant={"modalButton"} width={100} height={30}>
                            Apply
                        </Button>
                    </Box>
                </Box>
            </ModalContent>
        </Modal>
    );
};

export default ProtocolFilterModal;