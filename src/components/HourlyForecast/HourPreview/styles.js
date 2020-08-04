import styled from 'styled-components/native';

export const Col = styled.View`
  align-items: center;
  padding-right: ${({theme: {metrics}}) => metrics.mediumSize}px;
`;

export const HourText = styled.Text`
  font-size: ${({theme: {metrics}}) => metrics.nextFontSizeValue(0.6)};
  color: ${({theme: {colors}}) => colors.white};
  padding-bottom: ${({theme: {metrics}}) => metrics.smallSize};
`;

export const TemperatureText = styled(HourText)`
  padding: 0;
`;
