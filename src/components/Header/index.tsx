import React from 'react';
import { Image } from 'react-native';

import LogoImg from '../../assets/logo.png';

import { Container, Content, DateText } from './styles';

// eslint-disable-next-line react/prop-types
const Header: React.FC = ({ children }) => (
  <Container>
    <Content>
      <Image source={LogoImg} />

      <DateText>16 de abril</DateText>
    </Content>

    {children}
  </Container>
);
export default Header;
