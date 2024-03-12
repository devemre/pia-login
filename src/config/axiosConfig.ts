import axios from "axios";
import store from "../store/store";
import { hidePreloader, showPreloader } from "../slice/preloaderSlice";

const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    store.dispatch(showPreloader());
    console.log("Request intercepted:", config);
    return config;
  },
  (error) => {
    store.dispatch(hidePreloader());
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    store.dispatch(hidePreloader());
    console.log("Response intercepted:", response);
    return response;
  },
  (error) => {
    store.dispatch(hidePreloader());
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
