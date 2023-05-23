import { HYDRATE } from "next-redux-wrapper";
import { createSlice } from "@reduxjs/toolkit";
import { getUser } from "./auth-actions";

const initialState = {
  user: {
    username: null,
    name: null,
    avatar: null,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(HYDRATE, (state, action) => {
        return {
          ...state,
          ...action.payload,
        };
      })
      .addCase(getUser.pending, (state, action) => {
        state = initialState;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.user = initialState;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.user = action.payload;
      });
  },
});

export const selectUserState = (state) => state.auth.user;

export const authActions = authSlice.actions;
export default authSlice;
