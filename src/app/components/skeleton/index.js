import { Box, Skeleton, Td } from "@chakra-ui/react";
import React from "react";

const SkeletonTable = ({ numColumns, numRows }) => {
  const skeletonRows = Array.from({ length: numRows }, (_, rowIndex) => (
    <Box as="tr" key={rowIndex}>
      {Array.from({ length: numColumns }, (_, columnIndex) => (
        <Td key={columnIndex}>
          <Skeleton height="20px" my={4} />
        </Td>
      ))}
    </Box>
  ));

  return <React.Fragment>{skeletonRows}</React.Fragment>;
};

export default SkeletonTable;
