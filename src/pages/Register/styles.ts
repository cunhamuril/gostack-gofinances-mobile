import styled, { css } from 'styled-components/native';
import { transparentize } from 'polished';

import { ISelectProps } from './interfaces';

export const Container = styled.View`
  padding: 24px;
`;

export const Title = styled.Text`
  font-size: 20px;
  line-height: 30px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Form = styled.View`
  margin-top: 8px;
`;

export const SelectWrapper = styled.View`
  flex-direction: row;
  align-items: stretch;

  margin-top: 16px;

  height: 50px;
`;

export const Select = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})<ISelectProps>`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 15px 0;
  border-radius: 5px;

  border-width: 1.5px;
  border-style: solid;
  border-color: ${({ theme }) => transparentize(0.7, theme.colors.text)};

  ${({ theme, income, outcome, selected }) => {
    if (income) {
      return css`
        margin-right: 4px;
        background-color: ${selected
          ? transparentize(0.9, theme.colors.green)
          : 'transparent'};
      `;
    }

    if (outcome) {
      return css`
        margin-left: 4px;
        background-color: ${selected
          ? transparentize(0.9, theme.colors.red)
          : 'transparent'};
      `;
    }
  }}

  ${({ selected }) =>
    selected &&
    css`
      border-color: transparent;
    `}
`;

export const SelectIcon = styled.Image`
  margin-right: 8px;

  width: 26px;
  height: 26px;
`;

export const SelectText = styled.Text`
  font-size: 14px;
  line-height: 21px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.title};
`;
