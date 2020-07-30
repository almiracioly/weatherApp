import styled from 'styled-components/native';
import backgroundImage from '../../assets/imgs/cloudy.png';

export const BgImage = styled.Image.attrs({
  source: backgroundImage,
})`
  width: 100%;
  height: 100%;
  position: absolute;
`;
