"use client"
import {Grid, GridItem, useColorModeValue } from "@chakra-ui/react";
import React, { useState } from 'react';
import styles from "../approach-paper/approach.module.css";
import { Box,Button,Link, Link as ReachLink, Container,Text, Select, extendTheme, Manrope } from "@chakra-ui/react";



const Approach=()=> {
    const [selectedVersion, setSelectedVersion] = useState(null);

    const versionInfo = {
        option1: 'Information for version V1',
        option2: 'Information for version V2',
        option3: 'Information for version V3',
    };

    const handleVersionSelect = (event) => {
        setSelectedVersion(event.target.value);
      };

    return (
    <container className={styles.container}>
      <Box className={styles.box1}>
        <Grid>
          <GridItem colSpan={2} colStart={0} colEnd={2} className={styles.approachgrid}>
            Approach Paper
          </GridItem>
          <GridItem colSpan={4} colStart={4} colEnd={2} width={"80%"} padding={"109px 0px 109px 100px"}>
            <Select default="Select version" onChange={handleVersionSelect} value={selectedVersion}>
              <option value="option1">
                <Link as={ReachLink} to='/version V1'>
                version V1
                </Link>
              </option>
              <option value="option2">version V2</option>
              <option value="option3">version V3</option>
            </Select>
          </GridItem>
        </Grid>
      </Box>

      {/* Display the information for the selected version */}
      {selectedVersion && (
        <div>
          <h2>Version {selectedVersion}</h2>
          <p>{versionInfo[selectedVersion]}</p>
          {/* You can add more components here to display the information */}
        </div>
      )}
    </container>
  );
};

export default Approach;










      
  
  
