import { Flex, Box, Input, useColorModeValue, InputLeftElement, InputGroup } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

const SearchBox = ({ ...rest }) => {

    return (
        <Flex alignItems={"center"}>
            <Box>
                <InputGroup>
                    <InputLeftElement>
                        <Search2Icon
                            boxSize={"14px"}
                            color={useColorModeValue('#16171B', '#676767')}
                        />
                    </InputLeftElement>
                    <Input
                        borderColor={useColorModeValue("#E8E8E8", "#333333")}
                        bgColor={useColorModeValue("#F5F5F7", "#191919")}
                        color={useColorModeValue("#16171B", "#A8ADBD")}
                        fontSize={"12px"}
                        lineHeight={"20px"}
                        letterSpacing={"1.2px"}
                        borderRadius={"3px"}
                        {...rest}
                    />
                </InputGroup>
            </Box>
        </Flex>);
}

export default SearchBox;