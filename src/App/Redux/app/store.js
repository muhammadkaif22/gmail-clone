import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/UserSilce";
import GlobalReducer from "../features/AllGlobalStates";

export const store = configureStore({
  reducer: {
    user: userReducer,
    GlobalStates: GlobalReducer,
  },
});
