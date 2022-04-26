import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  opensignup: false,
  signinLoading: false,
  opensidebar: false,
  CurrentActiveMailOption: "inbox",
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
  },
});

export const {
  OpenSignUp,
  CloseSignUp,
  setloadingTrue,
  setloadingFalse,
  OpenAndCloseSidebar,
  setCurrentActiveMailOption,
} = GlobalSlice.actions;

export const selectOpenSignupState = (state) => state.GlobalStates.opensignup;
export const selectLoadingState = (state) => state.GlobalStates.signinLoading;
export const selectOpensidebarState = (state) => state.GlobalStates.opensidebar;
export const selectCurrentActiveMailOption = (state) =>
  state.GlobalStates.CurrentActiveMailOption;

export default GlobalSlice.reducer;
