import styled, { css } from 'styled-components/native';

import { IHeaderCardProps } from './interfaces';

export const HeaderCardContainer = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  width: 100%;

  padding: 0 25px;
  margin-top: -46px;
  transform: translateY(46px);
`;

export const HeaderCard = styled.View<IHeaderCardProps>`
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

export const HeaderCardTop = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

export const HeaderCardTitle = styled.Text<IHeaderCardProps>`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.regular};

  color: ${({ theme, isTotal }) =>
    isTotal ? theme.colors.white : theme.colors.title};
`;

export const HeaderCardMoneyContainer = styled.View``;

export const HeaderCardMoneyValue = styled.Text<IHeaderCardProps>`
  font-size: 30px;
  line-height: 45px;
  font-family: ${({ theme }) => theme.fonts.medium};

  color: ${({ theme, isTotal }) =>
    isTotal ? theme.colors.white : theme.colors.title};
`;

export const HeaderCardMoneyHistory = styled.Text<IHeaderCardProps>`
  font-size: 12px;
  line-height: 18px;
  font-family: ${({ theme }) => theme.fonts.regular};

  color: ${({ theme, isTotal }) =>
    isTotal ? theme.colors.white : theme.colors.text};
`;
