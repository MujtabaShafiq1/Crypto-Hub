import { HYDRATE } from "next-redux-wrapper";
import { createSlice } from "@reduxjs/toolkit";
import { getUser } from "./authActions";

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
    login(state, action) {
      state.user = action.payload;
      state.status = true;
    },
    logout: () => initialState,
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.auth,
      };
    },
    [getUser.pending]: (state, action) => {
      state = initialState;
    },
    [getUser.rejected]: (state, action) => {
      state.error = action.payload;
      state.status = false;
    },
    [getUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.status = true;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
