"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Text,
  Td,
  Th,
  Tr,
  Box,
  useColorModeValue,
  useColorMode,
  Collapse,
  useDisclosure,
  Button,
  Avatar,
  Tooltip,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Search2Icon } from "@chakra-ui/icons";
import { useRouter } from "next/navigation";
import isEmpty from "is-empty";
import dynamic from "next/dynamic";

const GenericTable = dynamic(() => import("@/app/components/table"));
const SearchBox = dynamic(() => import("@/app/components/searchBox"));
const PageButtonsWide = dynamic(() =>
  import("@/app/components/pageButtonsWide")
);

import {
  tableHeader,
  DefiRankingTableDesktop,
  DefiRankingTableMobile,
} from "@/app/components/pages/dashboard/helper";
import { MobileSearchBox } from "@/app/components/mobileSearchBox";
import { fetchDefiRankingTableData } from "@/redux/dashboard_data/dataSlice";

const Rankings = () => {
  const [tablePage, setTablePage] = useState(1);
  const [tableLimit, setTableLimit] = useState(20);

  const timerRef = useRef(null);

  const [searchByName, setSearchByName] = useState("");
  const {
    isOpen: isMobileRankingsSearchOpen,
    onToggle: onMobileRankingsSearchToggle,
  } = useDisclosure();

  const dispatch = useDispatch();

  const blockchainSelected = useSelector(
    (state) => state?.dashboardTableData?.blockchainType
  );

  const categorySelected = useSelector(
    (state) => state?.dashboardTableData?.categorySelected
  );

  const tableData = useSelector(
    (state) => state?.dashboardTableData.DefiRankingsTableData
  );

  const pageChangeHandler = (page) => {
    setTablePage(page);
  };

  const searchByNameHandler = (name) => {
    setSearchByName(name);
    setTablePage(1);
  };

  const getDefiRankingsTableDataHandler = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      if (!isEmpty(searchByName)) {
        const payload = {
          name: searchByName,
          page:
            tablePage >= 1 &&
            tablePage <= tableData?.data?.totalPages &&
            tablePage,
          limit: tableLimit,
        };
        dispatch(fetchDefiRankingTableData(payload));
      } else {
        const payload = {
          blockchain: blockchainSelected,
          category: categorySelected,
          page:
            tablePage >= 1 &&
            tablePage <= tableData?.data?.totalPages &&
            tablePage,
          limit: tableLimit,
        };
        dispatch(fetchDefiRankingTableData(payload));
      }
    }, 1000);
  };

  useEffect(() => {
    getDefiRankingsTableDataHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    blockchainSelected,
    categorySelected,
    tablePage,
    searchByName,
    tableLimit,
  ]);

  return (
    <Box
      layerStyle={"flexColumn"}
      bg={useColorModeValue("#FFFFFF", "#202020")}
      borderRadius={"6px"}
      mb={{ base: "100px", md: "20px" }}
    >
      <Box layerStyle={"spaceBetween"} p={"20px"} h={"75px"}>
        <Text variant={"h2"}>DeFi Rankings</Text>

        <Box
          display={{ base: "none", md: "flex" }}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <SearchBox
            placeholder={"Search DeFi"}
            onChange={(e) => {
              searchByNameHandler(e.target.value);
            }}
          />
        </Box>

        <Box
          display={{ base: "flex", md: "none" }}
          justifyContent={"center"}
          alignItems={"center"}
          cursor={"pointer"}
          onClick={onMobileRankingsSearchToggle}
        >
          <Search2Icon
            boxSize={"16px"}
            color={useColorModeValue("#16171B", "#FFFFFF")}
          />
        </Box>
      </Box>

      <Collapse in={isMobileRankingsSearchOpen} animateOpacity={"true"}>
        <MobileSearchBox
          placeholder="Search DeFi"
          onChange={(e) => {
            searchByNameHandler(e.target.value);
          }}
        />
      </Collapse>

      <Box display={"flex"} overflowX={"auto"}>
        <GenericTable
          tableHeader={tableHeader}
          tableData={tableData}
          TableRow={TableRow}
          TableHeaderRowMobile={TableHeaderRowMobile}
          ButtonComp={ButtonComp}
          PanelComp={PanelComp}
          SkeletonRowsColumnsDesktop={DefiRankingTableDesktop}
          SkeletonRowsColumnsMobile={DefiRankingTableMobile}
        />
      </Box>

      <Box display={"flex"} minH={"60px"} p={{ base: "10px", md: "5px 20px" }}>
        <PageButtonsWide
          page={tablePage}
          totalPages={tableData?.data?.totalPages}
          pageChangeHandler={pageChangeHandler}
          tableLimit={tableLimit}
          setTableLimit={setTableLimit}
          time={3}
          w={"100%"}
        />
      </Box>
    </Box>
  );
};

export default Rankings;

const TableRow = ({ item, rowIndex }) => {
  const { colorMode } = useColorMode();
  const router = useRouter();

  return (
    <Tr
      key={rowIndex}
      cursor={"pointer"}
      onClick={() => {
        router.push(`/defi_dashboard?defi=${item?.slug}&id=${item._id}`);
      }}
      border={"0px"}
    >
      <Td key={0} textAlign={"center"}>
        <Text variant={"h3"}>
          {item?.Rank === undefined ? "-" : item?.Rank}
        </Text>
      </Td>
      <Td key={1}>
        <Box
          display={"flex"}
          alignItems={"center"}
          width={"120px"}
          gap={"10px"}
        >
          <Avatar
            width={"24px"}
            height={"24px"}
            style={{ borderRadius: "50%" }}
            name={item?.name}
            src={item?.logo}
          ></Avatar>

          <Box display={"flex"} alignItems={"stretch"} gap={"8px"}>
            <Text variant={"h3"}>{item?.name}</Text>

            <Box layerStyle={"center"} flexShrink={"0"}>
              <Tooltip label="chains" as={ChainsTooltip} chains={item?.chains}>
                <Text
                  fontSize={"12px"}
                  color={useColorModeValue("#000000", "#FFFFFF")}
                  opacity={"0.5"}
                >
                  {item?.chains?.length} Chains
                </Text>
              </Tooltip>
            </Box>
          </Box>
        </Box>
      </Td>
      <Td key={2}>
        <Text variant={"h3"}>{item.category}</Text>
      </Td>
      <Td key={3}>
        <Text variant={"h3"}>
          {item.price?.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </Text>
      </Td>
      <Td key={4}>
        <Text variant={"h3"}>
          {Math.trunc(item.tvl).toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </Text>
      </Td>
      <Td key={5}>
        {!isEmpty(item.mcap) ? (
          <Text variant={"h3"}>
            {Math.trunc(item.mcap).toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </Text>
        ) : (
          <Text variant={"h3"}>NA</Text>
        )}
      </Td>
      <Td key={6}>
        {!isEmpty(item.mcap) && item.tvl !== 0 ? (
          <Text variant={"h3"}>{(item.mcap / item.tvl).toFixed(2)}</Text>
        ) : (
          <Text variant={"h3"}>NA</Text>
        )}
      </Td>
      <Td key={7}>
        <Box layerStyle={"center"} h="100%" gap={"5px"}>
          {item?.safety_score === undefined ? (
            "-"
          ) : (
            <>
              <Box
                w="12px"
                h="9px"
                borderRadius={"30px"}
                mr={"4px"}
                bgColor={
                  item.safety_score >= 75
                    ? "#9ADA8A"
                    : item.safety_score < 75 && item.safety_score >= 50
                    ? "#FFD976"
                    : item.safety_score < 50 && item.safety_score >= 25
                    ? "#FFB287"
                    : "#FF7373"
                }
              ></Box>
              <Text variant={"h3"}>{item?.safety_score?.toFixed(0)}</Text>
            </>
          )}
        </Box>
      </Td>
    </Tr>
  );
};

const TableHeaderRowMobile = () => {
  return (
    <Tr>
      <Th border={"0px"} w={"20px"}>
        <Text variant={"tableHead"}>Rank</Text>
      </Th>
      <Th border={"0px"}>
        <Text variant={"tableHead"}>Name</Text>
      </Th>
      <Th border={"0px"}>
        <Text variant={"tableHead"}>Score</Text>
      </Th>
    </Tr>
  );
};

const ButtonComp = ({ item }) => {
  return (
    <Box
      display={"flex"}
      w="100%"
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Box
        display={"flex"}
        w={"50%"}
        justifyContent={"start"}
        alignItems={"center"}
        mx={"20px"}
      >
        <Text variant={"h3"}>
          {" "}
          {item?.Rank === undefined ? "-" : item?.Rank}{" "}
        </Text>

        <Box layerStyle={"center"} gap={"10px"} ml={"30px"}>
          <Avatar
            width={"24px"}
            height={"24px"}
            style={{ borderRadius: "50%" }}
            name={item?.name}
            src={item?.logo}
          ></Avatar>

          <Box
            layerStyle={"flexColumn"}
            justifyContent={"start"}
            minW={"100px"}
            textAlign={"left"}
          >
            <Text variant={"h3"}> {item?.name} </Text>
            <Text
              fontSize={"12px"}
              color={useColorModeValue("#000000", "#FFFFFF")}
              opacity={"0.5"}
            >
              {item?.chains?.length} Chains
            </Text>
          </Box>
        </Box>
      </Box>

      <Box
        w={"50%"}
        layerStyle={"center"}
        justifyContent={"center"}
        gap={"5px"}
      >
        <Box
          w="12px"
          h="9px"
          borderRadius={"30px"}
          mr={"4px"}
          bgColor={
            item.safety_score >= 75
              ? "#9ADA8A"
              : item.safety_score < 75 && item.safety_score >= 50
              ? "#FFD976"
              : item.safety_score < 50 && item.safety_score >= 25
              ? "#FFB287"
              : "#FF7373"
          }
        ></Box>
        <Text variant={"h3"}>
          {" "}
          {item?.safety_score?.toFixed(0) === undefined ? "-" : item?.safety_score?.toFixed(0)}{" "}
        </Text>
      </Box>
    </Box>
  );
};

const PanelComp = ({ item }) => {
  const router = useRouter();

  return (
    <Box
      display={"flex"}
      flexDir={"column"}
      alignItems={"left"}
      w="100%"
      gap={"15px"}
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"start"}
        gap={"10px"}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"start"}
          w={"40%"}
        >
          <Text variant="tableHead"> Category </Text>
          {/* <TooltipComp label="Category outlines the type of the services the DeFi provides" /> */}
        </Box>

        <Text variant={"h3"} textAlign={"left"}>
          {item.category}
        </Text>
      </Box>

      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"start"}
        gap={"10px"}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"start"}
          w={"40%"}
        >
          <Text variant="tableHead"> Price </Text>
          {/* <TooltipComp label="Market price of the DeFi token" /> */}
        </Box>

        <Text variant={"h3"} textAlign={"left"}>
          {item.price?.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </Text>
      </Box>

      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"start"}
        gap={"10px"}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"start"}
          w={"40%"}
        >
          <Text variant="tableHead"> TVL </Text>
          {/* <TooltipComp label="Total value locked (TVL) is the real-time value of the assets that the DeFi holds" /> */}
        </Box>

        <Text variant={"h3"} textAlign={"left"}>
          {Math.trunc(item.tvl).toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </Text>
      </Box>

      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"start"}
        gap={"10px"}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"start"}
          w={"40%"}
        >
          <Text variant="tableHead"> MCap </Text>
          {/* <TooltipComp label="Market capitalization of the DeFi is the total value of tokens of the DeFi" /> */}
        </Box>

        <Text variant={"h3"} textAlign={"left"}>
          {!isEmpty(item.mcap) ? (
            `${Math.trunc(item.mcap).toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}`
          ) : (
            <>NA</>
          )}
        </Text>
      </Box>

      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"start"}
        gap={"10px"}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"start"}
          w={"40%"}
        >
          <Text variant="tableHead"> MCap/TVL </Text>
          {/* <TooltipComp label="The MCAP/TVL Ratio show the difference between the total value of the token issued by the DeFi (Market Value of the DeFi) and the total value of assets of the DeFi" /> */}
        </Box>

        <Text variant={"h3"} textAlign={"left"}>
          {!isEmpty(item.mcap) && item.tvl !== 0 ? (
            (item.mcap / item.tvl).toFixed(2)
          ) : (
            <>NA</>
          )}
        </Text>
      </Box>

      <Box layerStyle={"center"}>
        <Button
          variant="link"
          onClick={() => {
            router.push(`/defi_dashboard?defi=${item?.slug}&id=${item._id}`);
          }}
        >
          Open Dashboard
        </Button>
      </Box>
    </Box>
  );
};

const ChainsTooltip = ({ chains }) => {
  return (
    <Box
      layerStyle={"flexColumn"}
      minW={"140px"}
      p={"10px 20px"}
      bgColor={useColorModeValue("#FFFFFF", "#202020")}
      boxShadow={useColorModeValue(
        "0px 5px 4px 0px rgba(0, 0, 0, 0.10)",
        "0px 5px 4px 0px rgba(200, 200, 200, 0.10)"
      )}
      borderColor={useColorModeValue("#F0F0F5", "#333333")}
      borderRadius={"8px"}
      gap={"15px"}
    >
      {chains?.map((chain, i) => {
        return (
          <Box layerStyle={"flexCenter"} key={i} gap={"10px"}>
            <Avatar
              width={"24px"}
              height={"24px"}
              name={chain?.name}
              src={chain?.logoUrl}
            ></Avatar>

            <Text variant={"h4"} fontSize={"14px"}>
              {" "}
              {chain?.name}{" "}
            </Text>
          </Box>
        );
      })}
    </Box>
  );
};
