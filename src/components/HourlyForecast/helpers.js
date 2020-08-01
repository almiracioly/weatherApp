import moment from 'moment';

export function dataTransform(forecasts) {
  return forecasts
    .map((forecast, i) => {
      return {
        id: i + 1,
        hourText: moment.unix(forecast.dt).format('HH'),
        icon: forecast.weather[0].icon,
        temperatureText: Math.floor(forecast.temp),
      };
    })
    .splice(0, 24);
}
