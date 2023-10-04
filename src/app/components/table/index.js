import {
    Accordion,
      AccordionButton,
      AccordionItem,
      AccordionPanel,
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
    import TooltipComp from "/src/app/components/tooltipComp";
    import SkeletonTable from "/src/app/components/skeleton";
    import { SingleAccordionComp } from "/src/app/components/accordion";
  
    const GenericTable = ({ tableHeader, tableData, TableRow, TableHeaderRowMobile, ButtonComp, PanelComp}) => {
      return (
        <>
          <Table variant="simple" key={1} w={{ base: "100%", md: "100%" }} display={{ base: "none", md: "table" }} minW={"1400px"}>
            <Thead bgColor={useColorModeValue("#F5F5F7", "#191919")} position="sticky" top={0}>
              <Tr>
                {tableHeader.map((item, i) => {
                  return (
                    <Th key={i} border={"0px"}>
                      <Flex>
                        <Text variant={"tableHead"} textTransform={"capitalize"} textAlign={"left"}>
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
                          <TooltipComp label={item?.tooltipLabel} />
                        )}
                      </Flex>
                    </Th>
                  );
                })}
              </Tr>
            </Thead>
    
            <Tbody border={"0px"}>
              {tableData?.isError && (
                <>
                  <Tr>
                    <Td p="20px" textAlign={"center"} colSpan={8} opacity={0.6}>
                      <Text variant={"h4"}>
                          No data available
                      </Text>
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
                      />
                    );
                  })
                ) : (
                  <>
                    <Tr>
                      <Td p="20px" textAlign={"center"} colSpan={8} opacity={0.6}>
                        <Text variant={"h4"}>
                            No data available
                        </Text>
                      </Td>
                  </Tr>
                  </>
                ))}
            </Tbody>
          </Table>
  
          <Table variant={"unstyled"} display={{ base: "table", md: "none" }} >
            <Thead bgColor={useColorModeValue("#F5F5F7", "#191919")}>
              <TableHeaderRowMobile />
            </Thead>
    
            <Tbody>
              {tableData?.isError && (
                <Tr>
                  <Td p="20px" textAlign={"center"} colSpan={2} opacity={0.6}>
                    <Text variant={"h4"}>
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
                      <Tr>
                        {/* <Td> */}
                          <SingleAccordionComp
                            display={"flex"}
                            ButtonComp={() => {
                              return (
                                <Box>
                                  HI
                                </Box>
                              )
                            }}
                            PanelComp={() => {
                              return (
                                <Box>
                                  HI
                                </Box>
                              )
                            }}
                          />
                        {/* </Td> */}
                      </Tr>
                      </>
                    );
                  })
                ) : (
                  <Tr>
                    <Td p="20px" textAlign={"center"} colSpan={2} opacity={0.6}>
                      <Text variant={"h4"}>
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
    