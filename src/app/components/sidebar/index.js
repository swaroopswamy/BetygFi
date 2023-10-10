"use client";
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
  Button,
  Icon,
} from "@chakra-ui/react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { sidebarCollapsedReducer } from "@/redux/app_data/dataSlice";
import dynamic from "next/dynamic";
import "/styles/styles.scss";
import { linkItemsDown, linkItemsUp, bottomMenu } from "./helper";
import { RiHomeLine } from "react-icons/ri";

const DynamicIcon = dynamic(() => import("../icons/index_new"), {
  loading: () => <span>Loading...</span>,
});


const SidebarContent = ({ onClose, ...rest }) => {
  const { colorMode } = useColorMode();
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();

  const SidebarHandler = (value) => {
    dispatch(sidebarCollapsedReducer(value));
  };

  const isSidebarCollapsed = useSelector(
    (state) => state?.appData?.isSidebarCollapsed
  );

  return (
    <>
      <Box
        bg={useColorModeValue("#FFFFFF", "#191919")}
        borderRight="1px"
        borderRightColor={useColorModeValue("#E1E1E1", "#333333")}
        minWidth={isSidebarCollapsed ? "50px" : "210px"}
        className="sidebar-styles"
        zIndex={"999"}
        display={{ base: "none", md: "flex" }}
        {...rest}
      >
        {!isSidebarCollapsed && (
          <Box layerStyle={"spaceBetween"} flexDir={"column"}>
            <Box layerStyle={"flexColumn"} gap={"15px"}>
              <Box layerStyle={"center"} alignItems="center" cursor={"pointer"} p={"20px"}
                onClick={() => router.push("/")}
              >
                  <Image
                    width={180}
                    height={80}
                    alt="logo"
                    src={colorMode === 'dark' ? "/icons/dark_betgyfi_sm_logo.svg" : "/icons/light_betgyfi_sm_icon.svg"}
                  />
              </Box>

              <Box layerStyle={"flexColumn"}>
                {linkItemsUp.map((link, i) => (
                  <NavItem
                    key={i}
                    NavIcon={link.icon}
                    path={link.path}
                    newTab={link.newTab}
                    isActive={pathname === link.path}
                  >
                    <Text fontSize={"14px"} lineHeight={"20px"} letterSpacing={"1.4px"}>{link.name}</Text>
                  </NavItem>
                ))}
              </Box>

              <hr style={{margin: "5px 15px"}} />

              <Box display={"flex"} w="100%" px={"20px"}>
                <Text variant={"h5"} opacity="0.6" letterSpacing={"1.2px"}> BetygFi Communities </Text>
              </Box>

              <Box layerStyle={"flexColumn"}>
                {linkItemsDown.map((link, i) => (
                  <NavItem
                    key={i}
                    NavIcon={link.icon}
                    path={link.path}
                    newTab={link.newTab}
                    isActive={pathname === link.path}
                  >
                    <Text fontSize={"12px"} lineHeight={"20px"} letterSpacing={"1.4px"}>{link.name}</Text>
                  </NavItem>
                ))}
              </Box>
          </Box>

            {/* Bottom Half */}
            <Box mb={"15px"}>
              {/* {bottomMenu.map((link) => (
                <NavItem
                  key={link.name}
                  Icon={link.icon}
                  path={link.path}
                  _hover={{
                    bg: colorMode === "light" ? "#202020" : "#FFFFFF",
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
              ))} */}

              <hr style={{ marginBottom: "15px" }} />

              {/* <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                flexDirection={"column"}
                w={"100%"}
              >
                <Box display={"flex"} alignItems={"center"} w={"100%"} pl={6}>
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
                      color: "#FFF",
                    }}
                    _light={{
                      color: "#16171B",
                    }}
                  >
                    Powered by Solvendo
                  </Text>
                </Box>
              </Box> */}
            </Box>
          </Box>
        )}

        {isSidebarCollapsed && (
          <Box
            w="100%"
            h="100%"
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-between"}
            mr={"-10px"}
          >
            {/* Top Half */}
            <Box>
              <Flex
                width={"50px"}
                h="20"
                alignItems="center"
                mx="17px"
                mb="40px"
                justifyContent="center"
                cursor={"pointer"}
              >
                {colorMode === "light" && (
                  <Image
                    width={180}
                    height={80}
                    alt="logo"
                    src="/icons/company_sidebar_sm_logo_dark.svg"
                    cursor={"pointer"}
                    onClick={() => router.push("/")}
                  />
                )}
                {colorMode === "dark" && (
                  <Image
                    width={180}
                    height={80}
                    alt="logo"
                    src="/icons/company_sidebar_sm_logo_light.svg"
                    cursor={"pointer"}
                    onClick={() => router.push("/")}
                  />
                )}
                {/*   <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
                 */}
              </Flex>

              {linkItemsUp.map((link, i) => (
                <CollapsedNavItem
                  key={link.name}
                  icon={link.icon}
                  path={link.path}
                  newTab={link.newTab}
                  _hover={{
                    bg: colorMode === "light" ? "#202020" : "#FFFFFF",
                    color: colorMode === "light" ? "#FFFFFF" : "#191919",
                    fontWeight: "600",
                    mr: "-1 px",
                  }}
                  fontSize="14px"
                  fontWeight="400"
                  lineHeight="20px"
                  letterSpacing="1.4px"
                  _dark={{
                    color: "#FFF",
                  }}
                  _light={{
                    color: "#16171B",
                  }}
                ></CollapsedNavItem>
              ))}

              <hr style={{ margin: "15px 0px" }} />

              <Box>
                {linkItemsDown.map((link) => (
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
                          _hover={{
                            bg: colorMode === "light" ? "#202020" : "#FFFFFF",
                            color:
                              colorMode === "light" ? "#FFFFFF" : "#191919",
                            fontWeight: "600",
                            mr: "-1px",
                          }}
                          fontSize="12px"
                          fontWeight="400"
                          lineHeight="20px"
                          letterSpacing="1.2px"
                          _dark={{
                            color: "#FFF",
                          }}
                          _light={{
                            color: "#16171B",
                          }}
                        ></CollapsedNavItem>
                      </>
                    )}
                  </>
                ))}
              </Box>
            </Box>

            <Box mb={"50px"}>
              {bottomMenu.map((link) => (
                <CollapsedNavItem
                  key={link.name}
                  icon={link.icon}
                  path={link.path}
                  _hover={{
                    bg: colorMode === "light" ? "#202020" : "#FFFFFF",
                    color: colorMode === "light" ? "#FFFFFF" : "#191919",
                    fontWeight: "600",
                    mr: "-1px",
                  }}
                  newTab={link.newTab}
                  fontSize="12px"
                  fontWeight="400"
                  lineHeight="20px"
                  letterSpacing="1.2px"
                  _dark={{
                    color: "#FFF",
                  }}
                  _light={{
                    color: "#16171B",
                  }}
                ></CollapsedNavItem>
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

        <Box display={"flex"}>
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
              style={
                isSidebarCollapsed ? { rotate: "180deg" } : { rotate: "0deg" }
              }
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

export default SidebarContent;


const CollapsedNavItem = ({ icon, path, newTab, isActive, children, ...rest }) => {
  return (
    <Link
      href={path}
      target={newTab ? "_blank" : null}
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
        <Image paddingTop={"3px"} height={20} width={20} src={icon} />
      </Flex>
    </Link>
  );
};

const NavItem = ({ NavIcon, path, newTab, isActive, children, ...rest }) => {
  const { colorMode } = useColorMode();

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
        >
          <Icon as={NavIcon} boxSize={18} color={colorMode === "light" ? "#FFFFFF" : "#191919"}/>
          {children}
        </Box>
      </Link>
    );
  }

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
          mr: "-13px",
        }}
      >
        <Icon 
          as={NavIcon}
          boxSize={18}
          color={colorMode === "light" ? "#6F7383" : "#676767"}
          _groupHover={{
            color: colorMode === "light" ? "#FFFFFF" : "#191919",
          }}
        />
        {children}
      </Box>
    </Link>
  );
};

const MobileSidebar = ({
  isOpen,
  onOpen,
  onClose,
  isLoginModalOpen,
  onLoginModalOpen,
  onLoginModalClose,
}) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen: isCommunitiesOpen, onToggle: onCommunitiesToggle } =
    useDisclosure();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
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
                    <Box display={"flex"} alignItems={"center"}>
                      <Box mr="10px" cursor={"pointer"} onClick={onClose}>
                        {/*  <Image
                          height={40}
                          width={40}
                          src={
                            colorMode === "light"
                              ? "/icons/x_dark.svg"
                              : "/icons/x_light.svg"
                          }
                        ></Image> */}
                        <DynamicIcon
                          name={colorMode === "light" ? "x_dark" : "x_light"}
                        />
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
                          src={
                            colorMode === "light"
                              ? "/icons/light_betgyfi_sm_icon.svg"
                              : "/icons/dark_betgyfi_sm_logo.svg"
                          }
                          cursor={"pointer"}
                          onClick={() => router.push("/")}
                        />
                      </Box>
                    </Box>

                    <Box>
                      <div className="controller-row">
                        <label className="switch">
                          <input
                            id="toggler"
                            type="checkbox"
                            checked={colorMode !== "light"}
                            onChange={(e) => {
                              toggleColorMode();
                            }}
                          />
                          <span className="slider round"></span>
                        </label>
                      </div>
                    </Box>
                  </Box>

                  {linkItemsUp.map((link, i) => (
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
                      bg={
                        pathname === link.path
                          ? colorMode === "light"
                            ? "#202020"
                            : "#FFFFFF"
                          : null
                      }
                      color={
                        pathname === link.path
                          ? colorMode === "light"
                            ? "#FFFFFF"
                            : "#191919"
                          : null
                      }
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
                      <Text>Communities</Text>
                    </Box>

                    <Box>
                      <DirectionArrowIcon
                        boxSize={25}
                        color={colorMode === "light" ? "dark" : "white"}
                        _groupHover={{
                          color: colorMode === "light" ? "white" : "dark",
                        }}
                        style={{ rotate: "90deg" }}
                      />
                    </Box>
                  </Flex>

                  <Collapse in={isCommunitiesOpen} animateOpacity={"true"}>
                    {linkItemsDown.map((link) => (
                      <>
                        {link?.dropdown ? (
                          <></>
                        ) : (
                          <>
                            <NavItem
                              key={link.name}
                              icon={link.icon}
                              path={link.path}
                              _hover={{
                                bg:
                                  colorMode === "light" ? "#202020" : "#FFFFFF",
                                color:
                                  colorMode === "light" ? "#FFFFFF" : "#191919",
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
                    bgColor={colorMode === "light" ? "#202020" : "#FFF"}
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
                      color={colorMode === "light" ? "#FAFAFB" : "#000"}
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
