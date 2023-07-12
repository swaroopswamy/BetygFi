import { InfoIcon } from '@chakra-ui/icons'
import {
  Box,
  CloseButton,
  Flex,
  Icon,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
  FiCpu
} from "react-icons/fi";
const LinkItems = [
  { name: "Home", icon: FiHome },
  { name: "Community", icon: FiTrendingUp },
  { name: "Speculation", icon: FiCompass },
];

const bottomMenu = [
  { name: "Help", icon: FiHome },
  { name: "Settings", icon: FiSettings },
  { name: "Suggest Feature", icon: FiCompass },
  { name: "Report Bug", icon: FiCpu },
  { name: "about", icon: InfoIcon }
];
const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
      <div style={{ position: 'absolute', bottom: '10px', width:'100%' }}>
      {bottomMenu.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
        <hr style={{marginBottom:'15px'}} />
        <Text as={"capital"}>POWRED BY SOLVENDO</Text>
      </div>

    </Box>
  );
};

export default SidebarContent;

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Link
      href="#"
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