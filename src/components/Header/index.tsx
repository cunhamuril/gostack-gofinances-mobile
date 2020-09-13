import React from 'react';
import { Image } from 'react-native';

import LogoImg from '../../assets/logo.png';

import { formatDate } from '../../utils';

import { Container, Content, DateText } from './styles';

const today = new Date();

// eslint-disable-next-line react/prop-types
const Header: React.FC = ({ children }) => (
  <Container>
    <Content>
      <Image source={LogoImg} />

      <DateText>{formatDate(today, "dd 'de' MMMM")}</DateText>
    </Content>

    {children}
  </Container>
);
export default Header;
