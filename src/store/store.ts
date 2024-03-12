import { configureStore } from "@reduxjs/toolkit";
import preloaderSlice from "./slices/preloaderSlice";

const store = configureStore({
  reducer: {
    preloader: preloaderSlice,
  },
});

export default store;
