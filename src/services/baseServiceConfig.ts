import axios, { type AxiosInstance } from "axios";

const baseService: AxiosInstance = axios.create({
  baseURL: "https://dataservice.accuweather.com",
});

baseService.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    apikey: 'YZSWEdE0ZpV6UMJjz92fIXH8Rrk0t9n9',
  };
  return config;
});

export default baseService;
