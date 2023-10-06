import {
  Box,
  Flex,
  Image,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  useColorMode,
  Tooltip,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  useColorModeValue,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { USDollar } from "../../../../../util/globalHelper";
import {
  InflowTokensTableHeader,
  InflowTokensDesktop,
  InflowTokensMobile,
} from "./helper";
import TooltipComp from "../../tooltipComp";
import GenericTable from "../../table/index";

const InflowTokensBox = () => {
  const { colorMode } = useColorMode();
  const inflowOutflowTokensData = useSelector(
    (state) => state?.walletDashboardTableData?.inflowOutflowTokensForAddress
  );

  return (
    <Box
      w={{ base: "90%", bigSize: "50%", md: "90%" }}
      height={{ base: "none", md: "367px" }}
      layerStyle={"flexColumn"}
      borderRadius={"6px"}
      _dark={{
        bg: "#202020",
      }}
      _light={{
        bg: "#FFFFFF",
      }}
    >
      <Box
        height={"50px"}
        borderRadius={"6px"}
        _dark={{
          bg: "#202020",
        }}
        _light={{
          bg: "#FFFFFF",
        }}
        pb="14px"
        layerStyle={"flexCenterSpaceBetween"}
        px={"20px"}
      >
        <Box layerStyle={"flexCenter"} pt="15px">
          <Text variant={"smallTableHeader"} mr="0.5em">
            Inflow Tokens (30 Days)
          </Text>
          <TooltipComp label="Inflow shows the number of tokens received by the wallet." />
        </Box>
      </Box>
      <GenericTable
        tableHeader={InflowTokensTableHeader}
        tableData={inflowOutflowTokensData}
        TableRow={TableRowDesktop}
        TableHeaderRowMobile={TableHeaderRowMobile}
        ButtonComp={TableBodyRowMobileButtonComp}
        PanelComp={TableBodyRowMobilePanelComp}
        SkeletonRowsColumnsDesktop={InflowTokensDesktop}
        SkeletonRowsColumnsMobile={InflowTokensMobile}
      />
    </Box>
  );
};

const TableRowDesktop = ({ item, i }) => {
  return (
    <Tr height={"40px"} key={i}>
      <Td _dark={{ color: "#FFFFFF" }} _light={{ color: "#16171B" }}>
        <Box layerStyle={"flexCenter"}>
          <Image
            width={5}
            height={5}
            alt="logo"
            style={{ borderRadius: "50%" }}
            src={item?.logoUrl}
          ></Image>
          <Text ml="6px" variant={"h3"}>
            {item?.symbol}
          </Text>
        </Box>
      </Td>

      <Td>
        <Box layerStyle={"flexCenter"}>
          <Text variant={"h3"}>
            {item?.value > 0 ? "-" : "+"}USD {USDollar.format(item?.value)}
          </Text>
        </Box>
      </Td>

      <Td>
        <Box layerStyle={"flexCenter"}>
          <Text variant={"h3"}>{item?.percentage}%</Text>
        </Box>
      </Td>
    </Tr>
  );
};
const TableHeaderRowMobile = () => {
  return (
    <Tr>
      <Th>
        <Box layerStyle={"flexCenter"}>
          <Text variant={"smallTableHeaderMobile"}>Asset Name</Text>
        </Box>
      </Th>
      <Th>
        <Box layerStyle={"flexAlignCenterJustifyCenter"} w="100%">
          <Text variant={"smallTableHeaderMobile"}>Value</Text>
        </Box>
      </Th>
    </Tr>
  );
};

const TableBodyRowMobileButtonComp = ({ item, i }) => {
  return (
    <Box w="100%" m={"16px"} layerStyle={"flexAlignCenterJustifyCenter"}>
      <Box layerStyle={"flexAlignCenterJustifyCenter"} w={"80%"}>
        <Box layerStyle={"flexCenter"}>
          <Image
            w={"20px"}
            h={"20px"}
            src={item?.logoUrl}
            style={{ borderRadius: "50%" }}
            alt=""
          ></Image>

          <Text variant={"smallTableHeaderMobile"} ml="12px">
            {item?.symbol}
          </Text>
        </Box>

        <Text variant={"smallTableHeaderMobile"} textAlign={"left"}>
          {item?.value > 0 ? "-" : "+"}USD {USDollar.format(item?.value)}
        </Text>
      </Box>
    </Box>
  );
};
const TableBodyRowMobilePanelComp = ({ item, i }) => {
  return (
    <Box layerStyle={"flexColumn"} my={"10px"}>
      <Box display={"flex"}>
        <Text variant={"smallTableBodyMobile"} textAlign={"left"}>
          Share
        </Text>

        <Text variant={"smallTableBodyMobile"} textAlign={"left"} ml={"20px"}>
          {item?.percentage}%
        </Text>
      </Box>
    </Box>
  );
};

export default InflowTokensBox;
