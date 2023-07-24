"use client"
import { Grid, GridItem,Box, Container, Select } from "@chakra-ui/react";
import React, { useState } from 'react';
import Version1Content from './version1'; 
import Version2Content from './version2'; 

const Approach = () => {
  const [selectedVersion, setSelectedVersion] = useState(null);

  const versionInfo = {
    option1: 'version1',
    option2: 'version2'
  };

  const handleVersionSelect = (event) => {
    setSelectedVersion(event.target.value);
    console.log(selectedVersion);
    console.log(event.target);
  };
  

  return (
    <Container maxW= {"100%"} padding={"0px"} >
      <Box height= {"264px"}  background= {"#E8E8E8"}>
        <Grid>
          <GridItem colSpan={2} colStart={0} colEnd={2} 
            width= {"100%"} 
            height= {"250px"}  
            // flex-shrink= {"0"}
            background= {"#E8E8E8"}
            mix-blend-mode= {"luminosity"}
            padding= {"109px 0px 109px 70px"}
            color= {"#000"}
            fontFamily= {"Manrope"}
            fontSize= {"46px"}
            fontStyle= {"normal"}
            fontWeight= {"400"}
            lineHeight= {"46px"}>

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
          <Version1Content />
        </div>
      )}

      {selectedVersion === 'option2' && (
        <div>
          <Version2Content />
        </div>
      )}
    </Container>
  );
};

export default Approach;

