import React from "react";
import { Text, Box, useColorMode, Input, Menu, MenuButton, MenuList, MenuItem, Button, useColorModeValue, useMediaQuery } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import LastUpdate from "@components/lastUpdate";

const PageButtonsWide = ({
    page,
    totalPages = 0,
    pageChangeHandler,
    tableLimit,
    setTableLimit,
    pageMenuList,
    time,
    ...rest
}) => {
    const [isMd] = useMediaQuery("(min-width: 768px)");

    if (totalPages === 0) {
        return null;
    }

    const renderMDPageButton = () => {
        return (
            <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                {...rest}
            >
                {time ? <LastUpdate time={time} /> : <Box minW={"100px"} />}

                <Box
                    display={"flex"}
                    justifyContent={"space-evenly"}
                    alignItems={"center"}
                    gap={"8px"}
                >
                    <PaginationButtons
                        page={page}
                        pageChangeHandler={pageChangeHandler}
                        totalPages={totalPages}
                    />
                </Box>

                <Box layerStyle={"center"} gap={"8px"}>
                    <Text variant={"h3"}> Show </Text>

                    <TableLimitMenu
                        tableLimit={tableLimit}
                        setTableLimit={setTableLimit}
                        pageMenuList={pageMenuList}
                    />
                </Box>
            </Box>
        );
    };

    const renderSMPageButton = () => {
        return (
            <Box
                display={"flex"}
                flexDir={"column"}
                my={"10px"}
                gap={"30px"}
                justifyContent={"space-between"}
                alignItems={"center"}
                {...rest}
            >
                <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    w={"100%"}
                >
                    {time ? <LastUpdate time={time} /> : <Box minW={"100px"} />}

                    <TableLimitMenu
                        tableLimit={tableLimit}
                        setTableLimit={setTableLimit}
                        pageMenuList={pageMenuList}
                    />
                </Box>

                <Box
                    display={"flex"}
                    justifyContent={"space-evenly"}
                    alignItems={"center"}
                    gap={"8px"}
                    w={"80%"}
                >
                    <PaginationButtons
                        page={page}
                        pageChangeHandler={pageChangeHandler}
                        totalPages={totalPages}
                    />
                </Box>
            </Box>
        );
    };

    return isMd ? renderMDPageButton() : renderSMPageButton();
};

export default PageButtonsWide;

const PaginationButtons = ({ page, pageChangeHandler, totalPages }) => {
    const { colorMode } = useColorMode();

    const handlePaginationChange = (type, value) => {
        if (type === "input") {
            if (value !== "") {
                value = +value;
            }
            if (value < 0) {
                value = 1;
            }
            if (value > totalPages) {
                value = totalPages;
            }
            pageChangeHandler(value);
        } else if (type === "most-left") {
            if (page > 1) {
                pageChangeHandler(value);
            }
        } else if (type === "decrement-left") {
            if (page > 1) {
                pageChangeHandler(value);
            }
        } else if (type === "increment-right") {
            if (page < totalPages) {
                pageChangeHandler(value);
            }
        } else if (type === "most-right") {
            if (page < totalPages) {
                pageChangeHandler(totalPages);
            }
        }
    };

    return (
        <>
            <RoundButton
                cursor={page > 1 ? "pointer" : "not-allowed"}
                disabled={page === 1}
                onClick={() => handlePaginationChange("most-left", 1)}
            >
                <ArrowLeftIcon boxSize={"12px"} />
            </RoundButton>

            <RoundButton
                cursor={page > 1 ? "pointer" : "not-allowed"}
                disabled={page === 1}
                onClick={() => handlePaginationChange("decrement-left", +page - 1)}
            >
                <ChevronLeftIcon />
            </RoundButton>

            <Box layerStyle={"center"} gap={"8px"}>
                <Input
                    p={"8px 15px"}
                    borderRadius={"0px"}
                    borderColor={colorMode === "light" ? "#E8E8E8" : "#454853"}
                    background={colorMode === "light" ? "#F0F0F5" : "#191919"}
                    width={"65px"}
                    height={"30px"}
                    type="number"
                    onChange={(e) => handlePaginationChange("input", e.target.value)}
                    value={page}
                    textAlign={"center"}
                />
                <Text variant={"h3"}>of {totalPages} pages</Text>
            </Box>

            <RoundButton
                opacity={"1"}
                cursor={page < totalPages ? "pointer" : "not-allowed"}
                disabled={page === totalPages}
                onClick={() => handlePaginationChange("increment-right", +page + 1)}
            >
                <ChevronRightIcon />
            </RoundButton>

            <RoundButton
                opacity={"1"}
                cursor={page < totalPages ? "pointer" : "not-allowed"}
                disabled={page === totalPages}
                onClick={() => handlePaginationChange("most-right", +totalPages)}
            >
                <ArrowRightIcon boxSize={"12px"} />
            </RoundButton>
        </>
    );
};

const TableLimitMenu = ({ pageMenuList, tableLimit, setTableLimit }) => {
    return (
        <Menu>
            <MenuButton as={Button} variant={"menu"}>
                <Box layerStyle={"spaceBetween"}>
                    {tableLimit} / Page
                    <ChevronDownIcon />
                </Box>
            </MenuButton>
            <MenuList
                boxShadow={"0px 5px 4px 0px rgba(0, 0, 0, 0.10)"}
                bgColor={useColorModeValue("#FFF", "#191919")}
                minWidth={"50px"}
            >
                {
                    pageMenuList.map((pm, index) => (
                        <PageMenuItem
                            key={index}
                            onClick={() => setTableLimit(pm.value)}>
                            {pm.value} / Page
                        </PageMenuItem>
                    ))
                }
            </MenuList>
        </Menu>
    );
};

const RoundButton = ({ children, ...rest }) => {
    const { colorMode } = useColorMode();

    return (
        <Box
            layerStyle={"center"}
            bg={colorMode === "light" ? "#FFFFFF" : "#191919"}
            minW={"32px"}
            minH={"32px"}
            borderRadius={"50%"}
            border={
                colorMode === "light"
                    ? "1px solid rgba(241, 241, 241, 1)"
                    : "1px solid rgba(51, 51, 51, 1)"
            }
            cursor={"pointer"}
            _disabled={{
                opacity: 0.4,
            }}
            {...rest}
        >
            {children}
        </Box>
    );
};

const PageMenuItem = ({ children, ...rest }) => {
    const { colorMode } = useColorMode();

    return (
        <MenuItem
            bgColor={colorMode === "light" ? "#FFF" : "#191919"}
            _hover={{
                bg: colorMode === "light" ? "#F5F5F7" : "#202020",
            }}
            minW={"100px"}
            {...rest}
        >
            <Text
                variant={"h3"}
                color={colorMode === "light" ? "#191919" : "#FFFFFF"}
            >
                {children}
            </Text>
        </MenuItem>
    );
};
