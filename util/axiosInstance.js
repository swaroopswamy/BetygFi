import axios from "axios";

export const axiosInstance = baseURL => axios.create({
  baseURL: baseURL || process.env.NEXT_PUBLIC_API_URL,
  headers: {
    post: {
      "Content-Type": "application/json",
      'Cache-Control': 'max-age=3600'
    },
    Accept: "application/json",
  },
  withCredentials: false,
});
