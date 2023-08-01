"use client"
import { Container, Table, Thead,Text, Tbody,useColorModeValue,Box, Tfoot, Tr, Th, Td, TableCaption, TableContainer, Flex } from '@chakra-ui/react'

const TransactionPanelComponent = () => {

  const value1 = "300" ;
  const value2="200";
  const value3 = "-300";
  return (
    <>
      <Flex justifyContent={"space-between"} padding={"23px 29px 27px"}
             bgColor={useColorModeValue("#FFF","#202020")} >
        <Text
          fontSize="2xl"
          fontWeight={"400"}
          color={useColorModeValue("#16171B", "#FFF")}
          
          
        >
          Wallet Transaction
        </Text>
      </Flex>
      <Table variant="simple" key={1} bgColor={"#FFF"}>
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
            <Th>
              <Box  display={"flex"}
                  alignItems={"center"}>
              <Text  color={useColorModeValue("#434347", "#A8ADBD")}
              fontSize={"10px"}
              fontWeight={"400"}
              letterSpacing={"1px"}
              mr="6px">
              METHOD
              </Text>
             
              <>
              <img  width={6}
                    height={6}
                    alt='logo'
                    src={useColorModeValue("/images/updown-triangleicon-light.png","/images/updown-triangleicon-dark.png")}>
              </img>
              </>
              </Box>
            </Th>


            <Th>
              <Box  display={"flex"}
                  alignItems={"center"}>

              <Text  color={useColorModeValue("#434347", "#A8ADBD")}
              fontSize={"10px"}
              fontWeight={"400"}
              letterSpacing={"1px"}
              mr="6px"
              >
              ACCOUNT/TOKEN
               </Text>
              <>
              <img  width={8}
                    height={8}
                    alt='logo'
                    src={useColorModeValue("/images/updown-triangleicon-light.png","/images/updown-triangleicon-dark.png")}>
              </img>
              </>
              </Box>
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
        <Tbody  bgColor={useColorModeValue("#FFF","#202020")}>

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
                    fontSize={"10px"}
                    fontWeight={"600"}
                    letterSpacing={"1px"}
                    ml="6px"
                    color={value1 < 0 ? "#EF1E1E" : "#245F00"}
                  >
                     {value1 >= 0 ? `+${value1} USD` : `${value1} USD`} 
                  </Text>
                </Box>
              </Td>
            </Tr>
         


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
                      src="/images/t2.png"
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
                      src="/images/deposit.png"
                    ></img>
                  </>

                  <Text
                    color={useColorModeValue("#16171B", "#FFF")}
                    fontSize={"10px"}
                    fontWeight={"400"}
                    letterSpacing={"1px"}
                    ml="6px"
                  >
                    Deposit ETH
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
                    fontSize={"10px"}
                    fontWeight={"600"}
                    letterSpacing={"1px"}
                    ml="6px"
                    color={value2 < 0 ? "#EF1E1E" : "#245F00"}
                  >
                    {value2 >= 0 ? `+${value2} USD` : `${value2} USD`} 
                  </Text>
                </Box>
              </Td>
            </Tr>
          </>




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
                      src="/images/t3.png"
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
                      src="/images/sent.png"
                    ></img>
                  </>

                  <Text
                    color={useColorModeValue("#16171B", "#FFF")}
                    fontSize={"10px"}
                    fontWeight={"400"}
                    letterSpacing={"1px"}
                    ml="6px"
                  >
                    Sent
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
                    fontSize={"10px"}
                    fontWeight={"600"}
                    letterSpacing={"1px"}
                    ml="6px"
                    color={value3 < 0 ? "#EF1E1E" : "#245F00"}
                  >
                   {value3 >= 0 ? `+${value3} USD` : `${value3} USD`} 
                  </Text>
                </Box>
              </Td>
            </Tr>
          </>


          </>
        </Tbody>

      </Table>
    </>
  )
}

export default TransactionPanelComponent;