import React from 'react';
import {FlatList} from 'react-native';
import DailyForecast from './DailyForecast';
import {dailyForecastsFormatter} from './formatters';

function DailyForecasts({forecasts}) {
  return (
    <FlatList
      data={dailyForecastsFormatter(forecasts)}
      keyExtractor={(item) => String(item.id)}
      renderItem={({item}) => <DailyForecast {...item} />}
    />
  );
}

export default DailyForecasts;
