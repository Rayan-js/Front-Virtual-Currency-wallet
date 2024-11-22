import axios from "axios";

const api = axios.create({
  baseURL: "http://18.228.16.172:3000", // Substituir pelo IP da API
});

export default api;
