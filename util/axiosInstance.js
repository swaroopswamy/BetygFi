import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

export const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    post: {
      "Content-Type": "application/json",
      'Cache-Control': 'max-age=3600'
    },
    Accept: "application/json",
  },
  withCredentials: false, // to send cookie
});
