import React from 'react';
import ThemeProvider from './ThemeProvider';
import BackgroundImage from '../components/BackgroundImage';
import {Wrapper, Main} from './styles';
import WeatherResume from '../components/WeatherResume';
import HourlyForecast from '../components/HourlyForecast';
import Spacer from '../components/shared/Spacer';
import DailyForecasts from '../components/DailyForecasts';
import useWeather from './hooks/useWeather';
import {Text} from 'react-native';
import CurrentDayResume from '../components/CurrentDayResume';

function App() {
  const weather = useWeather();

  if (weather.error) return <Text>Alguma coisa deu errado...</Text>;
  return (
    <ThemeProvider>
      <BackgroundImage />
      {!weather.isLoading ? (
        <Wrapper>
          <Spacer value={20} />
          <WeatherResume
            cityName="Maceió"
            currentWeather={weather.current.weather[0].description}
            temperatureValue={Math.floor(weather.current.temp)}
          />
          <CurrentDayResume />
          <Spacer value={10} />
          <Main>
            <HourlyForecast forecasts={weather.hourly} />
            <DailyForecasts forecasts={weather.daily} />
          </Main>
        </Wrapper>
      ) : (
        <Text>Carregando...</Text>
      )}
    </ThemeProvider>
  );
}

export default App;
