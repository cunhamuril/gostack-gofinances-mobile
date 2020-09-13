import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, Text } from './styles';

const Button: React.FC<RectButtonProperties> = ({ children, ...props }) => {
  return (
    <Container {...props}>
      <Text>{children}</Text>
    </Container>
  );
};

export default Button;
