import React from 'react';
import WeatherIcon from '../../shared/WeatherIcon';
import {
  Row,
  WeekdayContainer,
  WeekdayText,
  TemperatureContainer,
  MinMaxTemperatureText,
} from './styles';

function DailyForecast({
  id,
  weekday,
  minTemperature,
  maxTemperature,
  iconName,
}) {
  return (
    <>
      <Row fullWidth jContent="space-between" aItems="center">
        <WeekdayContainer>
          <WeekdayText>{weekday}</WeekdayText>
        </WeekdayContainer>
        <WeatherIcon iconName={iconName} />
        <TemperatureContainer>
          <MinMaxTemperatureText max>{maxTemperature}º</MinMaxTemperatureText>
          <MinMaxTemperatureText min>{minTemperature}º</MinMaxTemperatureText>
        </TemperatureContainer>
      </Row>
    </>
  );
}

export default DailyForecast;
