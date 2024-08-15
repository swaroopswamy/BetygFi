"use client";
import { ArrowBackIcon } from '@chakra-ui/icons';
import {
    Box, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, useColorMode, useMediaQuery
} from "@chakra-ui/react";
import { BETYGFI_COOKIE_ACCEPTED, BETYGFI_COOKIE_CONSENT_SEEN, COOKIE_TYPES } from "@util/constant";
import { createCookies } from "@util/cookieHelper";
import Image from 'next/image';
import { useEffect, useState } from "react";
import CookieItem from "./cookie-item";

const CookiesPopup = ({ isOpen, onClose, }) => {
    const [showCookiePopup, setShowCookiePopup] = useState(isOpen);
    const [cookieAccepted, setCookieAccepted] = useState(COOKIE_TYPES.map(cookie => cookie.slug));
    const [page, setPage] = useState("summary");
    const { colorMode } = useColorMode();
    const [isMd] = useMediaQuery("(min-width: 768px)");
    const [isSmallerThan1150] = useMediaQuery('(max-width: 1150px)');

    const CookieDescriptionTitle = "If you consent, we can store and access personal information on your device to provide a more personalized browsing experience. This is accomplished through processing personal data collected from browsing data stored in cookies. You can provide/withdraw consent and object to processing based on a legitimate interest at any time by clicking on the ‘Manage Preferences’ button.";
    const cookieCollectData = "We collects your data in order to improve your experience in the form of cookies.";

    useEffect(() => {
        setShowCookiePopup(isOpen);
    }, [isOpen]);

    const onCookieItemChangeList = (cookieAccepted_) => {
        const dupCookieAcc = [...cookieAccepted];
        const index = dupCookieAcc.indexOf(cookieAccepted_);
        if (index > -1) {
            dupCookieAcc.splice(index, 1);
        } else {
            dupCookieAcc.push(cookieAccepted_);
        }
        setCookieAccepted(dupCookieAcc);
        // createCookies(BETYGFI_COOKIE_ACCEPTED, dupCookieAcc.join(","));
        // createCookies(BETYGFI_COOKIE_CONSENT_SEEN, "true");
    };

    const allowSelectedCookies = () => {
        createCookies(BETYGFI_COOKIE_ACCEPTED, cookieAccepted.join(","));
        createCookies(BETYGFI_COOKIE_CONSENT_SEEN, "true");
        onClose();
    };

    const allowAllCookies = () => {
        const allCookies = COOKIE_TYPES.map(cookie => cookie.slug);
        setCookieAccepted(allCookies);
        createCookies(BETYGFI_COOKIE_ACCEPTED, allCookies.join(","));
        createCookies(BETYGFI_COOKIE_CONSENT_SEEN, "true");
        onClose();
    };

    const rejectAllCookies = () => {
        const allCookieList = [];
        setCookieAccepted(allCookieList);
        createCookies(BETYGFI_COOKIE_ACCEPTED, '');
        createCookies(BETYGFI_COOKIE_CONSENT_SEEN, "true");
        onClose();
    };

    const renderDesktopDetailPage = () => {
        return (
            <Modal
                isCentered={{ md: true, base: true }}
                isOpen={isOpen}
                onClose={() => onClose()}
                closeOnOverlayClick={false}
                borderRadius={"6px"}
                boxShadow={"0px 34px 24px 0px rgba(0, 0, 0, 0.25)"}
                width={{ md: "700px", base: "90%" }}
                size={"xl"}
            >
                <ModalOverlay
                    top={{ base: "60px", md: "80px" }}
                    bg="blackAlpha.300"
                    backdropFilter="blur(3px)"
                />
                <ModalContent
                    width={{ base: "90%", md: "100%" }}
                    mx={{ base: "0px", md: "0px" }}
                >
                    {
                        page === "detail" &&
                        <ModalHeader
                            _light={{ bgColor: "white" }} _dark={{ bgColor: "#313131" }}
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
                                <Text colorMode={colorMode} variant={"cookie_subheading"} fontSize={"20px"}>
                                    Manage Cookies
                                </Text>
                            </Box>
                        </ModalHeader>
                    }
                    {isMd && <ModalCloseButton />}
                    <ModalBody
                        borderRadius={"10px"}
                        px={{ md: "1.5rem", base: "0.8rem" }}
                        py={"1rem"}
                        _light={{ bgColor: "white", }}
                        _dark={{ bgColor: "#313131", }}
                    >
                        {
                            page === "summary" ?
                                renderSummaryPage()
                                :
                                (/* isMd ? */ renderMDDetailPage()/*  :
                                    renderDetailPage() */)
                        }
                    </ModalBody>
                </ModalContent>
            </Modal>
        );
    };

    const renderDesktopSummaryPage = () => {
        return (
            <>
                {
                    showCookiePopup &&
                    (
                        <>
                            {
                                isSmallerThan1150 ?
                                    <Box p={"1rem"} style={{ border: '2px solid rgba(70, 130, 180, 0.24)' }} _dark={{ bgColor: "#191919" }} _light={{ bgColor: "#FFFFFF" }}
                                        zIndex={"10000"} position={"fixed"} bottom={0} width={"100%"} >
                                        <Box display={"flex"}>

                                            <Box display={"flex"} justifyContent={"center"} w={"100%"} gap={"1rem"}>

                                                <Box display={"flex"} flexDir={"row"} justifyContent={"flex-start"} alignItems={"flex-start"} gap={"0.5rem"} w={"15%"} >
                                                    <Image src={"/images/cookie.svg"} alt={"cookie-image"} height={48} width={48} />
                                                    <Box display={"flex"} flexDir={"column"}  >
                                                        <Text colorMode={colorMode} variant={"cookie_heading_1"}>We Value</Text>
                                                        <Text colorMode={colorMode} variant={"cookie_heading_2"}>Your Privacy.</Text>
                                                    </Box>
                                                </Box>

                                                <Box gap={"1.5rem"} display={"flex"} w={"63%"}>
                                                    <Text colorMode={colorMode} variant={"cookie_description_2"}>
                                                        {CookieDescriptionTitle}
                                                    </Text>
                                                    <Text colorMode={colorMode} variant={"cookie_description_2"}   >
                                                        {cookieCollectData}
                                                    </Text>
                                                </Box>

                                                <Box w={"22%"} display={"flex"} justifyContent={"end"} alignItems={"end"}>
                                                    <Box display={"flex"} flexDir={"column"} justifyContent={"center"} alignItems={"center"} px={"1.5rem"} gap={"0.05rem"}>
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
                                                                colorMode={colorMode}
                                                                variant={"SearchText"}
                                                                fontWeight={"600"}
                                                                _light={{ color: "#FAFAFB" }}
                                                                _dark={{ color: "#191919" }}
                                                            >
                                                                Accept All
                                                            </Text>
                                                        </Box>
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
                                                            onClick={() => {
                                                                document.body.scrollTop = document.documentElement.scrollTop = 0;
                                                                setPage("detail");
                                                            }}
                                                        >
                                                            <Text
                                                                colorMode={colorMode}
                                                                variant={"SearchText"}
                                                                fontWeight={"600"}
                                                                fontSize={{ md: "14px", base: "12px" }}
                                                                _dark={{ color: "#FAFAFB" }}
                                                                _light={{ color: "#191919" }}
                                                            >
                                                                Manage
                                                            </Text>
                                                        </Box>
                                                        <Text
                                                            colorMode={colorMode}
                                                            onClick={() => rejectAllCookies()}
                                                            justifyContent={"end"}
                                                            display={"flex"}
                                                            cursor={"pointer"}
                                                            variant={"cookies_footer"}
                                                            my={"1rem"}

                                                        >Reject All</Text>
                                                    </Box>
                                                </Box>
                                            </Box>
                                            <Box cursor={"pointer"} onClick={() => setShowCookiePopup(false)}>

                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                                    <path d="M18.3396 6L6.11316 18" stroke={colorMode === "light" ? "black" : "white"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M6.11316 6L18.3396 18" stroke={colorMode === "light" ? "black" : "white"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </Box>
                                        </Box>
                                    </Box>
                                    :
                                    <Box p={"1rem"} style={{ border: '2px solid rgba(70, 130, 180, 0.24)' }} _dark={{ bgColor: "#191919" }} _light={{ bgColor: "#FFFFFF" }}
                                        zIndex={"10000"} position={"fixed"} bottom={0} width={"100%"} >
                                        <Box display={"flex"}>
                                            <Box display={"flex"} w={"100%"} gap={"1rem"}>
                                                <Box display={"flex"} flexDir={"row"} justifyContent={"flex-start"} alignItems={"flex-start"} gap={"0.5rem"} w={"10%"} >
                                                    <Image src={"/images/cookie.svg"} alt={"cookie-image"} height={48} width={48} />
                                                    <Box display={"flex"} flexDir={"column"}  >
                                                        <Text colorMode={colorMode} variant={"cookie_heading_1"}>We Value</Text>
                                                        <Text colorMode={colorMode} variant={"cookie_heading_2"}>Your Privacy.</Text>
                                                    </Box>
                                                </Box>

                                                <Box gap={"1.5rem"} display={"flex"} w={"57%"}>
                                                    <Text colorMode={colorMode} variant={"cookie_description_2"}>
                                                        {CookieDescriptionTitle}
                                                    </Text>
                                                    <Text colorMode={colorMode} variant={"cookie_description_2"}   >
                                                        {cookieCollectData}
                                                    </Text>
                                                </Box>

                                                <Box w={"33%"} display={"flex"} justifyContent={"end"} alignItems={"end"}>
                                                    <Box display={"flex"} flexDir={"row"} justifyContent={"end"} px={"1.5rem"} gap={"1rem"}>
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
                                                                colorMode={colorMode}
                                                                variant={"SearchText"}
                                                                fontWeight={"600"}
                                                                _light={{ color: "#FAFAFB" }}
                                                                _dark={{ color: "#191919" }}
                                                            >
                                                                Accept All
                                                            </Text>
                                                        </Box>
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
                                                            onClick={() => {
                                                                document.body.scrollTop = document.documentElement.scrollTop = 0;
                                                                setPage("detail");
                                                            }}
                                                        >
                                                            <Text
                                                                colorMode={colorMode}
                                                                variant={"SearchText"}
                                                                fontWeight={"600"}
                                                                fontSize={{ md: "14px", base: "12px" }}
                                                                _dark={{ color: "#FAFAFB" }}
                                                                _light={{ color: "#191919" }}
                                                            >
                                                                Manage
                                                            </Text>
                                                        </Box>
                                                        <Text
                                                            colorMode={colorMode}
                                                            onClick={() => rejectAllCookies()}
                                                            justifyContent={"end"}
                                                            display={"flex"}
                                                            cursor={"pointer"}
                                                            variant={"cookies_footer"}
                                                            my={"1rem"}

                                                        >Reject All</Text>
                                                    </Box>
                                                </Box>
                                            </Box>
                                            <Box cursor={"pointer"} onClick={() => setShowCookiePopup(false)}>

                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                                    <path d="M18.3396 6L6.11316 18" stroke={colorMode === "light" ? "black" : "white"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M6.11316 6L18.3396 18" stroke={colorMode === "light" ? "black" : "white"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </Box>
                                        </Box>
                                    </Box>
                            }
                        </>
                    )
                }
            </>
        );
    };

    const renderSummaryPage = () => {
        return (
            <>
                {
                    !isMd &&
                    <Box mt={"1rem"}>
                        <Box display={"flex"} flexDir={"row"} gap={"0.5rem"} mb={"1rem"}>
                            <Image src={"/images/cookie.svg"} alt={"cookie-image"} height={48} width={48} />
                            <Box display={"flex"} flexDir={"column"}>
                                <Text colorMode={colorMode} variant={"cookie_heading_1"}>We Value</Text>
                                <Text colorMode={colorMode} variant={"cookie_heading_2"}>Your Privacy.</Text>
                            </Box>
                        </Box>
                        <Box mb={"7rem"}>
                            <Text colorMode={colorMode} variant={"cookie_description_2"}>
                                {CookieDescriptionTitle}
                            </Text>
                            <Text colorMode={colorMode} variant={"cookie_description_2"} marginTop="1.3rem"  >
                                {cookieCollectData}
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
                                    colorMode={colorMode}
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
                                    colorMode={colorMode}
                                    variant={"SearchText"}
                                    fontWeight={"600"}
                                    _light={{ color: "#FAFAFB" }}
                                    _dark={{ color: "#191919" }}
                                >
                                    Accept All
                                </Text>
                            </Box>
                        </Box>
                        <Text
                            colorMode={colorMode}
                            onClick={() => setPage("detail")}
                            justifyContent={"end"}
                            display={"flex"}
                            cursor={"pointer"}
                            variant={"cookies_footer"}
                            my={"1rem"}
                            textDecor={"underline"}
                        >Manage Cookies</Text>
                    </Box>
                }
            </>
        );
    };

    // const renderDetailPage = () => {
    //     return (
    //         <Box maxH={{ base: "80vh" }} height={"max-content"} display={"flex"} flexDir={"column"} justifyContent={"space-between"}>
    //             <Box>
    //                 <Text colorMode={colorMode} mb={"1.2rem"} variant={"cookie_description"}>
    //                     When you visit any website, it may store or retrieve information on your browser, mostly in the form of cookies. This information might be about you, your preferences or your device and is mostly used to make the site work as you expect it to. The information does not usually directly identify you, but it can give you a more personalized web experience. Because we respect your right to privacy, you can choose not to allow some types of cookies. Click on the different category headings to find out more and change our default settings. However, blocking some types of cookies may impact your experience of the site and the services we are able to offer.
    //                 </Text>
    //                 <Box
    //                     cursor={"pointer"}
    //                     bgColor={
    //                         colorMode === "light"
    //                             ? "#282828"
    //                             : "#FFF"
    //                     }
    //                     layerStyle={"center"}
    //                     borderRadius={"2px"}
    //                     p="15px 20px"
    //                     mb={"1.5rem"}
    //                     w={"10rem"}
    //                     onClick={() => allowSelectedCookies()}
    //                 >
    //                     <Text colorMode={colorMode}
    //                         variant={"SearchText"}
    //                         fontWeight={"600"}
    //                         _light={{ color: "#FAFAFB" }}
    //                         _dark={{ color: "#191919" }}
    //                     >
    //                         Allow Selection
    //                     </Text>
    //                 </Box>
    //                 <Text colorMode={colorMode} mb={"1.5rem"} variant={"cookie_subheading"}>
    //                     Manage Consent Preferences
    //                 </Text>
    //                 <Box
    //                     mb={"1.5rem"}
    //                     height={"11rem"}
    //                     overflowY={"scroll"}
    //                 // background={"linear-gradient(180deg, rgba(255, 255, 255, 0.10) 0%, #FFF 100%)"}
    //                 >
    //                     {
    //                         COOKIE_TYPES.map((cookie, index) => (
    //                             <CookieItem item={cookie} key={index} cookieAccepted={cookieAccepted} onCookieItemChangeList={onCookieItemChangeList} />
    //                         ))
    //                     }
    //                 </Box>
    //             </Box>
    //             <Box
    //                 display={"flex"}
    //                 gap={{ md: "1.2rem", base: "0.6rem" }}
    //                 flexDir={"row"}
    //                 justifyContent={"end"}
    //             >
    //                 {
    //                     isMd && <Box
    //                         cursor={"pointer"}
    //                         layerStyle={"center"}
    //                         borderRadius={"2px"}
    //                         p="15px 20px"
    //                         mb={"0.9rem"}
    //                         w={"8rem"}
    //                         onClick={() => setPage("summary")}
    //                     >
    //                         <Text
    //                             colorMode={colorMode}
    //                             variant={"SearchText"}
    //                             fontWeight={"600"}
    //                             fontSize={{ md: "14px", base: "12px" }}
    //                             _dark={{ color: "#FAFAFB" }}
    //                             _light={{ color: "#191919" }}
    //                         >
    //                             Back
    //                         </Text>
    //                     </Box>
    //                 }
    //                 <Box
    //                     cursor={"pointer"}
    //                     bgColor={
    //                         colorMode === "dark"
    //                             ? "#282828"
    //                             : "#FFF"
    //                     }
    //                     layerStyle={"center"}
    //                     borderRadius={"2px"}
    //                     p="15px 20px"
    //                     mb={"0.9rem"}
    //                     w={"8rem"}
    //                     border="2px solid rgba(70, 130, 180, 0.24)"
    //                     onClick={() => rejectAllCookies()}
    //                 >
    //                     <Text
    //                         colorMode={colorMode}
    //                         variant={"SearchText"}
    //                         fontWeight={"600"}
    //                         fontSize={{ md: "14px", base: "12px" }}
    //                         _dark={{ color: "#FAFAFB" }}
    //                         _light={{ color: "#191919" }}
    //                     >
    //                         Reject All
    //                     </Text>
    //                 </Box>
    //                 <Box
    //                     cursor={"pointer"}
    //                     bgColor={
    //                         colorMode === "light"
    //                             ? "#282828"
    //                             : "#FFF"
    //                     }
    //                     layerStyle={"center"}
    //                     borderRadius={"2px"}
    //                     p="15px 20px"
    //                     mb={"0.9rem"}
    //                     w={"10rem"}
    //                     onClick={() => allowSelectedCookies()}
    //                 >
    //                     <Text
    //                         colorMode={colorMode}
    //                         variant={"SearchText"}
    //                         fontWeight={"600"}
    //                         _light={{ color: "#FAFAFB" }}
    //                         _dark={{ color: "#191919" }}
    //                     >
    //                         Allow Selection
    //                     </Text>
    //                 </Box>
    //             </Box>
    //         </Box>
    //     );
    // };

    const renderMDDetailPage = () => {
        return (
            <Box height={"75vh"} display={"flex"} flexDir={"column"} justifyContent={"space-between"}>
                <Box overflowY={"scroll"}>
                    <Text colorMode={colorMode} mb={"1.2rem"} variant={"cookie_description"}>
                        When you visit any website, it may store or retrieve information on your browser, mostly in the form of cookies. This information might be about you, your preferences or your device and is mostly used to make the site work as you expect it to. The information does not usually directly identify you, but it can give you a more personalized web experience. Because we respect your right to privacy, you can choose not to allow some types of cookies. Click on the different category headings to find out more and change our default settings. However, blocking some types of cookies may impact your experience of the site and the services we are able to offer.
                    </Text>
                    <Box
                        cursor={"pointer"}
                        bgColor={
                            colorMode === "light"
                                ? "#282828"
                                : "#FFFFFF"
                        }
                        layerStyle={"center"}
                        borderRadius={"2px"}
                        p="15px 20px"
                        mb={"1.5rem"}
                        w={"10rem"}
                        onClick={() => allowSelectedCookies()}
                    >
                        <Text colorMode={colorMode}
                            variant={"SearchText"}
                            fontWeight={"600"}
                            _light={{ color: "#FAFAFB" }}
                            _dark={{ color: "#191919" }}
                        >
                            Allow Selection
                        </Text>
                    </Box>
                    <Text colorMode={colorMode} mb={"1.5rem"} variant={"cookie_subheading"}>
                        Manage Consent Preferences
                    </Text>
                    <Box
                        mb={"1.5rem"}
                        height={"50vh"}
                    >
                        {
                            COOKIE_TYPES.map((cookie, index) => (
                                <CookieItem item={cookie} key={index} cookieAccepted={cookieAccepted} onCookieItemChangeList={onCookieItemChangeList} />
                            ))
                        }
                    </Box>
                </Box>
                <Box
                    display={"flex"}
                    mt={"0.8rem"}
                    gap={{ md: "1.2rem", base: "0.6rem" }}
                    flexDir={"row"}
                    alignItems={"center"}
                    justifyContent={"end"}
                >
                    {
                        isMd && <Box
                            cursor={"pointer"}
                            layerStyle={"center"}
                            borderRadius={"2px"}
                            p="20px 20px"
                            // mb={"0.9rem"}
                            w={"8rem"}
                            onClick={() => setPage("summary")}
                        >
                            <Text
                                colorMode={colorMode}
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
                        // mb={"0.9rem"}
                        w={"8rem"}
                        border="2px solid rgba(70, 130, 180, 0.24)"
                        onClick={() => rejectAllCookies()}
                    >
                        <Text
                            colorMode={colorMode}
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
                        // mb={"0.9rem"}
                        w={"10rem"}
                        onClick={() => allowSelectedCookies()}
                    >
                        <Text
                            colorMode={colorMode}
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
        );
    };

    return (
        <>
            {
                isMd && page === "summary" ?
                    renderDesktopSummaryPage() :
                    (
                        /* isMd ? */ renderDesktopDetailPage()
                        /*   : <Modal
                                  isCentered={{ md: true, base: true }}
                                  isOpen={isOpen}
                                  onClose={() => onClose()}
                                  closeOnOverlayClick={false}
                                  borderRadius={"6px"}
                                  boxShadow={"0px 34px 24px 0px rgba(0, 0, 0, 0.25)"}
                                  width={{ md: "700px", base: "90%" }}
                                  size={"xl"}
                              >
                                  <ModalOverlay
                                      top={{ base: "60px", md: "80px" }}
                                      bg="blackAlpha.300"
                                      backdropFilter="blur(3px)"
                                  />
                                  <ModalContent
                                      width={{ base: "90%", md: "100%" }}
                                      mx={{ base: "0px", md: "0px" }}
                                  >
                                      {
                                          page === "detail" &&
                                          <ModalHeader
                                              _light={{ bgColor: "white" }} _dark={{ bgColor: "#313131" }}
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
                                                  <Text colorMode={colorMode} variant={"cookie_subheading"} fontSize={"20px"}>
                                                      Manage Cookies
                                                  </Text>
                                              </Box>
                                          </ModalHeader>
                                      }
                                      {isMd && <ModalCloseButton />}
                                      <ModalBody
                                          borderRadius={"10px"}
                                          px={{ md: "1.5rem", base: "0.8rem" }}
                                          py={"1rem"}
                                          _light={{ bgColor: "white", }}
                                          _dark={{ bgColor: "#313131", }}
                                      >
                                          {
                                              page === "summary" ?
                                                  renderSummaryPage()
                                                  :
                                                  renderDetailPage()
                                          }
                                      </ModalBody>
                                  </ModalContent>
                              </Modal> */
                    )
            }
        </>
    );
};

export default CookiesPopup;
