/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useContext, useEffect, useState } from "react";
import {
    Box,
    Text,
    useColorMode,
    useColorModeValue,
    Icon,
    useDisclosure,
    useMediaQuery,
} from "@chakra-ui/react";
import { RiHomeLine } from "react-icons/ri";
import { TiDocumentText } from "react-icons/ti";
import { BiWalletAlt } from "react-icons/bi";
import { FaPeopleGroup } from "react-icons/fa6";
import { useRouter, usePathname } from "next/navigation";
import AppConfigContext from "@components/context/appConfigContext";

const Footer = React.memo(() => {
    const { onToggle } = useDisclosure();
    const [isScrolledDown, setIsScrolledDown] = useState(false);
    const [scrollValue, setScrollValue] = useState(0);
    const [isMd] = useMediaQuery("(min-width: 768px)");

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > scrollValue) {
                setIsScrolledDown(true);
                setScrollValue(window.scrollY);
            } else {
                onToggle();
                setIsScrolledDown(false);
                setScrollValue(window.scrollY);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    const footerMobileLinkList = [
        {
            name: "Home",
            NavIcon: RiHomeLine,
            link: "/",
            isExternal: false
        },
        {
            name: "Approach Paper",
            NavIcon: TiDocumentText,
            link: "/approach-paper",
            isExternal: false,
        },
        {
            name: "Top Wallets",
            NavIcon: BiWalletAlt,
            link: "/top-wallets",
            isExternal: false,
        },
        {
            name: "Community",
            NavIcon: FaPeopleGroup,
            link: "community",
            isExternal: true,
        }
    ];

    return (
        <>
            {
                isMd ?
                    <Box
                        id="betygfi-footer"
                        position={"relative"}
                        bottom="0"
                        width="100%"
                        display={{ base: "none", md: "flex" }}
                        justifyContent="flex-start"
                        padding={2}
                        bg={useColorModeValue("#F0F0F5", "#191919")}
                        pt={"14px"}
                        px={{ base: "10px", md: "10px" }}
                    >
                        <Box
                            ml={{ base: 0, md: 0 }}
                            layerStyle={"flexCenterFlexStart"}
                            w={"100%"}
                            h={"100%"}
                        >
                            <Box
                                ml={{ base: 0, md: 0 }}
                                mr={{ base: 2, md: 4 }}
                                layerStyle={"FlexCenterflexStart"}
                            >
                                <Text
                                    mr={{ base: 2, md: 4 }}
                                    variant={"h6"}
                                    _light={{ color: "#16171B" }}
                                    _dark={{ color: "#FFFFFF" }}
                                    paddingLeft={"10px"}
                                    opacity={"0.6"}
                                >
                                    &#169; {new Date().getFullYear()} BetygFi. All Rights Reserved.
                                </Text>
                            </Box>
                        </Box>
                    </Box>
                    :
                    <Box
                        id="betygfi-footer"
                        opacity={!isScrolledDown ? 1 : 0}
                        transition="opacity 0.1 s ease-in-out"
                        position={"fixed"}
                        bottom="0"
                        width="100%"
                        display={!isScrolledDown ? "flex" : "none"}
                        bg={useColorModeValue("#F0F0F5", "#272727")}
                        height={"85px"}
                        zIndex={"100"}
                    >
                        <Box width={"100%"} layerStyle={"flexCenterSpaceEvenly"}>
                            {
                                footerMobileLinkList?.map((fm, index) => <FooterMobileLink
                                    name={fm.name}
                                    key={index}
                                    NavIcon={fm.NavIcon}
                                    link={fm.link}
                                    isExternal={fm.isExternal}
                                />)
                            }
                        </Box>
                    </Box>
            }
        </>
    );
});

export default Footer;
Footer.displayName = 'Footer';

const FooterMobileLink = ({ name, NavIcon, link, isExternal }) => {
    const appConfig = useContext(AppConfigContext);
    const { colorMode } = useColorMode();
    const router = useRouter();
    const pathname = usePathname();

    return (
        <Box
            layerStyle={"FlexColumnCenter"}
            padding={"10px 10px"}
            position="relative"
            gap={"10px"}
            cursor={"pointer"}
            onClick={() => {
                isExternal ? window.open(link === "community" ? appConfig.NEXT_PUBLIC_COMMUNITY_URL : link, "_blank", "noreferrer") :
                    router.push(link);
            }}
            borderColor={"#FFF"}
            _after={
                pathname === link && {
                    position: "absolute",
                    content: '""',
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "3px",
                    bgColor: colorMode === "light" ? "#202020" : "#FFFFFF",
                }
            }
        >
            <Box layerStyle={"center"}>
                <Icon
                    as={NavIcon}
                    boxSize={"28px"}
                    color={
                        pathname === link
                            ? colorMode === "light"
                                ? "#202020"
                                : "#FFFFFF"
                            : colorMode === "light"
                                ? "#6F7383"
                                : "#676767"
                    }
                />
            </Box>
            <Text
                fontSize={{ sm: "12px", midSize: "14px" }}
                lineHeight={"20px"}
                fontWeight={pathname === link ? "600" : "400"}
                textTransform={"capitalize"}
                textAlign={"center"}
            >
                {name}
            </Text>
        </Box>
    );
};
