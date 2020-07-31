import React from 'react';
import ThemeProvider from './ThemeProvider';
import BackgroundImage from '../components/BackgroundImage';
import {Wrapper, Main} from './styles';
import WeatherResume from '../components/WeatherResume';
import HourlyForecast from '../components/HourlyForecast';
import Spacer from '../components/shared/Spacer';
import DailyForecasts from '../components/DailyForecasts';
import {ScrollView} from 'react-native';

function App() {
  return (
    <ThemeProvider>
      <BackgroundImage />
      <Wrapper>
        <Spacer value={20} />
        <WeatherResume
          cityName="Maceió"
          currentWeather="Nublado"
          temperatureValue="24"
        />
        <Spacer value={10} />
        <Main>
          <HourlyForecast />
          <DailyForecasts />
        </Main>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
