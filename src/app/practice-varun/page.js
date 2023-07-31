"use client"
import { Container, Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer } from '@chakra-ui/react'

const Transaction = () => {
    return(
        <>
  <Table variant='simple'>
    <TableCaption>Imperial to metric conversion factors</TableCaption>
    <Thead>
      <Tr>
        <Th>Address and Date</Th>
        <Th>Method </Th>
        <Th>Amount  / Token </Th>
        <Th>From</Th>
        <Th>To</Th>
        <Th isNumeric>USD value</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td>...</Td>
        <Td>...</Td>
        <Td>...</Td>
        <Td isNumeric>25.4</Td>
      </Tr>
      <Tr>
        <Td>feet</Td>
        <Td>centimetres (cm)</Td>
        <Td>...</Td>
        <Td>...</Td>
        <Td>...</Td>
        <Td isNumeric>30.48</Td>
      </Tr>
      <Tr>
        <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td>...</Td>
        <Td>...</Td>
        <Td>...</Td>
        <Td isNumeric>0.91444</Td>
      </Tr>
    </Tbody>
    {/* <Tfoot>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Tfoot> */}
  </Table>

    </>
    )
}

export default Transaction;