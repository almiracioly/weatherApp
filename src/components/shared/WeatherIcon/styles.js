import styled from 'styled-components/native';

export const Image = styled.Image`
  width: ${({theme: {metrics}}) => metrics.getWidthFromDP('14%')};
  height: ${({theme: {metrics}}) => metrics.getWidthFromDP('14%')};
`;
