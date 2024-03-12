import axios from "axios";
import store from "../store/store";
import { setRequestCount } from "../store/slices/preloaderSlice";

const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    store.dispatch(setRequestCount(1));
    console.log("Request intercepted:", config);
    return config;
  },
  (error) => {
    store.dispatch(setRequestCount(-1));
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    store.dispatch(setRequestCount(-1));
    console.log("Response intercepted:", response);
    return response;
  },
  (error) => {
    store.dispatch(setRequestCount(-1));
    console.error("Response error:", error);
    return Promise.reject(error);
  }
);

const setAuthorizationHeader = (token: string) => {
  axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  console.log("Authorization header set:", token);
};

const removeAuthorizationHeader = () => {
  delete axiosInstance.defaults.headers.common["Authorization"];
  console.log("Authorization header removed");
};

export default axiosInstance;
export { setAuthorizationHeader, removeAuthorizationHeader };
