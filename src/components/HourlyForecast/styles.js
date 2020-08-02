import styled from 'styled-components/native';

export const HourlyForecastContainer = styled.View`
  padding: ${({theme: {metrics}}) => metrics.mediumSize}px 0;
  border-top-width: 1px;
  border-top-color: ${({theme: {colors}}) => colors.white};
  border-bottom-width: 1px;
  border-bottom-color: ${({theme: {colors}}) => colors.white};
`;
