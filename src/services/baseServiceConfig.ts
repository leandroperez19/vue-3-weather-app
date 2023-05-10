import axios, { type AxiosInstance } from "axios";

const baseService: AxiosInstance = axios.create({
  baseURL: "https://dataservice.accuweather.com",
});

baseService.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    apikey: '3GS4fFCjTezzXKzf1JrYmeolUXBRtRh9',
  };
  return config;
});

export default baseService;
