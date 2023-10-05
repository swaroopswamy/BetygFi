import { Box, Image, Text, useColorModeValue, Tooltip } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import BlockchainSelectionMenu from "/src/app/components/blockchainSelectionMenu";

export const Banner = () => {
    const defiData = useSelector(
        (state) => state?.defiDashboardData?.DefiData?.data
    );

    return (
        <>
            <Box display={{ base: "none", md: "none", bigSize: "flex" }} justifyContent={"space-between"} w={"100%"} m={"10px 30px"} py={"20px"} borderBottom={useColorModeValue("1px solid #BFBFBF", "1px solid #2F2F2F")} bgColor={useColorModeValue("#F0F0F5", "#191919")} >
                <Box display={"flex"} alignItems={"center"} bgColor={useColorModeValue("#F0F0F5", "#191919")}>
                    <Box marginRight={"22px"}>
                        <Image
                            w={{ base: "30px", md: "30px" }}
                            h={{ base: "30px", md: "30px" }}
                            borderRadius={"50%"}
                            src={defiData?.logo ?? "/images/basic_profile.png"}
                            alt="proifile_img"
                        />
                    </Box>
                    <Box
                        display={"flex"}
                        flexDirection={"column"}
                        paddingTop={"15px"}
                    >
                        {
                            defiData?.name !== undefined && (
                                <Text
                                    fontSize={{ base: "18px", md: "24px" }}
                                    fontWeight={"400"}
                                    lineHeight={"20px"}
                                    //opacity={"0.5"}
                                    _dark={{
                                        color: "#FFFFFF"
                                    }}
                                    _light={{
                                        color: "#191919"
                                    }}
                                    letterSpacing={"2.4px"}
                                    textTransform={"capitalize"}
                                >
                                    {defiData?.name}
                                </Text>
                            )}
                        <Box
                            display={"flex"}
                            alignItems={"center"}
                            mt={"13px"}
                        >
                            <Box
                                h="100%"
                                py={"11px"}
                                cursor={"pointer"}
                                borderRight={useColorModeValue("1px solid #BFBFBF", "1px solid #2F2F2F")}
                                onClick={() => {
                                    router.push(defiData.url);
                                }}
                            >
                                <a
                                    href={defiData?.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Text
                                        fontSize={"14px"}
                                        fontWeight={400}
                                        lineHeight={"20px"}
                                        letterSpacing={"1.4px"}
                                        color={useColorModeValue("#000000", "#A8ADBD")}
                                        paddingRight={"20px"}

                                    >
                                        {defiData?.url}
                                    </Text>
                                </a>
                            </Box>
                            <Box
                                display={"flex"}
                                alignItems={"center"}
                                h="100%"
                                paddingRight={"20px"}
                                borderRight={useColorModeValue("1px solid #BFBFBF", "1px solid #2F2F2F")}

                            >
                                <Text
                                    fontSize={"14px"}
                                    fontWeight={"400"}
                                    lineHeight={"20px"}
                                    letterSpacing={"1.4px"}
                                    color={useColorModeValue("#3A3A3A", "#A8ADBD")}
                                    paddingLeft={"20px"}
                                    marginRight={"13px"}
                                >
                                    {defiData?.chains?.length ?? 0} chains
                                </Text>
                                <Box
                                    display={"flex"}
                                    alignItems={"center"}
                                    justifyContent={"center"}
                                    ml={"15px"}
                                >
                                    <BlockchainSelectionMenu />
                                </Box>
                            </Box>
                            <Box
                                h="100%"
                                py={"11px"}
                                pl="20px"
                                display={"flex"}
                                alignItems={"center"}
                            >
                                <Text
                                    fontSize={"14px"}
                                    fontWeight={400}
                                    lineHeight={"20px"}
                                    letterSpacing={"1.4px"}
                                    color={useColorModeValue("#000000", "#A8ADBD")}
                                    paddingRight={"15px"}
                                >
                                    Token
                                </Text>
                                <Text
                                    fontSize={"10px"}
                                    fontWeight={600}
                                    lineHeight={"20px"}
                                    letterSpacing={"1px"}
                                    color={useColorModeValue("#000000", "#A8ADBD")}
                                    paddingRight={"15px"}
                                >
                                    <a target="_blank" href={`https://www.coingecko.com/en/coins/${defiData?.symbol.toLowerCase()}`}>{defiData?.symbol}</a>
                                </Text>
                            </Box>

                        </Box>
                    </Box>
                </Box>

                <Box
                    display={"flex"}
                    alignItems={"center"}
                    position={"relative"}
                    bgColor={useColorModeValue("#FFF", "#202020")}
                    padding={"10px 10px"}
                    h="fit-content"
                    borderRadius={"6px"}
                    _after={{
                        position: "absolute",
                        content: '""',
                        bottom: "0px",
                        left: "10px",
                        width: "85%",
                        height: "1px",
                        bgColor: "#00B913",

                    }}
                >
                    Safety Score
                    <Text
                        ml="10px"
                        fontWeight={"600"}
                        fontSize={"16px"}
                    >
                        {defiData?.safety_score}/100
                    </Text>
                </Box>
            </Box>

            {/* <Box display={{ md: "flex", bigSize: "none" }}
                margin={"17px 20px"}
                //paddingBottom={"33px"}
                borderBottom={useColorModeValue("1px solid #BFBFBF", "1px solid #2F2F2F")}
                bgColor={useColorModeValue("#F0F0F5", "#191919")}
                w="100%"

            >
                <Box
                    w="100%"
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"start"}
                    bgColor={useColorModeValue("#F0F0F5", "#191919")}
                >
                    <Box
                        display={"flex"}
                        alignItems={"center"}

                    >
                        <Image
                            marginRight={"22px"}
                            w={{ base: "30px", md: "30px" }}
                            h={{ base: "30px", md: "30px" }}
                            borderRadius={"50%"}
                            src={defiData?.logo ?? "/images/basic_profile.png"}
                            alt="proifile_img"
                        />
                        <Box
                            display={"flex"}
                            flexDirection={"column"}
                        >
                            {
                                defiData?.name !== undefined && (
                                    <Text
                                        fontSize={{ base: "18px", md: "24px" }}
                                        fontWeight={"400"}
                                        lineHeight={"20px"}
                                        //opacity={"0.5"}
                                        _dark={{
                                            color: "#FFFFFF"
                                        }}
                                        _light={{
                                            color: "#191919"
                                        }}
                                        letterSpacing={"2.4px"}
                                    >
                                        {defiData?.name}
                                    </Text>
                                )}
                            <Box
                                h="100%"
                                py={"4px"}
                                cursor={"pointer"}
                                //borderRight={useColorModeValue("1px solid #BFBFBF", "1px solid #2F2F2F")}
                                onClick={() => {
                                    router.push(defiData.url);
                                }}
                            >
                                <a
                                    href={defiData?.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Text
                                        fontSize={"14px"}
                                        fontWeight={"300"}
                                        lineHeight={"20px"}
                                        letterSpacing={"1.4px"}
                                        color={useColorModeValue("#000000", "#A8ADBD")}
                                        textDecoration={"underline"}
                                    >
                                        {defiData?.url}
                                    </Text>
                                </a>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        display={"flex"}
                        flexDirection={"column"}
                        h="100%"
                        mt="20px"

                    >
                        <Text
                            fontSize={"14px"}
                            fontWeight={"400"}
                            lineHeight={"20px"}
                            letterSpacing={"1.4px"}
                            color={useColorModeValue("#3A3A3A", "#A8ADBD")}
                        >
                            {defiData?.chains?.length ?? 0} chains
                        </Text>
                        <Box
                            display={"flex"}
                            alignItems={"center"}
                            justifyContent={"center"}
                            mt="10px"
                        >
                            {blockchains?.map((item, i) => (
                                <>
                                    {defiData?.chains?.includes(toCapitalize(item.name)) &&

                                        <Tooltip
                                            key={i} label={item.name}
                                        >

                                            <Box
                                                display={"flex"}
                                                cursor={"pointer"}
                                                alignItems={"center"}
                                                justifyContent={"center"}

                                                flexDirection={"row"}
                                                bg={"#D9D9D9"}
                                                borderRadius="50%"
                                                border={blockchainSelected.includes(item.id) ? "3px solid #55A406" : ""}
                                                boxShadow={!blockchainSelected.includes(item.id) ? "-2px 0px 5px 1px rgba(0, 0, 0, 0.10)" : ""}
                                                w="40px"
                                                h="40px"
                                                mr="10px"
                                                onClick={() => {
                                                    BlockchainTypeHandler(item.id);
                                                }}
                                                _hover={{ borderColor: "blue" }}
                                            >
                                                <Image
                                                    width={18}
                                                    height={18}
                                                    src={item.logoUrl}
                                                    alt={`${item.id}_icon`}

                                                ></Image>
                                            </Box>

                                        </Tooltip>
                                    }
                                </>
                            ))}

                        </Box>
                    </Box>
                    <Box
                        h="100%"
                        py={"11px"}
                        display={"flex"}
                        alignItems={"center"}
                    >
                        <Text
                            fontSize={"14px"}
                            fontWeight={400}
                            lineHeight={"20px"}
                            letterSpacing={"1.4px"}
                            color={useColorModeValue("#000000", "#A8ADBD")}
                            paddingRight={"15px"}
                        >
                            Token
                        </Text>
                        <Text
                            fontSize={"10px"}
                            fontWeight={600}
                            lineHeight={"20px"}
                            letterSpacing={"1px"}
                            color={useColorModeValue("#000000", "#A8ADBD")}
                            paddingRight={"15px"}
                        >
                            <a target="_blank" href={`https://www.coingecko.com/en/coins/${defiData?.symbol.toLowerCase()}`}>{defiData?.symbol}</a>
                        </Text>
                    </Box>
                    <Box
                        //w="100%"
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        position={"relative"}
                        bgColor={useColorModeValue("#FFF", "#202020")}
                        mx="auto"
                        padding={"10px 10px"}
                        h="fit-content"
                        borderRadius={"6px"}
                        _after={{
                            position: "absolute",
                            content: '""',
                            bottom: "0px",
                            left: "10px",
                            width: "85%",
                            height: "1px",
                            bgColor: "#00B913",

                        }}
                    >
                        Safety Score
                        <Text
                            ml="10px"
                            fontWeight={"600"}
                            fontSize={"16px"}

                        >
                            {defiData?.safety_score}/100
                        </Text>
                    </Box>
                </Box>

            </Box> */}
        </>
    )
}