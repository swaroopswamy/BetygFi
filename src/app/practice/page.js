"use client"
import {Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Container, Box, Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableContainer, Text, Image, Flex, Spacer, useColorModeValue, textAlign} from '@chakra-ui/react'
import { TriangleDownIcon } from '@chakra-ui/icons'

 import React from "react";

const Positions =() => {
    return(
        <>
        <Container maxW={"100%"} paddingBottom={"80px"} background={useColorModeValue("#F0F0F5","#191919")}>
          <Box
          flex-shrink={"0"}
          filter={"drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.05))"}
          p={"15px"}
          >
        <Accordion defaultIndex={[0]} allowMultiple background={useColorModeValue("#FFF","#202020")}>
          <AccordionItem>
          <h2>
         <AccordionButton>
          <Box as="span" flex='1' textAlign='left'>
          <Flex>
          <Image src="/images/uniswap.svg"
          width={"30px"}
          height={"30px"}
          flexShrink={"0"}
          borderRadius={"150px"}
          ></Image>
          <Text
           color={useColorModeValue("#16171B","#FFFFFF")}
          ml={"10px"}
          mt={"5px"}
          >
          Uniswap V3
          </Text>
          <Spacer />
          <Text
          color={useColorModeValue("#202020","#FFFFFF")}
          mt={"5px"}
          paddingRight={"10px"}
          >
            $24,344,743.06
          </Text>
          <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          flexShrink={"0"}
          mr={"30px"}
          >
            <Text
            color={useColorModeValue("#3A3A3A","#FFFFFF")}
            fontSize={"10px"}
            fontStyle={"normal"}
            fontWeight={"400"}
            lineHeight={"20px"}
            mt={"5px"}
            >
              Claimable: $884,938.19
            </Text>
          </Box>
          <Box mt={"4px"}>
          <Image src={useColorModeValue("/images/Icon.svg","/images/Icon(black).svg")}
          width={"24px"}
          height={"24px"}
          flex-shrink={"0"}
          ></Image>
          </Box>
          </Flex>
          </Box>
        </AccordionButton>
         </h2>
       <AccordionPanel pb={4}>
    <TableContainer>
  <Table variant='simple'>
    <Thead>
      <Tr
      bg={useColorModeValue("#F5F5F7","#191919")}
      width={"100%"}
      flex-shrink={"0"}
      >
        <Th
        color={useColorModeValue("#434347","#A8ADBD")}
        fontFeatureSettings={" 'cv11' on, 'cv01' on, 'ss01' on"}
        fontSize={"10px"}
        fontStyle={"normal"}
        fontWeight={"400"}
        lineHeight={"20px"}
        letterSpacing={"1px"}
        textTransform={"uppercase"}
        textAlign={"left"}
        >
          Pool</Th>
        <Th 
         color={useColorModeValue("#434347","#A8ADBD")}
        fontFeatureSettings={" 'cv11' on, 'cv01' on, 'ss01' on"}
        fontSize={"10px"}
        fontStyle={"normal"}
        fontWeight={"400"}
        lineHeight={"20px"}
        letterSpacing={"1px"}
        textTransform={"uppercase"}
        textAlign={"left"}
        >
          Liquidity Range</Th>
        <Th 
         color={useColorModeValue("#434347","#A8ADBD")}
        fontFeatureSettings={" 'cv11' on, 'cv01' on, 'ss01' on"}
        fontSize={"10px"}
        fontStyle={"normal"}
        fontWeight={"400"}
        lineHeight={"20px"}
        letterSpacing={"1px"}
        textTransform={"uppercase"}
        textAlign={"left"}
        >
          Fees Earned</Th>
        <Th 
         color={useColorModeValue("#434347","#A8ADBD")}
        fontFeatureSettings={" 'cv11' on, 'cv01' on, 'ss01' on"}
        fontSize={"10px"}
        fontStyle={"normal"}
        fontWeight={"400"}
        lineHeight={"20px"}
        letterSpacing={"1px"}
        textTransform={"uppercase"}
        textAlign={"left"}
        >
          Value(USD)</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>
          <Flex>
        <Image src="/images/weth.svg"></Image>
        <Image src="/images/BIT.svg" ml={"-15px"}></Image>
        <Box>
        <Text
        color={useColorModeValue("#16171B","#FFFFFF")}
        fontSize={"11px"}
        fontStyle={"normal"}
        fontWeight={"600"}
        lineHeight={"11px"}
        ml={"10px"}
        mt={"1px"}
        >
         24,278,200.00 BIT  +  6,330.63 WETH (0.3%)
        </Text>
        <Text
        color={useColorModeValue("#000","#A8ADBD")}
        fontSize={"10px"}
        fontStyle={"normal"}
        fontWeight={"400"}
        lineHeight={"12px"}
        opacity={"0.5"}
        ml={"10px"}
        mt={"5px"}
        >
          $23,459,193.41
        </Text>
        </Box>
        </Flex>
        </Td>
        <Td>
          <Flex>
           <Box>
            <Text
            color={useColorModeValue("#16171B","#FFFFFF")}
            fontSize={"10px"}
            fontStyle={"normal"}
            fontWeight={"400"}
            lineHeight={"20px"}
            >
             [2.95428e-39, 3.38492e+38]
            </Text>
            <Text
            color={useColorModeValue("#000","#A8ADBD")}
            fontSize={"10px"}
            fontStyle={"normal"}
            fontWeight={"400"}
            lineHeight={"12px"}
            opacity={"0.5"}
            >
            BIT/WETH
            </Text>
           </Box>
          </Flex>
          </Td>
        <Td>
          <Flex>
          <Image src="/images/BIT.svg" width={"15px"} height={"15px"} flex-shrink={"0"} borderRadius={"150px"} mt={"2px"}></Image>
          <Box
          ml={"5px"}>
            <Text
            color={useColorModeValue("#16171B","#FFFFFF")}
            fontSize={"10px"}
            fontStyle={"normal"}
            fontWeight={"400"}
            lineHeight={"20px"}
            >
              826,329.68 BIT
            </Text>
            <Text
           color={useColorModeValue("#000","#A8ADBD")}
            fontSize={"10px"}
            fontStyle={"normal"}
            fontWeight={"400"}
            lineHeight={"12px"}
            opacity={"0.5"}
            >
            $398,335.53
            </Text>
          </Box>

          <Image src="/images/weth.svg" width={"15px"} height={"15px"} flex-shrink={"0"} borderRadius={"150px"} mt={"2px"} ml={"15px"}></Image>
          <Box
          ml={"5px"}>
            <Text
            color={useColorModeValue("#16171B","#FFFFFF")}
            fontSize={"10px"}
            fontStyle={"normal"}
            fontWeight={"400"}
            lineHeight={"20px"}
            >
              262.03 WETH
            </Text>
            <Text
            color={useColorModeValue("#000","#A8ADBD")}
            fontSize={"10px"}
            fontStyle={"normal"}
            fontWeight={"400"}
            lineHeight={"12px"}
            opacity={"0.5"}
            >
            $486,579.60
            </Text>
          </Box>
          </Flex>
        </Td>
        <Td>
          <Text
          color={useColorModeValue("#16171B","#FFFFFF")}
          font-Size={"10px"}
          fontStyle={"normal"}
          fontWeight={"400"}
          lineHeight={"20px"}
          >
          $24,344,108.54
          </Text>
        </Td>
      </Tr>

      <Tr>
      <Td>
          <Flex>
        <Image src="/images/weth.svg"></Image>
        <Image src="/images/BIT.svg" ml={"-15px"}></Image>
        <Box>
        <Text
        color={useColorModeValue("#16171B","#FFFFFF")}
        fontSize={"11px"}
        fontStyle={"normal"}
        fontWeight={"600"}
        lineHeight={"11px"}
        ml={"10px"}
        mt={"1px"}
        >
         24,278,200.00 BIT  +  6,330.63 WETH (0.3%)
        </Text>
        <Text
        color={useColorModeValue("#000","#A8ADBD")}
        fontSize={"10px"}
        fontStyle={"normal"}
        fontWeight={"400"}
        lineHeight={"12px"}
        opacity={"0.5"}
        ml={"10px"}
        mt={"5px"}
        >
          $23,459,193.41
        </Text>
        </Box>
        </Flex>
        </Td>
        <Td>
          <Flex>
           <Box>
            <Text
            color={useColorModeValue("#16171B","#FFFFFF")}
            fontSize={"10px"}
            fontStyle={"normal"}
            fontWeight={"400"}
            lineHeight={"20px"}
            >
             [2.95428e-39, 3.38492e+38]
            </Text>
            <Text
            color={useColorModeValue("#000","#A8ADBD")}
            fontSize={"10px"}
            fontStyle={"normal"}
            fontWeight={"400"}
            lineHeight={"12px"}
            opacity={"0.5"}
            >
            BIT/WETH
            </Text>
           </Box>
          </Flex>
          </Td>
        <Td>
          <Flex>
          <Image src="/images/BIT.svg" width={"15px"} height={"15px"} flex-shrink={"0"} borderRadius={"150px"} mt={"2px"}></Image>
          <Box
          ml={"5px"}>
            <Text
            color={useColorModeValue("#16171B","#FFFFFF")}
            fontSize={"10px"}
            fontStyle={"normal"}
            fontWeight={"400"}
            lineHeight={"20px"}
            >
              826,329.68 BIT
            </Text>
            <Text
            color={useColorModeValue("#000","#A8ADBD")}
            fontSize={"10px"}
            fontStyle={"normal"}
            fontWeight={"400"}
            lineHeight={"12px"}
            opacity={"0.5"}
            >
            $398,335.53
            </Text>
          </Box>

          <Image src="/images/weth.svg" width={"15px"} height={"15px"} flex-shrink={"0"} borderRadius={"150px"} mt={"2px"} ml={"15px"}></Image>
          <Box
          ml={"5px"}>
            <Text
            color={useColorModeValue("#16171B","#FFFFFF")}
            fontSize={"10px"}
            fontStyle={"normal"}
            fontWeight={"400"}
            lineHeight={"20px"}
            >
              262.03 WETH
            </Text>
            <Text
            color={useColorModeValue("#000","#A8ADBD")}
            fontSize={"10px"}
            fontStyle={"normal"}
            fontWeight={"400"}
            lineHeight={"12px"}
            opacity={"0.5"}
            >
            $486,579.60
            </Text>
          </Box>
          </Flex>
        </Td>
        <Td>
          <Text
          color={useColorModeValue("#16171B","#FFFFFF")}
          font-Size={"10px"}
          fontStyle={"normal"}
          fontWeight={"400"}
          lineHeight={"20px"}
          >
          $24,344,108.54
          </Text>
        </Td>
      </Tr>
      <Tr>
      <Td>
          <Flex>
        <Image src="/images/weth.svg"></Image>
        <Image src="/images/BIT.svg" ml={"-15px"}></Image>
        <Box>
        <Text
        color={useColorModeValue("#16171B","#FFFFFF")}
        fontSize={"11px"}
        fontStyle={"normal"}
        fontWeight={"600"}
        lineHeight={"11px"}
        ml={"10px"}
        mt={"1px"}
        >
         24,278,200.00 BIT  +  6,330.63 WETH (0.3%)
        </Text>
        <Text
        color={useColorModeValue("#000","#A8ADBD")}
        fontSize={"10px"}
        fontStyle={"normal"}
        fontWeight={"400"}
        lineHeight={"12px"}
        opacity={"0.5"}
        ml={"10px"}
        mt={"5px"}
        >
          $23,459,193.41
        </Text>
        </Box>
        </Flex>
        </Td>
        <Td>
          <Flex>
           <Box>
            <Text
            color={useColorModeValue("#16171B","#FFFFFF")}
            fontSize={"10px"}
            fontStyle={"normal"}
            fontWeight={"400"}
            lineHeight={"20px"}
            >
             [2.95428e-39, 3.38492e+38]
            </Text>
            <Text
            color={useColorModeValue("#000","#A8ADBD")}
            fontSize={"10px"}
            fontStyle={"normal"}
            fontWeight={"400"}
            lineHeight={"12px"}
            opacity={"0.5"}
            >
            BIT/WETH
            </Text>
           </Box>
          </Flex>
          </Td>
        <Td>
          <Flex>
          <Image src="/images/BIT.svg" width={"15px"} height={"15px"} flex-shrink={"0"} borderRadius={"150px"} mt={"2px"}></Image>
          <Box
          ml={"5px"}>
            <Text
            color={useColorModeValue("#16171B","#FFFFFF")}
            fontSize={"10px"}
            fontStyle={"normal"}
            fontWeight={"400"}
            lineHeight={"20px"}
            >
              826,329.68 BIT
            </Text>
            <Text
           color={useColorModeValue("#000","#A8ADBD")}
            fontSize={"10px"}
            fontStyle={"normal"}
            fontWeight={"400"}
            lineHeight={"12px"}
            opacity={"0.5"}
            >
            $398,335.53
            </Text>
          </Box>

          <Image src="/images/weth.svg" width={"15px"} height={"15px"} flex-shrink={"0"} borderRadius={"150px"} mt={"2px"} ml={"15px"}></Image>
          <Box
          ml={"5px"}>
            <Text
            color={useColorModeValue("#16171B","#FFFFFF")}
            fontSize={"10px"}
            fontStyle={"normal"}
            fontWeight={"400"}
            lineHeight={"20px"}
            >
              262.03 WETH
            </Text>
            <Text
            color={useColorModeValue("#000","#A8ADBD")}
            fontSize={"10px"}
            fontStyle={"normal"}
            fontWeight={"400"}
            lineHeight={"12px"}
            opacity={"0.5"}
            >
            $486,579.60
            </Text>
          </Box>
          </Flex>
        </Td>
        <Td>
          <Text
          color={useColorModeValue("#16171B","#FFFFFF")}
          font-Size={"10px"}
          fontStyle={"normal"}
          fontWeight={"400"}
          lineHeight={"20px"}
          >
          $24,344,108.54
          </Text>
        </Td>
      </Tr>
    </Tbody>
    <Tfoot>
    </Tfoot>
  </Table>
</TableContainer>
    </AccordionPanel>
  </AccordionItem>
  </Accordion>
  </Box>

      <Box
      flex-shrink={"0"}
      filter={"drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.05))"}
      p={"15px"}
      >
        <Accordion defaultIndex={[0]} allowMultiple background={useColorModeValue("#FFFFFF","#202020")}>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          <Flex>
          <Image src="/images/Fantom.svg"
          width={"30px"}
          height={"30px"}
          flexShrink={"0"}
          borderRadius={"150px"}
          ></Image>
          <Text
           color={useColorModeValue("#202020","#FFFFFF")}
          fontSize={"15px"}
          fontStyle={"normal"}
          fontWeight={"400"}
          lineHeight={"20px"}
          ml={"10px"}
          mt={"5px"}
          >
          Fantom
          </Text>
          <Spacer />
          <Text
          color={useColorModeValue("#202020","#FFFFFF")}
          fontSize={"15px"}
          fontStyle={"normal"}
          fontWeight={"400"}
          lineHeight={"20px"}
          mt={"25px"}
          paddingRight={"20px"}
          >
            $15,664,793.04
          </Text>
          </Flex>
          <Text
          color={useColorModeValue("#202020","#FFFFFF")}
          fontSize={"13px"}
          fontStyle={"normal"}
          fontWeight={"600"}
          lineHeight={"20px"}
          mt={"5px"}
         >
          Savings
          </Text>
        </Box>
        <Box>
          <Image src={useColorModeValue("/images/Icon.svg","/images/Icon(black).svg")}
          width={"24px"}
          height={"24px"}
          flex-shrink={"0"}
          ></Image>
          </Box>
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      <TableContainer>
      <Table variant='simple'>
    <Thead>
      <Tr
      bg={useColorModeValue("#F5F5F7","#191919")}
      width={"100%"}
      flex-shrink={"0"}
      >
        <Th
        color={useColorModeValue("#434347","#A8ADBD")}
        fontFeatureSettings={"'cv11' on, 'cv01' on, 'ss01' on"}
        fontSize={"10px"}
        fontStyle={"normal"}
        fontWeight={"400"}
        lineHeight={"20px"}
        letterSpacing={"1px"}
        textTransform={"uppercase"}
        textAlign={"left"}
        >
          TOken
          </Th>
        <Th 
         color={useColorModeValue("#434347","#A8ADBD")}
        fontFeatureSettings={" 'cv11' on, 'cv01' on, 'ss01' on"}
        fontSize={"10px"}
        fontStyle={"normal"}
        fontWeight={"400"}
        lineHeight={"20px"}
        letterSpacing={"1px"}
        textTransform={"uppercase"}
        textAlign={"left"}
        >
          Balanace
          </Th>
        <Th 
         color={useColorModeValue("#434347","#A8ADBD")}
        fontFeatureSettings={" 'cv11' on, 'cv01' on, 'ss01' on"}
        fontSize={"10px"}
        fontStyle={"normal"}
        fontWeight={"400"}
        lineHeight={"20px"}
        letterSpacing={"1px"}
        textTransform={"uppercase"}
        textAlign={"left"}
        >
          Price
          </Th>
        <Th 
         color={useColorModeValue("#434347","#A8ADBD")}
        fontFeatureSettings={" 'cv11' on, 'cv01' on, 'ss01' on"}
        fontSize={"10px"}
        fontStyle={"normal"}
        fontWeight={"400"}
        lineHeight={"20px"}
        letterSpacing={"1px"}
        textTransform={"uppercase"}
        textAlign={"left"}
        >
          Value(USD)</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>
          <Flex>
            <Image src="/images/BIT.svg"></Image>
            <Text
            color={useColorModeValue("#16171B","#FFFFFF")}
            fontSize={"11px"}
            fontStyle={"normal"}
            fontWeight={"600"}
            lineHeight={"11px"}
            mt={"10px"}
            ml={"10px"}
            >
            DAI
            </Text>
            </Flex>
            </Td>

            <Td>
            <Flex>
            <Text
            color={useColorModeValue("#16171B","#FFFFFF")}
            fontSize={"10px"}
            fontStyle={"normal"}
            fontWeight={"400"}
            lineHeight={"20px"}
            >
            280,161.85DAI
            </Text>
          </Flex>
        </Td>

        <Td>
            <Flex>
            <Text
            color={useColorModeValue("#16171B","#FFFFFF")}
            fontSize={"10px"}
            fontStyle={"normal"}
            fontWeight={"400"}
            lineHeight={"20px"}
            >
            $1.00
            </Text>
          </Flex>
        </Td>

        <Td>
            <Flex>
            <Text
            color={useColorModeValue("#16171B","#FFFFFF")}
            fontSize={"10px"}
            fontStyle={"normal"}
            fontWeight={"400"}
            lineHeight={"20px"}
            >
            $24,344,108.54
            </Text>
          </Flex>
        </Td>
      </Tr>
    </Tbody>
    </Table>
      </TableContainer>
    </AccordionPanel>
  </AccordionItem>
  </Accordion>
  </Box>

      <Box
      flex-shrink={"0"}
      filter={"drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.05))"}
      p={"15px"}
      >
        <Accordion defaultIndex={[0]} allowMultiple background={useColorModeValue("#FFFFFF","#202020")}>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
        <Flex>
          <Image src="/images/Velodrome.svg"
          width={"30px"}
          height={"30px"}
          flexShrink={"0"}
          borderRadius={"150px"}
          ></Image>
          <Text
           color={useColorModeValue("#202020","#FFFFFF")}
          fontSize={"15px"}
          fontStyle={"normal"}
          fontWeight={"400"}
          lineHeight={"20px"}
          ml={"10px"}
          mt={"5px"}
          >
          Velodrome
          </Text>
          <Spacer />
          <Text
          color={useColorModeValue("#202020","#FFFFFF")}
          fontSize={"15px"}
          fontStyle={"normal"}
          fontWeight={"400"}
          lineHeight={"20px"}
          mt={"25px"}
          paddingRight={"20px"}
          >
            $0.664,793
          </Text>
          </Flex>
          <Text
          color={useColorModeValue("#202020","#FFFFFF")}
          fontSize={"13px"}
          fontStyle={"normal"}
          fontWeight={"600"}
          lineHeight={"20px"}
          mt={"5px"}
         >
          Locked
          </Text>
        </Box>
        <Box>
          <Image src={useColorModeValue("/images/Icon.svg","/images/Icon(black).svg")}
          width={"24px"}
          height={"24px"}
          flex-shrink={"0"}
          ></Image>
          </Box>
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <TableContainer>
      <Table variant='simple'>
    <Thead>
      <Tr
      bg={useColorModeValue("#F5F5F7","#191919")}
      width={"100%"}
      flex-shrink={"0"}
      >
        <Th
        color={useColorModeValue("#434347","#A8ADBD")}
        fontFeatureSettings={"'cv11' on, 'cv01' on, 'ss01' on"}
        fontSize={"10px"}
        fontStyle={"normal"}
        fontWeight={"400"}
        lineHeight={"20px"}
        letterSpacing={"1px"}
        textTransform={"uppercase"}
        textAlign={"left"}
        >
          Pool
          </Th>
        <Th 
         color={useColorModeValue("#434347","#A8ADBD")}
        fontFeatureSettings={" 'cv11' on, 'cv01' on, 'ss01' on"}
        fontSize={"10px"}
        fontStyle={"normal"}
        fontWeight={"400"}
        lineHeight={"20px"}
        letterSpacing={"1px"}
        textTransform={"uppercase"}
        textAlign={"left"}
        >
          UNLOCK TIME
          </Th>
        <Th 
         color={useColorModeValue("#434347","#A8ADBD")}
        fontFeatureSettings={" 'cv11' on, 'cv01' on, 'ss01' on"}
        fontSize={"10px"}
        fontStyle={"normal"}
        fontWeight={"400"}
        lineHeight={"20px"}
        letterSpacing={"1px"}
        textTransform={"uppercase"}
        textAlign={"left"}
        >
          Value(USD)
          </Th>
         
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>
          <Flex>
            <Image src="/images/BIT.svg"></Image>
            <Box>
            <Text
            color={useColorModeValue("#16171B","#FFFFFF")}
            fontSize={"11px"}
            fontStyle={"normal"}
            fontWeight={"600"}
            lineHeight={"11px"}
            mt={"3px"}
            ml={"10px"}
            >
            1.00 VELO
            </Text>
            <Text
            color={"#000"}
            fontSize={"10px"}
            fontStyle={"normal"}
            fontWeight={"400"}
            lineHeight={"12px"}
            opacity={"0.5"}
            ml={"10px"}
            mt={"5px"}
            >
             $0.09579
            </Text>
            </Box>
            </Flex>
            </Td>

            <Td>
            <Flex>
            <Text
            color={useColorModeValue("#16171B","#FFFFFF")}
            fontSize={"10px"}
            fontStyle={"normal"}
            fontWeight={"400"}
            lineHeight={"20px"}
            >
            280,161.85DAI
            </Text>
          </Flex>
        </Td>

        <Td>
            <Flex>
            <Text
            color={useColorModeValue("#16171B","#FFFFFF")}
            fontSize={"10px"}
            fontStyle={"normal"}
            fontWeight={"400"}
            lineHeight={"20px"}
            >
            $24,344,108.54
            </Text>
          </Flex>
        </Td>
      </Tr>
    </Tbody>
    </Table>
      </TableContainer>
     </AccordionPanel>
   </AccordionItem>
 </Accordion>
</Box>

         </Container>
    </>
    )
};
export default Positions;