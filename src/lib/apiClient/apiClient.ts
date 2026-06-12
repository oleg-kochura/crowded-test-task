import axios from 'axios';

import { logger } from 'lib/logger';

const BASE_URL =
  import.meta.env.VITE_API_BASE_URL ?? 'https://crowded-frontend-assignment.netlify.app/api';
const API_KEY = import.meta.env.API_KEY ?? '';

if (!API_KEY) {
  logger.log({
    level: 'warn',
    message: 'Missing API key. Set API_KEY in your .env file.',
    context: { source: 'apiClient' },
  });
}

export const apiClient = axios.create({
  baseURL: BASE_URL,
});

apiClient.interceptors.request.use((config) => {
  config.params = { ...config.params, apiKey: API_KEY };

  return config;
});
