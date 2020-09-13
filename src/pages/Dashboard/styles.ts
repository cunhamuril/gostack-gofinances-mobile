import styled from 'styled-components/native';

export const EmptyMessageWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const EmptyMessageText = styled.Text`
  text-align: center;

  max-width: 300px;

  font-size: 22px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
`;
