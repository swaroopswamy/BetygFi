import { Box, Switch, Text, useColorMode, useDisclosure, useMediaQuery } from "@chakra-ui/react";

const CookieItem = ({ item, onCookieItemChangeList, cookieAccepted }) => {
    const [isMd] = useMediaQuery("(min-width: 768px)");
    const { colorMode } = useColorMode();
    const { onToggle: onCookieItemToggle } = useDisclosure({ defaultIsOpen: true });

    const onCookieItemChange = (slug) => {
        onCookieItemChangeList(slug);
        onCookieItemToggle();
    };
    return (
        <Box padding={"0.7rem 0.9rem"} border="1px solid rgba(70, 130, 180, 0.24)">
            <Box w={"100%"} display={"flex"} flexDir={"row"}>
                <Box w={{ md: "100%", base: "92%" }}>
                    <Text mb={"0.5rem"} variant={"cookie_item_heading"}>
                        {item?.name}
                    </Text>
                </Box>
                <Box w={{ md: "0%", base: "8%" }}>
                    {
                        !isMd && <Switch
                            isChecked={cookieAccepted.includes(item?.slug)}
                            onChange={() => onCookieItemChange(item?.slug)}
                            className={colorMode === 'light' ? "custom-switch-light" : "custom-switch-dark"} size='md'
                        />
                    }
                </Box>
            </Box>

            <Box display={"flex"} flexDir={"row"} w={"100%"}>
                <Box w={{ md: "88%", base: "100%" }}>
                    <Text variant={"cookie_description"}>
                        {item?.description}
                    </Text>
                </Box>
                <Box w={{ md: "2%", base: "0%" }}></Box>
                <Box w={{ md: "10%", base: "0%" }}>
                    {
                        isMd && <Switch
                            isChecked={cookieAccepted.includes(item?.slug)}
                            onChange={() => onCookieItemChange(item?.slug)}
                            className={colorMode === 'light' ? "custom-switch-light" : "custom-switch-dark"} size='lg'
                        />
                    }
                </Box>
            </Box>

        </Box>
    );
};

export default CookieItem;
