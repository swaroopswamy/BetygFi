import {
  Box,
  Flex,
  Image,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import GenericInfoTooltip from "../infoTooltip";

import SkeletonTable from "../skeleton";
import { SingleAccordionComp } from "../accordion";
const GenericTable = ({
  thread,
  tableData,
  TableRow,
  TableHeaderRowMobile,
  ButtonComp,
  PanelComp,
}) => {
  return (
    <>
      <Table
        variant="simple"
        key={1}
        w={{ base: "100%", md: "100%" }}
        display={{ base: "none", md: "table" }}
        minW={"1400px"}
      >
        <Thead
          bgColor={useColorModeValue("#F5F5F7", "colors.primary.black.4")}
          position="sticky"
          top={0}
        >
          <Tr>
            {thread.map((item, i) => {
              return (
                <Th key={i}>
                  <Flex>
                    <Text
                      _light={{
                        color: "#16171B",
                        opacity: "0.8",
                      }}
                      _dark={{ color: "colors.primary.gray.5" }}
                      fontSize={"14px"}
                      fontFamily={"Manrope"}
                      fontStyle={"normal"}
                      fontWeight={"400"}
                      lineHeight={"20px"}
                      letterSpacing={"1px"}
                      textTransform={"capitalize"}
                      textAlign={"left"}
                    >
                      {item.label}
                    </Text>
                    {item.isSortingEnabled && (
                      <Image
                        mt={"2px"}
                        src={useColorModeValue(
                          "/images/Arrowdown(light).svg",
                          "/images/Arrowdown(dark).svg"
                        )}
                        alt="Sort"
                        ml="2"
                      />
                    )}
                    {item.isTooltip && (
                      <GenericInfoTooltip label={item?.tooltipLabel} />
                    )}
                  </Flex>
                </Th>
              );
            })}
          </Tr>
        </Thead>

        <Tbody>
          {tableData?.isError && (
            <>
              <Tr>
                <Td
                  color={useColorModeValue("colors.primary.dark.3", "#FFF")}
                  fontSize={"20px"}
                  fontWeight={"400"}
                  letterSpacing={"1px"}
                  p="20px"
                  textAlign={"center"}
                  colSpan={8}
                  opacity={0.6}
                >
                  No data available
                </Td>
              </Tr>
            </>
          )}
          {tableData?.isLoading && (
            <>
              <SkeletonTable numColumns={8} numRows={3} />
            </>
          )}

          {tableData.isSuccess &&
            (tableData.data?.data?.length > 0 ? (
              tableData.data?.data.map((item, rowIndex) => {
                return (
                  <TableRow
                    item={item}
                    rowIndex={rowIndex}
                    tableData={tableData}
                  />
                );
              })
            ) : (
              <>
                <Tr>
                  <Td
                    color={useColorModeValue("colors.primary.dark.3", "#FFF")}
                    fontSize={"20px"}
                    fontWeight={"400"}
                    letterSpacing={"1px"}
                    colSpan={8}
                    textAlign={"center"}
                    p="20px"
                    opacity={0.6}
                  >
                    No data available
                  </Td>
                </Tr>
              </>
            ))}
        </Tbody>
      </Table>
      <Table
        variant={"unstyled"}
        bgColor={useColorModeValue(
          "colors.primary.white.4",
          "colors.primary.black.3"
        )}
        borderRadius={"6px"}
        display={{ base: "table", md: "none" }}
      >
        <Thead
          bg={useColorModeValue(
            "colors.primary.gray.14",
            "colors.primary.black.4"
          )}
        >
          <TableHeaderRowMobile />
        </Thead>

        <Tbody>
          {tableData?.isError && (
            <Tr>
              <Td colSpan={2}>
                <Text
                  _dark={{
                    color: "colors.primary.white.4",
                  }}
                  _light={{
                    color: "colors.primary.dark.3",
                  }}
                  className="bigtable-nodata"
                >
                  No data available
                </Text>
              </Td>
            </Tr>
          )}
          {tableData?.isLoading && (
            <>
              <SkeletonTable numColumns={3} numRows={3} />
            </>
          )}

          {tableData.isSuccess &&
            (tableData.data?.data?.length > 0 ? (
              tableData.data?.data.map((item, rowIndex) => {
                return (
                  <>
                    <SingleAccordionComp
                      display={{ base: "flex", md: "none" }}
                      minH={"50px"}
                      ButtonComp={ButtonComp}
                      PanelComp={PanelComp}
                      item={item}
                      rowIndex={rowIndex}
                     
                    />
                  </>
                );
              })
            ) : (
              <Tr>
                <Td colSpan={2}>
                  <Text
                    _dark={{
                      color: "colors.primary.white.4",
                    }}
                    _light={{
                      color: "colors.primary.dark.3",
                    }}
                    className="bigtable-nodata"
                  >
                    No data available
                  </Text>
                </Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </>
  );
};

export default GenericTable;
