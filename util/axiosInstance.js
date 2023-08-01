import axios from "axios";
import { Router } from "next/router";
const isServer = () => {
  return window === "undefined";
};

let accessToken = "";
let context = {};

const baseURL = process.env.NEXT_PUBLIC_API_URL
console.log(baseURL)

export const setAccessToken = () => {
  accessToken = _accessToken;
};

export const getAccessToken = () => accessToken;

export const setContext = () => {
  context = _context;
};

export const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    post: {
      "Content-Type": "application/json",
    },
    Accept: "application/json",
  },
  withCredentials: false, // to send cookie
});

axiosInstance.interceptors.request.use((config) => {
  /* if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`
    } */

  if (isServer() && context?.req?.cookies) {
    config.headers.Cookie = `gid=${context.req.cookies.gid};`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // check conditions to refresh token
    if (
      error.response?.status === 401 &&
      !error.response?.config?.url?.includes("auth/refresh") &&
      !error.response?.config?.url?.includes("signin")
    ) {
      return refreshToken(error);
    }
    return Promise.reject(error);
  }
);

let fetchingToken = false;

let subscribers = [];

const onAccessTokenFetched = (token) => {
  subscribers.forEach((callback) => callback(token));
  subscribers = [];
};

const addSubscriber = (callback) => {
  subscribers.push(callback);
};

const refreshToken = async (oError) => {
  try {
    const { response } = oError;

    // create new Promise to retry original request
    const retryOriginalRequest = new Promise((resolve) => {
      addSubscriber((token) => {
        response.config.headers["Authorization"] = `Bearer ${token}`;
        resolve(axios(response.config));
      });
    });

    // check whether refreshing token or not
    if (!fetchingToken) {
      fetchingToken = true;

      // refresh token
      const { data } = await axiosInstance.post("/api/v1/auth/refresh");
      // check if this is server or not. We don't wanna save response token on server.
      if (!isServer) {
        setAccessToken(data.accessToken);
      }
      // when new token arrives, retry old requests
      onAccessTokenFetched(data.accessToken);
    }
    return retryOriginalRequest;
  } catch (error) {
    // on error go to login page
    if (!isServer() && !Router.asPath.includes("/login")) {
      Router.push("/login");
    }
    if (isServer()) {
      context.res.setHeader("location", "/login");
      context.res.statusCode = 302;
      context.res.end();
    }
    return Promise.reject(oError);
  } finally {
    fetchingToken = false;
  }
};
