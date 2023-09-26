"use client"
import { Box, Container, Image, useColorModeValue, Text, Tab, TabList, TabPanels, Tabs, TabPanel, useColorMode } from "@chakra-ui/react";
import Terms from "./terms";
import Privacy from "./privacy";
import { useRouter, useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import React, { useCallback, useEffect, useState } from "react";

const Legal = () => {
  const searchParam = useSearchParams();
  const { colorMode } = useColorMode();
  const router = useRouter();
  const dispatch = useDispatch();
  const [tabIndex, setTabIndex] = useState(0)


  return (
    <>
      <Container
        display={{ base: "none", md: "block" }}
        maxW={"100%"}
        padding={"0px"}>

        <Box
          width={"100%"}
          height={"175px"}
          flexShrink={0}
          background={useColorModeValue("#E8E8E8", "#131313")}
        >

          <Box display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}>

            <Box padding={"50px 0px 44px 74px"} >
              <Text
                _light={{ color: "#000" }}
                _dark={{ color: "#FFFFFF" }}
                fontSize={"36px"}
                fontWeight={400}
                lineHeight={"46px"}
              >
                Legal
              </Text>
            </Box>

            <Box p={"9px 205px 16px 0px"}>
              <Image src={useColorModeValue("/images/bg-logo.png", "/images/bg-logo-dark.png")} alt="" width={"153.027px"} height={"150px"} flexShrink={0}></Image>
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
                  display={"flex"}
                  h={"35px"}
                  w={{ base: "100%", sm: "100%", midSize: "auto", md: "auto" }}
                  alignItems={"center"}
                  padding={{ base: "12px 6px 12px 6px", md: "13px 19px 12px 12px" }}
                  bgColor={tabIndex === 0 ? colorMode === 'light' ? ("#202020") : ("#FFFFFF") : colorMode === 'light' ? ("#F0F0F5") : ("#202020")}
                >
                  <Text
                    fontSize={{ base: "10px", md: "14px" }}
                    fontWeight={tabIndex === 0 ? "600" : "400"}
                    color={tabIndex === 0 ? colorMode === 'light' ? ("#FFFFFF") : ("#000000") : colorMode === 'light' ? ("#000000") : ("#FFFFFF")}
                    mr={{ base: "10px", md: "44px" }}
                    lineHeight={"10px"}
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
                  h={"35px"}
                  display={"flex"}
                  alignItems={"center"}
                  padding={{ base: "12px 6px 12px 6px", md: "13px 19px 12px 15x" }}
                  bgColor={tabIndex === 1 ?
                    (colorMode === 'light' ? "#202020" : "#FFFFFF") :
                    (colorMode === 'light' ? "#F0F0F5" : "#202020")
                  }
                >
                  <Text
                    fontSize={{ base: "10px", md: "14px" }}
                    color={tabIndex === 1 ?
                      (colorMode === 'light' ? "#FFFFFF" : "#202020") :
                      (colorMode === 'light' ? "#202020" : "#FFFFFF")
                    }
                    fontWeight={tabIndex === 1 ? "700" : "400"}
                    mr={{ base: "10px", md: "44px" }}
                    lineHeight={"10px"}
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
      </Container>

      {/* Mobile Optimization Part */}
      <Container
        display={{ base: "block", md: "none" }}
        maxW={"100%"}
        padding={"0px"}>
        <Box
          width={"100%"}
          height={"134px"}
          flexShrink={0}
          background={useColorModeValue("#E8E8E8", "#131313")}>
          <Box
            w={"100%"}
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}>
            <Box padding={"21px 0px 58px 20px"} >
              <Text
                _light={{ color: "#16171B" }}
                _dark={{ color: "#FFFFFF" }}
                fontSize={"24px"}
                fontWeight={600}
                lineHeight={"20px"}
                letterSpacing={"2.4px"}
              >
                Legal
              </Text>
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
                  display={"flex"}
                  h={"35px"}
                  w={{ base: "100%", sm: "100%", midSize: "auto", md: "auto" }}
                  alignItems={"center"}
                  padding={{ base: "12px 6px 12px 6px", md: "13px 19px 12px 12px" }}
                  bgColor={tabIndex === 0 ? colorMode === 'light' ? ("#202020") : ("#FFFFFF") : colorMode === 'light' ? ("#F0F0F5") : ("#202020")}
                >
                  <Text
                    fontSize={{ base: "10px", md: "14px" }}
                    fontWeight={tabIndex === 0 ? "600" : "400"}
                    color={tabIndex === 0 ? colorMode === 'light' ? ("#FFFFFF") : ("#000000") : colorMode === 'light' ? ("#000000") : ("#FFFFFF")}
                    mr={{ base: "10px", md: "44px" }}
                    lineHeight={"10px"}
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
                  h={"35px"}
                  display={"flex"}
                  alignItems={"center"}
                  padding={{ base: "12px 6px 12px 6px", md: "13px 19px 12px 15x" }}
                  bgColor={tabIndex === 1 ?
                    (colorMode === 'light' ? "#202020" : "#FFFFFF") :
                    (colorMode === 'light' ? "#F0F0F5" : "#202020")
                  }
                >
                  <Text
                    fontSize={{ base: "10px", md: "14px" }}
                    color={tabIndex === 1 ?
                      (colorMode === 'light' ? "#FFFFFF" : "#202020") :
                      (colorMode === 'light' ? "#202020" : "#FFFFFF")
                    }
                    fontWeight={tabIndex === 1 ? "700" : "400"}
                    mr={{ base: "10px", md: "44px" }}
                    lineHeight={"10px"}
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
      </Container>
    </>
  );
}
export default Legal;