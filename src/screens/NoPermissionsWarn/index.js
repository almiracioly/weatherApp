import React from 'react';
import {Wrapper, Text, Button, ButtonText, Illustration} from './styles';

function NoPermissionsWarn({onPress}) {
  return (
    <Wrapper>
      <Text>WeatherApp precisa da sua permissão de acesso à localização</Text>
      <Button onPress={onPress}>
        <ButtonText>Conceder Acesso</ButtonText>
      </Button>
      <Illustration />
    </Wrapper>
  );
}

export default NoPermissionsWarn;
