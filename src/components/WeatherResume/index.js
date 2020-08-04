import React from 'react';
import QuickWeatherInfo from './QuickWeatherInfo';
import Temperature from '../Temperature';

function WeatherResume({cityName, currentWeather, temperatureValue}) {
  return (
    <>
      <QuickWeatherInfo cityName={cityName} currentWeather={currentWeather} />
      <Temperature value={temperatureValue} />
    </>
  );
}

export default WeatherResume;
