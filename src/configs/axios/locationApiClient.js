import axios from 'axios';
import {LOCATION_API_URL, LOCATION_API_KEY} from '../../constants';

const locationApiClient = axios.create({
  baseURL: LOCATION_API_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

locationApiClient.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    key: LOCATION_API_KEY,
    format: 'json',
  };
  return config;
});

export default locationApiClient;
