"use client"
//import { Image } from '@chakra-ui/next-js';
import { Container, Image, Table, useColorModeValue, Text, Flex, Box, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer, Heading } from '@chakra-ui/react'

const Transaction = () => {
  return (
    <>
      <Container maxW={"100%"}
        padding={"0px"}>
        <Box>
          <Heading>Wallet Transaction</Heading>

          <Table variant='simple'>
            <Thead>
              <Tr color={useColorModeValue("#16171B", "#FFFFFF")}
                background={useColorModeValue("#F5F5F7", "#191919")}
                font-feature-settings={"'cv11' on, 'cv01' on, 'ss01' on"}
                font-size={"10px"}
                font-style={"normal"}
                font-weight={"400"}
                line-height={"20px"}
                letter-spacing={"1px"}
                textTransform={"uppercase"}>
                <Th>Address and Date</Th>
                <Th>Method </Th>
                <Th>Amount  / Token </Th>
                <Th>From</Th>
                <Th>To</Th>
                <Th isNumeric>USD value</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>

                <Td>
                  <Flex>
                    <Image src={"/images/t1.png"} alt=''></Image>
                    <Box color={useColorModeValue("#16171B", "#FFFFFF")}
                      font-feature-settings={"'cv11' on, 'cv01' on, 'ss01' on"}
                      font-size={"10px"}
                      font-style={"normal"}
                      font-weight={"400"}
                      line-height={"20px"}
                      paddingLeft={"18px"}>
                      <Text>0x8b4d84......43f72</Text>
                      <Text opacity={"0.6000000238418579"}>11th May 2023</Text>
                    </Box>
                  </Flex>
                </Td>

                <Td>
                  <Flex flexDirection={"row"}>
                    <Image src={"/images/recieved.png"} alt=''></Image>
                    <Box color={useColorModeValue("#16171B", "#FFFFFF")}
                      font-feature-settings={"'cv11' on, 'cv01' on, 'ss01' on"}
                      font-size={"10px"}
                      font-style={"normal"}
                      font-weight={"400"}
                      line-height={"20px"}
                      paddingLeft={"6px"}>
                      <Text>Received</Text>
                    </Box>
                  </Flex>
                </Td>

                <Td>
                  <Flex>
                    <Image src={"/images/polygon-matic.png"} alt=''></Image>
                    <Box color={useColorModeValue("#16171B", "#FFFFFF")}
                      font-feature-settings={"'cv11' on, 'cv01' on, 'ss01' on"}
                      font-size={"10px"}
                      font-style={"normal"}
                      font-weight={"400"}
                      line-height={"20px"}
                      paddingLeft={"6px"}>
                      <Text>MATIC</Text>
                    </Box>
                    <Box>49.11%</Box>
                  </Flex>
                </Td>

                <Td>
                  <Flex>
                    <Box color={useColorModeValue("#16171B", "#FFFFFF")}
                      font-feature-settings={"'cv11' on, 'cv01' on, 'ss01' on"}
                      font-size={"10px"}
                      font-style={"normal"}
                      font-weight={"400"}
                      line-height={"20px"}>
                      CRV+cvxCRV (0x971a…)
                    </Box>
                  </Flex>
                </Td>

                <Td>
                  <Flex>
                    <Box color={useColorModeValue("#16171B", "#FFFFFF")}
                      font-feature-settings={"'cv11' on, 'cv01' on, 'ss01' on"}
                      font-size={"10px"}
                      font-style={"normal"}
                      font-weight={"400"}
                      line-height={"20px"}>
                      CRV+cvxCRV (0x971a…)
                    </Box>
                  </Flex>
                </Td>

                <Td isNumeric>
                  <Flex>
                    <Box color={"#245F00"}
                      font-feature-settings={"'cv11' on, 'cv01' on, 'ss01' on"}
                      font-size={"10px"}
                      font-style={"normal"}
                      font-weight={"600"}
                      line-height={"20px"}>
                      +300 USD
                    </Box>
                  </Flex>
                </Td>
              </Tr>


            </Tbody>
          </Table>
        </Box>
      </Container >
    </>
  )
}

export default Transaction;