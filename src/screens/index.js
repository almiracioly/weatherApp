import React from 'react';
import '../configs/stringExtension';
import useLocation from '../main/hooks/useLocation';
import useWeather from '../main/hooks/useWeather';

import BackgroundImage from '../components/BackgroundImage';
import {Wrapper, Main, HourlyForecastsContainer} from './styles';
import WeatherResume from '../components/WeatherResume';
import HourlyForecast from '../components/HourlyForecast';
import Spacer from '../components/shared/Spacer';
import DailyForecasts from '../components/DailyForecasts';
import {Text} from 'react-native';
import CurrentDayResume from '../components/CurrentDayResume';
import AdditionalWeatherInfo from '../components/AdditionalWeatherInfo';

function WeatherApp() {
  const weather = useWeather();
  const location = useLocation({lat: -9.6622452, lon: -35.7561595});

  if (weather.error) return <Text>Alguma coisa deu errado...</Text>;
  return (
    <>
      <BackgroundImage />
      {!weather.isLoading ? (
        <Wrapper>
          <Spacer value={20} />
          <WeatherResume
            cityName={location.city !== '' ? location.city : '---'}
            currentWeather={weather.current.weather[0].description.toTitleCase()}
            temperatureValue={Math.floor(weather.current.temp)}
          />
          <CurrentDayResume />
          <Spacer value={10} />
          <HourlyForecastsContainer>
            <HourlyForecast forecasts={weather.hourly} />
          </HourlyForecastsContainer>
          <Main>
            <DailyForecasts forecasts={weather.daily} />
            <AdditionalWeatherInfo weatherInfo={weather.current} />
          </Main>
        </Wrapper>
      ) : (
        <Text>Carregando...</Text>
      )}
    </>
  );
}

export default WeatherApp;
