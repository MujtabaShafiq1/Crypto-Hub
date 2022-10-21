import { createSlice } from "@reduxjs/toolkit";
import { getUser } from "./authActions"

const initialState = {
    user: { userId: null, name: null, photo: null, provider: null },
    status: null,
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
    }
})

export const authActions = authSlice.actions;
export default authSlice;
