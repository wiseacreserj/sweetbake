import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// Импортируем настроенный инстанс axios из api
import api from "@api/axiosInstance";

// Асинхронный экшен для логина
export const fetchLogin = createAsyncThunk(
    "auth/fetchLogin",
    async (credentials, { rejectWithValue }) => {
        try {
            // Используем инстанс api вместо обычного axios
            const response = await api.post("/users/login", credentials);
            return response.data; // Ожидается, что сервер вернет { accessToken }
        } catch (error) {
            return rejectWithValue(error.response?.data || "Login failed");
        }
    }
);

// Асинхронный экшен для обновления токена
export const fetchRefresh = createAsyncThunk(
    "auth/fetchRefresh",
    async (_, { rejectWithValue }) => {
        try {
            // Используем инстанс api для запроса обновления токена
            const response = await api.get("/users/refresh");
            return response.data; // Ожидается, что сервер вернет { accessToken }
        } catch (error) {
            return rejectWithValue(
                error.response?.data || "Token refresh failed"
            );
        }
    }
);

// Начальное состояние
const initialState = {
    token: null,
    status: "idle",
    error: null,
};

// Создание слайса
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.token = null;
            state.status = "idle";
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchLogin.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchLogin.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.token = action.payload.accessToken;
            })
            .addCase(fetchLogin.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            })
            .addCase(fetchRefresh.fulfilled, (state, action) => {
                state.token = action.payload.accessToken;
            });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
