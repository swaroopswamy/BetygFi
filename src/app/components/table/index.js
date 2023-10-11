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
  Td,
  useColorModeValue,
  Spinner,
  useColorMode,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import TooltipComp from "/src/app/components/tooltipComp";
import SkeletonTable from "/src/app/components/skeleton";
import { SingleAccordionComp } from "/src/app/components/accordion";
import { HiSortDescending } from "react-icons/hi";

const GenericTable = ({
  tableHeader,
  tableData = null,
  TableRow,
  TableHeaderRowMobile,
  ButtonComp,
  PanelComp,
  SkeletonRowsColumnsDesktop,
  SkeletonRowsColumnsMobile,
  isQueryInPendingState = false,
  bigTable = false,
}) => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Table
        variant="simple"
        key={1}
        w={{ base: "100%", md: "100%" }}
        display={{ base: "none", md: "table" }}
        minW={bigTable ? "1200px" : "unset"}
      >
        <Thead
          bgColor={useColorModeValue("#F5F5F7", "#191919")}
          position="sticky"
          top={0}
          zIndex={"99"}
        >
          <Tr>
            {tableHeader.map((item, i) => {
              return (
                <Th key={i} border={"0px"}>
                  <Box display={"flex"} alignItems={"center"} gap={"3px"}>
                    <Text
                      variant={"tableHead"}
                      textTransform={"capitalize"}
                      textAlign={"left"}
                    >
                      {item.label}
                    </Text>
                    {item.isSortingEnabled && (
                      <Icon as={HiSortDescending} boxSize={"16px"} alt="Sort" />
                    )}
                    {item.isTooltip && (
                      <TooltipComp label={item?.tooltipLabel} />
                    )}
                  </Box>
                </Th>
              );
            })}
          </Tr>
        </Thead>

        <Tbody border={"0px"} bgColor={useColorModeValue("#FFF", "#202020")}>
          {(tableData?.isError || tableData === null) && (
            <>
              <Tr>
                <Td
                  p="20px"
                  textAlign={"center"}
                  height={"245px"}
                  colSpan={SkeletonRowsColumnsDesktop?.numColumns}
                >
                  <Text variant={"noDataText"}>No data available</Text>
                </Td>
              </Tr>
            </>
          )}
          {tableData?.isLoading && (
            <SkeletonTable
              numColumns={SkeletonRowsColumnsDesktop?.numColumns}
              numRows={SkeletonRowsColumnsDesktop?.numRows}
            />
          )}
          {isQueryInPendingState && (
            <Tr>
              <Td
                minH={"212px"}
                colSpan={SkeletonRowsColumnsDesktop?.numColumns}
                textAlign={"center"}
                p="20px"
              >
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <Text variant={"noDataText"} mt="44px" mb="20px">
                    We are retrieving data from the Blockchain.
                  </Text>
                  <Spinner
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="blue.500"
                    size="xl"
                  />
                  <Text variant={"noDataText"} mt="20px" mb="8px">
                    This process might take approximately 2-3 minutes.
                  </Text>
                  <Text variant={"noDataText"} mb="50px">
                    You have the option to wait or return later.
                  </Text>
                </Box>
              </Td>
            </Tr>
          )}
          {tableData?.isSuccess &&
            (tableData?.data?.data?.length > 0 ? (
              tableData?.data?.data.map((item, rowIndex) => {
                return (
                  <TableRow key={rowIndex} item={item} rowIndex={rowIndex} />
                );
              })
            ) : (
              <Tr>
                <Td
                  p="20px"
                  textAlign={"center"}
                  height={"245px"}
                  colSpan={SkeletonRowsColumnsDesktop?.numColumns}
                >
                  <Text variant={"noDataText"}>No data available</Text>
                </Td>
              </Tr>
            ))}
        </Tbody>
      </Table>

      <Table variant={"unstyled"} display={{ base: "table", md: "none" }}>
        <Thead bgColor={useColorModeValue("#F5F5F7", "#191919")}>
          <TableHeaderRowMobile />
        </Thead>

        <Tbody bgColor={useColorModeValue("#FFF", "#202020")}>
          {(tableData?.isError || tableData === null) && (
            <Tr>
              <Td
                p="20px"
                textAlign={"center"}
                height={"245px"}
                colSpan={SkeletonRowsColumnsDesktop?.numColumns}
              >
                <Text variant={"noDataText"}>No data available</Text>
              </Td>
            </Tr>
          )}
          {tableData?.isLoading && (
            <SkeletonTable
              numColumns={SkeletonRowsColumnsMobile.numColumns}
              numRows={SkeletonRowsColumnsMobile.numRows}
            />
          )}

          {tableData?.isSuccess &&
            (tableData?.data?.data?.length > 0 ? (
              tableData?.data?.data.map((item, rowIndex) => {
                return (
                  <Tr key={rowIndex}>
                    <Td p={0} colSpan={3}>
                      <SingleAccordionComp
                        display={"flex"}
                        minH={"50px"}
                        w={"100%"}
                        borderRadius={"0px"}
                        ButtonComp={() => {
                          return <ButtonComp item={item} />;
                        }}
                        PanelComp={() => {
                          return <PanelComp item={item} />;
                        }}
                      />
                    </Td>
                  </Tr>
                );
              })
            ) : (
              <Tr>
                <Td
                  p="20px"
                  textAlign={"center"}
                  height={"245px"}
                  colSpan={SkeletonRowsColumnsDesktop?.numColumns}
                >
                  <Text variant={"noDataText"}>No data available</Text>
                </Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </>
  );
};

export default GenericTable;
