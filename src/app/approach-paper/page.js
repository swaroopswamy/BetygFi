"use client"
// import { Grid, GridItem, useColorModeValue } from "@chakra-ui/react";
// import React, { useState } from 'react';
// import { IoMdArrowDropdown as ChevronDownIcon } from 'react-icons/io';
// import styles from "../approach-paper/approach.module.css";
// import version1 from "./version1"
// import version2 from "./version2"
// import { Box, Button, Container } from "@chakra-ui/react";
// import { Menu, MenuButton, MenuList, MenuItem, MenuDivider, selectedVersion } from '@chakra-ui/react'


// const Approach = () => {
//   const [selectedVersion, setSelectedVersion] = useState(null);

//   const handleVersionSelect = (event) => {
//     setSelectedVersion(event.target.textContent);
//   };

//   // Depending on the selected version, render the corresponding component
//   const renderSelectedVersion = () => {
//     switch (selectedVersion) {
//       case 'version1':
//         return <version1 />;
//       case 'version2':
//         return <version2 />;
//       default:
//         return null; // Render nothing if no version is selected
//     }
//   };
//   return (
//     <Container className={styles.container}>
//       <Box className={styles.box1}>
//         <Grid>
//           <GridItem colSpan={2} colStart={0} colEnd={2} className={styles.approachgrid}>
//             Approach Paper
//           </GridItem>
//           <GridItem colSpan={4} colStart={4} colEnd={2} width={'80%'} padding={'109px 0px 109px 100px'}>
//             <Menu>
//               <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
//                 Version
//               </MenuButton>
//               <MenuList minH='60px'>
//                 {/* Use the handleVersionSelect function as onClick event handlers */}
//                 <MenuItem minH='48px' onClick={handleVersionSelect}>
//                   <span>version1</span>
//                 </MenuItem>

//                 <MenuItem minH='48px' onClick={handleVersionSelect}>
//                   <span>version2</span>
//                 </MenuItem>
//               </MenuList>
//             </Menu>
//           </GridItem>
//         </Grid>
//       </Box>
//     </Container>
//   );
// };

// export default Approach;





import { Grid, GridItem, useColorModeValue } from "@chakra-ui/react";
import React, { useState } from 'react';
import styles from "../approach-paper/approach.module.css";
import { Box, Button, Link, Link as ReachLink, Container, Text, Select, extendTheme, Manrope } from "@chakra-ui/react";
import Version1Content from './version1'; // Import the content of version1.js
import Version2Content from './version2'; // Import the content of version2.js

const Approach = () => {
  const [selectedVersion, setSelectedVersion] = useState(null);

  const versionInfo = {
    option1: 'version1',
    option2: 'version2'
  };

  const handleVersionSelect = (event) => {
    setSelectedVersion(event.target.value);
  };

  return (
    <Container className={styles.container}>
      <Box className={styles.box1}>
        <Grid>
          <GridItem colSpan={2} colStart={0} colEnd={2} className={styles.approachgrid}>
            Approach Paper
          </GridItem>
          <GridItem colSpan={4} colStart={4} colEnd={2} width={"80%"} padding={"109px 0px 109px 100px"}>
            <Select default="Select version" onChange={handleVersionSelect} value={selectedVersion}>
            <option value="option1">version1</option>
              <option value="option2">version2</option>
            </Select>
          </GridItem>
        </Grid>
      </Box>

      {/* Display the information for the selected version */}
      {selectedVersion === 'option1' && (
        <div>
          {Version1Content}
        </div>
      )}

      {selectedVersion === 'option2' && (
        <div>
          {Version2Content}
        </div>
      )}
    </Container>
  );
};

export default Approach;

