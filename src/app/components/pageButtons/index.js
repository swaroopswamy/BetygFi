import { Text, Box, useColorModeValue, Image, Button } from "@chakra-ui/react";

const PageButtons = ( {page, totalPages, pageChangeHandler} ) => {
    console.log("page: ", page);
    
    return (
        <>
        <Box layerStyle={"flexCenter"} gap={"20px"} >
            <Box layerStyle={"flexCenter"} gap={"5px"}>
                <Text variant={"h3"}>
                    Page
                </Text>
                <Text variant={"h2"}>
                    1
                </Text>
            </Box>

            <Box display={"flex"}>
                <Button
                    bg={useColorModeValue("#FFFFFF", "#202020")}
                    border={"1px"}
                    p={"0px"}
                    borderColor={useColorModeValue("#DDDDDD", "#454853")}
                    onClick={() => {
                        if (page > 1) pageChangeHandler(page - 1);
                    }}
                    cursor={page === 1 ? "not-allowed" : "pointer"}
                    disabled={page === 1}
                >
                    <Image
                        width={15}
                        height={15}
                        style={{ rotate: "180deg" }}
                        src={useColorModeValue(
                            "/icons/direction-arrow.svg",
                            "/icons/direction-icon-dark.svg"
                        )}
                        alt="prev-arrow"
                    ></Image>
                </Button>

                <Button
                    bg={useColorModeValue("#FFFFFF", "#202020")}
                    border={"1px"}
                    p={"0px"}
                    borderColor={useColorModeValue("#DDDDDD", "#454853")}
                    onClick={() => {
                        if (page < totalPages)
                            pageChangeHandler(page + 1);
                    }}
                    cursor={page === totalPages ? "not-allowed" : "pointer"}
                    disabled={page === totalPages}
                >
                    <Image
                        width={15}
                        height={15}
                        alt="next-arrow"
                        src={useColorModeValue(
                            "/icons/direction-arrow.svg",
                            "/icons/direction-icon-dark.svg"
                        )}
                    ></Image>
                </Button>
            </Box>
        </Box>
        </>
  );
};
export default PageButtons;
