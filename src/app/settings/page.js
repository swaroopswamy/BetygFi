"use client"
import { Box, Container, Text, extendTheme } from "@chakra-ui/react";
import React from "react";
import styles from "./settings.module.css"

const Settings = () => {
    return<div>
        <Container className={styles.backgroundcolour}>
            <Box className={styles.headingbox} ml={30} mt={35}>
            <Text className={styles.headingtext}>
                Settings
            </Text>
            </Box>

            <Box className={styles.firstbox} ml={30}>
            <Box className={styles.themebox} ml={8} mt={5}>
                <Text className={styles.themetext}>
                Theme
                </Text>
            </Box>
            </Box>

            <Box className={styles.secondbox} ml={30} mt={10} mb={200}>

            </Box>
        </Container>
    </div>
}
export default Settings;