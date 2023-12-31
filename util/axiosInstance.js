import axios from "axios";

export const axiosInstance = baseAPI_URL => {
  return axios.create({
    baseURL: baseAPI_URL,
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
