import axiosInstance from "../config/axiosConfig";

export async function loginUser(username: string, password: string) {
  try {
    const data = {
      username: username,
      password: password,
    };
    const response = await axiosInstance.post(`/auth/login`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
}
