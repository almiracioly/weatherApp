import React from 'react';
import {Image} from './styles';

function WeatherIcon({iconName}) {
  const iconUri = `http://openweathermap.org/img/wn/${iconName}@2x.png`;
  return <Image source={{uri: iconUri}} />;
}

export default WeatherIcon;
