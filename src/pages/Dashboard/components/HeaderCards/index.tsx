import React from 'react';
import { View, Image } from 'react-native';

import incomeIcon from '../../../../assets/icons/income/income.png';
import outcomeIcon from '../../../../assets/icons/outcome/outcome.png';
import currencySignWhiteIcon from '../../../../assets/icons/currency-sign/currency-sign-white.png';

import { Container, Card, Header, Title, Date, Value } from './styles';

const HeaderCards: React.FC = () => (
  <Container>
    <Card isFirst>
      <Header>
        <Title>Entradas</Title>
        <Image source={incomeIcon} />
      </Header>
      <View>
        <Value>R$ 17.400,00</Value>
        <Date>Última entrada dia 13 de abril</Date>
      </View>
    </Card>

    <Card>
      <Header>
        <Title>Saídas</Title>
        <Image source={outcomeIcon} />
      </Header>
      <View>
        <Value>R$ 1.259,00</Value>
        <Date>Última saída dia 13 de abril</Date>
      </View>
    </Card>

    <Card isTotal>
      <Header>
        <Title isTotal>Total</Title>
        <Image source={currencySignWhiteIcon} />
      </Header>
      <View>
        <Value isTotal>R$ 16.141,00</Value>
        <Date isTotal>01 à 16 de abril</Date>
      </View>
    </Card>
  </Container>
);

export default HeaderCards;
