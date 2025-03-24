import axios from "axios";
import { store } from "@store";
import { fetchRefresh, logout } from "@store/authSlice"; // Импорты экшенов для обновления токена и логаута

// Создаем базовый инстанс Axios с настройками по умолчанию
const api = axios.create({
    baseURL: "http://localhost:5000/api", // Базовый URL для всех запросов
    withCredentials: true, // Позволяет отправлять куки вместе с запросами (нужно для рефреш токена)
    headers: {
        "Content-Type": "application/json",
    },
});

// Флаг для отслеживания процесса обновления токена, чтобы не делать много запросов одновременно
let isRefreshing = false;
// Очередь запросов, которые будут выполнены после обновления токена
let failedQueue = [];

// Функция для обработки неудачных запросов во время обновления токена
const processQueue = (error, token = null) => {
    failedQueue.forEach((prom) => {
        if (error) {
            prom.reject(error);
        } else {
            prom.resolve(token);
        }
    });
    failedQueue = [];
};

// Добавляем перехватчик запросов
api.interceptors.request.use(
    (config) => {
        // Получаем текущий токен из стора
        const token = store.getState().auth.token;

        // Если токен есть, добавляем его в заголовок Authorization
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        // Если произошла ошибка при формировании запроса, отклоняем промис
        return Promise.reject(error);
    }
);

// Добавляем перехватчик ответов для обработки ошибок
api.interceptors.response.use(
    (response) => {
        // Если запрос успешен, просто возвращаем ответ
        return response;
    },
    async (error) => {
        const originalRequest = error.config;

        // Если получили ошибку 401 (не авторизован), пытаемся обновить токен
        if (
            error.response &&
            error.response.status === 401 &&
            !originalRequest._retry
        ) {
            if (isRefreshing) {
                // Если уже идет процесс обновления токена, добавляем запрос в очередь
                return new Promise((resolve, reject) => {
                    failedQueue.push({ resolve, reject });
                })
                    .then((token) => {
                        // После успешного обновления повторяем оригинальный запрос с новым токеном
                        originalRequest.headers.Authorization = `Bearer ${token}`;
                        return axios(originalRequest);
                    })
                    .catch((err) => {
                        return Promise.reject(err);
                    });
            }

            // Если обновление токена еще не запущено, ставим флаг
            originalRequest._retry = true;
            isRefreshing = true;

            try {
                // Делаем запрос на обновление токена
                const response = await store.dispatch(fetchRefresh()).unwrap();

                // Получаем новый токен из ответа
                const newToken = response.accessToken;

                // Повторяем все запросы из очереди с новым токеном
                processQueue(null, newToken);

                // Добавляем новый токен в заголовки оригинального запроса и повторяем его
                originalRequest.headers.Authorization = `Bearer ${newToken}`;
                return axios(originalRequest);
            } catch (refreshError) {
                // Если рефреш не удался — разлогиниваем пользователя
                store.dispatch(logout());
                processQueue(refreshError, null);
                return Promise.reject(refreshError);
            } finally {
                isRefreshing = false;
            }
        }

        // Если это не 401 ошибка, отклоняем промис с оригинальной ошибкой
        return Promise.reject(error);
    }
);

export default api;
