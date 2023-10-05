"use client";
import {
  Text, Td, Th, Tr, Box, useColorModeValue,useColorMode, Collapse, useDisclosure
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import isEmpty from "is-empty";
import '/styles/styles.scss';

import GenericTable from "/src/app/components/table";
import SearchBox from "/src/app/components/searchBox";
import TooltipComp from "/src/app/components/tooltipComp";
import { tableHeader } from "/src/app/components/pages/dashboard/helper";
import PageButtons from "/src/app/components/pageButtons";
import { MobileSearchBox } from "/src/app/components/mobileSearchBox";

import {
  fetchDefiRankingTableData,
} from "@/redux/dashboard_data/dataSlice";
import { Search2Icon } from "@chakra-ui/icons";
import { useRouter } from "next/navigation";

const Rankings = () => {
  const [tablePage, setTablePage] = useState(1);
  const [searchByName, setSearchByName] = useState('');
  const { isOpen: isMobileRankingsSearchOpen, onToggle: onMobileRankingsSearchToggle } = useDisclosure();

  const dispatch = useDispatch();

  const blockchainSelected = useSelector(
    (state) => state?.dashboardTableData?.blockchainType
  );
  const categorySelected = useSelector(
    (state) => state?.dashboardTableData?.categorySelected
  );

  const tableData = useSelector((state) => state?.dashboardTableData.DefiRankingsTableData);

  const pageChangeHandler = (page) => {
    tablePage >= 1 && setTablePage(page);
  }

  const searchByNameHandler = (name) => {
    setSearchByName(name);
    setTablePage(1);
  }

  const getDefiRankingsTableDataHandler = () => {
    if (!isEmpty(searchByName)) {
      const payload = {
        name: searchByName,
        page: tablePage,
      };
      dispatch(fetchDefiRankingTableData(payload));
    } else {
      const payload = {
        blockchain: blockchainSelected,
        category: categorySelected,
        page: tablePage,
      };
      dispatch(fetchDefiRankingTableData(payload));
    }
  };

  useEffect(() => {
    getDefiRankingsTableDataHandler();
  }, [blockchainSelected, categorySelected, tablePage, searchByName]);

  return (
    <Box layerStyle={"flexColumn"} bg={useColorModeValue('#FFFFFF', '#202020')} borderRadius={"6px"} mb={{base: "100px", md: "60px"}}>
      <Box layerStyle={"spaceBetween"} p={"20px"} h={"75px"}>
        <Text variant={"h2"}>
          Defi Rankings
        </Text>

        <Box display={{base: "none", md: "flex"}} justifyContent={"center"} alignItems={"center"}>
          <SearchBox
            placeholder={"Search Defi"}
            onChange={(e) => {
              searchByNameHandler(e.target.value)
            }}
          />
        </Box>

        <Box display={{base: "flex", md: "none"}} justifyContent={"center"} alignItems={"center"} cursor={"pointer"}
          onClick={onMobileRankingsSearchToggle}
        >
          <Search2Icon
            boxSize={"16px"}
            color={useColorModeValue('#16171B', '#FFFFFF')}
          />
        </Box>

      </Box>

      <Collapse in={isMobileRankingsSearchOpen} animateOpacity={"true"}>
            <MobileSearchBox
              placeholder="Search DeFi"
              onChange={(e) => {
                searchByNameHandler(e.target.value)
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
        />
      </Box>


      <Box display={"flex"} alignItems={"center"} justifyContent={"right"} h={"50px"} p={"40px"}>
        <PageButtons
          page={tablePage}
          totalPages={tableData?.data?.totalPages}
          pageChangeHandler={pageChangeHandler}
        />
      </Box>
    </Box>
  );
};

export default Rankings;

const TableRow = ( {item, rowIndex} ) => {
  const { colorMode } = useColorMode();
  const router = useRouter();

  return (
    <Tr 
      key={rowIndex} 
      cursor={item.name === "AAVE V2" ? "pointer" : "cursor"}
      onClick={() => {
        if (item.name === "AAVE V2")
          router.push(`/defi_dashboard?defi=${item?.slug}&id=${item._id}`);
      }}
      border={"0px"}
    >
      <Td key={0}>
        <Text variant={"h3"}>
          {item?.Rank === undefined ? '-' : item?.Rank}
        </Text>
      </Td>
      <Td key={1}>
        <Box layerStyle={"flexCenter"} w={"120px"} gap={"10px"}>
          {!isEmpty(item.logo) ?
            (
              <>
                <Image
                  width={24}
                  height={24}
                  style={{ borderRadius: "50%" }}
                  alt='logo'
                  src={item.logo}
                ></Image>
              </>
            )
            :
            (
              <>
                <Box
                  width={"24px"}
                  height={"24px"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  display={"flex"}
                  borderRadius={"50%"}
                  bgColor={useColorModeValue("#676DFF")}
                >
                  <Text
                    color={"#FFF"}
                    fontSize={"14px"}
                    fontWeight={600}
                  >
                    {item.name.charAt(0)}
                  </Text>
                </Box>
              </>
            )
          }
          <Box layerStyle="center">
            <Text variant={"h3"}>
              {item.name}
            </Text>
            {item.name === "AAVE V2" && <Image
              width={18}
              height={18}
              alt='logo'
              style={{ marginLeft: "10px" }}
              src={colorMode === 'light' ? ('/images/wallet_analytics_white.svg') : ('/images/wallet_analytics_black.svg')}
            >
            </Image>
            }
          </Box>
        </Box>
      </Td>
      <Td key={2}>
        <Text variant={"h3"}>
          {item.category}
        </Text>
      </Td>
      <Td key={3}>
        <Text variant={"h3"}>
          {(Math.trunc(item.tvl)).toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD'
              })}
          </Text>
      </Td>
      <Td key={4}>
        <Text variant={"h3"}>
          {(Math.trunc(item.tvl)).toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD'
            })}
        </Text>
      </Td>
      <Td key={5}>
        <Text variant={"h3"}>
          {!isEmpty(item.mcap) ? `${(Math.trunc(item.mcap)).toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
          })}` : "NA"}
        </Text>
      </Td>
      <Td key={6}>
        <Text variant={"h3"}>
          {!isEmpty(item.mcap) && item.tvl !== 0 ? (item.mcap / item.tvl).toFixed(2) : "NA"}
        </Text>
      </Td>
      <Td key={7}>
        <Box layerStyle={"center"} h="100%" gap={"5px"}>
          {
            item?.safety_score === undefined ? '-' : (
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
                <Text variant={"h3"}>
                  {item?.safety_score?.toFixed(0)}
                </Text>
              </>
            )}
        </Box>
      </Td>
    </Tr>
  )
}

const TableHeaderRowMobile = () => {
  return (
    <Tr>
      <Th border={"0px"} w={"20px"}>
        <Text variant={"tableHead"}>
          Rank
        </Text>
      </Th>
      <Th border={"0px"}>
        <Text variant={"tableHead"}>
          Name
        </Text>
      </Th>
      <Th border={"0px"}>
        <Text variant={"tableHead"}>
          Score
        </Text>
      </Th>
    </Tr>
  )
}

const ButtonComp = ( {item} ) => {
  return (
    <Box display={"flex"} w="100%" justifyContent={"space-between"} alignItems={"center"} ml={"20px"}>
        <Box display={"flex"} w={"50%"} justifyContent={"start"}>
          <Text variant={"h3"}> {item?.Rank === undefined ? '-' : item?.Rank} </Text>

          <Box layerStyle={"center"} gap={"10px"} ml={"50px"}>
            <Image
              width={24}
              height={24}
              style={{ borderRadius: "50%" }}
              alt='logo'
              src={item.logo}
            ></Image>
            <Text variant={"h3"}> {item?.name} </Text>
          </Box>
        </Box>

        <Box w={"50%"} layerStyle={"center"} justifyContent={"center"} gap={"5px"}>
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
          <Text variant={"h3"}> {item?.Rank === undefined ? '-' : item?.Rank} </Text>
        </Box>
    </Box>
  )
}

const PanelComp = ( {item} ) => {
  return (
    <Box display={"flex"} flexDir={"column"} alignItems={"left"} w="100%" gap={"15px"}>
        <Box display={"flex"} alignItems={"center"} justifyContent={"start"} gap={"10px"}>
          <Box display={"flex"} alignItems={"center"} justifyContent={"start"} w={"40%"}>
              <Text variant='tableHead'> Category </Text>
              <TooltipComp label="Category outlines the type of the services the DeFi provides"/>
          </Box>

          <Text variant={"h3"} textAlign={"left"}>
            {item.category}
          </Text>
        </Box>

        <Box display={"flex"} alignItems={"center"} justifyContent={"start"} gap={"10px"}>
          <Box display={"flex"} alignItems={"center"} justifyContent={"start"} w={"40%"}>
              <Text variant='tableHead'> Price </Text>
              <TooltipComp label="Market price of the DeFi token" />
          </Box>

          <Text variant={"h3"} textAlign={"left"}>
            {(Math.trunc(item.price)).toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD'
              })}
          </Text>
        </Box>

        <Box display={"flex"} alignItems={"center"} justifyContent={"start"} gap={"10px"}>
          <Box display={"flex"} alignItems={"center"} justifyContent={"start"} w={"40%"}>
              <Text variant='tableHead'> TVL </Text>
              <TooltipComp label="Total value locked (TVL) is the real-time value of the assets that the DeFi holds" />
          </Box>

          <Text variant={"h3"} textAlign={"left"}>
            {(Math.trunc(item.tvl)).toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD'
              })}
          </Text>
        </Box>

        <Box display={"flex"} alignItems={"center"} justifyContent={"start"} gap={"10px"}>
          <Box display={"flex"} alignItems={"center"} justifyContent={"start"} w={"40%"}>
              <Text variant='tableHead'> MCap </Text>
              <TooltipComp label="Market capitalization of the DeFi is the total value of tokens of the DeFi" />
          </Box>

          <Text variant={"h3"} textAlign={"left"}>
            {!isEmpty(item.mcap) ? `${(Math.trunc(item.mcap)).toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD'
            })}` : "NA"}
          </Text>
        </Box>

        <Box display={"flex"} alignItems={"center"} justifyContent={"start"} gap={"10px"}>
          <Box display={"flex"} alignItems={"center"} justifyContent={"start"} w={"40%"}>
              <Text variant='tableHead'> MCap/TVL </Text>
              <TooltipComp label="The MCAP/TVL Ratio show the difference between the total value of the token issued by the DeFi (Market Value of the DeFi) and the total value of assets of the DeFi" />
          </Box>

          <Text variant={"h3"} textAlign={"left"}>
            {!isEmpty(item.mcap) && item.tvl !== 0 ? (item.mcap / item.tvl).toFixed(2) : "NA"}
          </Text>
        </Box>

    </Box>
  )
}
