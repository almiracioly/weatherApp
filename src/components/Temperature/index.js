import React from 'react';
import styled from 'styled-components/native';

function Temperature({value}) {
  return <TemperatureText>{value}º</TemperatureText>;
}

export default Temperature;

const TemperatureText = styled.Text`
  font-size: ${({theme: {metrics}}) => metrics.nextFontSizeValue(4)}px;
  color: ${({theme: {colors}}) => colors.white};
`;
