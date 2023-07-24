"use client"
import { Box, Container, Grid, GridItem, Text, Image } from "@chakra-ui/react";
import React from "react";
import styles from "./settings.module.css"

const Settings = () => {
    return<div>
        <Container className={styles.backgroundcolour}>
            <Box className={styles.headingbox}>
            <Text className={styles.headingtext}>
                Settings
            </Text>
            </Box>

            <Box className={styles.firstbox}>
                <Grid>
                    <GridItem colSpan={2} colStart={2} colEnd={2} style={{padding: "40px 50px 30px 150px"}}>
                        <i className={styles.systemdefaultbox}>
                        <Image src='../../../assets/images/minibox1.svg' fallbackSrc='http://www.w3.org/2000/svg' />
                        </i>
                    </GridItem>
                    <GridItem colSpan={2} colStart={4} colEnd={4} style={{padding: "40px 50px 30px 50px"}}>
                        <i className={styles.lightthemebox}>
                            <Image src='../../../assets/images/minibox2.svg'  fallbackSrc='http://www.w3.org/2000/svg'/>
                        </i>
                    </GridItem>
                    <GridItem  colSpan={2} colStart={6} colEnd={6}  style={{padding: "40px 150px 30px 50px"}}>
                        <i className={styles.darkthemebox}>
                            <Image src='../../../assets/images/minibox3.svg'  fallbackSrc='http://www.w3.org/2000/svg'/>
                        </i>
                    </GridItem>
                </Grid>
            <Box className={styles.themebox}>
                <Text className={styles.themetext}>
                Theme
                </Text>
            </Box>
            </Box>

            <Box className={styles.secondbox}>
            <Text ml={5} pt={5}>Account Settings</Text>
            </Box>
          
            <Box className={styles.logouttextbox}>
            <Text className={styles.logouttext}>
            Logout of BetygFi
            </Text>
            </Box>

            <Box className={styles.lasttextbox}>
            <Text className={styles.lasttext}>
            After logging out, the verification information for the current address will be deleted from your browser.
            </Text>
            </Box>
        </Container>
    </div>
}
export default Settings;