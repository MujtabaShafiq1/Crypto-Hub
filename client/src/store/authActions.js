import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const getUser = createAsyncThunk("user/login", async (arg, { rejectWithValue }) => {
    try {
        const response = await axios.get("http://localhost:8000/auth/login/success", { withCredentials: true })

        if (response.status !== 200) throw new Error(response.message)

        console.log(response.data.user);
        return response.data.user;

    } catch (e) {
        return rejectWithValue(e.message)
    }
})