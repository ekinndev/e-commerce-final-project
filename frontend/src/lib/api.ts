import axios from 'axios';

const apiClient = axios.create({
  withCredentials: true,
  baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://api.ecommerce.ekinn.dev',
});

export default apiClient;
