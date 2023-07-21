"use client"
import { Grid, GridItem, useColorModeValue } from "@chakra-ui/react";
import React, { useState } from 'react';
import { IoMdArrowDropdown as ChevronDownIcon } from 'react-icons/io';
import styles from "../approach-paper/approach.module.css";
import version1 from "./version1"

import version2 from "./version2"

import { Box, Button, Link, Link as ReachLink, Container, Text, Image, Select, extendTheme, Manrope } from "@chakra-ui/react";
import {
  Menu, MenuButton, MenuList, MenuItem, MenuItemOption, MenuGroup, MenuOptionGroup,
  MenuDivider, selectedVersion
} from '@chakra-ui/react'


const Approach = () => {
  const [selectedVersionData, setSelectedVersionData] = useState([]);

  const handleVersion1Click = () => {
    setSelectedVersionData(version1Data);
  };

  return (
    <Container className={styles.container}>
      <Box className={styles.box1}>
        <Grid>
          <GridItem colSpan={2} colStart={0} colEnd={2} className={styles.approachgrid}>
            Approach Paper
          </GridItem>
          <GridItem colSpan={4} colStart={4} colEnd={2} width={"80%"} padding={"109px 0px 109px 100px"}>
          <Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    Version
  </MenuButton>
  <MenuList minH='60px'>
  <MenuItem minH='48px' onClick={handleVersion1Click}>
      <span>version1</span>
    </MenuItem>

    <MenuItem minH='48px' onClick={handleVersion1Click}>
      <span>version2</span>
    </MenuItem>
  </MenuList>
</Menu>
          </GridItem>
        </Grid>
      </Box>
    </Container>
  );
};

export default Approach;













