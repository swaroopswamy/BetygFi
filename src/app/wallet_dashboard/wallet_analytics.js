"use client";
import { Box, Flex, Image, Text, Table, Thead, Tbody, Tr, Th, Td, TableContainer, useColorMode, colorMode, Tooltip, Skeleton } from '@chakra-ui/react';
import React from 'react'
import AssetAllocationPieChart from './AssetAllocationPieChart';
import AssetTrendSplineChart from './AssetTrendSplineChart';
import PerformanceMultiLineChart from './PerformanceMultiLineChart';
import BlockchainAllocationTreemapChart from './BlockchainAllocationTreemapChart';
import { useSelector } from 'react-redux';
import isEmpty from "is-empty";
import dynamic from "next/dynamic";
import ProtocolAllocationTable from './ProtocolAllocationTable';
import InteractionWithKnownEntitiesTable from './InteractionWithKnownEntitiesTable';
import InflowTokensTable from './InflowTokensTable';
import OutflowTokensTable from './OutflowTokensTable';

const SkeletonRow = () => (
  <Box as="tr">
    <Td>
      <Skeleton height="10px" my={4} />
    </Td>
    <Td>
      <Skeleton height="10px" my={4} />
    </Td>
    <Td>
      <Skeleton height="10px" my={4} />
    </Td>
  </Box>
)

const USDollar = new Intl.NumberFormat('en-US');

export {SkeletonRow, USDollar};

const WalletAnalyticsPanel = () => {
  const { colorMode } = useColorMode();
  const inflowOutflowTokensData = useSelector((state) => state?.walletDashboardTableData?.inflowOutflowTokensForAddress);

  return (
    <>
      <Box
        display={"flex"}
        flexDir={{base: "column", md: "row"}}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"20px"}
        w="100%"
        my="20px"
      >

        <Box
          w={{base: "90%", md:"50%"}}
          display={"flex"}
          flexDirection={"column"}
          borderRadius={"6px"}
          _dark={{
            bg: "#202020",
          }}
          _light={{
            bg: "#FFFFFF",
          }}
          height={"380px"}
        >
          <Box
            display="flex"
            justifyContent={"space-between"}
            alignItems={"center"}
            p="22px 25px"
          >
            <Text
              fontSize={"18px"}
              fontWeight={"600"}
              lineHeight={"20px"}
              _dark={{ color: "#FFF" }}
              _light={{ color: "#212121" }}
            >
              Blockchain Allocation
            </Text>

            {/*   <Button
              fontSize={"10px"}
              fontWeight={400}
              lineHeight={"20px"}
              _dark={{ color: "#FFF", bgColor: "#191919", border: "1px solid #979AA5" }}
              _light={{ color: "#16171B", bgColor: "#979AA5", border: "1px solid #787878" }}
              padding={"7px 11px"}
            >
              View More
            </Button> */}

          </Box>

          <Box
            paddingLeft={"15px"}
          >
            <BlockchainAllocationTreemapChart />
          </Box>
        </Box>

        <Box
          w={{base: "90%", md: "50%"}}
          display={"flex"}
          flexDirection={"column"}
          borderRadius={"6px"}
          _dark={{
            bg: "#202020",
          }}
          _light={{
            bg: "#FFFFFF",
          }}
          height={"380px"}
        >
          {/* <Box
            display="flex"
            p="22px 25px"
          > */}
          <Flex
            height={"30px"}
            borderRadius={"6px"}
            _dark={{
              bg: "#202020",
              color: "#FFFFFF"
            }}
            _light={{
              bg: "#FFFFFF",
              color: "#16171B"
            }} >
            <Text
              fontSize={"18px"}
              fontWeight={"600"}
              lineHeight={"20px"}
              _dark={{ color: "#FFF" }}
              _light={{ color: "#212121" }}
              mt={"20px"}
              ml={"25px"}
            >
              Assets Allocation
            </Text>
            <>
              <Tooltip label="Assets allocation talks about the value distribution among different assets.">
                <Image width={"12px"}
                  height={"12px"}
                  flexShrink={"0"}
                  mt={"25px"}
                  ml={"5px"}
                  alt=''
                  src="/images/Frame.svg">
                </Image>
              </Tooltip>
            </>
          </Flex>
          {/* </Box> */}
          <Box
            mt={"20px"}
          >
            <AssetAllocationPieChart />
          </Box>
        </Box>

      </Box>

      <Box
        display={"flex"}
        flexDir={{base: "column", md: "row"}}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"20px"}
        w="100%"
        my="20px"
      >

        <Box
          w={{base: "90%", md:"50%"}}
          height={{base: "none", md:"367px"}}
          display={"flex"}
          flexDirection={"column"}
          borderRadius={"6px"}
          _dark={{
            bg: "#202020",
          }}
          _light={{
            bg: "#FFFFFF",
          }}
        >
          <ProtocolAllocationTable />
        </Box>

        <Box
          w={{base: "90%", md:"50%"}}
          height={"367px"}
          display={"flex"}
          flexDirection={"column"}
          borderRadius={"6px"}
          _dark={{
            bg: "#202020",
          }}
          _light={{
            bg: "#FFFFFF",
          }}
        >
          <InteractionWithKnownEntitiesTable />
        </Box>

      </Box>

      <Box
        display={"flex"}
        flexDir={{base: "column", md: "row"}}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"20px"}
        w="100%"
        my="20px"
      >

        <Box
          w={{base: "90%", md:"50%"}}
          height={{base: "none", md:"367px"}}
          display={"flex"}
          flexDirection={"column"}
          borderRadius={"6px"}
          _dark={{
            bg: "#202020",
          }}
          _light={{
            bg: "#FFFFFF",
          }}
        >
          <InflowTokensTable />
        </Box>

        <Box
          w={{base: "90%", md:"50%"}}
          height={{base: "none", md:"367px"}}
          display={"flex"}
          flexDirection={"column"}
          borderRadius={"6px"}
          _dark={{
            bg: "#202020",
          }}
          _light={{
            bg: "#FFFFFF",
          }}
        >
          <OutflowTokensTable />
        </Box>

      </Box>

      {/* End of varun's code */}

      {/* <Box
        my="10px"
        w='100%'
        display={"flex"}
        flexDirection={"column"}
        borderRadius={"6px"}
        _dark={{
          bg: "#202020",
          border: "1px solid #272727"
        }}
        _light={{
          bg: "#FFFFFF",
          border: "1px solid #ADADAD"
        }}
        p="25px"
      >
        <Box
          display={"flex"}
          justifyContent={"space-between"}
        >
          <Text
            fontSize={"18px"}
            fontWeight={600}
            lineHeight={"20px"}
            _dark={{ color: "#FFF" }}
            _light={{ color: "#212121" }}
          >
            Asset Trend
          </Text> 
        </Box>
        <Box paddingTop={"10px"}>
          <AssetTrendSplineChart />
        </Box>
      </Box> */}


      <Box
        display={"flex"}
        flexDir={{ base: "column", md: "row" }}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"20px"}
        w="100%"
        mt="20px"
      >

        <Box
          my="20px"
          w={{base: "90%", md: "100%"}}
          display={"flex"}
          flexDirection={"column"}
          borderRadius={"6px"}
          _dark={{
            bg: "#202020",
          }}
          _light={{
            bg: "#FFFFFF",
            border: "1px solid #ADADAD"
          }}
          p="25px"
        >
          <Flex
            height={"10px"}
            borderRadius={"6px"}
            _dark={{
              bg: "#202020",
              color: "#FFFFFF"
            }}
            _light={{
              bg: "#FFFFFF",
              color: "#16171B"
            }}
            pb="14px"
          >
            <Text
              fontSize={"18px"}
              fontWeight={600}
              lineHeight={"20px"}
              _dark={{ color: "#FFF" }}
              _light={{ color: "#212121" }}
              paddingLeft={"15px"}
            >
              Performance
            </Text>

            <Tooltip label="Performance graph shows the wallet portfolio performance in comparison with Bitcoin and Ethereum market performance.">
              <Image width={"12px"}
                height={"12px"}
                flexShrink={"0"}
                mt={"5px"}
                ml={"5px"}
                alt=''
                src="/images/Frame.svg">
              </Image>
            </Tooltip>
          </Flex>

          <Box _dark={{
            color: "#FFF"
          }}
            _light={{
              color: "#16171B"
            }}
            fontSize={"20px"}
            fontWeight={"400"}
            letterSpacing={"1px"}
            mt={"100px"}
            colSpan={8}
            textAlign={"center"}
            p="20px"
            height={"245px"}
          >
            No Data Available
          </Box>
        </Box>

      </Box>
    </>
  );
}

export default WalletAnalyticsPanel;