import React from 'react';
import {FlatList} from 'react-native';
import {DAILY_FORECASTS} from './DailyForecast/mockData';
import DailyForecast from './DailyForecast';

function DailyForecasts() {
  return (
    <FlatList
      data={DAILY_FORECASTS}
      keyExtractor={(item) => String(item.id)}
      renderItem={({item}) => <DailyForecast {...item} />}
    />
  );
}

export default DailyForecasts;
