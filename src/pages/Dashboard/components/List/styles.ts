import styled from 'styled-components/native';

import { IValueListProps } from './interfaces';

export const Container = styled.View`
  margin: 87px 0 280px;
`;

export const Title = styled.Text`
  margin: 0 24px 24px;

  color: #000;
  font-size: 20px;
  line-height: 30px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const ListItemContainer = styled.View`
  margin: 0 24px 16px;
  padding: 17px 24px 18px;

  border-radius: 5px;

  background-color: ${({ theme }) => theme.colors.white};
`;

export const Description = styled.Text`
  font-size: 14px;
  line-height: 21px;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Value = styled.Text<IValueListProps>`
  font-size: 20px;
  line-height: 30px;
  font-family: ${({ theme }) => theme.fonts.regular};

  color: ${({ theme, type }) =>
    type === 'income' ? theme.colors.green : theme.colors.red};
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;

  margin-top: 19px;
`;

export const FooterText = styled.Text`
  font-size: 14px;
  line-height: 21px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
`;
