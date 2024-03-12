import { configureStore } from "@reduxjs/toolkit";
import preloaderSlice from "../slice/preloaderSlice";

const store = configureStore({
  reducer: {
    preloader: preloaderSlice,
  },
});

export default store;
