"use client";

import styles from "./page.module.css";
import Dashboard from "./dashboard/page";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Dashboard />
      </main>
    </>
  );
}
