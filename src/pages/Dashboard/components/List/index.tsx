import React from 'react';
import { FlatList } from 'react-native';

import { formatDate, formatValue } from '../../../../utils';

import { IListProps, ITransactions } from './interfaces';

import {
  Container,
  Title,
  ListItemContainer,
  Description,
  Value,
  Footer,
  FooterText,
} from './styles';

const ListItem = ({ item }: ITransactions) => (
  <ListItemContainer>
    <Description>{item.title}</Description>
    <Value type={item.type}>
      {item.type === 'income' ? `R$ ${item.value}` : `- R$${item.value}`}
    </Value>

    <Footer>
      <FooterText>{item.category.title}</FooterText>
      <FooterText>13/04/2020</FooterText>
    </Footer>
  </ListItemContainer>
);

const List: React.FC<IListProps> = ({ data }) => (
  <Container>
    <Title>Listagem</Title>

    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={ListItem}
    />
  </Container>
);

export default List;
