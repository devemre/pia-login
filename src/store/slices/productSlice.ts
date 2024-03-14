import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CategoryProducts } from "../../type/CategoryProducts";

interface ProductState {
  products: CategoryProducts;
  categories: string[];
  activeCategory: string;
}

const initialState: ProductState = {
  products: {},
  categories: [],
  activeCategory: "",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<CategoryProducts>) => {
      state.products = action.payload;
    },
    setCategories: (state, action: PayloadAction<string[]>) => {
      state.categories = action.payload;
    },
    setActiveCategory: (state, action: PayloadAction<string>) => {
      state.activeCategory = action.payload;
    },
  },
});

export const { setProducts, setCategories, setActiveCategory } =
  productSlice.actions;
export default productSlice.reducer;
