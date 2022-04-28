import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recivedMails: [],
  onScreenMail: [],
};

export const MailSlice = createSlice({
  name: "Mails",
  initialState,
  reducers: {
    setRecivedMails: (state, action) => {
      state.recivedMails = action.payload;
    },
    setonScreenMail: (state, action) => {
      state.onScreenMail = action.payload;
    },
  },
});

export const { setRecivedMails, setonScreenMail } = MailSlice.actions;

export const selectRecivedMails = (state) => state.Mails.recivedMails;
export const selectonScreenMail = (state) => state.Mails.onScreenMail;

export default MailSlice.reducer;
