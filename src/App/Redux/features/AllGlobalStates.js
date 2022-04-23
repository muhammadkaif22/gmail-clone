import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  opensignup: false,
  signinLoading: false,
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
  },
});

export const { OpenSignUp, CloseSignUp, setloadingTrue, setloadingFalse } =
  GlobalSlice.actions;

export const selectOpenSignupState = (state) => state.GlobalStates.opensignup;
export const selectLoadingState = (state) => state.GlobalStates.signinLoading;

export default GlobalSlice.reducer;
