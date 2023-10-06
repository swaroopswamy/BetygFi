"use client";
import React, { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Container,
  UnorderedList,
  ListItem,
  Center,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";

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
            <Text variant={"bigHeading"} pl={"2em"}>
              We BetygFi
            </Text>
            <Box>
              <Image
                src="/images/solvendo-bg-logo.svg"
                alt="icon"
                paddingRight={"100px"}
              ></Image>
            </Box>
          </Box>
        </Box>
        <Box px={"3em"} pt={"1em"}>
          <Box display={"flex"}>
            <Box layerStyle={"flexCenter"} w="200px">
              <Image
                src={useColorModeValue(
                  "/images/solvendo-logo.svg",
                  "/images/solvendo-logo(black).svg"
                )}
                width={"161px"}
                height={"127px"}
                alt=""
                mt={"1em"}
              ></Image>
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

          <Text variant={"contentHeading"}>About BetygFi</Text>

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
        <Box
          width={"100%"}
          height={"175px"}
          flexShrink={0}
          background={"linear-gradient(147deg, #009DD8 0%, #0071CE 100%)"}
        >
          <Box
            w={"100%"}
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}
          >
            <Box
              color={"#FFFFFF"}
              fontSize={"36px"}
              fontWeight={400}
              lineHeight={"46px"}
              padding={"51px 0px 78px 20px"}
            >
              We BetygFi
            </Box>
            <Box padding={"37px 10px 38px 20px"}>
              <Image
                src="/images/solvendo-bg-logo.svg"
                width={"123.284px"}
                height={"100px"}
                flexShrink={0}
                alt="icon"
                //mt={"30px"}
              ></Image>
            </Box>
          </Box>
        </Box>
        <Box p={"10px 90px 0px 110px"}>
          <Image
            src={useColorModeValue(
              "/images/solvendo-logo.svg",
              "/images/solvendo-logo(black).svg"
            )}
            width={"161px"}
            height={"127px"}
            alt=""
          ></Image>
        </Box>
        <Box p={"0px 15px 10px 15px"}>
          <Text
            _dark={{ color: "#FFFFFF" }}
            _light={{ color: "#191919" }}
            fontSize={"14px"}
            fontWeight={400}
            lineHeight={"26px"}
            opacity={"0.8"}
            //mt={17}
          >
            BetygFi is a blockchain analytics platform that enriches on-chain
            data with millions of wallet labels. Powered By Solvendo. Crypto
            investors use BetygFi to discover opportunities, perform due
            diligence and defend their portfolios with our real-time dashboards
            and alerts.
          </Text>
        </Box>
        <Heading
          _dark={{ color: "#F0F0F5" }}
          _light={{ color: "#191919" }}
          fontSize={"18px"}
          fontWeight={500}
          lineHeight={"normal"}
          p={"10px 0px 10px 20px"}
        >
          About BetygFi
        </Heading>
        <Text
          _dark={{ color: "#F0F0F5" }}
          _light={{ color: "#191919" }}
          fontSize={"14px"}
          fontStyle={"normal"}
          fontWeight={400}
          lineHeight={"26px"}
          opacity={"0.8"}
          p={"0px 15px 55px 15px"}
        >
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
