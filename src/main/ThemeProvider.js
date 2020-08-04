import React from 'react';
import {ThemeProvider} from 'styled-components';
import appStylesa from '../styles';

export default (props) => (
  <ThemeProvider theme={{...appStylesa}}>{props.children}</ThemeProvider>
);
