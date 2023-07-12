import { Box, Container, Heading, Text } from "@chakra-ui/react";
import React from "react";

const About = () => {
  return <div>
    <Box h="100px" w="1025px" bg="blue.500">
    <Text color="whiteAlpha.900">We Betygfi</Text>
    </Box>
    <Text my="30px" marginLeft="200px">BetygFi is a blockchain analytics platform that enriches on-chain data with millions of wallet labels. Powered By Solvendo. Crypto investors use Nansen to discover opportunities, perform due diligence and defend their portfolios with our real-time dashboards and alerts.</Text>
  </div>;
};

export default About;
