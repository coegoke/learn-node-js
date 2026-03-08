import axios from 'axios';

// Konfigurasi dasar Axios
const api = axios.create({
    baseURL: 'http://localhost:3000/api', // Alamat backend kita
});

// Interceptor: Menambahkan token secara otomatis ke setiap request jika ada
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;
