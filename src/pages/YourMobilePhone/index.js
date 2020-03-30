import React, { useEffect, useState } from 'react';
import InputText from '~/components/InputText';
import Button from '~/components/Button';
import { phoneMask, phoneNumberValidation } from '~/utils/Utils';
import {
  Container,
  Text,
  Logo,
  ContainerForm,
  ContainerWhite,
} from './styles';

import logo from '~/assets/logo.png';

export default function YourMobilePhone() {
  const [phone, setPhone] = useState('');
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
  }, []);

  function handleContinue() {
    const value = phoneNumberValidation(phone);
    alert(value);
  }

  function changeText(text) {
    setPhone(text);

    if (text.length >= 15) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }

  return (
    <Container>
      <Logo source={logo} />
      <ContainerForm>
        <Text>Qual é o seu celular?</Text>
        <InputText
          autoCapitalize="none"
          autoCompleteType="off"
          value={phoneMask(phone)}
          label="Insira é seu celular"
          maxLength={15}
          keyboardType="phone-pad"
          onChangeText={(text) => {
            changeText(text);
          }}
        />

        <Button
          style={{ marginBottom: 10 }}
          disabled={disabled}
          onPress={() => handleContinue()}
          text="Continuar"
        />
      </ContainerForm>
      <ContainerWhite />
    </Container>
  );
}
