import axios from 'axios';

const apiClient = axios.create({
  withCredentials: true,
  baseURL:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'https://e-commerce-final-be-penwtklslq-ew.a.run.app',
});

export default apiClient;
