"use client"
import styles from "./page.module.css";
import { redirect } from 'next/navigation';
import { Box, Grid, GridItem, SimpleGrid, } from "@chakra-ui/react";
import Navbar from "./components/header";
import styles from "./page.module.css";
import Rankings from "./pages/Home/Rankings";
import Overview from "./pages/Home/Overview";
import ScoreDistribution from "./pages/Home/ScoreDistribution";
import About from "./pages/about";
import TermsandConditions from "./pages/terms";

export default function Home() {
  redirect('/dashboard');
  return (
    <>
      <main className={styles.main}>
      </main>
    </>
  );
}
