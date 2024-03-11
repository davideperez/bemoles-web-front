import axios from "../config/axios";

export const authService = {
  login: (userCredentials: {username: string, password: string}) => axios.post(`/api/auth/login`, userCredentials),
  logout: () => axios.post(`/api/auth/logout`),
  me: () => axios.get(`/api/auth/me`),
  refreshToken: () => axios.get(`/api/auth/refreshToken`),
};