import React from 'react';
import { Image } from 'react-native';

import LogoImg from '../../assets/logo.png';

import { Container, Content, DateText } from './styles';

const Header: React.FC = () => (
  <Container>
    <Content>
      <Image source={LogoImg} />

      <DateText>16 de abril</DateText>
    </Content>
  </Container>
);
export default Header;
