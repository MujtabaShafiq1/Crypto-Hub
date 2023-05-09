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
    logout: () => initialState,
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    [getUser.pending]: (state, action) => {
      state = initialState;
    },
    [getUser.rejected]: (state, action) => {
      state = initialState;
    },
    [getUser.fulfilled]: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
