"use client";

import styles from "./page.module.css";
import Dashboard from "./dashboard/page";

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
  return (
    <>
      <main className={styles.main}>
        <Dashboard />
      </main>
    </>
  );
}
