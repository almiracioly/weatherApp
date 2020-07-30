import React from 'react';
import HourPreview from './HourPreview';
import {
  Row,
  WeekdayText,
  TodayText,
  MinMaxTemperatureText,
  HourlyForecastContainer,
} from './styles';
import {FlatList} from 'react-native';
import {HOURLY_FORECASTS} from './mockData';

function HourlyForecast({hour, icon, temperature}) {
  return (
    <>
      <Row fullWidth jContent="space-between">
        <Row>
          <WeekdayText>Quinta-feira</WeekdayText>
          <TodayText>HOJE</TodayText>
        </Row>
        <Row>
          <MinMaxTemperatureText max>22º</MinMaxTemperatureText>
          <MinMaxTemperatureText min>19º</MinMaxTemperatureText>
        </Row>
      </Row>
      <HourlyForecastContainer>
        <FlatList
          horizontal
          data={HOURLY_FORECASTS}
          renderItem={({item}) => <HourPreview {...item} />}
          keyExtractor={(item) => String(item.id)}
        />
      </HourlyForecastContainer>
    </>
  );
}

export default HourlyForecast;
