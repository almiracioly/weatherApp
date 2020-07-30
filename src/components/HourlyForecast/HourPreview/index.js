import React from 'react';
import {Col, HourText, TemperatureText} from './styles';

function HourPreview({hourText, icon, temperatureText}) {
  return (
    <Col>
      <HourText>{hourText}</HourText>
      <HourText>{icon}</HourText>
      <TemperatureText>{temperatureText}º</TemperatureText>
    </Col>
  );
}

export default HourPreview;
