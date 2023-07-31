"use client"
import React, { useState } from "react";
import { Box, Flex, Heading, Text, Container, UnorderedList, ListItem, Center, Image, useColorModeValue } from "@chakra-ui/react";

const About = () => {
  return (
    <Container
      maxWidth={"100%"}
      background={useColorModeValue("#F0F0F5","#191919")}
      padding={"0px"}
    > 
      <Box
        background={"linear-gradient(147deg, #009DD8 0%, #0071CE 100%)"}
        >
          <Box display={"flex"}
                flexDirection={"row"}
                justifyContent={"space-between"}>
            <Box
              color={"#FFFFFF"}
              fontSize={"46px"}
              padding={"90px 0px 80px 60px"}
            >
              We Betygfi
            </Box>
            <Box>
            <Image src="/images/solvendo-bg-logo.svg" 
             paddingRight={"100px"}></Image>
            </Box>
            </Box>
      </Box>

      <Flex>
        <Center w='200px'>
          <Image src={useColorModeValue("/images/Solvendo-logo.svg","/images/solvendo-logo(black).svg")} width={"161px"} height={"127px"} alt="" mt={"20px"} ml={"59px"} bg={useColorModeValue("#F0F0F5","#191919")}></Image>
        </Center>
        <Box flex='1'>
          <Text
            color={useColorModeValue("#191919", "#FFFFFF")}
            fontSize={"16px"}
            fontStyle={"normal"}
            fontWeight={"400"}
            lineHeight={"26px"}
            opacity={"0.800000011920929"}
            padding={"20px  70px  0px  30px"}
            mt={17}>
            BetygFi is a blockchain analytics platform that enriches on-chain data with millions of wallet labels. Powered By Solvendo. Crypto investors use Nansen to discover opportunities, perform due diligence and defend their portfolios with our real-time dashboards and alerts.
          </Text>
        </Box>
      </Flex>

      <Heading
        color={useColorModeValue("#191919", "#FFFFFF")}
        fontSize={"24px"}
        fontStyle={"normal"}
        fontWeight={"400"}
        lineHeight={"20px"}
        ml={59}
        mt={19}>
        Why is the platform called BetygFi?
      </Heading>

      <Text
        color={useColorModeValue("#191919", "#FFFFFF")}
        fontSize={"16px"}
        fontStyle={"normal"}
        fontWeight={"400"}
        lineHeight={"26px"}
        opacity={"0.800000011920929"}
        ml={59}
        mt={5}
        mr={40}>
        Fsce eu quam in tortor pretium pulvinar. Cras euismod, nisi in ultricies ornare, libero sapien bibendum nunc, ut placerat purus sem at nisl. Nullam nec commodo enim. Etiam sollicitudin ante nec dolor luctus dictum. Praesent eget arcu ac massa euismod tempus. Phasellus ornare felis vel fermentum blandit. Sed vel dignissim tortor, a tincidunt quam.mattis odio ac justo ullamcorper pretium. Donec vitae gravida arcu, eget consequat mi. Maecenas pellentesque quam felis, at gravida odio semper eget. In efficitur lacus at eleifend iaculis. Vivamus ac ipsum nulla. Pellentesque eu tempor magna, ut consequat nunc.
      </Text>


      <Heading
        color={useColorModeValue("#191919", "#FFFFFF")}
        fontSize={"24px"}
        fontStyle={"normal"}
        fontWeight={"400"}
        lineHeight={"20px"}
        ml={59}
        mt={10}>
        Our core values  are
      </Heading>

      <Flex h={59}
        ml={59}
        mt={10}
        mb={10}
        mr={20}
        justify="space-around"
        bg={useColorModeValue("#FFFFFF","#303030")}>
        <Box p={4}>
          <Text color={useColorModeValue("#191919", "#FFFFFF")}>Transparency</Text>
        </Box>
        <Image src={useColorModeValue("/images/Line(Light).svg","/images/Line(Dark).svg")} width={"1px"} height={"38px"} mt={"10px"}></Image> 
        <Box p={4}>
          <Text color={useColorModeValue("#191919", "#FFFFFF")}>Courage</Text>
        </Box>
        <Image src={useColorModeValue("/images/Line(Light).svg","/images/Line(Dark).svg")} width={"1px"} height={"38px"} mt={"10px"}></Image>
        <Box p={4}>
          <Text color={useColorModeValue("#191919", "#FFFFFF")}>Curiosity</Text>
        </Box>
        <Image src={useColorModeValue("/images/Line(Light).svg","/images/Line(Dark).svg")} width={"1px"} height={"38px"} mt={"10px"}></Image>
        <Box p={4}>
          <Text color={useColorModeValue("#191919", "#FFFFFF")}>Speed</Text>
        </Box>
      </Flex>

      <Heading
        color={useColorModeValue("#191919", "#FFFFFF")}
        fontSize={"24px"}
        fontStyle={"normal"}
        fontWeight={"400"}
        lineHeight={"20px"}
        ml={59}>
        How do you get the wallet labels?
      </Heading>
      <Box
        ml={59}
        mt={8} mr={40}>
        <Text
          color={useColorModeValue("#191919", "#FFFFFF")}
          fontSize={"16px"}
          fontStyle={"normal"}
          fontWeight={"400"}
          lineHeight={"26px"}
          opacity={"0.800000011920929"}
          paddingTop={"0px"}
          paddingBottom={"15px"}
        >
          We use a variety of methods to label wallets, including
        </Text>
        <UnorderedList>
          <ListItem
            color={useColorModeValue("#191919", "#FFFFFF")}
            fontSize={"16px"}
            fontStyle={"normal"}
            fontWeight={"400"}
            lineHeight={"26px"}
            opacity={"0.800000011920929"}
            paddingBottom={"10px"}
          >
            Heuristics and algorithms
          </ListItem>
          <ListItem
            color={useColorModeValue("#191919", "#FFFFFF")}
            fontSize={"16px"}
            fontStyle={"normal"}
            fontWeight={"400"}
            lineHeight={"26px"}
            opacity={"0.800000011920929"}
            paddingBottom={"10px"}
          >
            Smart-contract parsing and analysis
          </ListItem>
          <ListItem
            color={useColorModeValue("#191919", "#FFFFFF")}
            fontSize={"16px"}
            fontStyle={"normal"}
            fontWeight={"400"}
            lineHeight={"26px"}
            opacity={"0.800000011920929"}
            paddingBottom={"10px"}
          >
            Investigations and research by our team
          </ListItem>
          <ListItem
            color={useColorModeValue("#191919", "#FFFFFF")}
            fontSize={"16px"}
            fontStyle={"normal"}
            fontWeight={"400"}
            lineHeight={"26px"}
            opacity={"0.800000011920929"}
            paddingBottom={"10px"}
          >
            User submissions  .... and more
          </ListItem>
        </UnorderedList>
        <Text
          color={useColorModeValue("#191919", "#FFFFFF")}
          fontSize={"16px"}
          fontStyle={"normal"}
          fontWeight={"400"}
          lineHeight={"26px"}
          opacity={"0.800000011920929"}
          paddingTop={"5px"}
          paddingBottom={"7.5px"}
        >
          We aim for extremely high precision, meaning we'd rather not label an address than label it incorrectly.
        </Text>
      
        <Text
          color={useColorModeValue("#191919", "#FFFFFF")}
          fontSize={"16px"}
          fontStyle={"normal"}
          fontWeight={"400"}
          lineHeight={"26px"}
          opacity={"0.800000011920929"}
          padding-top={"7.5px"}
        >
          One key thing to realize is that there is a very strong network effect in adding wallet labels. If we know that wallet X is of type A, and wallet Y is of type B, then if wallet Z interacts with X and Y in a certain way, we can sometimes infer that Z is of type C. The consequence is that every wallet label we add to our platform can help us infer even more wallet labels.For the on-chain data itself, we rely heavily on the open source project Ethereum ETL. The main contributors to Ethereum ETL are members of the Nansen core team.
        </Text>
      </Box>

      <Heading
        color={useColorModeValue("#191919", "#FFFFFF")}
        fontSize={"24px"}
        fontStyle={"normal"}
        fontWeight={"400"}
        lineHeight={"20px"}
        ml={59}
        mt={12}>
        Backed by the best
      </Heading>

      <Flex>
        <Box width={"94.488px"} height={"20px"} ml={"59px"} mt={"50px"} mb={"75px"}>
          <Image src={useColorModeValue("/images/ACCEL.svg","/images/ACCEL(black).svg")}></Image>
        </Box>
        <Box  width={"49.587px"} height={"20px"} ml={"50px"} mt={"45px"}>
        <Image src={useColorModeValue("/images/A16Z.svg","/images/A16Z(black).svg")}></Image>
        </Box>
        <Box  width={"144px"} height={"14px"} ml={"50px"} mt={"45px"}>
        <Image src={useColorModeValue("/images/TigerGlobal.svg","/images/TigerGlobal(black).svg")}></Image>
        </Box>
        <Box  width={"106.557px"} height={"27px"} ml={"50px"} mt={"45px"}>
        <Image src={useColorModeValue("/images/Skyfall.svg","/images/Skyfall(black).svg")}></Image>
        </Box>
        <Box  width={"79.47px"} height={"30px"} ml={"50px"} mt={"45px"}>
        <Image src={useColorModeValue("/images/MechanismCapital.svg","/images/MechanismCapital(black).svg")}></Image>
        </Box>
        <Box  width={"66.712px"} height={"33px"} ml={"50px"} mt={"45px"}>
        <Image src={useColorModeValue("/images/SCB.svg","/images/SCB(black).svg")}></Image>
        </Box>
        <Box  width={"60.403px"} height={"30px"} ml={"50px"} mt={"45px"}>
        <Image src={useColorModeValue("/images/GIC.svg","/images/GIC(black).svg")}></Image>
        </Box>
      </Flex>
    </Container>
  )
};

export default About;
