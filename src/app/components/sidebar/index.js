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
import { useRouter } from "next/navigation";

import useScreenSize from '../../../hooks/useScreenSize'
import { left } from "@popperjs/core";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sidebarCollapsedReducer } from "@/redux/app_data/dataSlice"

const LinkItemsUp = [
  { name: "Home", icon: HomeIcon, path: '/' },
  // { name: "Speculation", icon: SpeclationIcon, path: '#' },
  { name: "Approach Paper", icon: ApproachPaperIcon,newTab: true, path: 'https://betygfi.com/Document/Approachpaper.pdf'  },
  { name: "About", icon: CompanyIcon, path: '/about'},
  { name: "Top Wallets", icon: SpeclationIcon, path: '/top-wallets' },
  // { name: "Significant", icon: StarIcon, path: '#' },
];

const LinkItemsDown = [
  { name: "Reddit", icon: RedditIcon, path: 'https://www.reddit.com/r/betygFi', newTab: true },
  { name: "Discord", icon: DiscordIcon, path: 'https://discord.gg/bGMmeNRJtW', newTab: true },
  { name: "Twitter", icon: TwitterIcon, path: 'https://twitter.com/betygFi', newTab: true },
];

const bottomMenu = [
  // { name: "Help", icon: QuestionIcon, path: '#' },
  // { name: "Settings", icon: SettingIcon, path: '#' },
  { name: "Suggest Feature", icon: BulbIcon, newTab: true, path: 'https://docs.google.com/forms/d/e/1FAIpQLSfxE_1k10L62cK87MuZfqik3D1nWruLu4MhIpzfOwIC7rhaQQ/viewform' },
  { name: "Report Bug", icon: BugIcon, newTab: true, path: 'https://docs.google.com/forms/d/e/1FAIpQLSeFhdugB6onlsQizRby95DA68y_nz_jJ-OwiSndZmin7KGMLw/viewform' },
];

const SidebarContent = ({ onClose, ...rest }) => {
  const { colorMode } = useColorMode();
  const [ isCollapsed, setCollapse ] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const screenSize = useScreenSize();

  const SidebarHandler = (value) => {
    dispatch(sidebarCollapsedReducer(value));
  };

  const isSidebarCollapsed = useSelector(
    (state) => state?.appData?.isSidebarCollapsed
  );

  return (
    <>
      <Box
        bg={useColorModeValue("white", "#191919")}
        borderRight="1px"
        borderRightColor={useColorModeValue("gray.200", "gray.700")}
        minWidth={isSidebarCollapsed ? "50px" : "210px"}
        pos={screenSize?.width < 1450 ? "relative" : "fixed"}
        minH="100vh"
        boxShadow={useColorModeValue(
          "1px 0px 0px 0px #E1E1E1",
          "1px 0px 0px 0px #333"
        )}
        display={"flex"}
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
                  fontSize="14px"
                  fontWeight="400"
                  lineHeight="20px"
                  letterSpacing="1.4px"
                  alignContent="center"
                >
                  {link.name}
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
                        fontSize="12px"
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
            <Box>
              <div style={{ position: screenSize?.width < 1450  ? "relative " : "absolute", bottom: "10px", width: "100%" }}>
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
                      as={"capital"}
                      fontSize={"11px"}
                      fontStyle={"normal"}
                      fontWeight={"400"}
                      letterSpacing={"1.1px"}
                      _dark={{
                        color:"#FFF"
                      }}
                      _light={{
                        color:"#16171B"
                      }}
                    >
                      POWERED BY SOLVENDO
                    </Text>

                  </Box>

                  {/* <Box onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon color={"white"} />}
            </Box> */}
                </Box>

              </div>

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
                  src="/icons/company_sidebar_sm_logo_dark.png"
                  cursor={"pointer"}
                  onClick={() => router.push('/')}
                />)}
                {colorMode === 'dark' && (
                <Image
                  width={180}
                  height={80}
                  alt="logo"
                  src="/icons/company_sidebar_sm_logo_light.png"
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
                            mr: "-1px"}}
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

              <hr style={{ margin: "25px 0px" }} />

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

            <Box>
              <div style={{ position: screenSize?.width < 1450  ? "relative " : "absolute", bottom: "10px", width: "100%" }}>
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

                  <hr style={{ marginBottom: "15px" }} />
                  
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    w={"100%"}
                  >
                    <Image
                      width={15}
                      height={15}
                      alt="logo"
                      src={"/icons/company_sm_logo.svg"}
                    />

                    {/* <Box onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon color={"white"} />}
              </Box> */}
                  </Box>

              </div>
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
        padding={"9px"}
        role="group"
        cursor="pointer"
        {...rest}
      >
        {icon && (
          <Icon
            ml="10px"
            paddingTop={"3px"}
            boxSize={25}
            as={icon}
          />
        )}
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
        alignItems="stretch"
        alignContent={"center"}
        height={"38px"}
        padding={"9px"}
        role="group"
        cursor="pointer"
        {...rest}
      >
          {icon && (
            <Icon
              mt="1px"
              ml="3"
              p="0"
              w="25px"
              h="25px"
              fontSize="16"
              _groupHover={{
                color: "white",
              }}
              as={icon}
            />
          )}
          {children}

      </Flex>
    </Link>
  );
};

export default SidebarContent;