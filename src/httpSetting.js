import axios from "axios";
import { getTokenFromStorage } from './utils/storage';

axios.defaults.baseURL = "http://localhost:8080";
axios.interceptors.request.use(config => {
  const token = getTokenFromStorage();
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
})

export default axios;