import { createSlice } from "@reduxjs/toolkit";
import { getUser } from "./authActions"

const initialState = {
    user: { userId: null, name: null, photo: null },
    status: false,
    error: null,
}

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
        [getUser.pending]: (state, action) => {
            state = initialState 
            state.status = null;   
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
