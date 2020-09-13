import React from 'react';
import { TextInputProps } from 'react-native';

import { Field } from './styles';

const Input: React.FC<TextInputProps> = props => {
  return <Field {...props} />;
};

export default Input;
