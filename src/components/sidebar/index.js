"use client";
import React, { useContext } from "react";
import {
    Box,
    Flex,
    Link,
    Text,
    useColorMode,
    useColorModeValue,
    Drawer,
    DrawerOverlay,
    DrawerBody,
    DrawerContent,
    Collapse,
    useDisclosure,
    createIcon,
    Icon,
    AccordionButton,
    Accordion,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Tooltip,
} from "@chakra-ui/react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { sidebarCollapsedReducer } from "@/redux/app_data/dataSlice";
import dynamic from "next/dynamic";
import {
    bottomMenu,
    dashboards,
    pages,
    communities,
    legal,
} from "@components/sidebar/helper";
import { BsPeople } from "react-icons/bs";
import { SlSettings } from "react-icons/sl";
import ReportBugModal from "@components/sidebar/report";
import SuggestFeatureModal from "@components/sidebar/suggestfeature";
import { signOut, useSession } from "next-auth/react";
import { LogoutReducer } from "@/redux/auth_data/authSlice";
import CustomAvatar from "@components/avatar";
import { useDisconnect } from "wagmi";
import { PublicAddressStringFormatter } from "@util/utility";
import AppConfigContext from "@components/context/appConfigContext";
import LoginPage from "@components/login";

const DynamicIcon = dynamic(() => import("@components/icons/index_new"), { ssr: false });

const SidebarContent = ({ ...rest }) => {
    const appConfig = useContext(AppConfigContext);
    const { colorMode } = useColorMode();
    const dispatch = useDispatch();
    const router = useRouter();
    const pathname = usePathname();
    const {
        isOpen: isLoginModalOpen,
        onOpen: onLoginModalOpen,
        onClose: onLoginModalClose,
    } = useDisclosure();

    const SidebarHandler = (value) => {
        dispatch(sidebarCollapsedReducer(value));
    };

    const isSidebarCollapsed = useSelector(
        (state) => state?.appData?.isSidebarCollapsed
    );

    const {
        isOpen: isSuggestFeatureModalOpen,
        onOpen: onSuggestFeatureModalOpen,
        onClose: onSuggestFeatureModalClose,
    } = useDisclosure();

    const {
        isOpen: isReportBugModalOpen,
        onOpen: onReportBugModalOpen,
        onClose: onReportBugModalClose,
    } = useDisclosure();

    const ValidatedUserData = useSelector((state) => state.authData.ValidatedUserData);

    return (
        <React.Fragment>
            <Box
                id="betygfi-sidebar"
                bg={useColorModeValue("#FFFFFF", "#191919")}
                borderRight="1px"
                borderRightColor={useColorModeValue("#E1E1E1", "#333333")}
                minWidth={isSidebarCollapsed ? "50px" : "220px"}
                className="sidebar-styles"
                zIndex={"999"}
                overflowY={"auto"}
                overflowX={"hidden"}
                display={{ base: "none", md: "flex" }}
                {...rest}
            >
                {!isSidebarCollapsed && (
                    <Box display={"flex"} flexDir={"column"} gap={"20px"}>
                        <Box
                            layerStyle={"center"}
                            alignItems="center"
                            cursor={"pointer"}
                            p={"20px"}
                            onClick={() => router.push("/")}
                        >
                            <Image
                                // unoptimized="true"
                                // priority="true"
                                width={180}
                                height={80}
                                alt="logo"
                                src={
                                    colorMode === "dark"
                                        ? "/icons/dark_betgyfi_sm_logo.svg"
                                        : "/icons/light_betgyfi_sm_icon.svg"
                                }
                            />
                        </Box>

                        <Box layerStyle={"flexColumn"} w={"100%"}>
                            <Text
                                fontSize={"14px"}
                                lineHeight={"20px"}
                                color={
                                    colorMode === "light"
                                        ? "#757575"
                                        : "#A5A5A5"
                                }
                                pl={"20px"}
                                mb={"10px"}
                            >
                                Dashboards
                            </Text>
                            {dashboards(appConfig).map((link, i) => (
                                <NavItem
                                    key={i}
                                    NavIcon={link.icon}
                                    path={link.path}
                                    newTab={link.newTab}
                                    isActive={link.activePaths.includes(pathname)}
                                // isActive={pathname === link.path}
                                >
                                    <Text fontSize={"14px"} lineHeight={"20px"}>
                                        {link.name}
                                    </Text>
                                </NavItem>
                            ))}
                        </Box>

                        <Box layerStyle={"flexColumn"} w={"100%"}>
                            <Text
                                fontSize={"14px"}
                                lineHeight={"20px"}
                                color={
                                    colorMode === "light"
                                        ? "#757575"
                                        : "#A5A5A5"
                                }
                                pl={"20px"}
                                mb={"10px"}
                            >
                                Pages
                            </Text>
                            {pages.map((link, i) => (
                                <NavItem
                                    key={i}
                                    NavIcon={link.icon}
                                    path={link.path}
                                    newTab={link.newTab}
                                    isActive={pathname === link.path}
                                >
                                    <Text fontSize={"14px"} lineHeight={"20px"}>
                                        {link.name}
                                    </Text>
                                </NavItem>
                            ))}

                            <Accordion
                                allowMultiple
                                flexDir={"column"}
                                borderColor={
                                    colorMode === "light"
                                        ? "rgba(25,25,25, 0.1)"
                                        : "#494949"
                                }
                                mr={"-13px"}
                            >
                                <AccordionItem w={"100%"} border={0}>
                                    <AccordionButton
                                        display={"flex"}
                                        alignItems="center"
                                        justifyContent={"space-between"}
                                        height={"38px"}
                                        padding={"9px 20px"}
                                    >
                                        <Box display={"flex"} gap={"10px"}>
                                            <Icon
                                                as={BsPeople}
                                                boxSize={18}
                                                color={
                                                    colorMode === "light"
                                                        ? "#161616"
                                                        : "#FFFFFF"
                                                }
                                            />
                                            <Text
                                                fontSize={"14px"}
                                                lineHeight={"20px"}
                                            >
                                                Our Communities
                                            </Text>
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    <AccordionPanel w={"100%"} p={0}>
                                        <Box layerStyle={"flexColumn"}>
                                            {communities(appConfig).map((link, i) => (
                                                <NavItem
                                                    key={i}
                                                    NavIcon={link.icon}
                                                    path={link.path}
                                                    newTab={link.newTab}
                                                    isActive={
                                                        pathname === link.path
                                                    }
                                                >
                                                    <Text
                                                        fontSize={"14px"}
                                                        lineHeight={"20px"}
                                                    >
                                                        {link.name}
                                                    </Text>
                                                </NavItem>
                                            ))}
                                        </Box>
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                        </Box>

                        <Box layerStyle={"flexColumn"} w={"100%"}>
                            <Text
                                fontSize={"14px"}
                                lineHeight={"20px"}
                                color={
                                    colorMode === "light"
                                        ? "#757575"
                                        : "#A5A5A5"
                                }
                                pl={"20px"}
                                mb={"10px"}
                            >
                                Other
                            </Text>
                            <Accordion
                                allowMultiple
                                flexDir={"column"}
                                borderColor={
                                    colorMode === "light"
                                        ? "rgba(25,25,25, 0.1)"
                                        : "#494949"
                                }
                                mr={"-13px"}
                            >
                                <AccordionItem w={"100%"} border={0}>
                                    <AccordionButton
                                        display={"flex"}
                                        alignItems="center"
                                        justifyContent={"space-between"}
                                        height={"38px"}
                                        padding={"9px 20px"}
                                    >
                                        <Box display={"flex"} gap={"10px"}>
                                            <Icon
                                                as={SlSettings}
                                                boxSize={18}
                                                color={
                                                    colorMode === "light"
                                                        ? "#161616"
                                                        : "#FFFFFF"
                                                }
                                            />
                                            <Text
                                                fontSize={"14px"}
                                                lineHeight={"20px"}
                                            >
                                                Settings and More
                                            </Text>
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    <AccordionPanel w={"100%"} p={0}>
                                        <Box
                                            layerStyle={"flexColumn"}
                                            pl={"15px"}
                                        >
                                            {bottomMenu.map((link, i) => {
                                                if (i > 1) return;
                                                return (
                                                    <NavItem
                                                        key={i}
                                                        NavIcon={link.icon}
                                                        onLoginModalOpen={onLoginModalOpen}
                                                        path={link?.name === "Settings" ? `${link.path}/${ValidatedUserData?.data?.user_name}` : link.path}
                                                        newTab={link.newTab}
                                                        isActive={
                                                            pathname ===
                                                            link.path
                                                        }

                                                    >
                                                        <Text
                                                            fontSize={"14px"}
                                                            lineHeight={"20px"}
                                                            letterSpacing={
                                                                "1.4px"
                                                            }
                                                        >
                                                            {link.name}
                                                        </Text>
                                                    </NavItem>
                                                );
                                            })}

                                            <Box
                                                display={"flex"}
                                                alignItems="center"
                                                height={"38px"}
                                                padding={"9px 20px"}
                                                gap={"10px"}
                                                onClick={
                                                    onSuggestFeatureModalOpen
                                                }
                                                cursor={"pointer"}
                                            >
                                                <Icon
                                                    as={bottomMenu[2].icon}
                                                    boxSize={18}
                                                    color={
                                                        colorMode === "light"
                                                            ? "#161616"
                                                            : "#FFFFFF"
                                                    }
                                                />
                                                <Text
                                                    fontSize={"14px"}
                                                    lineHeight={"20px"}
                                                    letterSpacing={"1.4px"}
                                                >
                                                    {bottomMenu[2].name}
                                                </Text>
                                            </Box>

                                            <Box
                                                display={"flex"}
                                                alignItems="center"
                                                height={"38px"}
                                                padding={"9px 20px"}
                                                gap={"10px"}
                                                onClick={onReportBugModalOpen}
                                                cursor={"pointer"}
                                            >
                                                <Icon
                                                    as={bottomMenu[3].icon}
                                                    boxSize={18}
                                                    color={
                                                        colorMode === "light"
                                                            ? "#161616"
                                                            : "#FFFFFF"
                                                    }
                                                />
                                                <Text
                                                    fontSize={"14px"}
                                                    lineHeight={"20px"}
                                                    letterSpacing={"1.4px"}
                                                >
                                                    {bottomMenu[3].name}
                                                </Text>
                                            </Box>
                                        </Box>
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                            <NavItem
                                NavIcon={legal.icon}
                                path={legal.path}
                                newTab={legal.newTab}
                                isActive={pathname === legal.path}
                            >
                                <Text fontSize={"14px"} lineHeight={"20px"}>
                                    Legal
                                </Text>
                            </NavItem>
                        </Box>
                    </Box>
                )}

                {isSidebarCollapsed && (
                    <Box
                        layerStyle={"spaceBetween"}
                        flexDir={"column"}
                        width={"70px"}
                    >
                        <Box layerStyle={"flexColumn"} w={"100%"}>
                            <Box
                                layerStyle={"center"}
                                alignItems="center"
                                cursor={"pointer"}
                                py={"20px"}
                                mr={"-13px"}
                                onClick={() => router.push("/")}
                            >
                                <Image
                                    width={35}
                                    height={35}
                                    // unoptimized="true"
                                    // priority="true"
                                    alt="logo"
                                    src={
                                        colorMode === "light"
                                            ? "/icons/company_sidebar_sm_logo_dark.svg"
                                            : "/icons/company_sidebar_sm_logo_light.svg"
                                    }
                                    cursor={"pointer"}
                                    onClick={() => router.push("/")}
                                />
                            </Box>

                            <Box layerStyle={"flexColumn"} mt={"20px"}>
                                {dashboards(appConfig).map((link, i) => (
                                    <CollapsedNavItem
                                        key={i}
                                        NavIcon={link.icon}
                                        path={link.path}
                                        newTab={link.newTab}
                                        name={link.name}
                                        // isActive={pathname === link.path}
                                        isActive={link.activePaths.includes(pathname)}
                                    ></CollapsedNavItem>
                                ))}
                            </Box>

                            <hr style={{ margin: "15px -13px" }} />

                            <Box layerStyle={"flexColumn"}>
                                {pages.map((link, i) => (
                                    <CollapsedNavItem
                                        key={i}
                                        NavIcon={link.icon}
                                        path={link.path}
                                        newTab={link.newTab}
                                        name={link.name}
                                        isActive={pathname === link.path}
                                    ></CollapsedNavItem>
                                ))}

                                {communities(appConfig).map((link, i) => (
                                    <CollapsedNavItem
                                        key={i}
                                        NavIcon={link.icon}
                                        path={link.path}
                                        newTab={link.newTab}
                                        name={link.name}
                                        isActive={pathname === link.path}
                                    ></CollapsedNavItem>
                                ))}
                            </Box>
                        </Box>

                        <Box layerStyle={"flexColumn"} w={"100%"} mb={"70px"}>
                            {bottomMenu.map((link, i) => {
                                if (i > 1) return;
                                return (
                                    <CollapsedNavItem
                                        key={i}
                                        NavIcon={link.icon}
                                        //onLoginModalOpen={onLoginModalOpen}
                                        path={link?.name === "Settings" ? `${link.path}/${ValidatedUserData?.data?.user_name}` : link.path}
                                        newTab={link.newTab}
                                        name={link.name}
                                        isActive={pathname === link.path}
                                    ></CollapsedNavItem>
                                );
                            })}

                            <Box
                                display={"flex"}
                                justifyContent="center"
                                alignItems={"center"}
                                height={"45px"}
                                padding={"9px 20px"}
                                role="group"
                                cursor="pointer"
                                gap={"10px"}
                                _hover={{
                                    bg:
                                        colorMode === "light"
                                            ? "#202020"
                                            : "#FFFFFF",
                                    color:
                                        colorMode === "light"
                                            ? "#FFFFFF"
                                            : "#191919",
                                    fontWeight: "600",
                                }}
                                mr={"-13px"}
                                onClick={onSuggestFeatureModalOpen}
                            >
                                <Icon
                                    as={bottomMenu[2].icon}
                                    boxSize={22}
                                    color={
                                        colorMode === "light"
                                            ? "#161616"
                                            : "#FFFFFF"
                                    }
                                    _groupHover={{
                                        color:
                                            colorMode === "light"
                                                ? "#FFFFFF"
                                                : "#191919",
                                    }}
                                    alt="logo"
                                />
                            </Box>

                            <Box
                                display={"flex"}
                                justifyContent="center"
                                alignItems={"center"}
                                height={"45px"}
                                padding={"9px 20px"}
                                role="group"
                                cursor="pointer"
                                gap={"10px"}
                                _hover={{
                                    bg:
                                        colorMode === "light"
                                            ? "#202020"
                                            : "#FFFFFF",
                                    color:
                                        colorMode === "light"
                                            ? "#FFFFFF"
                                            : "#191919",
                                    fontWeight: "600",
                                }}
                                mr={"-13px"}
                                onClick={onReportBugModalOpen}
                            >
                                <Icon
                                    as={bottomMenu[3].icon}
                                    boxSize={22}
                                    color={
                                        colorMode === "light"
                                            ? "#161616"
                                            : "#FFFFFF"
                                    }
                                    _groupHover={{
                                        color:
                                            colorMode === "light"
                                                ? "#FFFFFF"
                                                : "#191919",
                                    }}
                                    alt="logo"
                                />
                            </Box>
                        </Box>
                    </Box>
                )}

                <Box display={"flex"}>
                    <Flex
                        justifyContent={"center"}
                        alignItems={"center"}
                        mr={"-12px"}
                        padding={"0px"}
                        cursor={"pointer"}
                        onClick={() => {
                            SidebarHandler(!isSidebarCollapsed);
                        }}
                    >
                        <Image
                            width={24}
                            height={24}
                            alt="button"
                            // unoptimized="true"
                            // priority="true"
                            style={{
                                position: "fixed",
                                rotate: isSidebarCollapsed ? "180deg" : "0deg"
                            }}
                            src={useColorModeValue(
                                "/icons/collapse-sidebar-light.svg",
                                "/icons/collapse-sidebar-dark.svg"
                            )}
                        />
                    </Flex>
                </Box>

                <SuggestFeatureModal
                    isOpen={isSuggestFeatureModalOpen}
                    onClose={onSuggestFeatureModalClose}
                    onOpen={onSuggestFeatureModalOpen}
                ></SuggestFeatureModal>
                <ReportBugModal
                    isOpen={isReportBugModalOpen}
                    onClose={onReportBugModalClose}
                    onOpen={onReportBugModalOpen}
                ></ReportBugModal>
            </Box>
            <LoginPage
                isOpen={isLoginModalOpen}
                onOpen={onLoginModalOpen}
                onClose={onLoginModalClose}
            />
        </React.Fragment>
    );
};

export default SidebarContent;

const CollapsedNavItem = ({ NavIcon, path, newTab, name }) => {
    const { colorMode } = useColorMode();

    return (
        <Tooltip label={name}>
            <Link
                href={path}
                target={newTab ? "_blank" : null}
                style={{ textDecoration: "none" }}
                _focus={{ boxShadow: "none" }}
            >
                <Box
                    display={"flex"}
                    justifyContent="center"
                    alignItems={"center"}
                    height={"45px"}
                    padding={"9px 20px"}
                    role="group"
                    cursor="pointer"
                    gap={"10px"}
                    _hover={{
                        bg: colorMode === "light" ? "#202020" : "#FFFFFF",
                        color: colorMode === "light" ? "#FFFFFF" : "#191919",
                        fontWeight: "600",
                    }}
                    mr={"-13px"}
                >
                    <Icon
                        as={NavIcon}
                        boxSize={22}
                        color={colorMode === "light" ? "#161616" : "#FFFFFF"}
                        _groupHover={{
                            color:
                                colorMode === "light" ? "#FFFFFF" : "#191919",
                        }}
                        alt="logo"
                    />
                </Box>
            </Link>
        </Tooltip>
    );
};

const NavItem = ({ NavIcon, path, newTab, isActive, onLoginModalOpen, children, ...rest }) => {
    const { colorMode } = useColorMode();
    const ValidatedUserData = useSelector((state) => state.authData.ValidatedUserData);
    const LoggedInData = useSelector((state) => state.authData.LoggedInData);
    if (isActive) {
        return (
            <Link
                href={path}
                target={newTab ? "_blank" : null}
                style={{ textDecoration: "none" }}
                _focus={{ boxShadow: "none" }}
            >
                <Box
                    display={"flex"}
                    alignItems="center"
                    justifyContent={"left"}
                    height={"38px"}
                    padding={"9px 20px"}
                    role="group"
                    cursor="pointer"
                    gap={"10px"}
                    bg={colorMode === "light" ? "#202020" : "#FFFFFF"}
                    color={colorMode === "light" ? "#FFFFFF" : "#191919"}
                    mr={"-13px"}
                    {...rest}
                >
                    <Icon
                        as={NavIcon}
                        boxSize={18}
                        color={colorMode === "light" ? "#FFFFFF" : "#191919"}
                    />
                    {children}
                </Box>
            </Link>
        );
    }
    if (path.includes("settings") && !(ValidatedUserData?.isSuccess || LoggedInData?.isSuccess)) {
        return (
            <Box
                onClick={onLoginModalOpen}
                style={{ textDecoration: "none" }}
                _focus={{ boxShadow: "none" }}
            >
                <Box
                    display={"flex"}
                    alignItems="center"
                    justifyContent={"left"}
                    height={"38px"}
                    padding={"9px 20px"}
                    role="group"
                    cursor="pointer"
                    gap={"10px"}
                    _hover={{
                        bg: colorMode === "light" ? "#202020" : "#FFFFFF",
                        color: colorMode === "light" ? "#FFFFFF" : "#191919",
                        fontWeight: "600",
                    }}
                    color={"text.primary"}
                    mr={"-13px"}
                    {...rest}
                >
                    <Icon
                        as={NavIcon}
                        boxSize={18}
                        color={colorMode === "light" ? "#161616" : "#FFFFFF"}
                        _groupHover={{
                            color: colorMode === "light" ? "#FFFFFF" : "#191919",
                        }}
                    />
                    {children}
                </Box>
            </Box>
        );
    } else {
        return (
            <Link
                href={path}
                target={newTab ? "_blank" : null}
                style={{ textDecoration: "none" }}
                _focus={{ boxShadow: "none" }}
            >
                <Box
                    display={"flex"}
                    alignItems="center"
                    justifyContent={"left"}
                    height={"38px"}
                    padding={"9px 20px"}
                    role="group"
                    cursor="pointer"
                    gap={"10px"}
                    _hover={{
                        bg: colorMode === "light" ? "#202020" : "#FFFFFF",
                        color: colorMode === "light" ? "#FFFFFF" : "#191919",
                        fontWeight: "600",
                    }}
                    color={"text.primary"}
                    mr={"-13px"}
                    {...rest}
                >
                    <Icon
                        as={NavIcon}
                        boxSize={18}
                        color={colorMode === "light" ? "#161616" : "#FFFFFF"}
                        _groupHover={{
                            color: colorMode === "light" ? "#FFFFFF" : "#191919",
                        }}
                    />
                    {children}
                </Box>
            </Link>
        );
    }

};

const MobileSidebar = ({ isOpen, onClose }) => {
    const appConfig = useContext(AppConfigContext);
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen: isCommunitiesOpen, onToggle: onCommunitiesToggle } =
        useDisclosure();
    const router = useRouter();
    const pathname = usePathname();
    const { data: AuthSession } = useSession();
    const { disconnect } = useDisconnect();
    const dispatch = useDispatch();
    const ValidatedUserData = useSelector((state) => state.authData.ValidatedUserData);
    const {
        isOpen: isLoginModalOpen,
        onOpen: onLoginModalOpen,
        onClose: onLoginModalClose,
    } = useDisclosure();
    return (
        <React.Fragment>
            <Drawer
                isOpen={isOpen}
                placement={"left"}
                onClose={onClose}
                //size={"md"}
                w="80%"
            >
                <DrawerOverlay />

                <DrawerContent>
                    <DrawerBody p={0}>
                        <Box
                            bg={useColorModeValue("white", "#191919")}
                            borderRight="1px"
                            borderRightColor={useColorModeValue(
                                "gray.200",
                                "gray.700"
                            )}
                            minH="100vh"
                            boxShadow={useColorModeValue(
                                "1px 0px 0px 0px #E1E1E1",
                                "1px 0px 0px 0px #333"
                            )}
                            display={"flex"}
                            pos={"fixed"}
                            zIndex={"100"}
                            w={"100%"}
                            h={"100%"}
                        >
                            <Box
                                w="100%"
                                h="100%"
                                display={"flex"}
                                flexDirection={"column"}
                                justifyContent={"space-between"}
                            >
                                {/* Top Half */}
                                <Box overflowY={{ base: "auto" }}>
                                    <Box
                                        display={"flex"}
                                        alignItems={"center"}
                                        justifyContent={"space-between"}
                                        padding={"5px 20px"}
                                        borderBottom={"2px"}
                                        borderColor={
                                            colorMode === "light"
                                                ? "#E1E1E1"
                                                : "#333"
                                        }
                                    >
                                        <Box
                                            display={"flex"}
                                            alignItems={"center"}
                                        >
                                            <Box
                                                mr="10px"
                                                cursor={"pointer"}
                                                onClick={onClose}
                                            >
                                                <DynamicIcon
                                                    name={
                                                        colorMode === "light"
                                                            ? "x_dark"
                                                            : "x_light"
                                                    }
                                                />
                                            </Box>

                                            <Box
                                                layerStyle={"flexCenter"}
                                                cursor={"pointer"}
                                                p={"20px"}
                                            >
                                                <Image
                                                    width={100}
                                                    height={70}
                                                    alt="logo"
                                                    // unoptimized="true"
                                                    // priority="true"
                                                    src={
                                                        colorMode === "light"
                                                            ? "/icons/light_betgyfi_sm_icon.svg"
                                                            : "/icons/dark_betgyfi_sm_logo.svg"
                                                    }
                                                    cursor={"pointer"}
                                                    onClick={() =>
                                                        router.push("/")
                                                    }
                                                />
                                            </Box>
                                        </Box>

                                        <Box>
                                            <div className="controller-row">
                                                <label className="switch">
                                                    <input
                                                        id="toggler"
                                                        type="checkbox"
                                                        checked={
                                                            colorMode !==
                                                            "light"
                                                        }
                                                        onChange={() => {
                                                            toggleColorMode();
                                                        }}
                                                    />
                                                    <span className="slider round"></span>
                                                </label>
                                            </div>
                                        </Box>
                                    </Box>

                                    <Box overflowY={"scroll"} height={{ md: "100vh" }} layerStyle={"flexColumn"}>
                                        {dashboards(appConfig).map((link, i) => (
                                            <NavItem
                                                key={i}
                                                NavIcon={link.icon}
                                                path={link.path}
                                                newTab={link.newTab}
                                                // isActive={pathname === link.path}
                                                isActive={link.activePaths.includes(pathname)}
                                                height={"50px"}
                                                mr={"0px"}
                                            >
                                                <Text
                                                    fontSize={"14px"}
                                                    lineHeight={"20px"}
                                                    letterSpacing={"1.4px"}
                                                >
                                                    {link.name}
                                                </Text>
                                            </NavItem>
                                        ))}

                                        {pages.map((link, i) => (
                                            <NavItem
                                                key={i}
                                                NavIcon={link.icon}
                                                path={link.path}
                                                newTab={link.newTab}
                                                isActive={
                                                    pathname === link.path
                                                }
                                                height={"50px"}
                                                mr={"0px"}
                                            >
                                                <Text
                                                    fontSize={"14px"}
                                                    lineHeight={"20px"}
                                                    letterSpacing={"1.4px"}
                                                >
                                                    {link.name}
                                                </Text>
                                            </NavItem>
                                        ))}

                                        {/* communities */}
                                        <Flex
                                            alignItems="stretch"
                                            alignContent={"center"}
                                            justifyContent={"space-between"}
                                            height={"50px"}
                                            padding={"9px 20px"}
                                            role="group"
                                            cursor="pointer"
                                            _hover={{
                                                bg:
                                                    colorMode === "light"
                                                        ? "#202020"
                                                        : "#FFFFFF",
                                                color:
                                                    colorMode === "light"
                                                        ? "#FFFFFF"
                                                        : "#191919",
                                                fontWeight: "600",
                                            }}
                                            fontSize="14px"
                                            fontWeight={"400"}
                                            lineHeight="20px"
                                            letterSpacing="1.4px"
                                            onClick={onCommunitiesToggle}
                                        >
                                            <Box
                                                display={"flex"}
                                                justifyContent={"center"}
                                                alignItems={"center"}
                                                alignContent={"center"}
                                                gap={"10px"}
                                            >
                                                <Icon
                                                    as={BsPeople}
                                                    boxSize={18}
                                                    color={
                                                        colorMode === "light"
                                                            ? "#161616"
                                                            : "#FFFFFF"
                                                    }
                                                    _groupHover={{
                                                        color:
                                                            colorMode ===
                                                                "light"
                                                                ? "#FFFFFF"
                                                                : "#191919",
                                                    }}
                                                />
                                                <Text>Communities</Text>
                                            </Box>

                                            <Box>
                                                <DirectionArrowIcon
                                                    boxSize={25}
                                                    color={
                                                        colorMode === "light"
                                                            ? "dark"
                                                            : "white"
                                                    }
                                                    _groupHover={{
                                                        color:
                                                            colorMode ===
                                                                "light"
                                                                ? "white"
                                                                : "dark",
                                                    }}
                                                    style={{ rotate: "90deg" }}
                                                />
                                            </Box>
                                        </Flex>

                                        <Collapse
                                            in={isCommunitiesOpen}
                                            animateOpacity={"true"}
                                        >
                                            <Box layerStyle={"flexColumn"}>
                                                {communities(appConfig).map((link, i) => (
                                                    <NavItem
                                                        key={i}
                                                        NavIcon={link.icon}
                                                        path={link.path}
                                                        newTab={link.newTab}
                                                        isActive={
                                                            pathname ===
                                                            link.path
                                                        }
                                                        height={"40px"}
                                                        pl={"20px"}
                                                        mr={"0px"}
                                                    >
                                                        <Text
                                                            fontSize={"12px"}
                                                            lineHeight={"20px"}
                                                            letterSpacing={
                                                                "1.4px"
                                                            }
                                                        >
                                                            {link.name}
                                                        </Text>
                                                    </NavItem>
                                                ))}
                                            </Box>
                                        </Collapse>

                                        {bottomMenu.map((link, i) => (
                                            <NavItem
                                                key={i}
                                                NavIcon={link.icon}
                                                onLoginModalOpen={onLoginModalOpen}

                                                path={link?.name === "Settings" ? `${link.path}/${ValidatedUserData?.data?.user_name}` : link.path}
                                                newTab={link.newTab}
                                                isActive={
                                                    pathname === link.path
                                                }
                                                height={"50px"}
                                                mr={"0px"}
                                            >
                                                <Text
                                                    fontSize={"14px"}
                                                    lineHeight={"20px"}
                                                    letterSpacing={"1.4px"}
                                                >
                                                    {link.name}
                                                </Text>
                                            </NavItem>
                                        ))}

                                        <NavItem
                                            NavIcon={legal.icon}
                                            path={legal.path}
                                            newTab={legal.newTab}
                                            isActive={pathname === legal.path}
                                            height={"50px"}
                                            mr={"0px"}
                                        >
                                            <Text
                                                fontSize={"14px"}
                                                lineHeight={"20px"}
                                                letterSpacing={"1.4px"}
                                            >
                                                Legal
                                            </Text>
                                        </NavItem>
                                    </Box>
                                </Box>

                                <Box
                                    display={"flex"}
                                    justifyContent={"center"}
                                    padding={"10px"}
                                    mb={"40px"}
                                >
                                    {!AuthSession ? (
                                        <Box
                                            alignContent={"center"}
                                        >
                                            <Box
                                                cursor={"pointer"}
                                                onClick={onLoginModalOpen}
                                                bgColor={
                                                    colorMode === "light"
                                                        ? "#282828"
                                                        : "#FFF"
                                                }
                                                layerStyle={"center"}
                                                borderRadius={"2px"}
                                                p="15px 20px"
                                                minW="150px"
                                            >
                                                <Text
                                                    variant={"SearchText"}
                                                    fontWeight={"600"}
                                                    _light={{ color: "#FAFAFB" }}
                                                    _dark={{ color: "#191919" }}
                                                >
                                                    Login/Signup
                                                </Text>
                                            </Box>
                                        </Box>
                                    ) : (
                                        <Box
                                            layerStyle={"flexCenter"}
                                            justifyContent={"center"}
                                            w="100%"
                                        >
                                            {typeof window !== "undefined" && (
                                                <CustomAvatar
                                                    src={AuthSession?.user?.image !== "undefined" ? AuthSession?.user?.image : null}
                                                />
                                            )}

                                            <Box
                                                layerStyle={"flexColumn"}
                                                ml="10px"
                                                mr="20px"
                                                minW="150px"
                                            >
                                                <Text
                                                    variant={"TopWalletsText"}
                                                    w="140px"
                                                    whiteSpace={"nowrap"}
                                                    overflow={"hidden"}
                                                    textOverflow={"ellipsis"}
                                                >
                                                    {AuthSession?.user?.name
                                                        ? PublicAddressStringFormatter(AuthSession?.user?.name) : 'No Name'}
                                                </Text>
                                                {AuthSession?.user?.public_address && (
                                                    <Text
                                                        variant={"h5"}
                                                        letterSpacing={"1.2px"}
                                                        _light={{ color: "#16171B" }}
                                                        _dark={{ color: "#A8ADBD" }}
                                                    >
                                                        {AuthSession?.user?.public_address
                                                            ?.split("")
                                                            ?.join("")
                                                            ?.substring(0, 6) +
                                                            "..." +
                                                            AuthSession?.user?.public_address?.slice(
                                                                -5
                                                            )}
                                                    </Text>
                                                )}
                                            </Box>
                                            <i
                                                className={`icon ${colorMode === "light"
                                                    ? "log_in_black"
                                                    : "log_in_white"
                                                    }`}
                                                onClick={() => {
                                                    disconnect();
                                                    setTimeout(() => {
                                                        dispatch(LogoutReducer());
                                                        setTimeout(() => {
                                                            signOut({ callbackUrl: appConfig.NEXTAUTH_URL });
                                                        }, 200);
                                                    }, 100);
                                                }}
                                            />
                                        </Box>
                                    )}
                                </Box>
                            </Box>
                        </Box>
                    </DrawerBody>
                </DrawerContent>
            </Drawer >
            <LoginPage
                isOpen={isLoginModalOpen}
                onOpen={onLoginModalOpen}
                onClose={onLoginModalClose}
            />
        </React.Fragment >

    );
};

export { MobileSidebar };

const DirectionArrowIcon = createIcon({
    displayName: "DirectionArrow",
    viewBox: "0 0 13 13",
    path: (
        <>
            <path fill="currentColor" d="M5.8 8.6l2.4-2.4-2.4-2.4" />
            <path fill="currentColor" d="M5.8 8.6l2.4-2.4-2.4-2.4v4.8z" />
        </>
    ),
});
