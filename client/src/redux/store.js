import { configureStore, combineReducers } from "@reduxjs/toolkit";

import videoReducer from "./videoSlice";

export const store = configureStore({
  reducer: {
    video: videoReducer,
  },
});
