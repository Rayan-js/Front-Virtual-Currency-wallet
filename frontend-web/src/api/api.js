import axios from 'axios';

const api = axios.create({
  baseURL: 'http://<IP_BACKEND>:3000', // Substituir pelo IP da API
});

export default api;
