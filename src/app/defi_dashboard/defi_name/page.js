"use client";
import React from "react";
import {
  Box,
  Icon,
  useColorModeValue,
  Text,
  Td,
  Tr,
  Flex,
  Image,
  useColorMode,
} from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import GenericBigTableComponent from "/src/app/components/pages/defiDashboard/GenericBigTable";
import BackIconWhite from "../../../../public/icons/backIconWhite.svg";
import BackIconBlack from "../../../../public/icons/backIconBlack.svg";

function Defi_Hot_Contracts() {
  const router = useRouter();
  const { colorMode } = useColorMode();
  const tableName = "DeFi Name";
  const thread = [
    "Blockchain | Asset Name",
    "Inflow (7 Days)",
    "Outflow (7 Days)",
    "Net Value flow ",
  ];
  const tableData = [
    [
      "AAVE V2 ",
      "+USD 65.930000",
      "-USD 356,456,560",
      "-USD 65.930000",
      "/icons/aave_logo.svg",
    ],
    [
      "AAVE V3 ",
      "+USD 65.930000",
      "-USD 1,434,771,959",
      "+USD 65.930000",
      "/icons/aave_logo.svg",
    ],
    [
      "Compound",
      "+USD 35.700000",
      "-USD 1,284,778,438",
      "-USD 35.700000",
      "/icons/compound_logo.svg",
    ],
    [
      "JustLend",
      "+USD 0.023387",
      "-USD 3,740,295,842",
      "-USD 0.023387",
      "/icons/justlend_logo.svg",
    ],
    [
      "Venus",
      "+USD 5.100000",
      "-USD 802,259,792",
      "+USD 5.100000",
      "/icons/venus_logo.svg",
    ],
    [
      "Morpho Aave",
      "+USD 0.001782",
      "-USD 315,485,747",
      "+USD 0.001782",
      "/icons/morphoaave_logo.svg",
    ],
    [
      "Compound V3",
      "+USD 35.700000",
      "-USD 563,991,620",
      "+USD 35.700000",
      "/icons/compoundv3.svg",
    ],
    [
      "Radiant V2",
      "USD 0.313472",
      "-USD 259,911,221",
      "-USD 0.313472",
      "/icons/radiantv2_logo.svg",
    ],
    [
      "FluidTokens",
      "NA",
      "-USD 234,308",
      "-USD 45.90988",
      "/icons/fluidtoken_logo.svg",
    ],
    [
      "Trader Joe Lend",
      "+USD 45.90988",
      "-USD 7,562,768",
      "-USD 45.90988",
      "/icons/traderjoelend_logo.svg",
    ],
  ];

  return (
    <Box
      padding={"20px 30px"}
      bgColor={useColorModeValue("#F0F0F5", "#191919")}
      borderColor={useColorModeValue("#F0F0F5", "#191919")}
    >
      <Flex
        cursor={"pointer"}
        ml={"5px"}
        mb={"20px"}
        align={"center"}
        onClick={() => {
          router.push(`/defi_dashboard/`);
        }}
      >
        <Icon
          w="24px"
          h="24px"
          as={colorMode === "light" ? BackIconWhite : BackIconBlack}
          mr="6px"
        />
        <Text
          fontSize={"10px"}
          fontStyle={"normal"}
          fontWeight={"400"}
          lineHeight={"20px"}
          letterSpacing={"1px"}
          textTransform={"uppercase"}
          ml={"5px"}
        >
          BACK
        </Text>
      </Flex>
      <GenericBigTableComponent
        tableName={tableName}
        thread={thread}
        tableData={tableData}
        RowComponent={RowComponent}
      />
    </Box>
  );
}
export default Defi_Hot_Contracts;

function RowComponent({ tableData }) {
  return (
    <>
      {tableData.map((item, i) => {
        return (
          <TableRow
            key={i}
            Asset={{
              name: item[0],
              src: item[4],
            }}
            Inflow={item[1]}
            Outflow={item[2]}
            NetValueflow={item[3]}
          />
        );
      })}
    </>
  );
}

function TableRow({ key, Asset, Inflow, Outflow, NetValueflow }) {
  const [clicked, setClick] = useState(false);
  const { colorMode } = useColorMode();
  const router = useRouter();
  return (
    <>
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
        }}
        borderBottom={"1px"}
        borderColor={useColorModeValue("#DFDFDF", "#313131")}
        borderRadius={"2px"}
      >
        <Td>
          <Flex>
            <Box alignItems={"center"} display={"flex"} gap={"10px"}>
              <Image
                height={"24px"}
                width={"24px"}
                src={Asset?.src}
                alt="logo"
                // url={"/icons/Ethereum_sm_icon.svg"}
                //  src="/icons/aave_logo.svg"
              ></Image>
              <Text
                _dark={{
                  color: "#FFFFFF",
                }}
                _light={{
                  color: "#16171B",
                }}
                fontSize={"14px"}
                fontStyle={"normal"}
                fontWeight={"400"}
                lineHeight={"20px"}
              >
                {Asset.name}
              </Text>
            </Box>
          </Flex>
        </Td>

        <Td>
          <Flex>
            <Box>
              <Text
                _dark={{
                  color: "#FFFFFF",
                }}
                _light={{
                  color: "#16171B",
                }}
                fontSize={"14px"}
                fontStyle={"normal"}
                fontWeight={"400"}
                lineHeight={"20px"}
              >
                {Inflow}
              </Text>
            </Box>
          </Flex>
        </Td>

        <Td>
          <Flex>
            <Box>
              <Text
                _dark={{
                  color: "#FFFFFF",
                }}
                _light={{
                  color: "#16171B",
                }}
                fontSize={"14px"}
                fontStyle={"normal"}
                fontWeight={"400"}
                lineHeight={"20px"}
              >
                {Outflow}
              </Text>
            </Box>
          </Flex>
        </Td>

        <Td>
          <Flex>
            <Box>
              <Text
                _dark={{
                  color: "#FFFFFF",
                }}
                _light={{
                  color: "#16171B",
                }}
                fontSize={"14px"}
                fontStyle={"normal"}
                fontWeight={"400"}
                lineHeight={"20px"}
              >
                {NetValueflow}
              </Text>
            </Box>
          </Flex>
        </Td>
      </Tr>
    </>
  );
}
