import axios from 'axios';
import {WEATHER_API_URL, WEATHER_API_KEY} from '../../constants';

const weatherApiClient = axios.create({
  baseURL: WEATHER_API_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

weatherApiClient.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    appid: WEATHER_API_KEY,
    lang: 'pt_br',
    units: 'metric',
  };
  return config;
});

export default weatherApiClient;
