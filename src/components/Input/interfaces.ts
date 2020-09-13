import { TextInputProps } from 'react-native';

export interface IInputProps extends TextInputProps {
  name: string;
}

export interface IInputValueReference {
  value: string;
}

export interface IInputRef {
  focus(): void;
}

export interface IContainerProps {
  isErrored: boolean;
}
