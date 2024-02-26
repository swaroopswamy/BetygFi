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

export const axiosNTFInstance = (baseURL) => {
  if (!baseURL) baseURL = '';
  return axios.create({
    // baseURL: baseURL || process.env.API_SERVICE_URL,
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