import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  padding: 0 ${({theme: {metrics}}) => metrics.mediumSize}px;
`;

export const Main = styled.View`
  width: 100%;
`;
