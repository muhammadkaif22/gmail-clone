import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/UserSilce";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
