"use client";
import { InfoIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  CloseButton,
  Flex,
  Icon,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorMode,
  useColorModeValue,
  Drawer,
  DrawerOverlay,
  DrawerBody,
  DrawerContent,
  Collapse,
  useDisclosure,
  createIcon
} from "@chakra-ui/react";
import Image from "next/image";
import StarIcon from "../../../../public/icons/star_sm_logo.svg";
import HomeIcon from "../../../../public/icons/home_sm_logo.svg";
import CommunityIcon from "../../../../public/icons/community_sm_logo.svg";
import SpeclationIcon from "../../../../public/icons/wallet_sm_logo.svg";
import CompanyIcon from "../../../../public/icons/company_sm_logo.svg";
import LegalIcon from "../../../../public/icons/book_sm_logo.svg";
import QuestionIcon from "../../../../public/icons/question_mark_sm_icon.svg";
import SettingIcon from "../../../../public/icons/setting_sm_icon.svg";
import BulbIcon from "../../../../public/icons/bulb_sm_icon.svg";
import BugIcon from "../../../../public/icons/bug_sm_icon.svg";
import ApproachPaperIcon from '../../../../public/icons/approach-paper-icon.svg';
import DiscordIcon from "../../../../public/icons/discord-icon-light.svg";
import TwitterIcon from "../../../../public/icons/twitter-icon.svg";
import RedditIcon from "../../../../public/icons/reddit-icon.svg";

import { ChevronDownIcon } from "@chakra-ui/icons";
import { MoonIcon, SunIcon } from "@chakra-ui/icons"; 
import { usePathname, useRouter } from "next/navigation";

import useScreenSize from '../../../hooks/useScreenSize'
import { left } from "@popperjs/core";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sidebarCollapsedReducer } from "@/redux/app_data/dataSlice"
import { mobileSidebarCollapsedReducer } from "../../../redux/app_data/dataSlice";
import { color } from "framer-motion";

 import "../../styles.scss";

const LinkItemsUp = [
  { name: "Home", icon: "icons/home_sm_logo.svg", path: '/' },
  // { name: "Speculation", icon: SpeclationIcon, path: '#' },
  { name: "Approach Paper", icon: "icons/approach-paper-icon.svg", path: '/approach-paper'  },
  { name: "Top Wallets", icon: "icons/wallet_sm_logo.svg", path: '/top-wallets' },
  { name: "About", icon: "icons/company_sm_logo.svg", path: '/about'}
  // { name: "Significant", icon: StarIcon, path: '#' },
];

const LinkItemsDown = [
  { name: "Reddit", icon: "icons/reddit-icon.svg", path: 'https://www.reddit.com/r/betygFi', newTab: true },
  { name: "Discord", icon: "icons/discord-icon-light.svg", path: 'https://discord.gg/bGMmeNRJtW', newTab: true },
  { name: "Twitter", icon: "icons/twitter-icon.svg", path: 'https://twitter.com/betygFi', newTab: true },
];

const bottomMenu = [
  // { name: "Help", icon: QuestionIcon, path: '#' },
  // { name: "Settings", icon: SettingIcon, path: '#' },
  { name: "Settings", icon: "icons/settings-icon.svg", path: '/settings'},
  { name: "Suggest Feature", icon: "icons/bulb_sm_icon.svg", newTab: true, path: 'https://docs.google.com/forms/d/e/1FAIpQLSfxE_1k10L62cK87MuZfqik3D1nWruLu4MhIpzfOwIC7rhaQQ/viewform' },
  { name: "Report Bug", icon: "icons/bug_sm_icon.svg", newTab: true, path: 'https://docs.google.com/forms/d/e/1FAIpQLSeFhdugB6onlsQizRby95DA68y_nz_jJ-OwiSndZmin7KGMLw/viewform' },
];

const SidebarContent = ({ onClose, ...rest }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [ isCollapsed, setCollapse ] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();
  const screenSize = useScreenSize();

  const SidebarHandler = (value) => {
    dispatch(sidebarCollapsedReducer(value));
  };

  const isSidebarCollapsed = useSelector(
    (state) => state?.appData?.isSidebarCollapsed
  );
  const isMobileSidebarCollapsed = useSelector(
    (state) => state?.appData?.isMobileSidebarCollapsed
  );
  const MobileSidebarHandler = (value) => {
    dispatch(mobileSidebarCollapsedReducer(value));
  };

  return (
    <>
      <Box
        bg={useColorModeValue("white", "#191919")}
        borderRight="1px"
        borderRightColor={useColorModeValue("gray.200", "gray.700")}
        minWidth={isSidebarCollapsed ? "50px" : "210px"}
        // h={"100vh"}
        //pos={screenSize?.width < 1450 ? "relative" : "fixed"}
        className="sidebar-styles"
        zIndex={"999"}
        boxShadow={useColorModeValue(
          "1px 0px 0px 0px #E1E1E1",
          "1px 0px 0px 0px #333"
        )}
        display={{base: "none", md: "flex"}}
        {...rest}
      >
        { !isSidebarCollapsed && (
          <Box
            w="100%"
            h="100%"
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-between"}
          >
            {/* Top Half */}
            <Box>
              <Flex
                h="20"
                alignItems="center"
                mx="17px"
                mb="40px"
                justifyContent="space-between"
                cursor={"pointer"}
              >
                {colorMode === 'light' && (
                <Image
                  width={180}
                  height={80}
                  alt="logo"
                  src="/icons/light_betgyfi_sm_icon.svg"
                  cursor={"pointer"}
                  onClick={() => router.push('/')}
                />)}
                {colorMode === 'dark' && (
                <Image
                  width={180}
                  height={80}
                  alt="logo"
                  src="/icons/dark_betgyfi_sm_logo.svg"
                  cursor={"pointer"}
                  onClick={() => router.push('/')}
                />)}
                
                {/*   <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
            */} 
              </Flex>

              {LinkItemsUp.map((link, i) => (
                <NavItem
                  key={link.name}
                  icon={link.icon}
                  path={link.path}
                  newTab={link.newTab}
                  _hover={{ bg: colorMode === "light"? "#202020" : "#FFFFFF",
                            color: colorMode === "light" ? "#FFFFFF" : "#191919",
                            fontWeight: "600",
                            mr: "-13px"}}
                  // activeStyle={pathname === link.path && console.log("HERE: ", pathname, link.path) && 
                  bg={pathname === link.path ? (colorMode === "light"? "#202020" : "#FFFFFF") : null}
                  color={pathname === link.path ? (colorMode === "light" ? "#FFFFFF" : "#191919") : null}
                  mr={pathname === link.path ? "-13px" : null}
                  fontSize="14px"
                  fontWeight={pathname == link.path ? "600" : "400"}
                  lineHeight="20px"
                  letterSpacing="1.4px"
                  alignContent="center"
                >
                  <Text>
                    {link.name} 
                  </Text>
                </NavItem>
              ))}

              <hr style={{ margin: "25px 20px" }} />

              <Text
                fontSize="12px"
                fontWeight="400"
                lineHeight="20px"
                letterSpacing="1.2px"
                opacity="0.6"
                _dark={{
                  color:"#FFF"
                }}
                _light={{
                  color:"#16171B"
                }}
                mb="15px"
                w="100%"
                mx="4"
                px="2"
              >
                BetygFi Communities
              </Text>

              {LinkItemsDown.map((link) => (
                <>
                  {link?.dropdown ? (
                    <>
                      {/*   <Menu key={link.name}>
                  <MenuButton as={Button} width={"100%"} rightIcon={<ChevronDownIcon />}>
                    {link.name}
                  </MenuButton>
                  <MenuList>
                    <MenuItem>Download</MenuItem>
                    <MenuItem>Create a Copy</MenuItem>
                  </MenuList>
                </Menu> */}
                    </>
                  ) : (
                    <>
                      <NavItem
                        key={link.name}
                        icon={link.icon}
                        path={link.path}
                        _hover={{ bg: colorMode === "light"? "#202020" : "#FFFFFF",
                            color: colorMode === "light" ? "#FFFFFF" : "#191919",
                            fontWeight: "600",
                            mr: "-13px"}}
                        fontSize="14px"
                        fontWeight="400"
                        lineHeight="20px" 
                        letterSpacing="1.2px"
                      >
                        {link.name}
                      </NavItem>
                    </>
                  )}
                </>
              ))}
            </Box>

            {/* Bottom Half */}
            <Box
              mb={"15px"}
            >
                {bottomMenu.map((link) => (
                  <NavItem
                    key={link.name}
                    icon={link.icon}
                    path={link.path}
                    _hover={{ bg: colorMode === "light"? "#202020" : "#FFFFFF",
                            color: colorMode === "light" ? "#FFFFFF" : "#191919",
                            fontWeight: "600",
                          }}
                    newTab={link.newTab}
                    fontSize="12px"
                    fontWeight="400"
                    lineHeight="20px"
                    letterSpacing="1.2px"
                  >
                    {link.name}
                  </NavItem>
                ))}

                <hr style={{ marginBottom: "15px" }} />

                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  flexDirection={"column"}
                  w={"100%"}
                >
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    w={"100%"}
                    pl={6}
                  >
                    <Image
                      width={15}
                      height={15}
                      alt="logo"
                      src={"/icons/company_sm_logo.svg"}
                      style={{ marginRight: "10px" }}
                    />
                    <Text
                      //as={"capital"}
                      //opacity={"0.5"}
                      fontSize={"11px"}
                      fontStyle={"normal"}
                      fontWeight={400}
                      letterSpacing={"1.1px"}
                      lineHeight={"20px"}
                      textTransform={"capitalize"}
                      _dark={{
                        color:"#FFF"
                      }}
                      _light={{
                        color:"#16171B"
                      }}
                    >
                      Powered by Solvendo
                    </Text>

                  </Box>

                  {/* <Box onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon color={"white"} />}
            </Box> */}
                </Box>
            </Box>

          </Box>
        )}

        { isSidebarCollapsed && (
          <Box
            w="100%"
            h="100%"
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-between"}
            mr={"-10px"}
          >
            {/* Top Half */}
            <Box
            >
              <Flex
                width={"50px"}
                h="20"
                alignItems="center"
                mx="17px"
                mb="40px"
                justifyContent="center"
                cursor={"pointer"}
              >
                {colorMode === 'light' && (
                <Image
                  width={180}
                  height={80}
                  alt="logo"
                  src="/icons/company_sidebar_sm_logo_dark.svg"
                  cursor={"pointer"}
                  onClick={() => router.push('/')}
                />)}
                {colorMode === 'dark' && (
                <Image
                  width={180}
                  height={80}
                  alt="logo"
                  src="/icons/company_sidebar_sm_logo_light.svg"
                  cursor={"pointer"}
                  onClick={() => router.push('/')}
                />)}
                {/*   <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
            */} 
              </Flex>

              {LinkItemsUp.map((link, i) => (
                <CollapsedNavItem
                  key={link.name}
                  icon={link.icon}
                  path={link.path}
                  newTab={link.newTab}
                  _hover={{ bg: colorMode === "light"? "#202020" : "#FFFFFF",
                            color: colorMode === "light" ? "#FFFFFF" : "#191919",
                            fontWeight: "600",
                            mr: "-1 px"}}
                  fontSize="14px"
                  fontWeight="400"
                  lineHeight="20px"
                  letterSpacing="1.4px"
                  _dark={{
                    color:"#FFF"
                  }}
                  _light={{
                    color:"#16171B"
                  }}
                  >
                  </CollapsedNavItem>
                ))}

              <hr style={{ margin: "15px 0px" }} />

              <Box>

                {LinkItemsDown.map((link) => (
                  <>
                    {link?.dropdown ? (
                      <>
                        {/*   <Menu key={link.name}>
                    <MenuButton as={Button} width={"100%"} rightIcon={<ChevronDownIcon />}>
                      {link.name}
                    </MenuButton>
                    <MenuList>
                      <MenuItem>Download</MenuItem>
                      <MenuItem>Create a Copy</MenuItem>
                    </MenuList>
                  </Menu> */}
                      </>
                    ) : (
                      <>
                        <CollapsedNavItem
                          key={link.name}
                          icon={link.icon}
                          path={link.path}
                          _hover={{ bg: colorMode === "light"? "#202020" : "#FFFFFF",
                            color: colorMode === "light" ? "#FFFFFF" : "#191919",
                            fontWeight: "600",
                            mr: "-1px"}}
                          fontSize="12px"
                          fontWeight="400"
                          lineHeight="20px"
                          letterSpacing="1.2px"
                          _dark={{
                            color:"#FFF"
                          }}
                          _light={{
                            color:"#16171B"
                          }}
                        >
                        </CollapsedNavItem>
                      </>
                    )}
                  </>
                ))}
              </Box>
            </Box>

            <Box
              mb={"50px"}
            >
                  {bottomMenu.map((link) => (
                    <CollapsedNavItem
                      key={link.name}
                      icon={link.icon}
                      path={link.path}
                      _hover={{ bg: colorMode === "light"? "#202020" : "#FFFFFF",
                            color: colorMode === "light" ? "#FFFFFF" : "#191919",
                            fontWeight: "600",
                            mr: "-1px"}}
                      newTab={link.newTab}
                      fontSize="12px"
                      fontWeight="400"
                      lineHeight="20px"
                      letterSpacing="1.2px"
                      _dark={{
                        color:"#FFF"
                      }}
                      _light={{
                        color:"#16171B"
                      }}
                    >
                    </CollapsedNavItem>
                  ))}

                  <hr style={{ margin: "25px 0px" }} />
                  
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    w={"100%"}
                    mt={"20px"}
                  >
                    <Image
                      width={15}
                      height={15}
                      alt="logo"
                      src={"/icons/company_sm_logo.svg"}
                    />

                  </Box>

            </Box>

          </Box>
        )}

        <Box
          display={"flex"}
        >
            <Flex
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
                style={isSidebarCollapsed ? { rotate: '180deg' } : { rotate: '0deg'}}
                src={useColorModeValue(
                  "/icons/collapse-sidebar-light.svg",
                  "/icons/collapse-sidebar-dark.svg"
                )}
              />
            </Flex>
        </Box>

      </Box>
    </>
  );
};

const CollapsedNavItem = ({ icon, path, newTab, children, ...rest }) => {
  return (
    <Link
      href={path}
      target={newTab ? '_blank' : null}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        justifyContent="center"
        height={"38px"}
        padding={"9px 20px"}
        role="group"
        cursor="pointer"
        {...rest}
      >
        <Image
          paddingTop={"3px"}
          height={20}
          width={20}
          src={icon}
        />
      </Flex>
    </Link>
  );
};

const NavItem = ({ icon, path, newTab, children, ...rest }) => {
  return (
    <Link
      href={path}
      target={newTab ? '_blank' : null}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        alignItems="center"
        justifyContent={"left"}
        height={"38px"}
        padding={"9px 20px"}
        role="group"
        cursor="pointer"
        gap={"10px"}
        {...rest}
      >
        <Image
          height={"14"}
          width={"14"}
          _groupHover={{
            color: "white",
          }}
          src={icon}
        />
        {children}

      </Flex>
    </Link>
  );
};

export default SidebarContent;

const MobileSidebar = ( { isOpen, onOpen, onClose , isLoginModalOpen, onLoginModalOpen, onLoginModalClose , } ) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen: isCommunitiesOpen, onToggle: onCommunitiesToggle } = useDisclosure();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement={'left'}
        onClose={onClose}
        //size={"md"}
        w="80%"
      >
        <DrawerOverlay />

        <DrawerContent>
          <DrawerBody
            p={0}
          >
            <Box
              bg={useColorModeValue("white", "#191919")}
              borderRight="1px"
              borderRightColor={useColorModeValue("gray.200", "gray.700")}
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
                <Box>

                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    padding={"5px 20px"}
                    borderBottom={"2px"}
                    borderColor={colorMode === "light" ? "#E1E1E1" : "#333"}
                    mb={"10px"}
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
                        <Image
                          height={40}
                          width={40}
                          src={colorMode === 'light' ? "/icons/x_dark.svg" : "/icons/x_light.svg"}
                        ></Image>
                      </Box>

                      <Box
                        h="20"
                        display={"flex"}
                        alignItems="center"
                        justifyContent="center"
                        cursor={"pointer"}
                      >
                        <Image
                          width={100}
                          height={50}
                          alt="logo"
                          src={colorMode === 'light' ? "/icons/light_betgyfi_sm_icon.svg" : "/icons/dark_betgyfi_sm_logo.svg"}
                          cursor={"pointer"}
                          onClick={() => router.push('/')}
                        />
                      </Box>
                    </Box>

                    <Box>
                      <div className="controller-row">
                        <label className="switch">
                          <input id="toggler" type="checkbox" checked={colorMode !== "light"} onChange={(e) => {
                            toggleColorMode();
                          }} />
                          <span className="slider round"></span>
                        </label>
                      </div>
                    </Box>

                  </Box>

                  {LinkItemsUp.map((link, i) => (
                    <NavItem
                      key={link.name}
                      icon={link.icon}
                      path={link.path}
                      newTab={link.newTab}
                      _hover={{
                        bg: colorMode === "light" ? "#202020" : "#FFFFFF",
                        color: colorMode === "light" ? "#FFFFFF" : "#191919",
                        fontWeight: "600",
                      }}
                      // activeStyle={pathname === link.path && console.log("HERE: ", pathname, link.path) && 
                      bg={pathname === link.path ? (colorMode === "light" ? "#202020" : "#FFFFFF") : null}
                      color={pathname === link.path ? (colorMode === "light" ? "#FFFFFF" : "#191919") : null}
                      fontSize="14px"
                      fontWeight={pathname == link.path ? "600" : "400"}
                      lineHeight="20px"
                      letterSpacing="1.4px"
                      alignContent="center"
                    >
                      {link.name}
                    </NavItem>
                  ))}

                  {/* communities */}
                  <Flex
                    alignItems="stretch"
                    alignContent={"center"}
                    justifyContent={"space-between"}
                    height={"38px"}
                    padding={"9px 20px"}
                    role="group"
                    cursor="pointer"
                    _hover={{
                      bg: colorMode === "light" ? "#202020" : "#FFFFFF",
                      color: colorMode === "light" ? "#FFFFFF" : "#191919",
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
                      <Image
                        width={"15"}
                        height={"15"}
                        _groupHover={{
                          color: "white",
                        }}
                        src={"icons/community_sm_logo.svg"}
                      />
                        <Text>
                          Communities
                        </Text>
                    </Box>
                    
                    <Box>
                      <DirectionArrowIcon 
                        boxSize={25}
                        color={colorMode === 'light' ? "dark" : "white"}
                        _groupHover={{
                          color: colorMode === 'light' ? "white" : "dark"
                        }}
                        style={{rotate: '90deg'}}
                      />
                    </Box>
 
                  </Flex>

                  <Collapse
                    in={isCommunitiesOpen}
                    animateOpacity={"true"}
                  >
                    {LinkItemsDown.map((link) => (
                    <>
                      {link?.dropdown ? (
                        <>
                        </>
                      ) : (
                        <>
                          <NavItem
                            key={link.name}
                            icon={link.icon}
                            path={link.path}
                            _hover={{ bg: colorMode === "light"? "#202020" : "#FFFFFF",
                                color: colorMode === "light" ? "#FFFFFF" : "#191919",
                                fontWeight: "600",
                                }}
                            fontSize="12px"
                            fontWeight="400"
                            lineHeight="20px" 
                            letterSpacing="1.2px"
                            ml={"20px"}
                          >
                            {link.name}
                          </NavItem>
                        </>
                      )}
                    </>
                    ))}
                  </Collapse>

                  {bottomMenu.map((link) => (
                    <NavItem
                      key={link.name}
                      icon={link.icon}
                      path={link.path}
                      _hover={{
                        bg: colorMode === "light" ? "#202020" : "#FFFFFF",
                        color: colorMode === "light" ? "#FFFFFF" : "#191919",
                        fontWeight: "600",
                      }}
                      newTab={link.newTab}
                      fontSize="14px"
                      fontWeight="400"
                      lineHeight="20px"
                      letterSpacing="1.2px"
                    >
                      {link.name}
                    </NavItem>
                  ))}
                </Box>

                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  padding={"10px"}
                  mb={"20px"}
                >
                  <Box
                    cursor={"pointer"}
                    onClick={onLoginModalOpen}
                    bgColor={colorMode === 'light' ? "#202020" : "#FFF"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    borderRadius={"2px"}
                    p={"15px 20px"}
                    width={"80%"}
                  >
                    <Text
                      fontSize={"14px"}
                      fontWeight={"600"}
                      lineHeight={"10px"}
                      color={colorMode === 'light' ? "#FAFAFB" : "#000"}
                    >
                      Connect Wallet
                    </Text>
                  </Box>

                </Box>

              </Box>

            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

    </>
  )
}

export {MobileSidebar};

const DirectionArrowIcon = createIcon({
  displayName: "DirectionArrow",
  viewBox: "0 0 13 13",
  path: (
    <>
      <path
        fill="currentColor"
        d="M5.8 8.6l2.4-2.4-2.4-2.4"
      />
      <path
        fill="currentColor"
        d="M5.8 8.6l2.4-2.4-2.4-2.4v4.8z"
      />
    </>
  ),
});