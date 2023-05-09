import axios, { type AxiosInstance } from "axios";

const baseService: AxiosInstance = axios.create({
  baseURL: "https://dataservice.accuweather.com",
});

baseService.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    apikey: "VB4GuQNE6VRc2rKdiIiINtK3hIe34tYO",
  };
  return config;
});

export default baseService;
