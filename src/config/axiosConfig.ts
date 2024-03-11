import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    console.log("Request intercepted:", config);
    return config;
  },
  (error) => {
    console.error("Request error:", error);
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    console.log("Response intercepted:", response);
    return response;
  },
  (error) => {
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
