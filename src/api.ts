import axios from 'axios';

export const API_BASE_URL = 'http://localhost:3000/api';

export const api = axios.create({
  baseURL: API_BASE_URL,
});

api.interceptors.response.use(
  response => response.data,
  error => Promise.reject(error)
);

export const API_ENDPOINTS = {
    MEDITATIONS: `${API_BASE_URL}/meditations`,
};