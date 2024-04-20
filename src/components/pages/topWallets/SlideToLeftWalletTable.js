import { Table, Tbody, Text, Th, Thead, Tr, useColorModeValue } from "@chakra-ui/react";
import TableData from "@util/whales.json";
import MDWalletTableRow from "./MDWalletTableRow";
import './index.css';

const SlideToLeftWalletTable = () => {
    return (
        <Table
            variant="simple"
            w={"100%"}
            display={"table"}
            minW={"unset"}
        >
            <Thead
                _light={{ bgColor: "#F5F5F7", }}
                _dark={{ bgColor: "#191919", }}
                position="sticky"
                top={0}
            >
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

export default SlideToLeftWalletTable;