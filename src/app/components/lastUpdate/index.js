import { Box, Text } from "@chakra-ui/react"

const LastUpdate = ({ time, ...rest }) => {
    return (
        <Box display={"flex"} alignItems={"center"} justifyContent={"end"} gap={"10px"} {...rest}>
            <Text color={"#A8ADBD"} fontSize={"12px"} fontWeight={400} lineHeight={"20px"}>
                Last Update
            </Text>
            <Text variant={"h6"}>
                {time} mins ago
            </Text>
        </Box>
    )
}

export default LastUpdate;