import { configureStore } from "@reduxjs/toolkit";
import { storyListReducer } from "./reducers/storyReducers";

const store = configureStore({
  reducer: {
    storyList: storyListReducer,
  },
});

export default store;
