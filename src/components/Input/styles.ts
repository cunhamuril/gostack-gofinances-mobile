import styled from 'styled-components/native';

export const Field = styled.TextInput.attrs({
  placeholderTextColor: '#969CB3',
})`
  margin-top: 16px;

  padding: 16px;
  border-radius: 5px;

  font-size: 14px;
  line-height: 21px;
  font-family: ${({ theme }) => theme.fonts.regular};
  background-color: ${({ theme }) => theme.colors.white};
`;
