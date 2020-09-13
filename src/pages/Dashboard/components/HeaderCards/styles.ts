import styled, { css } from 'styled-components/native';

import { IStyleProps } from './interfaces';

export const Container = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  width: 100%;

  padding: 0 25px;
  margin-top: -46px;
  transform: translateY(46px);
`;

export const Card = styled.View<IStyleProps>`
  width: 300px;
  height: 200px;
  border-radius: 5px;

  padding: 18px 23px 42px;

  background-color: ${({ theme }) => theme.colors.white};

  ${({ isFirst }) =>
    !isFirst &&
    css`
      margin-left: 16px;
    `}

  ${({ isTotal, theme }) =>
    isTotal &&
    css`
      margin-right: 46px;
      background-color: ${theme.colors.secondary};
    `}
`;

export const Header = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text<IStyleProps>`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.regular};

  color: ${({ theme, isTotal }) =>
    isTotal ? theme.colors.white : theme.colors.title};
`;

export const Value = styled.Text<IStyleProps>`
  font-size: 30px;
  line-height: 45px;
  font-family: ${({ theme }) => theme.fonts.medium};

  color: ${({ theme, isTotal }) =>
    isTotal ? theme.colors.white : theme.colors.title};
`;

export const Date = styled.Text<IStyleProps>`
  font-size: 12px;
  line-height: 18px;
  font-family: ${({ theme }) => theme.fonts.regular};

  color: ${({ theme, isTotal }) =>
    isTotal ? theme.colors.white : theme.colors.text};
`;
