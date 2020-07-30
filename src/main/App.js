import React from 'react';
import ThemeProvider from './ThemeProvider';
import BackgroundImage from '../components/BackgroundImage';
import {Wrapper, Main} from './styles';
import WeatherResume from '../components/WeatherResume';
import HourlyForecast from '../components/HourlyForecast';
import Spacer from '../components/shared/Spacer';

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
        </Main>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
