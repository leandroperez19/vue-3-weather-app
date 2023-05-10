import axios, { type AxiosInstance } from "axios";

const baseService: AxiosInstance = axios.create({
  baseURL: "https://dataservice.accuweather.com",
});

baseService.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    apikey: "M6xb4AQMzNXHR2wPj4RrNG7GSUFzDbCL",
  };
  return config;
});

export default baseService;
