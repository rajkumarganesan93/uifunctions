import axios, { type AxiosInstance } from "axios";

const client: AxiosInstance = axios.create({
  baseURL: process.env.API_BASE_URL || "",
  timeout: 10000,
});

export const get = <T>(url: string, config = {}) => client.get<T>(url, config);
export const post = <T>(url: string, data: any, config = {}) => client.post<T>(url, data, config);
export const put = <T>(url: string, data: any, config = {}) => client.put<T>(url, data, config);
export const del = <T>(url: string, config = {}) => client.delete<T>(url, config);