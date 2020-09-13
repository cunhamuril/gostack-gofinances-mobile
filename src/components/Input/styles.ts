import styled, { css } from 'styled-components/native';

import { IContainerProps } from './interfaces';

export const Field = styled.TextInput.attrs({
  placeholderTextColor: '#969CB3',
})<IContainerProps>`
  margin-top: 16px;

  padding: 16px;
  border-radius: 5px;

  font-size: 14px;
  line-height: 21px;
  font-family: ${({ theme }) => theme.fonts.regular};
  border-width: 1px;
  border-color: transparent;
  background-color: ${({ theme }) => theme.colors.white};

  ${({ isErrored }) =>
    isErrored &&
    css`
      border-color: ${({ theme }) => theme.colors.red};
    `}
`;
