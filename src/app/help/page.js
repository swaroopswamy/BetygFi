import { Box, Container, Grid, GridItem, Heading, Text, extendTheme, Manrope } from "@chakra-ui/react";
import styles from "../page.module.css";

export default function Dashboard() {
    return (
        <>
            <Container className={styles.container}>
                <Box className={styles.box1}>
                    <Grid>
                        <GridItem colSpan={2} colStart={0} colEnd={2} className={styles.privacygrid}>
                            Help
                        </GridItem>
                        <GridItem colSpan={2} colStart={2} colEnd={4}>
                            <i className={styles.logo}></i>
                        </GridItem>
                    </Grid>
                </Box>
                </Container>
        </>
    )
}