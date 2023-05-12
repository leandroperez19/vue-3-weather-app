import axios, { type AxiosInstance } from "axios";

const baseService: AxiosInstance = axios.create({
  baseURL: "https://dataservice.accuweather.com",
});

baseService.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    apikey: 'uhrWzaq4ZGUhTSNd1z1rhJTYP62kbi4n',
  };
  return config;
});

export default baseService;
