"use client";
import {
  Text,
  useColorModeValue,
  Box,
  Tooltip,
  Tr,
  Th,
  Td,
  Flex,
  Image,
  Link,
  useColorMode,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment/moment";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { useSearchParams } from "next/navigation";
import { fetchWalletTransactionsData } from "@/redux/wallet_dashboard_data/dataSlice";
import { useEffect, useState, useCallback } from "react";
import {
  tableHeader,
  TransactionTableDesktop,
  TransactionTableMobile,
} from "@/app/components/pages/walletDashboard/helper";
import GenericTable from "@/app/components/table/index";
import PageButtons from "../../pageButtons";

const TransactionPanelComponent = () => {
  const searchParam = useSearchParams();
  const dispatch = useDispatch();
  const [tablePage, setTablePage] = useState(1);
  const walletTransactionsData = useSelector(
    (state) => state?.walletDashboardTableData?.walletTransactionsData
  );
  const blockchainSelected = useSelector(
    (state) => state?.walletDashboardTableData?.blockchainType
  );
  const pageChangeHandler = (page) => {
    tablePage >= 1 && setTablePage(page);
  };
  const fetchWalletTransactionsDataHandler = useCallback(() => {
    const data = {
      address: searchParam.get("address"),
      payload: {
        blockchain: blockchainSelected,
        limit: 20,
        page: tablePage,
      },
    };
    dispatch(fetchWalletTransactionsData(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blockchainSelected, tablePage, searchParam.get("address")]);

  useEffect(() => {
    fetchWalletTransactionsDataHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchWalletTransactionsDataHandler]);

  return (
    <>
      <Box
        w={"100%"}
        pt="25px"
        borderRadius={"6px"}
        bgColor={useColorModeValue("#F0F0F5", "#191919")}
        px={"2px"}
        overflow={"auto"}
        mb="20px"
      >
        <Flex
          py={{ base: '20px', md: "25px" }}
          px={{ base: '10px', md: "25px" }}

          mx={{ base: "10px", md: "none  " }}
          borderRadius={"6px"}
          bgColor={useColorModeValue("#FFF", "#202020")}
          display={"block"}

        >
          <Text variant={"h2"} textTransform={"capitalize"}>
            Wallet Transaction
          </Text>
        </Flex>

        <Box overflow={"auto"} px={{ base: "10px", md: "none  " }}>
          <GenericTable
            tableHeader={tableHeader}
            tableData={walletTransactionsData}
            TableRow={TableRow}
            TableHeaderRowMobile={TableHeaderRowMobile}
            ButtonComp={TableBodyRowMobileButtonComp}
            PanelComp={TableBodyRowMobilePanelComp}
            SkeletonRowsColumnsDesktop={TransactionTableDesktop}
            SkeletonRowsColumnsMobile={TransactionTableMobile}
            bigTable={true}
          />
        </Box>

        <PageButtons
          tablePage={tablePage}
          pageChangeHandler={pageChangeHandler}
          totalPages={walletTransactionsData?.data?.totalPages}
        />
      </Box>
    </>
  );
};

const TableRow = ({ item, rowIndex }) => {
  const { colorMode } = useColorMode();
  const walletAddress = useSelector(
    (state) => state?.walletDashboardTableData?.walletAddress
  );
  return (
    <>
      <Tr key={rowIndex}>
        <Td>
          <Box layerStyle={"flexCenter"} gap={"10px"}>
            <Tooltip label={item?.blockchain}>
              <>
                <Image
                  w={"18px"}
                  h={"18px"}
                  mr={"3px"}
                  src={item.logoUrl}
                  alt={`${item?.blockchain}_icon`}
                  style={{ borderRadius: "50%" }}
                ></Image>
              </>
            </Tooltip>

            <Box w={"100%"}>
              <Text variant={"h3"} ml="6px">
                {walletAddress?.split("").join("").substring(0, 8) +
                  "......" +
                  walletAddress?.slice(-5)}
              </Text>
              <Text opacity={"0.6000000238418579"} variant={"h5"} ml="6px">
                {moment.unix(item?.timeStamp).format("Do MMM YYYY")}
              </Text>
            </Box>
          </Box>
        </Td>

        <Td>
          <Box layerStyle={"flexCenter"}>
            <Link
              fontSize={"14px"}
              ml="4px"
              layerStyle={"flexCenter"}
              _dark={{
                color: "#FFF",
              }}
              _light={{
                color: "#6F7383",
              }}
              isExternal
              href={item?.blockExplorerUrl}
            >
              {item?.hash.substring(0, 0)}
              <ExternalLinkIcon mx="4px" />
              <Text
                variant={"h3"}
                _dark={{
                  opacity: "0.6",
                }}
                textTransform={"capitalize"}
              >
                {item?.functionName?.split("(")[0]}
              </Text>
            </Link>
          </Box>
        </Td>

        <Td>
          <Box layerStyle={"flexCenter"}>
            <Image
              width={"18px"}
              height={"18px"}
              alt="logo"
              src={item?.tokenUrl}
              style={{ borderRadius: "50%" }}
            ></Image>

            <Text variant={"h3"} letterSpacing={"1px"} ml="6px">
              {item?.tokenSymbol}
            </Text>
            <Text variant={"h3"} ml="6px">
              {Number(item?.value).toFixed(2)}
              {" ETH"}
            </Text>
          </Box>
        </Td>

        <Td>
          <Box layerStyle={"flexCenter"}>
            <Tooltip
              label={item.from}
              //whiteSpace={"nowrap"}
            >
              <Text variant={"h3"} letterSpacing={"1px"} w="95px">
                {item?.from.split("").join("").substring(0, 6) +
                  "..." +
                  item?.from.slice(-5)}
              </Text>
            </Tooltip>
          </Box>
        </Td>

        <Td>
          <Box layerStyle={"flexCenter"}>
            <Tooltip
              label={item.to}
              //whiteSpace={"nowrap"}
            >
              <Text variant={"h3"} letterSpacing={"1px"} w="95px">
                {item?.to.split("").join("").substring(0, 6) +
                  "..." +
                  item?.to.slice(-5)}
              </Text>
            </Tooltip>
          </Box>
        </Td>

        <Td>
          <Box layerStyle={"flexCenter"}>
            <Text
              fontSize={"14px"}
              fontWeight={"600"}
              ml="4px"
              color={
                item?.usdValue >= 0
                  ? colorMode === "light"
                    ? "#245F00"
                    : "#60C000"
                  : colorMode === "light"
                    ? "#EF1E1E"
                    : "#FF3535"
              }
            >
              {item?.usdValue >= 0 ? "+" : "-"}
              {item?.usdValue} USD
            </Text>
          </Box>
        </Td>
      </Tr>
    </>
  );
};

const TableHeaderRowMobile = () => {
  return (
    <>
      <Tr>
        <Th colSpan={2}>
          <Box layerStyle={"spaceBetween"}>
            <Text
              _light={{
                opacity: "0.8",
              }}
              variant={"h3"}
              textTransform={"capitalize"}
            >
              Address And Date
            </Text>
            <Text
              _light={{
                color: "#16171B",
              }}
              variant={"h3"}
              textTransform={"capitalize"}
            >
              USD Value
            </Text>
          </Box>
        </Th>
      </Tr>
    </>
  );
};

const TableBodyRowMobileButtonComp = ({ item, rowIndex }) => {
  const { colorMode } = useColorMode();
  const walletAddress = useSelector(
    (state) => state?.walletDashboardTableData?.walletAddress
  );
  return (
    <Box display={"flex"} w="100%" justifyContent={"space-between"}>
      <Box
        display={"flex"}
        //flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Image
          width={5}
          height={5}
          alt="logo"
          style={{ borderRadius: "50%" }}
          src={item?.logoUrl}
        />
        <Box flexDirection={"row"} justifyContent={"space-between"}>
          <Text
            _dark={{
              color: "#FFF",
            }}
            _light={{
              color: "#16171B",
            }}
            fontSize={"14px"}
            fontWeight={"400"}
            letterSpacing={"1px"}
            ml="6px"
            w="95px"
          >
            {walletAddress?.split("").join("").substring(0, 8) +
              "..." +
              walletAddress?.slice(-5)}
          </Text>
          <Text
            opacity={"0.6000000238418579"}
            _dark={{
              color: "#FFF",
            }}
            _light={{
              color: "#16171B",
            }}
            fontSize={"12px"}
            fontWeight={"400"}
            letterSpacing={"1px"}
            ml="6px"
          >
            {moment.unix(item?.timeStamp).format("Do MMM YYYY")}
          </Text>
        </Box>
      </Box>
      <Box display={"flex"} alignItems={"end"} justifyContent={"space-between"}>
        <Text
          fontSize={"14px"}
          fontWeight={"400"}
          letterSpacing={"1px"}
          mb="10px"
          mr={"20px"}
          color={
            item?.usdValue >= 0
              ? colorMode === "light"
                ? "#245F00"
                : "#60C000"
              : colorMode === "light"
                ? "#EF1E1E"
                : "#FF3535"
          }
        >
          {item?.usdValue >= 0 ? "+" : "-"}
          {item?.usdValue} USD
        </Text>
      </Box>
    </Box>
  );
};
const TableBodyRowMobilePanelComp = ({ item, rowIndex }) => {
  const walletAddress = useSelector(
    (state) => state?.walletDashboardTableData?.walletAddress
  );
  return (
    <Box>
      <Tr>
        <Td justifyContent={"space-between"} alignItems={"center"}>
          <Text
            _light={{
              color: "#434347",
            }}
            _dark={{
              color: "#A8ADBD",
            }}
            fontSize={"14px"}
            fontWeight={400}
            letterSpacing={"1.4px"}
            lineHeight={"20px"}
            alignItems={"center"}
            textTransform={"capitalize"}
          >
            Method
          </Text>
        </Td>

        <Td>
          <Box display={"flex"} alignItems={"center"}>
            <Link
              fontSize={"14px"}
              fontWeight={"400"}
              fontStyle={"normal"}
              letterSpacing={"1px"}
              ml="4px"
              display={"flex"}
              alignItems={"center"}
              _dark={{
                color: "#FFF",
              }}
              _light={{
                color: "#16171B",
              }}
              isExternal
              href={item?.blockExplorerUrl}
            >
              {item?.hash.substring(0, 0)}
              <ExternalLinkIcon mx="4px" />
              <Text
                color={"#16171B"}
                fontSize={"14px"}
                fontWeight={500}
                lineHeight={"20px"}
                _dark={{
                  color: "#FFF",
                }}
                _light={{
                  color: "#16171B",
                }}
                textTransform={"capitalize"}
              >
                {item?.functionName?.split("(")[0]}
              </Text>
            </Link>
          </Box>
        </Td>
      </Tr>

      <Tr>
        <Td display={"flex"} alignItems={"center"}>
          <Text
            _light={{
              color: "#434347",
            }}
            _dark={{
              color: "#A8ADBD",
            }}
            fontSize={"14px"}
            fontWeight={400}
            letterSpacing={"1.4px"}
            lineHeight={"20px"}
            mr="6px"
            textTransform={"capitalize"}
          >
            Amount / Token
          </Text>
        </Td>

        <Td>
          <Box display={"flex"} alignItems={"center"}>
            <Image
              width={5}
              height={5}
              alt="logo"
              src={item?.tokenUrl}
              style={{ borderRadius: "50%" }}
            ></Image>

            <Text
              _dark={{
                color: "#FFF",
              }}
              _light={{
                color: "#16171B",
              }}
              fontSize={"14px"}
              fontWeight={"400"}
              letterSpacing={"1px"}
              ml="6px"
            >
              {item?.tokenSymbol}
            </Text>
            <Text
              opacity={"0.6000000238418579"}
              _dark={{
                color: "#FFF",
              }}
              _light={{
                color: "#16171B",
              }}
              fontSize={"14px"}
              fontWeight={400}
              letterSpacing={"1px"}
              ml="6px"
            >
              {Number(item?.value).toFixed(2)}
            </Text>
          </Box>
        </Td>
      </Tr>

      <Tr>
        <Td>
          <Text
            _light={{
              color: "#434347",
            }}
            _dark={{
              color: "#A8ADBD",
            }}
            fontSize={"14px"}
            fontWeight={400}
            letterSpacing={"1.4px"}
            lineHeight={"20px"}
            textTransform={"capitalize"}
          >
            From
          </Text>
        </Td>
        <Td>
          <Box display={"flex"} alignItems={"center"}>
            <Link
              fontSize={"14px"}
              fontWeight={"400"}
              fontStyle={"normal"}
              letterSpacing={"1px"}
              ml="4px"
              layerStyle={"flexCenter"}
              isExternal
              href={item?.blockExplorerUrl}
            >
              <Text
                _dark={{
                  color: "#117CCA",
                }}
                _light={{
                  color: "#117CCA",
                }}
                fontSize={"14px"}
                fontWeight={"400"}
                letterSpacing={"1px"}
                w="95px"
              >
                {item?.from.split("").join("").substring(0, 6) +
                  "..." +
                  item?.from.slice(-5)}
              </Text>
            </Link>
          </Box>
        </Td>
      </Tr>

      <Tr>
        <Td
          _light={{
            color: "#434347",
          }}
          _dark={{
            color: "#A8ADBD",
          }}
          fontSize={"14px"}
          fontWeight={400}
          letterSpacing={"1.4px"}
          lineHeight={"20px"}
          textTransform={"capitalize"}
        >
          To
        </Td>

        <Td>
          <Box display={"flex"} alignItems={"center"}>
            <Link
              fontSize={"14px"}
              fontWeight={"400"}
              fontStyle={"normal"}
              letterSpacing={"1px"}
              ml="4px"
              layerStyle={"flexCenter"}
              isExternal
              href={item?.blockExplorerUrl}
            >
              <Text
                _dark={{
                  color: "#117CCA",
                }}
                _light={{
                  color: "#117CCA",
                }}
                fontSize={"14px"}
                fontWeight={"400"}
                letterSpacing={"1px"}
                w="95px"
              >
                {item?.to.split("").join("").substring(0, 6) +
                  "..." +
                  item?.to.slice(-5)}
              </Text>
            </Link>
          </Box>
        </Td>
      </Tr>
    </Box>
  );
};
export default TransactionPanelComponent;
