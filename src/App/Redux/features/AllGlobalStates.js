import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  opensignup: false,
  signinLoading: false,
  opensidebar: false,
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
  },
});

export const {
  OpenSignUp,
  CloseSignUp,
  setloadingTrue,
  setloadingFalse,
  OpenAndCloseSidebar,
} = GlobalSlice.actions;

export const selectOpenSignupState = (state) => state.GlobalStates.opensignup;
export const selectLoadingState = (state) => state.GlobalStates.signinLoading;
export const selectOpensidebarState = (state) => state.GlobalStates.opensidebar;

export default GlobalSlice.reducer;
