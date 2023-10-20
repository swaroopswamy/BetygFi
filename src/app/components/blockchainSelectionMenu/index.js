"use client";
import dynamic from "next/dynamic";
// const MenuList = dynamic(import('@chakra-ui/react').then(mod => mod.MenuList), { ssr: false }) // disable ssr
import {
  Avatar,
  Box,
  Checkbox,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Tooltip,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { blockchainTypeChangedReducer } from "@/redux/dashboard_data/dataSlice";
import { fetchBlockchainListData } from "@/redux/app_data/dataSlice";
import React, { useEffect } from "react";

const BlockchainSelectionMenu = ({ chains }) => {
  const dispatch = useDispatch();
  const { colorMode } = useColorMode();

  const blockchainListData = useSelector(
    (state) => state?.appData?.BlockchainListData
  );
  const BlockchainTypeHandler = (type) => {
    dispatch(blockchainTypeChangedReducer(type));
  };
  const blockchainSelected = useSelector(
    (state) => state?.dashboardTableData?.blockchainType
  );

  let blockchains = {
    data: chains ? chains : blockchainListData.data,
    isSuccess: blockchainListData.isSuccess,
  };

  useEffect(() => {
    dispatch(fetchBlockchainListData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Box className="center" display={{ base: "none", md: "flex" }}>
        {blockchains?.data?.map((item, i) => {
          if (i >= 4) return;
          return (
            <Tooltip key={i} label={item.name}>
              <Box
                className="center"
                cursor={"pointer"}
                bg={"#D9D9D9"}
                border={
                  blockchainSelected.includes(item.id)
                    ? "2px solid #55A406"
                    : "0px"
                }
                boxShadow={"3px 0px 10px 3px rgba(0, 0, 0, 0.2)"}
                borderRadius="50%"
                w="24px"
                h="24px"
                ml={i !== 0 && "-7px"}
                onClick={() => {
                  BlockchainTypeHandler(item.id);
                }}
              >
                <Avatar
                  style={{ borderRadius: "50%" }}
                  width={"24px"}
                  height={"24px"}
                  src={item?.logoUrl}
                  alt={item.id ?? "Coin"}
                ></Avatar>
              </Box>
            </Tooltip>
          );
        })}

        {blockchains?.data?.length > 4 && (
          <Menu closeOnSelect={false} suppressHydrationWarning={true}>
            <MenuButton
              bg={"#D9D9D9"}
              borderRadius="50%"
              w="24px"
              h="24px"
              transition="all 0.2s"
              border="0px"
              ml="-10px"
              _focus={{ boxShadow: "outline" }}
              color="#000"
              suppressHydrationWarning={true}
            >
              <Text variant={"extraSmall"}>
                +
                {blockchainListData?.isSuccess && blockchains?.data?.length - 4}
              </Text>
            </MenuButton>
            <MenuList
              boxShadow={"0px 5px 4px 0px rgba(0, 0, 0, 0.10)"}
              bgColor={colorMode === "light" ? "#FFF" : "#191919"}
            >
              {blockchainListData?.isSuccess &&
                blockchains?.data?.map((item, i) => {
                  if (i < 4) return;
                  return (
                    <MenuItem
                      key={i}
                      bgColor={colorMode === "light" ? "#FFF" : "#191919"}
                      _hover={{
                        bg: colorMode === "light" ? "#F5F5F7" : "#202020",
                      }}
                    >
                      <Checkbox
                        colorScheme="green"
                        value={item.name}
                        checked={blockchainSelected.includes(item.id)}
                        onChange={(e) => {
                          BlockchainTypeHandler(item.id);
                        }}
                      >
                        <Box
                          display={"flex"}
                          cursor={"pointer"}
                          alignItems={"center"}
                          justifyContent={"center"}
                        >
                          <Avatar
                            width={"24px"}
                            height={"24px"}
                            src={item.logoUrl}
                            alt={item.id ?? "Coin"}
                            style={{ marginRight: "20px", marginLeft: "14px" }}
                          ></Avatar>
                          <Text
                            fontSize={"12px"}
                            fontWeight={"400"}
                            lineHeight={"20px"}
                            letterSpacing={"1px"}
                            color={colorMode === "light" ? "#16171B" : "#FFF"}
                          >
                            {item.name}
                          </Text>
                        </Box>
                      </Checkbox>
                    </MenuItem>
                  );
                })}
            </MenuList>
          </Menu>
        )}
      </Box>

      <Box
        display={{ base: "flex", md: "none" }}
        justifyContent={"start"}
        alignItems={"center"}
        pl={"18px"}
        gap={"7px"}
      >
        {blockchains?.data?.map((item, i) => (
          <Box
            className="center"
            key={i}
            cursor={"pointer"}
            bg={"#D9D9D9"}
            border={
              blockchainSelected.includes(item.id) ? "3px solid #55A406" : "0px"
            }
            borderRadius="50%"
            w="40px"
            h="40px"
            onClick={() => {
              BlockchainTypeHandler(item.id);
            }}
          >
            <Image
              style={{ borderRadius: "50%" }}
              width={40}
              height={40}
              src={item.logoUrl}
              alt={`${item.id}_icon`}
            ></Image>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default BlockchainSelectionMenu;
