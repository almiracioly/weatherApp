import React from 'react';
import styled from 'styled-components/native';

export const Row = styled.View`
  flex-direction: row;
  ${({fullWidth}) => (fullWidth ? `width: 100%` : null)};
  ${({jContent}) => (jContent ? `justify-content: ${jContent}` : null)}
`;

export const WeekdayText = styled.Text`
  font-size: ${({theme: {metrics}}) => metrics.nextFontSizeValue(1)};
  color: ${({theme: {colors}}) => colors.white};
`;

export const TodayText = styled(WeekdayText)`
  font-size: ${({theme: {metrics}}) => metrics.nextFontSizeValue(0.6)};
  color: ${({theme: {colors}}) => colors.white};
  padding-left: ${({theme: {metrics}}) => metrics.mediumSize}px;
`;

export const MinMaxTemperatureText = styled(WeekdayText)`
  color: ${({min, theme: {colors}}) => (min ? colors.grey : colors.white)};
  ${({max, theme: {metrics}}) =>
    max ? `padding-right: ${metrics.extraLargeSize}px` : null};
`;

export const HourlyForecastContainer = styled.View`
  padding: ${({theme: {metrics}}) => metrics.mediumSize}px 0;
  border-top-width: 2px;
  border-top-color: ${({theme: {colors}}) => colors.white};
  border-bottom-width: 2px;
  border-bottom-color: ${({theme: {colors}}) => colors.white};
`;
