import React from 'react';
import styled from 'styled-components/native';
import moment from 'moment';

function AdditionalWeatherInfo({weatherInfo}) {
  return (
    <Wrapper>
      <Col fullWidth>
        <InfoTitle>O SOL NASCE</InfoTitle>
        <InfoValue>
          {moment.unix(weatherInfo.sunrise).format('HH:mm')}
        </InfoValue>
      </Col>
      <Col fullWidth>
        <InfoTitle>O SOL SE PÕE</InfoTitle>
        <InfoValue>{moment.unix(weatherInfo.sunset).format('HH:mm')}</InfoValue>
      </Col>
      <Col fullWidth>
        <InfoTitle>CHANCE DE CHUVA</InfoTitle>
        <InfoValue>20%</InfoValue>
      </Col>
      <Col fullWidth>
        <InfoTitle>UMIDADE</InfoTitle>
        <InfoValue>{weatherInfo.humidity}%</InfoValue>
      </Col>
      <Col fullWidth>
        <InfoTitle>VENTO</InfoTitle>
        <InfoValue>{(weatherInfo.wind_speed * 3.6).toFixed(2)} km/h</InfoValue>
      </Col>
      <Col fullWidth>
        <InfoTitle>SENSAÇÃO TÉRMICA</InfoTitle>
        <InfoValue>{Math.floor(weatherInfo.feels_like)}º</InfoValue>
      </Col>
      <Col fullWidth>
        <InfoTitle>VISIBILIDADE</InfoTitle>
        <InfoValue>{weatherInfo.visibility / 1000} km</InfoValue>
      </Col>
    </Wrapper>
  );
}

export default AdditionalWeatherInfo;

const Wrapper = styled.View`
  padding: 0 ${({theme: {metrics}}) => metrics.mediumSize}px;
`;

export const Col = styled.View`
  ${({fullWidth}) => (fullWidth ? `width: 100%` : null)};
  ${({jContent}) => (jContent ? `justify-content: ${jContent}` : null)}
  ${({aItems}) =>
    aItems ? `align-items: ${aItems}` : null}
  border-bottom-width: 1px;
  border-bottom-color: ${({theme: {colors}}) => colors.white};
  padding: ${({theme: {metrics}}) => metrics.smallSize}px 0;
`;

const InfoTitle = styled.Text`
  font-size: ${({theme: {metrics}}) => metrics.nextFontSizeValue(1)};
  color: ${({theme: {colors}}) => colors.grey};
`;

const InfoValue = styled.Text`
  font-size: ${({theme: {metrics}}) => metrics.nextFontSizeValue(2)};
  color: ${({theme: {colors}}) => colors.white};
`;
