import { Box, Text, useColorMode, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import DynamicIcon from "@components/icons/index_new";

const ThemeBox = () => {

    const { colorMode, toggleColorMode } = useColorMode();
    const [isLg] = useMediaQuery("(min-width: 1165px)");
    return (

        isLg ? (
            <Box
                flexShrink={"0"}
                borderRadius={"6px"}
                _light={{
                    bg: "#FFFFFF"
                }}
                _dark={{
                    bg: "#202020"
                }
                }
                boxShadow={"0px 4px 4px 0px rgba(0, 0, 0, 0.05)"}
                my={"20px"}
                pb="20px"
            >
                <Box ml={"25px"} pt={"20px"}>
                    <Text variant={"contentHeading3"} fontWeight={"400"}>
                        Theme
                    </Text>
                </Box>
                <Box layerStyle={"flexCenterSpaceEvenly"} mt={"10px"}>
                    <Box layerStyle={"flexColumn"} cursor={"pointer"}>
                        <Image
                            unoptimized="true"
                            priority="true"
                            src="/images/SystemDefault.svg"
                            width={183}
                            height={133}
                            alt=" "
                        />
                        <Box layerStyle={"flexCenterFlexStart"} mt={"10px"}>
                            {/* <DynamicIcon
                            name={colorMode === "light" ? "green_tick" : "unticked"}
                        /> */}
                            <Text
                                variant={" h6"}
                                textTransform={"uppercase"}
                                _light={{
                                    color: "#191919"
                                }}
                                _dark={{
                                    color: "#FFFFFF"
                                }}
                                m={"2px 0px 0px 15px"}
                            >
                                System Default
                            </Text>
                        </Box>
                    </Box>

                    <Box
                        layerStyle={"flexColumn"}
                        cursor={"pointer"}
                        onClick={() => {
                            toggleColorMode();
                        }}
                    >
                        <Image
                            src=" /images/LightTheme.svg"
                            width={183}
                            height={133}
                            alt=" "
                            unoptimized="true"
                            priority="true"
                        />
                        <Box layerStyle={"flexCenterFlexStart"} mt={"10px"}>
                            <DynamicIcon
                                name={colorMode === "light" ? "green_tick" : "unticked"}
                            />
                            <Text
                                variant={" h6"}
                                textTransform={"uppercase"}
                                _light={{
                                    color: "#191919"
                                }}
                                _dark={{
                                    color: "#FFFFFF"
                                }}
                                m={"2px 0px 0px 15px"}
                            >
                                Light THEME
                            </Text>
                        </Box>
                    </Box>

                    <Box
                        layerStyle={"flexColumn"}
                        cursor={"pointer"}
                        onClick={() => {
                            toggleColorMode();
                        }}
                    >
                        <Image
                            src="/images/DarkTheme.svg"
                            width={183}
                            height={133}
                            alt=""
                            unoptimized="true"
                            priority="true"
                        />
                        <Box layerStyle={"flexCenterFlexStart"} mt={"10px"}>
                            <DynamicIcon
                                name={colorMode === "dark" ? "green_tick" : "unticked"}
                            />
                            <Text
                                layerStyle={" h6"}
                                textTransform={"uppercase"}
                                _light={{
                                    color: "#191919"
                                }}
                                _dark={{
                                    color: "#FFFFFF"
                                }}
                                m={"2px 0px 0px 15px"}
                            >
                                DARK THEME
                            </Text>
                        </Box>
                    </Box>
                </Box>
            </Box >
        )
            : (
                <Box

                    flexShrink={"0"}
                    borderRadius={"6px"}
                    _light={{
                        bg: "#FFFFFF"
                    }}
                    _dark={{
                        bg: "#202020"
                    }}

                    my={"15px"}
                    p="20px"
                >
                    <Text variant={"contentHeading3"} fontWeight={"400"}>
                        Theme
                    </Text>
                    <Box layerStyle={"flexColumn"}>
                        <Box layerStyle={"flexCenter"} justifyContent={"space-around"}>
                            <Box layerStyle={"flexColumn"} cursor={"pointer"}>
                                <Box layerStyle={"flexCenterFlexStart"}>
                                    {/* <Image src="/images/SelectBox.svg" alt="" ml={"21px"}></Image> */}
                                    <Text
                                        ml="20px"
                                        mb="10px"
                                        variant={" h6"}
                                        textTransform={"uppercase"}
                                        _light={{
                                            color: "#191919"
                                        }}
                                        _dark={{
                                            color: "#FFFFFF"
                                        }}
                                    >
                                        System Default
                                    </Text>
                                </Box>
                                <Image
                                    src="/images/SystemDefault.svg"
                                    width={183}
                                    height={133}
                                    alt=""
                                    m={"12px 0px 0px 21px"}
                                ></Image>
                            </Box>

                            <Box
                                layerStyle={"flexColumn"}
                                cursor={"pointer"}
                                onClick={() => {
                                    toggleColorMode();
                                }}
                            >
                                <Box layerStyle={"flexCenterFlexStart"} mb="10px" >
                                    <Box ml={"21px"}>
                                        <DynamicIcon
                                            name={colorMode === "light" ? "green_tick" : "unticked"}
                                        />
                                    </Box>
                                    <Text
                                        variant={" h6"}
                                        textTransform={"uppercase"}
                                        _light={{
                                            color: "#191919"
                                        }}
                                        _dark={{
                                            color: "#FFFFFF"
                                        }}
                                        ml="10px"
                                    >
                                        Light THEME
                                    </Text>
                                </Box>
                                <Image
                                    src="/images/LightTheme.svg"
                                    width={183}
                                    height={133}
                                    unoptimized="true"
                                    priority="true"
                                    alt=""
                                    m={"12px 0px 0px 21px"}
                                ></Image>
                            </Box>

                        </Box>

                        <Box
                            layerStyle={"flexCenter"}
                            w={"100%"}
                            justifyContent={"center"}
                        >
                            <Box

                                layerStyle={"flexColumn"}
                                cursor={"pointer"}
                                onClick={() => {
                                    toggleColorMode();
                                }}
                            >
                                <Box layerStyle={"flexCenterFlexStart"} mt={"34px"} mb={"10px"}>
                                    <Box ml={"21px"}>
                                        <DynamicIcon
                                            name={colorMode === "dark" ? "green_tick" : "unticked"}
                                        />
                                    </Box>
                                    <Text
                                        ml={"10px"}
                                        layerStyle={" h6"}
                                        textTransform={"uppercase"}
                                        _light={{
                                            color: "#191919"
                                        }}
                                        _dark={{
                                            color: "#FFFFFF"
                                        }}
                                    >
                                        DARK THEME
                                    </Text>

                                </Box>
                                <Image
                                    src="/images/DarkTheme.svg"
                                    unoptimized="true"
                                    priority="true"
                                    width={183}
                                    height={133}
                                    alt=""
                                    m={"12px 0px 0px 21px"}
                                ></Image>
                            </Box>
                        </Box>

                    </Box>
                </Box>

            )

    );
};


export default ThemeBox;
