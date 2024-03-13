import { configureStore } from "@reduxjs/toolkit";
import preloaderSlice from "./slices/preloaderSlice";
import productSlice from "./slices/productSlice";

const store = configureStore({
  reducer: {
    preloader: preloaderSlice,
    product: productSlice,
  },
});

export default store;
