"use client";
import {
  Box,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  useColorModeValue,
  Image,
  useColorMode,
} from "@chakra-ui/react";
import { General, BetygFi, WalletsAndDeFiDashboard, DeFi, AccordionPoints } from "../components/pages/help/helper";

const Help = () => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Box display={{ base: "none", md: "block" }} padding={"0px"} maxW="100%">
        <Box
          style={{ mixBlendMode: "luminosity" }}
          background={useColorModeValue("#E8E8E8", "#222")}
        >
          <Box layerStyle={"flexSpaceBetween"}>
            <Box padding={"90px 0px 80px 60px"}>
              <Text variant={"bigHeading2"}>Help</Text>
            </Box>
            <Box paddingRight={"100px"}>
              <Image
                src={useColorModeValue(
                  "/images/bg-logo.png",
                  "/images/bg-logo-dark.png"
                )}
                alt=""
              ></Image>
            </Box>
          </Box>
        </Box>

        <Text variant={"contentHeading3"} padding={"10px 0px 10px 75px"}>
          General
        </Text>
        <Accordion allowToggle padding={"10px 80px 80px 60px"}>
          {General.map((item, i) => {
            return (
              <AccordionItem key={i}>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box
                          flex="1"
                          textAlign="left"
                          padding={"10px 0px 10px 0px"}
                        >
                          <Text variant={"contentHeading"}>{item.heading}</Text>
                        </Box>
                        {isExpanded ? (
                          <Image
                            src={
                              colorMode === "light"
                                ? "/images/ellipse-light-up.png"
                                : "/images/ellipse-dark-up.png"
                            }
                            w={"24px"}
                            h={"24px"}
                            alt=""
                          />
                        ) : (
                          <Image
                            src={
                              colorMode === "light"
                                ? "/images/ellipse-light-down.png"
                                : "/images/ellipse-dark-down.png"
                            }
                            w={"24px"}
                            h={"24px"}
                            alt=""
                          />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel padding={"10px 50px 20px 20px"}>
                      {item.point1 ?
                        (
                          <Box>
                            <Text variant={"content"}>{item.content}</Text>
                            <Box paddingLeft={"40px"}>
                              <ul>
                                <li>
                                  {" "}
                                  <Text variant={"content"}>{item.point1}</Text>
                                  {" "}
                                </li>
                                <li>
                                  {" "}
                                  <Text variant={"content"}>{item.point2}</Text>
                                  {" "}
                                </li>
                              </ul>
                            </Box>
                          </Box>
                        ) : (
                          <Text variant={"content"}>{item.content}</Text>
                        )}
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            );
          })}
        </Accordion>

        <Text variant={"contentHeading3"} padding={"10px 0px 10px 75px"}>
          BetygFi
        </Text>
        <Accordion allowToggle padding={"10px 80px 80px 60px"}>
          {BetygFi.map((item, i) => {
            return (
              <AccordionItem key={i}>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box
                          flex="1"
                          textAlign="left"
                          padding={"10px 0px 10px 0px"}
                        >
                          <Text variant={"contentHeading"}>{item.heading}</Text>
                        </Box>
                        {isExpanded ? (
                          <Image
                            src={
                              colorMode === "light"
                                ? "/images/ellipse-light-up.png"
                                : "/images/ellipse-dark-up.png"
                            }
                            w={"24px"}
                            h={"24px"}
                            alt=""
                          />
                        ) : (
                          <Image
                            src={
                              colorMode === "light"
                                ? "/images/ellipse-light-down.png"
                                : "/images/ellipse-dark-down.png"
                            }
                            w={"24px"}
                            h={"24px"}
                            alt=""
                          />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel padding={"10px 50px 20px 20px"}>
                      <Text variant={"content"}>{item.content}
                      </Text>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            );
          })}
        </Accordion>

        <Text variant={"contentHeading3"} padding={"10px 0px 10px 75px"}>
          Wallets and DeFi Dashboard
        </Text>
        <Accordion allowToggle padding={"10px 80px 80px 60px"}>
          {WalletsAndDeFiDashboard.map((item, i) => {
            return (
              <AccordionItem key={i}>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box
                          flex="1"
                          textAlign="left"
                          padding={"10px 0px 10px 0px"}
                        >
                          <Text variant={"contentHeading"}>{item.heading}</Text>
                        </Box>
                        {isExpanded ? (
                          <Image
                            src={
                              colorMode === "light"
                                ? "/images/ellipse-light-up.png"
                                : "/images/ellipse-dark-up.png"
                            }
                            w={"24px"}
                            h={"24px"}
                            alt=""
                          />
                        ) : (
                          <Image
                            src={
                              colorMode === "light"
                                ? "/images/ellipse-light-down.png"
                                : "/images/ellipse-dark-down.png"
                            }
                            w={"24px"}
                            h={"24px"}
                            alt=""
                          />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel padding={"10px 50px 20px 20px"}>
                      {item.point1 ?
                        (
                          <Box>
                            <Text variant={"content"}>{item.content}</Text>
                            <Box paddingLeft={"40px"}>
                              <ul>
                                <li>
                                  {" "}
                                  <Text variant={"content"}>{item.point1}</Text>
                                  {" "}
                                </li>
                                <li>
                                  {" "}
                                  <Text variant={"content"}>{item.point2}</Text>
                                  {" "}
                                </li>
                                <li>
                                  {" "}
                                  <Text variant={"content"}>{item.point3}</Text>
                                  {" "}
                                </li>
                                <li>
                                  {" "}
                                  <Text variant={"content"}>{item.point4}</Text>
                                  {" "}
                                </li>
                                <li>
                                  {" "}
                                  <Text variant={"content"}>{item.point5}</Text>
                                  {" "}
                                </li>
                              </ul>
                            </Box>
                          </Box>
                        ) : (
                          <Text variant={"content"}>{item.content}</Text>
                        )}
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            );
          })}
        </Accordion>

        <Text variant={"contentHeading3"} padding={"10px 0px 10px 75px"}>
          DeFi
        </Text>
        <Accordion allowToggle padding={"10px 80px 80px 60px"}>
          {DeFi.map((item, i) => {
            return (
              <AccordionItem key={i}>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box
                          flex="1"
                          textAlign="left"
                          padding={"10px 0px 10px 0px"}
                        >
                          <Text variant={"contentHeading"}>{item.heading}</Text>
                        </Box>
                        {isExpanded ? (
                          <Image
                            src={
                              colorMode === "light"
                                ? "/images/ellipse-light-up.png"
                                : "/images/ellipse-dark-up.png"
                            }
                            w={"24px"}
                            h={"24px"}
                            alt=""
                          />
                        ) : (
                          <Image
                            src={
                              colorMode === "light"
                                ? "/images/ellipse-light-down.png"
                                : "/images/ellipse-dark-down.png"
                            }
                            w={"24px"}
                            h={"24px"}
                            alt=""
                          />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel padding={"10px 50px 20px 20px"}>
                      {item.point1 ?
                        (
                          <Box>
                            <Text variant={"content"}>{item.content}</Text>
                            <Box paddingLeft={"40px"}>
                              <ul>
                                <li>
                                  {" "}
                                  <Text variant={"content"}>{item.point1}</Text>
                                  {" "}
                                </li>
                                <li>
                                  {" "}
                                  <Text variant={"content"}>{item.point2}</Text>
                                  {" "}
                                </li>
                                <li>
                                  {" "}
                                  <Text variant={"content"}>{item.point3}</Text>
                                  {" "}
                                </li>
                                <li>
                                  {" "}
                                  <Text variant={"content"}>{item.point4}</Text>
                                  {" "}
                                </li>
                              </ul>
                            </Box>
                          </Box>
                        ) : (
                          <Text variant={"content"}>{item.content}</Text>
                        )}
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            );
          })}
        </Accordion>
      </Box>

      {/* Mobile Optimization Part */}
      <Box
        display={{ base: "block", md: "none" }}
        _dark={{ background: "#191919" }}
        _light={{ background: "#F0F0F5" }}
        padding={"0px"}
        maxW="100%"
      >
        <Box
          style={{ mixBlendMode: "luminosity" }}
          background={useColorModeValue("#E8E8E8", "#222")}
        >
          <Box layerStyle={"flexSpaceBetween"}>
            <Box p={"52px 0px 62px 19px"}>
              <Text variant={"contentHeading2"}>Help</Text>
            </Box>
            <Box p={"6px 8px 28px 0px"}>
              <Image
                src={useColorModeValue(
                  "/images/bg-logo.png",
                  "/images/bg-logo-dark.png"
                )}
                alt=""
                width={"102.019px"}
                height={"100px"}
                flexShrink={0}
                opacity={"0.8"}
              ></Image>
            </Box>
          </Box>
        </Box>

        <Text variant={"contentHeading3"} padding={"24px 0px 3px 15px"}>
          General
        </Text>
        <Accordion allowToggle>
          {General.map((item, i) => {
            return (
              <AccordionItem key={i}>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          <Text variant={"contentHeading_MobileOptimization"}>
                            {item.heading}
                          </Text>
                        </Box>
                        {isExpanded ? (
                          <Image
                            src={
                              colorMode === "light"
                                ? "/images/ellipse-light-up.png"
                                : "/images/ellipse-dark-up.png"
                            }
                            w={"24px"}
                            h={"24px"}
                            alt=""
                          />
                        ) : (
                          <Image
                            src={
                              colorMode === "light"
                                ? "/images/ellipse-light-down.png"
                                : "/images/ellipse-dark-down.png"
                            }
                            w={"24px"}
                            h={"24px"}
                            alt=""
                          />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel padding={"10px 50px 20px 20px"}>
                      {item.point1 ?
                        (
                          <Box>
                            <Text variant={"content"}>{item.content}</Text>
                            <Box paddingLeft={"20px"}>
                              <ul>
                                <li>
                                  {" "}
                                  <Text variant={"content"}>{item.point1}</Text>
                                  {" "}
                                </li>
                                <li>
                                  {" "}
                                  <Text variant={"content"}>{item.point2}</Text>
                                  {" "}
                                </li>
                              </ul>
                            </Box>
                          </Box>
                        ) : (
                          <Text variant={"content"}>{item.content}</Text>
                        )}
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            );
          })}
        </Accordion>

        <Text variant={"contentHeading3"} padding={"24px 0px 3px 15px"}>
          BetygFi
        </Text>
        <Accordion allowToggle>
          {BetygFi.map((item, i) => {
            return (
              <AccordionItem key={i}>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          <Text variant={"contentHeading_MobileOptimization"}>
                            {item.heading}
                          </Text>
                        </Box>
                        {isExpanded ? (
                          <Image
                            src={
                              colorMode === "light"
                                ? "/images/ellipse-light-up.png"
                                : "/images/ellipse-dark-up.png"
                            }
                            w={"24px"}
                            h={"24px"}
                            alt=""
                          />
                        ) : (
                          <Image
                            src={
                              colorMode === "light"
                                ? "/images/ellipse-light-down.png"
                                : "/images/ellipse-dark-down.png"
                            }
                            w={"24px"}
                            h={"24px"}
                            alt=""
                          />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel padding={"10px 50px 20px 20px"}>
                      <Text variant={"content"}>{item.content}</Text>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            );
          })}
        </Accordion>

        <Text variant={"contentHeading3"} padding={"24px 0px 3px 15px"}>
          Wallets and DeFi Dashboard
        </Text>
        <Accordion allowToggle>
          {WalletsAndDeFiDashboard.map((item, i) => {
            return (
              <AccordionItem key={i}>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          <Text variant={"contentHeading_MobileOptimization"}>
                            {item.heading}
                          </Text>
                        </Box>
                        {isExpanded ? (
                          <Image
                            src={
                              colorMode === "light"
                                ? "/images/ellipse-light-up.png"
                                : "/images/ellipse-dark-up.png"
                            }
                            w={"24px"}
                            h={"24px"}
                            alt=""
                          />
                        ) : (
                          <Image
                            src={
                              colorMode === "light"
                                ? "/images/ellipse-light-down.png"
                                : "/images/ellipse-dark-down.png"
                            }
                            w={"24px"}
                            h={"24px"}
                            alt=""
                          />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel padding={"10px 50px 20px 20px"}>
                      {item.point1 ?
                        (
                          <Box>
                            <Text variant={"content"}>{item.content}</Text>
                            <Box paddingLeft={"20px"}>
                              <ul>
                                <li>
                                  {" "}
                                  <Text variant={"content"}>{item.point1}</Text>
                                  {" "}
                                </li>
                                <li>
                                  {" "}
                                  <Text variant={"content"}>{item.point2}</Text>
                                  {" "}
                                </li>
                                <li>
                                  {" "}
                                  <Text variant={"content"}>{item.point3}</Text>
                                  {" "}
                                </li>
                                <li>
                                  {" "}
                                  <Text variant={"content"}>{item.point4}</Text>
                                  {" "}
                                </li>
                                <li>
                                  {" "}
                                  <Text variant={"content"}>{item.point5}</Text>
                                  {" "}
                                </li>
                              </ul>
                            </Box>
                          </Box>
                        ) : (
                          <Text variant={"content"}>{item.content}</Text>
                        )}
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            );
          })}
        </Accordion>

        <Text variant={"contentHeading3"} padding={"24px 0px 3px 15px"}>
          DeFi
        </Text>
        <Accordion allowToggle paddingBottom={"100px"}>
          {DeFi.map((item, i) => {
            return (
              <AccordionItem key={i}>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          <Text variant={"contentHeading_MobileOptimization"}>
                            {item.heading}
                          </Text>
                        </Box>
                        {isExpanded ? (
                          <Image
                            src={
                              colorMode === "light"
                                ? "/images/ellipse-light-up.png"
                                : "/images/ellipse-dark-up.png"
                            }
                            w={"24px"}
                            h={"24px"}
                            alt=""
                          />
                        ) : (
                          <Image
                            src={
                              colorMode === "light"
                                ? "/images/ellipse-light-down.png"
                                : "/images/ellipse-dark-down.png"
                            }
                            w={"24px"}
                            h={"24px"}
                            alt=""
                          />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel padding={"10px 50px 20px 20px"}>
                      {item.point1 ?
                        (
                          <Box>
                            <Text variant={"content"}>{item.content}</Text>
                            <Box paddingLeft={"20px"}>
                              <ul>
                                <li>
                                  {" "}
                                  <Text variant={"content"}>{item.point1}</Text>
                                  {" "}
                                </li>
                                <li>
                                  {" "}
                                  <Text variant={"content"}>{item.point2}</Text>
                                  {" "}
                                </li>
                                <li>
                                  {" "}
                                  <Text variant={"content"}>{item.point3}</Text>
                                  {" "}
                                </li>
                                <li>
                                  {" "}
                                  <Text variant={"content"}>{item.point4}</Text>
                                  {" "}
                                </li>
                              </ul>
                            </Box>
                          </Box>
                        ) : (
                          <Text variant={"content"}>{item.content}</Text>
                        )}
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            );
          })}
        </Accordion>
      </Box>
    </>
  );
};
export default Help;
