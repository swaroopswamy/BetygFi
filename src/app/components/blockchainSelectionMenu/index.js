"use client";
import {
    Box,
    Checkbox,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
    Tooltip,
    useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { blockchainTypeChangedReducer } from "@/redux/dashboard_data/dataSlice";
import { fetchBlockchainListData } from "@/redux/app_data/dataSlice";
import React, { useEffect } from "react";

const BlockchainSelectionMenu = () => {
    const dispatch = useDispatch();
  
    const blockchainListData = useSelector(
      (state) => state?.appData?.BlockchainListData
    );
    const BlockchainTypeHandler = (type) => {
      dispatch(blockchainTypeChangedReducer(type));
    };
    const blockchainSelected = useSelector(
      (state) => state?.dashboardTableData?.blockchainType
    );
  
    useEffect(() => {
      dispatch(fetchBlockchainListData());
    }, []);
  
    return (
      <>
        <Box
          className="center"
          display={{base: "none", md: "flex"}}
        >
          {blockchainListData?.data?.map((item, i) => (
            <>
              {i < 4 &&
                <Tooltip key={i} label={item.name}>
                  <Box
                    className="center"
                    cursor={"pointer"}
                    bg={"#D9D9D9"}
                    border={blockchainSelected.includes(item.id) ? "2px solid #55A406" : "0px"}
                    boxShadow={"3px 0px 10px 3px rgba(0, 0, 0, 0.2)"}
                    borderRadius="50%"
                    w="24px"
                    h="24px"
                    ml={i !== 0 && '-7px'}
                    onClick={() => {
                      BlockchainTypeHandler(item.id);
                    }}
                  >
                    <Image
                      style={{ borderRadius: "50%" }}
                      width={24}
                      height={24}
                      src={item.logoUrl}
                      alt={`${item.id}_icon`}
                    ></Image>
                  </Box>
                </Tooltip>
              }
            </>
          ))}
  
          <Menu closeOnSelect={false}>
            <MenuButton
              bg={"#D9D9D9"}
              borderRadius="50%"
              w="24px"
              h="24px"
              transition='all 0.2s'
              border="0px"
              ml='-10px'
              _focus={{ boxShadow: 'outline' }}
              color="#000"
              textStyle='h4'
            >
              +{blockchainListData?.isSuccess && blockchainListData?.data?.length - 4}
            </MenuButton>
            <MenuList
              boxShadow={"0px 5px 4px 0px rgba(0, 0, 0, 0.10)"}
              bgColor={useColorModeValue("#FFF", "#191919")}
            >
              {blockchainListData?.isSuccess && blockchainListData?.data?.map((item, i) => {
                return (
                  <>
                    {i >= 4 &&
                      <MenuItem key={i}
                        bgColor={useColorModeValue("#FFF", "#191919")}
                        _hover={{ bg: useColorModeValue("#F5F5F7", "#202020") }}
                      >
                        <Checkbox colorScheme='green'
                          value={item.name}
                          checked={blockchainSelected.includes(item.id)} onChange={(e) => {
                            BlockchainTypeHandler(item.id);
                          }}>
                          <Box
                            display={"flex"}
                            cursor={"pointer"}
                            alignItems={"center"}
                            justifyContent={"center"}
                          >
                            <Image
                              width={24}
                              height={24}
                              src={item.logoUrl}
                              alt={`${item.id}_icon`}
  
                              style={{ marginRight: "20px", marginLeft: "14px" }}
                            ></Image>
                            <Text
                              fontSize={"12px"}
                              fontWeight={"400"}
                              lineHeight={"20px"}
                              letterSpacing={"1px"}
                              color={useColorModeValue("#16171B", "#FFF")}
                            >
                              {item.name}
                            </Text>
                          </Box>
                        </Checkbox>
                      </MenuItem>
                    }
                  </>)
              })}
            </MenuList>
          </Menu>
        </Box>
  
        <Box
          display={{base: "flex", md: "none"}}
          justifyContent={"start"}
          alignItems={"center"}
          pl={"18px"}
          gap={"7px"}
        >
          {blockchainListData?.data?.map((item, i) => (
            <Box
              className="center"
              key={i}
              cursor={"pointer"}
              bg={"#D9D9D9"}
              border={blockchainSelected.includes(item.id) ? "3px solid #55A406" : "0px"}
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
    )
}

export default BlockchainSelectionMenu;