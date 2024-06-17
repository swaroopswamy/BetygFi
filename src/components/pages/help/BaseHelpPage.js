"use client";
import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Image, Text, useColorMode } from "@chakra-ui/react";
import { BetygFi, DeFi, General, WalletsAndDeFiDashboard } from "./helper";


const BaseHelpPage = () => {
    const { colorMode } = useColorMode();
    return (
        <Box
            display={{ base: "block", md: "none" }}
            _dark={{ background: "#191919" }}
            _light={{ background: "#F0F0F5" }}
            padding={"0px"}
            maxW="100%"
        >
            <Box
                style={{ mixBlendMode: "luminosity" }}
                _light={{
                    bg: "#E8E8E8"
                }}
                _dark={{
                    bg: "#222"
                }}
            >
                <Box layerStyle={"flexSpaceBetween"}>
                    <Box p={"52px 0px 62px 19px"}>
                        <Text variant={"contentHeading2"}>Help</Text>
                    </Box>
                    <Box p={"6px 8px 28px 0px"}>
                        <Image
                            src={colorMode === "light" ?
                                "/images/bg-logo-dark.svg":
                                "/images/bg-logo.svg" 
                            }
                            // unoptimized="true"
                            // priority="true"
                            alt="bg-logo"
                            width={102}
                            height={100}
                            flexShrink={0}
                            opacity={"0.8"}
                        />
                    </Box>
                </Box>
            </Box>

            <Text variant={"contentHeading"} padding={"24px 0px 3px 15px"} lineHeight={"46px"}>
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
                                                <Text variant={"contentHeading4"}>
                                                    {item.heading}
                                                </Text>
                                            </Box>
                                            {isExpanded ? (
                                                <Image
                                                    // unoptimized="true"
                                                    // priority="true"
                                                    src={
                                                        colorMode === "light"
                                                            ? "/images/ellipse-light-up.png"
                                                            : "/images/ellipse-dark-up.png"
                                                    }
                                                    alt=""
                                                />
                                            ) : (
                                                <Image
                                                    // unoptimized="true"
                                                    // priority="true"
                                                    src={
                                                        colorMode === "light"
                                                            ? "/images/ellipse-light-down.png"
                                                            : "/images/ellipse-dark-down.png"
                                                    }
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

            <Text variant={"contentHeading"} padding={"24px 0px 3px 15px"} lineHeight={"46px"}>
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
                                                <Text variant={"contentHeading4"}>
                                                    {item.heading}
                                                </Text>
                                            </Box>
                                            {isExpanded ? (
                                                <Image
                                                    // unoptimized="true"
                                                    // priority="true"
                                                    src={
                                                        colorMode === "light"
                                                            ? "/images/ellipse-light-up.png"
                                                            : "/images/ellipse-dark-up.png"
                                                    }
                                                    alt=""
                                                />
                                            ) : (
                                                <Image
                                                    // unoptimized="true"
                                                    // priority="true"
                                                    src={
                                                        colorMode === "light"
                                                            ? "/images/ellipse-light-down.png"
                                                            : "/images/ellipse-dark-down.png"
                                                    }
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

            <Text variant={"contentHeading"} padding={"24px 0px 3px 15px"} lineHeight={"46px"}>
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
                                                <Text variant={"contentHeading4"}>
                                                    {item.heading}
                                                </Text>
                                            </Box>
                                            {isExpanded ? (
                                                <Image
                                                    // unoptimized="true"
                                                    // priority="true"
                                                    src={
                                                        colorMode === "light"
                                                            ? "/images/ellipse-light-up.png"
                                                            : "/images/ellipse-dark-up.png"
                                                    }
                                                    alt=""
                                                />
                                            ) : (
                                                <Image
                                                    // unoptimized="true"
                                                    // priority="true"
                                                    src={
                                                        colorMode === "light"
                                                            ? "/images/ellipse-light-down.png"
                                                            : "/images/ellipse-dark-down.png"
                                                    }
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

            <Text variant={"contentHeading"} padding={"24px 0px 3px 15px"} lineHeight={"46px"}>
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
                                                <Text variant={"contentHeading4"}>
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
                                                    // unoptimized="true"
                                                    // priority="true"
                                                    alt=""
                                                />
                                            ) : (
                                                <Image
                                                    src={
                                                        colorMode === "light"
                                                            ? "/images/ellipse-light-down.png"
                                                            : "/images/ellipse-dark-down.png"
                                                    }
                                                    // unoptimized="true"
                                                    // priority="true"
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
    );
};

export default BaseHelpPage;