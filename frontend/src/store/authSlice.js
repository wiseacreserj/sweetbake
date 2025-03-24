import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "@api/axiosInstance";

export const fetchLogin = createAsyncThunk(
    "auth/fetchLogin",
    async (credentials, { rejectWithValue }) => {
        try {
            const response = await api.post("/users/login", credentials);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || "Login failed");
        }
    }
);

export const fetchLogout = createAsyncThunk(
    "auth/fetchLogout",
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.get("/users/logout");
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || "Logout failed");
        }
    }
);

export const fetchRefresh = createAsyncThunk(
    "auth/fetchRefresh",
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.get("/users/refresh");
            return response.data;
        } catch (error) {
            return rejectWithValue(
                error.response?.data || "Token refresh failed"
            );
        }
    }
);

const initialState = {
    token: null,
    status: "idle",
    error: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchLogin.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchLogin.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.token = action.payload.token;
                state.error = null;
            })
            .addCase(fetchLogin.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })
            .addCase(fetchRefresh.fulfilled, (state, action) => {
                state.token = action.payload.token;
            });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
