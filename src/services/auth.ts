import axios from "axios";

export async function loginUser(username: string, password: string) {
  try {
    const data = {
      username: username,
      password: password,
    };
    const response = await axios.post(`https://dummyjson.com/auth/login`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
}
