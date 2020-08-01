import server from './server';

const api = {
  getWeatherInfo: (params) => server.get('', {params}),
};

export default api;
