import React from 'react';
import {Col, HourText, TemperatureText} from './styles';
import WeatherIcon from '../../shared/WeatherIcon';

function HourPreview({hourText, icon, temperatureText}) {
  return (
    <Col>
      <HourText>{hourText}</HourText>
      <WeatherIcon iconName={icon} />
      <TemperatureText>{temperatureText}º</TemperatureText>
    </Col>
  );
}

export default HourPreview;
