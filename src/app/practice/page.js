"use client"
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Container,
    Box,
    Table,
        Thead,
        Tbody,
        Tfoot,
        Tr,
        Th,
        Td,
        TableCaption,
        TableContainer, 
        Text,
        Image,
        Flex,
        Spacer
  } from '@chakra-ui/react'
 import React from "react";


const Positions =() => {
    return(
        <>
        <Container maxW={"100%"} padding={"0px"}>
        <Box
        width={"1168px"}
        height={"294px"}
        flexShrink={"0"}
        >
        <Accordion defaultIndex={[0]} allowMultiple>
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
          color={"#16171B"}
          fontSize={"15px"}
          fontStyle={"normal"}
          fontWeight={"400"}
          lineHeight={"20px"}
          ml={"10px"}
          mt={"5px"}
          >
          Uniswap V3
          </Text>
          <Spacer />
          <Text
          color={"#202020"}
          fontSize={"15px"}
          fontStyle={"normal"}
          fontWeight={"400"}
          lineHeight={"20px"}
          mt={"5px"}
          paddingRight={"10px"}
          >
            $24,344,743.06
          </Text>
          <Box
          display={"flex"}
          width={"108px"}
          height={"14px"}
          flexDirection={"column"}
          justifyContent={"center"}
          flexShrink={"0"}
          mt={"8px"}
          mr={"30px"}
          >
            <Text
            color={"#3A3A3A"}
            fontSize={"10px"}
            fontStyle={"normal"}
            fontWeight={"400"}
            lineHeight={"20px"}
            >
              Claimable: $884,938.19
            </Text>
          </Box>
          </Flex>
         </Box>
         <AccordionIcon />
        </AccordionButton>
         </h2>
       <AccordionPanel pb={4}>
    <TableContainer>
  <Table variant='simple'>
    <TableCaption>Imperial to metric conversion factors</TableCaption>
    <Thead>
      <Tr 
      bg={"#F5F5F7"}
      width={"1250px"}
      height={"32px"}
      flex-shrink={"0"}
      >
        <Th isNumeric>Pool</Th>
        <Th isNumeric>Liquidity Range</Th>
        <Th isNumeric>Fees Earned</Th>
        <Th isNumeric>Value(USD)</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td isNumeric>25.4</Td>
      </Tr>
      <Tr>
        <Td>feet</Td>
        <Td>centimetres (cm)</Td>
        <Td isNumeric>30.48</Td>
      </Tr>
      <Tr>
        <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td isNumeric>0.91444</Td>
      </Tr>
    </Tbody>
    <Tfoot>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
    </AccordionPanel>
  </AccordionItem>
  </Accordion>
</Box>

<Box
        width={"1168px"}
        height={"179px"}
        flexShrink={"0"}
        >
        <Accordion defaultIndex={[0]} allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          Fantom
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
  </Accordion>
</Box>

  <Box
        width={"1168px"}
        height={"179px"}
        flexShrink={"0"}
        >
        <Accordion defaultIndex={[0]} allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          Veladrome
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
</Accordion>
</Box>




        </Container>
        </>
    )
};
export default Positions;