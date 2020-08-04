import styled from 'styled-components/native';

export const CityName = styled.Text`
  font-size: ${({theme: {metrics}}) => metrics.nextFontSizeValue(2)};
  color: ${({theme: {colors}}) => colors.white};
`;

export const CurrentWeather = styled.Text`
  font-size: ${({theme: {metrics}}) => metrics.nextFontSizeValue(1)};
  color: ${({theme: {colors}}) => colors.white};
`;
