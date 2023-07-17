"use client"
import { redirect } from 'next/navigation';
import styles from "./page.module.css";
import axios from "axios";


/* axios.interceptors.request.use(
  (reqConfig) => {
    const reqConfiglocal = reqConfig;
    const token = localStorage.getItem("token");
    if (token) {
      reqConfiglocal.headers["X-Authorization"] = `${token}`;
    }

    return reqConfiglocal;
  },
  (error) => {
    Promise.reject(error);
  }
); */

/* axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error, "error");

    return Promise.reject(error);
  }
);
 */
export default function Home() {
  redirect('/dashboard');
  return (
    <>
      <main className={styles.main}>
      </main>
    </>
  );
}
