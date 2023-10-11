"use client"
import { Box, Image, useColorModeValue, Text, Tab, TabList, TabPanels, Tabs, TabPanel, useColorMode } from "@chakra-ui/react";
import Terms from "../../app/components/pages/legal/terms";
import Privacy from "../../app/components/pages/legal/privacy";
import { useRouter, useSearchParams } from "next/navigation";
import { useDispatch } from "react-redux";
import React, { useState } from "react";

const Legal = () => {
  const searchParam = useSearchParams();
  const { colorMode } = useColorMode();
  const router = useRouter();
  const dispatch = useDispatch();
  const [tabIndex, setTabIndex] = useState(0)


  return (
    <>
      <Box
        display={{ base: "none", md: "block" }}
        width={"100%"}
        >
        <Box
          width={"100%"}
          height={"175px"}
          flexShrink={0}
          background={useColorModeValue("#E8E8E8", "#131313")}>
          <Box layerStyle={"flexSpaceBetween"}>
            <Box padding={"50px 0px 44px 74px"} >
              <Text variant={"bigHeading2"}>Legal</Text>
            </Box>
            <Box p={"9px 205px 16px 0px"}>
              <Image src={useColorModeValue("/images/bg-logo.png", "/images/bg-logo-dark.png")} alt="" width={"153.027px"} height={"150px"} flexShrink={0}></Image>
            </Box>
          </Box>
        </Box>
        <Tabs onChange={(index) => setTabIndex(index)}>
            <TabList
              paddingLeft={{ base: "0px", md: "74px" }}
              w={{ base: "100%", sm: "100%", midSize: "auto", md: "auto" }}
              background={useColorModeValue("#E8E8E8", "#131313")}
            >
              <Tab
                padding="0"
                w={{ base: "100%", sm: "100%", midSize: "auto", md: "auto" }}
              >
                <Box
                  layerStyle={"flexCenter"}
                  w={{ base: "100%", sm: "100%", midSize: "auto", md: "auto" }}
                  padding={{ base: "12px 6px 12px 6px", md: "13px 19px 12px 12px" }}
                  bgColor={tabIndex === 0 ? colorMode === 'light' ? ("#202020") : ("#FFFFFF") : colorMode === 'light' ? ("#F0F0F5") : ("#202020")}
                >
                  <Text
                    variant={"TabText"}
                    color={tabIndex === 0 ? colorMode === 'light' ? ("#FFFFFF") : ("#000000") : colorMode === 'light' ? ("#000000") : ("#FFFFFF")}
                  >
                    Terms & Conditions
                  </Text>
                </Box>
              </Tab>
              <Tab
                padding="0"
                w={{ base: "100%", sm: "100%", midSize: "auto", md: "auto" }}
              >
                <Box
                  w={{ base: "100%", sm: "100%", midSize: "auto", md: "auto" }}
                  layerStyle={"flexCenter"}
                  padding={{ base: "12px 6px 12px 6px", md: "13px 19px 12px 15x" }}
                  bgColor={tabIndex === 1 ?
                    (colorMode === 'light' ? "#202020" : "#FFFFFF") :
                    (colorMode === 'light' ? "#F0F0F5" : "#202020")
                  }
                >
                  <Text
                    variant={"TabText"}
                    color={tabIndex === 1 ?
                      (colorMode === 'light' ? "#FFFFFF" : "#202020") :
                      (colorMode === 'light' ? "#202020" : "#FFFFFF")
                    }
                  >
                    Privacy Policy
                  </Text>
                </Box>
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel p="0px">
                <Terms />
              </TabPanel>
              <TabPanel p="0px">
                <Privacy />
              </TabPanel>
            </TabPanels>
          </Tabs>
      </Box>

      {/* Mobile Optimization Part */}
      <Box
        display={{ base: "block", md: "none" }}
        maxW={"100%"}
        padding={"0px"}>
        <Box
          width={"100%"}
          height={"134px"}
          flexShrink={0}
          background={useColorModeValue("#E8E8E8", "#131313")}>
          <Box layerStyle={"flexSpaceBetween"}>
            <Box padding={"21px 0px 58px 20px"} >
              <Text variant={"contentHeading2"}>Legal</Text>
            </Box>
            <Box p={"6px 8px 28px 0px"}>
              <Image src={useColorModeValue("/images/bg-logo.png", "/images/bg-logo-dark.png")} alt="" width={"102.018px"} height={"100px"} flexShrink={0}></Image>
            </Box>
          </Box>
          <Tabs onChange={(index) => setTabIndex(index)}>
            <TabList
              paddingLeft={{ base: "0px", md: "74px" }}
              paddingRight={{ base: "80px", md: "0px" }}
              w={{ base: "100%", sm: "100%", midSize: "auto", md: "auto" }}
              background={useColorModeValue("#E8E8E8", "#131313")}
            >
              <Tab
                padding="0"
                w={{ base: "100%", sm: "100%", midSize: "auto", md: "auto" }}
              >
                <Box
                  layerStyle={"flexCenter"}
                  w={{ base: "100%", sm: "100%", midSize: "auto", md: "auto" }}
                  padding={{ base: "12px 6px 12px 6px", md: "13px 19px 12px 12px" }}
                  bgColor={tabIndex === 0 ? colorMode === 'light' ? ("#202020") : ("#FFFFFF") : colorMode === 'light' ? ("#F0F0F5") : ("#202020")}
                >
                  <Text
                    variant={"TabText"}
                    color={tabIndex === 0 ? colorMode === 'light' ? ("#FFFFFF") : ("#000000") : colorMode === 'light' ? ("#000000") : ("#FFFFFF")}
                  >
                    Terms & Conditions
                  </Text>
                </Box>
              </Tab>
              <Tab
                padding="0"
                w={{ base: "100%", sm: "100%", midSize: "auto", md: "auto" }}
              >
                <Box
                  w={{ base: "100%", sm: "100%", midSize: "auto", md: "auto" }}
                  layerStyle={"flexCenter"}
                  padding={{ base: "12px 6px 12px 6px", md: "13px 19px 12px 15x" }}
                  bgColor={tabIndex === 1 ?
                    (colorMode === 'light' ? "#202020" : "#FFFFFF") :
                    (colorMode === 'light' ? "#F0F0F5" : "#202020")
                  }
                >
                  <Text
                    variant={"TabText"}
                    color={tabIndex === 1 ?
                      (colorMode === 'light' ? "#FFFFFF" : "#202020") :
                      (colorMode === 'light' ? "#202020" : "#FFFFFF")
                    }
                    fontWeight={tabIndex === 1 ? "700" : "400"}
                  >
                    Privacy Policy
                  </Text>
                </Box>
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel p="0px">
                <Terms />
              </TabPanel>
              <TabPanel p="0px">
                <Privacy />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </>
  );
}
export default Legal;