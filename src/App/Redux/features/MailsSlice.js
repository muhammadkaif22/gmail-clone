import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recivedMails: [],
  onScreenMail: [],
  InboxTotalMails: 0,
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
    setInboxTotalMails: (state, action) => {
      state.InboxTotalMails = action.payload;
    },
  },
});

export const { setRecivedMails, setonScreenMail, setInboxTotalMails } =
  MailSlice.actions;

export const selectRecivedMails = (state) => state.Mails.recivedMails;
export const selectonScreenMail = (state) => state.Mails.onScreenMail;
export const selectInboxTotalMails = (state) => state.Mails.InboxTotalMails;

export default MailSlice.reducer;
