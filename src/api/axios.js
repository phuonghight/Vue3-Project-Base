import axios from "axios";

import { LocalStorageConstant } from "@/constant/localStorage.constant";
import router from "@/router";

const api = axios.create({
  baseURL: `http://localhost:8080/api/v1`,
  // baseURL: `${import.meta.env.VITE_API_URL}/api/v1`,
  headers: {
    "Content-Type": "application/json",
  },
});
api.interceptors.request.use((config) => {
  const token = localStorage.getItem(LocalStorageConstant.accessToken);
  config.headers.Authorization = "Bear " + token;
  return config;
}, Promise.reject);
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem(LocalStorageConstant.accessToken);
      router.push("/login");
    }
    return Promise.reject(error);
  }
);

const apiDefault = axios.create({
  baseURL: `http://localhost:8080/api/v1/auth`,
  // baseURL: `${import.meta.env.VITE_API_URL}/api/v1/auth`,
  headers: {
    "Content-Type": "application/json",
  },
});

export { api, apiDefault };
