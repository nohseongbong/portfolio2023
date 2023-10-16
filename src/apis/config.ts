import axios from "axios";
export const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? "";

export const axiosInstance = axios.create({
  baseURL: `${apiUrl}`,
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  async (response) => {
    return response;
  },
  async (error) => {
    return Promise.reject(error);
  }
);
