import React from 'react';
import {Row, WeekdayText, MinMaxTemperatureText, TodayText} from './styles';
import moment from 'moment';

function CurrentDayResume() {
  return (
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
  );
}

export default CurrentDayResume;
