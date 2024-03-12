import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface PreloaderState {
  isLoading: boolean;
  requestCount: number;
}

const initialState: PreloaderState = {
  isLoading: false,
  requestCount: 0,
};

const preloaderSlice = createSlice({
  name: "preloader",
  initialState,
  reducers: {
    showPreloader: (state) => {
      state.isLoading = true;
    },
    hidePreloader: (state) => {
      state.isLoading = false;
    },
    setRequestCount: (state, action: PayloadAction<number>) => {
      const requestCount = state.requestCount + action.payload;
      state.requestCount = requestCount;
      if (requestCount === 0) {
        state.isLoading = false;
      } else {
        state.isLoading = true;
      }
    },
  },
});

export const { showPreloader, hidePreloader, setRequestCount } =
  preloaderSlice.actions;
export default preloaderSlice.reducer;
