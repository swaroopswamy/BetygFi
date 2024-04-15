import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Td, Text, Tr, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";
import millify from "millify";
import { useRouter } from "next/navigation";

const SMWalletTableRow = ({ item }) => {
    const router = useRouter();

    return (
        <Tr>
            <Td bgColor={useColorModeValue("#FFFFFF", "#202020")} p="0" colSpan={2} borderBottom="none">
                <Accordion
                    _light={{
                        borderColor: "#DFDFDF",
                    }}
                    _dark={{
                        borderColor: "#DFDFDF",
                    }}
                    borderBottom="none"
                    allowMultiple
                >
                    <AccordionItem>
                        <h2>
                            <AccordionButton
                                _expanded={{
                                    mt: "10px",
                                }}
                            >
                                <Box
                                    w="100%"
                                    layerStyle={
                                        "flexCenter"
                                    }
                                >
                                    <Text
                                        variant={"h3"}
                                        ml="12px"
                                    >
                                        {item?.id
                                            .split("")
                                            .join("")
                                            .substring(
                                                0,
                                                6
                                            ) +
                                            "..." +
                                            item?.id.slice(
                                                -5
                                            )}
                                    </Text>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Box
                                layerStyle={
                                    "flexColumn"
                                }
                            >
                                <Box
                                    layerStyle={
                                        "flexColumn"
                                    }
                                >
                                    <Text
                                        variant={"h6"}
                                        textAlign={
                                            "left"
                                        }
                                        _light={{
                                            color: "#8F8F8F",
                                        }}
                                        _dark={{
                                            color: "#A8ADBD",
                                        }}
                                    >
                                        Total Tokens
                                    </Text>
                                    <Box
                                        mt="10px"
                                        display={
                                            "inline-block"
                                        }
                                    >
                                        {item.stats.top_coins.map(
                                            (
                                                item,
                                                i
                                            ) => {
                                                if (
                                                    i <
                                                    3
                                                ) {
                                                    return (
                                                        <Box
                                                            display={
                                                                "inline-flex"
                                                            }
                                                            key={
                                                                i
                                                            }
                                                            padding={
                                                                "7px 9px"
                                                            }
                                                            pr={
                                                                "2px"
                                                            }
                                                            mt={
                                                                "10px"
                                                            }
                                                            _light={{
                                                                borderColor:
                                                                    "#E8E8E8",
                                                                background:
                                                                    "#F5F5F7",
                                                            }}
                                                            _dark={{
                                                                borderColor:
                                                                    "#E8E8E8",
                                                                background:
                                                                    "#202020",
                                                            }}
                                                            borderRadius={
                                                                "2px"
                                                            }
                                                            mr={
                                                                "5px"
                                                            }
                                                            layerStyle={
                                                                "center"
                                                            }
                                                            gap={
                                                                "3px"
                                                            }
                                                        >
                                                            <Image
                                                                width={14}
                                                                height={14}
                                                                style={{ borderRadius: "50%" }}
                                                                src={item.logo_url}
                                                                // unoptimized="true"
                                                                // priority="true"
                                                                alt=""
                                                            />
                                                            <Text
                                                                variant={
                                                                    "h3"
                                                                }
                                                                lineHeight={
                                                                    "10px"
                                                                }
                                                                ml={
                                                                    "2px"
                                                                }
                                                                mt={
                                                                    "1px"
                                                                }
                                                                layerStyle={
                                                                    "center"
                                                                }
                                                            >
                                                                ${" "}
                                                                {millify(
                                                                    item.usd_value,
                                                                    {
                                                                        precision: 2,
                                                                        locales:
                                                                            "en-US",
                                                                    }
                                                                )}
                                                            </Text>
                                                        </Box>
                                                    );
                                                }
                                            }
                                        )}
                                    </Box>
                                </Box>
                                <Box
                                    mt="10px"
                                    layerStyle={
                                        "flexColumn"
                                    }
                                >
                                    <Text
                                        variant={"h6"}
                                        textAlign={
                                            "left"
                                        }
                                        _light={{
                                            color: "#8F8F8F",
                                        }}
                                        _dark={{
                                            color: "#A8ADBD",
                                        }}
                                    >
                                        Total Protocols
                                    </Text>
                                    <Text
                                        mt="10px"
                                        variant={"h5"}
                                        _light={{
                                            color: "#090909",
                                        }}
                                        _dark={{
                                            color: "#FFFFFF",
                                        }}
                                        textAlign={
                                            "left"
                                        }
                                    >
                                        -NA-
                                    </Text>
                                </Box>
                                <Box
                                    mt="10px"
                                    layerStyle={
                                        "flexColumn"
                                    }
                                >
                                    <Text
                                        variant={"h6"}
                                        textAlign={
                                            "left"
                                        }
                                        _light={{
                                            color: "#8F8F8F",
                                        }}
                                        _dark={{
                                            color: "#A8ADBD",
                                        }}
                                    >
                                        Total NFT
                                        collections
                                    </Text>
                                    <Text
                                        mt="10px"
                                        variant={"h5"}
                                        _light={{
                                            color: "#090909",
                                        }}
                                        _dark={{
                                            color: "#FFFFFF",
                                        }}
                                        textAlign={
                                            "left"
                                        }
                                    >
                                        -NA-
                                    </Text>
                                </Box>
                            </Box>
                            <Box layerStyle={"center"}>
                                <Button
                                    variant="link"
                                    onClick={() => {
                                        router.push(
                                            `/top-wallets/${item?.id}`
                                        );
                                    }}
                                >
                                    Open Dashboard
                                </Button>
                            </Box>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Td>
        </Tr>
    );
};

export default SMWalletTableRow;