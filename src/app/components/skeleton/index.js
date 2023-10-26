import { Box, Skeleton, Td, Tr } from "@chakra-ui/react";
import React from "react";

const SkeletonTable = ({ numColumns, numRows }) => {
  const skeletonRows = Array.from({ length: numRows }, (_, rowIndex) => (
    <Tr key={rowIndex}>
      {Array.from({ length: numColumns }, (_, columnIndex) => (
        <Td key={columnIndex}>
          <Skeleton height="20px" my={4} />
        </Td>
      ))}
    </Tr>
  ));

  return <>{skeletonRows}</>;
};

export default SkeletonTable;
