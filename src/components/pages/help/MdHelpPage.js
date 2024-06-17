"use client";
import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Image, Text, useColorMode } from "@chakra-ui/react";
import { BetygFi, DeFi, General, WalletsAndDeFiDashboard } from "./helper";

const MdHelpPage = () => {
    const { colorMode } = useColorMode();
    return (
        <Box display={{ base: "none", md: "block" }} padding={"0px"} maxW="100%">
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
                    <Box padding={"90px 0px 80px 60px"}>
                        <Text variant={"bigHeading"} _light={{ color: "#000" }} _dark={{ color: "#FFF" }}>Help</Text>
                    </Box>
                    <Box paddingRight={"205px"} paddingTop={"30px"}>
                        <Image
                            // unoptimized="true"
                            // priority="true"
                            src={colorMode === "light" ?
                                "/images/bg-logo-dark.svg" :
                                "/images/bg-logo.svg"
                            }
                            alt="bg-logo"
                        />
                    </Box>
                </Box>
            </Box>

            <Text variant={"contentHeading"} padding={"10px 0px 10px 75px"} lineHeight={"46px"}>
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
                                                <Text variant={"contentHeading"} lineHeight={"20px"}>
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
                                                    alt="ellipse"
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
                                                    alt="ellipse"
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

            <Text variant={"contentHeading"} padding={"10px 0px 10px 75px"} lineHeight={"46px"}>
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
                                                <Text variant={"contentHeading"} lineHeight={"20px"}>
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
                                                    alt="ellipse"
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
                                                    alt="ellipse"
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

            <Text variant={"contentHeading"} padding={"10px 0px 10px 75px"} lineHeight={"46px"}>
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
                                                <Text variant={"contentHeading"} lineHeight={"20px"}>
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
                                                    alt="ellipse"
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
                                                    alt="ellipse"
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

            <Text variant={"contentHeading"} padding={"10px 0px 10px 75px"} lineHeight={"46px"}>
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
                                                <Text variant={"contentHeading"} lineHeight={"20px"}>
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
                                                    alt="ellipse"
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
                                                    alt="ellipse"
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
    );
};


export default MdHelpPage;