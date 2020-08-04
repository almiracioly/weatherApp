import React from 'react';
import weatherService from '../../services/weatherService';

function useWeather() {
  const [current, setCurrent] = React.useState({});
  const [hourly, setHourly] = React.useState([]);
  const [daily, setDaily] = React.useState([]);
  const [error, setError] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function getWeatherInfo() {
      try {
        const response = await weatherService.getWeatherInfo({
          lat: -9.6622452, // TODO: get real current GEO
          lon: -35.7561595,
        });

        setCurrent(response.data.current);
        setHourly(response.data.hourly);
        setDaily(response.data.daily);
        setError(false);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getWeatherInfo();
  }, []);

  return {current, hourly, daily, error, isLoading};
}

export default useWeather;
