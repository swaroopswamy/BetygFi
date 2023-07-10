import { Box } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <>
      <Box
        position={"absolute"}
        bottom="0"
        width="100%"
        display="flex"
        justifyContent="center"
        backgroundColor="#000"
        padding={2}
      >
        Footer
      </Box>
    </>
  );
};

export default Footer;
