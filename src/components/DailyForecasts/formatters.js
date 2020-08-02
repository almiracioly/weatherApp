import moment from 'moment';

export function dailyForecastsFormatter(forecasts) {
  return forecasts.map((forecast) => {
    return {
      id: forecast.dt,
      weekday: moment.unix(forecast.dt).format('dddd'),
      minTemperature: Math.floor(forecast.temp.min),
      maxTemperature: Math.floor(forecast.temp.max),
      iconName: forecast.weather[0].icon,
    };
  });
}
