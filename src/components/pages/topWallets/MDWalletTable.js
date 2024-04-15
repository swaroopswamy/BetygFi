import { Table, Tbody, Text, Th, Thead, Tr, useColorModeValue } from "@chakra-ui/react";
import TableData from "@util/whales.json";
import MDWalletTableRow from "./MDWalletTableRow";

const MDWalletTable = () => {
    return (
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
                    width={"20%"}
                    flex-shrink={"0"}
                    borderRadius={"6px"}
                >
                    <Th bg={useColorModeValue("#F5F5F7", "#131313")}>
                        <Text variant={"tableHead"} textAlign={"left"}>
                            Wallet Address
                        </Text>
                    </Th>
                    <Th width={"50%"} bg={useColorModeValue("#F5F5F7", "#131313")}>
                        <Text variant={"tableHead"} textAlign={"left"}>
                            Total Tokens
                        </Text>
                    </Th>
                    <Th bg={useColorModeValue("#F5F5F7", "#131313")}>
                        <Text variant={"tableHead"} textAlign={"left"}>
                            Total Protocols
                        </Text>
                    </Th>
                </Tr>
            </Thead>

            <Tbody>
                {TableData.whales.map((item, i) => {
                    return (
                        <MDWalletTableRow
                            key={i}
                            user={item.id}
                            netWorth={item.usd_value}
                            totalTokens={item.stats.top_coins}
                            totalProtocols={"-"}
                            totalNFT={""}
                        />
                    );
                })}
            </Tbody>
        </Table>
    );
};

export default MDWalletTable;