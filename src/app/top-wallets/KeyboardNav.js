"use client";
import {
    Grid, GridItem, Input, Table, TableCaption, Text, Tbody, Td, Tfoot, Th, Thead,
    Tr, Flex, Box, useColorModeValue, Icon, Tooltip,
    Image, Spacer, Button, useColorMode, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel
} from "@chakra-ui/react";
import { blockchains } from "../../../util/constant";
import { useState, useEffect, useRef, useCallback } from "react";
import TableData from '../../../util/whales.json';
import millify from "millify";
import { Router } from "next/router";
import { useRouter } from "next/navigation";

const WalletTable = () => {
    const [numRows, numCols] = [3, 3]; // No magic numbers
    const [activeIndex, setActiveIndex] = useState(-1); // Track which cell to highlight
    const [isNavigating, setIsNavigating] = useState(false); // Track navigation
    const [isEditing, setIsEditing] = useState(false); // Track editing
    const boardRef = useRef(); // For setting/ unsetting navigation
    const inputRefs = useRef([]); // For setting / unsetting input focus

    // Handle mouse down inside or outside the board
    const handleMouseDown = useCallback(
        (e) => {
            if (boardRef.current && boardRef.current.contains(e.target)) {
                setIsNavigating(true);
                // setIsEditing(true);
            } else {
                setIsNavigating(false);
            }
        },
        [boardRef, setIsNavigating]
    );

    // Handle key presses: 
    // arrows to navigate, escape to back out, enter to start / end editing
    const handleKeyDown = useCallback(
        (e) => {
            if (isNavigating) {
                const { key } = e;
                switch (key) {
                    case "ArrowUp":
                        // Move up a row, subtract num cols from index
                        if (!isEditing && activeIndex >= numRows)
                            setActiveIndex(activeIndex - numCols);
                        break;
                    case "ArrowDown":
                        // Move down a row, add num cols to index
                        if (!isEditing && activeIndex < numRows * numCols - numCols)
                            setActiveIndex(activeIndex + numCols);
                        break;
                    case "ArrowRight":
                        // Move one col right, add one
                        if (!isEditing && activeIndex < numRows * numCols - 1)
                            setActiveIndex(activeIndex + 1);
                        break;
                    case "ArrowLeft":
                        // Move one col left, subtract one
                        if (!isEditing && activeIndex > 0) setActiveIndex(activeIndex - 1);
                        break;
                    case "Enter":
                        if (isEditing) setIsEditing(false);
                        else if (isNavigating) setIsEditing(true);
                        else if (!isEditing) setIsNavigating(true);
                        break;
                    case "Escape":
                        // Stop navigating
                        if (isEditing) setIsEditing(false);
                        else if (isNavigating) setIsNavigating(false);
                        break;
                    default:
                        break;
                }
                console.log("active index", activeIndex);
            }
        },
        [activeIndex, isNavigating, isEditing, numRows, numCols]
    );

    // Add listeners on mount, remove on unmount
    useEffect(() => {
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [handleMouseDown, handleKeyDown]);

    // When the index changes, determine if we should focus or blur the current input
    const onIndexChange = useCallback(() => {
        if (activeIndex >= 0 && activeIndex < numRows * numCols) {
            const inputRef = inputRefs.current[activeIndex];
            if (inputRef) {
                if (isEditing) {
                    inputRef.focus();
                } else {
                    inputRef.blur();
                }
            }
        }
    }, [activeIndex, isEditing, inputRefs, numRows, numCols]);
    useEffect(onIndexChange, [activeIndex, onIndexChange]);

    // When isEditing changes focus or blur the current input
    const onIsEditingChange = useCallback(() => {
        const inputRef = inputRefs.current[activeIndex];
        if (!inputRef) return;

        if (isNavigating && isEditing) {
            inputRef.focus();
        } else if (!isEditing) {
            inputRef.blur();
        }
    }, [inputRefs, isEditing, activeIndex, isNavigating]);
    useEffect(onIsEditingChange, [isEditing, onIsEditingChange]);

    // When isNavigating changes, set the index to 0 or -1 (if not navigating)      
    const onIsNavigatingChange = useCallback(() => {
        if (!isNavigating) {
            setActiveIndex(-1);
        } else if (activeIndex < 0) {
            setActiveIndex(0);
        }
    }, [isNavigating, setActiveIndex, activeIndex]);
    useEffect(onIsNavigatingChange, [isNavigating, onIsNavigatingChange]);

    return (
        <>
            <Box
                //border={"2px"}
                borderRadius={"6px"}
                _light={{ borderColor: "#FFFFFF" }}
                _dark={{ borderColor: "#202020" }}
            >
                <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    padding={{ base: "0px", md: "8px 30px 8px 30px" }}
                    background={useColorModeValue('#FFFFFF', '#202020')}
                >
                    <Box>
                        <Text
                            color={useColorModeValue("#16171B", "#FFFFFF")}
                            ml={{ base: "14px", md: "10px" }}
                            mb={"20px"}
                            mt={"20px"}
                            fontSize={{ base: "14px", md: "18px" }}
                            fontWeight={600}
                            lineHeight={"20px"}
                        >
                            Top Value Holders
                        </Text>
                    </Box>
                </Box>
                <Table variant='unstyled'
                    display={{ base: "table", md: "none" }}
                    size={'sm'}
                    border={"1px"}
                    borderColor={useColorModeValue("#FFFFFF", "#272727")}
                    borderRadius={"6px"}
                >
                    <Thead>
                        <Tr
                            bg={useColorModeValue("#F5F5F7", "#131313")}
                            width={"20%"}
                            flex-shrink={"0"}
                            borderRadius={'6px'}
                        >
                            {/*   <Th
                                color={useColorModeValue("#434347", "#A8ADBD")}
                                fontSize={"10px"}
                                fontStyle={"normal"}
                                fontWeight={"400"}
                                lineHeight={"20px"}
                                letterSpacing={"1px"}
                                textTransform={"uppercase"}
                                textAlign={"left"}
                            >
                            </Th> */}
                            <Th
                                color={useColorModeValue("#434347", "#A8ADBD")}
                                fontSize={"12px"}
                                fontStyle={"normal"}
                                fontWeight={"400"}
                                lineHeight={"20px"}
                                letterSpacing={"1px"}
                                textTransform={"uppercase"}
                                textAlign={"left"}
                            >
                                Wallet Address</Th>
                            <Th
                                color={useColorModeValue("#434347", "#A8ADBD")}
                                fontSize={"12px"}
                                fontStyle={"normal"}
                                fontWeight={"400"}
                                lineHeight={"20px"}
                                letterSpacing={"1px"}
                                textTransform={"uppercase"}
                                textAlign={"left"}
                                width={"11%"}
                            >
                                Net Worth</Th>

                        </Tr>
                    </Thead>

                    <Tbody>
                        {TableData.whales.map((item, i) => {
                            return (
                                <>
                                    {/*   <TableRow
                                        key={i}
                                        user={item.id}
                                        netWorth={item.usd_value}
                                        totalTokens={item.stats.top_coins}
                                        totalProtocols={"-"}
                                        totalNFT={""}
                                    /> */}
                                    <Tr>
                                        <Td
                                            p="0"
                                            colSpan={2}
                                            borderBottom="none"
                                        >
                                            <Accordion
                                                _light={{
                                                    borderColor: "#DFDFDF"
                                                }}
                                                _dark={{
                                                    borderColor: "#DFDFDF"
                                                }}
                                                borderBottom="none"
                                                allowMultiple
                                            >
                                                <AccordionItem >
                                                    <h2>
                                                        <AccordionButton
                                                            _expanded={{
                                                                mt: "10px"
                                                            }}
                                                        >
                                                            <Box
                                                                w="100%"
                                                                display={"flex"}
                                                                alignItems={"center"}

                                                            >
                                                                <Image
                                                                    w={"20px"}
                                                                    h={"20px"}
                                                                    src={`/icons/dummy1.png`}
                                                                    alt=""
                                                                ></Image>
                                                                <Text
                                                                    _light={{
                                                                        color: "#16171B"
                                                                    }}
                                                                    _dark={{
                                                                        color: "#FFFFFF"
                                                                    }}
                                                                    fontSize={"14px"}
                                                                    fontStyle={"normal"}
                                                                    fontWeight={"600"}
                                                                    lineHeight={"20px"}
                                                                    ml="12px"
                                                                >
                                                                    {item?.id.split("").join("").substring(0, 6) + "..." + item?.id.slice(-5)}
                                                                </Text>
                                                            </Box>
                                                            <AccordionIcon />
                                                        </AccordionButton>
                                                    </h2>
                                                    <AccordionPanel pb={4}>
                                                        <Box
                                                            display={"flex"}
                                                            flexDirection={"column"}
                                                        >
                                                            <Box
                                                                display={"flex"}
                                                                flexDirection={"column"}

                                                            >
                                                                <Text
                                                                    _light={{
                                                                        color: "#8F8F8F"
                                                                    }}
                                                                    _dark={{
                                                                        color: "#A8ADBD"
                                                                    }}
                                                                    fontSize={"12px"}
                                                                    fontStyle={"normal"}
                                                                    fontWeight={"400"}
                                                                    lineHeight={"20px"}
                                                                    textAlign={"left"}
                                                                >
                                                                    Total Tokens
                                                                </Text>
                                                                <Flex mt="10px">
                                                                    {item.stats.top_coins.map((item, i) => {
                                                                        if (i < 3) {
                                                                            return (
                                                                                <Box
                                                                                    key={i}
                                                                                    padding={"7px 9px"}
                                                                                    pr={"2px"}
                                                                                    //border={"1px"}
                                                                                    minw="170px"
                                                                                    _light={{
                                                                                        borderColor: "#E8E8E8",
                                                                                        background: "#F5F5F7"
                                                                                    }}
                                                                                    _dark={{
                                                                                        borderColor: "#E8E8E8",
                                                                                        background: "#F5F5F7"
                                                                                    }}
                                                                                    borderRadius={"2px"}
                                                                                    mr={"5px"}
                                                                                    display={"flex"}
                                                                                    justifyContent={"center"}
                                                                                    gap={"3px"}
                                                                                    alignItems={"center"}
                                                                                >
                                                                                    <Image
                                                                                        w={"14px"}
                                                                                        h={"14px"}
                                                                                        src={item.logo_url}
                                                                                        alt=""
                                                                                    ></Image>
                                                                                    <Text
                                                                                        _light={{ color: "#16171B" }}
                                                                                        _dark={{ color: "#16171B" }}
                                                                                        fontSize={"14px"}
                                                                                        fontStyle={"normal"}
                                                                                        fontWeight={"400"}
                                                                                        lineHeight={"10px"}
                                                                                        ml={"2px"}
                                                                                        mt={"1px"}
                                                                                        display={"flex"}
                                                                                        alignItems={"center"}
                                                                                        w="70px"
                                                                                    >
                                                                                        ${" "}{millify(item.usd_value, {
                                                                                            precision: 2,
                                                                                            locales: "en-US"
                                                                                        })}
                                                                                    </Text>
                                                                                </Box>
                                                                            );
                                                                        }

                                                                    })}
                                                                </Flex>
                                                            </Box>
                                                            <Box
                                                                mt="10px"
                                                                display={"flex"}
                                                                flexDirection={"column"}
                                                            >
                                                                <Text
                                                                    _light={{
                                                                        color: "#8F8F8F"
                                                                    }}
                                                                    _dark={{
                                                                        color: "#A8ADBD"
                                                                    }}
                                                                    fontSize={"12px"}
                                                                    fontStyle={"normal"}
                                                                    fontWeight={"400"}
                                                                    lineHeight={"20px"}
                                                                    textAlign={"left"}
                                                                >
                                                                    Total Protocols
                                                                </Text>
                                                                <Text
                                                                    mt="10px"
                                                                    _light={{
                                                                        color: "#090909"
                                                                    }}
                                                                    _dark={{
                                                                        color: "#FFFFFFF"
                                                                    }}
                                                                    fontSize={"14px"}
                                                                    fontStyle={"normal"}
                                                                    fontWeight={"400"}
                                                                    lineHeight={"20px"}
                                                                    textAlign={"left"}
                                                                >
                                                                    -NA-
                                                                </Text>
                                                            </Box>
                                                            <Box
                                                                mt="10px"
                                                                display={"flex"}
                                                                flexDirection={"column"}

                                                            >
                                                                <Text
                                                                    _light={{
                                                                        color: "#8F8F8F"
                                                                    }}
                                                                    _dark={{
                                                                        color: "#A8ADBD"
                                                                    }}
                                                                    fontSize={"12px"}
                                                                    fontStyle={"normal"}
                                                                    fontWeight={"400"}
                                                                    lineHeight={"20px"}
                                                                    textAlign={"left"}
                                                                >
                                                                    Total NFT collections
                                                                </Text>
                                                                <Text
                                                                    mt="10px"
                                                                    _light={{
                                                                        color: "#090909"
                                                                    }}
                                                                    _dark={{
                                                                        color: "#FFFFFFF"
                                                                    }}
                                                                    fontSize={"14px"}
                                                                    fontStyle={"normal"}
                                                                    fontWeight={"400"}
                                                                    lineHeight={"20px"}
                                                                    textAlign={"left"}
                                                                >
                                                                    -NA-
                                                                </Text>
                                                            </Box>
                                                        </Box>
                                                    </AccordionPanel>
                                                </AccordionItem>
                                            </Accordion>
                                        </Td>
                                    </Tr>

                                </>
                            )
                        })}


                    </Tbody >


                </Table>

                <Table variant='unstyled'
                    display={{ base: "none", md: "table" }}
                    size={'sm'}
                    border={"1px"}
                    borderColor={useColorModeValue("#FFFFFF", "#272727")}
                    borderRadius={"6px"}
                    ref={boardRef}
                >
                    <Thead>
                        <Tr
                            bg={useColorModeValue("#F5F5F7", "#131313")}
                            width={"20%"}
                            flex-shrink={"0"}
                            borderRadius={'6px'}
                        >
                            {/*   <Th
                                color={useColorModeValue("#434347", "#A8ADBD")}
                                fontSize={"10px"}
                                fontStyle={"normal"}
                                fontWeight={"400"}
                                lineHeight={"20px"}
                                letterSpacing={"1px"}
                                textTransform={"uppercase"}
                                textAlign={"left"}
                            >
                            </Th> */}
                            <Th
                                color={useColorModeValue("#434347", "#A8ADBD")}
                                fontSize={"10px"}
                                fontStyle={"normal"}
                                fontWeight={"400"}
                                lineHeight={"20px"}
                                letterSpacing={"1px"}
                                textTransform={"uppercase"}
                                textAlign={"left"}
                            >
                                Wallet Address</Th>
                            {/* <Th
                                color={useColorModeValue("#434347", "#A8ADBD")}
                                fontSize={"10px"}
                                fontStyle={"normal"}
                                fontWeight={"400"}
                                lineHeight={"20px"}
                                letterSpacing={"1px"}
                                textTransform={"uppercase"}
                                textAlign={"left"}
                                width={"11%"}
                            >
                                Net Worth</Th> */}
                            <Th
                                color={useColorModeValue("#434347", "#A8ADBD")}
                                fontSize={"10px"}
                                fontStyle={"normal"}
                                fontWeight={"400"}
                                lineHeight={"20px"}
                                letterSpacing={"1px"}
                                textTransform={"uppercase"}
                                textAlign={"left"}
                                width={"50%"}
                            >
                                Total Tokens</Th>
                            <Th
                                color={useColorModeValue("#434347", "#A8ADBD")}
                                fontSize={"10px"}
                                fontStyle={"normal"}
                                fontWeight={"400"}
                                lineHeight={"20px"}
                                letterSpacing={"1px"}
                                textTransform={"uppercase"}
                                textAlign={"left"}
                            >
                                Total Protocols</Th>
                            {/* <Th
                                color={useColorModeValue("#434347", "#A8ADBD")}
                                fontSize={"10px"}
                                fontStyle={"normal"}
                                fontWeight={"400"}
                                lineHeight={"20px"}
                                letterSpacing={"1px"}
                                textTransform={"uppercase"}
                                textAlign={"left"}
                            >
                                Total NFT Collections</Th> */}
                        </Tr>
                    </Thead>

                    <Tbody>
                        {TableData.whales.map((item, i) => {
                            return (
                                <>
                                    <TableRow
                                        key={i}
                                        user={item.id}
                                        netWorth={item.usd_value}
                                        totalTokens={item.stats.top_coins}
                                        totalProtocols={"-"}
                                        totalNFT={""}
                                    />
                                </>
                            )
                        })}


                    </Tbody>
                </Table>

                {/*   <PageButtons /> */}
            </Box>
        </>
    )
};

export default WalletTable;

function PageButtons() {
    return (
        <>
            <Box
                display={"flex"}
                alignItems={"flex-start"}
                justifyContent={"end"}
                padding="10px 30px 14px"
                background={useColorModeValue('#FFFFFF', '#202020')}
            >

                <Box
                    display={"flex"}
                >
                    <Box
                        display={"flex"}
                        alignItems={"center"}
                    >
                        <Text
                            color={useColorModeValue("#16171B", "#FFF")}
                            fontSize={"10px"}
                            fontWeight={"400"}
                        >
                            1-20
                        </Text>
                    </Box>

                    <Button
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        w={"12px"}
                        h={"12px"}
                        bg={useColorModeValue("#FFF", "#202020")}
                        padding="0px"
                    >
                        <Image
                            mt={"10px"}
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
                        padding="0px"
                    >
                        <Image
                            width={15}
                            height={15}
                            alt="next-arrow"
                            src={useColorModeValue('/icons/direction-arrow.svg', '/icons/direction-icon-dark.svg')}
                        ></Image>
                    </Button>
                </Box>

            </Box>
        </>)
}

function TableRow({ key, user, netWorth, totalTokens, totalProtocols, totalNFT }) {
    const [clicked, setClick] = useState(false);
    const { colorMode } = useColorMode();
    const router = useRouter();
    return <Tr
        key={key}
        cursor={"pointer"}
        bgColor={clicked ?
            (colorMode === "light" ? '#F5F5F7' : '#191919') :
            (colorMode === "light" ? '#FFFFFF' : '#202020')
        }
        onClick={() => {
            setClick(!clicked)
            router.push(`/wallet_dashboard?address=${user}`)
        }}
        borderBottom={'1px'}
        borderColor={useColorModeValue('#DFDFDF', '#313131')}
        borderRadius={'2px'}
    >
        {/*   <Td>
            <Flex>
                <Box>
                    <Image
                        w={"20px"}
                        h={"20px"}
                        src={`/icons/dummy1.png`}
                        alt=""
                    ></Image>
                </Box>
            </Flex>
        </Td>
 */}
        <Td>
            <Flex>
                <Box>
                    <Text
                        color={useColorModeValue("#16171B", "#FFFFFF")}
                        fontSize={"14px"}
                        fontStyle={"normal"}
                        fontWeight={"600"}
                        lineHeight={"20px"}
                    >
                        {user}
                    </Text>
                </Box>
            </Flex>
        </Td>

        {/* <Td>
            <Flex>
                <Box>
                    <Text
                        color={useColorModeValue("#16171B", "#FFFFFF")}
                        fontSize={"14px"}
                        fontStyle={"normal"}
                        fontWeight={"400"}
                        lineHeight={"20px"}
                    >
                        ${" "}{millify(netWorth, {
                            precision: 2,
                            locales: "en-US"
                        })}
                    </Text>
                </Box>
            </Flex>
        </Td>
 */}
        <Td>
            <Flex>
                {totalTokens.map((item, i) => {
                    if (i < 3) {
                        return (
                            <Box
                                key={i}
                                padding={"7px 9px"}
                                //border={"1px"}
                                minw="150px"
                                _light={{
                                    borderColor: "#E8E8E8",
                                    background: "#F5F5F7"
                                }}
                                _dark={{
                                    borderColor: "#333333",
                                    background: "202020"
                                }}
                                borderRadius={"2px"}
                                mr={"5px"}
                                display={"flex"}
                                justifyContent={"center"}
                                gap={"3px"}
                                alignItems={"center"}
                            >
                                <Image
                                    w={"20px"}
                                    h={"20px"}
                                    src={item.logo_url}
                                    alt=""
                                ></Image>
                                <Text
                                    _light={{ color: "#16171B" }}
                                    _dark={{ color: "#FFFFFF" }}
                                    fontSize={"14px"}
                                    fontStyle={"normal"}
                                    fontWeight={"400"}
                                    lineHeight={"10px"}
                                    ml={"10px"}
                                    mt={"1px"}
                                >
                                    ${" "}{millify(item.usd_value, {
                                        precision: 2,
                                        locales: "en-US"
                                    })}
                                </Text>
                            </Box>
                        );
                    }

                })}
            </Flex>
        </Td>

        <Td>
            <Flex>
                <Box>
                    <Text
                        color={useColorModeValue("#16171B", "#FFFFFF")}
                        fontSize={"14px"}
                        fontStyle={"normal"}
                        fontWeight={"600"}
                        lineHeight={"20px"}
                    >
                        {totalProtocols}
                    </Text>
                </Box>
            </Flex>
        </Td>

        {/* <Td>
            <Flex>
                <Box>
                    <Text
                        color={useColorModeValue("#16171B", "#FFFFFF")}
                        fontSize={"14px"}
                        fontStyle={"normal"}
                        fontWeight={"600"}
                        lineHeight={"20px"}
                    >
                        {totalNFT}
                    </Text>
                </Box>
            </Flex>
        </Td> */}

    </Tr>;
}
