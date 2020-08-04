import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  background-color: #4e4e4e;
  justify-content: space-around;
`;

export const Text = styled.Text`
  font-size: ${({theme: {metrics}}) => metrics.nextFontSizeValue(2)};
  font-weight: bold;
  color: ${({theme: {colors}}) => colors.white};
  text-align: center;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${({theme: {colors}}) => colors.white};
  border-radius: 3;
  align-items: center;
  padding: ${({theme: {metrics}}) => metrics.mediumSize}px;
`;

export const ButtonText = styled.Text`
  font-size: ${({theme: {metrics}}) => metrics.nextFontSizeValue(1)};
  font-weight: bold;
  color: ${({theme: {colors}}) => colors.lightPurple};
`;

export const Illustration = styled.Image.attrs({
  source: require('../../assets/illustrations/exclamation.png'),
})``;
