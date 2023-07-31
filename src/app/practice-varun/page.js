"use client"
//import { Image } from '@chakra-ui/next-js';
import { Container, Image, Table, useColorModeValue, Text, Flex, Box, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer, Heading } from '@chakra-ui/react'

const Transaction = () => {
  return (
    <>
      <Flex justifyContent={"space-between"} padding={"23px 29px 27px"}>
        <Text
          fontSize="2xl"
          fontWeight={"400"}
          color={useColorModeValue("#16171B", "#FFF")}
        >
          Wallet Transaction
        </Text>
      </Flex>
      <Table variant="simple" key={1}>
        <Thead bgColor={useColorModeValue("#F5F5F7", "#191919")}>
          <Tr>
            <Th
              color={useColorModeValue("#434347", "#A8ADBD")}
              fontSize={"10px"}
              fontWeight={"400"}
              letterSpacing={"1px"}
              alignItems={"center"}
            >
              ADDRESS AND DATE
            </Th>
            <Th
              color={useColorModeValue("#434347", "#A8ADBD")}
              fontSize={"10px"}
              fontWeight={"400"}
              letterSpacing={"1px"}
            >
              METHOD
            </Th>
            <Th
              color={useColorModeValue("#434347", "#A8ADBD")}
              fontSize={"10px"}
              fontWeight={"400"}
              letterSpacing={"1px"}
            >
              ACCOUNT / TOKEN
            </Th>
            <Th
              color={useColorModeValue("#434347", "#A8ADBD")}
              fontSize={"10px"}
              fontWeight={"400"}
              letterSpacing={"1px"}
            >
              FROM
            </Th>
            <Th
              color={useColorModeValue("#434347", "#A8ADBD")}
              fontSize={"10px"}
              fontWeight={"400"}
              letterSpacing={"1px"}
            >
              TO
            </Th>
            <Th
              color={useColorModeValue("#434347", "#A8ADBD")}
              fontSize={"10px"}
              fontWeight={"400"}
              letterSpacing={"1px"}
            >
              USD Value
            </Th>
          </Tr>
        </Thead>
        <Tbody>

          <>
            <Tr>
              <Td>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                >
                  <>
                    <img
                      width={20}
                      height={20}
                      alt='logo'
                      src="/images/t1.png"
                    ></img>
                  </>

                  <Box>
                    <Text
                      color={useColorModeValue("#16171B", "#FFF")}
                      fontSize={"10px"}
                      fontWeight={"400"}
                      letterSpacing={"1px"}
                      ml="6px"
                    >
                      0x8b4d84......43f72
                    </Text>
                    <Text opacity={"0.6000000238418579"}
                      color={useColorModeValue("#16171B", "#FFF")}
                      fontSize={"10px"}
                      fontWeight={"400"}
                      letterSpacing={"1px"}
                      ml="6px"
                    >11th May 2023</Text>
                  </Box>
                </Box>

              </Td>


              <Td>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                >
                  <>
                    <img
                      width={12}
                      height={12}
                      alt='logo'
                      src="/images/recieved.png"
                    ></img>
                  </>

                  <Text
                    color={useColorModeValue("#16171B", "#FFF")}
                    fontSize={"10px"}
                    fontWeight={"400"}
                    letterSpacing={"1px"}
                    ml="6px"
                  >
                    Received
                  </Text>
                </Box>
              </Td>


              <Td>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                >
                  <>
                    <img
                      width={12}
                      height={12}
                      alt='logo'
                      src="/images/polygon-matic.png"
                    ></img>
                  </>

                  <Text
                    color={useColorModeValue("#16171B", "#FFF")}
                    fontSize={"10px"}
                    fontWeight={"400"}
                    letterSpacing={"1px"}
                    ml="6px"
                  >
                    MATIC
                  </Text>
                  <Text opacity={"0.6000000238418579"}
                    color={useColorModeValue("#16171B", "#FFF")}
                    fontSize={"10px"}
                    fontWeight={"400"}
                    letterSpacing={"1px"}
                    ml="6px"
                  >49.11%</Text>
                </Box>
              </Td>


              <Td>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                >
                  <Text
                    color={useColorModeValue("#16171B", "#FFF")}
                    fontSize={"10px"}
                    fontWeight={"400"}
                    letterSpacing={"1px"}
                    ml="6px"
                  >
                    CRV+cvxCRV (0x971a…)
                  </Text>
                </Box>
              </Td>

              <Td>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                >
                  <Text
                    color={useColorModeValue("#16171B", "#FFF")}
                    fontSize={"10px"}
                    fontWeight={"400"}
                    letterSpacing={"1px"}
                    ml="6px"
                  >
                    CRV+cvxCRV (0x971a…)
                  </Text>
                </Box>
              </Td>

              <Td>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                >
                  <Text
                    color={useColorModeValue("#245F00", "#FFF")}
                    fontSize={"10px"}
                    fontWeight={"600"}
                    letterSpacing={"1px"}
                    ml="6px"
                  >
                    +300 USD
                  </Text>
                </Box>
              </Td>
            </Tr>
          </>
        </Tbody>
      </Table>
    </>
  )
}

export default Transaction;