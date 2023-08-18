"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import DefiTable from "../defi_hot_contract/DefiTable";
import { Box, Text, Flex, Icon, Image, useColorModeValue, Tabs, TabList, Tab, TabPanels, TabPanel, useColorMode } from "@chakra-ui/react";
import BackIconWhite from '../../../../public/icons/backIconWhite.svg';
import BackIconBlack from '../../../../public/icons/backIconBlack.svg';

function Defi_Hot_Contracts () {
  const [tabIndex, setTabIndex] = useState(0);
  const { colorMode } = useColorMode();
  const router = useRouter();

  const thread = ["Blockchain | Function Name","No of Users","No of Calls","Fee Consumed"];
  const tableData = [
    ["AAVE V2 ","406","3457","USD 65.930000","/icons/aave_logo.svg"],
    ["AAVE V3 ","567","8765","USD 65.930000","/icons/aave_logo.svg"],
    ["Compound","234","76346","USD 35.700000","/icons/compound_logo.svg"],
    ["JustLend","5634","567","USD 0.023387","/icons/justlend_logo.svg"],
    ["Venus","12","2376","USD 5.100000","/icons/venus_logo.svg"],
    ["Morpho Aave","345","8456","USD 0.001782","/icons/morphoaave_logo.svg"],
    ["Compound V3","876","8734","USD 35.700000","/icons/compoundv3.svg"],
    ["Radiant V2","3456","436","USD 0.313472","/icons/radiantv2_logo.svg"],
    ["FluidTokens","123","864","USD 45.90988",""],
    ["Trader Joe Lend","876","963","USD 45.90988","/icons/traderjoelend_logo.svg"],
];
 
  return (
    <Box
       padding={"20px 30px"}  
       bgColor={useColorModeValue("#F0F0F5","#191919")}
       borderColor={useColorModeValue("#F0F0F5","#191919")}
    >
      <Flex
          cursor={"pointer"}
          ml={"5px"}
          mb={"20px"}
          align={"center"}
          onClick={() => {
              router.push(`/defi_dashboard/`)
          }}
      >
          <Icon
              w="24px"
              h="24px"
              as={colorMode === "light" ? BackIconWhite : BackIconBlack}
              mr="6px"

          />
          <Text
              fontSize={"10px"}
              fontStyle={"normal"}
              fontWeight={"400"}
              lineHeight={"20px"}
              letterSpacing={"1px"}
              textTransform={"uppercase"}
              ml={"5px"}
          >BACK</Text>
      </Flex>

      <Tabs onChange={(index) => setTabIndex(index)} >
          <TabList
              marginLeft={"30px"}
              marginRight={"30px"}
              gap={"44px"}
              _light={{borderColor: "#CECECE"}}
              _dark={{borderColor: "#2F2F2F"}}
          >
              <Tab
                  padding="0"
                  _selected={colorMode === 'light' ? {borderColor: "#000000"} : {borderColor: "#FFFFFF"}}
              >
                  <Box
                      display={"flex"}
                      alignItems={"center"}
                      padding={"13px 5px"}
                  >
                      <Text
                          fontSize={"10px"}
                          fontWeight={tabIndex === 0 ? "700" : "400"}
                          color={tabIndex === 0 ? colorMode === 'light' ? ("#000000") : ("#FFFFFF") : colorMode === 'light' ? ("#000000") : ("#FFFFFF")}
                          textTransform={"uppercase"}
                          letterSpacing={"1px"}
                      >
                          Defi Hot Contract
                      </Text>
                  </Box>
              </Tab>
              <Tab
                  padding="0"
                  _selected={colorMode === 'light' ? {borderColor: "#000000"} : {borderColor: "#FFFFFF"}}
              >
                  <Box
                      display={"flex"}
                      alignItems={"center"}
                      padding={"13px 5px"}
                  >
                      <Text
                          fontSize={"10px"}
                          color={tabIndex === 0 ? colorMode === 'light' ? ("#000000") : ("#FFFFFF") : colorMode === 'light' ? ("#000000") : ("#FFFFFF")}
                          fontWeight={tabIndex === 1 ? "700" : "400"}
                          textTransform={"uppercase"}
                          letterSpacing={"1px"}
                      >
                          Defi Functions/Methods
                      </Text>
                  </Box>
              </Tab>
          </TabList>

          <Box
              bgColor={useColorModeValue("#F0F0F5", "#191919")}
              padding={"32px"}
          >
              <TabPanels>

                  <TabPanel
                      p="0px"
                  >
                    <DefiTable
                        tableName={"Defi Hot Contract"}
                        thread={thread}
                        tableData={tableData}
                    />
                  </TabPanel>

                  <TabPanel
                      p="0px"
                  >
                    <DefiTable
                        tableName={"Defi Functions/Methods"}
                        thread={thread}
                        tableData={tableData}
                    />
                  </TabPanel>

              </TabPanels>
          </Box>
      </Tabs>

    </Box>
  )
};
export default  Defi_Hot_Contracts;