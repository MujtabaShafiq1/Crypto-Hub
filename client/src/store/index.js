import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import authSlice from "./auth-slice";

const store = configureStore({
  reducer: { auth: authSlice.reducer },
});

const makeStore = () => store;
export const wrapper = createWrapper(makeStore);
