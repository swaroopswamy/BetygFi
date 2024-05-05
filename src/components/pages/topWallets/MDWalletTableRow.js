import { Box, Flex, Td, Text, Tr, useColorMode, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import millify from "millify";

const MDWalletTableRow = ({ user, totalTokens, totalProtocols, slideToLeftFeature }) => {
    const [clicked, setClick] = useState(false);
    const { colorMode } = useColorMode();
    const router = useRouter();

    const getColorModeStyling = {
        borderColor: useColorModeValue("#E8E8E8", "#333333"),
        background: useColorModeValue("#F5F5F7", "#202020")
    };

    const getTotalTokenData = () => {
        if (slideToLeftFeature) {
            return { flexDir: "column" };
        } else {
            return {};
        }
    };

    return (
        <Tr
            cursor={"pointer"}
            bgColor={
                clicked
                    ? colorMode === "light"
                        ? "#F5F5F7"
                        : "#191919"
                    : colorMode === "light"
                        ? "#FFFFFF"
                        : "#202020"
            }
            onClick={() => {
                setClick(!clicked);
                router.push(`/top-wallets/${user}`);
            }}
            borderBottom={"1px"}
            borderColor={useColorModeValue("#DFDFDF", "#313131")}
            borderRadius={"2px"}
        >
            <Td {...getColorModeStyling}>
                <Flex>
                    <Box>
                        <Text variant={"h3"} fontWeight={600}>
                            {user?.split("").join("").substring(0, 8) +
                                "....." +
                                user?.slice(-5)}
                        </Text>
                    </Box>
                </Flex>
            </Td>

            <Td {...getColorModeStyling}>
                <Flex {...getTotalTokenData()}>
                    {totalTokens.length > 0 ?
                        totalTokens.map((item, i) => {
                            if (i < 3) {
                                return (
                                    <Box
                                        key={i}
                                        padding={"7px 9px"}
                                        minw="150px"
                                        borderRadius={"2px"}
                                        mr={"5px"}
                                        display={"flex"}
                                        justifyContent={slideToLeftFeature ? "flex-start" : "center"}
                                        alignItems={"center"}
                                        gap={"3px"}
                                    >
                                        <Image
                                            width={20}
                                            height={20}
                                            style={{ borderRadius: "50%" }}
                                            src={item.logo_url}
                                            alt=""
                                        />
                                        <Text
                                            variant={"h3"}
                                            ml={"10px"}
                                            mt={"1px"}
                                            lineHeight={"10px"}
                                        >
                                            $&nbsp;{millify(item.usd_value, {
                                                precision: 2,
                                                locales: "en-US",
                                            })}
                                        </Text>
                                    </Box>
                                );
                            }
                        })
                        :
                        <p>&nbsp;&nbsp;&nbsp;---</p>
                    }
                </Flex>
            </Td>

            <Td {...getColorModeStyling}>
                <Flex>
                    <Box width={"100vw"}>
                        <Text variant={"h3"}>{totalProtocols}</Text>
                    </Box>
                </Flex>
            </Td>
        </Tr>
    );
};

export default MDWalletTableRow;