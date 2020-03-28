import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, Logo } from './styles';
import logo from '../../assets/logo.png';

export default function Splash() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Main');
    }, 2000);
  }, []);

  return (
    <Container>
      <Logo source={logo} />
    </Container>
  );
}
