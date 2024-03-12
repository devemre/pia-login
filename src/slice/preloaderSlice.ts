import { createSlice } from "@reduxjs/toolkit";

interface PreloaderState {
  isLoading: boolean;
}

const initialState: PreloaderState = {
  isLoading: false,
};

const preloaderSlice = createSlice({
  name: "preloader",
  initialState,
  reducers: {
    showPreloader: (state) => {
      debugger;
      state.isLoading = true;
    },
    hidePreloader: (state) => {
      debugger;
      state.isLoading = false;
    },
  },
});

export const { showPreloader, hidePreloader } = preloaderSlice.actions;
export default preloaderSlice.reducer;
