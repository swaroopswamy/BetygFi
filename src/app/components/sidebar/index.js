/* eslint-disable react-hooks/rules-of-hooks */
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
import { ChevronDownIcon } from "@chakra-ui/icons";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";


const LinkItemsUp = [
  { name: "Home", icon: HomeIcon, path: '/' },
  { name: "Speculation", icon: SpeclationIcon, path: '#' },
  { name: "Approach Paper", icon: CompanyIcon, newTab: true, path: 'https://betygfi.com/Document/Approachpaper.pdf' },
  { name: "About", icon: CompanyIcon, path: '/' },
  // { name: "Significant", icon: StarIcon, path: '#' },
];
const LinkItemsDown = [
  // { name: "Speculation", icon: SpeclationIcon, path: '#' },
  // { name: "Company", icon: CompanyIcon, path: '#' },
  // { name: "legal", icon: LegalIcon, dropdown: true, path: '#' },
];


const bottomMenu = [
  { name: "Help", icon: QuestionIcon, path: '#' },
  { name: "Settings", icon: SettingIcon, path: '#' },
  { name: "Suggest Feature", icon: BulbIcon, newTab: true, path: 'https://docs.google.com/forms/d/e/1FAIpQLSfxE_1k10L62cK87MuZfqik3D1nWruLu4MhIpzfOwIC7rhaQQ/viewform' },
  { name: "Report Bug", icon: BugIcon, newTab: true, path: 'https://docs.google.com/forms/d/e/1FAIpQLSeFhdugB6onlsQizRby95DA68y_nz_jJ-OwiSndZmin7KGMLw/viewform' },
];
const SidebarContent = ({ onClose, ...rest }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "#191919")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      boxShadow={useColorModeValue(
        "1px 0px 0px 0px #E1E1E1",
        "1px 0px 0px 0px #333"
      )}
      {...rest}
    >
      <Flex
        h="20"
        alignItems="center"
        mx="17px"
        mb="40px"
        justifyContent="space-between"
      >
        <Image
          width={180}
          height={80}
          alt="logo"
          src={useColorModeValue(
            "/icons/light_betgyfi_sm_icon.svg",
            "/icons/dark_betgyfi_sm_logo.svg"
          )}
        />
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItemsUp.map((link) => (
        <NavItem
          key={link.name}
          icon={link.icon}
          path={link.path}
          newTab={link.newTab}
          _hover={{ bg: useColorModeValue("#F5F5F7", "#202020") }}
          fontSize="11px"
          fontWeight="400"
          letterSpacing="1px"
          color={useColorModeValue("#16171B", "#FFF")}
        >
          {link.name}
        </NavItem>
      ))}
      <hr style={{ marginBottom: "15px", marginTop: "15px" }} />
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
                _hover={{ bg: useColorModeValue("#F5F5F7", "#202020") }}
                fontSize="11px"
                fontWeight="400"
                letterSpacing="1px"
                color={useColorModeValue("#16171B", "#FFF")}
              >
                {link.name}
              </NavItem>
            </>
          )}
        </>
      ))}
      <div style={{ position: "absolute", bottom: "10px", width: "100%" }}>
        {bottomMenu.map((link) => (
          <NavItem
            key={link.name}
            icon={link.icon}
            path={link.path}
            _hover={{ bg: useColorModeValue("#F5F5F7", "#202020") }}
            newTab={link.newTab}
            fontSize="11px"
            fontWeight="400"
            letterSpacing="1px"
            color={useColorModeValue("#16171B", "#FFF")}

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
            justifyContent={"center"}
            w={"100%"}
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
              fontSize={"12px"}
              fontStyle={"normal"}
              fontWeight={"400"}
              letterSpacing={"1px"}
              color={useColorModeValue("#16171B", "#FFF")}
            >
              POWRED BY SOLVENDO
            </Text>

          </Box>

          <Box onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon color={"white"}/>}
          </Box>
        </Box>

      </div>
    </Box>
  );
};

export default SidebarContent;

const NavItem = ({ icon, path, newTab, children, ...rest }) => {
  return (
    <Link
      href={path}
      target={newTab ? '_blank' : null}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
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
