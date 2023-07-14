"use client"
import { Box, Grid, GridItem, SimpleGrid, } from "@chakra-ui/react";
import Navbar from "./components/header";
import styles from "./page.module.css";
import Rankings from "./pages/Home/Rankings";
import Overview from "./pages/Home/Overview";
import ScoreDistribution from "./pages/Home/ScoreDistribution";
import TermsandConditions from "./pages/terms";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        {/*<SimpleGrid column={2}>
          <Box w='100%'><Overview/></Box>
          <Box w='100%'><ScoreDistribution/></Box>
        </SimpleGrid>
        <Rankings /> */}


        <TermsandConditions/>
      </main>
    </>
  );
}
