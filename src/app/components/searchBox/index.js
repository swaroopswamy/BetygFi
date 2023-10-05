import { Flex, Box, Input, useColorModeValue, InputLeftElement, InputGroup } from "@chakra-ui/react";
import { SearchBoxIcon } from "/src/app/components/icons";

const SearchBox = ({ ...rest }) => {

    return (
        <Flex alignItems={"center"}>
            <Box>
                <InputGroup>
                    {/* <InputLeftElement>
                        <SearchBoxIcon
                            color="#FFFFFF"
                        />
                    </InputLeftElement> */}
                    <Input
                        borderColor={useColorModeValue("#E8E8E8", "#333333")}
                        bgColor={useColorModeValue("#F5F5F7", "#191919")}
                        color={useColorModeValue("#16171B", "#A8ADBD")}
                        borderRadius={"3px"}
                        {...rest}
                    />
                </InputGroup>
            </Box>
        </Flex>);
}

export default SearchBox;