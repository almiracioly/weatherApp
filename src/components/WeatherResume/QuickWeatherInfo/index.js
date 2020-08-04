import React from 'react';
import {CityName, CurrentWeather} from './styles';

function QuickWeatherInfo({cityName, currentWeather}) {
  return (
    <>
      <CityName>{cityName}</CityName>
      <CurrentWeather>{currentWeather}</CurrentWeather>
    </>
  );
}

export default QuickWeatherInfo;
