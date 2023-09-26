"use client"
import {
    Text, Box, useColorModeValue,
    Image, Button
} from "@chakra-ui/react";

const BigTablePageButtons = () => {
    return (
        <>
            <Box
                display={"flex"}
                //alignItems={"flex-start"}
                justifyContent={"space-between"}
                padding="10px"
                background={useColorModeValue('#FFFFFF', '#202020')}
            >
                <Box
                    display={"flex"}
                    alignItems={"center"}
                >
                    <Text
                        _light={{ color: "#A8ADBD" }}
                        _dark={{ color: "#A8ADBD" }}
                        fontSize={"12px"}
                        fontWeight={"400"}
                        lineHeight={"20px"}
                        paddingLeft={"20px"}
                        pt={"2px"}
                    >
                        Last Update
                    </Text>
                    <Text
                        _light={{ color: "#16171B" }}
                        _dark={{ color: "#FFFFFF" }}
                        fontSize={"12px"}
                        fontWeight={"400"}
                        lineHeight={"20px"}
                        pl={"3px"}
                        pt={"2px"}
                    >
                        3 mins ago
                    </Text>
                </Box>
                <Box
                    display={"flex"}
                    alignItems={"center"}
                >
                    <Text
                        color={useColorModeValue("#16171B", "#FFF")}
                        fontSize={"12px"}
                        fontWeight={"400"}
                        mt={"3px"}
                    >
                        1-20
                    </Text>

                    <Button
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        w={"10px"}
                        h={"26px"}
                        bg={useColorModeValue("#FFF", "#202020")}
                        padding="0px"
                        mb={"2px"}
                    >
                        <Image
                            //mt={"10px"}
                            width={"12px"}
                            height={"12px"}
                            style={{ rotate: '90deg' }}
                            alt="next-arrow"
                            src={useColorModeValue('/icons/direction-arrow.svg', '/icons/direction-icon-dark.svg')}
                        ></Image>
                    </Button>

                    <Button
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        w={"10px"}
                        h={"26px"}
                        bg={useColorModeValue("#FFF", "#202020")}
                        border={"1px"}
                        borderColor={useColorModeValue("#C7CAD2", "#454853")}
                        borderRadius={"0px"}
                        padding="0px"
                    >
                        <Image
                            width={"12px"}
                            height={"12px"}
                            style={{ rotate: '180deg' }}
                            src={useColorModeValue('/icons/direction-arrow.svg', '/icons/direction-icon-dark.svg')}
                            alt="prev-arrow"
                        ></Image>
                    </Button>

                    <Button
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        w={"10px"}
                        h={"26px"}
                        bg={useColorModeValue("#FFF", "#202020")}
                        border={"1px"}
                        borderRadius={"0px"}
                        borderColor={useColorModeValue("#C7CAD2", "#454853")}
                        marginRight={"10px"}
                        padding={"0px"}
                    >
                        <Image
                            width={"12px"}
                            height={"12px"}
                            alt="next-arrow"
                            src={useColorModeValue('/icons/direction-arrow.svg', '/icons/direction-icon-dark.svg')}
                        ></Image>
                    </Button>

                </Box>


            </Box>
        </>)
}
export default BigTablePageButtons;