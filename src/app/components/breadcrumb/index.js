import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { useRouter } from "next/navigation";

function Breadcrumb({ link, text, additionalText, name }) {
  const router = useRouter();

  return (
    <Box
      display={{ base: "none", md: "flex" }}
      alignItems={"center"}
      cursor={"pointer"}
      onClick={() => router.push(link)}
      ml={"35px"}
      pt={"12px"}
      pb={"9px"}
    >
      <ChevronLeftIcon
        w={"24px"}
        h={"24px"}
        borderRadius={"50%"}
        border={useColorModeValue("1px solid #E1E1E1", "1px solid #333333")}
      />
      <Text
        ml={"9px"}
        variant={"h4"}
        letterSpacing={"1.2px"}
        textTransform={"capitalize"}
      >
        {text}
      </Text>

      <Text variant={"h4"} letterSpacing={"1.2px"} textTransform={"capitalize"}>
        {name !== undefined ? additionalText : "No Name"}
      </Text>
    </Box>
  );
}

export default Breadcrumb;
