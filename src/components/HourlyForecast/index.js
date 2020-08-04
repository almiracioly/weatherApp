import React from 'react';
import HourPreview from './HourPreview';
import {HourlyForecastContainer} from './styles';
import {FlatList} from 'react-native';
import {hourlyForecastsFormatter} from './formatters';

function HourlyForecast({forecasts}) {
  return (
    <>
      <HourlyForecastContainer>
        <FlatList
          horizontal
          data={hourlyForecastsFormatter(forecasts)}
          renderItem={({item}) => <HourPreview {...item} />}
          keyExtractor={(item) => String(item.id)}
        />
      </HourlyForecastContainer>
    </>
  );
}

export default HourlyForecast;
