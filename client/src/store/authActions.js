import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const getUser = createAsyncThunk("user/login", async (arg, { rejectWithValue }) => {
    try {
        const response = await axios.get("http://localhost:8000/user/me", {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        if (response.status !== 200) throw new Error(response.message)
        return response.data;

    } catch (e) {
        return rejectWithValue((e.response?.data?.message || "Server is down , please try again later"))
    }
})