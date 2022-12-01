import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "not-authenticated",
    user: null,
    errorMessage: null,
  },
  reducers: {
    onChecking: (state) => {
      state.status = "checking";
      state.user = null;
      state.errorMessage = null;
    },
    onLogin: (state, { payload }) => {
      state.status = "authenticated";
      state.user = payload;
      state.errorMessage = null;
    },
    onResetState: (state) => {
      state.status = "not-authenticated";
      state.user = null;
      state.errorMessage = null;
    },
  },
});

export const { onChecking, onLogin, onResetState } = authSlice.actions;
