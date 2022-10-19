import { createSlice } from "@reduxjs/toolkit";
import { getUser } from "./authActions"

const initialState = {
    user: { id: null, name: null, photos: [], provider: null },
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
            state = initialState;
        },
        [getUser.rejected]: (state, action) => {
            state.error = action.payload;
        },
        [getUser.fulfilled]: (state, action) => {
            // const { id, displayName, photos, provider } = action.payload;
            // const newUser = { id, name: displayName, photos, provider }
            // state.user = newUser;
            state.user = { ...action.payload }
            state.status = true;
        },
    }
})

export const authActions = authSlice.actions;
export default authSlice;
