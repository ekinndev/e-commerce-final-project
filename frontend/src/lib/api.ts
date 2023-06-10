import axios from 'axios';

const apiClient = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:3000',
});

export default apiClient;
