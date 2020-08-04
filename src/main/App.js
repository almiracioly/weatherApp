import React from 'react';
import '../configs/stringExtension';
import ThemeProvider from './ThemeProvider';
import BackgroundImage from '../components/BackgroundImage';
import {Wrapper, Main, HourlyForecastsContainer} from './styles';
import WeatherResume from '../components/WeatherResume';
import HourlyForecast from '../components/HourlyForecast';
import Spacer from '../components/shared/Spacer';
import DailyForecasts from '../components/DailyForecasts';
import useWeather from './hooks/useWeather';
import {Text} from 'react-native';
import CurrentDayResume from '../components/CurrentDayResume';
import AdditionalWeatherInfo from '../components/AdditionalWeatherInfo';
import useLocation from './hooks/useLocation';

function App() {
  const weather = useWeather();
  const location = useLocation({lat: -9.6622452, lon: -35.7561595});

  if (weather.error) return <Text>Alguma coisa deu errado...</Text>;
  return (
    <ThemeProvider>
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
    </ThemeProvider>
  );
}

export default App;
