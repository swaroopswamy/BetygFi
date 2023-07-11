
import { Grid, GridItem, Input, Table, TableCaption, Text, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";
import styles from './homestyles.module.css'
import {blockchains} from '../../../../util/constant'

const Rankings = () => {
  return <>
    <Grid>
      <GridItem colSpan={2} colStart={0} colEnd={2}><Text fontSize='2xl'>Defi Ranking</Text></GridItem>
      <GridItem colSpan={2} colStart={2} colEnd={4}>
      {blockchains?.map((item, i) => (
          <>{item}</>
        ))} 
      </GridItem>
      <GridItem colSpan={2} colStart={4} colEnd={6}>
        <Input placeholder='Search DeFi' />
      </GridItem>
    </Grid>
    <Table variant='simple'>
      <Thead>
        <Tr>
          <Th>RANK</Th>
          <Th>NAME</Th>
          <Th>CATEGORY</Th>
          <Th>PRICE</Th>
          <Th>TVL</Th>
          <Th>MCAP</Th>
          <Th>MCAP/TVL</Th>
          <Th>SCORE</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>inches</Td>
          <Td>millimetres (mm)</Td>
          <Td isNumeric>25.4</Td>
        </Tr>
        <Tr>
          <Td>feet</Td>
          <Td>centimetres (cm)</Td>
          <Td isNumeric>30.48</Td>
        </Tr>
        <Tr>
          <Td>yards</Td>
          <Td>metres (m)</Td>
          <Td isNumeric>0.91444</Td>
        </Tr>
      </Tbody>
    </Table>
  </>;
};

export default Rankings;
