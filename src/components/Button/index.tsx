import React from 'react';

import { IButtonProps } from './interfaces';

import { Container, Text } from './styles';

const Button: React.FC<IButtonProps> = ({ children, ...props }) => {
  return (
    <Container {...props}>
      <Text>{children}</Text>
    </Container>
  );
};

export default Button;
