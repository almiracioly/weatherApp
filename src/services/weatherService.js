import weatherApiClient from '../configs/axios/weatherApiClient';

const weatherService = {
  getWeatherInfo: (params) => weatherApiClient.get('', {params}),
};

export default weatherService;
