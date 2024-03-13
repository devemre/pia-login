import axiosInstance from "../config/axiosConfig";

export async function getProducts() {
  try {
    const response = await axiosInstance.get("/products");
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getCategories() {
  try {
    const response = await axiosInstance.get("/products/categories");
    return response.data;
  } catch (error) {
    throw error;
  }
}
