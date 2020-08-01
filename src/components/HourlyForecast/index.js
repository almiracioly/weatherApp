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
import moment from 'moment';
import {dataTransform} from './helpers';

function HourlyForecast({forecasts}) {
  return (
    <>
      <Row fullWidth jContent="space-between">
        <Row>
          <WeekdayText>{moment().format('dddd')}</WeekdayText>
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
          data={dataTransform(forecasts)}
          renderItem={({item}) => <HourPreview {...item} />}
          keyExtractor={(item) => String(item.id)}
        />
      </HourlyForecastContainer>
    </>
  );
}

export default HourlyForecast;
