import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

const initializeAxios = () =>
  axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true,
  });

const axiosInstance = initializeAxios();

export default axiosInstance;
