import styled from 'styled-components/native';

export const Row = styled.View`
  flex-direction: row;
  ${({fullWidth}) => (fullWidth ? `width: 100%` : null)};
  ${({jContent}) => (jContent ? `justify-content: ${jContent}` : null)}
  ${({aItems}) => (aItems ? `align-items: ${aItems}` : null)}
`;

export const TemperatureContainer = styled(Row)`
  width: 35%;
  justify-content: flex-end;
`;

export const WeekdayContainer = styled.View`
  width: 35%;
`;

export const WeekdayText = styled.Text`
  font-size: ${({theme: {metrics}}) => metrics.nextFontSizeValue(1)};
  color: ${({theme: {colors}}) => colors.white};
`;

export const MinMaxTemperatureText = styled(WeekdayText)`
  color: ${({min, theme: {colors}}) => (min ? colors.grey : colors.white)};
  ${({max, theme: {metrics}}) =>
    max ? `padding-right: ${metrics.extraLargeSize}px` : null};
`;
