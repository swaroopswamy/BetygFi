"use client";
import {
  Table,
  Text,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Flex,
  Box,
  useColorModeValue,
  Image,
  useColorMode,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import { useState } from "react";
import TableData from "../../../../../util/whales.json";
import millify from "millify";
import { useRouter } from "next/navigation";
const WalletTable = () => {
  return (
    <>
      <Box
        borderRadius={"6px"}
        _light={{ borderColor: "#FFFFFF" }}
        _dark={{ borderColor: "#202020" }}
        overflow={"auto"}
      >
        <Box
          layerStyle={"flexCenterSpaceBetween"}
          padding={{ base: "0px", md: "8px 30px 8px 30px" }}
          background={useColorModeValue("#FFFFFF", "#202020")}
        >
          <Box>
            <Text
              color={useColorModeValue("#16171B", "#FFFFFF")}
              ml={{ base: "14px", md: "10px" }}
              mb={"20px"}
              mt={"20px"}
              fontSize={{ base: "14px", md: "18px" }}
              fontWeight={600}
              lineHeight={"20px"}
              textTransform={"capitalize"}
            >
              Top Value Holders
            </Text>
          </Box>
        </Box>
        <Table
          variant="unstyled"
          display={{ base: "table", md: "none" }}
          size={"sm"}
          border={"1px"}
          borderColor={useColorModeValue("#FFFFFF", "#272727")}
          borderRadius={"6px"}
        >
          <Thead>
            <Tr
              bg={useColorModeValue("#F5F5F7", "#131313")}
              width={"20%"}
              flex-shrink={"0"}
              borderRadius={"6px"}
              position="sticky"
              top={0}
            >
              <Th>
                <Text variant={"tableHead"}>Wallet Address</Text>
              </Th>
              <Th>
                <Text variant={"tableHead"}>Net Worth</Text>
              </Th>
            </Tr>
          </Thead>

          <Tbody>
            {TableData.whales.map((item, i) => {
              return (
                <Tr key={i}>
                  <Td p="0" colSpan={2} borderBottom="none">
                    <Accordion
                      _light={{
                        borderColor: "#DFDFDF",
                      }}
                      _dark={{
                        borderColor: "#DFDFDF",
                      }}
                      borderBottom="none"
                      allowMultiple
                    >
                      <AccordionItem>
                        <h2>
                          <AccordionButton
                            _expanded={{
                              mt: "10px",
                            }}
                          >
                            <Box w="100%" layerStyle={"flexCenter"}>
                              <Image
                                w={"20px"}
                                h={"20px"}
                                style={{ borderRadius: "50%" }}
                                src={`/icons/dummy1.svg`}
                                alt=""
                              ></Image>
                              <Text variant={"h7"} ml="12px">
                                {item?.id.split("").join("").substring(0, 6) +
                                  "..." +
                                  item?.id.slice(-5)}
                              </Text>
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                          <Box layerStyle={"flexColumn"}>
                            <Box layerStyle={"flexColumn"}>
                              <Text variant={"h8"} textAlign={"left"}>
                                Total Tokens
                              </Text>
                              <Box mt="10px" display={"inline-block"}>
                                {item.stats.top_coins.map((item, i) => {
                                  if (i < 3) {
                                    return (
                                      <Box
                                        display={"inline-flex"}
                                        key={i}
                                        padding={"7px 9px"}
                                        pr={"2px"}
                                        mt={"10px"}
                                        _light={{
                                          borderColor: "#E8E8E8",
                                          background: "#F5F5F7",
                                        }}
                                        _dark={{
                                          borderColor: "#E8E8E8",
                                          background: "#202020",
                                        }}
                                        borderRadius={"2px"}
                                        mr={"5px"}
                                        layerStyle={"center"}
                                        gap={"3px"}
                                      >
                                        <Image
                                          w={"14px"}
                                          h={"14px"}
                                          style={{ borderRadius: "50%" }}
                                          src={item.logo_url}
                                          alt=""
                                        ></Image>
                                        <Text
                                          variant={"h9"}
                                          ml={"2px"}
                                          mt={"1px"}
                                          layerStyle={"center"}
                                        >
                                          ${" "}
                                          {millify(item.usd_value, {
                                            precision: 2,
                                            locales: "en-US",
                                          })}
                                        </Text>
                                      </Box>
                                    );
                                  }
                                })}
                              </Box>
                            </Box>
                            <Box mt="10px" layerStyle={"flexColumn"}>
                              <Text variant={"h8"} textAlign={"left"}>
                                Total Protocols
                              </Text>
                              <Text
                                mt="10px"
                                variant={"NAtext"}
                                textAlign={"left"}
                              >
                                -NA-
                              </Text>
                            </Box>
                            <Box mt="10px" layerStyle={"flexColumn"}>
                              <Text variant={"h8"} textAlign={"left"}>
                                Total NFT collections
                              </Text>
                              <Text
                                mt="10px"
                                variant={"NAtext"}
                                textAlign={"left"}
                              >
                                -NA-
                              </Text>
                            </Box>
                          </Box>
                        </AccordionPanel>
                      </AccordionItem>
                    </Accordion>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>

        <Table
          variant="unstyled"
          minW={"1048px"}
          display={{ base: "none", md: "table" }}
          size={"sm"}
          border={"1px"}
          borderColor={useColorModeValue("#FFFFFF", "#272727")}
          borderRadius={"6px"}
        >
          <Thead>
            <Tr
              bg={useColorModeValue("#F5F5F7", "#131313")}
              width={"20%"}
              flex-shrink={"0"}
              borderRadius={"6px"}
            >
              <Th>
                <Text variant={"tableHead"} textAlign={"left"}>
                  Wallet Address
                </Text>
              </Th>
              <Th width={"50%"}>
                <Text variant={"tableHead"} textAlign={"left"}>
                  Total Tokens
                </Text>
              </Th>
              <Th>
                <Text variant={"tableHead"} textAlign={"left"}>
                  Total Protocols
                </Text>
              </Th>
            </Tr>
          </Thead>

          <Tbody>
            {TableData.whales.map((item, i) => {
              return (
                <>
                  <TableRow
                    key={i}
                    user={item.id}
                    netWorth={item.usd_value}
                    totalTokens={item.stats.top_coins}
                    totalProtocols={"-"}
                    totalNFT={""}
                  />
                </>
              );
            })}
          </Tbody>
        </Table>
      </Box>
    </>
  );
};

export default WalletTable;

function TableRow({ key, user, totalTokens, totalProtocols }) {
  const [clicked, setClick] = useState(false);
  const { colorMode } = useColorMode();
  const router = useRouter();
  return (
    <Tr
      key={key}
      cursor={"pointer"}
      bgColor={
        clicked
          ? colorMode === "light"
            ? "#F5F5F7"
            : "#191919"
          : colorMode === "light"
          ? "#FFFFFF"
          : "#202020"
      }
      onClick={() => {
        setClick(!clicked);
        router.push(`/wallet_dashboard?address=${user}`);
      }}
      borderBottom={"1px"}
      borderColor={useColorModeValue("#DFDFDF", "#313131")}
      borderRadius={"2px"}
    >
      <Td>
        <Flex>
          <Box>
            <Text variant={"h7"}>
              {user?.split("").join("").substring(0, 8) +
                "....." +
                user?.slice(-5)}
            </Text>
          </Box>
        </Flex>
      </Td>

      <Td>
        <Flex>
          {totalTokens.map((item, i) => {
            if (i < 3) {
              return (
                <Box
                  key={i}
                  padding={"7px 9px"}
                  minw="150px"
                  _light={{
                    borderColor: "#E8E8E8",
                    background: "#F5F5F7",
                  }}
                  _dark={{
                    borderColor: "#333333",
                    background: "202020",
                  }}
                  borderRadius={"2px"}
                  mr={"5px"}
                  layerStyle={"center"}
                  gap={"3px"}
                >
                  <Image
                    w={"20px"}
                    h={"20px"}
                    style={{ borderRadius: "50%" }}
                    src={item.logo_url}
                    alt=""
                  ></Image>
                  <Text variant={"h9"} ml={"10px"} mt={"1px"}>
                    ${" "}
                    {millify(item.usd_value, {
                      precision: 2,
                      locales: "en-US",
                    })}
                  </Text>
                </Box>
              );
            }
          })}
        </Flex>
      </Td>

      <Td>
        <Flex>
          <Box>
            <Text variant={"h7"}>{totalProtocols}</Text>
          </Box>
        </Flex>
      </Td>
    </Tr>
  );
}
