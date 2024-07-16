"use client";
import { ArrowBackIcon } from '@chakra-ui/icons';
import {
    Box,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Text,
    useColorMode,
    useMediaQuery
} from "@chakra-ui/react";
import { BETYGFI_COOKIE_ACCEPTED, COOKIE_TYPES } from "@util/constant";
import { createCookies } from "@util/cookieHelper";
import Image from 'next/image';
import { useState } from "react";
import CookieItem from "./cookie-item";

const CookiesPopup = ({ isOpen, onClose, }) => {
    const [cookieAccepted, setCookieAccepted] = useState(COOKIE_TYPES.map(cookie => cookie.slug));
    const [page, setPage] = useState("summary");
    const { colorMode } = useColorMode();
    const [isMd] = useMediaQuery("(min-width: 768px)");

    const onCookieItemChangeList = (cookieAccepted_) => {
        const dupCookieAcc = [...cookieAccepted];
        const index = dupCookieAcc.indexOf(cookieAccepted_);
        if (index > -1) {
            dupCookieAcc.splice(index, 1);
        } else {
            dupCookieAcc.push(cookieAccepted_);
        }
        setCookieAccepted(dupCookieAcc);
        createCookies(BETYGFI_COOKIE_ACCEPTED, dupCookieAcc.join(","));
        saveCookies(dupCookieAcc);
    };

    // eslint-disable-next-line no-unused-vars
    const saveCookies = (cookieList) => {

    };

    const allowSelectedCookies = () => {
        saveCookies(cookieAccepted);
        createCookies(BETYGFI_COOKIE_ACCEPTED, cookieAccepted.join(","));
        onClose();
    };

    const allowAllCookies = () => {
        const allCookies = COOKIE_TYPES.map(cookie => cookie.slug);
        setCookieAccepted(allCookies);
        saveCookies(allCookies);
        createCookies(BETYGFI_COOKIE_ACCEPTED, allCookies.join(","));
    };

    const rejectAllCookies = () => {
        const allCookieList = [];
        setCookieAccepted(allCookieList);
        saveCookies(allCookieList);
        createCookies(BETYGFI_COOKIE_ACCEPTED, '');
        onClose();
    };

    return (
        <Modal
            isCentered={{ md: true, base: false }}
            isOpen={isOpen}
            onClose={() => onClose()}
            borderRadius={"6px"}
            boxShadow={"0px 34px 24px 0px rgba(0, 0, 0, 0.25)"}
            width={{ md: "700px", base: "100vw" }}
            size={"xl"}
        >
            <ModalOverlay
                bg="blackAlpha.300"
                backdropFilter="blur(3px)"
            />
            <ModalContent mx={{ base: "0px", md: "0px" }}>
                {
                    page === "detail" &&
                    <ModalHeader
                        position={"relative"}
                        display={"flex"}
                        bgRepeat={"no-repeat"}
                        bgPos={"right 5px"}
                        flexDirection={"column"}
                        paddingBottom={"0px"}
                        paddingLeft={"-2px"}
                    >
                        <Box display={"flex"} gap={"0.9rem"} flexDir={"row"}>
                            {!isMd && <ArrowBackIcon onClick={() => setPage("summary")} />}
                            <Text variant={"cookie_subheading"} fontSize={"20px"}>
                                Manage Cookies
                            </Text>
                        </Box>
                    </ModalHeader>
                }
                <ModalCloseButton />
                <ModalBody
                    borderRadius={"10px"}
                    px={{ md: "1.5rem", base: "0.8rem" }}
                    py={"0.4rem"}
                    _light={{ bgColor: "white", }}
                    _dark={{ bgColor: "#313131", }}
                >
                    {
                        page === "summary" ?
                            <Box mt={"1rem"}>
                                <Box display={"flex"} flexDir={"row"} gap={"0.5rem"} mb={"1rem"}>
                                    <Image src={"/images/cookie.svg"} alt={"cookie-image"} height={48} width={48} />
                                    <Box display={"flex"} flexDir={"column"}>
                                        <Text variant={"cookie_heading_1"}>We Value</Text>
                                        <Text variant={"cookie_heading_2"}>Your Privacy.</Text>
                                    </Box>
                                </Box>
                                <Box mb={"7rem"}>
                                    <Text variant={"cookie_description_2"}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat aliquet maecenas ut sit nulla Consequat aliquet maecenas ut sit nullaConsequat aliquet maecenas ut sit nulla.
                                    </Text>
                                    <Text variant={"cookie_description_2"} marginTop="1.3rem"  >
                                        We collects your data in order to improve your experience in the form of cookies.
                                    </Text>
                                </Box>

                                <Box display={"flex"} flexDir={"row"} gap={"1.2rem"}>
                                    <Box
                                        cursor={"pointer"}
                                        bgColor={
                                            colorMode === "dark"
                                                ? "#282828"
                                                : "#FFF"
                                        }
                                        layerStyle={"center"}
                                        borderRadius={"4px"}
                                        p="15px 20px"
                                        mb={"0.9rem"}
                                        w={"8rem"}
                                        border="2px solid rgba(70, 130, 180, 0.24)"
                                        onClick={() => rejectAllCookies()}
                                    >
                                        <Text
                                            variant={"SearchText"}
                                            fontWeight={"600"}
                                            fontSize={{ md: "14px", base: "12px" }}
                                            _dark={{ color: "#FAFAFB" }}
                                            _light={{ color: "#191919" }}
                                        >
                                            Reject All
                                        </Text>
                                    </Box>
                                    <Box
                                        cursor={"pointer"}
                                        bgColor={
                                            colorMode === "light"
                                                ? "#282828"
                                                : "#FFF"
                                        }
                                        layerStyle={"center"}
                                        borderRadius={"4px"}
                                        p="15px 20px"
                                        mb={"0.9rem"}
                                        w={"10rem"}
                                        onClick={() => allowAllCookies()}
                                    >
                                        <Text
                                            variant={"SearchText"}
                                            fontWeight={"600"}
                                            _light={{ color: "#FAFAFB" }}
                                            _dark={{ color: "#191919" }}
                                        >
                                            Accept All
                                        </Text>
                                    </Box>
                                </Box>
                                <Text onClick={() => setPage("detail")} justifyContent={"end"} display={"flex"} cursor={"pointer"} variant={"cookies_footer"} mb={"1rem"} textDecor={"underline"}>Manage Cookies</Text>
                            </Box>
                            :
                            <Box>
                                <Text mb={"1.2rem"} variant={"cookie_description"}>
                                    Cookies are small text that can be used by websites to make the user experience  more efficient. The law states that we may store cookies on your device if they are strictly necessaryfor the operation of this site. For all other types of cookies, we need your  permission. This site uses various types of cookies. Some cookies are placed by third party  services that appear on our pages.
                                </Text>
                                <Box
                                    cursor={"pointer"}
                                    bgColor={
                                        colorMode === "light"
                                            ? "#282828"
                                            : "#FFF"
                                    }
                                    layerStyle={"center"}
                                    borderRadius={"2px"}
                                    p="15px 20px"
                                    mb={"0.9rem"}
                                    w={"10rem"}
                                >
                                    <Text
                                        variant={"SearchText"}
                                        fontWeight={"600"}
                                        _light={{ color: "#FAFAFB" }}
                                        _dark={{ color: "#191919" }}
                                    >
                                        Allow Selection
                                    </Text>
                                </Box>
                                <Text mb={"0.8rem"} variant={"cookie_subheading"}>
                                    Manage Consent Preferences
                                </Text>
                                <Box mb={"0.8rem"}>
                                    {
                                        COOKIE_TYPES.map((cookie, index) => (
                                            <CookieItem item={cookie} key={index} onCookieItemChangeList={onCookieItemChangeList} />
                                        ))
                                    }
                                </Box>
                                <Box display={"flex"} gap={{ md: "1.2rem", base: "0.6rem" }} flexDir={"row"} justifyContent={"end"}>
                                    {
                                        isMd && <Box
                                            cursor={"pointer"}
                                            layerStyle={"center"}
                                            borderRadius={"2px"}
                                            p="15px 20px"
                                            mb={"0.9rem"}
                                            w={"8rem"}
                                        >
                                            <Text
                                                variant={"SearchText"}
                                                fontWeight={"600"}
                                                fontSize={{ md: "14px", base: "12px" }}
                                                _dark={{ color: "#FAFAFB" }}
                                                _light={{ color: "#191919" }}
                                            >
                                                Back
                                            </Text>
                                        </Box>
                                    }
                                    <Box
                                        cursor={"pointer"}
                                        bgColor={
                                            colorMode === "dark"
                                                ? "#282828"
                                                : "#FFF"
                                        }
                                        layerStyle={"center"}
                                        borderRadius={"2px"}
                                        p="15px 20px"
                                        mb={"0.9rem"}
                                        w={"8rem"}
                                        border="2px solid rgba(70, 130, 180, 0.24)"
                                        onClick={() => rejectAllCookies()}
                                    >
                                        <Text
                                            variant={"SearchText"}
                                            fontWeight={"600"}
                                            fontSize={{ md: "14px", base: "12px" }}
                                            _dark={{ color: "#FAFAFB" }}
                                            _light={{ color: "#191919" }}
                                        >
                                            Reject All
                                        </Text>
                                    </Box>
                                    <Box
                                        cursor={"pointer"}
                                        bgColor={
                                            colorMode === "light"
                                                ? "#282828"
                                                : "#FFF"
                                        }
                                        layerStyle={"center"}
                                        borderRadius={"2px"}
                                        p="15px 20px"
                                        mb={"0.9rem"}
                                        w={"10rem"}
                                        onClick={() => allowSelectedCookies()}
                                    >
                                        <Text
                                            variant={"SearchText"}
                                            fontWeight={"600"}
                                            _light={{ color: "#FAFAFB" }}
                                            _dark={{ color: "#191919" }}
                                        >
                                            Allow Selection
                                        </Text>
                                    </Box>
                                </Box>
                            </Box>
                    }

                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default CookiesPopup;
