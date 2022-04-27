import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  opensignup: false,
  signinLoading: false,
  opensidebar: false,
  CurrentActiveMailOption: "inbox",
  openComposeMail: false,
};

export const GlobalSlice = createSlice({
  name: "GlobalStates",
  initialState,
  reducers: {
    OpenSignUp: (state, action) => {
      state.opensignup = true;
    },
    CloseSignUp: (state, action) => {
      state.opensignup = false;
    },
    setloadingTrue: (state, action) => {
      state.signinLoading = true;
    },
    setloadingFalse: (state, action) => {
      state.signinLoading = false;
    },
    OpenAndCloseSidebar: (state, action) => {
      state.opensidebar = !state.opensidebar;
    },
    setCurrentActiveMailOption: (state, action) => {
      state.CurrentActiveMailOption = action.payload;
    },
    OpenAndCloseopenComposeMail: (state, action) => {
      state.openComposeMail = !state.openComposeMail;
    },
  },
});

export const {
  OpenSignUp,
  CloseSignUp,
  setloadingTrue,
  setloadingFalse,
  OpenAndCloseSidebar,
  setCurrentActiveMailOption,
  OpenAndCloseopenComposeMail,
} = GlobalSlice.actions;

export const selectOpenSignupState = (state) => state.GlobalStates.opensignup;
export const selectLoadingState = (state) => state.GlobalStates.signinLoading;
export const selectOpensidebarState = (state) => state.GlobalStates.opensidebar;
export const selectCurrentActiveMailOption = (state) =>
  state.GlobalStates.CurrentActiveMailOption;

export const selectComposeMail = (state) => state.GlobalStates.openComposeMail;

export default GlobalSlice.reducer;
