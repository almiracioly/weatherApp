import axios from 'axios';
import {API_URL, KEY} from '../constants';

const server = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

server.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    appid: KEY,
    lang: 'pt_br',
    units: 'metric',
  };
  return config;
});

export default server;
