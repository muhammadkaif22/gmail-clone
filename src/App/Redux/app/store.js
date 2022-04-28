import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/UserSilce";
import GlobalReducer from "../features/AllGlobalStates";
import MailReducer from "../features/MailsSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    GlobalStates: GlobalReducer,
    Mails: MailReducer,
  },
});
