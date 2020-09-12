import styled from 'styled-components/native';
import { transparentize } from 'polished';

// import { colors, fonts } from '../../theme';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 25px 23px 31px;
`;

export const DateText = styled.Text`
  color: ${({ theme }) => transparentize(0.4, theme.colors.white)};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
