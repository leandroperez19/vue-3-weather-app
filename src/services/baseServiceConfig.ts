import axios, { type AxiosInstance } from "axios";

const baseService: AxiosInstance = axios.create({
  baseURL: "https://dataservice.accuweather.com",
});

baseService.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    apikey: "XWANJxWMm2CWRbYWeyTbAq8dfq8SmITe",
  };
  return config;
});

export default baseService;
