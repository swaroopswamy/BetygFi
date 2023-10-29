"use client";
import React from "react";
import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import CustomNextImage from "../components/customImage/index";
const About = () => {
  return (
    <>
      <Box
        display={{ base: "none", md: "block" }}
        maxWidth={"100%"}
        _dark={{ background: "#191919" }}
        _light={{ background: "#F0F0F5" }}
      >
        <Box background={"linear-gradient(147deg, #009DD8 0%, #0071CE 100%)"}>
          <Box layerStyle={"flexCenterSpaceBetween"}>
            <Text variant={"bigHeading"} pl={"2em"} color={"#FFF"}>
              We BetygFi
            </Text>
            <Box>
              <CustomNextImage
                src="/images/solvendo-bg-logo.svg"
                alt="icon"
                paddingRight={"100px"}
                width={300}
                height={300}
              ></CustomNextImage>
            </Box>
          </Box>
        </Box>
        <Box px={"3em"} pt={"1em"}>
          <Box display={"flex"}>
            <Box layerStyle={"flexCenter"} w="200px">
              <CustomNextImage
                src={useColorModeValue(
                  "/images/solvendo-logo.svg",
                  "/images/solvendo-logo(black).svg"
                )}
                width={161}
                height={127}
                alt=""
                mt={"1em"}
              ></CustomNextImage>
            </Box>
            <Box flex="1">
              <Text
                variant={"content"}
                padding={"20px  70px  0px  0px"}
                mt={17}
              >
                BetygFi is a blockchain analytics platform that enriches
                on-chain data with millions of wallet labels. Powered By
                Solvendo. Crypto investors use BetygFi to discover
                opportunities, perform due diligence and defend their portfolios
                with our real-time dashboards and alerts.
              </Text>
            </Box>
          </Box>

          <Text variant={"contentHeading"} lineHeight={"20px"}>
            About BetygFi
          </Text>

          <Text variant={"content"} mt={5} paddingBottom={19}>
            We believe that BetygFi represents the beginnings of the future of
            finance. With BetygFi, Solvendo is building the future of financial
            data and analytics using large language models.
            <br />
            <br />
            We are grateful for your patronage and invite you walk along with
            us, as we navigate and build global financial ecosystems using out
            learning from BetygFi.
            <br /> <br />
            Decentralised Finance and entities that offer such solutions promise
            to be able to solve for some of the existing inefficiencies of
            traditional finance. However, they present new challenges that are
            significant. We expect and look forward to a regime where such
            entities are regulated by sovereign’s, in the interest of
            stakeholders. BetygFi is designed to be an invaluable tool for such
            regulators and sovereigns.
            <br /> <br />
            However, when speaking about the future of finance, we believe the
            future of finance would require a new approach to regulation that
            engages the consumer or community regularly. BetygFi, leverages the
            best in technology and artificial intelligence to build an approach
            for such engagement. It empowers the consumer with intelligence that
            is trustworthy and easy to consume.
            <br /> <br />
          </Text>
        </Box>
      </Box>

      {/* Mobile Optimization Part */}
      <Box
        display={{ base: "block", md: "none" }}
        maxWidth={"100%"}
        _dark={{ background: "#191919" }}
        _light={{ background: "#F0F0F5" }}
      >
        <Box background={"linear-gradient(147deg, #009DD8 0%, #0071CE 100%)"}>
          <Box layerStyle={"flexSpaceBetween"}>
            <Box padding={"51px 0px 78px 20px"}>
              <Text variant={"bigHeading"} color={"#FFF"}>
                We BetygFi
              </Text>
            </Box>
            <Box padding={"37px 10px 38px 20px"}>
              <CustomNextImage
                src="/images/solvendo-bg-logo.svg"
                width={123}
                height={100}
                alt="icon"
              ></CustomNextImage>
            </Box>
          </Box>
        </Box>
        <Box p={"10px 90px 0px 110px"}>
          <CustomNextImage
            src={useColorModeValue(
              "/images/solvendo-logo.svg",
              "/images/solvendo-logo(black).svg"
            )}
            width={123}
            height={100}
            alt="icon"
          ></CustomNextImage>
        </Box>
        <Box p={"0px 15px 10px 15px"}>
          <Text variant={"content"}>
            BetygFi is a blockchain analytics platform that enriches on-chain
            data with millions of wallet labels. Powered By Solvendo. Crypto
            investors use BetygFi to discover opportunities, perform due
            diligence and defend their portfolios with our real-time dashboards
            and alerts.
          </Text>
        </Box>
        <Text
          variant={"contentHeading"}
          lineHeight={"20px"}
          p={"25px 0px 15px 12px"}
        >
          About BetygFi
        </Text>
        <Text variant={"content"} p={"0px 15px 55px 15px"}>
          We believe that BetygFi represents the beginnings of the future of
          finance. With BetygFi, Solvendo is building the future of financial
          data and analytics using large language models.
          <br />
          <br />
          We are grateful for your patronage and invite you walk along with us,
          as we navigate and build global financial ecosystems using out
          learning from BetygFi.
          <br /> <br />
          Decentralised Finance and entities that offer such solutions promise
          to be able to solve for some of the existing inefficiencies of
          traditional finance. However, they present new challenges that are
          significant. We expect and look forward to a regime where such
          entities are regulated by sovereign’s, in the interest of
          stakeholders. BetygFi is designed to be an invaluable tool for such
          regulators and sovereigns.
          <br /> <br />
          However, when speaking about the future of finance, we believe the
          future of finance would require a new approach to regulation that
          engages the consumer or community regularly. BetygFi, leverages the
          best in technology and artificial intelligence to build an approach
          for such engagement. It empowers the consumer with intelligence that
          is trustworthy and easy to consume.
          <br /> <br />
        </Text>
      </Box>
    </>
  );
};

export default About;
