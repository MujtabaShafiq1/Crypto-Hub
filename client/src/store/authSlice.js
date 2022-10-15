import { createSlice } from "@reduxjs/toolkit";
import { getUser } from "./authActions"

const initialState = {
    user: {},
    status: false,
    error: null,
}

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        // non async functions here
    },
    extraReducers: {
        [getUser.pending]: (state, action) => {
            state.status = false;
        },
        [getUser.rejected]: (state, action) => {
            state.error = action.payload
            state.status = false
            state.user = []
        },
        [getUser.fulfilled]: (state, action) => {
            state.user = { ...action.payload }
            state.status = true
            state.error = ""
        },
    }
})

export const authActions = authSlice.actions;
export default authSlice;
