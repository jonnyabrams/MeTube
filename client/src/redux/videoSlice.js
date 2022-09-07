import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentVideo: null,
  loading: false,
  error: false,
};

export const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },
    fetchSuccess: (state, action) => {
      state.loading = false;
      state.currentVideo = action.payload;
    },
    fetchFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
    view: (state) => {
      state.currentVideo.views += 1;
    },
  },
});

export const { fetchStart, fetchSuccess, fetchFailure, view } =
  videoSlice.actions;

export default videoSlice.reducer;
