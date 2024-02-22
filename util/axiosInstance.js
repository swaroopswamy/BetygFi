import axios from "axios";

export const axiosInstance = (baseURL) => {
  if (!baseURL) baseURL = '';
  return axios.create({
    headers: {
      post: {
        "Content-Type": "application/json",
        'Cache-Control': 'max-age=3600'
      },
      Accept: "application/json",
    },
    withCredentials: false,
  });
};
