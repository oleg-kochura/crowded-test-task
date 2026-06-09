import axios from 'axios';

const BASE_URL =
  import.meta.env.VITE_API_BASE_URL ?? 'https://crowded-frontend-assignment.netlify.app/api';
const API_KEY = import.meta.env.API_KEY ?? '';

if (!API_KEY) {
  console.warn('[apiClient] Missing API key. Set API_KEY in your .env file.');
}

export const apiClient = axios.create({
  baseURL: BASE_URL,
});

apiClient.interceptors.request.use((config) => {
  config.params = { ...config.params, apiKey: API_KEY };

  return config;
});
