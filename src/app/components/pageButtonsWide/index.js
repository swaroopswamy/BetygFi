import { Text, Box, useColorMode, Input, Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import LastUpdate from "../lastUpdate";
import { ArrowLeftIcon, ArrowRightIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import React from "react";
const PageButtonsWide = ({ page, totalPages = 0, pageChangeHandler, time, ...rest }) => {
  const { colorMode } = useColorMode();

  return (
    <>
      {totalPages !== 0 && (
        <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} {...rest}>
          <LastUpdate
            time={time}
          />

          <Box display={"flex"} justifyContent={"space-evenly"} alignItems={"center"} gap={"8px"}>
            <RoundButton opacity={"0.4"}>
              <ArrowLeftIcon
                boxSize={"12px"}
              />
            </RoundButton>

            <RoundButton opacity={"0.4"}>
              <ChevronLeftIcon />
            </RoundButton>

            <Box layerStyle={"center"} gap={"5px"}>
              <Input
                p={"8px 15px"}
                borderRadius={"0px"}
                borderColor={colorMode === 'light' ? "#E8E8E8" : "#454853"}
                background={colorMode === 'light' ? "#F0F0F5" : "#191919"}
                width={"40px"}
                height={"30px"}
              ></Input>

              <Text variant={"h3"}>
                of {totalPages} pages
              </Text>
            </Box>

            <RoundButton opacity={"1"}>
              <ChevronRightIcon />
            </RoundButton>

            <RoundButton opacity={"1"}>
              <ArrowRightIcon
                boxSize={"12px"}
              />
            </RoundButton>
          </Box>

          <Box layerStyle={"center"} gap={"8px"}>
            <Text variant={"h3"}> Show </Text>

            <Menu>
              <MenuButton as={Button} variant={"menu"}>
                  <Box layerStyle={"spaceBetween"} >
                    10 / Page
                    <ChevronDownIcon />
                  </Box>
              </MenuButton>
              <MenuList>
                <MenuItem> <Text variant={"h3"}> 10 / Page </Text></MenuItem>
                <MenuItem> <Text variant={"h3"}> 20 / Page </Text></MenuItem>
                <MenuItem> <Text variant={"h3"}> 30 / Page </Text></MenuItem>
              </MenuList>
            </Menu>
          </Box>

        </Box>
      )}
    </>
  );
};

export default PageButtonsWide;

const RoundButton = ( {children, ...rest} ) => {
  const { colorMode } = useColorMode();

  return (
    <Box
        layerStyle={"center"}
        bg={colorMode === 'light' ? '#FFFFFF' : '#191919'}
        minW={"32px"}
        minH={"32px"}
        borderRadius={"50%"}
        border={colorMode === 'light' ? "1px solid rgba(241, 241, 241, 1)" : "1px solid rgba(51, 51, 51, 1)"}
        cursor={"pointer"}
        {...rest}
    >
      {children}
    </Box>
  )
}
