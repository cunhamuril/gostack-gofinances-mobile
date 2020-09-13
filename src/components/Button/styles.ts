import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  height: 50px;
  border-radius: 5px;

  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const Text = styled.Text`
  font-size: 14px;
  line-height: 21px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.white};
`;
