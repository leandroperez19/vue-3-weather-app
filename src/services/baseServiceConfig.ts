import axios, { type AxiosInstance } from "axios";

const baseService: AxiosInstance = axios.create({
  baseURL: "https://dataservice.accuweather.com",
});

baseService.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    apikey: 'wsWOKqAKTPg1oG7jZhIAWuK4Z2fLuLFu',
  };
  return config;
});

export default baseService;
