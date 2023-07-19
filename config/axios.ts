import axios from "axios";
import { getToken } from "./localStorage";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

const initializeAxios = (token?: string) =>
  axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true,
     headers: {
       Authorization: `Bearer ${token || getToken() || ''}`,
     },
});


const axiosInstance = initializeAxios();

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getToken();
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
});

export default axiosInstance;

