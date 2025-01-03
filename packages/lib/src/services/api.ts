// packages/lib/src/services/api.ts
// Uses Axios to interact with a custom backend. The base URL is set via ENV.

import axios from 'axios';
import { ENV } from './config/env';

const api = axios.create({
  baseURL: ENV.API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchData = async <T>(endpoint: string, params?: object): Promise<T> => {
  try {
    const response = await api.get<T>(endpoint, { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const postData = async (endpoint: string, data: object) => {
  try {
    const response = await api.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
};

export default api;
