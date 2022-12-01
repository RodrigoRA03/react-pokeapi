import axios from "axios";

const clientAxios = axios.create({
  baseURL: import.meta.env.VITE_POKE_API_URL,
});

const laravelApiAxios = axios.create({
  baseURL: import.meta.env.VITE_LARAVEL_BACKEND_API_URL,
});

laravelApiAxios.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  };
  return config;
});

export { clientAxios, laravelApiAxios };
