import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product } from "../../type/Product";

interface ProductState {
  products: Product[];
  categories: string[];
}

const initialState: ProductState = {
  products: [],
  categories: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    setCategories: (state, action: PayloadAction<string[]>) => {
      state.categories = action.payload;
    },
  },
});

export const { setProducts, setCategories } = productSlice.actions;
export default productSlice.reducer;
